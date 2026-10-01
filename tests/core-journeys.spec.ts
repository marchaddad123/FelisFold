import { expect, test } from "@playwright/test"

test("home explains the breed and primary navigation reaches the guides", async ({
    page
}) => {
    await page.setViewportSize({ width: 1600, height: 1000 })
    await page.goto("/en")
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
        "Scottish Fold health & everyday care"
    )
    const navigation = page.locator("header nav").filter({ visible: true })
    await expect(navigation.getByRole("link")).toHaveCount(7)
    await navigation
        .getByRole("link", { name: "Health & care", exact: true })
        .click()
    await expect(page).toHaveURL("/en/health")
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
        "Health & care"
    )
    await expect(page.locator('a[href*="tracker"]')).toHaveCount(0)
    await expect(page.getByRole("textbox", { name: /email/i })).toHaveCount(0)
})

test("mobile menu navigates, closes with Escape and restores focus", async ({
    page
}) => {
    await page.setViewportSize({ width: 320, height: 812 })
    await page.goto("/en")
    const menu = page.getByRole("button", { name: "Open menu" })
    await menu.click()
    await expect(
        page
            .locator("#mobile-navigation")
            .getByRole("link", { name: "Home", exact: true })
    ).toBeFocused()
    await page.keyboard.press("Escape")
    await expect(menu).toBeFocused()
    await menu.click()
    await page
        .locator("#mobile-navigation")
        .getByRole("link", { name: "Fold mixes", exact: true })
        .click()
    await expect(page).toHaveURL("/en/mixes")
    await expect(page.locator("#mobile-navigation")).toHaveCount(0)
})

test("locale switching preserves a mix detail route and Arabic direction", async ({
    page
}) => {
    await page.setViewportSize({ width: 1600, height: 900 })
    await page.goto("/en/mixes/scottish-fold-siamese")
    for (const [locale, label] of [
        ["ar", "Language"],
        ["fr", "اللغة"],
        ["zh", "Langue"],
        ["en", "语言"]
    ]) {
        await page.getByRole("combobox", { name: label }).selectOption(locale!)
        await expect(page).toHaveURL(
            "/" + locale + "/mixes/scottish-fold-siamese"
        )
        await expect(page.locator("html")).toHaveAttribute(
            "dir",
            locale === "ar" ? "rtl" : "ltr"
        )
    }
})

test("theme persists and reduced motion uses an immediate change", async ({
    page
}) => {
    await page.emulateMedia({ reducedMotion: "reduce", colorScheme: "light" })
    await page.goto("/en")
    await page.getByRole("button", { name: "Switch to dark mode" }).click()
    await expect(page.locator("html")).toHaveClass(/dark/)
    await expect(page.locator(".theme-transition-overlay")).toHaveCount(0)
    await page.reload()
    await expect(page.locator("html")).toHaveClass(/dark/)
})

test("desktop navigation fits every language at 1280px", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 })
    for (const locale of ["en", "ar", "fr", "zh"]) {
        await page.goto("/" + locale)
        await expect(
            page
                .locator("header nav")
                .filter({ visible: true })
                .getByRole("link")
        ).toHaveCount(7)
        const overflow = await page.evaluate(
            () =>
                document.documentElement.scrollWidth -
                document.documentElement.clientWidth
        )
        expect(overflow, locale).toBeLessThanOrEqual(1)
    }
})

test("Lotus keeps confirmed observations and links to kitchen and early lessons", async ({
    page
}) => {
    await page.goto("/en/lotus")
    await expect(page.getByText("June 2021", { exact: true })).toHaveCount(2)
    await expect(
        page.getByTestId("lotus-story-timeline").getByRole("listitem")
    ).toHaveCount(10)
    await page
        .getByRole("link", {
            name: "What I wish I knew when Lotus was 3 months old",
            exact: true
        })
        .click()
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
        "3 months old"
    )
    await page.goto("/en/nutrition/lotus-kitchen")
    await expect(
        page.getByRole("heading", {
            name: "No measured meals published yet",
            exact: true
        })
    ).toBeVisible()
    await expect(page.locator("main")).toContainText(
        "not a scientific experiment"
    )
})
