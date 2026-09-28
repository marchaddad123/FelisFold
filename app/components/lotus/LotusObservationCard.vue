<script setup lang="ts">
defineProps<{
    title: string
    items: string[]
}>()
</script>

<template>
    <article class="border-border bg-paper rounded-[2rem] border p-6 sm:p-8">
        <h2 class="text-ink text-2xl font-semibold">{{ title }}</h2>
        <ul class="mt-5 space-y-4">
            <li
                v-for="item in items"
                :key="item"
                class="text-muted flex gap-3 leading-7"
            >
                <span class="text-lilac mt-1" aria-hidden="true">●</span>
                <span>{{ item }}</span>
            </li>
        </ul>
    </article>
</template>
