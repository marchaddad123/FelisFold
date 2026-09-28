<script setup lang="ts">
withDefaults(
    defineProps<{
        eyebrow?: string
        title: string
        copy?: string
        align?: "left" | "center"
    }>(),
    {
        eyebrow: "",
        copy: "",
        align: "left"
    }
)
</script>

<template>
    <div
        :class="
            align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
        "
    >
        <p
            v-if="eyebrow"
            class="text-lilac mb-3 text-sm font-semibold tracking-[0.18em] uppercase"
        >
            {{ eyebrow }}
        </p>
        <h2
            class="text-ink text-3xl font-semibold tracking-[-0.03em] sm:text-4xl"
        >
            {{ title }}
        </h2>
        <p
            v-if="copy"
            class="text-muted mt-4 text-base leading-7 sm:text-lg sm:leading-8"
        >
            {{ copy }}
        </p>
    </div>
</template>
