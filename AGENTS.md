# FoldCare engineering rules

FoldCare is a Nuxt 4 website about Scottish Fold health, built around the real story of Lotus.

## Main rule

Code should be easy to understand. A 12-year-old who knows basic programming should be able to open a file and understand what it is for.

## Naming

Use clear full names.

Good:

- `currentTheme`
- `switchTheme`
- `mobileMenuIsOpen`
- `HealthTopicCard.vue`
- `LotusStoryTimeline.vue`
- `useHealthTracker.ts`

Avoid vague names such as:

- `data`
- `stuff`
- `thing`
- `tmp`
- `handleIt`
- `x`

Short conventional names like `props`, `route`, and `id` are fine when their meaning is obvious.

## Components

Every meaningful UI responsibility should have a component. Pages should mostly assemble components and provide page-specific text or data.

Do not create tiny components for one word or one decorative span. A component should own a real visual or behavioral responsibility.

## Styling

- Use Tailwind CSS for normal static styling.
- Keep custom CSS for shared animations, cursor behavior, theme transitions, and motion that is awkward to express as utilities.
- Mobile-first. Support screens from about 320px wide upward.
- Light and dark themes must both work.
- Arabic RTL must not break layout.
- Respect `prefers-reduced-motion`.
- Use visible keyboard focus states and comfortable touch targets.

## Images

Use `NuxtImg` for content photos.

Always provide:

- real source `width` and `height`
- responsive `sizes`
- meaningful `alt`
- `loading="lazy"` below the fold
- preload only for a true LCP/hero image

Do not regenerate Lotus or change his identity. Mild non-generative image cleanup is allowed when needed.

## Health content

Separate three things clearly:

1. what the owner observed in Lotus
2. what veterinary evidence says in general
3. what requires a veterinarian to decide for an individual cat

Do not turn an observation into a diagnosis.

Prefer veterinary schools, veterinary manuals, professional guidelines, and peer-reviewed research.

## Before reporting completion

When dependencies are available, run:

```bash
npm run check
```

If dependency installation is unavailable, say so clearly and still inspect the source tree for broken imports, missing files, and obvious syntax problems.
