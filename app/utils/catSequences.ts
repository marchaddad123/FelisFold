import {
    catFrameSize,
    catFramesPerSheet,
    catSheetColumns,
    catSequences,
    type CatSequenceName
} from "~/data/catSequences"

const decodedSequences = new Map<CatSequenceName, Promise<HTMLImageElement[]>>()

export function loadCatSequence(name: CatSequenceName) {
    const cached = decodedSequences.get(name)
    if (cached) return cached

    const sequence = catSequences[name]
    const sheets = Math.ceil(sequence.frameCount / catFramesPerSheet)
    const ready = Promise.all(
        Array.from({ length: sheets }, async (_, sheetIndex) => {
            const image = new Image()
            image.src = `/images/cat/footage/${sequence.path}-${sheetIndex + 1}.webp`
            await image.decode()
            if (
                image.naturalWidth !== catFrameSize.width * catSheetColumns ||
                image.naturalHeight !== catFrameSize.height * catSheetColumns
            )
                throw new Error(`Invalid cat sequence sheet: ${image.src}`)
            return image
        })
    ).catch((error: unknown) => {
        if (decodedSequences.get(name) === ready) decodedSequences.delete(name)
        throw error
    })
    // Keep only the most recently used sequence. Active canvases retain their own
    // references; older sheets can be collected after those canvases unmount.
    if (decodedSequences.size >= 1) {
        const oldest = decodedSequences.keys().next().value
        if (oldest) decodedSequences.delete(oldest)
    }
    decodedSequences.set(name, ready)
    return ready
}
