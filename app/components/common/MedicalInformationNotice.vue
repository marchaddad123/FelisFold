<script setup lang="ts">
import { siteText, textForLanguage } from "~/data/siteText"

const { languageCode } = useCurrentLanguage()
const message = computed(() =>
    textForLanguage(siteText.common.medicalNote, languageCode.value)
)
</script>

<template>
    <aside
        class="border-border bg-paper/80 text-muted flex gap-3 rounded-2xl border p-4 text-sm leading-6"
        role="note"
    >
        <span aria-hidden="true">🩺</span>
        <p>{{ message }}</p>
    </aside>
</template>
