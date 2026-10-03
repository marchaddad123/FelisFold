import { loadCatSequence } from "~/utils/catSequences"
import type { ThemeName } from "~/types/foldcare"

export type ThemeTransitionDirection = "to-light" | "to-dark" | null

export function useThemeTransition() {
    const { currentTheme, saveThemePreference } = useThemePreference()
    const transitionDirection = useState<ThemeTransitionDirection>(
        "foldcare-theme-transition-direction",
        () => null
    )
    const isThemeTransitionRunning = computed(
        () => transitionDirection.value !== null
    )
    const transitionRequest = useState(
        "foldcare-theme-transition-request",
        () => 0
    )

    async function switchTheme() {
        if (isThemeTransitionRunning.value) return
        const request = ++transitionRequest.value
        const nextTheme: ThemeName =
            currentTheme.value === "dark" ? "light" : "dark"
        // Theme state never waits for decorative animation to finish.
        saveThemePreference(nextTheme)
        if (
            import.meta.server ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        )
            return
        try {
            await loadCatSequence("walk")
        } catch {
            return
        }
        if (
            request !== transitionRequest.value ||
            currentTheme.value !== nextTheme ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
            document.hidden
        )
            return
        transitionDirection.value =
            nextTheme === "light" ? "to-light" : "to-dark"
    }
    function completeThemeTransition() {
        transitionRequest.value++
        transitionDirection.value = null
    }
    return {
        currentTheme,
        transitionDirection: readonly(transitionDirection),
        isThemeTransitionRunning,
        completeThemeTransition,
        switchTheme
    }
}
