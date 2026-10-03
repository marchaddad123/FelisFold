import { expect, test } from "@playwright/test"
import { lotusTimeline } from "../app/data/lotusTimeline"

for (const locale of ["en", "ar", "fr", "zh"]) {
    test(`Lotus story scrolls from the beginning to today: ${locale}`, async ({
        page
    }) => {
        await page.emulateMedia({ reducedMotion: "reduce" })
        await page.setViewportSize({
            width: locale === "ar" ? 390 : 1440,
            height: 900
        })
        await page.goto(`/${locale}/lotus`)
        const story = page.getByTestId("lotus-story-scroll")
        const chapters = story.locator("li[data-chapter]")
        expect(
            await chapters.evaluateAll((entries) =>
                entries.map((entry) => entry.getAttribute("data-chapter"))
            )
        ).toEqual(lotusTimeline.map((chapter) => chapter.id))
        await expect(chapters.first()).toContainText(
            lotusTimeline[0]!.dateLabel[locale as "en" | "ar" | "fr" | "zh"]
        )
        expect(
            await story.evaluate(
                (element) => element.scrollHeight > element.clientHeight
            )
        ).toBe(true)
        await story.focus()
        await page.keyboard.press("End")
        await expect
            .poll(() =>
                story.evaluate(
                    (element) =>
                        element.scrollTop + element.clientHeight >=
                        element.scrollHeight - 2
                )
            )
            .toBe(true)
        await page.keyboard.press("Home")
        await expect
            .poll(() => story.evaluate((element) => element.scrollTop))
            .toBe(0)
        const controls = story.locator("..").getByRole("button")
        await controls.last().click()
        await expect
            .poll(() =>
                story.evaluate((element) => {
                    const chapterTop = element
                        .querySelector("li:last-child h3")!
                        .getBoundingClientRect().top
                    const viewport = element.getBoundingClientRect()
                    return (
                        chapterTop >= viewport.top &&
                        chapterTop < viewport.bottom
                    )
                })
            )
            .toBe(true)
        await controls.first().click()
        await expect
            .poll(() => story.evaluate((element) => element.scrollTop))
            .toBe(0)
        expect(
            await chapters.locator("article p").count()
        ).toBeGreaterThanOrEqual(30)
        expect(await story.locator("figure").count()).toBe(5)
        const notebook = page.getByTestId("lotus-care-notebook")
        const panels = notebook.locator(":scope > *")
        expect(await panels.count()).toBe(6)
        expect(
            await panels.evaluateAll((entries) =>
                entries.every(
                    (entry) => getComputedStyle(entry).breakInside === "avoid"
                )
            )
        ).toBe(true)
        expect(
            await notebook.evaluate(
                (element) => getComputedStyle(element).columnCount
            )
        ).toBe(locale === "ar" ? "1" : "3")
        const currentText = await notebook.innerText()
        await page.setViewportSize({ width: 320, height: 812 })
        await expect
            .poll(() =>
                notebook.evaluate(
                    (element) => getComputedStyle(element).columnCount
                )
            )
            .toBe("1")
        expect(await notebook.innerText()).toBe(currentText)
        expect(
            await page.evaluate(
                () =>
                    document.documentElement.scrollWidth -
                    document.documentElement.clientWidth
            )
        ).toBeLessThanOrEqual(1)
    })
}
