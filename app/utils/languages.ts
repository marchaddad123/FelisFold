import type { LanguageCode } from "~/types/foldcare"

export const supportedLanguages: Array<{
    code: LanguageCode
    name: string
    nativeName: string
    direction: "ltr" | "rtl"
}> = [
    { code: "en", name: "English", nativeName: "English", direction: "ltr" },
    { code: "ar", name: "Arabic", nativeName: "العربية", direction: "rtl" },
    { code: "fr", name: "French", nativeName: "Français", direction: "ltr" },
    {
        code: "zh",
        name: "Simplified Chinese",
        nativeName: "简体中文",
        direction: "ltr"
    }
]

export const defaultLanguage: LanguageCode = "en"

export function isLanguageCode(value: unknown): value is LanguageCode {
    return (
        typeof value === "string" &&
        supportedLanguages.some((language) => language.code === value)
    )
}

export function getLanguageDirection(
    languageCode: LanguageCode
): "ltr" | "rtl" {
    return (
        supportedLanguages.find((language) => language.code === languageCode)
            ?.direction ?? "ltr"
    )
}
