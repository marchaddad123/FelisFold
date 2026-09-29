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

test("language switch keeps the current page and enables RTL", async ({
    page
}) => {
    await page.goto("/en/health")
    await expect(page.getByRole("status")).toBeHidden({ timeout: 15_000 })
    await page.getByRole("combobox", { name: "Language" }).selectOption("ar")
    await expect(page).toHaveURL(/\/ar\/health$/)
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl")
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
