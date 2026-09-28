const languages = ["en", "ar", "fr", "zh"]
const healthSlugs = [
    "osteochondrodysplasia",
    "pain-and-mobility",
    "vomiting",
    "pkd",
    "heart-health",
    "ears-and-grooming",
    "weight-and-quality-of-life",
    "when-to-call-a-vet"
]
const pagePaths = [
    "",
    "/health",
    "/care",
    "/nutrition",
    "/tracker",
    "/lotus",
    "/sources",
    "/about",
    "/search"
]

function xmlEscape(value: string): string {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
}

export default defineEventHandler((event) => {
    const siteUrl = String(useRuntimeConfig().public.siteUrl).replace(/\/$/, "")
    const urls = languages.flatMap((language) => [
        ...pagePaths.map((path) => `${siteUrl}/${language}${path}`),
        ...healthSlugs.map((slug) => `${siteUrl}/${language}/health/${slug}`)
    ])

    const body = urls
        .map((url) => `  <url><loc>${xmlEscape(url)}</loc></url>`)
        .join("\n")
    setHeader(event, "content-type", "application/xml; charset=utf-8")
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`
})
