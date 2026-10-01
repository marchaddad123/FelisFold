<script setup lang="ts">
import { careGuide } from "~/data/ownerGuides"
import { lotusCareExperience } from "~/data/lotusStory"
import { findHealthTopic } from "~/data/healthTopics"
import { isLanguageCode } from "~/utils/languages"
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const links = [
    "pain-and-mobility",
    "ears-and-grooming",
    "when-to-call-a-vet"
].map((slug) => ({
    path: "/health/" + slug,
    label: findHealthTopic(slug)!.title
}))
</script>
<template>
    <GuideArticle
        :guide="careGuide"
        :lotus-experience="lotusCareExperience"
        :links="links"
    />
</template>
