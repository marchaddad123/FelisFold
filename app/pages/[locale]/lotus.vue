<script setup lang="ts">
import { isLanguageCode } from "~/utils/languages"
import { lotusTimeline } from "~/data/lotusTimeline"

definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()
const siblingPhotos = [
    {
        src: "/images/lotus/lotus-cuddling.jpg",
        width: 1152,
        height: 1536
    },
    {
        src: "/images/lotus/lotus-family.jpg",
        width: 1536,
        height: 1152
    },
    { src: "/images/lotus/lotus-cozy.jpg", width: 864, height: 1536 }
]

const pageText = computed(() => {
    if (languageCode.value === "ar")
        return {
            eyebrow: "المريض الرئيسي والقلب الحقيقي للمشروع",
            title: "تعرّف على لوتس.",
            copy: "لوتس هو قطّي. عمره نحو خمس سنوات، ووصفه طبيبه البيطري بأنه مزيج Scottish Fold–Siamese. بدأت FelisFold لأنني أردت فهم ما أراه في حياته اليومية.",
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
                "لم تبدأ FelisFold كمشروع طبي. بدأت مع العيش مع لوتس وملاحظة تغيّرات صغيرة وطرح أسئلة.",
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
            copy: "Lotus est mon chat. Il a environ cinq ans et son vétérinaire l'a décrit comme un croisé Scottish Fold–Siamois. J'ai créé FelisFold pour comprendre ce que je voyais dans sa vie quotidienne.",
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
                "FelisFold n'a pas commencé comme un projet médical. Il a commencé en vivant avec Lotus, en remarquant de petits changements et en posant des questions.",
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
            copy: "Lotus 是我的猫，大约五岁。兽医曾把他描述为 Scottish Fold–Siamese 混种。我做 FelisFold，是因为我想弄清楚日常生活里在他身上发生的变化。",
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
                "FelisFold 并不是从一个医疗项目开始的，而是从和 Lotus 一起生活、注意到细微变化并不断提问开始的。",
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
        copy: "Lotus is my cat. He is around five years old and has been described by his veterinarian as a Scottish Fold–Siamese mix. I started FelisFold because I wanted to understand what I was seeing in his everyday life.",
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
            "FelisFold did not start as a medical project. It started with living with Lotus, noticing small changes, asking questions and trying to understand what they meant.",
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
    title: computed(() => `${pageText.value.title} — FelisFold`),
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

        <section class="bg-sky-soft paper-texture px-4 pb-12 sm:px-6 sm:pb-16">
            <div
                class="mx-auto grid max-w-[90rem] gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"
            >
                <div>
                    <p
                        class="text-sky text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        Lotus at a glance
                    </p>
                    <h2 class="font-editorial text-ink mt-2 text-4xl">
                        Curious, affectionate and completely himself.
                    </h2>
                    <p class="text-muted mt-4 leading-7">
                        A quiet observer, dedicated meal supervisor and
                        professional nap companion.
                    </p>
                </div>
                <dl
                    class="border-sky/20 grid grid-cols-2 border-s border-t sm:grid-cols-5"
                >
                    <div
                        v-for="fact in [
                            ['Name', 'Lotus'],
                            ['Age', 'About 5'],
                            ['Breed', 'Scottish Fold mix'],
                            ['Personality', 'Gentle & curious'],
                            ['Family', 'Human + cat siblings']
                        ]"
                        :key="fact[0]"
                        class="border-sky/20 border-e border-b p-4"
                    >
                        <dt class="text-muted text-xs uppercase">
                            {{ fact[0] }}
                        </dt>
                        <dd class="font-editorial text-ink mt-2 text-lg">
                            {{ fact[1] }}
                        </dd>
                    </div>
                </dl>
            </div>
        </section>

        <section
            id="lotus-story"
            class="paper-texture px-4 py-14 sm:px-6 sm:py-20"
        >
            <div
                class="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
            >
                <div>
                    <p
                        class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        Our story
                    </p>
                    <h2 class="font-editorial text-ink mt-2 text-5xl">
                        How I met Lotus.
                    </h2>
                    <p class="text-muted mt-5 text-lg leading-8">
                        {{ pageText.timelineCopy }} He was different from the
                        start: calm, observant, endlessly curious and impossible
                        not to love.
                    </p>
                    <p class="text-muted mt-4 leading-7">
                        Over time, small changes in movement, eating and
                        vomiting made me look more carefully. I wanted to
                        understand without guessing—and that path eventually
                        became FelisFold.
                    </p>
                    <div class="border-peach/40 mt-6 border-s-2 ps-4">
                        <h3 class="font-editorial text-ink text-2xl">
                            {{ pageText.distinctionTitle }}
                        </h3>
                        <p class="text-muted mt-2 text-sm leading-6">
                            {{ pageText.distinctionCopy }}
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-5">
                    <PhotoNoteCard
                        src="/images/lotus/lotus-with-creator-younger.jpg"
                        alt="Lotus with his owner when younger"
                        :width="1152"
                        :height="1536"
                        :caption="pageText.earlier"
                        rotate="left"
                    /><PhotoNoteCard
                        src="/images/lotus/lotus-family.jpg"
                        alt="Lotus resting with his cat family"
                        :width="1536"
                        :height="1152"
                        caption="Brothers. Best naps."
                        rotate="right"
                    />
                </div>
            </div>

            <div class="mx-auto mt-16 max-w-[90rem]">
                <h3 class="font-editorial text-ink text-3xl">
                    Key moments in our journey
                </h3>
                <ol
                    class="border-peach/40 mt-7 grid border-t sm:grid-cols-3 lg:grid-cols-6"
                >
                    <li
                        v-for="moment in lotusTimeline"
                        :key="moment.year"
                        class="border-border relative border-e px-4 pt-6 pb-4"
                    >
                        <span
                            class="bg-peach ring-cream absolute start-4 -top-1.5 size-3 rounded-full ring-4"
                        />
                        <p class="text-peach font-bold">{{ moment.year }}</p>
                        <h4
                            class="font-editorial text-ink mt-2 text-lg leading-tight"
                        >
                            {{ moment.title }}
                        </h4>
                        <p class="text-muted mt-2 text-xs leading-5">
                            {{ moment.copy }}
                        </p>
                    </li>
                </ol>
            </div>
        </section>

        <section
            class="dark-panel organic-top paper-texture px-4 py-14 sm:px-6 sm:py-20"
        >
            <div
                class="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-[0.66fr_1.34fr] lg:items-center"
            >
                <div>
                    <p
                        class="text-xs font-bold tracking-[0.2em] text-[#efb79e] uppercase"
                    >
                        Daily life
                    </p>
                    <h2 class="font-editorial mt-2 text-5xl text-[#fffaf1]">
                        {{ pageText.beyondTitle }}
                    </h2>
                    <p class="mt-4 leading-7 text-[#c8d5cf]">
                        {{ pageText.beyondCopy }}
                    </p>
                </div>
                <div class="grid gap-4 sm:grid-cols-3">
                    <figure
                        v-for="photo in [
                            {
                                src: '/images/lotus/lotus-family.jpg',
                                w: 1536,
                                h: 1152,
                                title: 'Lots of rest'
                            },
                            {
                                src: '/images/lotus/lotus-sunlight.jpg',
                                w: 1152,
                                h: 1536,
                                title: 'Gentle play'
                            },
                            {
                                src: '/images/lotus/lotus-feeding.jpg',
                                w: 1152,
                                h: 1536,
                                title: 'Good appetite days'
                            }
                        ]"
                        :key="photo.src"
                        class="border border-white/15 bg-white/5"
                    >
                        <NuxtImg
                            :src="photo.src"
                            :alt="photo.title"
                            :width="photo.w"
                            :height="photo.h"
                            sizes="100vw sm:33vw"
                            format="webp"
                            :quality="82"
                            loading="lazy"
                            decoding="async"
                            placeholder
                            class="aspect-[4/3] w-full object-cover"
                        />
                        <figcaption
                            class="font-editorial p-4 text-xl text-[#fffaf1]"
                        >
                            {{ photo.title }}
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>

        <section class="bg-paper paper-texture px-4 py-14 sm:px-6 sm:py-20">
            <div
                class="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"
            >
                <div>
                    <p
                        class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        His cat siblings
                    </p>
                    <h2 class="font-editorial text-ink mt-2 text-4xl">
                        Same home. Different personalities.
                    </h2>
                    <p class="text-muted mt-4 leading-7">
                        Lotus shares his life with feline siblings. They are
                        part of his real story, not invented case studies or
                        medical testimonials.
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    <NuxtImg
                        v-for="photo in siblingPhotos"
                        :key="photo.src"
                        :src="photo.src"
                        alt="Lotus spending time with his cat family"
                        :width="photo.width"
                        :height="photo.height"
                        sizes="50vw sm:30vw"
                        format="webp"
                        :quality="80"
                        loading="lazy"
                        decoding="async"
                        placeholder
                        class="photo-paper aspect-square w-full object-cover"
                    />
                </div>
            </div>
        </section>

        <section class="px-4 py-14 sm:px-6 sm:py-20">
            <div class="mx-auto max-w-[90rem]">
                <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                    <LotusObservationCard
                        :title="pageText.observationsTitle"
                        :items="pageText.observations"
                    />
                    <div class="bg-sage-soft p-6 sm:p-8">
                        <p
                            class="text-sage text-xs font-bold tracking-[0.2em] uppercase"
                        >
                            What I learned
                        </p>
                        <h2 class="font-editorial text-ink mt-2 text-4xl">
                            Observe honestly. Research carefully. Ask for help.
                        </h2>
                        <ul class="text-muted mt-5 space-y-4">
                            <li>✓ Watch movement and posture over time.</li>
                            <li>
                                ✓ Record eating habits and vomiting details.
                            </li>
                            <li>
                                ✓ Make the home easier without removing choice.
                            </li>
                            <li>
                                ✓ Keep veterinary decisions with a veterinarian.
                            </li>
                            <li>✓ Cherish the good days together.</li>
                        </ul>
                    </div>
                </div>
                <div class="mt-12 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
                    <div>
                        <p
                            class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                        >
                            Why FelisFold exists
                        </p>
                        <h2 class="font-editorial text-ink mt-2 text-4xl">
                            One cat's story. Better questions for many.
                        </h2>
                        <p class="text-muted mt-4 leading-7">
                            FelisFold exists because of Lotus. His health
                            questions led me to search for clearer, more
                            trustworthy information—and to build a resource that
                            keeps personal observation, veterinary evidence and
                            individual diagnosis in their proper places.
                        </p>
                    </div>
                    <PhotoNoteCard
                        src="/images/lotus/lotus-with-creator.jpg"
                        alt="Lotus with his owner"
                        :width="864"
                        :height="1536"
                        :caption="pageText.current"
                        rotate="right"
                    />
                </div>
            </div>
        </section>
        <TrustStrip />
    </div>
</template>
