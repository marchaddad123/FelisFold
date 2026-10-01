<script setup lang="ts">
import { evidenceSources } from "~/data/evidenceSources"
import { healthTopics } from "~/data/healthTopics"
import { editorialLabels, translated as t } from "~/data/editorialHelpers"
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
    <div class="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 class="font-editorial text-ink text-4xl sm:text-5xl">
            {{ editorialLabels.sources[languageCode] }}
        </h1>
        <p class="text-muted mt-5 text-lg leading-8">
            {{ introduction[languageCode] }}
        </p>
        <p class="text-muted mt-5 leading-8">{{ reviewNote[languageCode] }}</p>
        <nav class="mt-5 flex flex-wrap gap-5">
            <NuxtLink
                :to="localizedPath('/scottish-fold')"
                class="text-lilac inline-flex min-h-11 items-center underline"
                >{{ editorialLabels.breed[languageCode] }}</NuxtLink
            ><NuxtLink
                :to="localizedPath('/mixes')"
                class="text-lilac inline-flex min-h-11 items-center underline"
                >{{ editorialLabels.mixes[languageCode] }}</NuxtLink
            ><NuxtLink
                :to="localizedPath('/lotus')"
                class="text-lilac inline-flex min-h-11 items-center underline"
                >{{ editorialLabels.lotus[languageCode] }}</NuxtLink
            >
        </nav>
        <HealthSourceList
            :sources="allSources"
            reviewed-on="2026-10-01"
            class="mt-8"
        />
    </div>
</template>
