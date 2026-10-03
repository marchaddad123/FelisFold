import { chromium } from "@playwright/test"
import { writeFile } from "node:fs/promises"

// Local cold-browser comparison, not a field Core Web Vitals measurement.
const browser = await chromium.launch()
const results = []
try {
    for (const [revision, port] of [
        ["before", 4175],
        ["after", 4173]
    ]) {
        for (const path of ["", "/scottish-fold", "/nutrition"]) {
            const context = await browser.newContext({
                viewport: { width: 1440, height: 900 },
                reducedMotion: "reduce"
            })
            const page = await context.newPage()
            await page.addInitScript(() => {
                localStorage.setItem("felisfold-theme", "light")
                window.editorialLargestPaint = 0
                new PerformanceObserver((list) => {
                    for (const entry of list.getEntries())
                        window.editorialLargestPaint = entry.startTime
                }).observe({ type: "largest-contentful-paint", buffered: true })
            })
            await page.goto(`http://127.0.0.1:${port}/en${path}`)
            await page.locator(".loading-stage").waitFor({ state: "hidden" })
            if (await page.locator("main img").count())
                await page
                    .locator("main img")
                    .first()
                    .evaluate((photo) => photo.decode())
            await page.waitForTimeout(500)
            const initial = await page.evaluate(() => ({
                initialTransferBytes: performance
                    .getEntriesByType("resource")
                    .reduce((total, entry) => total + entry.transferSize, 0),
                localLargestPaintMilliseconds: window.editorialLargestPaint,
                domElements: document.querySelectorAll("*").length
            }))
            for (const photo of await page.locator("main img").all()) {
                await photo.scrollIntoViewIfNeeded()
                await photo.evaluate((image) => image.decode())
            }
            const images = await page.evaluate(() => {
                const urls = new Set(
                    [...document.querySelectorAll("main img")].map(
                        (photo) => photo.currentSrc
                    )
                )
                return {
                    mainImageCount:
                        document.querySelectorAll("main img").length,
                    fullPageImageTransferBytes: performance
                        .getEntriesByType("resource")
                        .filter((entry) => urls.has(entry.name))
                        .reduce(
                            (total, entry) => total + entry.transferSize,
                            0
                        ),
                    hero: [...document.querySelectorAll("main img")].find(
                        (photo) => photo.fetchPriority === "high"
                    )?.currentSrc
                }
            })
            results.push({
                revision,
                route: "/en" + path,
                ...initial,
                ...images
            })
            await context.close()
        }
    }
} finally {
    await browser.close()
}
await writeFile(
    "qa-artifacts/editorial/performance.json",
    JSON.stringify(results, null, 2) + "\n"
)
console.log(JSON.stringify(results, null, 2))
