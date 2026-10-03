import { chromium } from "@playwright/test"
import AxeBuilder from "@axe-core/playwright"
import { mkdir, writeFile } from "node:fs/promises"

const baseUrl = process.env.FELISFOLD_QA_URL || "http://127.0.0.1:4174"
const outputDirectory =
    process.env.FELISFOLD_SCREENSHOT_DIR || "qa-artifacts/editorial/final"
const requestedPaths = process.argv
    .slice(2)
    .map((path) => (path === "/" ? "" : path))
const paths = requestedPaths.length
    ? requestedPaths
    : [
          "",
          "/scottish-fold",
          "/health",
          "/nutrition",
          "/mixes",
          "/mixes/scottish-fold-siamese",
          "/mixes/scottish-fold-highlander",
          "/lotus",
          "/sources",
          "/about"
      ]
const views = requestedPaths.length
    ? [
          {
              name: "desktop-light",
              width: 1440,
              height: 900,
              theme: "light",
              locale: "en"
          }
      ]
    : [
          {
              name: "mobile-light",
              width: 375,
              height: 812,
              theme: "light",
              locale: "en"
          },
          {
              name: "mobile-dark",
              width: 375,
              height: 812,
              theme: "dark",
              locale: "en"
          },
          {
              name: "mobile-wide",
              width: 430,
              height: 932,
              theme: "light",
              locale: "en"
          },
          {
              name: "tablet",
              width: 768,
              height: 1024,
              theme: "light",
              locale: "en"
          },
          {
              name: "desktop-light",
              width: 1440,
              height: 900,
              theme: "light",
              locale: "en"
          },
          {
              name: "desktop-dark",
              width: 1440,
              height: 900,
              theme: "dark",
              locale: "en"
          },
          {
              name: "arabic-mobile",
              width: 375,
              height: 812,
              theme: "light",
              locale: "ar"
          },
          {
              name: "arabic-desktop",
              width: 1440,
              height: 900,
              theme: "light",
              locale: "ar"
          }
      ]
await mkdir(outputDirectory, { recursive: true })
const browser = await chromium.launch({ headless: true })
const results = []
try {
    for (const path of paths) {
        for (const view of views) {
            const context = await browser.newContext({
                viewport: { width: view.width, height: view.height },
                reducedMotion: "reduce"
            })
            const page = await context.newPage()
            const errors = []
            page.on("pageerror", (error) => errors.push(error.message))
            page.on("console", (message) => {
                if (message.type() === "error") errors.push(message.text())
            })
            await page.addInitScript(
                (theme) => localStorage.setItem("felisfold-theme", theme),
                view.theme
            )
            const route = `/${view.locale}${path}`
            const response = await page.goto(`${baseUrl}${route}`)
            await page
                .locator(".loading-stage")
                .waitFor({ state: "hidden", timeout: 20000 })
            // Visit every section so below-fold lazy images are included in the capture.
            await page.evaluate(async () => {
                for (
                    let position = 0;
                    position < document.body.scrollHeight;
                    position += window.innerHeight
                ) {
                    window.scrollTo(0, position)
                    await new Promise((resolveWait) =>
                        setTimeout(resolveWait, 60)
                    )
                }
                await Promise.all(
                    [...document.images].map((photo) =>
                        photo.decode().catch(() => {})
                    )
                )
                window.scrollTo(0, 0)
            })
            const measurements = await page.evaluate(() => ({
                overflow:
                    document.documentElement.scrollWidth -
                    document.documentElement.clientWidth,
                brokenImages: [...document.images]
                    .filter(
                        (photo) => !photo.complete || photo.naturalWidth === 0
                    )
                    .map((photo) => photo.currentSrc),
                imageCount: document.querySelectorAll("main img").length,
                domElements: document.querySelectorAll("*").length,
                imageTransferBytes: performance
                    .getEntriesByType("resource")
                    .filter((resource) =>
                        [...document.images].some(
                            (photo) => photo.currentSrc === resource.name
                        )
                    )
                    .reduce(
                        (total, resource) => total + resource.transferSize,
                        0
                    )
            }))
            const accessibility = (
                await new AxeBuilder({ page })
                    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
                    .analyze()
            ).violations.map((violation) => ({
                id: violation.id,
                nodes: violation.nodes.map((node) => node.target)
            }))
            const filename = `${path.slice(1).replaceAll("/", "-") || "home"}-${view.name}.png`
            await page.screenshot({
                path: `${outputDirectory}/${filename}`,
                fullPage: true,
                animations: "disabled"
            })
            results.push({
                route,
                view: view.name,
                status: response.status(),
                ...measurements,
                errors,
                accessibility
            })
            await writeFile(
                `${outputDirectory}/results.json`,
                JSON.stringify(results, null, 2) + "\n"
            )
            console.log(
                `${route} ${view.name}: ${response.status()}, ${measurements.imageCount} images, overflow ${measurements.overflow}, errors ${errors.length}, a11y ${accessibility.length}`
            )
            await context.close()
        }
    }
} finally {
    await browser.close()
}
if (
    results.some(
        (result) =>
            result.status !== 200 ||
            result.overflow > 1 ||
            result.brokenImages.length ||
            result.errors.length ||
            result.accessibility.length
    )
)
    process.exitCode = 1
