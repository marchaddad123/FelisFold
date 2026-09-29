import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
    testDir: "./tests",
    fullyParallel: true,
    workers: 2,
    forbidOnly: Boolean(process.env.CI),
    retries: process.env.CI ? 2 : 0,
    reporter: "list",
    use: {
        baseURL: "http://127.0.0.1:4173",
        trace: "on-first-retry"
    },
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] }
        }
    ],
    webServer: {
        command: "npx nuxt dev --host 127.0.0.1 --port 4173 --no-fork",
        url: "http://127.0.0.1:4173/en",
        reuseExistingServer: !process.env.CI,
        timeout: 120_000
    }
})
