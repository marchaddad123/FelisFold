<script setup lang="ts">
import { breedGuide, startHereGuide } from "~/data/breedGuides"
import { editorialLabels } from "~/data/editorialHelpers"
import { nutritionGuide } from "~/data/foodGuides"
import { findHealthTopic } from "~/data/healthTopics"
import { isLanguageCode } from "~/utils/languages"
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const links = [
    { path: "/scottish-fold", label: breedGuide.title },
    { path: "/nutrition", label: nutritionGuide.title },
    {
        path: "/health/when-to-call-a-vet",
        label: findHealthTopic("when-to-call-a-vet")!.title
    },
    { path: "/lotus/what-i-wish-i-knew", label: editorialLabels.lessons }
]
</script>
<template><GuideArticle :guide="startHereGuide" :links="links" /></template>
