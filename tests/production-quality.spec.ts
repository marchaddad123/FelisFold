import AxeBuilder from "@axe-core/playwright"
import { expect, test, type Page } from "@playwright/test"
import {
    creatorProfile,
    creatorSocialLinks,
    getAvailableCreatorSocialLinks
} from "../app/data/creatorProfile"

const languages = ["en", "ar", "fr", "zh"]
const mainPaths = [
    "",
    "/health",
    "/care",
    "/nutrition",
    "/tracker",
    "/lotus",
    "/sources",
    "/resources",
    "/about",
    "/contact",
    "/search"
]
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
const allRoutes = languages.flatMap((language) => [
    ...mainPaths.map((path) => `/${language}${path}`),
    ...healthSlugs.map((slug) => `/${language}/health/${slug}`)
])
const coreRoutes = [
    "/en",
    "/en/health",
    "/en/nutrition",
    "/en/lotus",
    "/en/tracker",
    "/en/resources",
    "/en/search",
    "/ar"
]

async function waitForLoadingScreen(page: Page) {
    const loadingScreen = page.getByRole("status").first()
    if (await loadingScreen.count()) {
        await loadingScreen.waitFor({ state: "hidden", timeout: 5_000 })
    }
}

test("every sitemap route has a successful document, heading and correct locale", async ({
    page
}) => {
    test.setTimeout(480_000)
    const consoleErrors: string[] = []
    const runtimeErrors: string[] = []
    const failedRequests: string[] = []
    page.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text())
    })
    page.on("pageerror", (error) => runtimeErrors.push(error.message))
    page.on("requestfailed", (request) =>
        failedRequests.push(`${request.method()} ${request.url()}`)
    )

    for (const theme of ["light", "dark"] as const) {
        await page.goto("/en")
        await waitForLoadingScreen(page)
        await page.evaluate((selectedTheme) => {
            window.localStorage.setItem("felisfold-theme", selectedTheme)
        }, theme)

        for (const route of allRoutes) {
            const response = await page.goto(route, {
                waitUntil: "domcontentloaded"
            })
            expect(response?.status(), `${route} in ${theme}`).toBe(200)
            await waitForLoadingScreen(page)
            await expect(
                page.locator("h1").first(),
                `${route} needs one h1 in ${theme}`
            ).toBeVisible()
            await expect(page.locator("html")).toHaveAttribute(
                "lang",
                route.split("/")[1]!
            )
            if (theme === "dark") {
                await expect(page.locator("html")).toHaveClass(/dark/)
            } else {
                await expect(page.locator("html")).not.toHaveClass(/dark/)
            }
            const layout = await page.evaluate(() => {
                const viewportWidth = document.documentElement.clientWidth
                return {
                    overflow:
                        document.documentElement.scrollWidth - viewportWidth,
                    offenders: [...document.querySelectorAll("body *")]
                        .map((element) => {
                            const bounds = element.getBoundingClientRect()
                            return {
                                element: `${element.tagName.toLowerCase()}.${String(element.className).replaceAll(" ", ".")}`,
                                left: Math.round(bounds.left),
                                right: Math.round(bounds.right)
                            }
                        })
                        .filter(
                            (element) =>
                                element.left < -1 ||
                                element.right > viewportWidth + 1
                        )
                        .slice(0, 8)
                }
            })
            expect(
                layout.overflow,
                `${route} overflow in ${theme}: ${JSON.stringify(layout.offenders)}`
            ).toBeLessThanOrEqual(1)
        }
    }

    expect(consoleErrors).toEqual([])
    expect(runtimeErrors).toEqual([])
    expect(failedRequests).toEqual([])
})

test("Arabic main pages remain RTL and overflow-free across responsive layouts", async ({
    page
}) => {
    test.setTimeout(180_000)
    for (const viewport of [
        { width: 375, height: 812 },
        { width: 768, height: 1024 },
        { width: 1440, height: 900 }
    ]) {
        await page.setViewportSize(viewport)
        for (const path of mainPaths) {
            await page.goto(`/ar${path}`)
            await waitForLoadingScreen(page)
            await expect(page.locator("html")).toHaveAttribute("dir", "rtl")
            const overflow = await page.evaluate(
                () =>
                    document.documentElement.scrollWidth -
                    document.documentElement.clientWidth
            )
            expect(
                overflow,
                `/ar${path} at ${viewport.width}px`
            ).toBeLessThanOrEqual(1)
        }
    }
})

test("core routes have no serious accessibility violations in both themes", async ({
    page
}) => {
    test.setTimeout(240_000)
    for (const theme of ["light", "dark"] as const) {
        await page.addInitScript((selectedTheme) => {
            window.localStorage.setItem("felisfold-theme", selectedTheme)
        }, theme)
        for (const route of coreRoutes) {
            await page.goto(route)
            await waitForLoadingScreen(page)
            const results = await new AxeBuilder({ page })
                .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
                .analyze()
            const seriousViolations = results.violations.filter(
                (violation) =>
                    violation.impact === "serious" ||
                    violation.impact === "critical"
            )
            expect(seriousViolations, `${route} in ${theme} mode`).toEqual([])
        }
    }
})

test("core routes do not overflow at required breakpoints in either theme", async ({
    page
}) => {
    test.setTimeout(360_000)
    const viewports = [
        { width: 375, height: 812 },
        { width: 430, height: 932 },
        { width: 768, height: 1024 },
        { width: 1440, height: 900 }
    ]

    for (const viewport of viewports) {
        await page.setViewportSize(viewport)
        for (const theme of ["light", "dark"] as const) {
            await page.goto("/en")
            await page.evaluate((selectedTheme) => {
                document.documentElement.classList.toggle(
                    "dark",
                    selectedTheme === "dark"
                )
                window.localStorage.setItem("felisfold-theme", selectedTheme)
            }, theme)
            for (const route of coreRoutes) {
                await page.goto(route)
                await waitForLoadingScreen(page)
                const overflow = await page.evaluate(
                    () =>
                        document.documentElement.scrollWidth -
                        document.documentElement.clientWidth
                )
                expect(
                    overflow,
                    `${route} overflows at ${viewport.width}px in ${theme}`
                ).toBeLessThanOrEqual(1)
            }
        }
    }
})

test("health filters, FAQs and resource accordions work", async ({ page }) => {
    await page.goto("/en/health")
    const guideGrid = page.locator("#guides").locator("a.group")
    await expect(guideGrid).toHaveCount(8)
    await page.getByRole("button", { name: "Mobility", exact: true }).click()
    await expect(guideGrid).toHaveCount(3)

    const faq = page.locator("details").first()
    await faq.locator("summary").click()
    await expect(faq).toHaveAttribute("open", "")

    await page.goto("/en/resources")
    const glossary = page.locator("details").first()
    await glossary.locator("summary").click()
    await expect(glossary).toHaveAttribute("open", "")
    const externalLinks = page.locator('a[target="_blank"]')
    expect(await externalLinks.count()).toBeGreaterThan(0)
    for (const link of await externalLinks.all()) {
        await expect(link).toHaveAttribute("rel", /noreferrer/)
    }

    await page.goto("/en/health/osteochondrodysplasia")
    const contents = page.getByRole("navigation", { name: "In this guide" })
    await expect(contents.getByRole("link")).toHaveCount(4)
    const firstSectionLink = contents.getByRole("link").first()
    await firstSectionLink.click()
    await expect(page).toHaveURL(/#guide-section-1$/)
    const relatedGuides = page
        .getByRole("heading", { name: "Related guides" })
        .locator("..")
    await expect(relatedGuides).toBeVisible()
    const relatedGuideLinks = relatedGuides.locator("a.group")
    await expect(relatedGuideLinks).toHaveCount(3)
    await expect(relatedGuideLinks.nth(0)).toHaveAttribute(
        "href",
        "/en/health/pain-and-mobility"
    )
    await expect(relatedGuideLinks.nth(1)).toHaveAttribute(
        "href",
        "/en/health/weight-and-quality-of-life"
    )
})

test("newsletter, mascot and downloadable resource controls respond", async ({
    page
}) => {
    await page.goto("/en/health/osteochondrodysplasia")
    await waitForLoadingScreen(page)
    const mascot = page.getByRole("button", { name: /Pet the cat/ }).first()
    await mascot.click()
    await expect(mascot.getByText("♥")).toBeAttached()

    const email = page.getByRole("textbox", { name: "Email address" })
    await email.fill("owner@example.com")
    await page.getByRole("button", { name: "Subscribe" }).click()
    await expect(
        page.getByRole("button", { name: "Saved for later ✓" })
    ).toBeVisible()

    await page.goto("/en/resources")
    const downloadPromise = page.waitForEvent("download")
    await page.getByRole("button", { name: "Download checklist →" }).click()
    const download = await downloadPromise
    expect(download.suggestedFilename()).toBe(
        "felisfold-vet-visit-checklist.txt"
    )
})

test("search handles empty, partial, no-result, escape and result navigation states", async ({
    page
}) => {
    await page.goto("/en/search")
    await waitForLoadingScreen(page)
    const search = page.getByRole("searchbox")
    await expect(page.getByText(/results?$/)).toBeVisible()
    await search.fill("noresultquery")
    await expect
        .poll(() =>
            page
                .locator("main p")
                .filter({ hasText: /results?$/ })
                .allTextContents()
        )
        .toContain("0 results")
    await expect(
        page.getByRole("heading", { name: "No match yet." })
    ).toBeVisible()
    await page.getByRole("button", { name: "Clear search" }).click()
    await search.fill("vomit")
    await expect(
        page.getByRole("link", { name: /Vomiting/ }).first()
    ).toBeVisible()
    await page.keyboard.press("Escape")
    await expect(search).toHaveValue("")
    await search.fill("Lotus")
    await page.getByRole("link", { name: /Meet Lotus/ }).click()
    await expect(page).toHaveURL(/\/en\/lotus$/)
})

test("content images provide intrinsic dimensions, responsive sizes and alt text", async ({
    page
}) => {
    for (const route of coreRoutes) {
        await page.goto(route)
        await waitForLoadingScreen(page)
        const imageProblems = await page
            .locator("main img")
            .evaluateAll((images) =>
                images.flatMap((image) => {
                    if (image.currentSrc.includes("blur_3&s_10x10")) return []
                    const problems: string[] = []
                    if (!image.getAttribute("alt")?.trim())
                        problems.push("missing alt")
                    if (!image.getAttribute("width"))
                        problems.push("missing width")
                    if (!image.getAttribute("height"))
                        problems.push("missing height")
                    if (!image.getAttribute("sizes"))
                        problems.push("missing sizes")
                    return problems.map(
                        (problem) => `${image.currentSrc}: ${problem}`
                    )
                })
            )
        expect(imageProblems, route).toEqual([])
    }
})

test("creator identity is placed consistently and uses safe external links", async ({
    page
}) => {
    await page.goto("/en")
    await waitForLoadingScreen(page)
    const sectionOrder = await page
        .locator("#lotus-home-story, #creator-introduction, #home-care-topics")
        .evaluateAll((sections) => sections.map((section) => section.id))
    expect(sectionOrder).toEqual([
        "lotus-home-story",
        "creator-introduction",
        "home-care-topics"
    ])

    for (const route of ["/en/about", "/en/contact"]) {
        await page.goto(route)
        await waitForLoadingScreen(page)
        await expect(page.getByText(creatorProfile.name).first()).toBeVisible()
        for (const social of creatorSocialLinks) {
            const link = page.locator(`a[href="${social.url}"]`).first()
            await expect(link, `${social.label} on ${route}`).toBeVisible()
            if (social.id !== "email") {
                await expect(link).toHaveAttribute("target", "_blank")
                await expect(link).toHaveAttribute("rel", /noopener/)
                await expect(link).toHaveAttribute("rel", /noreferrer/)
            }
        }
    }

    expect(getAvailableCreatorSocialLinks([])).toEqual([])
    expect(
        getAvailableCreatorSocialLinks([
            null,
            undefined,
            { id: "github", label: "", url: "" },
            creatorSocialLinks[0]
        ])
    ).toEqual([creatorSocialLinks[0]])
})

test("creator and article author structured data identify the same person", async ({
    page
}) => {
    await page.goto("/en/health/osteochondrodysplasia")
    await waitForLoadingScreen(page)
    const schemas = await page
        .locator('script[type="application/ld+json"]')
        .allTextContents()
    const parsedSchemas = schemas.map((schema) => JSON.parse(schema))
    const graph = parsedSchemas.find((schema) =>
        Array.isArray(schema["@graph"])
    )
    const person = graph?.["@graph"].find(
        (entry: Record<string, unknown>) => entry["@type"] === "Person"
    )
    const article = parsedSchemas.find(
        (schema) => schema["@type"] === "Article"
    )

    expect(person?.name).toBe(creatorProfile.name)
    expect(person?.sameAs).toContain(creatorProfile.github.url)
    expect(article?.author?.name).toBe(creatorProfile.name)
    expect(article?.author?.["@id"]).toBe(person?.["@id"])
    await expect(page.getByText(creatorProfile.name).first()).toBeVisible()
})

test("invalid health slugs use the branded error experience", async ({
    page
}) => {
    await page.goto("/en/health/not-a-topic")
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
        "wandered off"
    )
    await page.getByRole("link", { name: "Back to FelisFold" }).click()
    await expect(page).toHaveURL(/\/en$/)
})
