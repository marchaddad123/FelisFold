import { expect, test } from "@playwright/test"

test("tracker saves and reloads local entries", async ({ page }) => {
    await page.goto("/en/tracker")
    await page.getByLabel("Food name").fill("Complete wet food")
    await page.getByLabel("Amount").fill("45")
    await page.getByLabel("Notes").fill("Ate slowly and finished the meal")
    await page.getByRole("button", { name: "Save today's entry" }).click()
    await expect(page.getByText("Saved locally ✓")).toBeVisible()
    await expect(page.getByText("Complete wet food")).toBeVisible()
    await page.reload()
    await expect(page.getByText("Complete wet food")).toBeVisible()
})

test("local search covers health, nutrition and resources", async ({
    page
}) => {
    await page.goto("/en/search")
    await expect(page.getByRole("status")).toBeHidden({ timeout: 15_000 })
    const search = page.getByRole("searchbox")
    await search.fill("vomit")
    await expect(page.getByText(/results?$/)).toBeVisible()
    await expect(
        page.getByRole("link", { name: /Vomiting/ }).first()
    ).toBeVisible()
    await search.fill("TRPV4")
    await expect(
        page.getByRole("link", { name: /TRPV4/ }).first()
    ).toBeVisible()
})

test("loading screen presents the branded photo and paw progress", async ({
    page
}) => {
    await page.addInitScript(() => {
        window.localStorage.setItem("felisfold-theme", "light")
    })
    await page.goto("/en", { waitUntil: "domcontentloaded" })
    const loadingScreen = page.getByRole("status")
    await expect(loadingScreen).toBeVisible()
    await expect(
        loadingScreen.getByRole("img", {
            name: "A blue Scottish Fold resting with a paw near the camera"
        })
    ).toBeVisible()
    await expect(loadingScreen.getByText("Getting things ready…")).toBeVisible()
    await expect(loadingScreen.locator(".loading-paw")).toBeVisible()
    await expect(loadingScreen).toBeHidden({ timeout: 15_000 })
})

test("responsive notes, observation bullets and short search results stay aligned", async ({
    page
}) => {
    await page.setViewportSize({ width: 768, height: 900 })
    await page.goto("/en")
    await expect(page.getByRole("status")).toBeHidden({ timeout: 15_000 })

    const storyNote = page.getByText("It started with these little changes…")
    await storyNote.scrollIntoViewIfNeeded()
    const storyNoteBox = await storyNote.boundingBox()
    expect(storyNoteBox).not.toBeNull()
    expect(storyNoteBox!.x).toBeGreaterThanOrEqual(0)
    expect(storyNoteBox!.x + storyNoteBox!.width).toBeLessThanOrEqual(768)

    await page.evaluate(() => document.documentElement.classList.add("dark"))
    await expect(
        page.getByText("Small steps. Brighter days. For every Fold.")
    ).toHaveCSS("color", "rgb(24, 35, 31)")

    await page.goto("/en/lotus")
    await expect(page.getByRole("status")).toBeHidden({ timeout: 15_000 })
    const observationCard = page
        .getByRole("heading", { name: "What I’ve noticed" })
        .locator("..")
    const bulletRows = observationCard.locator("li")
    await expect(bulletRows).toHaveCount(5)
    for (const row of await bulletRows.all()) {
        const bullet = row.locator("span").first()
        const bulletBox = await bullet.boundingBox()
        const rowBox = await row.boundingBox()
        expect(bulletBox).not.toBeNull()
        expect(rowBox).not.toBeNull()
        expect(bulletBox!.width).toBe(bulletBox!.height)
        expect(bulletBox!.width).toBeLessThanOrEqual(10)
        expect(bulletBox!.y).toBeGreaterThan(rowBox!.y)
        expect(bulletBox!.y).toBeLessThan(rowBox!.y + 20)
    }

    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto("/en/search")
    await expect(page.getByRole("status")).toBeHidden({ timeout: 15_000 })
    await page.getByRole("searchbox").fill("TRPV4")
    const lastResult = page.locator("main a.group").last()
    await expect(lastResult).toBeVisible()
    const resultBox = await lastResult.boundingBox()
    const newsletterBox = await page
        .getByText("Gentle guidance for better cat days.")
        .boundingBox()
    expect(resultBox).not.toBeNull()
    expect(newsletterBox).not.toBeNull()
    expect(newsletterBox!.y - (resultBox!.y + resultBox!.height)).toBeLessThan(
        160
    )
})

test("main routes avoid horizontal overflow at common widths", async ({
    page
}) => {
    test.setTimeout(180_000)
    const routes = [
        "/en",
        "/en/health",
        "/en/nutrition",
        "/en/lotus",
        "/en/tracker",
        "/en/resources",
        "/ar"
    ]
    const widths = [375, 430, 768, 1024, 1440]
    for (const width of widths) {
        await page.setViewportSize({ width, height: 900 })
        for (const route of routes) {
            await page.goto(route)
            const overflow = await page.evaluate(
                () =>
                    document.documentElement.scrollWidth -
                    document.documentElement.clientWidth
            )
            expect(
                overflow,
                `${route} overflow at ${width}px`
            ).toBeLessThanOrEqual(1)
        }
    }
})

test("unknown pages render the branded error page", async ({ page }) => {
    await page.goto("/en/not-a-real-page")
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
        "wandered off"
    )
})
