# Lotus story and cat artwork refinement

The atlas-based motion described below is retained as provenance. The current global visitor and theme runners use a continuously articulated cat; see [cat-visits.md](cat-visits.md) for the replacement, prompts, assets, and verification.

The story follows the date-and-spine layout inspected at [Stakspan Releases](https://stakspan.vercel.app/releases). It reads from June 2021 to today, in the original ten-stage sequence. A bounded, keyboard-focusable reading area has beginning/today controls. The today control starts at the latest chapter rather than hiding its heading at the very bottom. Additional paragraphs draw exclusively from the existing owner history; uncertain dates, imaging and diagnoses remain uncertain. Five approved real photos have their original captions and an explicit unknown-capture-date note.

The care notebook uses responsive CSS columns: one on mobile, two on tablet and three on wide screens. Each card stays intact. It keeps the original observations, food history, veterinary advice, care ideas and unknowns. Shared cards accept the appropriate heading level.

## Decorative cat assets

These are AI-generated **generic tabby illustrations**, not photographs of Lotus or veterinary patients. No Lotus image was regenerated, retouched or reflected. The built-in imagegen tool produced the artwork. LottieFiles and its [Simple License](https://lottiefiles.com/page/license) were investigated; no Lottie asset or runtime is included. The selected photorealistic artwork uses a transparent WebP sprite atlas and browser-native movement.

| Asset                                     | Intrinsic dimensions | Role                                                                   |
| ----------------------------------------- | -------------------- | ---------------------------------------------------------------------- |
| `public/images/cat/tabby-walk-atlas.webp` | 4608 × 361           | Eight walking phases, followed by four registered head-lowering phases |
| `public/images/cat/tabby-standing.webp`   | 384 × 361            | Initial and settled standing pose                                      |
| `public/images/cat/tabby-eating.webp`     | 384 × 361            | Settled feeding pose and reduced-motion feeding illustration           |
| `public/images/cat/tabby-resting.webp`    | 900 × 355            | Shared curled resting illustration, including the care diagram         |

The atlas loads only after the divider enters view. Movement waits for decoding, measures the real container and destination, matches travel length to a whole number of stride cycles, arrives at the bowl, lowers the head and settles. It runs once. Resizing recalculates the endpoint. Arabic changes travel direction and the decorative sprite's facing direction. Reduced motion renders a settled static pose and can stop an active journey. Observers, preference listeners and animations are cleaned up on navigation. The resting illustration is also reused beside research and in the bed illustration.

## Generation prompts

### Walking atlas

Create a production-ready photorealistic animation sprite atlas for a tasteful editorial cat-health website. One generic silver-grey short-haired tabby domestic cat (NOT Lotus and NOT based on any supplied pet photo), realistic feline anatomy, ordinary small upright ears, natural adult proportions, side profile facing RIGHT, detailed soft fur, restrained studio lighting, clean isolated actual transparent background with no environment, no floor shadow, no bowl, no text or labels. Exact regular 4-column by 3-row grid, twelve equal rectangular cells, fully separated with comfortable empty padding. Identical camera, scale, body position and ground baseline in ALL cells; nose on right, tail on left. Cat fills roughly 85% of each cell width. This is a coherent sprite animation, not unrelated poses. Cells 1 through 8 in reading order: consecutive equally spaced phases of one natural slow four-beat walking cycle with properly articulated shoulders/elbows and hip/hock joints, paws lift and plant in feline sequence, hind paws step toward former front paw position, subtle shoulder movement and tail swing, no running or jumping. Keep body/head silhouette, fur markings, scale and anatomy CONSISTENT across frames. Cells 9 through 12: the same cat stands still with paws planted while progressively lowering its head to eat from an unseen bowl at ground height in front of the forepaws. Frame 9 head normal, 10 lowering a little, 11 almost down, 12 muzzle at eating height. Mouth final position close to right edge. Make every frame anatomically credible, four limbs only, a real cat rather than a mascot, no exaggerated face or giant eyes, no broad cartoon outlines. The grid and frame registration must be exact so the sheet can be split into twelve animation frames.

### Resting illustration

Create one polished photorealistic cutout asset for a warm editorial cat website: a generic adult silver-grey short-haired tabby cat peacefully sleeping in a natural curled resting pose, three-quarter side profile with head toward the right, closed eyes, small ordinary upright ears, chin resting on its forepaws, hindquarters naturally curved, its tail lying around the body along the foreground. Anatomically credible real cat, detailed soft fur, consistent striped grey coat, soft warm natural lighting, no cartoon outlines or exaggerated features. Whole cat visible with comfortable padding. Wide landscape composition approximately 2:1. Actual transparent background, no ground, no backdrop, no pillow, no furniture, no shadow beyond a subtle contact shade within the cat silhouette, no text, no border. This is a generic decorative cat, not Lotus and not a portrait of any real pet.

## Verification

- `npm run check`: formatting, lint, TypeScript and production build.
- Playwright covers chronological order, keyboard scrolling, beginning/today controls, intact masonry cards and narrow-screen reading in all four languages.
- Motion checks cover the bowl endpoint and replay prevention at 320, 390 and 1440 pixels in English and Arabic, resizing, static reduced motion and stopping an active journey when the preference changes.
- `scripts/lotus-story-visual-qa.mjs` captures the story, latest chapter, notebook, care diagram and cats across ten locale/viewport/theme combinations; it checks WCAG A/AA accessibility, browser errors and overflow. Motion captures include the walking and settled eating poses.

Local evidence is stored in the ignored `qa-artifacts/story-refinement/` directory. The artwork is decorative; the sprite is not a clinical gait illustration or a depiction of Lotus's mobility.
