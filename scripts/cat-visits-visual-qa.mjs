import { chromium } from "@playwright/test"
import AxeBuilder from "@axe-core/playwright"
import { mkdir, writeFile } from "node:fs/promises"

const baseUrl = process.env.QA_BASE_URL ?? "http://127.0.0.1:4173"
const outputDirectory = "qa-artifacts/cat-footage/placements"
await mkdir(outputDirectory, { recursive: true })
const browser = await chromium.launch()
const results = []
const variants = [
    {
        locale: "en",
        width: 1440,
        height: 900,
        theme: "light",
        action: "food",
        horizontal: 0.1,
        vertical: 0.1
    },
    {
        locale: "en",
        width: 390,
        height: 900,
        theme: "dark",
        action: "food",
        horizontal: 0.9,
        vertical: 0.1
    },
    {
        locale: "ar",
        width: 320,
        height: 900,
        theme: "light",
        action: "food",
        horizontal: 0.1,
        vertical: 0.9
    },
    {
        locale: "ar",
        width: 1440,
        height: 900,
        theme: "dark",
        action: "food",
        horizontal: 0.9,
        vertical: 0.9
    },
    {
        locale: "fr",
        width: 390,
        height: 900,
        theme: "light",
        action: "jump",
        horizontal: 0.2,
        vertical: 0.2
    },
    {
        locale: "zh",
        width: 320,
        height: 900,
        theme: "dark",
        action: "ball",
        horizontal: 0.8,
        vertical: 0.7
    },
    {
        locale: "en",
        width: 1440,
        height: 900,
        theme: "dark",
        action: "ball",
        horizontal: 0.2,
        vertical: 0.3
    },
    {
        locale: "ar",
        width: 568,
        height: 320,
        theme: "light",
        action: "jump",
        horizontal: 0.8,
        vertical: 0.7
    }
]

for (const variant of variants) {
    const name = `${variant.locale}-${variant.width}-${variant.height}-${variant.theme}-${variant.action}`
    const context = await browser.newContext({
        viewport: { width: variant.width, height: variant.height },
        reducedMotion: "no-preference",
        colorScheme: variant.theme
    })
    const page = await context.newPage()
    const errors = []
    page.on("pageerror", (error) => errors.push(error.message))
    await page.clock.install()
    await page.goto(`${baseUrl}/${variant.locale}/nutrition`)
    await page.locator(".loading-stage").waitFor({ state: "hidden" })
    await page.clock.pauseAt(await page.evaluate(() => Date.now() + 1000))
    await page.evaluate(({ action, horizontal, vertical }) => {
        const values = [
            { food: 0.1, ball: 0.5, jump: 0.9 }[action],
            horizontal,
            vertical,
            0.25
        ]
        let index = 0
        Math.random = () => values[index++] ?? 0.25
    }, variant)
    await page.clock.runFor(22000)
    await page.getByTestId("cat-visitor").waitFor()
    await page
        .getByTestId("cat-visitor")
        .locator("canvas[data-cat-frame]")
        .waitFor()
    await page.clock.runFor(variant.action === "jump" ? 900 : 1800)
    await page.screenshot({ path: `${outputDirectory}/${name}.png` })
    const position = await page.evaluate(() => {
        const cat = document
            .querySelector('[data-testid="cat-visitor"]')
            .getBoundingClientRect()
        return {
            left: cat.left,
            right: cat.right,
            top: cat.top,
            bottom: cat.bottom,
            headerBottom: document
                .querySelector("header")
                .getBoundingClientRect().bottom,
            placement: document
                .querySelector('[data-testid="global-cat-visits"]')
                .getAttribute("data-cat-placement"),
            controlsCount: document.querySelectorAll(
                "#cat-visit-controls, [aria-controls='cat-visit-controls']"
            ).length,
            overflow: document.documentElement.scrollWidth - innerWidth
        }
    })
    if (variant.action === "food") {
        await page.clock.runFor(7100)
        await page.screenshot({
            path: `${outputDirectory}/${name}-empty-bowl.png`
        })
    }
    // Axe needs running browser timers. The screenshots above keep the actual
    // decoded animation at a deterministic frame, without any public debug hook.
    await page.clock.resume()
    const audit = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze()
    results.push({
        name,
        errors,
        ...position,
        violations: audit.violations.map((v) => ({
            id: v.id,
            targets: v.nodes.map((n) => n.target)
        }))
    })
    console.log(
        name,
        audit.violations.length,
        "accessibility violations",
        position.placement
    )
    await context.close()
}
await browser.close()
await writeFile(
    `${outputDirectory}/visual-results.json`,
    JSON.stringify(results, null, 2)
)
if (
    results.some(
        (result) =>
            result.errors.length ||
            result.violations.length ||
            result.overflow > 1 ||
            result.controlsCount ||
            result.top < result.headerBottom + 15
    )
)
    process.exitCode = 1
