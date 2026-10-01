<script setup lang="ts">
import { editorialLabels, translated } from "~/data/editorialHelpers"
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
    <section
        class="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-14"
    >
        <div>
            <p class="text-lilac text-sm font-medium">
                {{ editorialLabels.breed[languageCode] }} · FelisFold
            </p>
            <h1
                class="font-editorial text-ink mt-4 text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
                {{ title[languageCode] }}
            </h1>
            <p class="text-muted mt-5 max-w-xl text-lg leading-8">
                {{ introduction[languageCode] }}
            </p>
            <div class="mt-7 flex flex-wrap gap-x-6 gap-y-2">
                <NuxtLink
                    :to="localizedPath('/scottish-fold')"
                    class="bg-peach text-on-accent inline-flex min-h-12 items-center rounded-full px-6 font-semibold"
                    >{{ startLabel[languageCode] }} →</NuxtLink
                >
                <NuxtLink
                    :to="localizedPath('/lotus')"
                    class="text-lilac inline-flex min-h-12 items-center underline underline-offset-4"
                    >{{ editorialLabels.lotus[languageCode] }}</NuxtLink
                >
            </div>
            <NuxtLink
                :to="localizedPath('/start-here')"
                class="text-lilac mt-5 inline-flex min-h-11 items-center underline underline-offset-4"
                >{{ editorialLabels.start[languageCode] }}</NuxtLink
            >
        </div>
        <figure>
            <NuxtImg
                src="/images/lotus/lotus-home.jpg"
                :alt="editorialLabels.photoAlt[languageCode]"
                width="1152"
                height="1536"
                sizes="100vw sm:80vw lg:420px"
                format="webp"
                preload
                fetchpriority="high"
                class="aspect-[4/5] w-full rounded-3xl object-cover object-[center_37%]"
            />
            <figcaption class="text-muted mt-3 text-sm">
                {{ editorialLabels.photoAlt[languageCode] }}
            </figcaption>
        </figure>
    </section>
</template>
