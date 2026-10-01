<script setup lang="ts">
import { creatorProfile } from "~/data/creatorProfile"

const props = withDefaults(defineProps<{ context?: "author" | "lotus" }>(), {
    context: "author"
})

const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()

const text = computed(() => {
    if (languageCode.value === "ar")
        return {
            eyebrow: props.context === "lotus" ? "صاحب هذه القصة" : "عن الكاتب",
            link: "عن مارك وFelisFold",
            sources: "المصادر",
            lotusCopy:
                "لوتس هو قطّي. كل ما يحمل عبارة «تجربة لوتس» يأتي مما لاحظته أو جرّبته أو غيّرته أو ناقشته مع الأطباء البيطريين أثناء رعايتي له."
        }
    if (languageCode.value === "fr")
        return {
            eyebrow:
                props.context === "lotus"
                    ? "La personne qui raconte"
                    : "À propos de l'auteur",
            link: `${creatorProfile.name} et FelisFold`,
            sources: "Sources",
            lotusCopy:
                "Lotus est mon chat. Tout ce qui porte la mention « expérience de Lotus » vient de ce que j'ai observé, essayé, modifié ou discuté avec des vétérinaires en prenant soin de lui."
        }
    if (languageCode.value === "zh")
        return {
            eyebrow: props.context === "lotus" ? "故事讲述者" : "关于作者",
            link: `了解 ${creatorProfile.name} 与 FelisFold`,
            sources: "资料来源",
            lotusCopy:
                "Lotus 是我的猫。所有标有“Lotus 的经历”的内容，都来自我在照顾他时亲自观察、尝试、调整或与兽医讨论的事情。"
        }
    return {
        eyebrow:
            props.context === "lotus"
                ? "The person telling this story"
                : "About the author",
        link: `About ${creatorProfile.name} and FelisFold`,
        sources: "Sources",
        lotusCopy:
            "Lotus is my cat. Everything marked “Lotus's experience” comes from what I personally observed, tried, changed or discussed with veterinarians while caring for him."
    }
})

const profileCopy = computed(() =>
    props.context === "lotus"
        ? text.value.lotusCopy
        : creatorProfile.shortBio[languageCode.value]
)
</script>

<template>
    <aside
        class="border-border bg-paper grid gap-5 border-y py-6 sm:grid-cols-[6rem_1fr] sm:items-center"
        :aria-label="text.eyebrow"
    >
        <NuxtImg
            :src="creatorProfile.creatorWithLotusPhoto.sourcePath"
            :alt="creatorProfile.creatorWithLotusPhoto.altText[languageCode]"
            :width="creatorProfile.creatorWithLotusPhoto.width"
            :height="creatorProfile.creatorWithLotusPhoto.height"
            sizes="96px"
            format="webp"
            :quality="78"
            loading="lazy"
            decoding="async"
            class="aspect-square size-24 rounded-full object-cover"
            :style="{
                objectPosition:
                    creatorProfile.creatorWithLotusPhoto.objectPosition
            }"
        />
        <div>
            <p class="text-peach text-xs font-bold tracking-[0.16em] uppercase">
                {{ text.eyebrow }}
            </p>
            <p class="text-ink mt-1 font-bold">
                {{ creatorProfile.name }} ·
                {{ creatorProfile.role[languageCode] }}
            </p>
            <p class="text-muted mt-2 max-w-3xl text-sm leading-6">
                {{ profileCopy }}
            </p>
            <div
                class="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold"
            >
                <NuxtLink
                    :to="localizedPath('/about')"
                    class="editorial-link text-ink inline-flex"
                >
                    {{ text.link }} →
                </NuxtLink>
                <NuxtLink
                    :to="localizedPath('/sources')"
                    class="editorial-link text-ink inline-flex"
                >
                    {{ text.sources }} →
                </NuxtLink>
            </div>
        </div>
    </aside>
</template>
