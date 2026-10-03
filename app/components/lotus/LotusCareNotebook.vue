<script setup lang="ts">
import type { LotusExperienceContent } from "~/types/foldcare"
defineProps<{
    eyebrow: string
    heading: string
    copy: string
    observationsTitle: string
    observations: string[]
    sections: LotusExperienceContent[]
}>()
</script>

<template>
    <div>
        <AppSectionHeading :eyebrow="eyebrow" :title="heading" :copy="copy" />
        <div
            data-testid="lotus-care-notebook"
            class="mt-8 columns-1 gap-6 md:columns-2 xl:columns-3"
        >
            <LotusObservationCard
                :title="observationsTitle"
                :items="observations"
                :heading-level="3"
                class="mb-6 break-inside-avoid"
            />
            <LotusExperiencePanel
                v-for="section in sections"
                :key="section.title.en"
                :content="section"
                :heading-level="3"
                class="mb-6 break-inside-avoid rounded-2xl"
            />
        </div>
    </div>
</template>
