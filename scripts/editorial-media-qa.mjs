import { readFile, writeFile, stat } from "node:fs/promises"
import sharp from "sharp"

const credits = JSON.parse(
    await readFile("public/images/editorial/credits.json", "utf8")
)
const results = []
for (const credit of credits) {
    const missingFields = [
        "id",
        "localPath",
        "sourceUrl",
        "creator",
        "provider",
        "license",
        "downloadedAt",
        "usageContext",
        "altText"
    ].filter((field) => !credit[field])
    const path = "public" + credit.localPath
    const dimensions = await sharp(path).metadata()
    const response = await fetch(credit.sourceUrl, {
        signal: AbortSignal.timeout(20000)
    })
    await response.body?.cancel()
    results.push({
        id: credit.id,
        missingFields,
        dimensionsMatch:
            dimensions.width === credit.width &&
            dimensions.height === credit.height,
        sourceStatus: response.status,
        bytes: (await stat(path)).size
    })
}
await writeFile(
    "qa-artifacts/editorial/media-audit.json",
    JSON.stringify(results, null, 2) + "\n"
)
console.log(JSON.stringify(results, null, 2))
if (
    results.some(
        (result) =>
            result.missingFields.length ||
            !result.dimensionsMatch ||
            result.sourceStatus !== 200
    )
)
    process.exitCode = 1
