<script setup lang="ts">
import { mixProfiles, mixesGuide } from "~/data/mixGuides"
import { editorialLabels } from "~/data/editorialHelpers"
import { lotusHealthExamples } from "~/data/lotusStory"
import { isLanguageCode } from "~/utils/languages"
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const route = useRoute()
const guide = computed(() =>
    mixProfiles.find((profile) => profile.slug === route.params.slug)
)
if (!guide.value)
    throw createError({ statusCode: 404, statusMessage: "Guide not found" })
const lotusExperience = computed(() =>
    guide.value?.slug === "scottish-fold-siamese"
        ? lotusHealthExamples["pain-and-mobility"]
        : undefined
)
</script>
<template>
    <GuideArticle
        v-if="guide"
        :guide="guide"
        :lotus-experience="lotusExperience"
        :links="[
            { path: '/mixes', label: mixesGuide.title },
            { path: '/health', label: editorialLabels.healthCare }
        ]"
    />
</template>
