<script setup lang="ts">
import type {
    HealthTopic,
    LocalizedText,
    LotusExperienceContent
} from "~/types/foldcare"
import { editorialLabels } from "~/data/editorialHelpers"
import { creatorPersonStructuredData } from "~/data/creatorProfile"

const props = defineProps<{
    guide: HealthTopic
    lotusExperience?: LotusExperienceContent | undefined
    links?: { path: string; label: LocalizedText }[]
    ownerStory?: boolean
}>()
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const runtimeConfig = useRuntimeConfig()
const route = useRoute()

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
    <article class="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <header>
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
        <MedicalInformationNotice v-if="!ownerStory" class="mt-7" />
        <nav
            :aria-label="editorialLabels.contents[languageCode]"
            class="border-border my-8 border-b pb-6"
        >
            <h2 class="text-ink font-semibold">
                {{ editorialLabels.contents[languageCode] }}
            </h2>
            <ul class="mt-3 grid gap-1 sm:grid-cols-2">
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
        <div class="space-y-10">
            <HealthArticleSection
                v-for="(section, index) in guide.sections"
                :key="section.heading.en"
                :section="section"
                :section-id="`guide-section-${index + 1}`"
            />
        </div>
        <slot />
        <aside v-if="lotusExperience" class="mt-12">
            <LotusExperiencePanel :content="lotusExperience" />
            <NuxtLink
                :to="localizedPath('/lotus')"
                class="text-lilac mt-3 inline-flex min-h-11 items-center underline underline-offset-4"
                >{{ editorialLabels.lotus[languageCode] }} →</NuxtLink
            >
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
    </article>
</template>
