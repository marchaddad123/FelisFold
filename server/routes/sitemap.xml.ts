import { sitePagePaths } from "../../app/data/siteRoutes"
const languages = ["en", "ar", "fr", "zh"]
function xmlEscape(value: string): string {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
}
export default defineEventHandler((event) => {
    const siteUrl = String(useRuntimeConfig().public.siteUrl).replace(/\/$/, "")
    const urls = languages.flatMap((language) =>
        sitePagePaths.map((path) => `${siteUrl}/${language}${path}`)
    )
    setHeader(event, "content-type", "application/xml; charset=utf-8")
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${xmlEscape(url)}</loc></url>`).join("\n")}\n</urlset>`
})
