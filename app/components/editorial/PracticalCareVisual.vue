<script setup lang="ts">
import { translated as t } from "~/data/editorialHelpers"
const { languageCode } = useCurrentLanguage()
const labels = {
    title: t(
        "Make the route easier",
        "اجعل الطريق أسهل",
        "Faciliter le trajet",
        "让路线更轻松"
    ),
    steps: t(
        "Stable steps or a ramp",
        "درج ثابت أو منحدر",
        "Marches stables ou rampe",
        "稳定台阶或坡道"
    ),
    grip: t(
        "Non-slip footing",
        "أرضية لا تنزلق",
        "Sol antidérapant",
        "防滑地面"
    ),
    rest: t(
        "Easy-access resting place",
        "مكان راحة يسهل الوصول إليه",
        "Repos facilement accessible",
        "方便到达的休息处"
    ),
    note: t(
        "A home adaptation, not a treatment or a test of jumping ability.",
        "تعديل منزلي وليس علاجاً أو اختباراً لقدرة القفز.",
        "Une adaptation du domicile, pas un traitement ni un test de saut.",
        "这是居家调整，不是治疗或跳跃能力测试。"
    )
}
</script>
<template>
    <div class="bg-sage-soft rounded-[2rem] p-6 sm:p-8">
        <h3 class="text-ink text-2xl">{{ labels.title[languageCode] }}</h3>
        <svg
            viewBox="0 0 440 230"
            fill="none"
            class="my-4 w-full"
            aria-hidden="true"
        >
            <path
                d="M22 198h396"
                class="stroke-sage"
                stroke-width="5"
                stroke-linecap="round"
            />
            <path
                d="M65 194v-28h48v-32h48v-32h48v92"
                class="fill-paper stroke-sage"
                stroke-width="3"
            />
            <rect
                x="226"
                y="75"
                width="172"
                height="43"
                rx="17"
                class="fill-peach-soft stroke-peach"
                stroke-width="3"
            />
            <path
                d="M240 119v78m144-78v78"
                class="stroke-peach"
                stroke-width="5"
            />
            <image
                href="/images/cat/tabby-resting.webp"
                x="239"
                y="10"
                width="144"
                height="64"
                preserveAspectRatio="xMidYMax meet"
            />
        </svg>
        <ul class="text-ink grid gap-3 text-sm sm:grid-cols-3">
            <li>{{ labels.steps[languageCode] }}</li>
            <li>{{ labels.grip[languageCode] }}</li>
            <li>{{ labels.rest[languageCode] }}</li>
        </ul>
        <p class="text-muted mt-5 text-sm leading-6">
            {{ labels.note[languageCode] }}
        </p>
    </div>
</template>
