<script setup lang="ts">
import type { HealthSection } from "~/types/foldcare"
import { textForLanguage } from "~/data/siteText"

const props = defineProps<{ section: HealthSection; sectionId?: string }>()
const { languageCode } = useCurrentLanguage()

const heading = computed(() =>
    textForLanguage(props.section.heading, languageCode.value)
)
const paragraphs = computed(
    () =>
        props.section.paragraphs[languageCode.value] ??
        props.section.paragraphs.en
)
const bullets = computed(
    () =>
        props.section.bullets?.[languageCode.value] ??
        props.section.bullets?.en ??
        []
)

const toneClasses = computed(() => {
    const tone = props.section.tone ?? "plain"
    return {
        plain: "border-transparent bg-transparent px-0",
        lilac: "border-lilac/15 bg-lilac-soft",
        sage: "border-sage/15 bg-sage-soft",
        peach: "border-peach/15 bg-peach-soft",
        sky: "border-sky/15 bg-sky-soft",
        warning: "border-danger/25 bg-danger-soft"
    }[tone]
})
</script>

<template>
    <section
        :id="sectionId"
        class="scroll-mt-28 border p-0 sm:p-0"
        :class="[
            toneClasses,
            section.tone && section.tone !== 'plain' ? 'p-6 sm:p-8' : ''
        ]"
    >
        <h2 class="font-editorial text-ink text-3xl tracking-tight">
            {{ heading }}
        </h2>
        <div class="text-muted mt-4 space-y-4 text-[1.02rem] leading-8">
            <p v-for="paragraph in paragraphs" :key="paragraph">
                {{ paragraph }}
            </p>
        </div>
        <ul
            v-if="bullets.length"
            class="text-muted mt-5 grid gap-3 sm:grid-cols-2"
        >
            <li
                v-for="bullet in bullets"
                :key="bullet"
                class="flex gap-3 leading-7"
            >
                <span class="text-peach mt-1" aria-hidden="true">●</span>
                <span>{{ bullet }}</span>
            </li>
        </ul>
    </section>
</template>
