<script setup lang="ts">
const props = defineProps<{
    error: { statusCode?: number; statusMessage?: string }
}>()
</script>

<template>
    <div
        class="bg-cream grid min-h-screen place-items-center px-4 py-12 text-center"
    >
        <div class="max-w-lg">
            <FoldCatMascot size="lg" />
            <p
                class="text-lilac mt-5 text-sm font-semibold tracking-[0.18em] uppercase"
            >
                {{ props.error.statusCode ?? 404 }}
            </p>
            <h1 class="text-ink mt-3 text-4xl font-semibold tracking-tight">
                This cat wandered off the page.
            </h1>
            <p class="text-muted mt-4 leading-7">
                The page does not exist, moved, or could not load correctly.
            </p>
            <a
                href="/en"
                class="bg-ink text-surface-inverse mt-7 inline-flex min-h-12 items-center rounded-full px-6 font-medium"
            >
                Back to FelisFold
            </a>
        </div>
    </div>
</template>
