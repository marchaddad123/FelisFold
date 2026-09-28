<script setup lang="ts">
import { isLanguageCode } from "~/utils/languages"

definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()

type NutritionPageText = {
    eyebrow: string
    title: string
    description: string
    cards: Array<[title: string, copy: string]>
    lotusEyebrow: string
    lotusTitle: string
    lotusCopy: string
    tracker: string
    warningTitle: string
    warningCopy: string
}
const cardTones = ["sage", "lilac", "sky", "peach"] as const

const pageText = computed<NutritionPageText>(() => {
    if (languageCode.value === "ar") {
        return {
            eyebrow: "الغذاء",
            title: "الغذاء، القيء والوزن",
            description: "مبادئ عملية قبل أن نغيّر غذاء القط بشكل عشوائي.",
            cards: [
                [
                    "وجبات صغيرة ومقاسة",
                    "إذا كان القط يعيد الطعام بعد الوجبات الكبيرة، فقد تكون الوجبات الصغيرة المقاسة أسهل إلى أن يتم التحقيق في السبب. سجّل الغرامات والتوقيت بدلاً من التخمين."
                ],
                [
                    "التغذية الكاملة مهمة",
                    "الغذاء المنزلي طويل الأمد يحتاج إلى تاورين وكالسيوم وفوسفور وفيتامينات ودهون أساسية وعناصر دقيقة بالنسب الصحيحة. اللحم وحده ليس غذاءً كاملاً للقطط."
                ],
                [
                    "الطعام الرطب يساعد على الترطيب",
                    "الغذاء الرطب الكامل قد يزيد استهلاك الماء ويسهّل قياس الحصص الصغيرة. أفضل نظام يبقى مرتبطاً بحالة القط ونتائج الفحوص."
                ],
                [
                    "تجربة الحمية يجب أن تكون صارمة",
                    "إذا أوصى الطبيب بحمية بروتين متحلل أو بروتين جديد، فإن المكافآت والبروتينات الإضافية قد تجعل التجربة غير قابلة للتفسير."
                ]
            ],
            lotusEyebrow: "أسئلة لوتس الغذائية",
            lotusTitle: "حوّل عبارة «هو يتقيأ كثيراً» إلى بيانات مفيدة.",
            lotusCopy:
                "سجّل حجم الوجبة ونوع الطعام وسرعة الأكل والوقت حتى القيء ووجود الشعر والوزن. الأنماط قد تساعد الطبيب على اختيار الخطوة التالية.",
            tracker: "افتح سجل المتابعة",
            warningTitle: "لا تستخدم أدوية بشرية أو حميات قاسية من تلقاء نفسك.",
            warningCopy:
                "القيء المتكرر يحتاج إلى تشخيص. دواء يوقف القيء مؤقتاً لا يفسر سببه. الغذاء المنزلي طويل الأمد يجب أن يكون كاملاً ومتوازناً، ويفضل بإرشاد تغذية بيطرية."
        }
    }
    if (languageCode.value === "fr") {
        return {
            eyebrow: "Alimentation",
            title: "Alimentation, vomissements et poids",
            description:
                "Des principes pratiques avant de changer l'alimentation au hasard.",
            cards: [
                [
                    "Petits repas mesurés",
                    "Si un chat rejette la nourriture après de grosses portions, de petits repas mesurés peuvent être plus faciles à tolérer pendant que la cause est recherchée. Notez les grammes et les horaires."
                ],
                [
                    "Une alimentation complète compte",
                    "Une ration maison à long terme doit fournir taurine, calcium, phosphore, vitamines, graisses essentielles et oligo-éléments dans les bonnes proportions. La viande seule n'est pas un régime complet pour un chat."
                ],
                [
                    "L'alimentation humide aide l'hydratation",
                    "Une alimentation humide complète peut augmenter l'apport en eau et facilite le fractionnement des portions. Le meilleur choix dépend toujours du chat et de ses résultats médicaux."
                ],
                [
                    "Un essai alimentaire doit être strict",
                    "Si le vétérinaire recommande une alimentation hydrolysée ou à protéine nouvelle, les friandises et protéines supplémentaires peuvent rendre l'essai impossible à interpréter."
                ]
            ],
            lotusEyebrow: "Les questions alimentaires de Lotus",
            lotusTitle: "Transformer « il vomit beaucoup » en données utiles.",
            lotusCopy:
                "Notez la taille du repas, l'aliment, la vitesse d'ingestion, le délai avant vomissement, la présence de poils et le poids. Les tendances peuvent aider le vétérinaire à choisir la suite.",
            tracker: "Ouvrir le suivi",
            warningTitle:
                "N'improvisez pas de médicaments humains ni de régimes restrictifs.",
            warningCopy:
                "Des vomissements répétés nécessitent un diagnostic. Un médicament qui arrête temporairement les vomissements n'en explique pas la cause. Une ration maison au long cours doit être complète et équilibrée, idéalement avec conseil nutritionnel vétérinaire."
        }
    }
    if (languageCode.value === "zh") {
        return {
            eyebrow: "饮食",
            title: "饮食、呕吐与体重",
            description: "在随意更换食物之前，先掌握几个实用原则。",
            cards: [
                [
                    "少量、可测量的餐食",
                    "如果猫吃得多就把食物吐出来，在调查原因期间，少量多餐可能更容易耐受。记录克数和时间，不要只靠感觉。"
                ],
                [
                    "营养完整很重要",
                    "长期自制猫粮必须满足牛磺酸、钙、磷、维生素、必需脂肪和微量元素的正确比例。只喂肉并不是完整猫粮。"
                ],
                [
                    "湿粮有助于补水",
                    "完整湿粮可以增加水分摄入，也更容易分成小份。最合适的饮食仍取决于这只猫和检查结果。"
                ],
                [
                    "饮食试验必须严格",
                    "如果兽医建议水解蛋白或新奇蛋白饮食，额外零食和其他蛋白质会让试验结果无法判断。"
                ]
            ],
            lotusEyebrow: "Lotus 的饮食问题",
            lotusTitle: "把“他经常吐”变成有用的数据。",
            lotusCopy:
                "记录餐量、食物、进食速度、多久后呕吐、是否有毛发以及体重。规律可以帮助兽医决定下一步。",
            tracker: "打开健康记录",
            warningTitle: "不要自行使用人用药物或极端限制饮食。",
            warningCopy:
                "反复呕吐需要寻找原因。暂时止吐并不能说明为什么会吐。长期自制饮食必须营养完整，最好由兽医营养专业人员指导。"
        }
    }
    return {
        eyebrow: "Nutrition",
        title: "Food, vomiting & weight",
        description:
            "Practical principles before changing a cat's food at random.",
        cards: [
            [
                "Small, measured meals",
                "For a cat that brings food back up after larger portions, smaller measured meals may be easier to tolerate while the underlying cause is investigated. Track the grams and timing instead of guessing."
            ],
            [
                "Complete nutrition matters",
                "A long-term homemade cat diet needs the right taurine, calcium, phosphorus, vitamins, essential fats and trace nutrients. Meat alone is not a complete feline diet."
            ],
            [
                "Wet food can help hydration",
                "A complete wet diet can increase water intake and makes small portions easy to measure. The best diet still depends on the individual cat and medical findings."
            ],
            [
                "A diet trial must be strict",
                "If a veterinarian recommends a hydrolyzed or novel-protein trial, treats and extra proteins can make the trial impossible to interpret."
            ]
        ],
        lotusEyebrow: "Lotus's food questions",
        lotusTitle: "Turn “he vomits a lot” into useful data.",
        lotusCopy:
            "Record meal size, food, eating speed, time to vomiting, whether hair was present and body weight. Patterns can help a veterinarian choose the next step.",
        tracker: "Open the tracker",
        warningTitle: "Do not improvise human medicines or restrictive diets.",
        warningCopy:
            "Repeated vomiting needs a diagnosis. A medicine that temporarily stops vomiting does not tell you why it is happening. Long-term homemade food should be formulated to be nutritionally complete, ideally with veterinary nutrition guidance."
    }
})

usePageSeo({
    title: computed(() => `${pageText.value.title} — FoldCare`),
    description: computed(() => pageText.value.description)
})
</script>

<template>
    <div class="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20">
        <AppSectionHeading
            :eyebrow="pageText.eyebrow"
            :title="pageText.title"
            :copy="pageText.description"
        />

        <div class="mt-10 grid gap-5 md:grid-cols-2">
            <AppCalloutCard
                v-for="(card, index) in pageText.cards"
                :key="card[0]"
                :title="card[0]"
                :copy="card[1]"
                :tone="cardTones[index] ?? 'sage'"
            />
        </div>

        <section
            class="bg-paper mt-12 grid gap-7 rounded-[2.4rem] p-5 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
        >
            <NuxtImg
                src="/images/lotus/lotus-feeding.jpg"
                alt="Lotus eating from his food bowl"
                width="1152"
                height="1536"
                sizes="100vw lg:45vw xl:520px"
                format="webp"
                :quality="86"
                loading="lazy"
                decoding="async"
                placeholder
                class="aspect-[4/3] w-full rounded-[1.8rem] object-cover object-[center_58%]"
            />
            <div>
                <p
                    class="text-lilac text-sm font-semibold tracking-[0.18em] uppercase"
                >
                    {{ pageText.lotusEyebrow }}
                </p>
                <h2 class="text-ink mt-3 text-3xl font-semibold tracking-tight">
                    {{ pageText.lotusTitle }}
                </h2>
                <p class="text-muted mt-4 leading-8">
                    {{ pageText.lotusCopy }}
                </p>
                <NuxtLink
                    :to="localizedPath('/tracker')"
                    class="bg-ink text-surface-inverse mt-6 inline-flex min-h-12 items-center rounded-full px-5 font-medium"
                    >{{ pageText.tracker }}</NuxtLink
                >
            </div>
        </section>

        <section
            class="border-danger/20 bg-danger-soft mt-10 rounded-[2rem] border p-6 sm:p-8"
        >
            <h2 class="text-ink text-2xl font-semibold">
                {{ pageText.warningTitle }}
            </h2>
            <p class="text-muted mt-4 leading-8">{{ pageText.warningCopy }}</p>
        </section>

        <MedicalInformationNotice class="mt-8" />
    </div>
</template>
