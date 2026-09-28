<script setup lang="ts">
import { isLanguageCode } from "~/utils/languages"

definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()
const searchQuery = ref("")
const { matchingTopics } = useSiteSearch(searchQuery)

const pageText = computed(() => {
    if (languageCode.value === "ar")
        return {
            eyebrow: "بحث",
            title: "ابحث عن الدليل الذي تحتاجه.",
            copy: "ابحث حسب العرض أو الحالة أو السؤال اليومي.",
            emptyTitle: "لا يوجد دليل مطابق بعد.",
            emptyCopy: "جرّب كلمة أوسع مثل ألم أو قيء أو كلى أو أذن."
        }
    if (languageCode.value === "fr")
        return {
            eyebrow: "Recherche",
            title: "Trouvez le guide dont vous avez besoin.",
            copy: "Recherchez par symptôme, maladie ou question du quotidien.",
            emptyTitle: "Aucun guide correspondant pour le moment.",
            emptyCopy:
                "Essayez un mot plus large comme douleur, vomissement, rein ou oreille."
        }
    if (languageCode.value === "zh")
        return {
            eyebrow: "搜索",
            title: "找到你需要的指南。",
            copy: "可以按症状、疾病或日常问题搜索。",
            emptyTitle: "暂时没有匹配的指南。",
            emptyCopy: "试试更宽泛的词，例如疼痛、呕吐、肾脏或耳朵。"
        }
    return {
        eyebrow: "Search",
        title: "Find the guide you need.",
        copy: "Search by symptom, condition or everyday concern.",
        emptyTitle: "No matching guide yet.",
        emptyCopy: "Try a broader word like pain, vomit, kidney or ear."
    }
})

usePageSeo({
    title: computed(() => `${pageText.value.eyebrow} — FoldCare`),
    description: computed(() => pageText.value.copy)
})
</script>

<template>
    <div class="mx-auto max-w-5xl px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20">
        <AppSectionHeading
            :eyebrow="pageText.eyebrow"
            :title="pageText.title"
            :copy="pageText.copy"
        />
        <SiteSearchForm v-model="searchQuery" class="mt-8" />
        <div class="mt-8 grid gap-5 md:grid-cols-2">
            <HealthTopicCard
                v-for="topic in matchingTopics"
                :key="topic.slug"
                :topic="topic"
            />
        </div>
        <div
            v-if="matchingTopics.length === 0"
            class="border-border bg-paper mt-8 rounded-[2rem] border border-dashed p-8 text-center"
        >
            <FoldCatMascot size="sm" />
            <p class="text-ink mt-3 font-medium">{{ pageText.emptyTitle }}</p>
            <p class="text-muted mt-2 text-sm">{{ pageText.emptyCopy }}</p>
        </div>
    </div>
</template>
