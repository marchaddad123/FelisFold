# Real footage for global cat visits

The rejected photographic limb rig has been removed. `RealisticCat.vue` draws complete photographed cats from locally hosted transparent WebP atlases. Feeding, play and jump footage plays once. The rejected global stroll is removed; walking footage is retained only for the existing theme effect. Original frames are extracted at 25 fps and their anatomy is never reconstructed or rotated in pieces. Lotus is not the mascot and no Lotus photograph was changed.

The player awaits image decoding before a visit or theme crossing starts, uses the parent elapsed-time clock, and redraws only when the frame changes. There is no animation timeout per frame. The loader keeps only the most recent sequence promise; active canvases retain their own images. Failed loads do not show the old rig. Assets load on invitation, scheduled visits or theme-button hover/focus, not during the initial page render.

## Behavior and limits

One global visitor can appear on every page. The first random visit occurs after 12-22 seconds, later visits 45-90 seconds after the previous one ends. Consecutive random actions differ. Toy play and the recorded jump fade in at randomized horizontal and vertical positions below the navigation. Snacks choose one of four physical viewport corners and face inward. Cat and bowl share the same placement and muzzle calibration. The overlay lets pointer events reach the page. Short viewports reduce the frame size to fit. Each visit uses one filmed cat throughout; different visits can feature different cats.

Feeding keeps the camera framing fixed and places a raised bowl at the photographed muzzle. Decorative kibble disappears in ten steps; a heart appears before the cat and bowl fade out. The clip does not contain a walk-to-bowl transition or a filmed head-lift/happy pose. Play uses the actual filmed dangling toy, not a fake ball or synthesized pounce. The jumping clip is a short recorded leap; it does not change into a different walking cat afterward.

Theme state changes immediately. Three unfiltered photographed cats cross for six seconds with a light or dark wipe. These are walking cats, not a claimed filmed running gait; no recoloring filter changes their fur. Reduced motion omits the theme effect and automatic visits; manual invitations show a still feeding frame. Visits cancel on hidden tabs, resize, motion preference changes, dialogs or theme transitions. All timers and listeners are cleaned up. Sound is enabled by default at 25% volume. A trusted click, tap or key press creates/resumes a Web Audio context; each visitor plays the real meow once. A gesture during a visit can enable its sound. Recording failures or browser restrictions never save a permanent mute. Pending decoding cannot play after its visit was cancelled.

The four-language developer menu exposes invitations, visit/sound switches and dismissal, supports Escape and restores focus. It is compiled out of the production UI. Only version-2 developer preferences are restored, and production ignores stored developer switches. The public Sources page keeps footage and sound attribution accessible without the panel.

## Licensed sources and rebuilding

Pexels permits downloading, modification and website use under its [license](https://www.pexels.com/license/). Photographer and sound/license links are visible on the public Sources page and in the developer menu. `scripts/cat-footage.json` contains the direct video URLs, source pages, creators, selected time spans and FFmpeg filters. `public/images/cat/footage/credits.json` also records frame counts, source and output SHA-256 hashes, processing and atlas dimensions.

Download the three original videos using the filenames in the manifest into `qa-artifacts/cat-footage`. Raw videos and the offline model stay in that ignored directory. Install FFmpeg, Python, Pillow, numpy and onnxruntime in an isolated environment. Obtain U2NetP from the [rembg project](https://github.com/danielgatis/rembg), whose code is MIT licensed. This is non-generative foreground segmentation, not an AI-created cat.

Run `python scripts/build-cat-sequences.py --ffmpeg <ffmpeg-path>`. Use `--sequence walk` to rebuild only that action and `--model <onnx-path>` to select the model. The tool writes 320 x 208 frames into 8 x 8 WebP sheets. Compare its frame counts with `app/data/catSequences.ts` after changing a clip. Inspect full playback on light and dark backgrounds; passing timing tests does not prove the animation looks good.

## Verification

Run `npm run check`, `npx playwright test tests/cat-visits.spec.ts`, and `node scripts/cat-visits-visual-qa.mjs` against the production server. Browser tests drive the actual random scheduler, without a production debug button. They check all four snack corners in English and Arabic, muzzle/bowl calibration, gradual depletion, decoded pixels and changing frames, spread-out jump/toy positions, production control removal, audio gesture activation/recovery, navigation, no overlap, cancellation and reduced motion. The existing six-second theme effect is covered as a regression check.

Placement screenshots and accessibility results are written to `qa-artifacts/cat-footage/placements`. Inspect these on light and dark backgrounds, including narrow RTL and short landscape screens. Timing tests do not prove the filmed motion looks good.

The earlier feeding/play browser preview remains at `qa-artifacts/cat-footage/feeding-and-play.mp4` (600 x 240, 25 fps). The approved feeding, play and jump assets have not been regenerated.

Verified on 2026-10-03: `npm run check` passed. The suite completed with 61 passing cases and one paused-clock navigation assertion failure. After adding the missing clock advancement, that navigation case passed on its targeted rerun; all 62 cases have passing results. The eight placement variants reported zero page errors, horizontal overflow, public cat controls or accessibility violations. Actual screenshots were inspected for all four corners, free jump/toy positions, narrow RTL and short landscape layouts. Logs are in `qa-artifacts/cat-footage/random-visits-*.log`.
