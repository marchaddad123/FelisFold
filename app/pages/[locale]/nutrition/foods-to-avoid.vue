<script setup lang="ts">
import { foodsToAvoidGuide, homemadeGuide } from "~/data/foodGuides"
import { findHealthTopic } from "~/data/healthTopics"
import { isLanguageCode } from "~/utils/languages"
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
</script>
<template>
    <GuideArticle
        :guide="foodsToAvoidGuide"
        :links="[
            { path: '/nutrition/homemade', label: homemadeGuide.title },
            {
                path: '/health/when-to-call-a-vet',
                label: findHealthTopic('when-to-call-a-vet')!.title
            }
        ]"
    />
</template>
