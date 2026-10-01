<script setup lang="ts">
import type { HealthSource } from "~/types/foldcare"
import { editorialLabels, translated } from "~/data/editorialHelpers"

const props = defineProps<{
    sources: HealthSource[]
    reviewedOn?: string
}>()

const { languageCode } = useCurrentLanguage()
const breedHistoryLabel = translated(
    "Breed history",
    "تاريخ السلالة",
    "Histoire de la race",
    "品种历史"
)

const heading = computed(() => {
    if (languageCode.value === "ar") return "المصادر"
    if (languageCode.value === "fr") return "Sources"
    if (languageCode.value === "zh") return "资料来源"
    return "Sources for this page"
})
</script>

<template>
    <aside class="border-border bg-paper paper-texture border p-6 sm:p-8">
        <div class="flex flex-wrap items-end justify-between gap-3">
            <h2 class="font-editorial text-ink text-2xl">{{ heading }}</h2>
            <p v-if="reviewedOn" class="text-muted text-xs">
                {{ editorialLabels.updated[languageCode] }}: {{ reviewedOn }}
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
                    <span lang="en" dir="ltr">{{ source.name }}</span>
                </a>
                <dl
                    class="text-muted mt-2 grid gap-x-4 gap-y-1 text-xs sm:grid-cols-3"
                >
                    <div>
                        <dt class="sr-only">
                            {{ editorialLabels.sourceType[languageCode] }}
                        </dt>
                        <dd>
                            {{
                                (source.type === "breed-history"
                                    ? breedHistoryLabel
                                    : source.type === "research"
                                      ? editorialLabels.researchPaper
                                      : editorialLabels.veterinaryReference)[
                                    languageCode
                                ]
                            }}
                        </dd>
                    </div>
                    <div>
                        <dt class="sr-only">
                            {{ editorialLabels.publication[languageCode] }}
                        </dt>
                        <dd lang="en" dir="ltr">{{ source.organization }}</dd>
                    </div>
                    <div>
                        <dt class="sr-only">
                            {{ editorialLabels.year[languageCode] }}
                        </dt>
                        <dd>
                            {{
                                source.year ??
                                editorialLabels.online[languageCode]
                            }}
                        </dd>
                    </div>
                </dl>
            </li>
        </ul>
    </aside>
</template>
