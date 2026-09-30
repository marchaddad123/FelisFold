<script setup lang="ts">
import { isLanguageCode } from "~/utils/languages"
import { feedingSchedule, nutritionTopics } from "~/data/nutritionTopics"

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
    title: computed(() => `${pageText.value.title} — FelisFold`),
    description: computed(() => pageText.value.description)
})
</script>

<template>
    <div>
        <section class="paper-texture">
            <div
                class="mx-auto grid max-w-[90rem] lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch"
            >
                <div
                    class="order-2 px-4 py-10 sm:px-8 sm:py-14 lg:order-1 lg:flex lg:flex-col lg:justify-center lg:px-14"
                >
                    <p
                        class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        {{ pageText.eyebrow }}
                    </p>
                    <h1
                        class="font-editorial text-ink mt-3 text-5xl leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
                    >
                        Nutrition, sensitive stomachs & everyday feeding.
                    </h1>
                    <p class="text-muted mt-5 max-w-xl text-lg leading-8">
                        {{ pageText.description }} Practical guidance for
                        happier eating, fewer tummy upsets and a brighter life.
                    </p>
                    <div class="mt-7 flex flex-wrap gap-3">
                        <a
                            href="#nutrition-topics"
                            class="bg-peach text-on-accent inline-flex min-h-12 items-center rounded-full px-6 font-bold"
                            >Explore nutrition topics
                            <span class="ms-3">→</span></a
                        ><NuxtLink
                            :to="localizedPath('/lotus')"
                            class="editorial-link text-ink inline-flex min-h-12 items-center px-2 font-semibold"
                            >Lotus's feeding journey →</NuxtLink
                        >
                    </div>
                </div>
                <div
                    class="relative order-1 min-h-[22rem] lg:order-2 lg:min-h-[38rem]"
                >
                    <NuxtImg
                        src="/images/lotus/lotus-glasses.jpg"
                        alt="Lotus resting after a meal"
                        width="1536"
                        height="1333"
                        sizes="100vw lg:58vw"
                        format="webp"
                        :quality="87"
                        preload
                        fetchpriority="high"
                        class="absolute inset-0 size-full object-cover object-[center_45%]"
                    /><HandwrittenNote
                        text="Good nutrition changes lives."
                        tone="paper"
                        class="absolute start-5 top-7 bg-[#fffaf1]/85 p-3 shadow-md"
                    /><HandwrittenNote
                        text="Same curious eyes. Same sensitive tummy."
                        tone="light"
                        class="absolute end-5 bottom-6 hidden drop-shadow-lg sm:block"
                    />
                </div>
            </div>
            <WavySectionDivider tone="sky" />
        </section>

        <section class="bg-sky-soft paper-texture px-4 py-12 sm:px-6 sm:py-16">
            <div
                class="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-[0.85fr_0.8fr_0.65fr] lg:items-center"
            >
                <div>
                    <p
                        class="text-sky text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        {{ pageText.lotusEyebrow }}
                    </p>
                    <h2 class="font-editorial text-ink mt-2 text-4xl">
                        {{ pageText.lotusTitle }}
                    </h2>
                    <p class="text-muted mt-4 leading-7">
                        {{ pageText.lotusCopy }}
                    </p>
                    <NuxtLink
                        :to="localizedPath('/tracker')"
                        class="bg-paper text-ink mt-6 inline-flex min-h-11 items-center rounded-full px-5 font-bold"
                        >{{ pageText.tracker }} →</NuxtLink
                    >
                </div>
                <NuxtImg
                    src="/images/lotus/lotus-feeding.jpg"
                    alt="Lotus eating a measured meal"
                    width="1152"
                    height="1536"
                    sizes="100vw lg:34vw"
                    format="webp"
                    :quality="84"
                    loading="lazy"
                    decoding="async"
                    placeholder
                    class="aspect-[4/3] w-full rounded-[48%_48%_8%_8%] object-cover object-[center_58%]"
                />
                <div class="bg-[#fffaf1] p-5 text-[#18231f] shadow-xl">
                    <p class="font-handwritten text-lg">
                        Real progress can look like:
                    </p>
                    <ul class="mt-4 space-y-3 text-sm text-[#5f625c]">
                        <li>✓ Fewer vomiting episodes</li>
                        <li>✓ Calmer, measured eating</li>
                        <li>✓ Better hydration</li>
                        <li>✓ More consistent stool</li>
                        <li>✓ A brighter, playful Lotus</li>
                    </ul>
                </div>
            </div>
        </section>

        <section
            id="nutrition-topics"
            class="bg-paper paper-texture px-4 py-14 sm:px-6 sm:py-20"
        >
            <div class="mx-auto max-w-[90rem]">
                <p
                    class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                >
                    Key nutrition topics
                </p>
                <h2 class="font-editorial text-ink mt-2 text-4xl sm:text-5xl">
                    Simple steps. Real impact.
                </h2>
                <p class="text-muted mt-3 max-w-2xl leading-7">
                    Evidence-led guidance for Scottish Folds with sensitive
                    stomachs.
                </p>
                <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <article
                        v-for="topic in nutritionTopics"
                        :key="topic.id"
                        class="border-border group bg-cream overflow-hidden border"
                    >
                        <NuxtImg
                            :src="topic.image.src"
                            :alt="topic.image.alt"
                            :width="topic.image.width"
                            :height="topic.image.height"
                            sizes="100vw sm:50vw lg:360px"
                            format="webp"
                            :quality="82"
                            loading="lazy"
                            decoding="async"
                            placeholder
                            class="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                            :style="{
                                objectPosition: topic.image.position ?? 'center'
                            }"
                        />
                        <div class="p-5">
                            <span class="font-editorial text-sky text-2xl">{{
                                topic.icon
                            }}</span>
                            <h3
                                class="font-editorial text-ink mt-2 text-2xl leading-tight"
                            >
                                {{ topic.title }}
                            </h3>
                            <p class="text-muted mt-2 text-sm leading-6">
                                {{ topic.summary }}
                            </p>
                            <p
                                class="border-peach/40 text-ink mt-4 border-s-2 ps-3 text-xs leading-5"
                            >
                                {{ topic.note }}
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <section class="px-4 py-14 sm:px-6">
            <div class="mx-auto max-w-[90rem]">
                <div
                    class="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"
                >
                    <div>
                        <p
                            class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                        >
                            Nutrition in practice
                        </p>
                        <h2 class="font-editorial text-ink mt-2 text-4xl">
                            A sample daily feeding rhythm.
                        </h2>
                        <p class="text-muted mt-4 leading-7">
                            Small, measured meals can support steadier energy
                            and make patterns easier to track. The right amount
                            is individual.
                        </p>
                    </div>
                    <ol class="grid gap-3 sm:grid-cols-5">
                        <li
                            v-for="meal in feedingSchedule"
                            :key="meal.time"
                            class="border-border bg-paper border p-4"
                        >
                            <p class="text-sky text-sm font-bold">
                                {{ meal.time }}
                            </p>
                            <h3 class="font-editorial text-ink mt-2 text-lg">
                                {{ meal.label }}
                            </h3>
                            <p class="text-muted mt-1 text-xs leading-5">
                                {{ meal.detail }}
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
        </section>

        <section class="bg-peach-soft paper-texture px-4 py-12 sm:px-6">
            <div
                class="mx-auto grid max-w-[90rem] gap-7 lg:grid-cols-[0.7fr_0.9fr_0.8fr] lg:items-center"
            >
                <div>
                    <p
                        class="text-danger text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        Homemade food?
                    </p>
                    <h2 class="font-editorial text-ink mt-2 text-4xl">
                        Start safely.
                    </h2>
                    <p class="text-muted mt-4 leading-7">
                        {{ pageText.warningCopy }}
                    </p>
                </div>
                <NuxtImg
                    src="/images/lotus/lotus-feeding.jpg"
                    alt="Lotus eating from his bowl"
                    width="1152"
                    height="1536"
                    sizes="100vw lg:32vw"
                    format="webp"
                    :quality="82"
                    loading="lazy"
                    decoding="async"
                    placeholder
                    class="aspect-[16/10] w-full object-cover object-[center_58%]"
                />
                <div class="border-danger/30 bg-paper border p-5">
                    <h3 class="font-editorial text-ink text-2xl">
                        {{ pageText.warningTitle }}
                    </h3>
                    <p class="text-muted mt-3 text-sm leading-6">
                        Long-term homemade diets need veterinary nutrition
                        formulation. Meat alone is not complete for cats.
                    </p>
                </div>
            </div>
        </section>

        <section
            class="mx-auto grid max-w-[90rem] gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.7fr_1fr_0.7fr] lg:items-center"
        >
            <div>
                <p
                    class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                >
                    Vomiting journal
                </p>
                <h2 class="font-editorial text-ink mt-2 text-4xl">
                    Bring useful detail to the vet.
                </h2>
                <p class="text-muted mt-4 leading-7">
                    Record what Lotus ate, how much, when vomiting happened,
                    whether hair was present, appetite, stool and energy.
                </p>
                <NuxtLink
                    :to="localizedPath('/tracker')"
                    class="bg-peach text-on-accent mt-6 inline-flex min-h-11 items-center rounded-full px-5 font-bold"
                    >Open the tracker →</NuxtLink
                >
            </div>
            <div class="bg-paper photo-paper -rotate-1 p-6">
                <p class="font-handwritten text-ink text-xl">Today…</p>
                <ul class="text-muted mt-4 space-y-3">
                    <li>✓ What he ate</li>
                    <li>✓ When he ate</li>
                    <li>✓ Vomiting or hairball?</li>
                    <li>✓ Stool, appetite and mood</li>
                </ul>
            </div>
            <NuxtImg
                src="/images/lotus/lotus-with-creator.jpg"
                alt="Lotus with his owner"
                width="864"
                height="1536"
                sizes="100vw lg:28vw"
                format="webp"
                :quality="82"
                loading="lazy"
                decoding="async"
                placeholder
                class="aspect-square w-full rounded-[48%_48%_8%_8%] object-cover object-[center_30%]"
            />
        </section>
        <TrustStrip />
    </div>
</template>
