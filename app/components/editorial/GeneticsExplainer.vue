<script setup lang="ts">
import { translated as t } from "~/data/editorialHelpers"
const { languageCode } = useCurrentLanguage()
const labels = {
    variant: t("TRPV4 variant", "متغير TRPV4", "Variant TRPV4", "TRPV4 变异"),
    one: t(
        "One variant copy",
        "نسخة واحدة من المتغير",
        "Une copie du variant",
        "一个变异拷贝"
    ),
    two: t(
        "Two variant copies",
        "نسختان من المتغير",
        "Deux copies du variant",
        "两个变异拷贝"
    ),
    risk: t("Risk remains", "الخطر يبقى", "Le risque demeure", "风险仍存在"),
    more: t(
        "Associated with more severe skeletal disease",
        "ترتبط بمرض هيكلي أشد",
        "Associées à une atteinte osseuse plus sévère",
        "与更严重的骨骼疾病有关"
    ),
    note: t(
        "A genetic explanation, not a forecast for one cat.",
        "شرح وراثي وليس توقعاً لحالة قط بعينه.",
        "Une explication génétique, pas une prédiction individuelle.",
        "这是遗传解释，不是对某只猫的预测。"
    )
}
</script>
<template>
    <div class="grid gap-5 sm:grid-cols-2">
        <div
            v-for="copies in [1, 2]"
            :key="copies"
            class="rounded-xl bg-[#fffaf1] p-6 [--color-ink:#18231f] [--color-muted:#5f625c] [--color-peach-soft:#f7ded0] [--color-peach:#9f3b21]"
        >
            <div class="mb-5 flex gap-3" aria-hidden="true">
                <span
                    v-for="copy in [1, 2]"
                    :key="copy"
                    class="grid size-14 place-items-center rounded-full border-2 text-lg font-semibold"
                    :class="
                        copy <= copies
                            ? 'border-peach bg-peach-soft text-peach'
                            : 'border-border text-muted'
                    "
                    >{{ copy <= copies ? "T" : "G" }}</span
                >
            </div>
            <p class="text-peach text-xs font-semibold">
                <bdi>{{ labels.variant[languageCode] }}</bdi>
            </p>
            <h3 class="mt-2 text-2xl">
                {{ (copies === 1 ? labels.one : labels.two)[languageCode] }}
            </h3>
            <p class="text-muted mt-3 leading-7">
                {{ (copies === 1 ? labels.risk : labels.more)[languageCode] }}
            </p>
        </div>
        <p class="text-sm leading-6 sm:col-span-2">
            {{ labels.note[languageCode] }}
        </p>
    </div>
</template>
