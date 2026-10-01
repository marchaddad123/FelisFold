<script setup lang="ts">
import { siteText, textForLanguage } from "~/data/siteText"
import { breedGuide } from "~/data/breedGuides"
import { isLanguageCode } from "~/utils/languages"
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()
usePageSeo({
    title: computed(
        () =>
            `FelisFold — ${textForLanguage(siteText.brandTagline, languageCode.value)}`
    ),
    description: computed(() => breedGuide.summary[languageCode.value]),
    image: "/images/lotus/lotus-home.jpg"
})
</script>
<template>
    <div>
        <HomeHeroSection /><HomeQuestionLinks /><HomeInformationSections />
    </div>
</template>
