<script setup lang="ts">
import { creatorProfile } from "~/data/creatorProfile"
import { isLanguageCode } from "~/utils/languages"

definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()

const pageText = computed(() => {
    if (languageCode.value === "ar")
        return {
            eyebrow: "عن المؤسس",
            title: "قصة لوتس، بناها مارك لتفيد كل Fold.",
            intro: "FelisFold مشروع شخصي وتثقيفي يجمع بين تجربة معيشة حقيقية، وبحث موثق، وحرفة برمجية تهتم بالتفاصيل.",
            storyEyebrow: "لماذا بدأ الموقع",
            storyTitle: "بدأ بسؤال بسيط: ماذا أحاول أن أفهم؟",
            workEyebrow: "خلفية تقنية",
            workTitle: "الهندسة هي طريقة البناء، ولوتس هو السبب.",
            whatTitle: "ما هو FelisFold",
            whatItems: [
                "مساحة تعليمية توضّح صحة Scottish Fold والعناية اليومية بلغة بسيطة.",
                "قصة شخصية تفصل دائماً بين ما لوحظ عند لوتس وما تقوله الأدلة العامة.",
                "مشروع مستقل يربط كل ادعاء صحي مهم بمصادر موثوقة كلما أمكن."
            ],
            notTitle: "ما ليس عليه FelisFold",
            notItems: [
                "ليس عيادة بيطرية أو خدمة تشخيص.",
                "لا يفترض أن تجربة لوتس تمثل كل Scottish Fold.",
                "لا يستبدل فحص الطبيب البيطري أو خطة العلاج الفردية."
            ],
            socialTitle: "اعثر على مارك عبر الإنترنت",
            socialCopy:
                "الهوية نفسها خلف التصميم والكود والمحتوى: حسابات حقيقية وروابط مباشرة."
        }
    if (languageCode.value === "fr")
        return {
            eyebrow: "À propos du créateur",
            title: `L'histoire de Lotus, construite par ${creatorProfile.name} pour chaque Fold.`,
            intro: "FelisFold est un projet personnel et éducatif qui réunit une expérience vécue, une recherche sourcée et un travail logiciel attentif aux détails.",
            storyEyebrow: "Pourquoi le site existe",
            storyTitle:
                "Tout a commencé par une question simple : qu'est-ce que j'essaie de comprendre ?",
            workEyebrow: "Parcours technique",
            workTitle:
                "L'ingénierie est la façon de construire. Lotus est la raison.",
            whatTitle: "Ce qu'est FelisFold",
            whatItems: [
                "Un espace éducatif qui explique la santé du Scottish Fold et les soins quotidiens en langage clair.",
                "Une histoire personnelle qui distingue toujours les observations sur Lotus des connaissances générales.",
                "Un projet indépendant qui relie les affirmations de santé importantes à des sources fiables chaque fois que possible."
            ],
            notTitle: "Ce que FelisFold n'est pas",
            notItems: [
                "Ce n'est ni une clinique vétérinaire ni un service de diagnostic.",
                "Il ne suppose pas que l'expérience de Lotus représente tous les Scottish Folds.",
                "Il ne remplace pas un examen vétérinaire ou un plan de soins individuel."
            ],
            socialTitle: `Retrouver ${creatorProfile.name} en ligne`,
            socialCopy:
                "La même identité est derrière le design, le code et le contenu : des comptes réels et des liens directs."
        }
    if (languageCode.value === "zh")
        return {
            eyebrow: "关于创作者",
            title: `Lotus 的故事，由 ${creatorProfile.name} 为每一只 Fold 打造。`,
            intro: "FelisFold 是一个个人科普项目，把真实生活经验、可查证资料和注重细节的软件工程结合在一起。",
            storyEyebrow: "网站为何存在",
            storyTitle: "一切从一个简单问题开始：我究竟想弄明白什么？",
            workEyebrow: "技术背景",
            workTitle: "工程是实现方式，Lotus 是开始的原因。",
            whatTitle: "FelisFold 是什么",
            whatItems: [
                "用清楚语言解释苏格兰折耳猫健康与日常护理的科普空间。",
                "始终区分 Lotus 的个人观察与通用研究结论的真实故事。",
                "尽可能为重要健康说法链接可靠来源的独立项目。"
            ],
            notTitle: "FelisFold 不是什么",
            notItems: [
                "不是兽医诊所或诊断服务。",
                "不会假设 Lotus 的经历代表每一只苏格兰折耳猫。",
                "不能替代兽医检查或个别治疗方案。"
            ],
            socialTitle: `在网上找到 ${creatorProfile.name}`,
            socialCopy:
                "设计、代码与内容背后是同一个真实身份：真实账号，直接链接。"
        }
    return {
        eyebrow: "About the creator",
        title: `Lotus's story, built by ${creatorProfile.name} for every Fold.`,
        intro: "FelisFold is a personal, educational project that brings together lived experience, sourced research and detail-minded software craft.",
        storyEyebrow: "Why the site exists",
        storyTitle:
            "It began with a simple question: what am I trying to understand?",
        workEyebrow: "Technical background",
        workTitle: "Engineering is how it is built. Lotus is why.",
        whatTitle: "What FelisFold is",
        whatItems: [
            "An educational space explaining Scottish Fold health and daily care in plain language.",
            "A personal story that always separates observations about Lotus from broader evidence.",
            "An independent project that links important health claims to trustworthy sources whenever possible."
        ],
        notTitle: "What FelisFold is not",
        notItems: [
            "It is not a veterinary clinic or diagnosis service.",
            "It does not assume Lotus's experience represents every Scottish Fold.",
            "It does not replace a veterinary examination or individual care plan."
        ],
        socialTitle: `Find ${creatorProfile.name} online`,
        socialCopy:
            "The same identity sits behind the design, code and content: real accounts and direct links."
    }
})

usePageSeo({
    title: computed(() => `${pageText.value.title} — FelisFold`),
    description: computed(() => creatorProfile.shortBio[languageCode.value]),
    image: creatorProfile.creatorWithLotusPhoto.sourcePath
})
</script>

<template>
    <div>
        <section class="paper-texture px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
            <div
                class="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center"
            >
                <div>
                    <p
                        class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        {{ pageText.eyebrow }}
                    </p>
                    <h1
                        class="font-editorial text-ink mt-3 max-w-4xl text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
                    >
                        {{ pageText.title }}
                    </h1>
                    <p class="text-muted mt-6 max-w-3xl text-xl leading-9">
                        {{ pageText.intro }}
                    </p>
                    <div class="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                        <span class="text-ink font-bold">{{
                            creatorProfile.name
                        }}</span>
                        <span class="text-muted">{{
                            creatorProfile.onlineName
                        }}</span>
                        <span class="text-muted">{{
                            creatorProfile.location[languageCode]
                        }}</span>
                    </div>
                </div>
                <figure class="relative mx-auto w-full max-w-lg lg:mx-0">
                    <NuxtImg
                        :src="creatorProfile.creatorWithLotusPhoto.sourcePath"
                        :alt="
                            creatorProfile.creatorWithLotusPhoto.altText[
                                languageCode
                            ]
                        "
                        :width="creatorProfile.creatorWithLotusPhoto.width"
                        :height="creatorProfile.creatorWithLotusPhoto.height"
                        sizes="100vw sm:520px lg:42vw"
                        format="webp"
                        :quality="86"
                        preload
                        loading="eager"
                        fetchpriority="high"
                        decoding="async"
                        placeholder
                        class="aspect-[4/3] w-full rounded-[48%_48%_1.5rem_1.5rem] object-cover"
                        :style="{
                            objectPosition:
                                creatorProfile.creatorWithLotusPhoto
                                    .objectPosition
                        }"
                    />
                    <figcaption
                        class="bg-paper text-ink absolute end-3 -bottom-5 -rotate-2 px-5 py-3 font-semibold shadow-xl"
                    >
                        {{ creatorProfile.relationshipToLotus[languageCode] }} ♡
                    </figcaption>
                </figure>
            </div>
        </section>

        <section class="bg-sky-soft paper-texture px-4 py-14 sm:px-6 sm:py-20">
            <div
                class="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-[0.72fr_1.28fr]"
            >
                <div>
                    <p
                        class="text-sky text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        {{ pageText.storyEyebrow }}
                    </p>
                    <h2
                        class="font-editorial text-ink mt-3 text-4xl leading-tight sm:text-5xl"
                    >
                        {{ pageText.storyTitle }}
                    </h2>
                </div>
                <div class="text-muted space-y-5 text-lg leading-8">
                    <p
                        v-for="paragraph in creatorProfile.longBio[
                            languageCode
                        ]"
                        :key="paragraph"
                    >
                        {{ paragraph }}
                    </p>
                </div>
            </div>
        </section>

        <section class="paper-texture px-4 py-14 sm:px-6 sm:py-20">
            <div class="mx-auto max-w-[90rem]">
                <div class="grid gap-7 lg:grid-cols-[0.72fr_1.28fr]">
                    <div>
                        <p
                            class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                        >
                            {{ pageText.workEyebrow }}
                        </p>
                        <h2
                            class="font-editorial text-ink mt-3 text-4xl leading-tight sm:text-5xl"
                        >
                            {{ pageText.workTitle }}
                        </h2>
                    </div>
                    <div class="border-peach/50 border-s-4 ps-6">
                        <p class="text-ink text-xl font-bold">
                            {{ creatorProfile.jobTitle[languageCode] }}
                        </p>
                        <p class="text-muted mt-4 text-lg leading-8">
                            {{ creatorProfile.background[languageCode] }}
                        </p>
                    </div>
                </div>
                <div class="mt-14 grid gap-10 lg:grid-cols-2">
                    <section aria-labelledby="felisfold-is-title">
                        <h2
                            id="felisfold-is-title"
                            class="font-editorial text-ink text-3xl"
                        >
                            {{ pageText.whatTitle }}
                        </h2>
                        <ul class="mt-5 space-y-4">
                            <li
                                v-for="item in pageText.whatItems"
                                :key="item"
                                class="text-muted border-sage/35 border-s-2 ps-4 leading-7"
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </section>
                    <section aria-labelledby="felisfold-is-not-title">
                        <h2
                            id="felisfold-is-not-title"
                            class="font-editorial text-ink text-3xl"
                        >
                            {{ pageText.notTitle }}
                        </h2>
                        <ul class="mt-5 space-y-4">
                            <li
                                v-for="item in pageText.notItems"
                                :key="item"
                                class="text-muted border-peach/35 border-s-2 ps-4 leading-7"
                            >
                                {{ item }}
                            </li>
                        </ul>
                        <p class="text-muted mt-6 text-sm leading-6">
                            {{ creatorProfile.notVeterinarian[languageCode] }}
                        </p>
                    </section>
                </div>
            </div>
        </section>

        <section
            class="bg-peach-soft paper-texture px-4 py-14 sm:px-6 sm:py-20"
        >
            <div class="mx-auto max-w-[90rem]">
                <div
                    class="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start"
                >
                    <div>
                        <h2 class="font-editorial text-ink text-4xl">
                            {{ pageText.socialTitle }}
                        </h2>
                        <p class="text-muted mt-4 leading-7">
                            {{ pageText.socialCopy }}
                        </p>
                    </div>
                    <CreatorSocialLinks variant="full" />
                </div>
            </div>
        </section>
    </div>
</template>
