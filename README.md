# FoldCare V1 — Lotus Edition

FoldCare is a mobile-first Nuxt 4 website about Scottish Fold health.

The site starts with a real cat named Lotus and then moves from his owner's observations into general veterinary information.

## What is in V1

- Nuxt 4 + Vue 3 + TypeScript
- Tailwind CSS 4
- Nuxt Image with responsive `NuxtImg` usage
- English, Arabic, French, and Simplified Chinese routes
- Arabic RTL support
- localized SEO routes and `hreflang`
- health library with evidence-linked articles
- Lotus story and photo sections
- food / vomiting guidance
- daily-care guidance
- local browser health tracker
- search
- light/dark mode
- white-cat light-theme transition
- black-cat dark-theme transition
- short furry loading screen
- cat-paw desktop cursors
- reduced-motion support
- `robots.txt`
- generated XML sitemap

## Node version

Use Node 22.22.0.

```bash
nvm use 22.22.0
npm install
npm run dev
```

Open the URL shown by Nuxt.

## Environment

Copy `.env.example` to `.env` and set the public production URL before deployment.

```env
NUXT_PUBLIC_SITE_URL=https://your-domain.com
```

This URL is used for canonical URLs, `hreflang`, sitemap output, and social metadata.

## Useful commands

```bash
npm run dev
npm run format
npm run format:check
npm run lint
npm run typecheck
npm run build
npm run check
```

`npm run check` runs formatting, linting, type checking, and a production build.

## Folder map

```text
app/
    components/
        common/       reusable UI pieces
        health/       health-library components
        home/         home-page sections
        language/     language switcher
        layout/       site header and footer
        loading/      furry startup loading UI
        lotus/        Lotus story/photo components
        search/       search controls
        theme/        theme toggle and cat transition
        tracker/      local health tracker
    composables/      reusable state and behavior
    data/             health content and translated site text
    pages/            route-level page composition
    types/            shared TypeScript shapes
    utils/            small shared helpers/constants
server/routes/        robots.txt and sitemap.xml
public/               Lotus photos, favicon, cursors
```

## Naming rule

Names should explain themselves.

Examples:

```text
ThemeTransitionOverlay.vue
RunningCatRow.vue
HealthTrackerForm.vue
LotusStoryTimeline.vue
useThemePreference.ts
useHealthTracker.ts
```

Avoid vague names like `Thing.vue`, `data2`, or `handleStuff()`.

## Language routes

Every main page lives below a language prefix:

```text
/en/...
/ar/...
/fr/...
/zh/...
```

Arabic sets the document direction to RTL.

The language switcher changes the first URL segment while keeping the same page when possible.

## Health content model

`app/data/healthTopics.ts` is the main health-library data file.

Each topic contains:

- slug
- icon
- translated title
- translated summary
- translated sections
- sources
- review date

The generic route `app/pages/[locale]/health/[slug].vue` renders those topics using shared health components.

This makes adding a new condition easier without making a new giant page every time.

## Theme system

`useThemePreference.ts` owns saved light/dark preference.

`useThemeTransition.ts` owns the transition state.

`ThemeTransitionOverlay.vue` displays the wipe.

`RunningCatRow.vue` displays the line of cats.

The theme itself is controlled by semantic CSS color variables in `main.css`.

## Tracker

The tracker stores data in the browser's `localStorage`.

It does not upload health data anywhere.

It can record:

- meals
- vomiting
- mobility
- medicine
- weight
- notes

The tracker is intentionally simple in V1 so a backend can be added later without rewriting the UI.

## Images

Lotus photos stay as real photographs.

Content images use `NuxtImg` with source width/height and responsive `sizes`.

Do not preload every image. Preload only the main above-the-fold image that is likely to become LCP.

## Important medical rule

FoldCare is educational.

It must clearly separate:

- what was observed in Lotus
- what evidence says in general
- what a veterinarian must decide for a real patient

Never invent a diagnosis for Lotus.

## Current verification note

The source was assembled with dependency-light architecture. If `npm install` cannot reach the npm registry in the build environment, run `npm run check` after installing dependencies locally before deployment.
