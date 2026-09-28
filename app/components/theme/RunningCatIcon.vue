<script setup lang="ts">
withDefaults(
    defineProps<{
        catColor?: "white" | "black"
        size?: "sm" | "md"
    }>(),
    {
        catColor: "white",
        size: "md"
    }
)
</script>

<template>
    <svg
        viewBox="0 0 120 72"
        :class="[
            size === 'sm' ? 'h-9 w-15' : 'h-12 w-20',
            catColor === 'white' ? 'text-white' : 'text-[#17151a]'
        ]"
        aria-hidden="true"
    >
        <path
            fill="currentColor"
            :stroke="catColor === 'black' ? '#5e5665' : '#d9d1dc'"
            stroke-width="1.5"
            d="M22 41c2-10 10-18 22-20 8-2 17 0 24 4 8 4 15 4 22 1 6-3 9-1 10 4 1 6-3 13-11 16-8 3-16 1-21-5-3 4-8 7-13 9 3 3 5 8 4 12-1 5-5 8-9 8-5 0-8-3-9-8-1-4 0-8 2-12-6 2-12 2-18 0-3 7-2 13 1 19 3 6 2 11-2 14-4 4-11 5-16 2-6-2-9-9-8-15 1-6 5-10 10-12-8-3-13-9-13-16 0-5 4-8 8-9-1 7 2 12 8 15 2-11 7-18 15-22l-4-10 10 4 7-7 4 10c9 1 17 7 20 15z"
        />
        <circle
            cx="50"
            cy="24"
            r="2"
            :fill="catColor === 'white' ? '#343039' : '#f7f2ea'"
        />
    </svg>
</template>
