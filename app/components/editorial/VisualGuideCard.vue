<script setup lang="ts">
import type { HealthTopic } from "~/types/foldcare"
import type { EditorialPhoto } from "~/data/editorialVisuals"
import { visualLabels } from "~/data/editorialVisuals"
defineProps<{
    guide: HealthTopic
    basePath: string
    photo?: EditorialPhoto | undefined
    large?: boolean
    mix?: boolean
}>()
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
</script>
<template>
    <article
        class="bg-paper text-ink min-w-0 rounded-xl p-3"
        :class="large ? 'sm:col-span-2' : ''"
    >
        <EditorialPhoto
            v-if="photo"
            :photo="photo"
            :caption="false"
            :sizes="large ? '100vw sm:80vw lg:680px' : '100vw sm:45vw lg:330px'"
            :image-class="
                large ? 'aspect-[16/7] rounded-lg' : 'aspect-[3/2] rounded-lg'
            "
        />
        <div
            v-else
            class="bg-sky-soft flex aspect-[3/2] items-center justify-center rounded-lg"
        >
            <CatIllustration :sleeping="guide.slug.includes('curl')" />
        </div>
        <div class="px-2 pt-5 pb-3 sm:px-4">
            <p v-if="!photo" class="text-muted mb-3 text-xs">
                {{ visualLabels.example[languageCode] }}
            </p>
            <EvidenceStatusBadge v-if="mix" :slug="guide.slug" class="mb-4" />
            <h3 class="text-2xl leading-tight sm:text-3xl">
                <NuxtLink
                    :to="localizedPath(`${basePath}/${guide.slug}`)"
                    class="hover:text-peach"
                    >{{ guide.title[languageCode] }}</NuxtLink
                >
            </h3>
            <p class="text-muted mt-3 text-sm leading-7">
                {{ guide.summary[languageCode] }}
            </p>
            <NuxtLink
                :to="localizedPath(`${basePath}/${guide.slug}`)"
                class="editorial-link text-peach mt-3 inline-flex min-h-11 items-center gap-3 text-sm font-semibold"
                >{{ visualLabels.read[languageCode] }}
                <span aria-hidden="true">→</span></NuxtLink
            >
        </div>
    </article>
</template>
