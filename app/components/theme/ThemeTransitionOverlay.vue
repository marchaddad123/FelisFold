<script setup lang="ts">
import { themeCatDuration } from "~/data/catSequences"
const { transitionDirection, completeThemeTransition } = useThemeTransition()

let finishTimer: ReturnType<typeof setTimeout> | undefined
let motionPreference: MediaQueryList | undefined
function stopForReducedMotion() {
    if (motionPreference?.matches) completeThemeTransition()
}
function stopForHiddenPage() {
    if (document.hidden) completeThemeTransition()
}
watch(transitionDirection, (direction) => {
    clearTimeout(finishTimer)
    if (direction)
        finishTimer = setTimeout(
            completeThemeTransition,
            (themeCatDuration + 0.3) * 1000
        )
})
onMounted(() => {
    motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)")
    motionPreference.addEventListener("change", stopForReducedMotion)
    document.addEventListener("visibilitychange", stopForHiddenPage)
})
onBeforeUnmount(() => {
    clearTimeout(finishTimer)
    motionPreference?.removeEventListener("change", stopForReducedMotion)
    document.removeEventListener("visibilitychange", stopForHiddenPage)
    completeThemeTransition()
})

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
        :style="{ '--theme-cat-duration': `${themeCatDuration * 1000}ms` }"
    >
        <div
            class="theme-wipe absolute inset-0 opacity-10"
            :class="
                isSwitchingToLight
                    ? 'bg-[#f7efe3]'
                    : 'theme-wipe-dark bg-[#0d2520]'
            "
            @animationend="completeThemeTransition"
        />
        <RunningCatColumn />
    </div>
</template>
