<script setup lang="ts">
import { earlyLotusLessons, careGuide } from "~/data/ownerGuides"
import { startHereGuide, breedGuide } from "~/data/breedGuides"
import { isLanguageCode } from "~/utils/languages"
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
</script>
<template>
    <GuideArticle
        :guide="earlyLotusLessons"
        owner-story
        :links="[
            { path: '/start-here', label: startHereGuide.title },
            { path: '/scottish-fold', label: breedGuide.title },
            { path: '/care', label: careGuide.title }
        ]"
    />
</template>
