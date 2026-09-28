<script setup lang="ts">
import { siteText, textForLanguage } from "~/data/siteText"
import { isLanguageCode } from "~/utils/languages"

definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()
const intro = computed(() =>
    textForLanguage(siteText.home.intro, languageCode.value)
)

usePageSeo({
    title: computed(
        () =>
            `FoldCare — ${textForLanguage(siteText.brandTagline, languageCode.value)}`
    ),
    description: intro,
    image: "/images/lotus/lotus-home.jpg"
})
</script>

<template>
    <div>
        <HomeHeroSection />
        <HomePrinciplesSection />
        <HomeHealthPreviewSection />
        <HomeLotusStorySection />
    </div>
</template>
