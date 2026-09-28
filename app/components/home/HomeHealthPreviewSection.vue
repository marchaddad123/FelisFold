<script setup lang="ts">
import { healthTopics } from "~/data/healthTopics"
import { siteText, textForLanguage } from "~/data/siteText"

const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const exploreHealth = computed(() =>
    textForLanguage(siteText.home.exploreHealth, languageCode.value)
)

const heading = computed(() =>
    languageCode.value === "ar"
        ? "ابدأ بالأسئلة الأكثر أهمية."
        : languageCode.value === "fr"
          ? "Commencez par les questions les plus importantes."
          : languageCode.value === "zh"
            ? "先从最重要的问题开始。"
            : "Start with the questions that matter most."
)
const copy = computed(() =>
    languageCode.value === "ar"
        ? "أدلة واضحة لعائلات Scottish Fold مع مصادر ولغة بسيطة."
        : languageCode.value === "fr"
          ? "Des guides clairs pour les familles de Scottish Fold, avec sources et langage simple."
          : languageCode.value === "zh"
            ? "给苏格兰折耳猫家庭的清楚指南，带来源，用简单语言解释。"
            : "Clear guides for Scottish Fold families, with sources and plain language."
)
const eyebrow = computed(() =>
    languageCode.value === "ar"
        ? "مكتبة الصحة"
        : languageCode.value === "fr"
          ? "Bibliothèque santé"
          : languageCode.value === "zh"
            ? "健康资料库"
            : "Health library"
)
</script>

<template>
    <section class="bg-paper/35 py-14 sm:py-18 lg:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
            <div class="flex items-end justify-between gap-6">
                <AppSectionHeading
                    :eyebrow="eyebrow"
                    :title="heading"
                    :copy="copy"
                />
                <FoldCatMascot class="hidden lg:block" size="md" />
            </div>
            <div class="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                <HealthTopicCard
                    v-for="topic in healthTopics.slice(0, 6)"
                    :key="topic.slug"
                    :topic="topic"
                />
            </div>
            <div class="mt-7">
                <NuxtLink
                    :to="localizedPath('/health')"
                    class="border-border bg-paper text-ink hover:border-lilac/30 inline-flex min-h-12 items-center rounded-full border px-5 font-medium transition"
                >
                    {{ exploreHealth }} →
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
