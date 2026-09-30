<script setup lang="ts">
const searchQuery = defineModel<string>({ required: true })
const { languageCode } = useCurrentLanguage()
const searchInput = ref<HTMLInputElement>()

const placeholder = computed(() => {
    if (languageCode.value === "ar") return "ابحث عن العظام، القيء، الكلى…"
    if (languageCode.value === "fr")
        return "Rechercher os, vomissements, reins…"
    if (languageCode.value === "zh") return "搜索骨骼、呕吐、肾脏…"
    return "Search bones, vomiting, kidneys…"
})

const label = computed(() => {
    if (languageCode.value === "ar") return "ابحث في FelisFold"
    if (languageCode.value === "fr") return "Rechercher dans FelisFold"
    if (languageCode.value === "zh") return "搜索 FelisFold"
    return "Search FelisFold"
})

const clearLabel = computed(() => {
    if (languageCode.value === "ar") return "مسح البحث"
    if (languageCode.value === "fr") return "Effacer la recherche"
    if (languageCode.value === "zh") return "清除搜索"
    return "Clear search"
})

function clearSearch() {
    searchQuery.value = ""
    searchInput.value?.focus()
}
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
            ref="searchInput"
            v-model="searchQuery"
            type="search"
            class="border-border bg-paper text-ink focus:border-peach focus:ring-peach/10 min-h-14 w-full rounded-full border ps-11 pe-12 text-base shadow-sm transition outline-none focus:ring-4"
            :placeholder="placeholder"
            @keydown.esc.prevent.stop="clearSearch"
        />
        <button
            v-if="searchQuery"
            type="button"
            class="text-muted hover:text-ink absolute end-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full text-xl"
            :aria-label="clearLabel"
            @click="clearSearch"
        >
            <span aria-hidden="true">×</span>
        </button>
    </label>
</template>
