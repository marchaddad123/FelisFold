import type { ThemeName } from "~/types/foldcare"
import { storageKeys } from "~/utils/storageKeys"

function isThemeName(value: unknown): value is ThemeName {
    return value === "light" || value === "dark"
}

export function useThemePreference() {
    const currentTheme = useState<ThemeName>(
        "foldcare-current-theme",
        () => "light"
    )
    const hasLoadedThemePreference = useState<boolean>(
        "foldcare-theme-loaded",
        () => false
    )

    function applyThemeToPage(theme: ThemeName) {
        if (import.meta.server) return

        document.documentElement.classList.toggle("dark", theme === "dark")
        document.documentElement.dataset.theme = theme
        document.documentElement.style.colorScheme = theme

        const themeColor = document.querySelector('meta[name="theme-color"]')
        themeColor?.setAttribute(
            "content",
            theme === "dark" ? "#0d2520" : "#f7efe3"
        )
    }

    function loadThemePreference() {
        if (import.meta.server || hasLoadedThemePreference.value) return

        const savedTheme = window.localStorage.getItem(storageKeys.theme)
        const systemTheme: ThemeName = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches
            ? "dark"
            : "light"
        currentTheme.value = isThemeName(savedTheme) ? savedTheme : systemTheme
        applyThemeToPage(currentTheme.value)
        hasLoadedThemePreference.value = true
    }

    function saveThemePreference(theme: ThemeName) {
        currentTheme.value = theme
        if (import.meta.client) {
            window.localStorage.setItem(storageKeys.theme, theme)
            applyThemeToPage(theme)
        }
    }

    return {
        currentTheme: readonly(currentTheme),
        loadThemePreference,
        saveThemePreference,
        applyThemeToPage
    }
}
