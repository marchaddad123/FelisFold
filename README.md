# FelisFold — Lotus and the evidence

A Nuxt 4 information site for Scottish Fold owners. General veterinary evidence, Mark’s observations of Lotus, and individual veterinary decisions stay clearly separated.

## Information architecture

Primary navigation: Home, Scottish Fold, Health & Care, Food & Nutrition, Mixes, Lotus, Sources. About and Contact are secondary links. Start Here supports new owners. Search accepts everyday owner questions.

There is no tracker or newsletter. `/[locale]/resources` redirects permanently to Sources. Removed tracker routes return 404.

Content lives in typed, fully translated guide data; pages assemble shared article and navigation components. English, Arabic (RTL), French and Simplified Chinese have their own URLs, canonical metadata and alternate-language links.

## Development

Use a Node version supported by `package.json` (Node 22.18+ or 24.11+).

```sh
npm install
npm run dev
npm run check
npm run test:e2e
npm audit
```

`check` verifies formatting, lint, TypeScript and a production build. Playwright tests use the production server and cover routes, search, accessibility, themes, mobile rendering, images and metadata.

Set `NUXT_PUBLIC_SITE_URL` in `.env` before deploying; it controls canonical URLs and the sitemap. The checked production origin is `https://felisfold.com`.

## Editing content

- `app/data/breedGuides.ts`: breed knowledge and the new-owner guide.
- `app/data/healthTopics.ts` and `healthGuideStructure.ts`: eight health guides and their consistent owner questions.
- `app/data/foodGuides.ts`: nutrition, homemade food, foods to avoid and Lotus Kitchen.
- `app/data/mixGuides.ts`: documented crosses and explicit evidence limits.
- `app/data/lotusStory.ts`, `lotusTimeline.ts`, `ownerGuides.ts`: the existing owner story and early lessons.
- `app/data/evidenceSources.ts`: source registry.
- `app/data/siteRoutes.ts`: route inventory used by the sitemap and QA.

Keep all four translations complete. Cite veterinary schools, professional guidance or primary research for medical claims. Do not invent Lotus’s meals, outcomes, pedigree, genotype, diagnoses or treatment details.

`lotusKitchenEntries` is intentionally empty. Its typed editorial record supports ingredient grams, preparation, served/eaten amounts, acceptance, vomiting timing, stool/appetite/energy, observations, veterinary notes, photos, next changes and nutrition limits. Publish only supplied real records. A complete homemade diet needs expert formulation against feline nutrient requirements.

Use existing licensed or owner-supplied images; never regenerate Lotus. Content photos use Nuxt Image with real dimensions, responsive sizes and appropriate loading.

## Research and decisions

- [Information architecture](docs/INFORMATION-ARCHITECTURE.md)
- [Content research](docs/CONTENT-RESEARCH.md)
- [Mix evidence and publication decisions](docs/SCOTTISH-FOLD-MIXES.md)
- [Implementation review](docs/IMPLEMENTATION-REVIEW.md)

The interactive body map remains a future editorial project after this simpler architecture is established.
