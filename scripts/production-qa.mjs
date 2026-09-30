import { chromium, request } from "@playwright/test"
import { mkdir, writeFile } from "node:fs/promises"

const productionUrl =
    process.env.FELISFOLD_QA_URL ?? "https://felis-fold.vercel.app"
const targetName = new URL(productionUrl).hostname.includes("127.0.0.1")
    ? "local-qa"
    : "production-qa"
const outputDirectory = `test-results/${targetName}`
const expectedLanguages = ["en", "ar", "fr", "zh"]
const expectedPagePaths = [
    "",
    "/health",
    "/care",
    "/nutrition",
    "/tracker",
    "/lotus",
    "/sources",
    "/resources",
    "/about",
    "/search"
]
const expectedHealthSlugs = [
    "osteochondrodysplasia",
    "pain-and-mobility",
    "vomiting",
    "pkd",
    "heart-health",
    "ears-and-grooming",
    "weight-and-quality-of-life",
    "when-to-call-a-vet"
]
const expectedRoutes = expectedLanguages.flatMap((language) => [
    ...expectedPagePaths.map((path) => `/${language}${path}`),
    ...expectedHealthSlugs.map((slug) => `/${language}/health/${slug}`)
])
const corePaths = [
    "/en",
    "/en/health",
    "/en/nutrition",
    "/en/lotus",
    "/en/tracker",
    "/en/resources",
    "/en/search",
    "/ar"
]
const screenshotViewports = [
    { name: "mobile-375", width: 375, height: 812 },
    { name: "mobile-430", width: 430, height: 932 },
    { name: "tablet-768", width: 768, height: 1024 },
    { name: "desktop-1440", width: 1440, height: 900 }
]

await mkdir(outputDirectory, { recursive: true })

const requestContext = await request.newContext()
const sitemapResponse = await requestContext.get(`${productionUrl}/sitemap.xml`)
if (!sitemapResponse.ok()) {
    throw new Error(`Sitemap request failed with ${sitemapResponse.status()}`)
}
const sitemap = await sitemapResponse.text()
const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
    (match) => new URL(match[1]).pathname
)
await requestContext.dispose()

const uniqueRoutes = [...new Set(routes)]
const missingRoutes = expectedRoutes.filter(
    (route) => !uniqueRoutes.includes(route)
)
const unexpectedRoutes = uniqueRoutes.filter(
    (route) => !expectedRoutes.includes(route)
)
if (
    routes.length !== expectedRoutes.length ||
    uniqueRoutes.length !== routes.length ||
    missingRoutes.length ||
    unexpectedRoutes.length
) {
    throw new Error(
        `Sitemap mismatch. Expected ${expectedRoutes.length} unique routes; received ${routes.length} entries and ${uniqueRoutes.length} unique routes. Missing: ${missingRoutes.join(", ") || "none"}. Unexpected: ${unexpectedRoutes.join(", ") || "none"}.`
    )
}

const browser = await chromium.launch({ headless: true })
const routeResults = []

for (const path of routes) {
    const page = await browser.newPage({
        viewport: { width: 1440, height: 900 }
    })
    const consoleErrors = []
    const failedRequests = []
    const badResponses = []
    page.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text())
    })
    page.on("requestfailed", (request) => {
        failedRequests.push(
            `${request.method()} ${request.url()} ${request.failure()?.errorText ?? ""}`
        )
    })
    page.on("response", (response) => {
        if (response.status() >= 400) {
            badResponses.push(`${response.status()} ${response.url()}`)
        }
    })

    const startedAt = Date.now()
    let status = 0
    let navigationError = ""
    try {
        const response = await page.goto(`${productionUrl}${path}`, {
            waitUntil: "domcontentloaded",
            timeout: 30_000
        })
        status = response?.status() ?? 0
        const loader = page.locator('[role="status"]').first()
        if (await loader.count()) {
            await loader.waitFor({ state: "hidden", timeout: 12_000 })
        }
    } catch (error) {
        navigationError = error instanceof Error ? error.message : String(error)
    }

    const result = await page.evaluate(() => ({
        title: document.title,
        h1: document.querySelector("h1")?.textContent?.trim() ?? "",
        lang: document.documentElement.lang,
        dir: document.documentElement.dir,
        horizontalOverflow:
            document.documentElement.scrollWidth -
            document.documentElement.clientWidth,
        brokenImages: [...document.images]
            .filter((image) => image.complete && image.naturalWidth === 0)
            .map((image) => image.currentSrc || image.src),
        loaderVisible: Boolean(document.querySelector('[role="status"]'))
    }))

    routeResults.push({
        path,
        status,
        loadMilliseconds: Date.now() - startedAt,
        navigationError,
        consoleErrors,
        failedRequests,
        badResponses,
        ...result
    })
    await page.close()
}

const screenshotResults = []
for (const theme of ["light", "dark"]) {
    for (const viewport of screenshotViewports) {
        for (const path of corePaths) {
            const page = await browser.newPage({ viewport })
            await page.addInitScript((selectedTheme) => {
                window.localStorage.setItem("felisfold-theme", selectedTheme)
            }, theme)
            await page.goto(`${productionUrl}${path}`, {
                waitUntil: "domcontentloaded",
                timeout: 30_000
            })
            const loader = page.locator('[role="status"]').first()
            if (await loader.count()) {
                await loader.waitFor({ state: "hidden", timeout: 12_000 })
            }
            await page.waitForTimeout(250)
            const routeName =
                path.replaceAll("/", "-").replace(/^-/, "") || "home"
            const fileName = `${viewport.name}-${theme}-${routeName}.png`
            await page.screenshot({
                path: `${outputDirectory}/${fileName}`,
                fullPage: true,
                animations: "disabled"
            })
            screenshotResults.push({
                path,
                viewport: viewport.name,
                theme,
                fileName
            })
            await page.close()
        }
    }
}

await browser.close()

const report = {
    productionUrl,
    generatedAt: new Date().toISOString(),
    routeCount: routes.length,
    routeResults,
    screenshotResults
}
await writeFile(
    `${outputDirectory}/report.json`,
    `${JSON.stringify(report, null, 2)}\n`,
    "utf8"
)

const failures = routeResults.filter(
    (result) =>
        result.status >= 400 ||
        result.navigationError ||
        result.consoleErrors.length ||
        result.failedRequests.length ||
        result.badResponses.length ||
        result.brokenImages.length ||
        result.horizontalOverflow > 1 ||
        result.loaderVisible ||
        !result.h1
)

console.log(
    JSON.stringify(
        {
            productionUrl,
            routeCount: routes.length,
            failureCount: failures.length,
            failures,
            screenshots: screenshotResults.length
        },
        null,
        2
    )
)
if (failures.length) process.exitCode = 1
