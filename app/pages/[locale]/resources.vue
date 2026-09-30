<script setup lang="ts">
import { healthTopics } from "~/data/healthTopics"
import { frequentlyAskedQuestions } from "~/data/faq"
import {
    emergencySigns,
    glossaryTerms,
    vetQuestions,
    vetVisitChecklist
} from "~/data/resourceData"
import { isLanguageCode } from "~/utils/languages"

definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { localizedPath } = useLocalizedPath()

const usefulLinks = [
    { label: "International Cat Care", url: "https://icatcare.org/" },
    {
        label: "International Society of Feline Medicine",
        url: "https://icatcare.org/veterinary/isfm/"
    },
    {
        label: "UC Davis Veterinary Genetics Laboratory",
        url: "https://vgl.ucdavis.edu/"
    },
    {
        label: "Cornell Feline Health Center",
        url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center"
    },
    { label: "Merck Veterinary Manual", url: "https://www.merckvetmanual.com/" }
]

function downloadChecklist() {
    const content = [
        "FelisFold — Before your vet visit",
        "",
        ...vetVisitChecklist.map((item, index) => `${index + 1}. ${item}`),
        "",
        "Educational information only. Contact a veterinarian for diagnosis and treatment."
    ].join("\n")
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = "felisfold-vet-visit-checklist.txt"
    link.click()
    URL.revokeObjectURL(link.href)
}

usePageSeo({
    title: "Scottish Fold resources & support — FelisFold",
    description:
        "Trusted research, practical checklists, veterinary questions, glossary terms and support for Scottish Fold families.",
    image: "/images/lotus/lotus-home.jpg"
})

useHead({
    script: [
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: frequentlyAskedQuestions.map((item) => ({
                    "@type": "Question",
                    name: item.question,
                    acceptedAnswer: { "@type": "Answer", text: item.answer }
                }))
            })
        }
    ]
})
</script>

<template>
    <div>
        <section class="paper-texture">
            <div
                class="mx-auto grid max-w-[90rem] lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch"
            >
                <div
                    class="order-2 px-4 py-10 sm:px-8 sm:py-14 lg:order-1 lg:flex lg:flex-col lg:justify-center lg:px-14"
                >
                    <p
                        class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        Scottish Fold resources & support
                    </p>
                    <h1
                        class="font-editorial text-ink mt-3 text-5xl leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
                    >
                        Resources & support.
                    </h1>
                    <p class="text-muted mt-5 max-w-xl text-lg leading-8">
                        Trusted information, practical tools and calm next steps
                        for a healthier life with your Scottish Fold.
                    </p>
                    <a
                        href="#research"
                        class="bg-peach text-on-accent mt-7 inline-flex min-h-12 w-fit items-center rounded-full px-6 font-bold"
                        >Explore the resources <span class="ms-3">🐾</span></a
                    >
                </div>
                <div
                    class="relative order-1 min-h-[22rem] lg:order-2 lg:min-h-[36rem]"
                >
                    <NuxtImg
                        src="/images/lotus/lotus-home.jpg"
                        alt="Lotus resting while his owner researches Scottish Fold health"
                        width="1152"
                        height="1536"
                        sizes="100vw lg:62vw"
                        format="webp"
                        :quality="87"
                        preload
                        fetchpriority="high"
                        class="absolute inset-0 size-full object-cover object-[center_38%]"
                    />
                    <div
                        class="bg-paper border-border absolute end-5 top-5 max-w-64 border p-5 shadow-xl"
                    >
                        <p class="font-editorial text-ink text-2xl">
                            Start here if you're worried.
                        </p>
                        <p class="text-muted mt-2 text-sm leading-6">
                            Check urgent signs first, then bring a clear record
                            to your vet.
                        </p>
                        <NuxtLink
                            :to="localizedPath('/health/when-to-call-a-vet')"
                            class="bg-peach text-on-accent mt-4 inline-flex min-h-10 items-center rounded-full px-4 text-sm font-bold"
                            >Get guidance now →</NuxtLink
                        >
                    </div>
                </div>
            </div>
            <WavySectionDivider tone="sky" />
        </section>

        <section
            id="research"
            class="bg-sky-soft paper-texture px-4 pb-14 sm:px-6 sm:pb-20"
        >
            <div class="mx-auto max-w-[90rem]">
                <div class="flex items-end justify-between gap-5">
                    <div>
                        <p
                            class="text-sky text-xs font-bold tracking-[0.2em] uppercase"
                        >
                            Research library
                        </p>
                        <h2 class="font-editorial text-ink mt-2 text-4xl">
                            Start with the evidence.
                        </h2>
                        <p class="text-muted mt-3 max-w-2xl leading-7">
                            Breed genetics, bones and joints, nutrition, daily
                            care, diagnostics and treatment.
                        </p>
                    </div>
                    <NuxtLink
                        :to="localizedPath('/health')"
                        class="editorial-link text-ink hidden font-bold sm:inline-flex"
                        >Browse all topics →</NuxtLink
                    >
                </div>
                <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <HealthTopicCard
                        v-for="topic in healthTopics.slice(0, 4)"
                        :key="topic.slug"
                        :topic="topic"
                    />
                </div>
            </div>
        </section>

        <section
            class="mx-auto grid max-w-[90rem] gap-6 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr_0.8fr]"
        >
            <div>
                <div class="flex items-end justify-between gap-4">
                    <div>
                        <p
                            class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                        >
                            Articles & citations
                        </p>
                        <h2 class="font-editorial text-ink mt-2 text-4xl">
                            Read deeper, with the source attached.
                        </h2>
                    </div>
                    <NuxtLink
                        :to="localizedPath('/sources')"
                        class="editorial-link text-peach font-bold"
                        >View source library →</NuxtLink
                    >
                </div>
                <div class="mt-7 grid gap-4 md:grid-cols-2">
                    <HealthTopicCard
                        v-for="topic in healthTopics.slice(4, 8)"
                        :key="topic.slug"
                        :topic="topic"
                    />
                </div>
            </div>
            <aside class="bg-sky-soft paper-texture p-6">
                <p
                    class="text-sky text-xs font-bold tracking-[0.18em] uppercase"
                >
                    Glossary
                </p>
                <h2 class="font-editorial text-ink mt-2 text-3xl">
                    Common terms, plain language.
                </h2>
                <div class="divide-sky/20 mt-5 divide-y">
                    <details
                        v-for="item in glossaryTerms"
                        :key="item.term"
                        class="group py-2"
                    >
                        <summary
                            class="text-ink flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 font-bold"
                        >
                            {{ item.term }}
                            <span class="text-sky group-open:rotate-45">+</span>
                        </summary>
                        <p class="text-muted pb-3 text-sm leading-6">
                            {{ item.meaning }}
                        </p>
                    </details>
                </div>
            </aside>
        </section>

        <section class="bg-paper paper-texture px-4 py-14 sm:px-6">
            <div class="mx-auto grid max-w-[90rem] gap-6 lg:grid-cols-3">
                <article class="border-border border p-6">
                    <p
                        class="text-sage text-xs font-bold tracking-[0.18em] uppercase"
                    >
                        Questions for your vet
                    </p>
                    <h2 class="font-editorial text-ink mt-2 text-3xl">
                        Be curious. Ask clearly.
                    </h2>
                    <ul class="text-muted mt-5 space-y-3 text-sm leading-6">
                        <li
                            v-for="question in vetQuestions"
                            :key="question"
                            class="flex gap-2"
                        >
                            <span class="text-sage">✓</span>{{ question }}
                        </li>
                    </ul>
                </article>
                <article class="border-danger/30 bg-danger-soft border p-6">
                    <p
                        class="text-danger text-xs font-bold tracking-[0.18em] uppercase"
                    >
                        Emergency warning signs
                    </p>
                    <h2 class="font-editorial text-ink mt-2 text-3xl">
                        Know when not to wait.
                    </h2>
                    <ul class="text-muted mt-5 space-y-3 text-sm leading-6">
                        <li
                            v-for="sign in emergencySigns"
                            :key="sign"
                            class="flex gap-2"
                        >
                            <span class="text-danger">◉</span>{{ sign }}
                        </li>
                    </ul>
                </article>
                <article class="border-border border p-6">
                    <p
                        class="text-peach text-xs font-bold tracking-[0.18em] uppercase"
                    >
                        Printable care checklist
                    </p>
                    <h2 class="font-editorial text-ink mt-2 text-3xl">
                        Take a clearer story to the appointment.
                    </h2>
                    <ol class="text-muted mt-5 space-y-3 text-sm">
                        <li
                            v-for="(item, index) in vetVisitChecklist"
                            :key="item"
                            class="flex gap-3"
                        >
                            <span class="text-peach font-bold">{{
                                index + 1
                            }}</span
                            >{{ item }}
                        </li>
                    </ol>
                    <button
                        type="button"
                        class="bg-peach text-on-accent mt-6 min-h-11 rounded-full px-5 font-bold"
                        @click="downloadChecklist"
                    >
                        Download checklist →
                    </button>
                </article>
            </div>
        </section>

        <section
            class="mx-auto grid max-w-[90rem] gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-3"
        >
            <div>
                <p
                    class="text-sky text-xs font-bold tracking-[0.18em] uppercase"
                >
                    Useful links
                </p>
                <h2 class="font-editorial text-ink mt-2 text-3xl">
                    Trusted places to keep learning.
                </h2>
                <ul class="mt-5 space-y-3">
                    <li v-for="link in usefulLinks" :key="link.url">
                        <a
                            :href="link.url"
                            target="_blank"
                            rel="noreferrer"
                            class="editorial-link text-ink font-semibold"
                            >{{ link.label }} ↗</a
                        >
                    </li>
                </ul>
            </div>
            <div class="lg:col-span-2">
                <p
                    class="text-peach text-xs font-bold tracking-[0.18em] uppercase"
                >
                    Frequently asked questions
                </p>
                <h2 class="font-editorial text-ink mt-2 text-3xl">
                    Quick answers, careful wording.
                </h2>
                <SiteFaqList :items="frequentlyAskedQuestions" class="mt-5" />
            </div>
        </section>

        <section class="bg-cream paper-texture px-4 py-12 sm:px-6">
            <div
                class="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-[0.7fr_1fr_0.5fr] lg:items-center"
            >
                <NuxtImg
                    src="/images/lotus/lotus-with-creator-younger.jpg"
                    alt="Lotus with his owner"
                    width="1152"
                    height="1536"
                    sizes="100vw lg:32vw"
                    format="webp"
                    :quality="82"
                    loading="lazy"
                    decoding="async"
                    placeholder
                    class="aspect-[4/3] w-full object-cover object-[center_38%]"
                />
                <div>
                    <p
                        class="text-peach text-xs font-bold tracking-[0.18em] uppercase"
                    >
                        A note from Lotus's human
                    </p>
                    <h2 class="font-editorial text-ink mt-2 text-4xl">
                        We're in this together.
                    </h2>
                    <p class="text-muted mt-4 leading-7">
                        This page grew from real conversations, real uncertainty
                        and a wish to help other Scottish Fold families feel
                        better prepared—never more frightened.
                    </p>
                </div>
                <HandwrittenNote
                    text="More knowledge. More compassion. Happier days."
                    rotate="right"
                />
            </div>
        </section>
        <TrustStrip />
    </div>
</template>
