<script setup lang="ts">
import {
    catFrameSize,
    catFramesPerSecond,
    catFramesPerSheet,
    catSheetColumns,
    catSequences,
    type CatSequenceName
} from "~/data/catSequences"
import { loadCatSequence } from "~/utils/catSequences"

const props = withDefaults(
    defineProps<{
        sequence: CatSequenceName
        seconds?: number
        reversed?: boolean
    }>(),
    { seconds: 0, reversed: false }
)
const canvas = useTemplateRef<HTMLCanvasElement>("canvas")
const drawnFrame = ref<number | null>(null)
let sheets: HTMLImageElement[] = []
let loadedSequence: CatSequenceName | undefined
let loadRequest = 0
let isMounted = false

const frameIndex = computed(() => {
    const sequence = catSequences[props.sequence]
    const elapsedFrames = Math.max(
        0,
        Math.floor(props.seconds * catFramesPerSecond)
    )
    return sequence.loop
        ? elapsedFrames % sequence.frameCount
        : Math.min(sequence.frameCount - 1, elapsedFrames)
})

function drawFrame() {
    if (loadedSequence !== props.sequence) return
    const context = canvas.value?.getContext("2d")
    const sheet = sheets[Math.floor(frameIndex.value / catFramesPerSheet)]
    if (!context || !sheet) return
    const tile = frameIndex.value % catFramesPerSheet
    context.clearRect(0, 0, catFrameSize.width, catFrameSize.height)
    context.save()
    if (props.reversed) {
        context.translate(catFrameSize.width, 0)
        context.scale(-1, 1)
    }
    context.drawImage(
        sheet,
        (tile % catSheetColumns) * catFrameSize.width,
        Math.floor(tile / catSheetColumns) * catFrameSize.height,
        catFrameSize.width,
        catFrameSize.height,
        0,
        0,
        catFrameSize.width,
        catFrameSize.height
    )
    context.restore()
    drawnFrame.value = frameIndex.value
}
async function prepareSequence() {
    const request = ++loadRequest
    const name = props.sequence
    loadedSequence = undefined
    drawnFrame.value = null
    canvas.value
        ?.getContext("2d")
        ?.clearRect(0, 0, catFrameSize.width, catFrameSize.height)
    try {
        const images = await loadCatSequence(name)
        if (!isMounted || request !== loadRequest) return
        sheets = images
        loadedSequence = name
        drawFrame()
    } catch {
        // The parent prepares assets before starting a visit. Never show a
        // broken image or the rejected cutout rig if a request fails.
        if (request === loadRequest)
            canvas.value
                ?.getContext("2d")
                ?.clearRect(0, 0, catFrameSize.width, catFrameSize.height)
    }
}
watch(() => props.sequence, prepareSequence)
watch([frameIndex, () => props.reversed], drawFrame)
onMounted(() => {
    isMounted = true
    void prepareSequence()
})
onBeforeUnmount(() => {
    isMounted = false
    loadRequest++
    sheets = []
})
</script>

<template>
    <canvas
        ref="canvas"
        :width="catFrameSize.width"
        :height="catFrameSize.height"
        class="cat-actor h-full w-full"
        :data-cat-sequence="sequence"
        :data-cat-frame="drawnFrame"
        aria-hidden="true"
    />
</template>
