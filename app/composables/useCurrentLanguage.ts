import {
    defaultLanguage,
    getLanguageDirection,
    isLanguageCode
} from "~/utils/languages"
import type { LanguageCode } from "~/types/foldcare"

export function useCurrentLanguage() {
    const route = useRoute()

    const languageCode = computed<LanguageCode>(() => {
        const routeLanguage = route.params.locale
        return isLanguageCode(routeLanguage) ? routeLanguage : defaultLanguage
    })

    const languageDirection = computed(() =>
        getLanguageDirection(languageCode.value)
    )

    useHead(() => ({
        htmlAttrs: {
            lang: languageCode.value,
            dir: languageDirection.value
        }
    }))

    return {
        languageCode,
        languageDirection
    }
}
