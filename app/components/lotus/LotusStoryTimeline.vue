<script setup lang="ts">
import type { LotusTimelineItem } from "~/types/foldcare"

defineProps<{ heading: string; copy: string; items: LotusTimelineItem[] }>()
const { languageCode } = useCurrentLanguage()
</script>

<template>
    <section>
        <AppSectionHeading :title="heading" :copy="copy" />
        <ol
            data-testid="lotus-story-timeline"
            class="border-peach/40 mt-8 grid border-t md:grid-cols-2 xl:grid-cols-5"
        >
            <li
                v-for="item in items"
                :key="item.id"
                class="border-border relative border-e border-b px-5 pt-7 pb-6"
            >
                <span
                    class="bg-peach ring-cream absolute start-5 -top-1.5 size-3 rounded-full ring-4"
                />
                <p class="text-peach text-sm font-bold">
                    {{ item.dateLabel[languageCode] }}
                </p>
                <h3 class="font-editorial text-ink mt-2 text-xl leading-tight">
                    {{ item.title[languageCode] }}
                </h3>
                <p class="text-muted mt-2 text-sm leading-6">
                    {{ item.copy[languageCode] }}
                </p>
            </li>
        </ol>
    </section>
</template>
