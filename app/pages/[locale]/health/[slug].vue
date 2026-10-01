<script setup lang="ts">
import { findHealthTopic, healthTopics } from "~/data/healthTopics"
import { lotusHealthExamples } from "~/data/lotusStory"
import { editorialLabels } from "~/data/editorialHelpers"
import { careGuide } from "~/data/ownerGuides"
import { isLanguageCode } from "~/utils/languages"
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const route = useRoute()
const topic = computed(() => findHealthTopic(String(route.params.slug)))
if (!topic.value)
    throw createError({
        statusCode: 404,
        statusMessage: "Health guide not found"
    })
const links = computed(() => [
    { path: "/health", label: editorialLabels.healthCare },
    { path: "/care", label: careGuide.title },
    ...healthTopics
        .filter(
            (item) =>
                item.slug !== topic.value?.slug &&
                [
                    "pain-and-mobility",
                    "vomiting",
                    "when-to-call-a-vet"
                ].includes(item.slug)
        )
        .map((item) => ({ path: "/health/" + item.slug, label: item.title }))
])
</script>
<template>
    <GuideArticle
        v-if="topic"
        :guide="topic"
        :lotus-experience="lotusHealthExamples[topic.slug]"
        :links="links"
    />
</template>
