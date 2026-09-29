<script setup lang="ts">
import { isLanguageCode } from "~/utils/languages"

definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()

type AboutPageText = {
    eyebrow: string
    title: string
    copy: string
    paragraphs: string[]
    cards: Array<[title: string, copy: string]>
}
const cardTones = ["lilac", "sage", "sky"] as const

const pageText = computed<AboutPageText>(() => {
    if (languageCode.value === "ar")
        return {
            eyebrow: "عن FelisFold",
            title: "لماذا بنيت FelisFold؟",
            copy: "بدأ الأمر بقطّي لوتس، وليس بفكرة شركة أو موقع طبي.",
            paragraphs: [
                "يعيش لوتس معي منذ أكثر من خمس سنوات. مع الوقت بدأت ألاحظ أشياء لم أفهمها: تردد قبل القفز، تيبس، حساسية عند الحمل، وقيء متكرر.",
                "بدأت أبحث في صحة Scottish Fold لأنني أردت أن أذهب إلى الطبيب البيطري بأسئلة أفضل. FelisFold يحوّل هذا البحث إلى شيء يمكن لمالك آخر فهمه من دون جدار من المصطلحات الطبية.",
                "الموقع لا يشخّص لوتس ولا أي قط آخر. هو يفصل بين الملاحظة الشخصية والمعلومة المدعومة بالمصادر ويترك الروابط إلى الأدلة الطبية."
            ],
            cards: [
                [
                    "لغة بسيطة",
                    "يجب أن يكون المحتوى والكود مفهومين من دون معرفة متخصصة. إذا لم يستطع طفل في الثانية عشرة متابعة الفكرة، نبسّطها."
                ],
                [
                    "مصادر حقيقية",
                    "الجامعات البيطرية والمراجع المهنية والإرشادات والدراسات المحكمة تأتي قبل نصائح الحيوانات المجهولة."
                ],
                [
                    "قط حقيقي",
                    "لوتس يجعل الموقع إنسانياً. قصته تبقى قصته، ولا يتم تقديمها كتشخيص ينطبق على الجميع."
                ]
            ]
        }
    if (languageCode.value === "fr")
        return {
            eyebrow: "À propos de FelisFold",
            title: "Pourquoi j'ai créé FelisFold",
            copy: "Tout a commencé avec mon chat Lotus, pas avec une idée d'entreprise ou de site médical.",
            paragraphs: [
                "Lotus vit avec moi depuis plus de cinq ans. Avec le temps, j'ai remarqué des choses que je ne comprenais pas : hésitation avant les sauts, raideur, sensibilité lorsqu'on le porte et vomissements répétés.",
                "J'ai commencé à étudier la santé du Scottish Fold parce que je voulais poser de meilleures questions au vétérinaire. FelisFold transforme cette recherche en informations compréhensibles sans mur de jargon médical.",
                "Le site ne diagnostique ni Lotus ni le chat de quelqu'un d'autre. Il sépare l'observation personnelle des données établies et garde les liens vers les sources médicales."
            ],
            cards: [
                [
                    "Langage simple",
                    "Le contenu et le code doivent être compréhensibles sans connaissances spécialisées. Si un enfant de 12 ans ne peut pas suivre l'idée, on la simplifie."
                ],
                [
                    "De vraies sources",
                    "Écoles vétérinaires, manuels professionnels, recommandations et études évaluées par les pairs passent avant les conseils anonymes."
                ],
                [
                    "Un vrai chat",
                    "Lotus garde le site humain. Son histoire reste clairement son histoire et n'est jamais présentée comme un diagnostic universel."
                ]
            ]
        }
    if (languageCode.value === "zh")
        return {
            eyebrow: "关于 FelisFold",
            title: "为什么做 FelisFold",
            copy: "它从我的猫 Lotus 开始，而不是从一个公司或医疗网站的想法开始。",
            paragraphs: [
                "Lotus 和我生活了五年多。慢慢地，我注意到一些不明白的变化：跳跃前犹豫、僵硬、被抱时敏感，以及反复呕吐。",
                "我开始研究苏格兰折耳猫健康，是因为我想带着更好的问题去见兽医。FelisFold 把这些研究整理成普通主人也能看懂的内容，而不是一堵医学术语墙。",
                "这个网站不会给 Lotus 或其他猫下诊断。它把个人观察和已建立的证据分开，并保留医学资料的来源链接。"
            ],
            cards: [
                [
                    "简单语言",
                    "内容和代码都应该在没有专业背景时也能理解。如果一个 12 岁孩子都很难跟上，就继续简化。"
                ],
                [
                    "真实来源",
                    "兽医学院、专业手册、指南和同行评审研究，优先于匿名宠物建议。"
                ],
                [
                    "真实的猫",
                    "Lotus 让网站保持真实和有人情味。他的经历会明确标成个人经历，不会包装成适用于所有猫的诊断。"
                ]
            ]
        }
    return {
        eyebrow: "About FelisFold",
        title: "Why I built FelisFold",
        copy: "It started with my cat Lotus, not with an idea for a company or a medical website.",
        paragraphs: [
            "Lotus has lived with me for more than five years. Over time I noticed things I did not understand: hesitation before jumps, stiffness, sensitivity when being carried, and repeated vomiting.",
            "I started researching Scottish Fold health because I wanted better questions to take to a veterinarian. FelisFold turns that work into something another owner can understand without reading a wall of medical jargon.",
            "The site does not diagnose Lotus or anybody else's cat. It separates personal observation from established evidence and keeps links to the sources behind the medical information."
        ],
        cards: [
            [
                "Plain language",
                "Code and content should be understandable without specialist knowledge. If a 12-year-old cannot follow the idea, we simplify it."
            ],
            [
                "Real sources",
                "Veterinary schools, manuals, professional guidelines and peer-reviewed research come before anonymous pet advice."
            ],
            [
                "A real cat",
                "Lotus keeps the site human. His story is clearly labelled as his story, never disguised as a universal diagnosis."
            ]
        ]
    }
})

usePageSeo({
    title: computed(() => `${pageText.value.title} — FelisFold`),
    description: computed(() => pageText.value.copy),
    image: "/images/lotus/lotus-with-creator-younger.jpg"
})
</script>

<template>
    <div class="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20">
        <AppSectionHeading
            :eyebrow="pageText.eyebrow"
            :title="pageText.title"
            :copy="pageText.copy"
        />

        <section
            class="mt-10 grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
        >
            <NuxtImg
                src="/images/lotus/lotus-with-creator-younger.jpg"
                alt="Lotus with the creator of FelisFold"
                width="1152"
                height="1536"
                sizes="100vw lg:42vw xl:480px"
                format="webp"
                :quality="86"
                loading="lazy"
                decoding="async"
                placeholder
                class="aspect-[4/3] w-full rounded-[2.2rem] object-cover object-[center_40%]"
            />
            <div class="text-muted space-y-5 text-lg leading-8">
                <p v-for="paragraph in pageText.paragraphs" :key="paragraph">
                    {{ paragraph }}
                </p>
            </div>
        </section>

        <section class="mt-12 grid gap-5 md:grid-cols-3">
            <AppCalloutCard
                v-for="(card, index) in pageText.cards"
                :key="card[0]"
                :title="card[0]"
                :copy="card[1]"
                :tone="cardTones[index] ?? 'lilac'"
            />
        </section>
    </div>
</template>
