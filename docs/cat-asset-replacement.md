# Previous cat asset research

**Superseded:** the rejected rig has now been replaced with free licensed, whole-cat video sequences. No paid pack or purchase is required. See [the current implementation and its limitations](cat-visits.md). The research below is historical.

The animated photo cutout rig was rejected by the owner. A cat must be one coherent animated character, with natural body movement and authored walk, run, feeding and jump sequences. Do not recreate the rig from separately rotated photographic limbs or treat a few unrelated poses as a walking animation.

## Completed photo change

`EarShapeComparison.vue` now uses real photographs through the shared `EditorialPhoto` component: Gundula Vogel’s existing grey Scottish Fold photograph and Anton Porsche’s upright-ear domestic-cat portrait. Both ear shapes remain visible in square crops. Captions, alt text and the distinction between ear shape, ancestry and genotype remain localized in all four languages. Photographer and license links remain visible.

The new portrait is 1400 × 927 and uses CC BY-SA 4.0. Its provenance and technical changes are recorded in `public/images/editorial/credits.json` and `docs/editorial-media-credits.md`. The import script includes the portrait so reimporting media retains its record. No Lotus photograph was altered.

## Asset review

| Existing asset                                                                                    | Findings                                                                                                                                                                                                                                                                               | Suitability                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [JonasDichelle’s cat](https://blendswap.com/blend/18519)                                          | CC BY 3.0; original Blender model uses dynamic hair and supplies walk and run cycles. Its public FBX mirror includes the original license.                                                                                                                                             | Missing authored feeding and jumping; original download requires sign-in. It does not provide the complete requested behavior set.                                                                                    |
| [Openworld Dart cat](https://github.com/forthtemple/openworlddart)                                | Downloaded and inspected the public GLB: one mesh with 329 vertices; clips named `attack`, `dead`, `die`, `idle`, `walk`.                                                                                                                                                              | Too limited for realistic feeding, running and jumping. Not integrated.                                                                                                                                               |
| [Cats - Simple, Radik Bilalov](https://www.fab.com/listings/4fa9591d-945e-41be-b37b-b39e4539602a) | Listing specifies 50 bones, 11,400 triangles, a mobile model, 100+ authored animations, feeding start/loop/end, running, jumps, bowls and toys. [Creator’s demo](https://www.youtube.com/watch?v=QljG9p20V84) was opened and inspected; demo captures are in the ignored QA directory. | Candidate for the complete replacement. Requires purchased, licensed source files. The marketplace category showed prices starting at $29.99 before tax; confirm the selected tier at checkout. No purchase was made. |

The [Fab Standard License summary](https://www.fab.com/eula) permits incorporating assets into projects and using compatible tools. It prohibits standalone redistribution. Keep original purchased source files out of public source control; choose the final website delivery format after inspecting the supplied model and animation clips.

## Work waiting for the asset

- Inspect actual model topology, materials, animation names, clip lengths and root motion before implementing its renderer.
- Replace `CatActor.vue` and its cutout texture loader with the complete character. Preserve the global visit scheduler, sound preferences, multilingual controls and cleanup behavior.
- Match walking speed to the authored gait. Blend complete clips when approaching food, lowering the head, feeding, finishing and exiting. Align the actual muzzle and bowl, with food disappearing over the eating sequence.
- Reuse authored running and jump clips for ball play, rather than moving a still character through a parabolic path.
- Use the complete cat for the slower theme crossing as well. Theme state must remain immediate and reduced motion must remain supported.
- Inspect full walk, run, feeding and jump cycles in-browser at desktop and 320px widths before accepting the replacement. Adapt behavior tests to the new renderer; do not keep invisible cutout landmarks as a substitute for real contact checks.

The full animated replacement is **not implemented**. The pending question is whether the paid candidate is acceptable and which licensed source files are available. Photo QA and project-check evidence are under `qa-artifacts/cat-replacement/`.

## Verification of the completed photo change

- `npm run check` passed.
- The core journeys and editorial rebuild browser suites passed: 10 tests.
- Twelve photo previews covered all four languages, both themes, English/Arabic at 320px and 1440px, and French/Chinese at 320px. Both photographs loaded with meaningful alt text, intrinsic dimensions, responsive sizes and lazy loading. There were no browser errors, horizontal overflow or WCAG A/AA violations in the comparison section.
- Desktop dark-mode and Arabic mobile previews were visually inspected for ear visibility, labels and credit wrapping. These checks cover the photographs, not acceptance of the existing animated mascot.
