<script setup lang="ts">
import { mixProfiles, mixesGuide } from "~/data/mixGuides"
import { editorialLabels } from "~/data/editorialHelpers"
import { lotusHealthExamples } from "~/data/lotusStory"
import { lotusPhoto, visualLabels } from "~/data/editorialVisuals"
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
        visual-layout="mix-detail"
        :lotus-experience="lotusExperience"
        :links="[
            { path: '/mixes', label: mixesGuide.title },
            { path: '/health', label: editorialLabels.healthCare }
        ]"
    >
        <template #introduction
            ><MixEvidenceSummary :guide="guide" /><PhotoStoryStrip
                v-if="guide.slug === 'scottish-fold-siamese'"
                :title="visualLabels.realLife"
                :copy="guide.summary"
                :photos="[
                    lotusPhoto('lotus-with-creator-younger'),
                    lotusPhoto('lotus-family'),
                    lotusPhoto('lotus-home')
                ]"
        /></template>
    </GuideArticle>
</template>
