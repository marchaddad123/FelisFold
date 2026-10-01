<script setup lang="ts">
import { supportedLanguages } from "~/utils/languages"
import type { LanguageCode } from "~/types/foldcare"
import { storageKeys } from "~/utils/storageKeys"
import { translated } from "~/data/editorialHelpers"

const { languageCode } = useCurrentLanguage()
const label = translated("Language", "اللغة", "Langue", "语言")
const { samePageInLanguage } = useLocalizedPath()
const router = useRouter()
const languageCookie = useCookie<LanguageCode>(storageKeys.language, {
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365
})

async function changeLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement
    const nextLanguage = selectElement.value as LanguageCode

    if (import.meta.client) {
        window.localStorage.setItem(storageKeys.language, nextLanguage)
    }
    languageCookie.value = nextLanguage

    await router.push(samePageInLanguage(nextLanguage))
}
</script>

<template>
    <label class="relative block">
        <span class="sr-only">{{ label[languageCode] }}</span>
        <select
            :value="languageCode"
            class="border-border bg-paper text-ink hover:border-lilac/30 focus:border-lilac min-h-11 appearance-none rounded-full border py-2 ps-3 pe-9 text-sm font-medium shadow-sm transition outline-none"
            @change="changeLanguage"
        >
            <option
                v-for="language in supportedLanguages"
                :key="language.code"
                :value="language.code"
            >
                {{ language.nativeName }}
            </option>
        </select>
        <span
            class="text-muted pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xs"
            aria-hidden="true"
            >⌄</span
        >
    </label>
</template>
