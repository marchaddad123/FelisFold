<script setup lang="ts">
import { evidenceSources } from "~/data/evidenceSources"
import { healthTopics } from "~/data/healthTopics"
import { editorialLabels, translated as t } from "~/data/editorialHelpers"
import { lotusPhoto, visualLabels } from "~/data/editorialVisuals"
import { isLanguageCode } from "~/utils/languages"
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const introduction = t(
    "Read the evidence behind the guides, and see where it stops. Research findings and Mark's observations about Lotus are kept separate.",
    "اقرأ الأدلة خلف الأدلة الإرشادية وحدودها. نفصل نتائج الأبحاث عن ملاحظات مارك حول لوتس.",
    "Consultez les données derrière les guides et leurs limites. Résultats de recherche et observations de Mark restent distincts.",
    "了解指南的证据与局限。研究结论和 Mark 对 Lotus 的观察保持分开。"
)
const reviewNote = t(
    "Dates mark Mark's editorial source review, not approval by a veterinarian. Original publication titles remain in their source language. Small studies and case reports cannot predict one cat's future. For Lotus, unknown records stay unknown.",
    "تشير التواريخ إلى مراجعة مارك التحريرية للمصادر وليست اعتماداً من طبيب. تبقى عناوين المنشورات بلغتها الأصلية. لا تتنبأ الدراسات الصغيرة وتقارير الحالات بمستقبل قط. تبقى سجلات لوتس المجهولة مجهولة.",
    "Les dates indiquent la vérification éditoriale de Mark, pas une approbation vétérinaire. Les titres originaux restent dans leur langue. Petites études et cas ne prédisent pas l'avenir d'un chat. Les dossiers inconnus de Lotus restent inconnus.",
    "日期代表 Mark 的编辑资料复核，不是兽医批准。原始文献标题保留原语言。小样本研究和病例报告不能预测某只猫的未来。Lotus 的未知记录仍标为未知。"
)
const allSources = [
    ...Object.values(evidenceSources),
    ...healthTopics.flatMap((topic) => topic.sources)
].filter(
    (source, index, all) =>
        all.findIndex((candidate) => candidate.url === source.url) === index
)
usePageSeo({
    title: computed(
        () => `${editorialLabels.sources[languageCode.value]} — FelisFold`
    ),
    description: computed(() => introduction[languageCode.value])
})
</script>
<template>
    <div>
        <EditorialHeroSection
            :title="
                t(
                    'Sources & research',
                    'المصادر والأبحاث',
                    'Sources et recherche',
                    '资料与研究'
                )
            "
            :eyebrow="visualLabels.evidence"
            :copy="introduction"
            :photo="lotusPhoto('lotus-glasses')"
            :note="visualLabels.trust"
            :links="[{ path: '/health', label: editorialLabels.healthCare }]"
        >
            <template #byline>
                <a
                    href="#full-citations"
                    class="text-peach mt-5 inline-flex min-h-11 items-center underline underline-offset-4"
                    >{{ editorialLabels.sources[languageCode] }} ↓</a
                >
            </template>
        </EditorialHeroSection>
        <SourceEditorialSections />
        <section id="full-citations" class="bg-cream px-5 py-12 sm:px-8">
            <div class="mx-auto max-w-[80rem]">
                <p class="text-muted mb-7 max-w-3xl leading-8">
                    {{ reviewNote[languageCode] }}
                </p>
                <HealthSourceList
                    :sources="allSources"
                    reviewed-on="2026-10-01"
                /><NuxtLink
                    :to="localizedPath('/scottish-fold')"
                    class="editorial-link text-peach mt-5 inline-flex min-h-11 items-center"
                    >{{ editorialLabels.breed[languageCode] }} →</NuxtLink
                >
            </div>
        </section>
        <EditorialTrustStrip />
        <section class="px-5 py-12 sm:px-8">
            <div class="mx-auto max-w-[80rem]">
                <h2 class="font-display mb-5 text-2xl font-semibold">
                    {{
                        t(
                            "Photo, video & sound credits",
                            "مصادر الصور والفيديو والصوت",
                            "Crédits photo, vidéo et son",
                            "照片、视频与声音来源"
                        )[languageCode]
                    }}
                </h2>
                <CatMediaCredits />
            </div>
        </section>
    </div>
</template>
