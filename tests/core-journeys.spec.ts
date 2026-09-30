import { expect, test } from "@playwright/test"

test("home and primary navigation are available", async ({ page }) => {
    await page.goto("/en")
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
        "This is Lotus"
    )
    await page
        .getByRole("navigation", { name: "Main navigation" })
        .getByRole("link", { name: "Health", exact: true })
        .click()
    await expect(page).toHaveURL(/\/en\/health$/)
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
        "Health guides"
    )
})

test("mobile menu opens and navigates", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto("/en")
    await page.getByRole("button", { name: "Open menu" }).click()
    await expect(
        page.getByRole("navigation", { name: "Mobile navigation" })
    ).toBeVisible()
    await page
        .getByRole("navigation", { name: "Mobile navigation" })
        .getByRole("link", { name: "Nutrition", exact: true })
        .click()
    await expect(page).toHaveURL(/\/en\/nutrition$/)
})

test("mobile menu closes with escape and outside click while restoring focus", async ({
    page
}) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto("/en")
    const menuButton = page.getByRole("button", { name: "Open menu" })
    await menuButton.click()
    await expect(
        page
            .getByRole("navigation", { name: "Mobile navigation" })
            .getByRole("link", { name: "Home", exact: true })
    ).toBeFocused()
    await page.keyboard.press("Escape")
    await expect(menuButton).toBeFocused()

    await menuButton.click()
    await page.mouse.click(20, 780)
    await expect(
        page.getByRole("navigation", { name: "Mobile navigation" })
    ).toBeHidden()
    await expect(menuButton).toBeFocused()
})

test("language switch keeps the current page and enables RTL", async ({
    page
}) => {
    await page.goto("/en/health")
    await expect(page.getByRole("status")).toBeHidden({ timeout: 15_000 })
    const language = page.getByRole("combobox", { name: "Language" })
    await language.selectOption("ar")
    await expect(page).toHaveURL(/\/ar\/health$/)
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl")
    await language.selectOption("fr")
    await expect(page).toHaveURL(/\/fr\/health$/)
    await expect(page.locator("html")).toHaveAttribute("dir", "ltr")
    await language.selectOption("zh")
    await expect(page).toHaveURL(/\/zh\/health$/)
    await language.selectOption("en")
    await expect(page).toHaveURL(/\/en\/health$/)
})

test("route navigation resets scroll and the logo returns home", async ({
    page
}) => {
    await page.goto("/en")
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page
        .getByRole("navigation", { name: "Main navigation" })
        .getByRole("link", { name: "Health", exact: true })
        .click()
    await expect(page).toHaveURL(/\/en\/health$/)
    await expect
        .poll(() => page.evaluate(() => window.scrollY))
        .toBeLessThan(10)
    await page.getByRole("link", { name: "FelisFold home" }).click()
    await expect(page).toHaveURL(/\/en$/)
})

test("theme toggle uses the cat transition and persists", async ({ page }) => {
    await page.addInitScript(() => {
        window.localStorage.setItem("felisfold-theme", "light")
    })
    await page.goto("/en")
    await page.getByRole("button", { name: "Switch to dark mode" }).click()
    await expect(page.locator(".theme-transition-overlay")).toBeAttached()
    await expect(
        page.locator('.theme-cat-column[data-cat-color="black"]')
    ).toBeAttached()
    await expect(page.locator("html")).toHaveClass(/dark/, { timeout: 2_000 })
    await expect(page.locator(".theme-transition-overlay")).toBeHidden()

    await page.getByRole("button", { name: "Switch to light mode" }).click()
    await expect(
        page.locator('.theme-cat-column[data-cat-color="white"]')
    ).toBeAttached()
    await expect(page.locator("html")).not.toHaveClass(/dark/, {
        timeout: 2_000
    })
    await page.reload()
    await expect(page.locator("html")).not.toHaveClass(/dark/)
})

test("reduced motion switches theme without the running-cat overlay", async ({
    page
}) => {
    await page.emulateMedia({ reducedMotion: "reduce" })
    await page.goto("/en")
    await page
        .getByRole("button", { name: /Switch to (dark|light) mode/ })
        .click()
    await expect(page.locator(".theme-transition-overlay")).toHaveCount(0)
})

test("rapid theme clicks do not duplicate or strand the transition", async ({
    page
}) => {
    await page.goto("/en")
    const toggle = page.getByRole("button", {
        name: /Switch to (dark|light) mode/
    })
    await toggle.click()
    await toggle.click({ force: true })
    await toggle.click({ force: true })
    await expect(page.locator(".theme-transition-overlay")).toHaveCount(0, {
        timeout: 3_000
    })
    await expect(toggle).toBeEnabled()
    await expect(page.locator(".theme-cat-column")).toHaveCount(0)
})
