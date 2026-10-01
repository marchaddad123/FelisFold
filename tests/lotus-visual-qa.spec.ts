import { expect, test } from "@playwright/test"

const views = [
    {
        name: "desktop-light",
        width: 1440,
        height: 900,
        locale: "en",
        theme: "light"
    },
    {
        name: "desktop-dark",
        width: 1440,
        height: 900,
        locale: "en",
        theme: "dark"
    },
    {
        name: "mobile-light",
        width: 390,
        height: 844,
        locale: "en",
        theme: "light"
    },
    {
        name: "tablet-arabic-dark",
        width: 768,
        height: 1024,
        locale: "ar",
        theme: "dark"
    }
] as const

for (const view of views) {
    test(`Lotus visual QA: ${view.name}`, async ({ page }, testInfo) => {
        const consoleErrors: string[] = []
        page.on("console", (message) => {
            if (message.type() === "error") consoleErrors.push(message.text())
        })

        await page.setViewportSize({ width: view.width, height: view.height })
        await page.addInitScript((theme) => {
            window.localStorage.setItem("felisfold-theme", theme)
        }, view.theme)
        await page.goto(`/${view.locale}/lotus`)
        await expect(page.getByRole("status")).toBeHidden({ timeout: 15_000 })
        await expect(page.locator("html")).toHaveAttribute(
            "dir",
            view.locale === "ar" ? "rtl" : "ltr"
        )

        const overflow = await page.evaluate(
            () =>
                document.documentElement.scrollWidth -
                document.documentElement.clientWidth
        )
        expect(overflow).toBeLessThanOrEqual(1)
        expect(consoleErrors).toEqual([])

        await page.screenshot({
            path: testInfo.outputPath(`${view.name}.png`),
            fullPage: true,
            animations: "disabled"
        })
    })
}
