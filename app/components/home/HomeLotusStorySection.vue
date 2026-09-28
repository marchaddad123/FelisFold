<script setup lang="ts">
import { siteText, textForLanguage } from "~/data/siteText"

const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const meetLotus = computed(() =>
    textForLanguage(siteText.home.meetLotus, languageCode.value)
)

const heading = computed(() =>
    languageCode.value === "ar"
        ? "الصحة جزء واحد فقط من حياته."
        : languageCode.value === "fr"
          ? "La santé n'est qu'une partie de sa vie."
          : languageCode.value === "zh"
            ? "健康只是他生活的一部分。"
            : "Health is only one part of his life."
)
const copy = computed(() =>
    languageCode.value === "ar"
        ? "لوتس ينام مع القطط الأخرى ويراقب الوجبات ويلعب أحياناً وله رأي قوي في مساحته الشخصية. الموقع يعرض مشاكله الصحية من دون تحويله إلى مرض."
        : languageCode.value === "fr"
          ? "Lotus dort avec les autres chats, surveille les repas, joue parfois et a des opinions très nettes sur son espace personnel. FoldCare parle de sa santé sans le réduire à une maladie."
          : languageCode.value === "zh"
            ? "Lotus 会和其他猫一起睡觉、监督吃饭、有时玩耍，而且对个人空间很有意见。FoldCare 会诚实讲他的健康问题，但不会把他变成一个疾病标签。"
            : "Lotus sleeps with the other cats, supervises meals, plays sometimes, and has strong opinions about personal space. FoldCare shows the health concerns without turning him into a disease."
)
const eyebrow = computed(() =>
    languageCode.value === "ar"
        ? "عالم لوتس"
        : languageCode.value === "fr"
          ? "Le monde de Lotus"
          : languageCode.value === "zh"
            ? "Lotus 的生活"
            : "Lotus’s world"
)
</script>

<template>
    <section class="py-14 sm:py-18 lg:py-24">
        <div
            class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8"
        >
            <div class="bg-lilac-soft rounded-[2.4rem] p-5 sm:p-7 lg:p-9">
                <p
                    class="text-lilac text-sm font-semibold tracking-[0.18em] uppercase"
                >
                    {{ eyebrow }}
                </p>
                <h2
                    class="text-ink mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                    {{ heading }}
                </h2>
                <p class="text-muted mt-4 leading-8">{{ copy }}</p>
                <NuxtLink
                    :to="localizedPath('/lotus')"
                    class="bg-ink text-surface-inverse mt-6 inline-flex min-h-12 items-center rounded-full px-5 font-medium"
                    >{{ meetLotus }}</NuxtLink
                >
            </div>
            <LotusPhotoGrid />
        </div>
    </section>
</template>
