<script setup lang="ts">
import { isLanguageCode } from "~/utils/languages"

definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()

type CarePageText = {
    eyebrow: string
    title: string
    copy: string
    cards: Array<[title: string, copy: string]>
    comfortTitle: string
    comfortCopy: string
}
const cardTones = ["lilac", "sage", "sky", "peach"] as const

const pageText = computed<CarePageText>(() => {
    if (languageCode.value === "ar") {
        return {
            eyebrow: "العناية اليومية",
            title: "اجعل اليوم أسهل على المفاصل المؤلمة.",
            copy: "تغييرات بسيطة في المنزل قد تقلل الجهد من دون منع القط من الحركة.",
            cards: [
                [
                    "خطوات قصيرة أفضل من قفزة كبيرة",
                    "ضع كرسيًا ثابتًا أو خطوة أو منحدرًا للوصول إلى السرير أو الكنبة أو النافذة."
                ],
                [
                    "أرضية ثابتة",
                    "الأسطح غير الزلقة تساعد القط الذي يشعر بالتيبس أو الألم على الحركة بثقة أكبر."
                ],
                [
                    "صندوق رمل سهل الدخول",
                    "مدخل منخفض وصندوق واسع يقللان الحاجة إلى رفع الأرجل عالياً."
                ],
                [
                    "راحة دافئة ومبطنة",
                    "أماكن نوم سهلة الوصول ومريحة تعطيه خيارات أكثر عندما تكون الحركة أصعب."
                ],
                [
                    "لا تجبر الذيل",
                    "لا تثنِ ذيل Scottish Fold مراراً لاختبار مرونته. الذيل المتأثر قد يكون مؤلماً."
                ],
                [
                    "راقب التغيّر",
                    "صوّر المشي والقفز واللعب كل فترة. المقارنة عبر الوقت قد تظهر تغيراً تدريجياً لا تلاحظه يومياً."
                ]
            ],
            comfortTitle: "الراحة جزء من العلاج.",
            comfortCopy:
                "منزل يتطلب قفزات أقل ألماً لا يعني منع النشاط. بل يعني ترك القط يختار حركة يمكنه تحملها."
        }
    }
    if (languageCode.value === "fr") {
        return {
            eyebrow: "Soins quotidiens",
            title: "Rendre la journée plus facile pour des articulations douloureuses.",
            copy: "De petites adaptations de la maison peuvent réduire l'effort sans supprimer l'activité.",
            cards: [
                [
                    "Plusieurs petits pas plutôt qu'un grand saut",
                    "Ajoutez une marche stable, une chaise ou une rampe vers le lit, le canapé ou la fenêtre."
                ],
                [
                    "Des surfaces stables",
                    "Les surfaces antidérapantes donnent plus de sécurité à un chat raide ou douloureux."
                ],
                [
                    "Une litière facile d'accès",
                    "Une entrée basse et un bac large évitent de devoir lever les pattes très haut."
                ],
                [
                    "Repos chaud et rembourré",
                    "Des couchages confortables et faciles d'accès donnent plus d'options les jours difficiles."
                ],
                [
                    "Ne forcez pas la queue",
                    "Ne pliez pas régulièrement la queue d'un Scottish Fold pour tester sa souplesse. Une queue atteinte peut être douloureuse."
                ],
                [
                    "Suivre les changements",
                    "Filmez parfois la marche, les sauts et le jeu. Une comparaison dans le temps peut montrer une évolution lente."
                ]
            ],
            comfortTitle: "Le confort fait partie du traitement.",
            comfortCopy:
                "Une maison qui demande moins de sauts douloureux ne signifie pas supprimer l'activité. Elle laisse le chat choisir des mouvements qu'il peut gérer."
        }
    }
    if (languageCode.value === "zh") {
        return {
            eyebrow: "日常护理",
            title: "让疼痛的关节每天少费一点力。",
            copy: "简单的家庭调整可以减少负担，同时保留猫咪愿意做的活动。",
            cards: [
                [
                    "小台阶代替一次大跳",
                    "在床、沙发和窗台旁放稳固的小台阶、椅子或坡道。"
                ],
                [
                    "稳定防滑的地面",
                    "防滑表面对僵硬或疼痛的猫更友好，也更有安全感。"
                ],
                [
                    "低入口猫砂盆",
                    "入口更低、空间更大的猫砂盆可以减少抬腿和跨越的负担。"
                ],
                [
                    "温暖柔软的休息区",
                    "让猫在活动困难的日子里也能轻松找到舒服的位置。"
                ],
                [
                    "不要反复弯尾巴",
                    "不要为了测试柔韧性而反复弯折折耳猫的尾巴。受影响的尾巴可能很痛。"
                ],
                [
                    "观察趋势",
                    "偶尔拍走路、跳跃和玩耍的视频。长期对比能看出每天不容易注意到的变化。"
                ]
            ],
            comfortTitle: "舒适本身就是护理的一部分。",
            comfortCopy:
                "减少痛苦的大跳，并不等于让猫停止活动，而是让它自己选择能够承受的动作。"
        }
    }
    return {
        eyebrow: "Daily care",
        title: "Make everyday life easier on painful joints.",
        copy: "Small changes around the home can reduce effort without taking normal movement away.",
        cards: [
            [
                "Short steps beat one big jump",
                "Add a stable step, chair or ramp to favourite beds, sofas and windows."
            ],
            [
                "Give the paws grip",
                "Non-slip surfaces can make movement feel safer for a stiff or painful cat."
            ],
            [
                "Lower the litter-box entry",
                "A wide box with a low entrance means less high stepping and fewer awkward movements."
            ],
            [
                "Warm, padded rest",
                "Easy-to-reach comfortable beds give more options on days when movement is harder."
            ],
            [
                "Do not force the tail",
                "Do not repeatedly bend a Scottish Fold's tail to test flexibility. An affected tail can hurt."
            ],
            [
                "Watch the trend",
                "Film walking, jumping and play occasionally. Comparing over time can reveal gradual changes you miss day to day."
            ]
        ],
        comfortTitle: "Comfort is part of treatment.",
        comfortCopy:
            "A home that asks for fewer painful jumps does not mean giving up on activity. It means letting the cat choose movement that feels manageable."
    }
})

usePageSeo({
    title: computed(() => `${pageText.value.eyebrow} — FelisFold`),
    description: computed(() => pageText.value.copy)
})
</script>

<template>
    <div
        class="mx-auto max-w-[90rem] px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20"
    >
        <div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <AppSectionHeading
                :eyebrow="pageText.eyebrow"
                :title="pageText.title"
                :copy="pageText.copy"
                :heading-level="1"
            />
            <FoldCatMascot class="hidden lg:block" size="lg" />
        </div>
        <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <AppCalloutCard
                v-for="(card, index) in pageText.cards"
                :key="card[0]"
                :title="card[0]"
                :copy="card[1]"
                :tone="cardTones[index % cardTones.length] ?? 'lilac'"
            />
        </div>
        <section
            class="bg-paper mt-12 grid gap-6 rounded-[2.4rem] p-5 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
        >
            <NuxtImg
                src="/images/lotus/lotus-posture.jpg"
                alt="Lotus resting in a relaxed posture"
                width="1152"
                height="1536"
                sizes="100vw lg:42vw xl:480px"
                format="webp"
                :quality="84"
                loading="lazy"
                decoding="async"
                placeholder
                class="aspect-[4/3] w-full rounded-[1.8rem] object-cover object-[center_38%]"
            />
            <div>
                <h2 class="text-ink text-2xl font-semibold">
                    {{ pageText.comfortTitle }}
                </h2>
                <p class="text-muted mt-4 leading-8">
                    {{ pageText.comfortCopy }}
                </p>
                <MedicalInformationNotice class="mt-5" />
            </div>
        </section>
    </div>
</template>
