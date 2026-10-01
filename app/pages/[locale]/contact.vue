<script setup lang="ts">
import { creatorProfile } from "~/data/creatorProfile"
import { siteText } from "~/data/siteText"
import { isLanguageCode } from "~/utils/languages"
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()
usePageSeo({
    title: computed(
        () => `${siteText.navigation.contact[languageCode.value]} — FelisFold`
    ),
    description: computed(() => creatorProfile.shortBio[languageCode.value])
})
</script>
<template>
    <div class="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 class="font-editorial text-ink text-4xl sm:text-5xl">
            {{ siteText.navigation.contact[languageCode] }}
        </h1>
        <CreatorContactSection class="mt-8" />
    </div>
</template>
