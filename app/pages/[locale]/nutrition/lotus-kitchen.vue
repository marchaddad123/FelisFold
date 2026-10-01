<script setup lang="ts">
import {
    kitchenGuide,
    lotusKitchenEntries,
    homemadeGuide
} from "~/data/foodGuides"
import { lotusNutritionExperience } from "~/data/lotusStory"
import { isLanguageCode } from "~/utils/languages"
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
</script>
<template>
    <GuideArticle
        :guide="kitchenGuide"
        owner-story
        :lotus-experience="lotusNutritionExperience"
        :links="[{ path: '/nutrition/homemade', label: homemadeGuide.title }]"
        ><LotusKitchenJournal :entries="lotusKitchenEntries"
    /></GuideArticle>
</template>
