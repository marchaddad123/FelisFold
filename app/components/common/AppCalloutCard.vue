<script setup lang="ts">
withDefaults(
    defineProps<{
        title: string
        copy?: string
        icon?: string
        tone?: "paper" | "lilac" | "sage" | "peach" | "sky" | "warning"
    }>(),
    {
        copy: "",
        icon: "",
        tone: "paper"
    }
)

const toneClasses = {
    paper: "border-border bg-paper",
    lilac: "border-lilac/15 bg-lilac-soft",
    sage: "border-sage/15 bg-sage-soft",
    peach: "border-peach/15 bg-peach-soft",
    sky: "border-sky/20 bg-sky-soft",
    warning: "border-danger/25 bg-danger-soft"
}
</script>

<template>
    <article
        class="rounded-[1.8rem] border p-5 sm:p-6"
        :class="toneClasses[tone]"
    >
        <div v-if="icon" class="mb-4 text-2xl" aria-hidden="true">
            {{ icon }}
        </div>
        <h3 class="text-ink text-xl font-semibold tracking-tight">
            {{ title }}
        </h3>
        <p v-if="copy" class="text-muted mt-3 leading-7">{{ copy }}</p>
        <div v-if="$slots.default" class="mt-4">
            <slot />
        </div>
    </article>
</template>
