import type { ThemeName } from "~/types/foldcare"

export type ThemeTransitionDirection = "to-light" | "to-dark" | null

interface PageViewTransition {
    finished: Promise<void>
}

type DocumentWithViewTransitions = Document & {
    startViewTransition?: (
        updatePage: () => void | Promise<void>
    ) => PageViewTransition
}

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

        await nextTick()

        const pageDocument = document as DocumentWithViewTransitions
        if (!pageDocument.startViewTransition) return

        document.documentElement.classList.add("theme-view-transition-active")

        try {
            const pageTransition = pageDocument.startViewTransition(
                async () => {
                    saveThemePreference(nextTheme)
                    await nextTick()
                }
            )
            await pageTransition.finished
        } finally {
            document.documentElement.classList.remove(
                "theme-view-transition-active"
            )

            if (currentTheme.value === nextTheme) {
                transitionDirection.value = null
            }
        }
    }

    function completeThemeTransition() {
        if (!transitionDirection.value) return

        const nextTheme: ThemeName =
            transitionDirection.value === "to-light" ? "light" : "dark"
        saveThemePreference(nextTheme)
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
