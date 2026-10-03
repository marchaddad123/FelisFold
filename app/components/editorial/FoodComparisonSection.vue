<script setup lang="ts">
import { foodPhoto } from "~/data/editorialVisuals"
import { translated as t } from "~/data/editorialHelpers"
const { languageCode } = useCurrentLanguage()
const formats = [
    { id: "wet-food", title: t("Wet", "رطب", "Humide", "湿粮") },
    { id: "dry-food", title: t("Dry", "جاف", "Sec", "干粮") },
    { id: "mixed-feeding", title: t("Mixed", "مختلط", "Mixte", "混合") }
]
</script>
<template>
    <div class="grid gap-5 sm:grid-cols-3">
        <div v-for="format in formats" :key="format.id" class="min-w-0">
            <h3 class="text-peach mb-3 text-2xl">
                {{ format.title[languageCode] }}
            </h3>
            <EditorialPhoto
                :photo="foodPhoto(format.id)"
                image-class="aspect-square rounded-[1.5rem]"
                sizes="100vw sm:30vw lg:380px"
            />
        </div>
    </div>
</template>
