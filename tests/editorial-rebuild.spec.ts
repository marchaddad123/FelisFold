import { expect, test } from "@playwright/test"

test("design references stay outside runtime assets and removed features stay absent", async ({
    request,
    page
}) => {
    for (const name of [
        "01-home-reference.png",
        "09-mix-detail-scottish-fold-x-siamese-reference.png"
    ]) {
        expect((await request.get("/design-references/" + name)).status()).toBe(
            404
        )
    }
    await page.goto("/en")
    expect(
        await page
            .locator(
                'a[href*="tracker"], form[action*="subscribe"], input[type="email"]'
            )
            .count()
    ).toBe(0)
    expect(await page.locator('img[src*="design-references"]').count()).toBe(0)
})

for (const width of [320, 360, 390]) {
    test("editorial pages fit a " + width + "px screen", async ({ page }) => {
        test.setTimeout(90_000)
        await page.setViewportSize({ width, height: 812 })
        await page.emulateMedia({ reducedMotion: "reduce" })
        for (const path of [
            "",
            "/scottish-fold",
            "/health",
            "/nutrition",
            "/mixes",
            "/mixes/scottish-fold-siamese",
            "/mixes/scottish-fold-highlander",
            "/sources",
            "/about",
            "/lotus"
        ]) {
            await page.goto("/en" + path)
            await expect(page.locator(".loading-stage")).toBeHidden()
            expect(
                await page.evaluate(
                    () =>
                        document.documentElement.scrollWidth -
                        document.documentElement.clientWidth
                ),
                path
            ).toBeLessThanOrEqual(1)
        }
    })
}
