<script setup lang="ts">
import type { HealthSource } from "~/types/foldcare"

const props = defineProps<{
    sources: HealthSource[]
    reviewedOn?: string
}>()

const { languageCode } = useCurrentLanguage()

const heading = computed(() => {
    if (languageCode.value === "ar") return "المصادر"
    if (languageCode.value === "fr") return "Sources"
    if (languageCode.value === "zh") return "资料来源"
    return "Sources for this page"
})

const reviewedLabel = computed(() => {
    if (languageCode.value === "ar") return "آخر مراجعة"
    if (languageCode.value === "fr") return "Dernière révision"
    if (languageCode.value === "zh") return "最后审核"
    return "Last reviewed"
})
</script>

<template>
    <aside class="border-border bg-paper paper-texture border p-6 sm:p-8">
        <div class="flex flex-wrap items-end justify-between gap-3">
            <h2 class="font-editorial text-ink text-2xl">{{ heading }}</h2>
            <p v-if="reviewedOn" class="text-muted text-xs">
                {{ reviewedLabel }}: {{ reviewedOn }}
            </p>
        </div>
        <ul class="mt-5 space-y-4">
            <li
                v-for="source in props.sources"
                :key="source.url"
                class="border-border border-t pt-4 first:border-0 first:pt-0"
            >
                <a
                    :href="source.url"
                    target="_blank"
                    rel="noreferrer"
                    class="text-lilac font-medium underline-offset-4 hover:underline"
                >
                    {{ source.name }}
                </a>
                <dl
                    class="text-muted mt-2 grid gap-x-4 gap-y-1 text-xs sm:grid-cols-3"
                >
                    <div>
                        <dt class="sr-only">Source type</dt>
                        <dd>{{ source.type ?? "Veterinary reference" }}</dd>
                    </div>
                    <div>
                        <dt class="sr-only">Publication</dt>
                        <dd>{{ source.organization }}</dd>
                    </div>
                    <div>
                        <dt class="sr-only">Year</dt>
                        <dd>{{ source.year ?? "Current online reference" }}</dd>
                    </div>
                </dl>
            </li>
        </ul>
    </aside>
</template>
