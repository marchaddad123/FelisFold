import { readFile } from "node:fs/promises"

const sourceFiles = [
    "app/data/healthTopics.ts",
    "app/data/creatorProfile.ts",
    "app/pages/[locale]/sources.vue",
    "app/data/evidenceSources.ts"
]
const knownBotProtectedUrls = new Set([
    "https://www.aaha.org/resources/2021-aaha-aafp-feline-life-stage-guidelines/",
    "https://www.aaha.org/resources/helping-your-cat-cope-with-veterinary-visits/",
    "https://journals.sagepub.com/doi/10.1177/1098612X241241951",
    "https://vgl.ucdavis.edu/",
    "https://vgl.ucdavis.edu/test/pkd1-cat",
    "https://vgl.ucdavis.edu/test/scottish-fold",
    "https://www.linkedin.com/in/marc-haddad-bb074b220/"
])

const sourceText = (
    await Promise.all(sourceFiles.map((file) => readFile(file, "utf8")))
).join("\n")
const cornellBase =
    "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/"
const cornellUrls = [...sourceText.matchAll(/cornellBase}([^`]+)`/g)].map(
    (match) => cornellBase + match[1]
)
const externalUrls = [
    ...new Set([
        ...cornellUrls,
        ...(sourceText.match(/https:\/\/[^"'`\s]+/g) ?? []).filter(
            (url) => !url.includes("$") && url !== cornellBase
        )
    ])
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
