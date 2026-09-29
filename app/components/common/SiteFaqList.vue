<script setup lang="ts">
defineProps<{ items: Array<{ question: string; answer: string }> }>()
</script>

<template>
    <div class="divide-border border-border divide-y border-y">
        <details v-for="item in items" :key="item.question" class="group py-1">
            <summary
                class="text-ink flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 font-semibold"
            >
                <span>{{ item.question }}</span
                ><span
                    class="text-peach text-xl transition group-open:rotate-45"
                    aria-hidden="true"
                    >+</span
                >
            </summary>
            <p class="text-muted max-w-3xl pb-5 leading-7">{{ item.answer }}</p>
        </details>
    </div>
</template>
