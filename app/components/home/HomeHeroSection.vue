<script setup lang="ts">
import { editorialLabels, translated } from "~/data/editorialHelpers"
import { lotusPhoto, visualLabels } from "~/data/editorialVisuals"
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const title = translated(
    "Scottish Fold health & everyday care, made easier to understand.",
    "صحة القطط الاسكتلندية مطوية الأذن والعناية اليومية بها، بطريقة أسهل للفهم.",
    "Santé et soins du Scottish Fold, plus faciles à comprendre.",
    "更易懂的苏格兰折耳猫健康与日常护理。"
)
const introduction = translated(
    "Learn what makes Scottish Folds different, what signs to watch for, how to make everyday life easier, and what I've learned caring for Lotus.",
    "تعلم ما يميز هذه القطط والعلامات التي تراقبها وكيف تسهل حياتها اليومية، وما تعلمته من العناية بلوتس.",
    "Découvrez ce qui distingue ces chats, les signes à surveiller, comment faciliter leur quotidien et ce que j'ai appris avec Lotus.",
    "了解折耳猫的特点、需要关注的迹象、改善日常生活的方法，以及我照顾 Lotus 的心得。"
)
const startLabel = translated(
    "Start with Scottish Fold health",
    "ابدأ بصحة القط الاسكتلندي",
    "Commencer par la santé du Scottish Fold",
    "从折耳猫健康开始"
)
</script>

<template>
    <EditorialHeroSection
        :title="title"
        :eyebrow="editorialLabels.breed"
        :copy="introduction"
        :photo="lotusPhoto('lotus-portrait')"
        :note="visualLabels.why"
        :links="[
            { path: '/scottish-fold', label: startLabel },
            { path: '/lotus', label: editorialLabels.lotus }
        ]"
    >
        <template #byline
            ><NuxtLink
                :to="localizedPath('/start-here')"
                class="editorial-link text-peach mt-5 inline-flex min-h-11 items-center text-sm"
                >{{ editorialLabels.start[languageCode] }} →</NuxtLink
            ></template
        >
    </EditorialHeroSection>
</template>
