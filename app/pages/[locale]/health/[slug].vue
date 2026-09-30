<script setup lang="ts">
import {
    findHealthTopic,
    healthTopicGroups,
    healthTopics
} from "~/data/healthTopics"
import { textForLanguage } from "~/data/siteText"
import { isLanguageCode } from "~/utils/languages"

const route = useRoute()
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()

const topic = computed(() => findHealthTopic(String(route.params.slug)))
if (!topic.value) {
    throw createError({
        statusCode: 404,
        statusMessage: "Health guide not found"
    })
}

const title = computed(() =>
    textForLanguage(topic.value!.title, languageCode.value)
)
const summary = computed(() =>
    textForLanguage(topic.value!.summary, languageCode.value)
)
const eyebrow = computed(() =>
    textForLanguage(topic.value!.eyebrow, languageCode.value)
)
const relatedTopics = computed(() => {
    const currentSlug = topic.value!.slug
    const currentGroups = Object.values(healthTopicGroups).filter((slugs) =>
        slugs.includes(currentSlug)
    )

    return healthTopics
        .filter((item) => item.slug !== currentSlug)
        .map((item, originalIndex) => ({
            item,
            originalIndex,
            sharedGroupCount: currentGroups.filter((slugs) =>
                slugs.includes(item.slug)
            ).length
        }))
        .sort(
            (first, second) =>
                second.sharedGroupCount - first.sharedGroupCount ||
                first.originalIndex - second.originalIndex
        )
        .slice(0, 3)
        .map(({ item }) => item)
})
const contentsLabel = computed(() =>
    languageCode.value === "ar"
        ? "في هذا الدليل"
        : languageCode.value === "fr"
          ? "Dans ce guide"
          : languageCode.value === "zh"
            ? "本指南内容"
            : "In this guide"
)
const relatedLabel = computed(() =>
    languageCode.value === "ar"
        ? "أدلة ذات صلة"
        : languageCode.value === "fr"
          ? "Guides associés"
          : languageCode.value === "zh"
            ? "相关指南"
            : "Related guides"
)

const healthLibraryLabel = computed(() =>
    languageCode.value === "ar"
        ? "مكتبة الصحة"
        : languageCode.value === "fr"
          ? "Bibliothèque santé"
          : languageCode.value === "zh"
            ? "健康资料库"
            : "Health library"
)
const lotusExperienceLabel = computed(() =>
    languageCode.value === "ar"
        ? "تجربة لوتس"
        : languageCode.value === "fr"
          ? "L’expérience de Lotus"
          : languageCode.value === "zh"
            ? "Lotus 的经历"
            : "Lotus’s experience"
)
const realExampleTitle = computed(() =>
    languageCode.value === "ar"
        ? "مثال حقيقي، وليس تشخيصاً."
        : languageCode.value === "fr"
          ? "Un exemple réel, pas un diagnostic."
          : languageCode.value === "zh"
            ? "真实例子，不是诊断。"
            : "A real example, not a diagnosis."
)
const lotusLinkLabel = computed(() =>
    languageCode.value === "ar"
        ? "تعرّف على لوتس"
        : languageCode.value === "fr"
          ? "Rencontrer Lotus"
          : languageCode.value === "zh"
            ? "认识 Lotus"
            : "Meet Lotus"
)
const lotusJointCopy = computed(() =>
    languageCode.value === "ar"
        ? "لوتس يتردد كثيراً قبل القفزات الكبيرة، ويستخدم الأثاث كخطوات وسيطة، ولا يحب أن يُحمل، ولديه تيبس في الأطراف والذيل. ومع ذلك لا يزال يركض ويلعب ويتمدد أحياناً."
        : languageCode.value === "fr"
          ? "Lotus hésite souvent avant les grands sauts, utilise les meubles comme étapes, n’aime pas être porté et présente de la raideur aux membres et à la queue. Il court, joue et s’étire encore parfois."
          : languageCode.value === "zh"
            ? "Lotus 经常在较大的跳跃前犹豫，会用家具分段上去，不喜欢被抱，四肢和尾巴也有僵硬。不过他有时仍然会跑、玩和伸展。"
            : "Lotus often hesitates before bigger jumps, uses intermediate furniture, dislikes being picked up, and has stiffness involving his limbs and tail. He also still runs, plays and stretches sometimes."
)
const lotusVomitingCopy = computed(() =>
    languageCode.value === "ar"
        ? "لدى لوتس تاريخ طويل من القيء المتكرر، خاصة بعد الوجبات الأكبر وأحياناً بعد تنظيف نفسه. لذلك تتعامل FelisFold مع القيء كمشكلة منفصلة بدلاً من افتراض أنه ناتج عن جين Fold."
        : languageCode.value === "fr"
          ? "Lotus a une longue histoire de vomissements répétés, surtout après de plus grosses portions et parfois après le toilettage. FelisFold traite donc les vomissements comme un problème séparé plutôt que de les attribuer au gène Fold."
          : languageCode.value === "zh"
            ? "Lotus 长期有反复呕吐，尤其在吃得较多后，有时也在梳理毛发后发生。因此 FelisFold 把呕吐当作独立问题，而不是假设它来自折耳基因。"
            : "Lotus has a long history of repeated vomiting, especially after larger portions and sometimes after grooming. That history is why FelisFold treats vomiting as its own problem instead of assuming it comes from the Fold gene."
)

usePageSeo({
    title: computed(() => `${title.value} — FelisFold`),
    description: summary,
    type: "article"
})

useHead(() => ({
    script: [
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: title.value,
                description: summary.value,
                dateModified: topic.value!.reviewedOn,
                author: { "@type": "Person", name: "FelisFold creator" },
                publisher: { "@type": "Organization", name: "FelisFold" }
            })
        }
    ]
}))
</script>

<template>
    <div
        v-if="topic"
        class="mx-auto max-w-4xl px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20"
    >
        <NuxtLink
            :to="localizedPath('/health')"
            class="text-lilac text-sm font-medium hover:underline"
            >← {{ healthLibraryLabel }}</NuxtLink
        >
        <div class="mt-6 flex items-start justify-between gap-5">
            <div>
                <p
                    class="text-lilac text-sm font-semibold tracking-[0.18em] uppercase"
                >
                    {{ eyebrow }}
                </p>
                <div class="mt-4 flex items-center gap-3">
                    <span class="text-3xl" aria-hidden="true">{{
                        topic.icon
                    }}</span>
                    <h1
                        class="text-ink text-4xl font-semibold tracking-[-0.04em] sm:text-5xl"
                    >
                        {{ title }}
                    </h1>
                </div>
                <p class="text-muted mt-6 text-xl leading-9">{{ summary }}</p>
            </div>
            <FoldCatMascot class="hidden sm:block" size="sm" />
        </div>

        <MedicalInformationNotice class="mt-8" />

        <nav
            class="border-border bg-paper mt-8 rounded-[1.5rem] border p-5"
            :aria-label="contentsLabel"
        >
            <p class="text-peach text-xs font-bold tracking-[0.16em] uppercase">
                {{ contentsLabel }}
            </p>
            <ul class="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <li
                    v-for="(section, index) in topic.sections"
                    :key="section.heading.en"
                >
                    <a
                        :href="`#guide-section-${index + 1}`"
                        class="text-ink decoration-peach/50 underline underline-offset-4"
                    >
                        {{ textForLanguage(section.heading, languageCode) }}
                    </a>
                </li>
            </ul>
        </nav>

        <div class="mt-10 space-y-9">
            <HealthArticleSection
                v-for="(section, index) in topic.sections"
                :key="section.heading.en"
                :section="section"
                :section-id="`guide-section-${index + 1}`"
            />
        </div>

        <aside
            v-if="
                topic.slug === 'osteochondrodysplasia' ||
                topic.slug === 'vomiting'
            "
            class="border-lilac/15 bg-lilac-soft mt-10 rounded-[2rem] border p-6 sm:p-8"
        >
            <p
                class="text-lilac text-sm font-semibold tracking-[0.18em] uppercase"
            >
                {{ lotusExperienceLabel }}
            </p>
            <h2 class="text-ink mt-3 text-2xl font-semibold">
                {{ realExampleTitle }}
            </h2>
            <p class="text-muted mt-4 leading-8">
                <template v-if="topic.slug === 'osteochondrodysplasia'">{{
                    lotusJointCopy
                }}</template>
                <template v-else>{{ lotusVomitingCopy }}</template>
            </p>
            <NuxtLink
                :to="localizedPath('/lotus')"
                class="text-lilac mt-5 inline-flex font-semibold hover:underline"
                >{{ lotusLinkLabel }} →</NuxtLink
            >
        </aside>

        <div class="mt-12">
            <HealthSourceList
                :sources="topic.sources"
                :reviewed-on="topic.reviewedOn"
            />
        </div>

        <section class="mt-12" aria-labelledby="related-guides-title">
            <h2
                id="related-guides-title"
                class="font-editorial text-ink text-3xl"
            >
                {{ relatedLabel }}
            </h2>
            <div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <HealthTopicCard
                    v-for="relatedTopic in relatedTopics"
                    :key="relatedTopic.slug"
                    :topic="relatedTopic"
                />
            </div>
        </section>
    </div>
</template>
