<script setup lang="ts">
import { editorialLabels, translated as t } from "~/data/editorialHelpers"
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
    <section class="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 class="font-editorial text-ink text-3xl">
            {{ editorialLabels.quickStart[languageCode] }}
        </h2>
        <ul class="border-border mt-5 grid gap-x-10 border-y sm:grid-cols-2">
            <li
                v-for="question in questions"
                :key="question.path"
                class="border-border border-b last:border-0 sm:last:border-b"
            >
                <NuxtLink
                    :to="localizedPath(question.path)"
                    class="text-lilac flex min-h-14 items-center justify-between gap-4 py-3 font-medium hover:underline"
                    >{{ question.label[languageCode] }}
                    <span aria-hidden="true">→</span></NuxtLink
                >
            </li>
        </ul>
    </section>
</template>
