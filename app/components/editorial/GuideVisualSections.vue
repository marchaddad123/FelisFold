<script setup lang="ts">
import type { HealthTopic } from "~/types/foldcare"
import { foldPhoto, lotusPhoto } from "~/data/editorialVisuals"
const props = defineProps<{
    guide: HealthTopic
    layout: "breed" | "mixes" | "mix-detail"
}>()
const sectionPlans = computed(() => {
    if (props.layout === "breed")
        return ["origin", "genetics", "ears", "research", "care", "growth"]
    if (props.layout === "mixes")
        return ["ears", "research", "care", "genetics"]
    if (props.guide.slug === "scottish-fold-siamese")
        return ["lotus", "ears", "care", "discussion"]
    if (props.guide.slug === "scottish-fold-highlander")
        return ["genetics", "ears", "care", "discussion"]
    if (props.guide.slug === "scottish-fold-american-curl")
        return ["research", "ears", "care", "discussion"]
    return ["research", "genetics", "care", "discussion"]
})
const photographFor = (plan: string) => {
    if (plan === "origin") return foldPhoto("fold-kitten-playing")
    if (plan === "growth") return foldPhoto("fold-on-sofa")
    if (plan === "lotus") return lotusPhoto("lotus-home")
    return undefined
}
</script>
<template>
    <div>
        <template
            v-for="(section, index) in guide.sections"
            :key="section.heading.en"
        >
            <section
                class="px-5 py-12 sm:px-8 sm:py-16"
                :class="
                    sectionPlans[index] === 'genetics'
                        ? 'dark-panel'
                        : index % 3 === 0
                          ? 'bg-sky-soft paper-texture'
                          : index % 3 === 2
                            ? 'bg-peach-soft paper-texture'
                            : 'bg-cream'
                "
            >
                <div
                    class="mx-auto grid max-w-[80rem] gap-8 lg:items-center lg:gap-14"
                    :class="
                        sectionPlans[index] === 'comparison'
                            ? ''
                            : 'lg:grid-cols-2'
                    "
                >
                    <div
                        class="min-w-0"
                        :class="
                            index % 2 && sectionPlans[index] !== 'comparison'
                                ? 'lg:order-2'
                                : ''
                        "
                    >
                        <p
                            class="text-peach mb-3 text-sm font-semibold"
                            aria-hidden="true"
                        >
                            {{ String(index + 1).padStart(2, "0") }} /
                            {{ String(guide.sections.length).padStart(2, "0") }}
                        </p>
                        <HealthArticleSection
                            :section="section"
                            :section-id="`guide-section-${index + 1}`"
                        />
                    </div>
                    <GeneticsExplainer
                        v-if="sectionPlans[index] === 'genetics'"
                    />
                    <EarShapeComparison
                        v-else-if="sectionPlans[index] === 'ears'"
                    />
                    <PracticalCareVisual
                        v-else-if="sectionPlans[index] === 'care'"
                    />
                    <VetPreparationVisual
                        v-else-if="sectionPlans[index] === 'discussion'"
                    />
                    <FoodComparisonSection
                        v-else-if="sectionPlans[index] === 'comparison'"
                    />
                    <EditorialPhoto
                        v-else-if="photographFor(sectionPlans[index] || '')"
                        :photo="photographFor(sectionPlans[index] || '')!"
                        :frame="
                            ['origin', 'lotus', 'growth'].includes(
                                sectionPlans[index] || ''
                            )
                        "
                        image-class="aspect-[4/3] rounded-sm"
                    />
                    <div v-else class="border-peach/30 border-s-4 ps-6 sm:ps-9">
                        <CatIllustration
                            :sleeping="sectionPlans[index] === 'research'"
                        /><slot :name="`visual-${index}`" />
                    </div>
                </div>
            </section>
            <slot :name="`after-${index}`" />
        </template>
    </div>
</template>
