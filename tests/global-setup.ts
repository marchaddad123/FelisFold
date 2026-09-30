import { spawn, type ChildProcess } from "node:child_process"
import { access } from "node:fs/promises"
import { resolve } from "node:path"

const testServerUrl = "http://127.0.0.1:4173/en"

async function serverIsReady() {
    try {
        const response = await fetch(testServerUrl)
        if (!response.ok) return false
        const html = await response.text()
        return html.includes("FelisFold") && html.includes('id="main-content"')
    } catch {
        return false
    }
}

async function waitForServer(serverProcess: ChildProcess) {
    const startedAt = Date.now()
    while (Date.now() - startedAt < 30_000) {
        if (serverProcess.exitCode !== null) {
            throw new Error(
                `The FelisFold test server exited with code ${serverProcess.exitCode}.`
            )
        }
        if (await serverIsReady()) return
        await new Promise((resolveWait) => setTimeout(resolveWait, 200))
    }
    throw new Error("The FelisFold test server did not become ready in 30s.")
}

async function stopServer(serverProcess: ChildProcess) {
    const serverHasExited = () =>
        serverProcess.exitCode !== null || serverProcess.signalCode !== null
    if (serverHasExited()) return
    const stopped = new Promise<void>((resolveStop) => {
        serverProcess.once("exit", () => resolveStop())
    })
    serverProcess.kill()
    await Promise.race([
        stopped,
        new Promise((resolveWait) => setTimeout(resolveWait, 2_000))
    ])
    if (!serverHasExited()) {
        serverProcess.kill("SIGKILL")
        await Promise.race([
            stopped,
            new Promise((resolveWait) => setTimeout(resolveWait, 1_000))
        ])
    }
    if (!serverHasExited()) {
        throw new Error("The FelisFold test server did not stop cleanly.")
    }
}

export default async function globalSetup() {
    if (await serverIsReady()) return

    const serverEntry = resolve(".output/server/index.mjs")
    try {
        await access(serverEntry)
    } catch {
        throw new Error(
            "The production server is not built. Run `npm run build` before invoking Playwright directly, or use `npm run test:e2e`."
        )
    }

    const serverProcess = spawn(process.execPath, [serverEntry], {
        cwd: process.cwd(),
        env: {
            ...process.env,
            NITRO_HOST: "127.0.0.1",
            NITRO_PORT: "4173"
        },
        stdio: ["ignore", "ignore", "inherit"],
        windowsHide: true
    })
    try {
        await waitForServer(serverProcess)
    } catch (error) {
        await stopServer(serverProcess)
        throw error
    }
    return () => stopServer(serverProcess)
}
