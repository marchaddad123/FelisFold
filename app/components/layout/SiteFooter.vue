<script setup lang="ts">
import { siteText, textForLanguage } from "~/data/siteText"

const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const medicalNote = computed(() =>
    textForLanguage(siteText.common.medicalNote, languageCode.value)
)
const sourcesLabel = computed(() =>
    textForLanguage(siteText.navigation.sources, languageCode.value)
)
const aboutLabel = computed(() =>
    textForLanguage(siteText.navigation.about, languageCode.value)
)
</script>

<template>
    <footer class="border-border bg-paper/60 mt-16 border-t sm:mt-20">
        <div
            class="text-muted mx-auto grid max-w-7xl gap-7 px-4 py-9 text-sm sm:px-5 sm:py-10 md:grid-cols-[1.4fr_1fr] lg:px-8"
        >
            <div>
                <div class="flex items-center gap-2">
                    <span aria-hidden="true">🐾</span>
                    <p class="text-ink font-semibold">FoldCare</p>
                </div>
                <p class="mt-3 max-w-2xl leading-6">{{ medicalNote }}</p>
            </div>
            <div class="flex flex-wrap gap-x-5 gap-y-3 md:justify-end">
                <NuxtLink
                    :to="localizedPath('/sources')"
                    class="text-ink hover:text-lilac font-medium"
                    >{{ sourcesLabel }}</NuxtLink
                >
                <NuxtLink
                    :to="localizedPath('/about')"
                    class="text-ink hover:text-lilac font-medium"
                    >{{ aboutLabel }}</NuxtLink
                >
                <NuxtLink
                    :to="localizedPath('/search')"
                    class="text-ink hover:text-lilac font-medium"
                    >{{
                        textForLanguage(
                            siteText.navigation.search,
                            languageCode
                        )
                    }}</NuxtLink
                >
            </div>
        </div>
    </footer>
</template>
