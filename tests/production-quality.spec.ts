import { expect, test } from "@playwright/test"
import AxeBuilder from "@axe-core/playwright"
import { sitePagePaths } from "../app/data/siteRoutes"

for (const locale of ["en", "ar", "fr", "zh"]) {
    test(
        "all content routes and metadata: " + locale,
        async ({ page, request }) => {
            test.setTimeout(180_000)
            for (const path of sitePagePaths) {
                const response = await page.goto("/" + locale + path)
                expect(response?.status(), path).toBe(200)
                await expect(page.locator("main h1")).toHaveCount(1)
                await expect(page.locator("html")).toHaveAttribute(
                    "lang",
                    locale
                )
                await expect(page.locator("html")).toHaveAttribute(
                    "dir",
                    locale === "ar" ? "rtl" : "ltr"
                )
                await expect(
                    page.locator('link[rel="canonical"]')
                ).toHaveAttribute(
                    "href",
                    "https://felisfold.com/" + locale + path
                )
                await expect(
                    page.locator('link[rel="alternate"][hreflang]')
                ).toHaveCount(5)
                const description = await page
                    .locator('meta[name="description"]')
                    .getAttribute("content")
                expect(description?.length).toBeGreaterThan(20)
                const schemas = await page
                    .locator('script[type="application/ld+json"]')
                    .allTextContents()
                const parsed = schemas.map((schema) => JSON.parse(schema))
                expect(
                    parsed.some(
                        (schema) => schema["@type"] === "BreadcrumbList"
                    )
                ).toBe(true)
                if (
                    path.startsWith("/health/") ||
                    path.startsWith("/mixes/") ||
                    path.startsWith("/nutrition/") ||
                    [
                        "/scottish-fold",
                        "/start-here",
                        "/care",
                        "/nutrition",
                        "/mixes",
                        "/lotus/what-i-wish-i-knew"
                    ].includes(path)
                ) {
                    const article = parsed.find(
                        (schema) => schema["@type"] === "Article"
                    )
                    expect(article?.inLanguage).toBe(locale)
                    expect(article?.dateModified).toBe("2026-10-01")
                    expect(article?.author?.name).toBe("Mark Haddad")
                }
                if (locale !== "en") {
                    const text = await page.locator("main").innerText()
                    for (const leak of [
                        "What you can safely do at home",
                        "When to contact a vet",
                        "Find an answer",
                        "Global veterinary evidence",
                        "Grams served / eaten",
                        "No measured meals published yet",
                        "Read guide",
                        "Current online reference",
                        "This is Lotus."
                    ])
                        expect(text, path).not.toContain(leak)
                }
                const links = await page
                    .locator('a[href^="/' + locale + '"]')
                    .evaluateAll((anchors) =>
                        anchors.map(
                            (anchor) =>
                                new URL((anchor as HTMLAnchorElement).href)
                                    .pathname
                        )
                    )
                for (const link of links)
                    expect(
                        sitePagePaths.map((item) => "/" + locale + item),
                        path + " -> " + link
                    ).toContain(link)
            }
            const removed = await request.get("/" + locale + "/tracker")
            expect(removed.status()).toBe(404)
            const merged = await request.get("/" + locale + "/resources", {
                maxRedirects: 0
            })
            expect(merged.status()).toBe(301)
            expect(merged.headers().location).toBe("/" + locale + "/sources")
        }
    )
}

test("sitemap lists the current localized architecture once", async ({
    request
}) => {
    const sitemap = await request.get("/sitemap.xml")
    expect(sitemap.ok()).toBe(true)
    const routes = [
        ...(await sitemap.text()).matchAll(/<loc>(.*?)<\/loc>/g)
    ].map((match) => new URL(match[1]!).pathname)
    const expected = ["en", "ar", "fr", "zh"].flatMap((locale) =>
        sitePagePaths.map((path) => "/" + locale + path)
    )
    expect(routes.sort()).toEqual(expected.sort())
    expect(new Set(routes).size).toBe(routes.length)
})

test("guides separate case evidence, observations and nutritional claims", async ({
    page
}) => {
    await page.goto("/en/mixes/scottish-fold-munchkin")
    await expect(page.locator("main")).toContainText("two copies")
    await expect(page.locator("main")).toContainText(
        "not a prevalence estimate"
    )
    await expect(
        page.locator('main a[href="https://pubmed.ncbi.nlm.nih.gov/33162427/"]')
    ).toBeVisible()
    await page.goto("/en/mixes/scottish-fold-highlander")
    await expect(page.locator("main")).toContainText("one TRPV4 variant copy")
    await expect(page.locator("main")).toContainText(
        "cannot establish long-term outcomes"
    )
    await page.goto("/en/mixes/scottish-fold-siamese")
    await expect(page.locator("main")).toContainText(
        "Mark's observations — one cat's experience"
    )
    await page.goto("/en/scottish-fold")
    await expect(page.locator("main")).toContainText("22 cats")
    await expect(page.locator("main")).toContainText(
        "Neither small study predicts"
    )
    await page.goto("/en/nutrition/homemade")
    await expect(page.locator("main")).toContainText("calcium-to-phosphorus")
    await expect(page.locator("main")).toContainText("veterinary nutritionist")
    await page.goto("/en/health/when-to-call-a-vet")
    for (const heading of [
        "Emergency / same-day care",
        "Contact your vet soon",
        "Monitor closely + discuss with your vet",
        "Routine preventive care"
    ])
        await expect(
            page.getByRole("heading", { name: heading, exact: true })
        ).toBeVisible()
    await expect(page.locator("main")).toContainText(
        "straining without passing urine"
    )
    await page.goto("/en/health/vomiting")
    await expect(page.locator("main")).not.toContainText("1/3")
})

for (const path of [
    "/en",
    "/ar/health/pain-and-mobility",
    "/fr/mixes",
    "/zh/nutrition/homemade"
]) {
    test("accessibility: " + path, async ({ page }) => {
        await page.goto(path)
        await page.emulateMedia({ reducedMotion: "reduce" })
        const results = await new AxeBuilder({ page })
            .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
            .analyze()
        expect(results.violations).toEqual([])
    })
}

for (const view of [
    { width: 320, theme: "light", locale: "en" },
    { width: 375, theme: "dark", locale: "ar" },
    { width: 768, theme: "light", locale: "fr" },
    { width: 1440, theme: "dark", locale: "zh" }
]) {
    test(
        "responsive visual review: " + JSON.stringify(view),
        async ({ page }, testInfo) => {
            test.setTimeout(120_000)
            await page.setViewportSize({ width: view.width, height: 900 })
            await page.emulateMedia({
                colorScheme: view.theme === "dark" ? "dark" : "light",
                reducedMotion: "reduce"
            })
            const errors: string[] = []
            page.on("pageerror", (error) => errors.push(error.message))
            for (const path of [
                "",
                "/health/pain-and-mobility",
                "/nutrition/homemade",
                "/mixes/scottish-fold-siamese"
            ]) {
                await page.goto("/" + view.locale + path)
                await expect(page.locator("main h1")).toBeVisible()
                expect(
                    await page.evaluate(
                        () =>
                            document.documentElement.scrollWidth -
                            document.documentElement.clientWidth
                    )
                ).toBeLessThanOrEqual(1)
                const images = page.locator("main img")
                for (let index = 0; index < (await images.count()); index++) {
                    await images.nth(index).scrollIntoViewIfNeeded()
                    await expect
                        .poll(() =>
                            images
                                .nth(index)
                                .evaluate(
                                    (image) =>
                                        (image as HTMLImageElement).naturalWidth
                                )
                        )
                        .toBeGreaterThan(0)
                    await expect(images.nth(index)).toHaveAttribute("alt", /.+/)
                }
                await page.evaluate(() =>
                    window.scrollTo({ top: 0, behavior: "instant" })
                )
                await expect
                    .poll(() => page.evaluate(() => window.scrollY))
                    .toBe(0)
                await page.screenshot({
                    path: testInfo.outputPath(
                        (path.replaceAll("/", "-") || "home") + "-viewport.png"
                    ),
                    animations: "disabled"
                })
                await page.screenshot({
                    path: testInfo.outputPath(
                        (path.replaceAll("/", "-") || "home") + ".png"
                    ),
                    fullPage: true,
                    animations: "disabled"
                })
            }
            expect(errors).toEqual([])
        }
    )
}
