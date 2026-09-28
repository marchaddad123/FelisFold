<script setup lang="ts">
import { isLanguageCode } from "~/utils/languages"

definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()

const pageText = computed(() => {
    if (languageCode.value === "ar")
        return {
            eyebrow: "المريض الرئيسي والقلب الحقيقي للمشروع",
            title: "تعرّف على لوتس.",
            copy: "لوتس هو قطّي. عمره نحو خمس سنوات، ووصفه طبيبه البيطري بأنه مزيج Scottish Fold–Siamese. بدأت FoldCare لأنني أردت فهم ما أراه في حياته اليومية.",
            observationsTitle: "ما لاحظته",
            observations: [
                "يتردد قبل بعض القفزات ويستخدم الأثاث كخطوات",
                "لا يحب أن يُحمل وقد يكون اللمس غير مريح",
                "لديه مشاكل واضحة في الأطراف والذيل",
                "لا يزال يركض ويلعب ويتمدد أحياناً",
                "يتقيأ بشكل متكرر وخاصة بعد كميات أكبر أو بعد التنظيف"
            ],
            timelineHeading: "كان مجرد قطّي.",
            timelineCopy:
                "لم تبدأ FoldCare كمشروع طبي. بدأت مع العيش مع لوتس وملاحظة تغيّرات صغيرة وطرح أسئلة.",
            earlier: "لوتس وأنا في وقت أبكر.",
            current: "لوتس وأنا الآن.",
            distinctionTitle: "ملاحظة حقيقية ≠ تشخيص مؤكد",
            distinctionCopy:
                "هذه ملاحظات حقيقية من العيش مع لوتس، وليست تشخيصاً مؤكداً. علامات المفاصل تتوافق مع مخاوف معروفة في Scottish Fold، بينما القيء المتكرر يحتاج إلى تحقيق بيطري منفصل.",
            beyondEyebrow: "أكثر من الأعراض",
            beyondTitle: "لوتس ما زال لوتس.",
            beyondCopy:
                "ينام مع القطط الأخرى ويتمدد ويلعب أحياناً ويراقب الوجبات وله رأي قوي في مساحته الشخصية. نريد أن نعرض صحته بصدق من دون اختزاله في مرض."
        }
    if (languageCode.value === "fr")
        return {
            eyebrow: "Le patient principal et le cœur réel du projet",
            title: "Voici Lotus.",
            copy: "Lotus est mon chat. Il a environ cinq ans et son vétérinaire l'a décrit comme un croisé Scottish Fold–Siamois. J'ai créé FoldCare pour comprendre ce que je voyais dans sa vie quotidienne.",
            observationsTitle: "Ce que j'ai remarqué",
            observations: [
                "Il hésite avant certains sauts et utilise les meubles comme étapes",
                "Il n'aime pas être porté et certaines manipulations semblent inconfortables",
                "Ses membres et sa queue présentent des problèmes évidents",
                "Il court, joue et s'étire encore parfois",
                "Il vomit fréquemment, surtout après de plus grosses portions ou parfois après le toilettage"
            ],
            timelineHeading: "Au départ, c'était juste mon chat.",
            timelineCopy:
                "FoldCare n'a pas commencé comme un projet médical. Il a commencé en vivant avec Lotus, en remarquant de petits changements et en posant des questions.",
            earlier: "Lotus et moi, plus tôt.",
            current: "Lotus et moi aujourd'hui.",
            distinctionTitle: "Observation réelle ≠ diagnostic confirmé",
            distinctionCopy:
                "Ce sont de vraies observations de la vie avec Lotus, pas un diagnostic confirmé. Ses signes articulaires correspondent à des préoccupations connues chez le Scottish Fold, tandis que ses vomissements récurrents doivent être explorés séparément.",
            beyondEyebrow: "Au-delà des symptômes",
            beyondTitle: "Lotus reste Lotus.",
            beyondCopy:
                "Il dort avec les autres chats, s'étire, joue parfois, surveille les repas et tient beaucoup à son espace personnel. Le site doit parler honnêtement de sa santé sans le réduire à une maladie."
        }
    if (languageCode.value === "zh")
        return {
            eyebrow: "主要患者，也是这个项目真正的核心",
            title: "认识 Lotus。",
            copy: "Lotus 是我的猫，大约五岁。兽医曾把他描述为 Scottish Fold–Siamese 混种。我做 FoldCare，是因为我想弄清楚日常生活里在他身上发生的变化。",
            observationsTitle: "我注意到的变化",
            observations: [
                "有些跳跃会犹豫，并用家具分段上去",
                "不喜欢被抱，触碰某些部位似乎不舒服",
                "四肢和尾巴都有明显问题",
                "有时仍然会跑、玩和伸展",
                "经常呕吐，尤其是吃得多时，偶尔也在梳理后发生"
            ],
            timelineHeading: "一开始，他只是我的猫。",
            timelineCopy:
                "FoldCare 并不是从一个医疗项目开始的，而是从和 Lotus 一起生活、注意到细微变化并不断提问开始的。",
            earlier: "较早时候的 Lotus 和我。",
            current: "现在的 Lotus 和我。",
            distinctionTitle: "真实观察 ≠ 确诊",
            distinctionCopy:
                "这些是和 Lotus 一起生活时的真实观察，不是确诊。关节表现与苏格兰折耳猫已知的健康问题相符，而反复呕吐需要单独的兽医检查。",
            beyondEyebrow: "不只有症状",
            beyondTitle: "Lotus 还是 Lotus。",
            beyondCopy:
                "他会和其他猫一起睡觉、伸展、有时玩耍、监督吃饭，而且很在意个人空间。网站应该诚实记录健康问题，但不能把他缩成一个疾病标签。"
        }
    return {
        eyebrow: "The main patient and the real heart of the project",
        title: "Meet Lotus.",
        copy: "Lotus is my cat. He is around five years old and has been described by his veterinarian as a Scottish Fold–Siamese mix. I started FoldCare because I wanted to understand what I was seeing in his everyday life.",
        observationsTitle: "What I’ve noticed",
        observations: [
            "He hesitates before some jumps and uses furniture as intermediate steps",
            "He dislikes being picked up and some handling appears uncomfortable",
            "He has clear issues involving his limbs and tail",
            "He still runs, plays and stretches sometimes",
            "He vomits frequently, especially after larger portions and sometimes after grooming"
        ],
        timelineHeading: "He was just my cat.",
        timelineCopy:
            "FoldCare did not start as a medical project. It started with living with Lotus, noticing small changes, asking questions and trying to understand what they meant.",
        earlier: "Lotus and me, earlier on.",
        current: "Lotus and me now.",
        distinctionTitle: "Observed ≠ diagnosed",
        distinctionCopy:
            "These are real observations from living with Lotus. They are not a confirmed diagnosis. His joint signs fit concerns seen with Scottish Fold osteochondrodysplasia, while his recurrent vomiting needs its own veterinary investigation.",
        beyondEyebrow: "Beyond symptoms",
        beyondTitle: "Lotus is still Lotus.",
        beyondCopy:
            "He sleeps with the other cats, stretches, plays sometimes, supervises meals and has strong opinions about personal space. The site should show his health honestly without reducing him to a disease."
    }
})

usePageSeo({
    title: computed(() => `${pageText.value.title} — FoldCare`),
    description: computed(() => pageText.value.copy),
    image: "/images/lotus/lotus-with-creator.jpg"
})
</script>

<template>
    <div>
        <LotusHero
            :eyebrow="pageText.eyebrow"
            :title="pageText.title"
            :copy="pageText.copy"
        />
        <div
            class="mx-auto max-w-7xl px-4 pt-12 pb-12 sm:px-5 sm:pb-16 lg:px-8 lg:pb-20"
        >
            <section class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <LotusObservationCard
                    :title="pageText.observationsTitle"
                    :items="pageText.observations"
                />
                <AppCalloutCard
                    :title="pageText.distinctionTitle"
                    :copy="pageText.distinctionCopy"
                    tone="peach"
                >
                    <FoldCatMascot class="mt-2" size="md" />
                </AppCalloutCard>
            </section>

            <LotusStoryTimeline
                class="mt-14"
                :heading="pageText.timelineHeading"
                :copy="pageText.timelineCopy"
                :earlier-caption="pageText.earlier"
                :current-caption="pageText.current"
            />

            <section
                class="bg-lilac-soft mt-14 rounded-[2.4rem] p-5 sm:p-7 lg:p-9"
            >
                <div
                    class="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
                >
                    <div>
                        <p
                            class="text-lilac text-sm font-semibold tracking-[0.18em] uppercase"
                        >
                            {{ pageText.beyondEyebrow }}
                        </p>
                        <h2
                            class="text-ink mt-3 text-3xl font-semibold tracking-tight"
                        >
                            {{ pageText.beyondTitle }}
                        </h2>
                        <p class="text-muted mt-4 leading-8">
                            {{ pageText.beyondCopy }}
                        </p>
                    </div>
                    <LotusPhotoGrid />
                </div>
            </section>
        </div>
    </div>
</template>
