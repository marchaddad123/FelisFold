import type { LanguageCode } from "~/types/foldcare"

export function useLocalizedPath() {
    const route = useRoute()
    const { languageCode } = useCurrentLanguage()

    function localizedPath(
        path = "/",
        language: LanguageCode = languageCode.value
    ): string {
        const cleanPath =
            path === "/" ? "" : path.startsWith("/") ? path : `/${path}`
        return `/${language}${cleanPath}`
    }

    function samePageInLanguage(language: LanguageCode): string {
        const pathParts = route.path.split("/").filter(Boolean)

        if (pathParts.length === 0) {
            return `/${language}`
        }

        if (["en", "ar", "fr", "zh"].includes(pathParts[0] ?? "")) {
            pathParts[0] = language
        } else {
            pathParts.unshift(language)
        }

        return `/${pathParts.join("/")}`
    }

    return {
        localizedPath,
        samePageInLanguage
    }
}
