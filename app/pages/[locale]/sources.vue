<script setup lang="ts">
import { isLanguageCode } from "~/utils/languages"
import { licensedScottishFoldPhotos } from "~/data/cats"
import { creatorProfile } from "~/data/creatorProfile"

definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()

const sourceGroups = computed(() => [
    {
        title:
            languageCode.value === "ar"
                ? "جينات Scottish Fold والمفاصل"
                : languageCode.value === "fr"
                  ? "Génétique du Scottish Fold et articulations"
                  : languageCode.value === "zh"
                    ? "苏格兰折耳猫基因与关节"
                    : "Scottish Fold genetics & joints",
        items: [
            [
                "UC Davis Veterinary Genetics Laboratory — Scottish Fold/TRPV4",
                "https://vgl.ucdavis.edu/test/scottish-fold"
            ],
            [
                "2023 genetic and radiographic evaluation of Scottish Fold osteochondrodysplasia",
                "https://pmc.ncbi.nlm.nih.gov/articles/PMC10811760/"
            ],
            [
                "2024 ISFM/AAFP long-term NSAID guidelines for cats",
                "https://journals.sagepub.com/doi/10.1177/1098612X241241951"
            ]
        ]
    },
    {
        title:
            languageCode.value === "ar"
                ? "القيء وكرات الشعر وصحة القط العامة"
                : languageCode.value === "fr"
                  ? "Vomissements, boules de poils et santé générale"
                  : languageCode.value === "zh"
                    ? "呕吐、毛球与猫咪整体健康"
                    : "Vomiting, hairballs & general cat health",
        items: [
            [
                "Cornell Feline Health Center — Vomiting",
                "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/vomiting"
            ],
            [
                "Merck Veterinary Manual — Vomiting in Cats",
                "https://www.merckvetmanual.com/cat-owners/digestive-disorders-of-cats/vomiting-in-cats"
            ],
            [
                "Merck Veterinary Manual — Managing Hairballs in Cats",
                "https://www.merckvetmanual.com/multimedia/table/managing-hairballs-in-cats"
            ],
            [
                "Merck Veterinary Manual — Routine Health Care of Cats",
                "https://www.merckvetmanual.com/cat-owners/caring-for-cats/routine-health-care-of-cats"
            ]
        ]
    },
    {
        title:
            languageCode.value === "ar"
                ? "الكلى"
                : languageCode.value === "fr"
                  ? "Reins"
                  : languageCode.value === "zh"
                    ? "肾脏"
                    : "Kidneys",
        items: [
            [
                "UC Davis Veterinary Genetics Laboratory — PKD1",
                "https://vgl.ucdavis.edu/test/pkd1-cat"
            ]
        ]
    },
    {
        title:
            languageCode.value === "ar"
                ? "القلب"
                : languageCode.value === "fr"
                  ? "Cœur"
                  : languageCode.value === "zh"
                    ? "心脏"
                    : "Heart",
        items: [
            [
                "Cornell Feline Health Center — Hypertrophic Cardiomyopathy",
                "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/hypertrophic-cardiomyopathy"
            ],
            [
                "Merck Veterinary Manual — Hypertrophic Cardiomyopathy in Dogs and Cats",
                "https://www.merckvetmanual.com/circulatory-system/cardiomyopathy-in-dogs-and-cats/hypertrophic-cardiomyopathy-in-dogs-and-cats"
            ]
        ]
    }
])

const pageText = computed(() => {
    if (languageCode.value === "ar")
        return {
            eyebrow: "رف المصادر",
            title: "من أين تأتي المعلومات الصحية؟",
            copy: "نفضّل الجامعات البيطرية والمراجع المهنية والدراسات المحكمة على المدونات المجهولة.",
            ruleTitle: "قاعدة التحرير",
            ruleCopy:
                "أي ادعاء صحي عن Scottish Fold يجب أن يرتبط بمصدر بيطري أو علمي عندما يكون ذلك ممكناً. تجربة لوتس تُعرض كتجربة شخصية وليست كحقيقة طبية عامة.",
            review: "تاريخ مراجعة المحتوى الحالي: 28 سبتمبر 2026.",
            curatorTitle: "من يراجع محتوى FelisFold؟",
            curatorCopy:
                "يبحث مارك في كل موضوع ويحرره، مع إبقاء تجربة لوتس منفصلة بوضوح عن الأدلة البيطرية العامة."
        }
    if (languageCode.value === "fr")
        return {
            eyebrow: "Bibliothèque de sources",
            title: "D'où viennent les informations santé ?",
            copy: "Nous privilégions les écoles vétérinaires, les références professionnelles et les études évaluées par les pairs plutôt que les blogs anonymes.",
            ruleTitle: "Règle éditoriale",
            ruleCopy:
                "Une affirmation sur la santé du Scottish Fold doit être reliée à une source vétérinaire ou scientifique lorsque c'est possible. L'expérience de Lotus est présentée comme une expérience personnelle, pas comme une vérité médicale universelle.",
            review: "Date de révision du contenu actuel : 28 septembre 2026.",
            curatorTitle: "Qui organise le contenu de FelisFold ?",
            curatorCopy: `${creatorProfile.name} recherche et édite chaque sujet, en gardant l'expérience de Lotus clairement séparée des données vétérinaires générales.`
        }
    if (languageCode.value === "zh")
        return {
            eyebrow: "资料库",
            title: "健康信息来自哪里？",
            copy: "我们优先使用兽医学院、专业手册、指南和同行评审研究，而不是匿名宠物博客。",
            ruleTitle: "编辑规则",
            ruleCopy:
                "关于苏格兰折耳猫健康的主张，应尽可能连接到兽医或科学来源。Lotus 的经历明确标为个人经历，不会包装成普遍医学事实。",
            review: "当前内容审核日期：2026 年 9 月 28 日。",
            curatorTitle: "谁在整理 FelisFold 的内容？",
            curatorCopy: `${creatorProfile.name} 研究并编辑每个主题，同时始终把 Lotus 的个人经历与通用兽医证据清楚分开。`
        }
    return {
        eyebrow: "Evidence shelf",
        title: "Where the health information comes from",
        copy: "We prefer veterinary schools, professional manuals, guidelines and peer-reviewed research over anonymous pet blogs.",
        ruleTitle: "Editorial rule",
        ruleCopy:
            "A claim about Scottish Fold health should be connected to a veterinary or peer-reviewed source when possible. Lotus's personal experience is labelled as personal experience, not turned into a universal medical claim.",
        review: "Current content review date: 28 September 2026.",
        curatorTitle: "Who curates FelisFold?",
        curatorCopy: `${creatorProfile.name} researches and edits each topic, keeping Lotus's experience clearly separate from broader veterinary evidence.`
    }
})

usePageSeo({
    title: computed(() => `${pageText.value.title} — FelisFold`),
    description: computed(() => pageText.value.copy)
})
</script>

<template>
    <div class="mx-auto max-w-5xl px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20">
        <div class="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <AppSectionHeading
                :eyebrow="pageText.eyebrow"
                :title="pageText.title"
                :copy="pageText.copy"
                :heading-level="1"
            />
            <NuxtImg
                src="/images/lotus/lotus-glasses.jpg"
                alt="Lotus wearing glasses"
                width="1536"
                height="1333"
                sizes="180px"
                format="webp"
                :quality="82"
                loading="lazy"
                class="hidden size-36 rounded-[2rem] object-cover md:block"
            />
        </div>

        <div class="mt-10 space-y-5">
            <section
                v-for="group in sourceGroups"
                :key="group.title"
                class="border-border bg-paper rounded-[2rem] border p-6 sm:p-8"
            >
                <h2 class="text-ink text-xl font-semibold">
                    {{ group.title }}
                </h2>
                <ul class="mt-5 space-y-4">
                    <li v-for="item in group.items" :key="item[1]">
                        <a
                            :href="item[1]"
                            target="_blank"
                            rel="noreferrer"
                            class="text-lilac font-medium underline-offset-4 hover:underline"
                            >{{ item[0] }}</a
                        >
                    </li>
                </ul>
            </section>
        </div>

        <section class="mt-10" aria-labelledby="curator-title">
            <h2 id="curator-title" class="font-editorial text-ink text-3xl">
                {{ pageText.curatorTitle }}
            </h2>
            <p class="text-muted mt-3 max-w-3xl leading-7">
                {{ pageText.curatorCopy }}
            </p>
            <CreatorMiniProfile class="mt-6" />
            <p class="text-muted mt-5 max-w-3xl text-sm leading-6">
                {{ creatorProfile.notVeterinarian[languageCode] }}
            </p>
        </section>

        <section
            class="border-border bg-paper mt-10 rounded-[2rem] border p-6 sm:p-8"
        >
            <h2 class="text-ink text-2xl font-semibold">
                Licensed photo credits
            </h2>
            <p class="text-muted mt-3 max-w-3xl leading-7">
                These Scottish Fold photos are illustrative. Appearance does not
                verify pedigree, Fd/Fd genotype, or an individual cat's health
                history.
            </p>
            <ul class="mt-6 grid gap-4 sm:grid-cols-2">
                <li
                    v-for="cat in licensedScottishFoldPhotos"
                    :key="cat.id"
                    class="border-border grid grid-cols-[5rem_1fr] gap-4 rounded-2xl border p-3"
                >
                    <NuxtImg
                        :src="cat.photo"
                        :alt="cat.name"
                        :width="cat.width"
                        :height="cat.height"
                        sizes="80px"
                        format="webp"
                        :quality="76"
                        loading="lazy"
                        class="aspect-square size-20 rounded-xl object-cover"
                        :style="{
                            objectPosition: cat.objectPosition ?? 'center'
                        }"
                    />
                    <div class="min-w-0">
                        <h3 class="text-ink font-semibold">{{ cat.name }}</h3>
                        <p class="text-muted mt-1 text-sm">
                            {{ cat.photographer }} · {{ cat.photoSource }} ·
                            {{ cat.license }}
                        </p>
                        <div
                            class="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm"
                        >
                            <a
                                v-if="cat.sourceUrl"
                                :href="cat.sourceUrl"
                                target="_blank"
                                rel="noreferrer"
                                class="text-lilac underline-offset-4 hover:underline"
                                >Source</a
                            >
                            <a
                                v-if="cat.licenseUrl"
                                :href="cat.licenseUrl"
                                target="_blank"
                                rel="noreferrer"
                                class="text-lilac underline-offset-4 hover:underline"
                                >License</a
                            >
                        </div>
                    </div>
                </li>
            </ul>
        </section>

        <section class="bg-sage-soft mt-10 rounded-[2rem] p-6 sm:p-8">
            <h2 class="text-ink text-2xl font-semibold">
                {{ pageText.ruleTitle }}
            </h2>
            <p class="text-muted mt-4 leading-8">{{ pageText.ruleCopy }}</p>
            <p class="text-muted mt-3 text-sm">{{ pageText.review }}</p>
        </section>
    </div>
</template>
