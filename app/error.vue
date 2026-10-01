<script setup lang="ts">
import { translated } from "~/data/editorialHelpers"
import { isLanguageCode } from "~/utils/languages"
const props = defineProps<{
    error: { statusCode?: number; statusMessage?: string }
}>()
const route = useRoute()
const languageCode = computed(() => {
    const prefix = route.path.split("/")[1]
    return isLanguageCode(prefix) ? prefix : "en"
})
const heading = translated(
    "This cat wandered off the page.",
    "هذا القط تاه عن الصفحة.",
    "Ce chat s'est égaré hors de la page.",
    "这只猫走错了页面。"
)
const explanation = translated(
    "The page does not exist, moved, or could not load correctly.",
    "الصفحة غير موجودة أو نُقلت أو تعذّر تحميلها.",
    "Cette page n'existe pas, a été déplacée ou n'a pas pu se charger.",
    "页面不存在、已移动或无法加载。"
)
const backLabel = translated(
    "Back to FelisFold",
    "العودة إلى FelisFold",
    "Retour à FelisFold",
    "返回 FelisFold"
)
useHead(() => ({
    htmlAttrs: {
        lang: languageCode.value,
        dir: languageCode.value === "ar" ? "rtl" : "ltr"
    }
}))
</script>

<template>
    <div
        class="bg-cream grid min-h-screen place-items-center px-4 py-12 text-center"
    >
        <div class="max-w-lg">
            <FoldCatMascot size="lg" />
            <p
                class="text-lilac mt-5 text-sm font-semibold tracking-[0.18em] uppercase"
            >
                {{ props.error.statusCode ?? 404 }}
            </p>
            <h1 class="text-ink mt-3 text-4xl font-semibold tracking-tight">
                {{ heading[languageCode] }}
            </h1>
            <p class="text-muted mt-4 leading-7">
                {{ explanation[languageCode] }}
            </p>
            <a
                :href="`/${languageCode}`"
                class="bg-ink text-surface-inverse mt-7 inline-flex min-h-12 items-center rounded-full px-6 font-medium"
            >
                {{ backLabel[languageCode] }}
            </a>
        </div>
    </div>
</template>
