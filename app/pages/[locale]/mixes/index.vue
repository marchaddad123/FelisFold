<script setup lang="ts">
import { mixesGuide, mixProfiles } from "~/data/mixGuides"
import { editorialLabels } from "~/data/editorialHelpers"
import { lotusPhoto, visualLabels } from "~/data/editorialVisuals"
import { isLanguageCode } from "~/utils/languages"
const { languageCode } = useCurrentLanguage()
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
</script>
<template>
    <GuideArticle
        :guide="mixesGuide"
        visual-layout="mixes"
        :links="[
            { path: '/scottish-fold', label: editorialLabels.breed },
            { path: '/lotus', label: editorialLabels.lotus }
        ]"
    >
        <template #introduction
            ><section class="bg-cream px-5 py-12 sm:px-8">
                <div class="mx-auto max-w-[80rem]">
                    <h2 class="text-ink text-3xl sm:text-4xl">
                        {{ mixesGuide.title[languageCode] }}
                    </h2>
                    <div class="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                        <VisualGuideCard
                            v-for="profile in mixProfiles"
                            :key="profile.slug"
                            :guide="profile"
                            base-path="/mixes"
                            :photo="
                                profile.slug === 'scottish-fold-siamese'
                                    ? lotusPhoto('lotus-portrait')
                                    : undefined
                            "
                            mix
                        />
                    </div>
                </div></section
        ></template>
        <PhotoStoryStrip
            :title="visualLabels.photoStory"
            :photos="[
                lotusPhoto('lotus-home'),
                lotusPhoto('lotus-cuddling'),
                lotusPhoto('lotus-glasses')
            ]"
        /><CatRestingDivider />
    </GuideArticle>
</template>
