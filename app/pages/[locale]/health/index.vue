<script setup lang="ts">
import { healthTopics } from "~/data/healthTopics"
import { editorialLabels, translated as t } from "~/data/editorialHelpers"
import { foldPhoto, lotusPhoto, visualLabels } from "~/data/editorialVisuals"
import { lotusHealthExamples } from "~/data/lotusStory"
import { careGuide } from "~/data/ownerGuides"
import { isLanguageCode } from "~/utils/languages"
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const topicPhotos = [
    foldPhoto("fold-in-blanket"),
    lotusPhoto("lotus-posture"),
    lotusPhoto("lotus-feeding"),
    foldPhoto("fold-on-sofa"),
    lotusPhoto("lotus-cozy"),
    lotusPhoto("lotus-grooming"),
    foldPhoto("fold-kitten-playing"),
    lotusPhoto("lotus-with-creator-younger")
]
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
    <div>
        <EditorialHeroSection
            :title="editorialLabels.healthCare"
            :eyebrow="visualLabels.guides"
            :copy="introduction"
            :photo="lotusPhoto('lotus-cozy')"
            :note="visualLabels.why"
            :links="[
                { path: '/care', label: careGuide.title },
                { path: '/lotus', label: editorialLabels.lotus }
            ]"
        />
        <section
            class="bg-sky-soft paper-texture px-5 pt-6 pb-12 sm:px-8 sm:pb-16"
        >
            <div class="mx-auto max-w-[80rem]">
                <h2 class="text-ink mb-8 text-3xl sm:text-4xl">
                    {{ visualLabels.guides[languageCode] }}
                </h2>
                <div class="grid items-start gap-7 xl:grid-cols-[1fr_20rem]">
                    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <VisualGuideCard
                            v-for="(topic, index) in healthTopics"
                            :key="topic.slug"
                            :guide="topic"
                            base-path="/health"
                            :photo="topicPhotos[index]"
                            :large="index === 0"
                        />
                    </div>
                    <HealthWarningSigns />
                </div>
            </div>
        </section>
        <section class="bg-cream px-5 py-12 sm:px-8">
            <div
                class="mx-auto grid max-w-[80rem] gap-10 lg:grid-cols-2 lg:items-center"
            >
                <div>
                    <h2 class="text-ink mb-6 text-3xl sm:text-4xl">
                        {{ visualLabels.notes[languageCode] }}
                    </h2>
                    <LotusExperiencePanel
                        :content="lotusHealthExamples['pain-and-mobility']!"
                    /><NuxtLink
                        :to="localizedPath('/lotus')"
                        class="editorial-link text-peach mt-4 inline-flex min-h-11 items-center"
                        >{{ editorialLabels.lotus[languageCode] }} →</NuxtLink
                    >
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <EditorialPhoto
                        :photo="lotusPhoto('lotus-posture')"
                        frame
                        image-class="aspect-[3/4]"
                        class="sm:-rotate-2"
                    /><EditorialPhoto
                        :photo="lotusPhoto('lotus-grooming')"
                        frame
                        image-class="aspect-[3/4]"
                        class="sm:rotate-2"
                    />
                </div>
            </div>
        </section>
        <section class="bg-peach-soft px-5 py-12 sm:px-8">
            <div
                class="mx-auto grid max-w-[80rem] gap-8 lg:grid-cols-2 lg:items-center"
            >
                <PracticalCareVisual />
                <div>
                    <h2 class="text-ink text-3xl">
                        {{ careGuide.title[languageCode] }}
                    </h2>
                    <p class="text-muted mt-5 leading-8">
                        {{ careGuide.summary[languageCode] }}
                    </p>
                    <NuxtLink
                        :to="localizedPath('/care')"
                        class="editorial-link text-peach mt-4 inline-flex min-h-11 items-center"
                        >{{ visualLabels.read[languageCode] }} →</NuxtLink
                    >
                    <div class="mt-5">
                        <NuxtLink
                            :to="localizedPath('/nutrition')"
                            class="editorial-link text-peach inline-flex min-h-11 items-center"
                            >{{
                                t(
                                    "Appetite, hydration & feeding",
                                    "الشهية والماء والتغذية",
                                    "Appétit, hydratation et alimentation",
                                    "食欲、饮水与喂养"
                                )[languageCode]
                            }}
                            →</NuxtLink
                        >
                    </div>
                </div>
            </div>
        </section>
        <CatRestingDivider /><EditorialTrustStrip />
    </div>
</template>
