<script setup lang="ts">
const props = defineProps<{
    error: { statusCode?: number; statusMessage?: string }
}>()

function goHome() {
    clearError({ redirect: "/en" })
}
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
            <button
                type="button"
                class="bg-ink text-surface-inverse mt-7 min-h-12 rounded-full px-6 font-medium"
                @click="goHome"
            >
                Back to FelisFold
            </button>
        </div>
    </div>
</template>
