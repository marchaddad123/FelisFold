<script setup lang="ts">
import { loadCatSequence } from "~/utils/catSequences"
function warmCatSequence() {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
        void loadCatSequence("walk").catch(() => undefined)
}
const { currentTheme, isThemeTransitionRunning, switchTheme } =
    useThemeTransition()
const { languageCode } = useCurrentLanguage()

const buttonLabel = computed(() => {
    const switchingTo = currentTheme.value === "dark" ? "light" : "dark"
    if (languageCode.value === "ar")
        return switchingTo === "light"
            ? "انتقل إلى الوضع الفاتح"
            : "انتقل إلى الوضع الداكن"
    if (languageCode.value === "fr")
        return switchingTo === "light"
            ? "Passer au mode clair"
            : "Passer au mode sombre"
    if (languageCode.value === "zh")
        return switchingTo === "light" ? "切换到浅色模式" : "切换到深色模式"
    return switchingTo === "light"
        ? "Switch to light mode"
        : "Switch to dark mode"
})
</script>

<template>
    <button
        type="button"
        class="group border-border bg-paper text-ink hover:border-lilac/30 relative grid size-11 place-items-center overflow-hidden rounded-full border shadow-sm transition hover:-translate-y-0.5 disabled:opacity-60"
        :aria-label="buttonLabel"
        :title="buttonLabel"
        :disabled="isThemeTransitionRunning"
        @pointerenter="warmCatSequence"
        @focus="warmCatSequence"
        @click="switchTheme"
    >
        <span
            class="absolute inset-1 rounded-full bg-gradient-to-br from-amber-100 to-sky-100 transition duration-300 dark:from-indigo-950 dark:to-slate-950"
            aria-hidden="true"
        />
        <span
            class="relative text-lg transition-transform duration-300 group-hover:rotate-12"
            aria-hidden="true"
        >
            {{ currentTheme === "dark" ? "☾" : "☀" }}
        </span>
    </button>
</template>
