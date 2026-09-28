<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        label?: string
        size?: "sm" | "md" | "lg"
        interactive?: boolean
    }>(),
    {
        label: "Lotus, the Scottish Fold cat",
        size: "md",
        interactive: true
    }
)

const showHeart = ref(false)

const sizeClasses = computed(
    () => ({ sm: "w-16", md: "w-24", lg: "w-32" })[props.size]
)
const imageSizes = computed(
    () => ({ sm: "64px", md: "96px", lg: "128px" })[props.size]
)

function petCat() {
    if (!props.interactive) return

    showHeart.value = true
    window.setTimeout(() => {
        showHeart.value = false
    }, 1100)
}
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
            class="text-peach absolute -end-1 -top-4 z-10 text-xl drop-shadow-sm"
            aria-hidden="true"
            >♥</span
        >
        <span
            class="border-border bg-surface aspect-square w-full overflow-hidden rounded-[38%] border shadow-sm transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md"
        >
            <NuxtImg
                src="/images/lotus/lotus-portrait.jpg"
                width="1536"
                height="1536"
                :sizes="imageSizes"
                :alt="label"
                loading="lazy"
                class="h-full w-full origin-[58%_38%] scale-[1.55] object-cover"
            />
        </span>
    </button>
</template>
