<script setup lang="ts">
import {
    homemadeGuide,
    kitchenGuide,
    foodsToAvoidGuide
} from "~/data/foodGuides"
import { isLanguageCode } from "~/utils/languages"
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
</script>
<template>
    <GuideArticle
        :guide="homemadeGuide"
        :links="[
            { path: '/nutrition/lotus-kitchen', label: kitchenGuide.title },
            {
                path: '/nutrition/foods-to-avoid',
                label: foodsToAvoidGuide.title
            }
        ]"
    />
</template>
