<script setup lang="ts">
import { defaultLanguage, isLanguageCode } from "~/utils/languages"
import { storageKeys } from "~/utils/storageKeys"

const savedLanguage = useCookie(storageKeys.language)
const preferredLanguage = isLanguageCode(savedLanguage.value)
    ? savedLanguage.value
    : defaultLanguage
await navigateTo(`/${preferredLanguage}`, { redirectCode: 302 })
</script>

<template>
    <div />
</template>
