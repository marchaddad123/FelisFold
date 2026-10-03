<script setup lang="ts">
import type { EditorialPhoto } from "~/data/editorialVisuals"
import type { LocalizedText } from "~/types/foldcare"
defineProps<{
    title: LocalizedText
    eyebrow: LocalizedText
    copy: LocalizedText
    photo?: EditorialPhoto | undefined
    note?: LocalizedText | undefined
    links?: { path: string; label: LocalizedText }[] | undefined
}>()
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
</script>
<template>
    <header class="bg-paper paper-texture">
        <div class="mx-auto grid max-w-[90rem] lg:grid-cols-[0.9fr_1.1fr]">
            <div
                class="px-5 py-9 sm:px-8 sm:py-12 lg:flex lg:flex-col lg:justify-center lg:px-14 lg:py-16"
            >
                <p class="text-peach text-sm font-semibold">
                    {{ eyebrow[languageCode] }}
                </p>
                <h1
                    class="text-ink mt-4 text-[2.6rem] leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-[4.5rem]"
                >
                    {{ title[languageCode] }}
                </h1>
                <p
                    class="text-muted mt-5 max-w-xl text-base leading-7 sm:text-lg sm:leading-8"
                >
                    {{ copy[languageCode] }}
                </p>
                <div
                    v-if="links?.length"
                    class="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2"
                >
                    <NuxtLink
                        v-for="(link, index) in links"
                        :key="link.path"
                        :to="localizedPath(link.path)"
                        class="inline-flex min-h-12 items-center gap-3 font-semibold"
                        :class="
                            index === 0
                                ? 'bg-peach text-on-accent rounded-full px-5 py-2'
                                : 'editorial-link text-ink'
                        "
                        >{{ link.label[languageCode] }}
                        <span aria-hidden="true">→</span></NuxtLink
                    >
                </div>
                <slot name="byline" />
            </div>
            <div class="relative min-w-0 lg:min-h-[34rem]">
                <EditorialBotanicalAccent
                    class="absolute start-0 bottom-0 z-10 hidden lg:block"
                />
                <EditorialPhoto
                    v-if="photo"
                    :photo="photo"
                    class="lg:absolute lg:inset-0 lg:h-full"
                    hero
                    sizes="100vw lg:55vw"
                    image-class="aspect-[5/4] sm:aspect-[3/2] lg:aspect-auto lg:h-full"
                    :caption="false"
                />
                <div
                    v-else
                    class="bg-sky-soft flex h-full min-h-72 flex-col items-center justify-center px-8 py-12"
                >
                    <slot name="visual" />
                </div>
                <div
                    v-if="note"
                    class="absolute end-5 bottom-6 hidden max-w-44 sm:block"
                >
                    <HandwrittenNote
                        :text="note[languageCode]"
                        tone="paper"
                        rotate="left"
                        class="bg-[#fffaf1] p-4 shadow-lg"
                    />
                </div>
            </div>
        </div>
        <p
            v-if="photo?.credit"
            class="text-muted mx-auto max-w-[80rem] px-5 pb-4 text-xs leading-6 sm:px-8"
        >
            {{ photo.caption[languageCode] }}
            <a
                :href="photo.credit.sourceUrl"
                target="_blank"
                rel="noreferrer"
                class="underline"
                ><bdi>{{ photo.credit.creator }}</bdi></a
            >
            ·
            <a
                :href="photo.credit.licenseUrl"
                target="_blank"
                rel="noreferrer"
                class="underline"
                ><bdi>{{ photo.credit.license }}</bdi></a
            >
        </p>
        <WavySectionDivider tone="sky" />
    </header>
</template>
