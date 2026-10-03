<script setup lang="ts">
import { translated as t } from "~/data/editorialHelpers"
const { languageCode } = useCurrentLanguage()
const title = t(
    "Read the label, then ask questions",
    "اقرأ العبوة ثم اطرح الأسئلة",
    "Lire l'étiquette, puis poser des questions",
    "读标签，然后提出问题"
)
const checks = [
    t(
        "Complete feline food",
        "غذاء متكامل للقطط",
        "Aliment complet pour chats",
        "猫用完整食物"
    ),
    t(
        "Appropriate life stage",
        "مرحلة عمرية مناسبة",
        "Stade de vie adapté",
        "适合生命阶段"
    ),
    t(
        "Calories per gram or serving",
        "السعرات لكل غرام أو حصة",
        "Calories par gramme ou portion",
        "每克或每份热量"
    ),
    t(
        "Formulation and quality control",
        "التركيب وضبط الجودة",
        "Formulation et contrôle qualité",
        "配方与质量控制"
    )
]
</script>
<template>
    <aside class="bg-paper border-border rounded-[1.5rem] border p-6">
        <h3 class="text-ink text-2xl">{{ title[languageCode] }}</h3>
        <ul class="mt-5 space-y-4">
            <li
                v-for="(check, index) in checks"
                :key="check.en"
                class="text-muted flex items-start gap-4 leading-7"
            >
                <span
                    class="bg-sage-soft text-sage grid size-8 shrink-0 place-items-center rounded-full text-sm"
                    aria-hidden="true"
                    >{{ index + 1 }}</span
                >{{ check[languageCode] }}
            </li>
        </ul>
    </aside>
</template>
