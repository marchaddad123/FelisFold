<script setup lang="ts">
import { creatorProfile } from "~/data/creatorProfile"
import { isLanguageCode } from "~/utils/languages"

definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()

const pageText = computed(() => {
    if (languageCode.value === "ar")
        return {
            eyebrow: "تواصل",
            title: "تواصل مع الشخص خلف FelisFold.",
            copy: "رسالة مباشرة إلى مارك حول المشروع أو الموقع أو تعاون تقني."
        }
    if (languageCode.value === "fr")
        return {
            eyebrow: "Contact",
            title: "Contacter la personne derrière FelisFold.",
            copy: `Un message direct à ${creatorProfile.name} au sujet du projet, du site ou d'une collaboration technique.`
        }
    if (languageCode.value === "zh")
        return {
            eyebrow: "联系",
            title: "联系 FelisFold 背后的创作者。",
            copy: `就项目、网站或技术合作直接联系 ${creatorProfile.name}。`
        }
    return {
        eyebrow: "Contact",
        title: "Reach the person behind FelisFold.",
        copy: `A direct line to ${creatorProfile.name} about the project, the website or a technical collaboration.`
    }
})

usePageSeo({
    title: computed(() => `${pageText.value.title} — FelisFold`),
    description: computed(() => pageText.value.copy),
    image: creatorProfile.creatorWithLotusPhoto.sourcePath
})
</script>

<template>
    <div class="paper-texture px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div class="mx-auto max-w-5xl">
            <AppSectionHeading
                :eyebrow="pageText.eyebrow"
                :title="pageText.title"
                :copy="pageText.copy"
                :heading-level="1"
            />
            <CreatorContactSection class="mt-10" />
        </div>
    </div>
</template>
