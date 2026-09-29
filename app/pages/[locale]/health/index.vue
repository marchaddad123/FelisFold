<script setup lang="ts">
import { healthTopics } from "~/data/healthTopics"
import { frequentlyAskedQuestions } from "~/data/faq"
import { isLanguageCode } from "~/utils/languages"

definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const selectedFilter = ref("all")
const filters = [
    { id: "all", label: "All" },
    { id: "mobility", label: "Mobility" },
    { id: "digestion", label: "Digestion" },
    { id: "daily", label: "Daily care" },
    { id: "vet", label: "Vet visits" }
]
const filterSlugs: Record<string, string[]> = {
    mobility: [
        "osteochondrodysplasia",
        "pain-and-mobility",
        "weight-and-quality-of-life"
    ],
    digestion: ["vomiting", "ears-and-grooming", "weight-and-quality-of-life"],
    daily: ["ears-and-grooming", "weight-and-quality-of-life", "heart-health"],
    vet: ["pkd", "heart-health", "when-to-call-a-vet"]
}
const filteredTopics = computed(() =>
    selectedFilter.value === "all"
        ? healthTopics
        : healthTopics.filter((topic) =>
              filterSlugs[selectedFilter.value]?.includes(topic.slug)
          )
)
const title = computed(() =>
    languageCode.value === "ar"
        ? "أدلة صحة Scottish Fold"
        : languageCode.value === "fr"
          ? "Guides santé du Scottish Fold"
          : languageCode.value === "zh"
            ? "苏格兰折耳猫健康指南"
            : "Health guides for Scottish Folds"
)
const copy = computed(() =>
    languageCode.value === "ar"
        ? "أدلة واضحة وعملية ومدعومة بالأدلة لفهم المشكلات الشائعة والاستعداد للطبيب البيطري."
        : languageCode.value === "fr"
          ? "Des guides clairs, pratiques et fondés sur les preuves pour mieux comprendre les problèmes courants."
          : languageCode.value === "zh"
            ? "清楚、实用并基于证据的指南，帮助你理解常见问题并为就诊做好准备。"
            : "Clear, practical and evidence-led guides to help you understand common concerns and prepare for better veterinary conversations."
)

usePageSeo({
    title: computed(() => `${title.value} — FelisFold`),
    description: copy,
    image: "/images/lotus/lotus-posture.jpg"
})
</script>

<template>
    <div>
        <section class="paper-texture relative overflow-hidden">
            <div
                class="mx-auto grid max-w-[90rem] lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch"
            >
                <div
                    class="order-2 px-4 py-10 sm:px-8 sm:py-14 lg:order-1 lg:flex lg:flex-col lg:justify-center lg:px-14"
                >
                    <p
                        class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        Scottish Fold health guide
                    </p>
                    <h1
                        class="font-editorial text-ink mt-3 text-5xl leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
                    >
                        {{ title }}
                    </h1>
                    <p class="text-muted mt-5 max-w-xl text-lg leading-8">
                        {{ copy }}
                    </p>
                    <div class="mt-7 flex flex-wrap gap-3">
                        <a
                            href="#guides"
                            class="bg-peach inline-flex min-h-12 items-center rounded-full px-6 font-bold text-white"
                            >Explore all guides <span class="ms-3">→</span></a
                        ><NuxtLink
                            :to="localizedPath('/resources')"
                            class="editorial-link text-ink inline-flex min-h-12 items-center px-2 font-semibold"
                            >Why this matters →</NuxtLink
                        >
                    </div>
                </div>
                <div
                    class="relative order-1 min-h-[22rem] lg:order-2 lg:min-h-[36rem]"
                >
                    <NuxtImg
                        src="/images/lotus/lotus-posture.jpg"
                        alt="Lotus resting while his movement and posture are observed"
                        width="1152"
                        height="1536"
                        sizes="100vw lg:58vw"
                        format="webp"
                        :quality="87"
                        preload
                        fetchpriority="high"
                        class="absolute inset-0 size-full object-cover object-[center_35%]"
                    /><HandwrittenNote
                        text="Better knowledge. Brighter days. For every Fold."
                        tone="paper"
                        class="absolute end-5 bottom-5 rotate-2 bg-[#fff4dc]/90 p-4 shadow-lg"
                    />
                </div>
            </div>
            <WavySectionDivider tone="paper" />
        </section>

        <section
            id="guides"
            class="bg-paper paper-texture px-4 py-12 sm:px-6 sm:py-16"
        >
            <div class="mx-auto max-w-[90rem]">
                <div
                    class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div>
                        <p
                            class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                        >
                            Explore by topic
                        </p>
                        <h2
                            class="font-editorial text-ink mt-2 text-4xl sm:text-5xl"
                        >
                            Find the guide you need.
                        </h2>
                    </div>
                    <div
                        class="flex flex-wrap gap-2"
                        aria-label="Filter health topics"
                    >
                        <button
                            v-for="filter in filters"
                            :key="filter.id"
                            type="button"
                            class="min-h-10 rounded-full border px-4 text-sm font-semibold"
                            :class="
                                selectedFilter === filter.id
                                    ? 'border-peach bg-peach text-white'
                                    : 'border-border text-ink'
                            "
                            @click="selectedFilter = filter.id"
                        >
                            {{ filter.label }}
                        </button>
                    </div>
                </div>
                <div
                    class="mt-9 grid gap-6 lg:grid-cols-[1fr_18rem] xl:grid-cols-[1fr_20rem]"
                >
                    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        <HealthTopicCard
                            v-for="topic in filteredTopics"
                            :key="topic.slug"
                            :topic="topic"
                        />
                    </div>
                    <HealthWarningPanel />
                </div>
            </div>
        </section>

        <section class="bg-sky-soft paper-texture px-4 py-12 sm:px-6 sm:py-16">
            <div
                class="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-[0.72fr_1fr_0.7fr] lg:items-center"
            >
                <NuxtImg
                    src="/images/lotus/lotus-cozy.jpg"
                    alt="Lotus resting comfortably"
                    width="864"
                    height="1536"
                    sizes="100vw lg:30vw"
                    format="webp"
                    :quality="83"
                    loading="lazy"
                    decoding="async"
                    placeholder
                    class="aspect-[4/3] w-full rounded-[48%_48%_8%_8%] object-cover object-[center_30%]"
                />
                <div>
                    <p
                        class="text-sky text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        Lotus's notes
                    </p>
                    <h2 class="font-editorial text-ink mt-2 text-4xl">
                        What I see. What research can explain. What only a vet
                        can decide.
                    </h2>
                    <p class="text-muted mt-4 leading-7">
                        Lotus's movement, eating and vomiting patterns are owner
                        observations. They help guide questions, but they are
                        never presented as a diagnosis.
                    </p>
                    <NuxtLink
                        :to="localizedPath('/lotus')"
                        class="bg-paper text-ink mt-6 inline-flex min-h-11 items-center rounded-full px-5 font-bold"
                        >Read Lotus's journey →</NuxtLink
                    >
                </div>
                <PhotoNoteCard
                    src="/images/lotus/lotus-with-creator-younger.jpg"
                    alt="Lotus with his owner when younger"
                    :width="1152"
                    :height="1536"
                    caption="Same cat. Better questions."
                    rotate="right"
                />
            </div>
        </section>

        <TrustStrip />
        <section
            class="mx-auto grid max-w-[90rem] gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.65fr_1.35fr]"
        >
            <div>
                <p
                    class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                >
                    Frequently asked questions
                </p>
                <h2 class="font-editorial text-ink mt-2 text-4xl">
                    Clear answers, calm next steps.
                </h2>
            </div>
            <SiteFaqList :items="frequentlyAskedQuestions" />
        </section>
    </div>
</template>
