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

    function userPrefersReducedMotion(): boolean {
        return (
            import.meta.client &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        )
    }

    async function switchTheme() {
        const nextTheme: ThemeName =
            currentTheme.value === "dark" ? "light" : "dark"

        if (import.meta.server || userPrefersReducedMotion()) {
            saveThemePreference(nextTheme)
            return
        }

        if (isThemeTransitionRunning.value) return

        transitionDirection.value =
            nextTheme === "light" ? "to-light" : "to-dark"
        await new Promise((resolve) => window.setTimeout(resolve, 260))
        saveThemePreference(nextTheme)
        await new Promise((resolve) => window.setTimeout(resolve, 720))
        transitionDirection.value = null
    }

    return {
        currentTheme,
        transitionDirection: readonly(transitionDirection),
        isThemeTransitionRunning,
        switchTheme
    }
}
