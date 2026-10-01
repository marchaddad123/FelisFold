<script setup lang="ts">
import { mixesGuide, mixProfiles } from "~/data/mixGuides"
import { editorialLabels } from "~/data/editorialHelpers"
import { isLanguageCode } from "~/utils/languages"
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
</script>
<template>
    <GuideArticle
        :guide="mixesGuide"
        :links="[{ path: '/scottish-fold', label: editorialLabels.breed }]"
        ><GuideLinkList :guides="mixProfiles" base-path="/mixes" class="mt-10"
    /></GuideArticle>
</template>
