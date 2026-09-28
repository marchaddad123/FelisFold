<script setup lang="ts">
withDefaults(
    defineProps<{
        catColor?: "white" | "black"
    }>(),
    {
        catColor: "white"
    }
)

const catCount = 8
</script>

<template>
    <div
        class="theme-cat-row absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-end gap-3 px-3 sm:gap-6 sm:px-6"
        aria-hidden="true"
    >
        <div
            v-for="catNumber in catCount"
            :key="catNumber"
            class="theme-running-cat shrink-0"
            :style="{
                '--cat-delay': `${catNumber * 55}ms`,
                '--cat-bob': `${catNumber % 2 === 0 ? 1 : -1}`
            }"
        >
            <RunningCatIcon
                :cat-color="catColor"
                :size="catNumber % 3 === 0 ? 'sm' : 'md'"
            />
        </div>
    </div>
</template>
