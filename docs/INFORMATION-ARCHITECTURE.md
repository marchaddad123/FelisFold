# FelisFold content refocus

Audit: 1 October 2026. The old site had 11 static localized pages, eight health articles, a browser tracker, a newsletter with simulated subscription, overlapping Resources/Sources pages, and a homepage dominated by the creator story and decorative cards. Nutrition, search and shared UI exposed English text on translated routes. There is no current Graphify graph.

## Decisions

- Remove the tracker and newsletter, including storage, components, types, links and tests. No replacement conversion feature.
- Merge Resources into Sources. Keep care as a practical guide within Health & Care.
- Primary navigation: Home, Scottish Fold, Health & Care, Food & Nutrition, Fold mixes, Lotus, Sources. About and Contact stay in the footer.
- Use question-led links, short introductions and readable articles instead of promotional cards and decorative home sections.
- Add breed, new-owner and age guidance; an evidence-limited mix library; nutrition, foods to avoid and homemade guidance; an editorial kitchen with no invented meal results; and Lotus's early-life lessons.
- Keep real owner-supplied photographs, Mark's identity/contact links, four languages, RTL and both themes. No new stock photography is needed to fill mix profiles.
- Body map deferred as requested. No new interactive health tools.

## Route architecture

All routes below use `/en`, `/ar`, `/fr` or `/zh` prefixes:

`/`, `/scottish-fold`, `/start-here`, `/health`, `/health/[slug]`, `/care`, `/nutrition`, `/nutrition/homemade`, `/nutrition/foods-to-avoid`, `/nutrition/lotus-kitchen`, `/mixes`, `/mixes/[slug]`, `/lotus`, `/lotus/what-i-wish-i-knew`, `/sources`, `/about`, `/contact`, `/search`.

Removed `/tracker` returns 404. Old `/resources` redirects permanently to the equivalent localized `/sources`. Home care is linked from Health & Care; it has no separate primary navigation item.
