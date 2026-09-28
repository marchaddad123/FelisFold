<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        label?: string
        size?: "sm" | "md" | "lg"
        interactive?: boolean
    }>(),
    {
        label: "A playful Scottish Fold mascot",
        size: "md",
        interactive: true
    }
)

const mood = ref<"nap" | "walk" | "hop" | "stretch">("nap")
const showHeart = ref(false)
let motionTimer: number | undefined
let resetTimer: number | undefined

const sizeClasses = computed(
    () => ({ sm: "w-16", md: "w-24", lg: "w-32" })[props.size]
)
const motionClass = computed(() =>
    mood.value === "nap" ? "" : `foldcat-${mood.value}`
)

function scheduleNextMotion() {
    if (import.meta.server) return
    const options: Array<typeof mood.value> = ["walk", "hop", "stretch", "nap"]

    motionTimer = window.setTimeout(
        () => {
            mood.value =
                options[Math.floor(Math.random() * options.length)] ?? "nap"
            resetTimer = window.setTimeout(() => {
                mood.value = "nap"
                scheduleNextMotion()
            }, 1400)
        },
        3200 + Math.random() * 4200
    )
}

function petCat() {
    if (!props.interactive) return

    mood.value = "stretch"
    showHeart.value = true
    window.setTimeout(() => {
        showHeart.value = false
        mood.value = "nap"
    }, 1100)
}

onMounted(scheduleNextMotion)
onBeforeUnmount(() => {
    if (motionTimer) clearTimeout(motionTimer)
    if (resetTimer) clearTimeout(resetTimer)
})
</script>

<template>
    <button
        type="button"
        class="group focus-visible:outline-lilac relative inline-grid place-items-center rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 disabled:cursor-default"
        :class="sizeClasses"
        :aria-label="interactive ? `${label}. Pet the cat.` : label"
        :disabled="!interactive"
        @click="petCat"
    >
        <span
            v-if="showHeart"
            class="text-peach absolute end-0 -top-4 text-xl"
            aria-hidden="true"
            >♥</span
        >
        <svg
            viewBox="0 0 180 130"
            class="w-full overflow-visible drop-shadow-sm transition-transform group-hover:-translate-y-0.5"
            :class="motionClass"
            role="img"
            :aria-label="label"
        >
            <path
                d="M54 33 Q38 30 31 43 Q42 44 51 55"
                fill="currentColor"
                class="text-cat-dark"
            />
            <path
                d="M126 33 Q142 30 149 43 Q138 44 129 55"
                fill="currentColor"
                class="text-cat-dark"
            />
            <ellipse
                cx="90"
                cy="68"
                rx="48"
                ry="42"
                fill="currentColor"
                class="text-cat"
            />
            <ellipse
                cx="70"
                cy="68"
                rx="5"
                ry="7"
                fill="currentColor"
                class="text-ink"
            />
            <ellipse
                cx="110"
                cy="68"
                rx="5"
                ry="7"
                fill="currentColor"
                class="text-ink"
            />
            <path
                d="M84 82 Q90 87 96 82"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                class="text-muted"
            />
            <path
                d="M90 77 L85 80 L95 80 Z"
                fill="currentColor"
                class="text-peach"
            />
            <path
                d="M48 92 Q28 102 23 120"
                fill="none"
                stroke="currentColor"
                stroke-width="20"
                stroke-linecap="round"
                class="text-cat"
            />
            <path
                d="M132 92 Q152 102 157 120"
                fill="none"
                stroke="currentColor"
                stroke-width="20"
                stroke-linecap="round"
                class="text-cat"
            />
            <path
                d="M53 107 Q90 127 127 107"
                fill="currentColor"
                class="text-cat"
            />
        </svg>
        <span v-if="interactive" class="sr-only"
            >Current cat mood: {{ mood }}</span
        >
    </button>
</template>
