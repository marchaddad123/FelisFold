<script setup lang="ts">
import { siteText, textForLanguage } from "~/data/siteText"

const { languageCode } = useCurrentLanguage()
const heading = computed(() =>
    textForLanguage(siteText.home.storyHeading, languageCode.value)
)
const copy = computed(() =>
    textForLanguage(siteText.home.storyCopy, languageCode.value)
)

type PrincipleCard = [icon: string, title: string, copy: string]
const cardTones = ["lilac", "sage", "sky"] as const

const cards = computed<PrincipleCard[]>(() => {
    if (languageCode.value === "ar")
        return [
            [
                "👀",
                "لاحظ التغيّرات الصغيرة",
                "القفز والتنظيف والشهية والوضعية والسلوك الاجتماعي قد تحكي قصة قبل ظهور أعراض كبيرة."
            ],
            [
                "📚",
                "تحقق من الدليل",
                "نفضّل الجامعات البيطرية والمراجع المهنية والدراسات المحكمة على نصائح الحيوانات المجهولة."
            ],
            [
                "📝",
                "سجّل ما يحدث",
                "حوّل الذاكرة الغامضة إلى وجبات وتواريخ وقيء وأوزان وملاحظات حركة يمكن عرضها على الطبيب."
            ]
        ]
    if (languageCode.value === "fr")
        return [
            [
                "👀",
                "Observer les petits changements",
                "Sauts, toilettage, appétit, posture et comportement social peuvent raconter une histoire avant des symptômes spectaculaires."
            ],
            [
                "📚",
                "Vérifier les preuves",
                "Nous privilégions écoles vétérinaires, manuels professionnels et études évaluées par les pairs."
            ],
            [
                "📝",
                "Noter ce qui se passe",
                "Transformez des souvenirs vagues en repas, dates, vomissements, poids et notes de mobilité à montrer au vétérinaire."
            ]
        ]
    if (languageCode.value === "zh")
        return [
            [
                "👀",
                "注意细小变化",
                "跳跃、梳理、食欲、姿势和社交行为常常在明显症状之前就会改变。"
            ],
            [
                "📚",
                "查证证据",
                "优先使用兽医学院、专业手册、指南和同行评审研究，而不是匿名宠物建议。"
            ],
            [
                "📝",
                "把事情记录下来",
                "把模糊记忆变成进餐、日期、呕吐、体重和活动记录，方便给兽医看。"
            ]
        ]
    return [
        [
            "👀",
            "Notice the small changes",
            "Jumping, grooming, appetite, posture and social behaviour can tell a story before symptoms look dramatic."
        ],
        [
            "📚",
            "Check the evidence",
            "We prefer veterinary schools, manuals, professional guidelines and peer-reviewed studies over anonymous pet blogs."
        ],
        [
            "📝",
            "Track what happens",
            "Turn fuzzy memories into dates, meals, vomiting events, weights and mobility notes you can show a vet."
        ]
    ]
})
</script>

<template>
    <section class="py-14 sm:py-18 lg:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
            <AppSectionHeading :title="heading" :copy="copy" />
            <div class="mt-8 grid gap-4 md:grid-cols-3">
                <AppCalloutCard
                    v-for="(card, index) in cards"
                    :key="card[1]"
                    :icon="card[0]"
                    :title="card[1]"
                    :copy="card[2]"
                    :tone="cardTones[index] ?? 'lilac'"
                />
            </div>
        </div>
    </section>
</template>
