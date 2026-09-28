# FoldCare design system

## Product feeling

FoldCare should feel warm, playful, calm, credible, and easy to read.

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

FoldCare supports light and dark mode.

The theme toggle is playful:

- switching to light uses white running cats and a light wipe
- switching to dark uses black running cats and a dark wipe

The effect must be fast and non-blocking. Under `prefers-reduced-motion`, switch themes immediately without the running animation.

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
- lilac
- sage
- peach
- soft sky
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
