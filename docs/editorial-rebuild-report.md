# FelisFold editorial rebuild report

2 October 2026. Implemented locally; no deployment or publication was performed. The nine supplied references guide design only. Existing research records and verified Lotus history remain authoritative.

1. **Site-wide visual system.** Shared photographic heroes, scrapbook strips, visual guide cards, evidence badges, original SVG explanations, waves, botanical accents and a compact trust strip. Warm cream, forest, sky and rust; serif headings, sans-serif medical copy and short handwritten captions. Pages compose these responsibilities rather than adding a second UI framework.

2. **Home.** Real Lotus hero, six owner questions, Fold/straight-ear explanation, real then/now Mark photos, four photographic health guides, feeding moment, four mix profiles and an evidence strip. Ten meaningful content photographs replace the previous single photo.

3. **Scottish Fold.** Origin photograph, TRPV4 one/two-copy explanation, ear comparison, small-study limitations, practical mobility diagram and life-stage photograph. The original researched sections and citations remain intact; the diagram does not predict an individual cat’s future.

4. **Health.** Irregular photographic topic grid, a prominent warning-sign panel, Lotus’s actual mobility observations and practical home-access guidance. General problems and Fold-related concerns retain separate guide destinations. Owner observations remain distinct from diagnosis.

5. **Nutrition.** Dense editorial columns, food-label checklist, wet/dry/mixed photographs, scale, grooming, water, commercial examples, Lotus’s food history, preparation and ingredient safety, and the next kitchen-entry structure. All existing nutritional guidance remains. Homemade meals are not presented as complete diets or recommended experimental recipes.

6. **Mix index.** Four supported profiles with distinct evidence labels. Lotus uses his real photograph; the other profile cards use explicitly labelled illustrations. Real-life collage, genetics explanation and a single paired-cat moment provide visual breaks.

7. **Mix details.** Known/unknown panels, evidence status, practical care, vet-preparation illustration and full citations. Siamese has real Lotus history and owner observations. Highlander emphasizes its documented genetic case; Munchkin and American Curl retain published-case limitations. Their section plans differ. Generic Fold hero photographs explicitly say they are neither Lotus nor documented mixes.

8. **Lotus.** Only the shared trust strip was added to the page. June 2021, approximately 2.5 months, Kinder, movement and vomiting chronology, food observations, current mobility and all original photographs remain. No history or identity was regenerated.

9. **Sources.** Five source categories, topic browsing, featured references, trust criteria, online-advice cautions and a personal-experience/evidence photo strip. The full original citation registry remains accessible through a direct hero anchor. Source-review dates are not described as veterinary approval.

10. **About.** Real Mark/Lotus hero and current photographs, the existing Lebanon/software-engineer biography, why Lotus led to the site, evidence-first limits and working social/contact links. No fake person or testimonial was introduced.

11. **New imagery.** Seven actual Commons photographs: wet food, kibble, mixed feeding, water, kitchen scale, raw chicken before cooking and garlic. All are local optimized WebP assets with intrinsic dimensions, multilingual captions and source/license links. Existing approved Mark/Lotus and licensed Fold images were reused without generative changes.

12. **External media and licenses.** Every new source, author, license, dimension, download date and modification is recorded in [the media credits](editorial-media-credits.md) and `public/images/editorial/credits.json`. Six photos use CC BY-SA 3.0/4.0; raw chicken is public domain. ShareAlike derivatives retain those licenses. All seven source pages and dimensions pass the media audit. Existing Pexels/Unsplash credits remain in `app/data/cats.ts`. The external-link audit checks 54 URLs: 11 existing Pexels URLs return automated-access 403 responses and remain unverified by that checker; existing documented bot-protected research URLs retain explicit exceptions. No images are hotlinked.

13. **Food/product verification.** Equilibrio Adult Cats: Total Alimentos, dry, adult, complete food, manufacturer technical sheet; Lotus ate the brand but his historical formula is unconfirmed. Royal Canin Instinctive Loaf: manufacturer’s UK adult complete wet-food example. Eminent: Mark’s remembered stomach-focused food, exact formula/bag/life-stage/adequacy unknown. No benefits are inferred from marketing. Packaging images were not added because reuse permission was not established; the real-food photos show texture/setup, not those products. No purchase links, prices, rankings or affiliates.

14. **Animation.** The later global cat rebuild replaces the page-local sprite journeys with quiet `CatRestingDivider` illustrations and one shared, continuously articulated visitor. Current behavior and asset provenance are documented in [cat-visits.md](cat-visits.md).

15. **Reduced motion.** The illustration stays static, the observer is not started, and CSS animations are restricted to no-preference. Core content is independent of motion. Existing reduced-motion theme behavior remains.

16. **Mobile.** Reflowed split sections, normal-flow captions, smaller gaps, unrotated photo strips and hidden botanical/hero-note overlaps. Comfortable link targets remain. Narrow medical words can wrap without forcing wider grid columns. All ten major paths are tested at 320, 360 and 390px in addition to the full 375/430/tablet matrix.

17. **Dark mode.** Warm charcoal paper, deep-green reading areas, muted blue and rust sections preserve editorial variation. Photo-paper frames stay cream with explicit readable ink; photos are unfiltered. Social cards have independent text colors so surrounding forest panels cannot erase their labels.

18. **Arabic RTL.** Logical start/end positions reflow the layout. Cat travel reverses direction. Photographs and medical diagrams are not reflected. Product names use bidirectional isolation; social-link details and footer handles retain explicit LTR direction. New visible copy is supplied in English, Arabic, French and Simplified Chinese.

19. **Performance before/after.** The previous Git revision was built in an isolated folder using the same installed dependencies and original media. Both versions were sampled in fresh Chromium contexts at 1440 × 900, light theme, reduced motion, localhost, without network throttling. Image transfer includes preloaded heroes. These single local samples are not field Core Web Vitals or a claim of faster real-world loading. Added photography costs bytes; below-fold images are lazy, all new media is WebP, dimensions reserve space, and only the actual hero is preloaded.

| Page          | Main photos before → after | DOM elements before → after | Initial transfer before → after | Full-page content-photo transfer before → after | Local largest paint before → after |
| ------------- | -------------------------- | --------------------------- | ------------------------------- | ----------------------------------------------- | ---------------------------------- |
| Home          | 1 → 10                     | 250 → 446                   | 644 → 1022 KiB                  | 26 → 557 KiB                                    | 792 → 2792 ms                      |
| Scottish Fold | 0 → 3                      | 332 → 495                   | 617 → 911 KiB                   | 0 → 201 KiB                                     | 564 → 3700 ms                      |
| Nutrition     | 0 → 12                     | 324 → 572                   | 617 → 1339 KiB                  | 0 → 752 KiB                                     | 1408 → 4596 ms                     |

20. **Tests and visual review.** Final verification passes 40 Playwright tests, all 112 localized routes and the complete 80-view screenshot/axe/image/overflow matrix, with zero route, broken-image, console, horizontal-overflow or axe failures. Each of ten major paths has 375 × 812 light/dark, 430 × 932 light, 768 × 1024 light, 1440 × 900 light/dark, and Arabic 375/1440 captures. Additional tests cover 320/360/390px, locale switching/parity, SEO/schema, search, removed routes, once-only motion and reduced motion. Direct comparisons against all nine references informed manual desktop review; readable mobile, dark and Arabic crops were also inspected, including the final hidden notes, social-handle direction and contact-card contrast. Medical source data and Lotus history have no changes in the diff.

21. **Dependency audit.** `npm dedupe` completed. `npm audit` reports six high-severity affected package entries, all tracing to the same transitive `node-forge` advisory; zero critical findings. [GHSA-86w9-cpqp-85rv](https://github.com/advisories/GHSA-86w9-cpqp-85rv) lists no patched version. No forced Nuxt downgrade or invented override was applied. This unresolved dependency finding needs an upstream patch and re-audit.

22. **Build.** `npm run check` passes: Nuxt preparation, Prettier, ESLint, strict TypeScript and production build. Existing non-fatal public-cursor resolution and Vue package-export deprecation warnings remain. Production is served locally for review; this work was not deployed.

23. **Remaining visual weaknesses.** Nutrition and the full citation registry remain long because verified material is preserved. Some real Lotus photos recur where the library has no equivalent feeding/preparation shot. Non-Lotus mixes use generic photos or diagrams rather than ancestry-verified portraits. Commercial examples need owner-shot packaging; actual measured/cooked kitchen entries remain unpublished. A future deployed/network-throttled performance run is needed before making field-performance claims. Automated Pexels access and the unpatched dependency audit remain the external verification limits.

24. **Photos Mark should take next.** Front/back labels of the actual current food bags, especially the remembered Eminent bag if available; Lotus’s normal bowl/water placement; scale with a measured portion; safe preparation and the finished meal with its actual date/grams; the home ramp/steps/non-slip route; an ordinary gentle grooming session; and a fresh naturally lit Mark/Lotus photograph. Do not stage painful movements or use photos to infer diagnoses. Real kitchen documentation should include all existing journal fields and the nutritional-completeness warning.

25. **Tracker.** Remains removed. All four localized `/tracker` routes return 404; there are no tracker links, dashboard or account flows.

26. **Newsletter.** Remains removed. No email signup, subscription form, fake community, shop or affiliate functionality was added. Contact email remains a direct mail link.

27. **Reference deployment.** All nine PNGs were moved to `docs/design-references/` before the production build. Their combined 22,751,566 bytes are outside runtime assets. The directory’s README explains design-only use. Reference URLs return 404; no template, preload, SEO or sitemap uses them.

## Reproducible QA artifacts

Local generated artifacts are ignored by Git under `qa-artifacts/editorial/` so PNGs and baseline builds are not deployed. `final/` contains 80 full-page screenshots and `results.json`; `review/` contains reference comparisons and readable mobile crops. Logs include `check.log`, `playwright.log`, `npm-audit.json`, `external-links.json`, `media-audit.json`, `performance.json`, and `routes/report.json`.

The reusable scripts are `scripts/editorial-visual-qa.mjs`, `editorial-media-qa.mjs`, `editorial-performance-qa.mjs`, `production-qa.mjs` and `external-link-qa.mjs`. Run the production server on 4173, set `FELISFOLD_QA_URL=http://127.0.0.1:4173` for local visual/crawl checks, and use an isolated pre-change production server on 4175 for the performance comparison. `FELISFOLD_QA_SCREENSHOTS=0` skips redundant crawl screenshots when the editorial matrix is already captured.
