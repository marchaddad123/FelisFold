<script setup lang="ts">
import { translated as t } from "~/data/editorialHelpers"
const { languageCode } = useCurrentLanguage()
const title = t(
    "Bring the useful details",
    "أحضر التفاصيل المفيدة",
    "Apporter les détails utiles",
    "带上有用的细节"
)
const details = [
    t(
        "A short movement video",
        "فيديو قصير للحركة",
        "Une courte vidéo des mouvements",
        "一段活动短视频"
    ),
    t(
        "Available ancestry and medical records",
        "سجلات النسب والعلاج المتاحة",
        "Dossiers d'ascendance et médicaux disponibles",
        "已有的祖先与医疗记录"
    ),
    t(
        "Food, medicines and recent changes",
        "الغذاء والأدوية والتغيرات الأخيرة",
        "Alimentation, médicaments et changements récents",
        "食物、药物与近期变化"
    ),
    t(
        "Questions about comfort and follow-up",
        "أسئلة عن الراحة والمتابعة",
        "Questions de confort et de suivi",
        "关于舒适与复查的问题"
    )
]
</script>
<template>
    <aside class="bg-paper border-border rounded-xl border p-6 sm:p-8">
        <svg
            viewBox="0 0 220 110"
            class="text-sky mb-4 h-28 w-full"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
        >
            <rect x="36" y="12" width="82" height="87" rx="9" />
            <rect
                x="59"
                y="5"
                width="36"
                height="14"
                rx="4"
                class="fill-sky-soft"
            />
            <path
                d="m51 41 5 5 9-11m-14 30 5 5 9-11M76 42h26M76 66h26M51 85h51"
            />
            <rect x="139" y="33" width="48" height="65" rx="7" />
            <path d="m155 53 16 11-16 11V53Z" />
        </svg>
        <h3 class="text-ink text-2xl">{{ title[languageCode] }}</h3>
        <ul class="text-muted mt-5 space-y-4 text-sm leading-7">
            <li
                v-for="detail in details"
                :key="detail.en"
                class="border-border border-t pt-3"
            >
                {{ detail[languageCode] }}
            </li>
        </ul>
    </aside>
</template>
