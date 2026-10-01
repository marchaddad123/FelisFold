<script setup lang="ts">
import { isLanguageCode } from "~/utils/languages"
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { localizedPath } = useLocalizedPath()
await navigateTo(localizedPath("/sources"), { redirectCode: 301 })
</script>
<template><div /></template>
