<script setup lang="ts">
import type { ReadyLotusMediaItem } from "~/types/foldcare"

defineProps<{ items: ReadyLotusMediaItem[] }>()
const { languageCode } = useCurrentLanguage()
</script>

<template>
    <div class="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        <figure
            v-for="(item, index) in items"
            :key="item.id"
            class="border-border bg-paper flex flex-col overflow-hidden border"
            :class="index === 0 ? 'col-span-2 lg:row-span-2' : ''"
        >
            <NuxtImg
                :src="item.sourcePath"
                :alt="item.altText[languageCode]"
                :width="item.width"
                :height="item.height"
                :sizes="index === 0 ? '100vw lg:50vw' : '50vw lg:25vw'"
                format="webp"
                :quality="82"
                loading="lazy"
                decoding="async"
                placeholder
                class="w-full object-cover"
                :class="
                    index === 0
                        ? 'aspect-[4/3] lg:aspect-auto lg:min-h-0 lg:flex-1'
                        : 'aspect-[4/3]'
                "
                :style="{ objectPosition: item.desktopObjectPosition }"
            />
            <figcaption class="p-4">
                <strong class="font-editorial text-ink block text-xl">{{
                    item.title[languageCode]
                }}</strong>
                <span class="text-muted mt-1 block text-sm leading-5">{{
                    item.caption[languageCode]
                }}</span>
            </figcaption>
        </figure>
    </div>
</template>
