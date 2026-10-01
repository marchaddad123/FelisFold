<script setup lang="ts">
import type { ReadyLotusMediaItem } from "~/types/foldcare"

defineProps<{
    eyebrow: string
    title: string
    beforeLabel: string
    beforeCopy: string
    beforeItems: string[]
    nowLabel: string
    nowCopy: string
    nowItems: string[]
    beforePhoto: ReadyLotusMediaItem
    nowPhoto: ReadyLotusMediaItem
}>()
const { languageCode } = useCurrentLanguage()
</script>

<template>
    <section class="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <div>
            <p class="text-peach text-xs font-bold tracking-[0.18em] uppercase">
                {{ eyebrow }}
            </p>
            <h2
                class="font-editorial text-ink mt-2 text-4xl leading-tight sm:text-5xl"
            >
                {{ title }}
            </h2>
        </div>
        <div class="grid gap-5 md:grid-cols-2">
            <article
                v-for="side in [
                    {
                        label: beforeLabel,
                        copy: beforeCopy,
                        items: beforeItems,
                        photo: beforePhoto
                    },
                    {
                        label: nowLabel,
                        copy: nowCopy,
                        items: nowItems,
                        photo: nowPhoto
                    }
                ]"
                :key="side.label"
                class="border-border bg-paper overflow-hidden border"
            >
                <NuxtImg
                    :src="side.photo.sourcePath"
                    :alt="side.photo.altText[languageCode]"
                    :width="side.photo.width"
                    :height="side.photo.height"
                    sizes="100vw md:50vw lg:420px"
                    format="webp"
                    :quality="84"
                    loading="lazy"
                    decoding="async"
                    placeholder
                    class="aspect-[4/3] w-full object-cover"
                    :style="{
                        objectPosition: side.photo.desktopObjectPosition
                    }"
                />
                <div class="p-5">
                    <h3 class="font-editorial text-ink text-2xl">
                        {{ side.label }}
                    </h3>
                    <p class="text-muted mt-2 text-sm leading-6">
                        {{ side.copy }}
                    </p>
                    <ul class="text-muted mt-4 space-y-2 text-sm">
                        <li
                            v-for="item in side.items"
                            :key="item"
                            class="flex gap-2"
                        >
                            <span class="text-peach" aria-hidden="true">●</span
                            ><span>{{ item }}</span>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
    </section>
</template>
