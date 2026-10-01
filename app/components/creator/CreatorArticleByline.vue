<script setup lang="ts">
import { creatorProfile } from "~/data/creatorProfile"

const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()

const label = computed(() => {
    if (languageCode.value === "ar") return "إعداد وتحرير"
    if (languageCode.value === "fr") return "Préparé et édité par"
    if (languageCode.value === "zh") return "整理与编辑"
    return "Researched and edited by"
})
</script>

<template>
    <div
        class="border-border mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 border-y py-4 text-sm"
    >
        <span class="text-muted">{{ label }}</span>
        <NuxtLink
            :to="localizedPath('/about')"
            rel="author"
            class="text-ink font-bold underline decoration-current/30 underline-offset-4 hover:decoration-current"
        >
            {{ creatorProfile.name }}
        </NuxtLink>
        <span class="text-muted"
            >· {{ creatorProfile.role[languageCode] }}</span
        >
    </div>
</template>
