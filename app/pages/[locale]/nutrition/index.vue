<script setup lang="ts">
import {
    nutritionGuide,
    homemadeGuide,
    kitchenGuide,
    foodsToAvoidGuide
} from "~/data/foodGuides"
import { lotusNutritionExperience } from "~/data/lotusStory"
import { findHealthTopic } from "~/data/healthTopics"
import { isLanguageCode } from "~/utils/languages"
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const links = [
    { path: "/nutrition/homemade", label: homemadeGuide.title },
    { path: "/nutrition/foods-to-avoid", label: foodsToAvoidGuide.title },
    { path: "/nutrition/lotus-kitchen", label: kitchenGuide.title },
    { path: "/health/vomiting", label: findHealthTopic("vomiting")!.title }
]
</script>
<template>
    <GuideArticle
        :guide="nutritionGuide"
        :lotus-experience="lotusNutritionExperience"
        :links="links"
    />
</template>
