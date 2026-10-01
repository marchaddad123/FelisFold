export const healthSlugs = [
    "osteochondrodysplasia",
    "pain-and-mobility",
    "vomiting",
    "pkd",
    "heart-health",
    "ears-and-grooming",
    "weight-and-quality-of-life",
    "when-to-call-a-vet"
]
export const mixSlugs = [
    "scottish-fold-siamese",
    "scottish-fold-munchkin",
    "scottish-fold-american-curl",
    "scottish-fold-highlander"
]
export const sitePagePaths = [
    "",
    "/scottish-fold",
    "/start-here",
    "/health",
    "/care",
    "/nutrition",
    "/nutrition/homemade",
    "/nutrition/foods-to-avoid",
    "/nutrition/lotus-kitchen",
    "/mixes",
    "/lotus",
    "/lotus/what-i-wish-i-knew",
    "/sources",
    "/about",
    "/contact",
    "/search",
    ...healthSlugs.map((slug) => `/health/${slug}`),
    ...mixSlugs.map((slug) => `/mixes/${slug}`)
]
