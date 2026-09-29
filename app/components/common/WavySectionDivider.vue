<script setup lang="ts">
withDefaults(defineProps<{ tone?: "cream" | "sky" | "forest" | "paper" }>(), {
    tone: "cream"
})

const toneClass = {
    cream: "text-cream",
    sky: "text-sky-soft",
    forest: "text-forest",
    paper: "text-paper"
}
</script>

<template>
    <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        class="block h-8 w-full sm:h-12"
        :class="toneClass[tone]"
        aria-hidden="true"
    >
        <path
            fill="currentColor"
            d="M0 30C185 86 352 3 552 35c233 37 402-20 582-2 126 13 228 23 306-3v42H0Z"
        />
    </svg>
</template>
