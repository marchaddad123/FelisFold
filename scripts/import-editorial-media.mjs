import { mkdir, readFile, writeFile } from "node:fs/promises"
import sharp from "sharp"

// Commons supplies licensing metadata; downloads never come from a shop.
const photographs = [
    {
        id: "wet-food",
        title: "Cat food1.jpg",
        context: "Wet food texture, not a product recommendation"
    },
    {
        id: "dry-food",
        title: "Whiskas cat's petfood with chicken dry.jpg",
        context: "Kibble texture, not a product recommendation"
    },
    {
        id: "mixed-feeding",
        title: "Cat and Cat Foods.jpg",
        context: "A cat eating wet and dry food; illustrative feeding setup"
    },
    {
        id: "water",
        title: "A cat drinking water.jpg",
        context: "A cat drinking from a fountain; not Lotus"
    },
    {
        id: "kitchen-scale",
        title: "Black LE-K10 tray kitchen scale.jpg",
        context: "Weighing and recording food, not a prescribed portion"
    },
    {
        id: "raw-chicken",
        title: "Kycklingfilé.jpg",
        context: "Raw ingredient before cooking; not advice to feed raw meat"
    },
    {
        id: "garlic",
        title: "Garlic.jpg",
        context: "An ingredient to keep out of cat meals"
    },
    {
        id: "upright-ears-portrait",
        title: "Katze Portrait.jpg",
        context:
            "Upright ear shape; not Lotus and no genotype or ancestry inferred"
    }
]
const directory = "public/images/editorial"
await mkdir(directory, { recursive: true })
const headers = {
    "User-Agent": "FelisFold/1.0 (editorial media attribution audit)"
}
const titles = photographs.map((photo) => `File:${photo.title}`).join("|")
const response = await fetch(
    `https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url%7Cextmetadata&iiurlwidth=1400&titles=${encodeURIComponent(titles)}`,
    { headers }
)
if (!response.ok) throw new Error(`Commons metadata: ${response.status}`)
const metadata = await response.json()
const pages = Object.values(metadata.query.pages)
const previousCredits = JSON.parse(
    await readFile(`${directory}/credits.json`, "utf8").catch(() => "[]")
)
const credits = []
for (const photo of photographs) {
    const previous = previousCredits.find((credit) => credit.id === photo.id)
    if (previous) {
        credits.push(previous)
        continue
    }
    const information = pages.find(
        (page) => page.title === `File:${photo.title}`
    )?.imageinfo?.[0]
    if (!information) throw new Error(`Missing original: ${photo.title}`)
    const details = information.extmetadata
    const license = details.LicenseShortName?.value
    if (!license?.startsWith("CC BY-SA") && license !== "Public domain")
        throw new Error(`Review license: ${photo.title}`)
    const downloadUrl = information.thumburl || information.url.split("?")[0]
    let imageResponse = await fetch(downloadUrl, { headers })
    for (
        let attempt = 0;
        imageResponse.status === 429 && attempt < 3;
        attempt++
    ) {
        await new Promise((resolveWait) => setTimeout(resolveWait, 5000))
        imageResponse = await fetch(downloadUrl, { headers })
    }
    if (!imageResponse.ok)
        throw new Error(`Photo download: ${imageResponse.status}`)
    const original = Buffer.from(await imageResponse.arrayBuffer())
    const localPath = `/images/editorial/${photo.id}.webp`
    await sharp(original)
        .rotate()
        .resize({ width: 1400, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(`public${localPath}`)
    const dimensions = await sharp(`public${localPath}`).metadata()
    const creator = details.Artist.value
        .replace(/<[^>]*>/g, "")
        .replace(/&amp;/g, "&")
    credits.push({
        id: photo.id,
        localPath,
        sourceUrl: `https://commons.wikimedia.org/wiki/File:${photo.title.replaceAll(" ", "_")}`,
        originalUrl: information.url,
        creator,
        provider: "Wikimedia Commons",
        license,
        licenseUrl:
            details.LicenseUrl?.value ||
            `https://commons.wikimedia.org/wiki/File:${photo.title.replaceAll(" ", "_")}`,
        downloadedAt: new Date().toISOString(),
        usageContext: photo.context,
        altText: details.ImageDescription.value.replace(/<[^>]*>/g, ""),
        width: dimensions.width,
        height: dimensions.height,
        changes:
            license === "Public domain"
                ? "Resized and converted to WebP. Display crops may vary. Original is public domain."
                : "Resized and converted to WebP. Display crops may vary. Derivative photographs retain the original CC BY-SA license."
    })
    await writeFile(
        `${directory}/credits.json`,
        JSON.stringify(credits, null, 2) + "\n"
    )
    console.log(
        `${photo.id}: ${dimensions.width} × ${dimensions.height}; ${license}; ${creator}`
    )
}
await writeFile(
    `${directory}/credits.json`,
    JSON.stringify(credits, null, 2) + "\n"
)
