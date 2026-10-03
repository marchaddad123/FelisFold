import { expect, test, type Page } from "@playwright/test"

type Action = "food" | "ball" | "jump"

async function openPage(page: Page, path = "/en/nutrition") {
    await page.emulateMedia({ reducedMotion: "no-preference" })
    await page.clock.install()
    await page.goto(path)
    await expect(page.locator(".loading-stage")).toBeHidden()
    await page.clock.pauseAt(await page.evaluate(() => Date.now() + 1000))
}

async function chooseNextVisit(
    page: Page,
    action: Action,
    horizontal = 0.25,
    vertical = 0.25
) {
    await page.evaluate(
        ({ action, horizontal, vertical }) => {
            const values = [
                { food: 0.1, ball: 0.5, jump: 0.9 }[action],
                horizontal,
                vertical,
                0.25
            ]
            let index = 0
            Math.random = () => values[index++] ?? 0.25
        },
        { action, horizontal, vertical }
    )
}

async function firstVisit(
    page: Page,
    action: Action,
    horizontal = 0.25,
    vertical = 0.25
) {
    await chooseNextVisit(page, action, horizontal, vertical)
    await page.clock.runFor(22000)
    await expect(page.getByTestId("cat-visitor")).toHaveCount(1)
    await expect(
        page.getByTestId("cat-visitor").locator("canvas")
    ).toHaveAttribute("data-cat-frame", /\d+/)
}

async function advanceTo(page: Page, phase: string) {
    for (let step = 0; step < 40; step++) {
        if (
            (await page
                .getByTestId("global-cat-visits")
                .getAttribute("data-cat-phase")) === phase
        )
            return
        await page.clock.runFor(250)
    }
    await expect(page.getByTestId("global-cat-visits")).toHaveAttribute(
        "data-cat-phase",
        phase
    )
}

async function placement(page: Page) {
    return page.evaluate(() => {
        const cat = document
            .querySelector('[data-testid="cat-visitor"]')!
            .getBoundingClientRect()
        const bowl = document
            .querySelector('[data-testid="cat-bowl"]')
            ?.getBoundingClientRect()
        return {
            cat: {
                left: cat.left,
                right: cat.right,
                top: cat.top,
                bottom: cat.bottom,
                width: cat.width
            },
            bowl: bowl
                ? {
                      left: bowl.left,
                      right: bowl.right,
                      top: bowl.top,
                      bottom: bowl.bottom
                  }
                : null,
            headerBottom: document
                .querySelector("header")!
                .getBoundingClientRect().bottom,
            viewportHeight: innerHeight,
            viewportWidth: innerWidth,
            overflow: document.documentElement.scrollWidth - innerWidth
        }
    })
}

for (const locale of ["en", "ar"]) {
    for (const [width, horizontal, vertical, corner] of [
        [320, 0.1, 0.1, "top-left"],
        [390, 0.9, 0.1, "top-right"],
        [1440, 0.1, 0.9, "bottom-left"],
        [1440, 0.9, 0.9, "bottom-right"]
    ] as const) {
        test(`snack stays aligned and drains in ${corner}: ${locale}, ${width}px`, async ({
            page
        }) => {
            await page.setViewportSize({ width, height: 900 })
            await openPage(page, `/${locale}/nutrition`)
            await firstVisit(page, "food", horizontal, vertical)
            await expect(page.getByTestId("global-cat-visits")).toHaveAttribute(
                "data-cat-placement",
                corner
            )
            const canvas = page.getByTestId("cat-visitor").locator("canvas")
            await expect(canvas).toHaveAttribute("data-cat-sequence", "eat")
            await advanceTo(page, "eating")
            await expect(page.locator("[data-cat-food]")).toHaveAttribute(
                "data-food-remaining",
                "1"
            )
            const position = await placement(page)
            expect(position.cat.left).toBeGreaterThanOrEqual(15)
            expect(position.cat.right).toBeLessThanOrEqual(width - 15)
            expect(position.cat.top).toBeGreaterThanOrEqual(
                position.headerBottom + 15
            )
            expect(position.cat.bottom).toBeLessThanOrEqual(885)
            expect(position.bowl!.left).toBeGreaterThanOrEqual(14)
            expect(position.bowl!.right).toBeLessThanOrEqual(width - 14)
            expect(position.overflow).toBeLessThanOrEqual(1)
            // The filmed muzzle is mirrored with the complete frame. The bowl
            // interior keeps the same calibration at either physical edge in RTL.
            const mouthIsInBowl = await canvas.evaluate(
                (element: HTMLCanvasElement, right) => {
                    const cat = element.getBoundingClientRect()
                    const interior = document
                        .querySelector("[data-bowl-interior]")!
                        .getBoundingClientRect()
                    const scale = cat.width / 400
                    const mouthX = cat.left + (right ? 38 : 362) * scale
                    const mouthY = cat.top + 184 * scale
                    return (
                        mouthX >= interior.left &&
                        mouthX <= interior.right &&
                        mouthY >= interior.top &&
                        mouthY <= interior.bottom
                    )
                },
                horizontal > 0.5
            )
            expect(mouthIsInBowl).toBe(true)
            const pixels = await canvas.evaluate(
                (element: HTMLCanvasElement) => {
                    const rgba = element
                        .getContext("2d")!
                        .getImageData(0, 0, 320, 208).data
                    return Array.from(rgba).filter(
                        (alpha, index) => index % 4 === 3 && alpha > 200
                    ).length
                }
            )
            expect(pixels).toBeGreaterThan(8000)
            await page.clock.runFor(1650)
            expect(
                Number(
                    await page
                        .locator("[data-cat-food]")
                        .getAttribute("data-food-remaining")
                )
            ).toBeLessThan(1)
            await advanceTo(page, "happy")
            await expect(page.locator("[data-cat-food]")).toHaveAttribute(
                "data-food-remaining",
                "0"
            )
            await advanceTo(page, "waiting")
            await expect(page.getByTestId("cat-visitor")).toHaveCount(0)
            await expect(page.getByTestId("cat-bowl")).toHaveCount(0)
        })
    }
}

for (const action of ["ball", "jump"] as const) {
    for (const [horizontal, vertical] of [
        [0.15, 0.2],
        [0.85, 0.8]
    ]) {
        test(`${action} uses a free position and real changing frames: ${horizontal}, ${vertical}`, async ({
            page
        }) => {
            await page.setViewportSize({ width: 1440, height: 900 })
            await openPage(page, "/en/lotus")
            await firstVisit(page, action, horizontal, vertical)
            await advanceTo(page, action === "ball" ? "playing" : "jumping")
            await expect(page.getByTestId("global-cat-visits")).toHaveAttribute(
                "data-cat-placement",
                "free"
            )
            const position = await placement(page)
            expect(position.cat.left).toBeCloseTo(
                16 + (1440 - position.cat.width - 32) * horizontal!,
                0
            )
            expect(position.cat.top).toBeCloseTo(
                position.headerBottom +
                    16 +
                    (900 -
                        (position.headerBottom + 16) -
                        (position.cat.bottom - position.cat.top) -
                        16) *
                        vertical!,
                0
            )
            const canvas = page.getByTestId("cat-visitor").locator("canvas")
            await expect(canvas).toHaveAttribute(
                "data-cat-sequence",
                action === "ball" ? "play" : "jump"
            )
            const before = await canvas.evaluate((element: HTMLCanvasElement) =>
                element.toDataURL()
            )
            await page.clock.runFor(200)
            expect(
                await canvas.evaluate((element: HTMLCanvasElement) =>
                    element.toDataURL()
                )
            ).not.toBe(before)
            await advanceTo(page, "waiting")
            await expect(page.getByTestId("cat-visitor")).toHaveCount(0)
        })
    }
}

test("production has no cat panel and ignores old developer mute preferences", async ({
    page
}) => {
    await page.addInitScript(() =>
        localStorage.setItem(
            "felisfold-cats",
            JSON.stringify({ visits: false, sound: false })
        )
    )
    await openPage(page, "/en/about")
    await expect(page.locator("#cat-visit-controls")).toHaveCount(0)
    await expect(
        page.getByRole("button", { name: "Cat visits", exact: true })
    ).toHaveCount(0)
    await firstVisit(page, "jump")
})

test("random visits stay global, never repeat consecutively, and never overlap", async ({
    page
}) => {
    await openPage(page, "/en")
    await firstVisit(page, "food")
    await page
        .getByRole("link", { name: "Meet Lotus", exact: true })
        .first()
        .click()
    await page.clock.runFor(1000)
    await expect(page).toHaveURL("/en/lotus")
    await expect(page.getByTestId("global-cat-visits")).toHaveCount(1)
    await expect(page.getByTestId("cat-visitor")).toHaveCount(1)
    await advanceTo(page, "waiting")
    await page.clock.runFor(44000)
    await expect(page.getByTestId("cat-visitor")).toHaveCount(0)
    await page.clock.runFor(46000)
    await expect(page.getByTestId("cat-visitor")).toHaveCount(1)
    expect(
        await page
            .getByTestId("global-cat-visits")
            .getAttribute("data-cat-action")
    ).not.toBe("food")
    await expect(
        page
            .getByTestId("cat-visitor")
            .locator('canvas[data-cat-sequence="walk"]')
    ).toHaveCount(0)
})

test("reduced motion suppresses automatic cats and a changed preference cancels a visit", async ({
    page
}) => {
    await openPage(page, "/en/sources")
    await firstVisit(page, "food")
    await page.emulateMedia({ reducedMotion: "reduce" })
    await expect(page.getByTestId("cat-visitor")).toHaveCount(0)
    await page.clock.runFor(120000)
    await expect(page.getByTestId("cat-visitor")).toHaveCount(0)
})

test("sound is enabled after a trusted gesture, plays once per visit, and keeps public attribution", async ({
    page,
    request
}) => {
    await page.addInitScript(() => {
        const testWindow = window as Window & { meowCount: number }
        testWindow.meowCount = 0
        const originalStart = AudioBufferSourceNode.prototype.start
        AudioBufferSourceNode.prototype.start = function (...argumentsList) {
            testWindow.meowCount++
            return originalStart.apply(this, argumentsList)
        }
    })
    await openPage(page, "/en/about")
    await firstVisit(page, "food")
    expect(
        await page.evaluate(
            () => (window as Window & { meowCount: number }).meowCount
        )
    ).toBe(0)
    await page.keyboard.press("ArrowDown")
    await expect
        .poll(() =>
            page.evaluate(
                () => (window as Window & { meowCount: number }).meowCount
            )
        )
        .toBe(1)
    await page.keyboard.press("ArrowDown")
    expect(
        await page.evaluate(
            () => (window as Window & { meowCount: number }).meowCount
        )
    ).toBe(1)
    await advanceTo(page, "waiting")
    await page.clock.runFor(90000)
    await expect(page.getByTestId("cat-visitor")).toHaveCount(1)
    await expect
        .poll(() =>
            page.evaluate(
                () => (window as Window & { meowCount: number }).meowCount
            )
        )
        .toBe(2)
    const audio = await request.get("/audio/cat-meow.mp3")
    expect(audio.ok()).toBe(true)
    expect((await audio.body()).length).toBeGreaterThan(10000)
    await page.goto("/en/sources")
    await expect(
        page.getByRole("link", { name: "Sound credit", exact: true })
    ).toHaveAttribute(
        "href",
        "https://commons.wikimedia.org/wiki/File:Meow.ogg"
    )
})

test("audio failures never permanently mute later visits", async ({ page }) => {
    await page.addInitScript(() => {
        const testWindow = window as Window & { meowCount: number }
        testWindow.meowCount = 0
        const originalStart = AudioBufferSourceNode.prototype.start
        AudioBufferSourceNode.prototype.start = function (...argumentsList) {
            testWindow.meowCount++
            return originalStart.apply(this, argumentsList)
        }
    })
    await page.route("**/audio/cat-meow.mp3", (route) => route.abort())
    await openPage(page)
    await page.keyboard.press("ArrowDown")
    await firstVisit(page, "food")
    await page.clock.runFor(100)
    expect(
        await page.evaluate(
            () => (window as Window & { meowCount: number }).meowCount
        )
    ).toBe(0)
    await page.unroute("**/audio/cat-meow.mp3")
    await advanceTo(page, "waiting")
    await page.clock.runFor(90000)
    await expect(page.getByTestId("cat-visitor")).toHaveCount(1)
    await expect
        .poll(() =>
            page.evaluate(
                () => (window as Window & { meowCount: number }).meowCount
            )
        )
        .toBe(1)
})

test("resize and hidden tabs cancel visits without catch-up animations", async ({
    page
}) => {
    await openPage(page, "/en/health")
    await firstVisit(page, "food")
    await page.setViewportSize({ width: 390, height: 700 })
    await expect(page.getByTestId("cat-visitor")).toHaveCount(0)
    await page.clock.runFor(90000)
    await expect(page.getByTestId("cat-visitor")).toHaveCount(1)
    await page.evaluate(() => {
        Object.defineProperty(document, "hidden", {
            configurable: true,
            value: true
        })
        document.dispatchEvent(new Event("visibilitychange"))
    })
    await expect(page.getByTestId("cat-visitor")).toHaveCount(0)
    await page.clock.runFor(120000)
    await expect(page.getByTestId("cat-visitor")).toHaveCount(0)
    await page.evaluate(() => {
        Object.defineProperty(document, "hidden", {
            configurable: true,
            value: false
        })
        document.dispatchEvent(new Event("visibilitychange"))
    })
    await page.clock.runFor(1000)
    await expect(page.getByTestId("cat-visitor")).toHaveCount(0)
})

test("unavailable footage leaves the theme usable and shows no broken visitor", async ({
    page
}) => {
    await page.route("**/images/cat/footage/*.webp", (route) => route.abort())
    await openPage(page, "/en/about")
    await chooseNextVisit(page, "food")
    await page.clock.runFor(22000)
    await page.clock.runFor(100)
    await expect(page.getByTestId("cat-visitor")).toHaveCount(0)
    await page
        .getByRole("button", { name: /Switch to (dark|light) mode/ })
        .click()
    await expect(page.locator(".theme-transition-overlay")).toHaveCount(0)
    await expect(
        page.getByRole("button", { name: /Switch to (dark|light) mode/ })
    ).toBeEnabled()
})

test("theme changes immediately, cancels a visitor, and retains its six-second effect", async ({
    page
}) => {
    await page.emulateMedia({ colorScheme: "light" })
    await openPage(page, "/en")
    await firstVisit(page, "food")
    for (const next of ["dark", "light"]) {
        await page
            .getByRole("button", { name: `Switch to ${next} mode` })
            .click()
        await expect(page.locator("html")).toHaveAttribute("data-theme", next)
        await expect(page.getByTestId("cat-visitor")).toHaveCount(0)
        const cats = page.locator(".theme-cat-column canvas")
        await expect(cats).toHaveCount(3)
        await expect(cats.first()).toHaveAttribute("data-cat-frame", /\d+/)
        await page.clock.runFor(2800)
        await expect(page.locator(".theme-transition-overlay")).toBeVisible()
        await page.clock.runFor(3300)
        await expect(page.locator(".theme-transition-overlay")).toHaveCount(0)
    }
})
