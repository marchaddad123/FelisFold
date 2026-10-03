<script setup lang="ts">
import { editorialLabels, translated as t } from "~/data/editorialHelpers"
import { evidenceSources } from "~/data/evidenceSources"
import { lotusPhoto } from "~/data/editorialVisuals"
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const categories = [
    {
        title: t(
            "Veterinary references",
            "مراجع بيطرية",
            "Références vétérinaires",
            "兽医参考资料"
        ),
        copy: t(
            "Clinical explanations from veterinary schools and manuals.",
            "شروحات سريرية من كليات الطب البيطري والمراجع.",
            "Explications cliniques des écoles et manuels vétérinaires.",
            "来自兽医学院与手册的临床解释。"
        ),
        path: "/health"
    },
    {
        title: t(
            "Peer-reviewed papers",
            "أبحاث محكمة",
            "Articles évalués par les pairs",
            "同行评审论文"
        ),
        copy: t(
            "Methods, sample size and limitations matter alongside the findings.",
            "المنهج وحجم العينة والحدود مهمة إلى جانب النتائج.",
            "Méthodes, échantillons et limites comptent autant que les résultats.",
            "方法、样本量与局限和结果同样重要。"
        ),
        path: "/scottish-fold"
    },
    {
        title: t(
            "Professional organizations",
            "منظمات مهنية",
            "Organisations professionnelles",
            "专业组织"
        ),
        copy: t(
            "Practical guidance for nutrition, prevention and veterinary care.",
            "إرشادات عملية للتغذية والوقاية والعناية البيطرية.",
            "Conseils pratiques de nutrition, prévention et soins vétérinaires.",
            "营养、预防与兽医护理的实用指导。"
        ),
        path: "/nutrition"
    },
    {
        title: t(
            "Genetics labs",
            "مختبرات الوراثة",
            "Laboratoires de génétique",
            "遗传实验室"
        ),
        copy: t(
            "Testing information is different from guessing from appearance.",
            "معلومات الفحص تختلف عن التخمين من المظهر.",
            "Un test renseigne autrement qu'une apparence.",
            "检测信息不同于看外表猜测。"
        ),
        path: "/mixes"
    },
    {
        title: t(
            "Owner observations",
            "ملاحظات المالك",
            "Observations du propriétaire",
            "主人观察"
        ),
        copy: t(
            "Lotus's experience is a personal record, not scientific evidence.",
            "تجربة لوتس سجل شخصي وليست دليلاً علمياً.",
            "Le vécu de Lotus est un récit personnel, pas une preuve scientifique.",
            "Lotus 的经历是个人记录，不是科学证据。"
        ),
        path: "/lotus"
    }
]
const featured = [
    evidenceSources.genetics,
    evidenceSources.variation,
    evidenceSources.feeding,
    evidenceSources.foodSelection,
    evidenceSources.lifeStages
]
const trustworthy = [
    t(
        "Named author or institution",
        "مؤلف أو مؤسسة معروفة",
        "Auteur ou institution identifiés",
        "有署名的作者或机构"
    ),
    t(
        "Relevant expertise",
        "خبرة ذات صلة",
        "Expertise pertinente",
        "相关专业能力"
    ),
    t(
        "Methods and limitations",
        "المنهج والحدود",
        "Méthodes et limites",
        "方法与局限"
    ),
    t(
        "Publication date and context",
        "تاريخ النشر والسياق",
        "Date et contexte de publication",
        "发表日期与背景"
    )
]
const labels = {
    use: t(
        "How we use sources",
        "كيف نستخدم المصادر",
        "Comment nous utilisons les sources",
        "我们如何使用资料"
    ),
    topic: t(
        "Browse by topic",
        "تصفح حسب الموضوع",
        "Parcourir par sujet",
        "按主题浏览"
    ),
    featured: t(
        "Start with these references",
        "ابدأ بهذه المراجع",
        "Commencer par ces références",
        "从这些资料开始"
    ),
    trust: t(
        "What makes a source trustworthy?",
        "ما الذي يجعل المصدر موثوقاً؟",
        "Qu'est-ce qu'une source fiable ?",
        "什么让资料值得信赖？"
    ),
    caution: t(
        "Pause before trusting online advice",
        "تمهل قبل الوثوق بنصيحة عبر الإنترنت",
        "Avant de croire un conseil en ligne",
        "相信网上建议前先想一想"
    ),
    cautionCopy: t(
        "A viral clip, breed label or supplement advertisement is not a diagnosis. Check the original source, the species studied and what the evidence actually supports. Bring individual health questions to your vet.",
        "المقطع المنتشر أو اسم السلالة أو إعلان المكمل ليس تشخيصاً. تحقق من المصدر الأصلي والنوع المدروس وما تدعمه الأدلة فعلاً. ناقش الأسئلة الفردية مع الطبيب.",
        "Une vidéo virale, une race ou une publicité ne pose pas un diagnostic. Vérifiez la source originale, l'espèce étudiée et ce que les données soutiennent. Discutez des questions individuelles avec votre vétérinaire.",
        "热门视频、品种标签或补充剂广告不是诊断。查看原始来源、研究物种与证据实际支持什么。个体健康问题应与兽医讨论。"
    ),
    distinction: t(
        "Lotus's experience ≠ scientific evidence",
        "تجربة لوتس ≠ دليل علمي",
        "Le vécu de Lotus ≠ une preuve scientifique",
        "Lotus 的经历 ≠ 科学证据"
    )
}
</script>
<template>
    <section class="bg-sky-soft paper-texture px-5 pt-6 pb-12 sm:px-8">
        <div class="mx-auto max-w-[80rem]">
            <h2 class="text-ink text-3xl sm:text-4xl">
                {{ labels.use[languageCode] }}
            </h2>
            <div class="mt-7 grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
                <div class="divide-border divide-y">
                    <article
                        v-for="(category, index) in categories"
                        :key="category.path"
                        class="grid gap-3 py-4 sm:grid-cols-[2rem_1fr]"
                    >
                        <span
                            class="font-handwritten text-peach text-xl"
                            aria-hidden="true"
                            >0{{ index + 1 }}</span
                        >
                        <div>
                            <h3 class="text-ink text-2xl">
                                {{ category.title[languageCode] }}
                            </h3>
                            <p class="text-muted mt-2 text-sm leading-7">
                                {{ category.copy[languageCode] }}
                            </p>
                        </div>
                    </article>
                </div>
                <EditorialPhoto
                    :photo="lotusPhoto('lotus-glasses')"
                    frame
                    image-class="aspect-square"
                    class="self-center sm:rotate-2"
                />
            </div>
        </div>
    </section>
    <section class="bg-cream px-5 py-10 sm:px-8">
        <div class="mx-auto max-w-[80rem]">
            <h2 class="text-ink text-3xl">{{ labels.topic[languageCode] }}</h2>
            <nav class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <NuxtLink
                    v-for="link in [
                        {
                            path: '/scottish-fold',
                            label: editorialLabels.breed
                        },
                        { path: '/health', label: editorialLabels.healthCare },
                        {
                            path: '/nutrition',
                            label: t(
                                'Nutrition',
                                'التغذية',
                                'Nutrition',
                                '营养'
                            )
                        },
                        { path: '/mixes', label: editorialLabels.mixes },
                        {
                            path: '/care',
                            label: t(
                                'Everyday care',
                                'العناية اليومية',
                                'Soins quotidiens',
                                '日常护理'
                            )
                        },
                        { path: '/lotus', label: editorialLabels.lotus }
                    ]"
                    :key="link.path"
                    :to="localizedPath(link.path)"
                    class="border-border text-peach flex min-h-14 items-center justify-between gap-3 border-b font-semibold"
                    >{{ link.label[languageCode] }}
                    <span aria-hidden="true">→</span></NuxtLink
                >
            </nav>
        </div>
    </section>
    <section class="bg-peach-soft px-5 py-12 sm:px-8">
        <div class="mx-auto max-w-[80rem]">
            <h2 class="text-ink text-3xl sm:text-4xl">
                {{ labels.featured[languageCode] }}
            </h2>
            <div class="mt-7"><HealthSourceList :sources="featured" /></div>
        </div>
    </section>
    <section class="bg-cream px-5 py-12 sm:px-8">
        <div class="mx-auto grid max-w-[80rem] gap-8 lg:grid-cols-2">
            <div>
                <h2 class="text-ink text-3xl">
                    {{ labels.trust[languageCode] }}
                </h2>
                <ul class="divide-border text-muted mt-5 divide-y">
                    <li v-for="item in trustworthy" :key="item.en" class="py-4">
                        {{ item[languageCode] }}
                    </li>
                </ul>
            </div>
            <div class="bg-sky-soft rounded-[2rem] p-7">
                <h2 class="text-ink text-3xl">
                    {{ labels.caution[languageCode] }}
                </h2>
                <p class="text-muted mt-5 leading-8">
                    {{ labels.cautionCopy[languageCode] }}
                </p>
                <CatIllustration sleeping class="mt-5" />
            </div>
        </div>
    </section>
    <PhotoStoryStrip
        :title="labels.distinction"
        :copy="categories[4]!.copy"
        :photos="[
            lotusPhoto('lotus-with-creator-younger'),
            lotusPhoto('lotus-posture'),
            lotusPhoto('lotus-feeding')
        ]"
    />
    <CatRestingDivider />
</template>
