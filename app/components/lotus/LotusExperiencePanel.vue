<script setup lang="ts">
import type { LotusExperienceContent } from "~/types/foldcare"

const props = withDefaults(
    defineProps<{ content: LotusExperienceContent; headingLevel?: 2 | 3 }>(),
    { headingLevel: 2 }
)
const { languageCode } = useCurrentLanguage()

const localizedContent = computed(() => ({
    eyebrow: props.content.eyebrow[languageCode.value],
    title: props.content.title[languageCode.value],
    copy: props.content.copy[languageCode.value],
    bullets: props.content.bullets?.[languageCode.value] ?? [],
    note: props.content.note?.[languageCode.value]
}))

const toneClasses = computed(() => {
    const tone = props.content.tone ?? "plain"
    return {
        plain: "border-border bg-paper",
        lilac: "border-lilac/40 bg-lilac-soft",
        sage: "border-sage/40 bg-sage-soft",
        peach: "border-peach/40 bg-peach-soft",
        sky: "border-sky/40 bg-sky-soft",
        warning: "border-peach bg-peach-soft"
    }[tone]
})
</script>

<template>
    <aside class="border-s-4 px-5 py-6 sm:px-7" :class="toneClasses">
        <p class="text-ink text-xs font-bold tracking-[0.18em] uppercase">
            {{ localizedContent.eyebrow }}
        </p>
        <component
            :is="`h${headingLevel}`"
            class="font-editorial text-ink mt-2 text-3xl leading-tight"
        >
            {{ localizedContent.title }}
        </component>
        <p class="text-muted mt-3 leading-7">{{ localizedContent.copy }}</p>
        <ul
            v-if="localizedContent.bullets.length"
            class="text-muted mt-5 space-y-3"
        >
            <li
                v-for="bullet in localizedContent.bullets"
                :key="bullet"
                class="flex gap-3 leading-6"
            >
                <span class="text-peach mt-0.5 shrink-0" aria-hidden="true"
                    >●</span
                >
                <span>{{ bullet }}</span>
            </li>
        </ul>
        <p
            v-if="localizedContent.note"
            class="border-border text-ink mt-5 border-t pt-4 text-sm leading-6 font-semibold"
        >
            {{ localizedContent.note }}
        </p>
    </aside>
</template>
