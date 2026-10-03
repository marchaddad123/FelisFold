"""Build transparent whole-cat atlases from the licensed footage manifest.

Offline tools only: ffmpeg, Pillow, numpy and onnxruntime. No model or video
is shipped to the browser. See docs/cat-visits.md for setup and provenance.
"""

import argparse
import hashlib
import json
import subprocess
from collections import deque
from pathlib import Path

import numpy as np
import onnxruntime as ort
from PIL import Image, ImageChops, ImageDraw, ImageFilter


def foreground_mask(image, session, strong_foreground):
    pixels = np.asarray(image.resize((320, 320)), dtype=np.float32) / 255
    pixels = (pixels - np.array([.485, .456, .406], dtype=np.float32)) / np.array(
        [.229, .224, .225], dtype=np.float32
    )
    prediction = session.run(None, {
        session.get_inputs()[0].name: pixels.transpose(2, 0, 1)[None]
    })[0][0, 0]
    prediction = (prediction - prediction.min()) / max(
        float(prediction.max() - prediction.min()), 1e-6
    )
    mask = Image.fromarray((prediction * 255).astype(np.uint8)).resize(
        image.size, Image.Resampling.LANCZOS
    )
    if not strong_foreground:
        return mask.point(lambda alpha: max(0, min(255, round((alpha - 8) * 255 / 239))))

    # Remove weak, disconnected scenery while preserving the soft fur edge
    # around the largest confident foreground component.
    binary = np.asarray(mask) > 230
    visited = np.zeros(binary.shape, dtype=bool)
    height, width = binary.shape
    largest_component = []
    for row, column in zip(*np.where(binary)):
        if visited[row, column]:
            continue
        queue = deque([(int(row), int(column))])
        visited[row, column] = True
        component = []
        while queue:
            current_row, current_column = queue.popleft()
            component.append((current_row, current_column))
            for next_row, next_column in [
                (current_row - 1, current_column), (current_row + 1, current_column),
                (current_row, current_column - 1), (current_row, current_column + 1)
            ]:
                if (0 <= next_row < height and 0 <= next_column < width
                        and binary[next_row, next_column]
                        and not visited[next_row, next_column]):
                    visited[next_row, next_column] = True
                    queue.append((next_row, next_column))
        if len(component) > len(largest_component):
            largest_component = component
    core = np.zeros(binary.shape, dtype=np.uint8)
    for row, column in largest_component:
        core[row, column] = 255
    support = Image.fromarray(core).filter(ImageFilter.MaxFilter(15))
    return ImageChops.multiply(mask, support)


def build_sequence(name, settings, workspace, destination, session, ffmpeg):
    frame_directory = workspace / 'frames' / name
    frame_directory.mkdir(parents=True, exist_ok=True)
    # Clear only previously extracted frames in this explicitly named directory.
    for frame_path in frame_directory.glob('frame-*.png'):
        frame_path.unlink()
    subprocess.run([
        ffmpeg, '-hide_banner', '-loglevel', 'error', '-ss', str(settings['start']),
        '-i', str(workspace / settings['file']), '-t', str(settings['duration']),
        '-vf', settings['filter'], str(frame_directory / 'frame-%03d.png')
    ], check=True)
    frames, bounds = [], []
    for frame_path in sorted(frame_directory.glob('frame-*.png')):
        frame = Image.open(frame_path).convert('RGB')
        mask = foreground_mask(frame, session, name in ['walk', 'jump'])
        if name == 'play':
            ImageDraw.Draw(mask).rectangle((0, 0, 480, 170), fill=0)
        box = mask.point(lambda alpha: 255 if alpha > 48 else 0).getbbox()
        if not box:
            raise ValueError(f'No foreground in {frame_path}')
        frame.putalpha(mask)
        frames.append(frame)
        bounds.append(box)
    if not frames:
        raise ValueError(f'No extracted frames for {name}')
    widths = np.array([box[2] - box[0] for box in bounds])
    heights = np.array([box[3] - box[1] for box in bounds])
    scales = np.minimum(300 / widths, 185 / heights)
    if name == 'feed':
        union = (min(box[0] for box in bounds), min(box[1] for box in bounds),
                 max(box[2] for box in bounds), max(box[3] for box in bounds))
        bounds = [union] * len(frames)
    if name in ['feed', 'play']:
        scales[:] = min(float(np.median(scales)), 185 / float(heights.max()))
    maximum_bottom = max(box[3] for box in bounds)
    if name == 'jump':
        scales[:] = min(300 / float(widths.max()),
                        180 / (maximum_bottom - min(box[1] for box in bounds)))
    canvases = []
    for frame, box, scale in zip(frames, bounds, scales):
        canvas = Image.new('RGBA', (320, 208))
        resized = frame.resize((round(frame.width * scale), round(frame.height * scale)),
                               Image.Resampling.LANCZOS)
        left = round(160 - (box[0] + box[2]) * .5 * scale)
        ground = maximum_bottom if name == 'jump' else box[3]
        canvas.alpha_composite(resized, (left, round(196 - ground * scale)))
        canvases.append(canvas)
    sheet_records = []
    for sheet_index in range((len(canvases) + 63) // 64):
        sheet = Image.new('RGBA', (2560, 1664))
        for tile_index, canvas in enumerate(canvases[sheet_index * 64:(sheet_index + 1) * 64]):
            sheet.alpha_composite(canvas, ((tile_index % 8) * 320, (tile_index // 8) * 208))
        sheet_path = destination / f'{name}-{sheet_index + 1}.webp'
        sheet.save(sheet_path, quality=86, method=6)
        sheet_records.append({'file': sheet_path.name,
                              'sha256': hashlib.sha256(sheet_path.read_bytes()).hexdigest()})
    print(f'{name}: {len(canvases)} complete-cat frames', flush=True)
    return {**settings, 'sourceSha256': hashlib.sha256(
        (workspace / settings['file']).read_bytes()).hexdigest(),
        'frameCount': len(canvases), 'sheets': sheet_records}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--workspace', default='qa-artifacts/cat-footage')
    parser.add_argument('--model', default='qa-artifacts/cat-footage/u2netp.onnx')
    parser.add_argument('--ffmpeg', default='ffmpeg')
    parser.add_argument('--sequence', choices=['feed', 'walk', 'play', 'jump'])
    arguments = parser.parse_args()
    manifest = json.loads(Path('scripts/cat-footage.json').read_text(encoding='utf-8-sig'))
    options = ort.SessionOptions()
    options.intra_op_num_threads = 2
    session = ort.InferenceSession(arguments.model, options, providers=['CPUExecutionProvider'])
    destination = Path('public/images/cat/footage')
    destination.mkdir(parents=True, exist_ok=True)
    credits_path = destination / 'credits.json'
    credits = json.loads(credits_path.read_text()) if credits_path.exists() else {
        'fps': 25, 'frameWidth': 320, 'frameHeight': 208, 'columns': 8, 'framesPerSheet': 64,
        'licenseUrl': 'https://www.pexels.com/license/',
        'processing': 'Non-generative U2NetP foreground matting, framing and WebP encoding.',
        'sequences': {}
    }
    for name, settings in manifest.items():
        if not arguments.sequence or arguments.sequence == name:
            credits['sequences'][name] = build_sequence(
                name, settings, Path(arguments.workspace), destination, session, arguments.ffmpeg)
            credits['sequences'][name]['mattingModel'] = Path(arguments.model).name
            credits['sequences'][name]['modelSha256'] = hashlib.sha256(
                Path(arguments.model).read_bytes()).hexdigest()
    credits_path.write_text(json.dumps(credits, indent=2) + '\n', encoding='utf-8')


if __name__ == '__main__':
    main()
