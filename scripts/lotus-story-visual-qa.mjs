import { chromium } from "@playwright/test"
import AxeBuilder from "@axe-core/playwright"
import { mkdir, writeFile } from "node:fs/promises"

const outputDirectory = "qa-artifacts/story-refinement/visual"
const browser = await chromium.launch()
const views = [
    ["en", 1440, "light"],
    ["en", 1440, "dark"],
    ["en", 390, "light"],
    ["en", 390, "dark"],
    ["en", 320, "light"],
    ["ar", 1440, "dark"],
    ["ar", 390, "dark"],
    ["ar", 320, "light"],
    ["fr", 1024, "light"],
    ["zh", 390, "light"]
]
await mkdir(outputDirectory, { recursive: true })
const results = []
async function waitForVisiblePhotos(page) {
    await page.waitForFunction(() =>
        [...document.querySelectorAll("main img")]
            .filter((image) => {
                const rectangle = image.getBoundingClientRect()
                return (
                    rectangle.bottom > 0 && rectangle.top < window.innerHeight
                )
            })
            .every((image) => image.complete && image.naturalWidth > 0)
    )
}
for (const [locale, width, theme] of views) {
    const context = await browser.newContext({
        viewport: { width, height: 900 },
        reducedMotion: "reduce"
    })
    await context.addInitScript(
        (savedTheme) => localStorage.setItem("felisfold-theme", savedTheme),
        theme
    )
    const page = await context.newPage()
    const errors = []
    page.on("pageerror", (error) => errors.push(error.message))
    const name = `${locale}-${width}-${theme}`
    for (const route of [
        "lotus",
        "scottish-fold",
        "nutrition",
        ...(width === 320 ? ["mixes"] : [])
    ]) {
        await page.goto(`http://127.0.0.1:4173/${locale}/${route}`, {
            waitUntil: "networkidle"
        })
        await page.locator(".loading-stage").waitFor({ state: "hidden" })
        // Audit the live page before applying temporary screenshot styling.
        const accessibility = await new AxeBuilder({ page })
            .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
            .analyze()
        if (route === "lotus") {
            const story = page.getByTestId("lotus-story-scroll")
            await story.scrollIntoViewIfNeeded()
            await waitForVisiblePhotos(page)
            await story.locator("..").screenshot({
                style: 'header, a[href="#main-content"] { visibility: hidden; }',
                path: `${outputDirectory}/${name}-story-start.png`
            })
            await story.locator("..").getByRole("button").last().click()
            await waitForVisiblePhotos(page)
            await story.locator("..").screenshot({
                style: 'header, a[href="#main-content"] { visibility: hidden; }',
                path: `${outputDirectory}/${name}-story-latest.png`
            })
            await page.getByTestId("lotus-care-notebook").screenshot({
                style: 'header, a[href="#main-content"] { visibility: hidden; }',
                path: `${outputDirectory}/${name}-notebook.png`
            })
        } else if (route === "scottish-fold") {
            const care = page
                .getByRole("heading", {
                    name: /Make the route easier|اجعل الطريق أسهل|Faciliter le trajet|让路线更轻松/
                })
                .locator("..")
            await care.screenshot({
                style: 'header, a[href="#main-content"] { visibility: hidden; }',
                path: `${outputDirectory}/${name}-care.png`
            })
            const research = page
                .locator("section")
                .filter({
                    has: page.getByRole("heading", {
                        name: /Osteochondrodysplasia and variation|خلل|Ostéochondrodysplasie|骨软骨/
                    })
                })
                .last()
            if (await research.count())
                await research.screenshot({
                    style: 'header, a[href="#main-content"] { visibility: hidden; }',
                    path: `${outputDirectory}/${name}-research.png`
                })
        } else {
            const divider = page.getByTestId("cat-resting-divider")
            await divider.scrollIntoViewIfNeeded()
            await divider.screenshot({
                style: 'header, a[href="#main-content"] { visibility: hidden; }',
                path: `${outputDirectory}/${name}-${route}-cats.png`
            })
        }
        results.push({
            name,
            route,
            errors: [...errors],
            accessibility: accessibility.violations.map((v) => ({
                id: v.id,
                nodes: v.nodes.map((n) => n.target)
            })),
            overflow: await page.evaluate(
                () =>
                    document.documentElement.scrollWidth -
                    document.documentElement.clientWidth
            )
        })
        await writeFile(
            `${outputDirectory}/results.json`,
            JSON.stringify(results, null, 2)
        )
        console.log(
            name,
            route,
            accessibility.violations.length,
            "accessibility violations"
        )
    }
    await context.close()
}
const motionContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "no-preference"
})
const motionPage = await motionContext.newPage()
await motionPage.clock.install()
await motionPage.goto("http://127.0.0.1:4173/en/nutrition", {
    waitUntil: "networkidle"
})
await motionPage.locator(".loading-stage").waitFor({ state: "hidden" })
await motionPage.clock.pauseAt(
    await motionPage.evaluate(() => Date.now() + 1000)
)
await motionPage.evaluate(() => {
    Math.random = () => 0.1
})
await motionPage.clock.runFor(22000)
const motion = motionPage.getByTestId("global-cat-visits")
await motionPage.getByTestId("cat-visitor").waitFor()
await motionPage.clock.runFor(2500)
await motion.screenshot({ path: `${outputDirectory}/cat-snack-live.png` })
for (
    let step = 0;
    step < 24 && (await motion.getAttribute("data-cat-phase")) !== "eating";
    step++
)
    await motionPage.clock.runFor(500)
await motion.screenshot({ path: `${outputDirectory}/cat-eating-live.png` })
await browser.close()
console.log("Visual checks:", results.length)
if (
    results.some(
        (result) =>
            result.errors.length ||
            result.accessibility.length ||
            result.overflow > 1
    )
)
    process.exitCode = 1
