<script setup lang="ts">
import { breedGuide, startHereGuide } from "~/data/breedGuides"
import { editorialLabels } from "~/data/editorialHelpers"
import { nutritionGuide } from "~/data/foodGuides"
import { isLanguageCode } from "~/utils/languages"
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const links = [
    { path: "/start-here", label: startHereGuide.title },
    { path: "/health", label: editorialLabels.healthCare },
    { path: "/mixes", label: editorialLabels.mixes },
    { path: "/nutrition", label: nutritionGuide.title },
    { path: "/lotus", label: editorialLabels.lotus }
]
</script>
<template>
    <GuideArticle :guide="breedGuide" :links="links" visual-layout="breed" />
</template>
