<script setup lang="ts">
import { healthTopics } from "~/data/healthTopics"
import { isLanguageCode } from "~/utils/languages"

definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()

const title = computed(() =>
    languageCode.value === "ar"
        ? "مكتبة صحة Scottish Fold"
        : languageCode.value === "fr"
          ? "Bibliothèque santé du Scottish Fold"
          : languageCode.value === "zh"
            ? "苏格兰折耳猫健康资料库"
            : "Scottish Fold health library"
)
const copy = computed(() =>
    languageCode.value === "ar"
        ? "ابدأ بما تلاحظه في الحياة اليومية، ثم انتقل إلى العلم والفحوص والعلاج الممكن."
        : languageCode.value === "fr"
          ? "Partez de ce que vous observez au quotidien, puis explorez la science, les examens et les options de prise en charge."
          : languageCode.value === "zh"
            ? "从日常观察开始，再了解背后的科学、检查和可讨论的治疗方案。"
            : "Start with what you notice at home, then move into the science, tests and treatment options worth discussing."
)
const eyebrow = computed(() =>
    languageCode.value === "ar"
        ? "أدلة مدعومة بالمصادر"
        : languageCode.value === "fr"
          ? "Guides fondés sur les preuves"
          : languageCode.value === "zh"
            ? "基于证据的指南"
            : "Evidence-led guides"
)

usePageSeo({
    title: computed(() => `${title.value} — FoldCare`),
    description: copy
})
</script>

<template>
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20">
        <div class="flex items-end justify-between gap-6">
            <AppSectionHeading :eyebrow="eyebrow" :title="title" :copy="copy" />
            <FoldCatMascot class="hidden md:block" size="md" />
        </div>
        <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <HealthTopicCard
                v-for="topic in healthTopics"
                :key="topic.slug"
                :topic="topic"
            />
        </div>
        <MedicalInformationNotice class="mt-10" />
    </div>
</template>
