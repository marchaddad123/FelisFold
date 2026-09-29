<script setup lang="ts">
const { transitionDirection, completeThemeTransition } = useThemeTransition()

const isVisible = computed(() => transitionDirection.value !== null)
const isSwitchingToLight = computed(
    () => transitionDirection.value === "to-light"
)
</script>

<template>
    <div
        v-if="isVisible"
        class="theme-transition-overlay pointer-events-none fixed inset-0 z-[120] overflow-hidden"
        aria-hidden="true"
    >
        <div
            class="theme-wipe absolute inset-0"
            :class="
                isSwitchingToLight
                    ? 'bg-[#f7efe3]'
                    : 'theme-wipe-dark bg-[#0d2520]'
            "
            @animationend="completeThemeTransition"
        />
        <RunningCatColumn :cat-color="isSwitchingToLight ? 'white' : 'black'" />
    </div>
</template>
