# FelisFold design system

## Product feeling

FelisFold should feel warm, playful, calm, credible, and easy to read.

It must not look like a hospital brochure, but serious medical information must never be hidden behind cuteness.

The basic rhythm is:

**Lotus / real life → clear explanation → evidence → practical next step**

## Responsive rules

Design mobile-first.

Test mentally and in-browser at roughly:

- 320px
- 375px
- 430px
- tablet
- laptop
- wide desktop

Do not shrink a desktop composition until it barely fits. Recompose it for mobile.

Touch targets should normally be at least 44px high/wide.

## Themes

FelisFold supports light and dark mode.

The theme toggle is playful:

- switching to light uses photographed cats and a light wipe
- switching to dark uses the same unfiltered footage and a dark wipe

The theme itself changes immediately. Three realistic cats cross over six seconds; the effect never blocks page interaction. Each cat uses complete video frames with coherent anatomy and real body motion. Independently rotated photograph cutouts do not meet this requirement. Under `prefers-reduced-motion`, switch themes immediately without the crossing animation.

## Loading

Initial client startup can show the short `FurryLoadingScreen`.

It should feel like Lotus is getting the site ready, not like a generic spinner. Keep it brief.

## Motion

Use motion to communicate state or personality:

- short page transitions
- mobile menu movement
- cat mascot actions
- running-cat theme wipe
- subtle hover/press feedback

Avoid:

- long blocking animations
- bouncing every element
- motion that makes health content harder to read
- logic that depends on animation timing for correctness

## Color

Use semantic color variables so the same components work in light and dark mode.

Main families:

- cream / paper
- deep forest green / sage
- terracotta / rust
- warm peach
- powder / sky blue
- restrained lilac for existing links
- restrained danger red

## Typography

Keep hierarchy obvious.

Use mostly normal and medium weights. Use semibold for real hierarchy, not every sentence.

Medical explanations should use short paragraphs, descriptive headings, and plain language.

## Lotus photography

Lotus is the main visual patient/story.

Use photographs intentionally:

- hero
- creator story
- family/lifestyle
- feeding
- grooming
- posture/mobility context

Do not use every photo just because it exists.

Use `NuxtImg`, correct source dimensions, responsive sizes, and deliberate object positioning.

## Multilingual layout

Supported languages:

- English
- Arabic (RTL)
- French
- Simplified Chinese

Never assume English text length.

The language switcher should keep the user on the equivalent page.

## Accessibility

Check:

- semantic headings
- keyboard focus
- readable contrast
- icon labels
- form labels
- reduced motion
- no information conveyed only by color
- RTL behavior
- mobile touch targets

## No hacks

Do not solve layout problems with arbitrary offsets, hidden overflow tricks, duplicated content, giant `!important` stacks, or one-device fixes.

Fix the structure.

## Editorial rebuild conventions

Use large editorial serif headings, readable sans-serif paragraphs and short handwritten annotations. Medical paragraphs stay in the sans-serif body style. Alternate photo-led splits, diagrams, reading columns, scrapbook strips and compact topic grids. A meaningful visual should interrupt every two or three substantial text sections. Do not fill space with unrelated stock imagery.

Reuse `EditorialHeroSection`, `EditorialPhoto`, `PhotoStoryStrip`, `VisualGuideCard`, the evidence badges and the genetics/care/vet SVG explanations. Keep pages responsible for their own composition. Original source content and source links remain authoritative.

Light sections alternate warm paper, cream, sky and peach with occasional forest panels. Dark mode retains warm charcoal, deep blue, deep green and rust; photography stays unfiltered. Mobile drops botanical ornaments and most overlapping notes, while keeping photos, readable hierarchy and normal-flow captions.

A single `GlobalCatVisits` component lives in the shared layout. Random visits keep the approved complete-cat snack, toy play and jump footage; the rejected global stroll is removed. Jump and toy play can appear anywhere within the viewport below navigation. Snacks use the four physical corners, with inward-facing cats and the bowl anchored to the photographed muzzle. All visitors are decorative and allow clicks through to the page. Visits stop when hidden, resized, or interrupted by a theme change or dialog. Random timing and quiet meowing are enabled by default; audio waits for a trusted click, tap or key press to satisfy browser playback rules. Cat controls appear only in development. Reduced motion disables automatic visits and keeps developer-invited cats still. Page-local `CatRestingDivider` illustrations remain quiet. Generic mascots may face either direction, while Lotus photographs, brand names, and medical diagrams remain unreflected.

External photos are local, have intrinsic dimensions and responsive `NuxtImg` sources, and show source/license attribution. Only the true hero image is preloaded. Generic Fold imagery must never be presented as Lotus or a documented mixed-breed case. Full metadata lives in `public/images/editorial/credits.json`; design-only PNGs live in `docs/design-references/`.
