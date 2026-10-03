<script setup lang="ts">
import type { EditorialPhoto } from "~/data/editorialVisuals"
import type { LocalizedText } from "~/types/foldcare"
defineProps<{
    photos: EditorialPhoto[]
    title?: LocalizedText
    copy?: LocalizedText
}>()
const { languageCode } = useCurrentLanguage()
</script>
<template>
    <section class="bg-sky-soft paper-texture px-5 py-12 sm:px-8 sm:py-16">
        <div class="mx-auto max-w-[80rem]">
            <div v-if="title" class="mb-8 grid items-end gap-4 md:grid-cols-2">
                <h2 class="text-ink text-3xl sm:text-4xl">
                    {{ title[languageCode] }}
                </h2>
                <p v-if="copy" class="text-muted max-w-xl leading-7">
                    {{ copy[languageCode] }}
                </p>
            </div>
            <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <EditorialPhoto
                    v-for="(photo, index) in photos"
                    :key="photo.src"
                    :photo="photo"
                    frame
                    :class="index % 2 ? 'sm:rotate-2' : 'sm:-rotate-2'"
                />
            </div>
            <slot />
        </div>
    </section>
</template>
