import { expect, test } from "@playwright/test"

for (const [query, path] of [
    ["cat won’t jump", "/health/pain-and-mobility"],
    ["stiff tail", "/health/osteochondrodysplasia"],
    ["vomiting food", "/health/vomiting"],
    ["Fold Siamese", "/mixes/scottish-fold-siamese"],
    ["what food", "/nutrition"],
    ["pet stairs", "/care"],
    ["when vet", "/health/when-to-call-a-vet"]
]) {
    test("owner-language search: " + query, async ({ page }) => {
        await page.goto("/en/search?q=" + encodeURIComponent(query!))
        await expect(
            page.locator('main a[href="/en' + path + '"]')
        ).toBeVisible()
        await page.getByRole("searchbox").fill("zzzz-unmatched-query")
        await expect(page.locator("main")).toContainText("No matching guide")
        await page.getByRole("button", { name: "Clear search" }).click()
        await expect(page.getByRole("searchbox")).toBeFocused()
        await expect(page.locator("main li")).not.toHaveCount(0)
    })
}
for (const [locale, query, expected] of [
    ["ar", "ذيل متيبس", "العظام"],
    ["fr", "queue raide", "Os, articulations"],
    ["zh", "呕吐", "呕吐、毛球"]
]) {
    test("localized search: " + locale, async ({ page }) => {
        await page.goto(
            "/" + locale + "/search?q=" + encodeURIComponent(query!)
        )
        await expect(page.locator("main")).toContainText(expected!)
        await expect(page.locator("main")).not.toContainText(
            "No matching guide"
        )
        await expect(page.locator("main")).not.toContainText(
            "Global veterinary evidence"
        )
    })
}
