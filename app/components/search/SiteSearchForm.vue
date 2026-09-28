<script setup lang="ts">
const searchQuery = defineModel<string>({ required: true })
const { languageCode } = useCurrentLanguage()

const placeholder = computed(() => {
    if (languageCode.value === "ar") return "ابحث عن العظام، القيء، الكلى…"
    if (languageCode.value === "fr")
        return "Rechercher os, vomissements, reins…"
    if (languageCode.value === "zh") return "搜索骨骼、呕吐、肾脏…"
    return "Search bones, vomiting, kidneys…"
})

const label = computed(() => {
    if (languageCode.value === "ar") return "ابحث في FoldCare"
    if (languageCode.value === "fr") return "Rechercher dans FoldCare"
    if (languageCode.value === "zh") return "搜索 FoldCare"
    return "Search FoldCare"
})
</script>

<template>
    <label class="relative block">
        <span class="sr-only">{{ label }}</span>
        <span
            class="text-muted pointer-events-none absolute start-4 top-1/2 -translate-y-1/2"
            aria-hidden="true"
            >⌕</span
        >
        <input
            v-model="searchQuery"
            type="search"
            class="border-border bg-paper text-ink focus:border-lilac focus:ring-lilac/10 min-h-14 w-full rounded-full border ps-11 pe-5 text-base shadow-sm transition outline-none focus:ring-4"
            :placeholder="placeholder"
        />
    </label>
</template>
