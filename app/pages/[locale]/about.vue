<script setup lang="ts">
import { creatorProfile } from "~/data/creatorProfile"
import { editorialLabels } from "~/data/editorialHelpers"
import { isLanguageCode } from "~/utils/languages"
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
usePageSeo({
    title: computed(
        () => `${editorialLabels.about[languageCode.value]} — FelisFold`
    ),
    description: computed(() => creatorProfile.shortBio[languageCode.value])
})
</script>
<template>
    <div class="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 class="font-editorial text-ink text-4xl sm:text-5xl">
            {{ editorialLabels.about[languageCode] }} FelisFold
        </h1>
        <p class="text-muted mt-5 text-lg leading-8">
            {{ creatorProfile.shortBio[languageCode] }}
        </p>
        <h2 class="font-editorial text-ink mt-9 text-2xl">
            {{ creatorProfile.name }} · {{ creatorProfile.role[languageCode] }}
        </h2>
        <p
            v-for="paragraph in creatorProfile.longBio[languageCode]"
            :key="paragraph"
            class="text-muted mt-5 leading-8"
        >
            {{ paragraph }}
        </p>
        <MedicalInformationNotice class="my-8" />
        <CreatorSocialLinks variant="full" />
        <NuxtLink
            :to="localizedPath('/sources')"
            class="text-lilac mt-6 inline-flex min-h-11 items-center underline"
            >{{ editorialLabels.sources[languageCode] }} →</NuxtLink
        >
    </div>
</template>
