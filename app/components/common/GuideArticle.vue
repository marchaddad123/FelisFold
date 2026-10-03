<script setup lang="ts">
import type {
    HealthTopic,
    LocalizedText,
    LotusExperienceContent
} from "~/types/foldcare"
import { editorialLabels } from "~/data/editorialHelpers"
import { creatorPersonStructuredData } from "~/data/creatorProfile"
import { foldPhoto, lotusPhoto, visualLabels } from "~/data/editorialVisuals"

const props = defineProps<{
    guide: HealthTopic
    lotusExperience?: LotusExperienceContent | undefined
    links?: { path: string; label: LocalizedText }[]
    ownerStory?: boolean
    visualLayout?: "breed" | "nutrition" | "mixes" | "mix-detail"
}>()
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const heroPhoto = computed(() => {
    if (props.visualLayout === "breed") return foldPhoto("grey-fold-forward")
    if (props.visualLayout === "nutrition") return lotusPhoto("lotus-feeding")
    if (props.visualLayout === "mixes") return lotusPhoto("lotus-family")
    if (
        props.visualLayout === "mix-detail" &&
        props.guide.slug === "scottish-fold-siamese"
    )
        return lotusPhoto("lotus-portrait")
    if (props.visualLayout === "mix-detail")
        return foldPhoto(
            props.guide.slug === "scottish-fold-highlander"
                ? "fluffy-brown-fold"
                : props.guide.slug === "scottish-fold-munchkin"
                  ? "fold-on-floor"
                  : "white-ginger-amber-eyes"
        )
    return undefined
})

usePageSeo({
    title: computed(
        () => `${props.guide.title[languageCode.value]} — FelisFold`
    ),
    description: computed(() => props.guide.summary[languageCode.value]),
    type: "article"
})
useHead(() => ({
    script: [
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: props.guide.title[languageCode.value],
                description: props.guide.summary[languageCode.value],
                dateModified: props.guide.reviewedOn,
                inLanguage: languageCode.value,
                mainEntityOfPage: new URL(
                    route.path,
                    String(runtimeConfig.public.siteUrl)
                ).toString(),
                author: creatorPersonStructuredData(
                    String(runtimeConfig.public.siteUrl)
                ),
                publisher: { "@type": "Organization", name: "FelisFold" },
                citation: props.guide.sources.map((source) => source.url)
            })
        }
    ]
}))
</script>

<template>
    <article
        :class="
            visualLayout ? '' : 'mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16'
        "
    >
        <EditorialHeroSection
            v-if="visualLayout"
            :title="guide.title"
            :eyebrow="guide.eyebrow"
            :copy="guide.summary"
            :photo="heroPhoto"
            :note="heroPhoto?.caption"
            :links="links?.slice(0, 2)"
        >
            <template #byline
                ><CreatorArticleByline /><EvidenceStatusBadge
                    v-if="visualLayout === 'mix-detail'"
                    :slug="guide.slug"
                    class="mt-4"
            /></template>
            <template #visual
                ><CatIllustration :sleeping="guide.slug.includes('curl')" />
                <p class="text-peach mt-5 text-sm">
                    {{ visualLabels.example[languageCode] }}
                </p>
                <EvidenceStatusBadge :slug="guide.slug" class="mt-5"
            /></template>
        </EditorialHeroSection>
        <header v-else>
            <p class="text-lilac text-sm font-medium">
                {{ guide.eyebrow[languageCode] }}
            </p>
            <h1
                class="font-editorial text-ink mt-4 text-4xl leading-tight tracking-tight sm:text-5xl"
            >
                {{ guide.title[languageCode] }}
            </h1>
            <p class="text-muted mt-5 text-lg leading-8">
                {{ guide.summary[languageCode] }}
            </p>
            <CreatorArticleByline />
        </header>
        <div :class="visualLayout ? 'bg-sky-soft px-5 pb-8 sm:px-8' : ''">
            <div :class="visualLayout ? 'mx-auto max-w-[80rem]' : ''">
                <MedicalInformationNotice v-if="!ownerStory" class="pt-7" />
                <nav
                    :aria-label="editorialLabels.contents[languageCode]"
                    class="border-border my-8 border-b pb-6"
                >
                    <h2 class="text-ink font-semibold">
                        {{ editorialLabels.contents[languageCode] }}
                    </h2>
                    <ul
                        class="mt-3 grid gap-x-8 gap-y-1 sm:grid-cols-2"
                        :class="visualLayout ? 'lg:grid-cols-3' : ''"
                    >
                        <li
                            v-for="(section, index) in guide.sections"
                            :key="section.heading.en"
                        >
                            <a
                                :href="`#guide-section-${index + 1}`"
                                class="text-lilac inline-flex min-h-11 items-center underline decoration-current/30 underline-offset-4"
                                >{{ section.heading[languageCode] }}</a
                            >
                        </li>
                    </ul>
                </nav>
                <p v-if="!ownerStory" class="text-muted mb-7 text-sm">
                    {{ editorialLabels.evidence[languageCode] }}
                </p>
            </div>
        </div>
        <slot name="introduction" />
        <NutritionGuideSections
            v-if="visualLayout === 'nutrition'"
            :guide="guide"
        />
        <GuideVisualSections
            v-else-if="visualLayout"
            :guide="guide"
            :layout="visualLayout"
        >
            <template #visual-0
                ><ResearchEvidenceVisual :slug="guide.slug"
            /></template>
            <template #visual-1
                ><ResearchEvidenceVisual :slug="guide.slug"
            /></template>
            <template #visual-3
                ><ResearchEvidenceVisual :slug="guide.slug"
            /></template>
        </GuideVisualSections>
        <div v-else class="space-y-10">
            <HealthArticleSection
                v-for="(section, index) in guide.sections"
                :key="section.heading.en"
                :section="section"
                :section-id="`guide-section-${index + 1}`"
            />
        </div>
        <slot />
        <div :class="visualLayout ? 'bg-cream px-5 py-12 sm:px-8' : ''">
            <div :class="visualLayout ? 'mx-auto max-w-[80rem]' : ''">
                <aside
                    v-if="lotusExperience && visualLayout !== 'nutrition'"
                    class="my-10 grid gap-8"
                    :class="
                        visualLayout
                            ? 'lg:grid-cols-[1.2fr_0.8fr] lg:items-center'
                            : ''
                    "
                >
                    <div>
                        <LotusExperiencePanel :content="lotusExperience" />
                        <NuxtLink
                            :to="localizedPath('/lotus')"
                            class="text-lilac mt-3 inline-flex min-h-11 items-center underline underline-offset-4"
                            >{{
                                editorialLabels.lotus[languageCode]
                            }}
                            →</NuxtLink
                        >
                    </div>
                    <EditorialPhoto
                        v-if="visualLayout"
                        :photo="lotusPhoto('lotus-posture')"
                        frame
                    />
                </aside>
                <HealthSourceList
                    v-if="guide.sources.length"
                    :sources="guide.sources"
                    :reviewed-on="guide.reviewedOn"
                    class="mt-12"
                />
                <p v-else class="text-muted mt-8 text-sm">
                    {{ editorialLabels.ownerRecord[languageCode] }}
                </p>
                <nav
                    v-if="links?.length"
                    :aria-label="editorialLabels.related[languageCode]"
                    class="border-border mt-10 border-t pt-6"
                >
                    <h2 class="font-editorial text-ink text-2xl">
                        {{ editorialLabels.related[languageCode] }}
                    </h2>
                    <ul class="mt-3 space-y-1">
                        <li v-for="link in links" :key="link.path">
                            <NuxtLink
                                :to="localizedPath(link.path)"
                                class="text-lilac inline-flex min-h-11 items-center underline underline-offset-4"
                                >{{ link.label[languageCode] }} →</NuxtLink
                            >
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <EditorialTrustStrip v-if="visualLayout" />
    </article>
</template>
