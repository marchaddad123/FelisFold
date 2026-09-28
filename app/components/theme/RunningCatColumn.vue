<script setup lang="ts">
withDefaults(
    defineProps<{
        catColor?: "white" | "black"
    }>(),
    {
        catColor: "white"
    }
)

const catCount = 10
const horizontalOffsets = [0, -7, 5, -3, 7, 0, -6, 4, -2, 6]
</script>

<template>
    <div class="theme-cat-column" aria-hidden="true">
        <div
            v-for="catNumber in catCount"
            :key="catNumber"
            class="theme-running-cat"
            :style="{
                '--cat-delay': `${catNumber * -45}ms`,
                '--cat-offset': `${horizontalOffsets[catNumber - 1]}px`
            }"
        >
            <RunningCatIcon :cat-color="catColor" />
        </div>
    </div>
</template>
