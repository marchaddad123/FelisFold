import { expect, test } from "@playwright/test"

test("tracker creates, edits, removes and persists local entries", async ({
    page
}) => {
    await page.goto("/en/tracker")
    await page.getByLabel("Food name").fill("Complete wet food")
    await page.getByLabel("Amount").fill("45")
    await page.getByLabel("Notes").fill("Ate slowly and finished the meal")
    await page.getByRole("button", { name: "Save today's entry" }).click()
    await expect(page.getByText("Saved locally ✓")).toBeVisible()
    await expect(page.getByText("Complete wet food")).toBeVisible()
    await page.reload()
    await expect(page.getByText("Complete wet food")).toBeVisible()
    await page.getByRole("button", { name: "Edit Meal entry" }).click()
    await page.getByLabel("Food name").fill("Updated complete wet food")
    await page.getByRole("button", { name: "Save changes" }).click()
    await expect(page.getByText("Updated complete wet food")).toBeVisible()
    await page.reload()
    await expect(page.getByText("Updated complete wet food")).toBeVisible()
    await page.getByRole("button", { name: "Remove Meal entry" }).click()
    await expect(page.getByText("No entries yet.")).toBeVisible()
})

test("tracker supports every entry type and validates numeric input", async ({
    page
}) => {
    test.setTimeout(120_000)
    await page.goto("/en/tracker")
    await expect(page.getByRole("status").first()).toBeHidden({
        timeout: 5_000
    })

    const saveButton = page.getByRole("button", { name: "Save today's entry" })
    let expectedEntryCount = 0
    const saveEntry = async () => {
        await saveButton.click()
        expectedEntryCount += 1
        await expect(
            page.getByRole("button", { name: /^Remove / })
        ).toHaveCount(expectedEntryCount)
    }
    const selectEntryType = async (entryType: string) => {
        const input = page.locator(
            `input[name="entry-type"][value="${entryType}"]`
        )
        await expect(async () => {
            await input.locator("..").click()
            await expect(input).toBeChecked()
        }).toPass({ timeout: 5_000 })
    }

    await selectEntryType("meal")
    await page.getByLabel("Food name").fill("Complete food")
    await page.getByLabel("Amount").fill("-1")
    expect(
        await page
            .getByLabel("Amount")
            .evaluate((input: HTMLInputElement) => input.checkValidity())
    ).toBe(false)
    await page.getByLabel("Amount").fill("40")
    await saveEntry()

    await selectEntryType("water")
    await page.getByLabel("Amount").fill("120")
    await saveEntry()

    await selectEntryType("vomit")
    await page.getByLabel("Hair was present").check()
    await saveEntry()

    await selectEntryType("litter")
    await page.getByLabel("Stool quality").selectOption("soft")
    await saveEntry()

    for (const entryType of [
        "appetite",
        "mood",
        "pain",
        "mobility",
        "grooming"
    ]) {
        await selectEntryType(entryType)
        await page.getByRole("slider").fill("4")
        await saveEntry()
    }

    await selectEntryType("medicine")
    await page
        .getByLabel("Medication", { exact: true })
        .last()
        .fill("Prescribed dose")
    await saveEntry()

    await selectEntryType("weight")
    await page.getByLabel("Amount").fill("4.8")
    await saveEntry()

    await selectEntryType("note")
    await page.getByLabel("Notes").fill("x".repeat(600))
    await expect(page.getByLabel("Notes")).toHaveValue("x".repeat(500))
    await saveEntry()

    await expect(page.getByRole("button", { name: /^Remove / })).toHaveCount(12)
    await page.reload()
    await expect(page.getByRole("button", { name: /^Remove / })).toHaveCount(12)

    const clearAllButton = page.getByRole("button", { name: "Clear all" })
    await clearAllButton.click()
    await expect(page.getByRole("button", { name: "Cancel" })).toBeFocused()
    await page.keyboard.press("Escape")
    await expect(clearAllButton).toBeFocused()
    await clearAllButton.click()
    await page.getByRole("button", { name: "Clear entries" }).click()
    await expect(page.getByText("No entries yet.")).toBeVisible()
    await expect(
        page.getByRole("heading", { name: "Build a useful health story." })
    ).toBeFocused()
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
        const audit = {
            sawLoader: false,
            imageAlt: "",
            messageWasPresent: false,
            pawWasPresent: false,
            progressFinished: false,
            progressRatio: 0,
            fadeStarted: false,
            hiddenAfterFade: false
        }
        Object.defineProperty(window, "__felisFoldLoaderAudit", {
            value: audit
        })

        const inspectLoader = () => {
            const loader = document.querySelector<HTMLElement>(".loading-stage")
            if (loader) {
                audit.sawLoader = true
                audit.imageAlt =
                    loader.querySelector("img")?.getAttribute("alt") ?? ""
                audit.messageWasPresent = Boolean(
                    loader.textContent?.includes("Getting things ready")
                )
                audit.pawWasPresent = Boolean(
                    loader.querySelector(".loading-paw")
                )
                audit.fadeStarted ||= loader.classList.contains(
                    "loading-screen-leave-active"
                )
            } else if (
                audit.sawLoader &&
                audit.progressFinished &&
                audit.fadeStarted
            ) {
                audit.hiddenAfterFade = true
            }
        }

        new MutationObserver(inspectLoader).observe(document, {
            attributes: true,
            childList: true,
            subtree: true
        })
        document.addEventListener(
            "animationend",
            (event) => {
                const progress = event.target
                if (
                    !(progress instanceof HTMLElement) ||
                    !progress.classList.contains("loading-progress")
                )
                    return
                const trackWidth =
                    progress.parentElement?.getBoundingClientRect().width
                audit.progressRatio = trackWidth
                    ? progress.getBoundingClientRect().width / trackWidth
                    : 0
                audit.progressFinished = true
                inspectLoader()
            },
            true
        )
    })
    await page.goto("/en", { waitUntil: "domcontentloaded" })
    await expect
        .poll(
            () =>
                page.evaluate(
                    () =>
                        (
                            window as Window & {
                                __felisFoldLoaderAudit: {
                                    hiddenAfterFade: boolean
                                }
                            }
                        ).__felisFoldLoaderAudit.hiddenAfterFade
                ),
            { timeout: 5_000 }
        )
        .toBe(true)

    const audit = await page.evaluate(
        () =>
            (
                window as Window & {
                    __felisFoldLoaderAudit: Record<
                        string,
                        string | number | boolean
                    >
                }
            ).__felisFoldLoaderAudit
    )
    expect(audit).toMatchObject({
        sawLoader: true,
        imageAlt: "A brown Scottish Fold peeking out from a warm blanket",
        messageWasPresent: true,
        pawWasPresent: true,
        progressFinished: true,
        fadeStarted: true,
        hiddenAfterFade: true
    })
    expect(audit.progressRatio).toBeGreaterThanOrEqual(0.99)
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
        "/en/care",
        "/en/about",
        "/en/contact",
        "/en/sources",
        "/ar"
    ]
    const widths = [320, 360, 375, 390, 430, 768, 820, 1024, 1440, 1920]
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
