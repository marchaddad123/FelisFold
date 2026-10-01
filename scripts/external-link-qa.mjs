import { readFile } from "node:fs/promises"

const sourceFiles = [
    "app/data/healthTopics.ts",
    "app/data/creatorProfile.ts",
    "app/pages/[locale]/sources.vue",
    "app/pages/[locale]/resources.vue"
]
const knownBotProtectedUrls = new Set([
    "https://journals.sagepub.com/doi/10.1177/1098612X241241951",
    "https://vgl.ucdavis.edu/",
    "https://vgl.ucdavis.edu/test/pkd1-cat",
    "https://vgl.ucdavis.edu/test/scottish-fold",
    "https://www.linkedin.com/in/marc-haddad-bb074b220/"
])

const sourceText = (
    await Promise.all(sourceFiles.map((file) => readFile(file, "utf8")))
).join("\n")
const externalUrls = [
    ...new Set(sourceText.match(/https:\/\/[^"']+/g) ?? [])
].sort()

const results = await Promise.all(
    externalUrls.map(async (url) => {
        try {
            const response = await fetch(url, {
                redirect: "follow",
                signal: AbortSignal.timeout(20_000),
                headers: { "user-agent": "FelisFold link QA" }
            })
            await response.body?.cancel()
            return {
                url,
                status: response.status,
                ok:
                    response.ok ||
                    ([403, 999].includes(response.status) &&
                        knownBotProtectedUrls.has(url))
            }
        } catch (error) {
            return {
                url,
                status: 0,
                ok: false,
                error: error instanceof Error ? error.message : String(error)
            }
        }
    })
)

console.log(JSON.stringify(results, null, 2))
if (results.some((result) => !result.ok)) process.exitCode = 1
