<script setup lang="ts">
import type { HealthTopic } from "~/types/foldcare"
import { textForLanguage } from "~/data/siteText"

const props = defineProps<{ topic: HealthTopic }>()
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()

const title = computed(() =>
    textForLanguage(props.topic.title, languageCode.value)
)
const summary = computed(() =>
    textForLanguage(props.topic.summary, languageCode.value)
)
const tag = computed(() =>
    props.topic.tag ? textForLanguage(props.topic.tag, languageCode.value) : ""
)
</script>

<template>
    <NuxtLink
        :to="localizedPath(`/health/${topic.slug}`)"
        class="group border-border bg-paper flex h-full min-h-60 flex-col rounded-[2rem] border p-6 shadow-[0_14px_40px_rgb(65_54_69/0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgb(65_54_69/0.10)]"
    >
        <div class="flex items-start justify-between gap-4">
            <span class="text-3xl" aria-hidden="true">{{ topic.icon }}</span>
            <span
                v-if="tag"
                class="bg-lilac-soft text-lilac rounded-full px-3 py-1 text-xs font-semibold"
                >{{ tag }}</span
            >
        </div>
        <h3 class="text-ink mt-6 text-xl font-semibold tracking-tight">
            {{ title }}
        </h3>
        <p class="text-muted mt-3 flex-1 leading-7">{{ summary }}</p>
        <span
            class="text-lilac mt-6 inline-flex items-center gap-2 text-sm font-semibold"
        >
            {{
                languageCode === "ar"
                    ? "اقرأ الدليل"
                    : languageCode === "fr"
                      ? "Lire le guide"
                      : languageCode === "zh"
                        ? "阅读指南"
                        : "Read guide"
            }}
            <span
                class="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                aria-hidden="true"
                >→</span
            >
        </span>
    </NuxtLink>
</template>
