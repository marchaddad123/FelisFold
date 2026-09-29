<script setup lang="ts">
withDefaults(
    defineProps<{
        text: string
        align?: "left" | "right" | "center"
        rotate?: "left" | "right" | "none"
        tone?: "theme" | "paper" | "light"
    }>(),
    { align: "center", rotate: "none", tone: "theme" }
)
</script>

<template>
    <p
        class="font-handwritten inline-block max-w-48 text-sm leading-6 sm:text-base"
        :class="[
            tone === 'paper'
                ? 'text-[#18231f]'
                : tone === 'light'
                  ? 'text-white'
                  : 'text-ink',
            align === 'left'
                ? 'text-left'
                : align === 'right'
                  ? 'text-right'
                  : 'text-center',
            rotate === 'left'
                ? '-rotate-3'
                : rotate === 'right'
                  ? 'rotate-3'
                  : ''
        ]"
    >
        {{ text }}
        <span
            :class="tone === 'paper' ? 'text-[#be4825]' : 'text-peach'"
            aria-hidden="true"
            >♡</span
        >
    </p>
</template>
