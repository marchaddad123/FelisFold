<script setup lang="ts">
import type { HealthTopic } from "~/types/foldcare"
import { foodPhoto, lotusPhoto } from "~/data/editorialVisuals"
defineProps<{ guide: HealthTopic }>()
</script>
<template>
    <section class="bg-sky-soft px-5 py-10 sm:px-8 sm:py-12">
        <div class="mx-auto grid max-w-[80rem] gap-8 lg:grid-cols-2">
            <div>
                <HealthArticleSection
                    :section="guide.sections[0]!"
                    section-id="guide-section-1"
                /><EditorialPhoto
                    :photo="foodPhoto('wet-food')"
                    image-class="mt-6 aspect-[16/7] rounded-xl"
                />
            </div>
            <div>
                <HealthArticleSection
                    :section="guide.sections[1]!"
                    section-id="guide-section-2"
                /><FoodLabelVisual class="mt-6" />
            </div>
        </div>
    </section>
    <FoodExampleSection />
    <section class="bg-cream px-5 py-10 sm:px-8 sm:py-12">
        <div class="mx-auto max-w-[80rem]">
            <div class="mb-8 max-w-4xl">
                <HealthArticleSection
                    :section="guide.sections[2]!"
                    section-id="guide-section-3"
                />
            </div>
            <FoodComparisonSection />
        </div>
    </section>
    <section class="bg-sky-soft px-5 py-10 sm:px-8 sm:py-12">
        <div class="mx-auto grid max-w-[80rem] gap-8 lg:grid-cols-2">
            <div>
                <EditorialPhoto
                    :photo="foodPhoto('kitchen-scale')"
                    image-class="aspect-[16/7] rounded-xl"
                /><HealthArticleSection
                    :section="guide.sections[3]!"
                    section-id="guide-section-4"
                    class="mt-7"
                />
            </div>
            <div>
                <EditorialPhoto
                    :photo="lotusPhoto('lotus-grooming')"
                    image-class="aspect-[16/7] rounded-xl"
                /><HealthArticleSection
                    :section="guide.sections[4]!"
                    section-id="guide-section-5"
                    class="mt-7"
                />
            </div>
        </div>
    </section>
    <section class="bg-peach-soft px-5 py-10 sm:px-8 sm:py-12">
        <div
            class="mx-auto grid max-w-[80rem] gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
        >
            <HealthArticleSection
                :section="guide.sections[5]!"
                section-id="guide-section-6"
            /><EditorialPhoto
                :photo="foodPhoto('water')"
                image-class="aspect-[16/10] rounded-[2rem]"
            />
        </div>
    </section>
</template>
