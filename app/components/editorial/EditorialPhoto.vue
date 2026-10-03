<script setup lang="ts">
import { photoModificationLabel } from "~/data/editorialVisuals"
import type { EditorialPhoto } from "~/data/editorialVisuals"
withDefaults(
    defineProps<{
        photo: EditorialPhoto
        frame?: boolean
        hero?: boolean
        sizes?: string
        imageClass?: string
        caption?: boolean
    }>(),
    {
        frame: false,
        hero: false,
        sizes: "100vw sm:50vw lg:600px",
        imageClass: "aspect-[4/3]",
        caption: true
    }
)
const { languageCode } = useCurrentLanguage()
</script>
<template>
    <figure
        class="min-w-0"
        :class="frame ? 'photo-paper bg-[#fffaf1] p-2 pb-4 text-[#18231f]' : ''"
    >
        <NuxtImg
            :src="photo.src"
            :alt="photo.alt[languageCode]"
            :width="photo.width"
            :height="photo.height"
            :sizes="sizes"
            format="webp"
            :quality="hero ? 86 : 80"
            :preload="hero"
            :fetchpriority="hero ? 'high' : 'auto'"
            :loading="hero ? 'eager' : 'lazy'"
            decoding="async"
            class="w-full object-cover"
            :class="imageClass"
            :style="{ objectPosition: photo.position || 'center' }"
        />
        <figcaption
            v-if="caption"
            class="mt-3 text-sm leading-6"
            :class="frame ? 'font-handwritten px-2 text-center' : 'text-muted'"
        >
            {{ photo.caption[languageCode] }}
            <span v-if="photo.credit" class="mt-1 block font-sans text-xs">
                <a
                    :href="photo.credit.sourceUrl"
                    target="_blank"
                    rel="noreferrer"
                    class="underline underline-offset-2"
                    ><bdi>{{ photo.credit.creator }}</bdi></a
                >
                ·
                <a
                    :href="photo.credit.licenseUrl"
                    target="_blank"
                    rel="noreferrer"
                    class="underline underline-offset-2"
                    ><bdi>{{ photo.credit.license }}</bdi></a
                >
                <span v-if="photo.credit.modified" class="block">{{
                    photoModificationLabel[languageCode]
                }}</span>
            </span>
        </figcaption>
    </figure>
</template>
