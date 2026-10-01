<script setup lang="ts">
import { healthTopics } from "~/data/healthTopics"
import { editorialLabels, translated as t } from "~/data/editorialHelpers"
import { careGuide } from "~/data/ownerGuides"
import { isLanguageCode } from "~/utils/languages"
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const introduction = t(
    "Start with what you notice. Fold-related joint concerns and general cat health problems are explained separately, with safe home changes and veterinary next steps.",
    "ابدأ بما تلاحظه. نشرح مشاكل المفاصل المرتبطة بالطي ومسائل صحة القطط العامة بشكل منفصل، مع تغييرات منزلية آمنة وخطوات بيطرية.",
    "Commencez par vos observations. Les problèmes articulaires Fold et la santé féline générale sont expliqués séparément, avec adaptations sûres et suite vétérinaire.",
    "从观察开始。分别了解折耳关节问题和一般猫健康问题，以及安全居家调整和就医安排。"
)
usePageSeo({
    title: computed(
        () => `${editorialLabels.healthCare[languageCode.value]} — FelisFold`
    ),
    description: computed(() => introduction[languageCode.value])
})
</script>
<template>
    <div class="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 class="font-editorial text-ink text-4xl sm:text-5xl">
            {{ editorialLabels.healthCare[languageCode] }}
        </h1>
        <p class="text-muted mt-5 max-w-2xl text-lg leading-8">
            {{ introduction[languageCode] }}
        </p>
        <NuxtLink
            :to="localizedPath('/care')"
            class="text-lilac my-6 inline-flex min-h-11 items-center underline underline-offset-4"
            >{{ careGuide.title[languageCode] }} →</NuxtLink
        >
        <GuideLinkList :guides="healthTopics" base-path="/health" />
    </div>
</template>
