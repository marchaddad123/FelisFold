<script setup lang="ts">
import { editorialLabels, translated as t } from "~/data/editorialHelpers"
import { lotusPhoto } from "~/data/editorialVisuals"
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const questions = [
    {
        path: "/health/pain-and-mobility",
        label: t(
            "My Fold is struggling to jump",
            "قطي يجد صعوبة في القفز",
            "Mon Fold a du mal à sauter",
            "我的折耳猫跳跃困难"
        )
    },
    {
        path: "/health/vomiting",
        label: t(
            "My cat keeps vomiting",
            "قطي يتقيأ باستمرار",
            "Mon chat vomit souvent",
            "我的猫反复呕吐"
        )
    },
    {
        path: "/nutrition",
        label: t(
            "What should I feed?",
            "ماذا أطعم قطي؟",
            "Que lui donner à manger ?",
            "我该喂什么？"
        )
    },
    {
        path: "/health/osteochondrodysplasia",
        label: t(
            "My cat has a stiff tail",
            "ذيل قطي متيبس",
            "Mon chat a la queue raide",
            "猫的尾巴僵硬"
        )
    },
    {
        path: "/health/when-to-call-a-vet",
        label: t(
            "When should I call a vet?",
            "متى أتصل بالطبيب؟",
            "Quand appeler un vétérinaire ?",
            "何时联系兽医？"
        )
    },
    {
        path: "/mixes",
        label: t(
            "I have a Scottish Fold mix",
            "لدي قط اسكتلندي هجين",
            "J'ai un croisé Scottish Fold",
            "我养的是折耳混种猫"
        )
    }
]
</script>
<template>
    <section class="bg-sky-soft paper-texture px-5 pt-6 pb-12 sm:px-8 sm:pb-16">
        <div class="mx-auto max-w-[80rem]">
            <h2 class="text-ink text-3xl sm:text-4xl">
                {{ editorialLabels.quickStart[languageCode] }}
            </h2>
            <div class="mt-8 grid gap-7 lg:grid-cols-[1.5fr_0.5fr]">
                <ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <li
                        v-for="(question, index) in questions"
                        :key="question.path"
                    >
                        <NuxtLink
                            :to="localizedPath(question.path)"
                            class="bg-paper text-ink hover:bg-peach-soft flex h-full min-h-24 items-center justify-between gap-4 rounded-xl p-5 transition"
                            ><span
                                class="text-peach font-handwritten text-2xl"
                                aria-hidden="true"
                                >0{{ index + 1 }}</span
                            ><span
                                class="grow text-sm leading-6 font-semibold"
                                >{{ question.label[languageCode] }}</span
                            ><span class="text-peach" aria-hidden="true"
                                >→</span
                            ></NuxtLink
                        >
                    </li>
                </ul>
                <EditorialPhoto
                    :photo="lotusPhoto('lotus-home')"
                    :caption="false"
                    image-class="aspect-[16/7] rounded-[2rem] lg:aspect-auto lg:h-full"
                    sizes="100vw lg:340px"
                />
            </div>
        </div>
    </section>
</template>
