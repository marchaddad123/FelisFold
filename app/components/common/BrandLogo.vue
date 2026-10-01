<script setup lang="ts">
import { translated } from "~/data/editorialHelpers"
const { languageCode } = useCurrentLanguage()
const tagline = translated(
    "Born from Lotus. For every Fold.",
    "من قصة لوتس، لكل قط مطوي الأذن.",
    "Né de Lotus. Pour chaque Fold.",
    "源于 Lotus，关爱每只折耳猫。"
)
withDefaults(
    defineProps<{
        compact?: boolean
        inverse?: boolean
        size?: "default" | "hero"
    }>(),
    {
        compact: false,
        inverse: false,
        size: "default"
    }
)
</script>

<template>
    <span
        class="inline-flex items-center"
        :class="size === 'hero' ? 'gap-4' : 'gap-2.5'"
    >
        <span class="min-w-0">
            <span
                class="font-editorial block leading-none tracking-[-0.06em]"
                :class="[
                    inverse ? 'text-[#fffaf1]' : 'text-ink',
                    size === 'hero' ? 'text-5xl sm:text-6xl' : 'text-[1.65rem]'
                ]"
                >FelisFold</span
            >
            <span
                v-if="!compact"
                class="font-semibold tracking-[0.08em]"
                :class="[
                    inverse ? 'text-[#d9e5df]' : 'text-muted',
                    size === 'hero'
                        ? 'mt-2 block text-sm sm:text-base'
                        : 'mt-1 hidden text-[0.58rem] sm:block'
                ]"
                >{{ tagline[languageCode] }}</span
            >
        </span>
        <svg
            viewBox="0 0 44 52"
            class="text-peach shrink-0"
            :class="size === 'hero' ? 'h-16 w-14' : 'h-10 w-9'"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M8 17 5 6l11 5a18 18 0 0 1 12 0L39 6l-3 13c4 13-1 25-13 28M9 18C4 29 8 40 18 44"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M14 25c1.3 1.2 3 1.2 4.2 0m7.8 0c1.3 1.2 3 1.2 4.2 0m-10 6c1.7 2 4 2 5.8 0"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
            />
        </svg>
    </span>
</template>
