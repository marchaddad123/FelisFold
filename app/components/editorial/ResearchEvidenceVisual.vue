<script setup lang="ts">
import { translated as t } from "~/data/editorialHelpers"
import { visualLabels } from "~/data/editorialVisuals"
const props = defineProps<{ slug: string }>()
const { languageCode } = useCurrentLanguage()
const descriptions = computed(() => {
    if (props.slug === "scottish-fold")
        return [
            t(
                "2021 radiographic survey",
                "دراسة الأشعة عام 2021",
                "Étude radiographique de 2021",
                "2021 年影像研究"
            ),
            t(
                "22 cats · 10 heterozygous Folds",
                "22 قطاً · 10 قطط مطوية متغايرة الزيجوت",
                "22 chats · 10 Folds hétérozygotes",
                "22 只猫 · 10 只杂合折耳猫"
            ),
            t(
                "A small sample cannot predict lifelong pain or progression.",
                "العينة الصغيرة لا تتنبأ بالألم أو التطور طوال الحياة.",
                "Un petit échantillon ne prédit ni douleur ni évolution à vie.",
                "小样本不能预测终身疼痛或病程。"
            )
        ]
    return [
        visualLabels.facts,
        t(
            "Documented observations",
            "ملاحظات موثقة",
            "Observations documentées",
            "有记录的观察"
        ),
        t(
            "Case reports describe what happened, not how often it will happen.",
            "تقارير الحالات تصف ما حدث وليس معدل حدوثه.",
            "Un cas décrit ce qui s'est passé, pas sa fréquence.",
            "病例报告描述发生了什么，而不是发生频率。"
        )
    ]
})
</script>
<template>
    <div class="mt-4">
        <p class="text-peach text-sm font-semibold">
            {{ descriptions[0]?.[languageCode] }}
        </p>
        <p class="text-ink mt-3 text-3xl font-semibold">
            {{ descriptions[1]?.[languageCode] }}
        </p>
        <p class="text-muted mt-4 leading-7">
            {{ descriptions[2]?.[languageCode] }}
        </p>
    </div>
</template>
