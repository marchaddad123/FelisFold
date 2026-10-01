<script setup lang="ts">
import { siteText, textForLanguage } from "~/data/siteText"
import { frequentlyAskedQuestions } from "~/data/faq"
import { isLanguageCode } from "~/utils/languages"

definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()
const intro = computed(() =>
    textForLanguage(siteText.home.intro, languageCode.value)
)

usePageSeo({
    title: computed(
        () =>
            `FelisFold — ${textForLanguage(siteText.brandTagline, languageCode.value)}`
    ),
    description: intro,
    image: "/images/lotus/lotus-home.jpg"
})
</script>

<template>
    <div>
        <HomeHeroSection />
        <HomePrinciplesSection />
        <HomeHealthPreviewSection />
        <HomeLotusStorySection />
        <CreatorIntroductionSection />
        <HomeCareTopicsSection />
        <HomeLifeCollageSection />
        <TrustStrip />
        <section
            class="bg-paper paper-texture px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
        >
            <div
                class="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start"
            >
                <div>
                    <p
                        class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        Frequently asked questions
                    </p>
                    <h2
                        class="font-editorial text-ink mt-3 text-4xl leading-none sm:text-5xl"
                    >
                        Your questions, answered.
                    </h2>
                    <p class="text-muted mt-4 leading-7">
                        Quick, careful answers to common questions about
                        Scottish Fold health and everyday care.
                    </p>
                </div>
                <SiteFaqList :items="frequentlyAskedQuestions" />
            </div>
        </section>
    </div>
</template>
