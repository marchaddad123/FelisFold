<script setup lang="ts">
import { lotusNutritionExperience } from "~/data/lotusStory"
import { translated as t } from "~/data/editorialHelpers"
import { visualLabels, lotusPhoto } from "~/data/editorialVisuals"
const { languageCode } = useCurrentLanguage()
const title = t(
    "Lotus's food history",
    "تاريخ غذاء لوتس",
    "L'histoire alimentaire de Lotus",
    "Lotus 的饮食经历"
)
const moments = [
    {
        title: t("Earlier", "سابقاً", "Au début", "早期"),
        copy: t(
            "Equilibrio dry food, then an unidentified Eminent stomach product.",
            "غذاء Equilibrio الجاف ثم منتج للمعدة من Eminent غير محدد.",
            "Croquettes Equilibrio, puis un produit Eminent pour l'estomac non identifié.",
            "Equilibrio 干粮，后来吃过具体配方不明的 Eminent 肠胃产品。"
        )
    },
    {
        title: t(
            "Meal observations",
            "ملاحظات الوجبات",
            "Observations des repas",
            "餐食观察"
        ),
        copy: t(
            "Smaller portions and less mixing close together seemed easier. These observations do not establish a cause.",
            "بدت الكميات الأصغر وتقليل الخلط في وقت متقارب أسهل. لا تثبت هذه الملاحظات السبب.",
            "Petites portions et moins de mélanges rapprochés semblaient mieux tolérés. Cela n'établit pas de cause.",
            "小份量与减少短时间内混合食物似乎更容易接受，但这些观察不能确定原因。"
        )
    },
    {
        title: t(
            "A chicken period",
            "فترة الدجاج",
            "Une période de poulet",
            "一段鸡肉时期"
        ),
        copy: t(
            "Mark noticed much less vomiting with plain cooked chicken. Chicken alone is not a complete long-term diet.",
            "لاحظ مارك قيئاً أقل بكثير مع الدجاج السادة المطبوخ. الدجاج وحده ليس غذاءً متكاملاً طويل الأمد.",
            "Mark a remarqué beaucoup moins de vomissements avec du poulet nature cuit. Le poulet seul n'est pas un régime complet à long terme.",
            "Mark 在喂原味熟鸡肉期间观察到呕吐明显减少。鸡肉本身不是完整的长期饮食。"
        )
    },
    {
        title: t("Today", "اليوم", "Aujourd'hui", "现在"),
        copy: t(
            "Less interest in dry food. Meals, appetite and vomiting are still observations to discuss with his vet.",
            "اهتمام أقل بالغذاء الجاف. تبقى الوجبات والشهية والقيء ملاحظات للنقاش مع الطبيب.",
            "Moins d'intérêt pour les croquettes. Repas, appétit et vomissements restent des observations à discuter avec son vétérinaire.",
            "对干粮的兴趣减少。餐食、食欲与呕吐仍是应与兽医讨论的观察。"
        )
    }
]
</script>
<template>
    <section class="bg-peach-soft paper-texture px-5 py-12 sm:px-8">
        <div class="mx-auto max-w-[80rem]">
            <p class="text-peach mb-3 text-sm font-semibold">
                {{ visualLabels.realLife[languageCode] }}
            </p>
            <h2 class="text-ink text-3xl sm:text-4xl">
                {{ title[languageCode] }}
            </h2>
            <p class="text-muted mt-5 max-w-3xl leading-8">
                {{ lotusNutritionExperience.copy[languageCode] }}
            </p>
            <div class="mt-8 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
                <EditorialPhoto
                    :photo="lotusPhoto('lotus-feeding')"
                    frame
                    image-class="aspect-[4/3]"
                />
                <ol class="grid gap-6 sm:grid-cols-2">
                    <li
                        v-for="(moment, index) in moments"
                        :key="moment.title.en"
                        class="border-peach/30 border-s-2 ps-5"
                    >
                        <span class="text-peach text-sm" aria-hidden="true"
                            >0{{ index + 1 }}</span
                        >
                        <h3 class="text-ink mt-2 text-2xl">
                            {{ moment.title[languageCode] }}
                        </h3>
                        <p class="text-muted mt-3 text-sm leading-7">
                            {{ moment.copy[languageCode] }}
                        </p>
                    </li>
                </ol>
            </div>
            <p class="text-muted mt-6 text-sm leading-7">
                {{ lotusNutritionExperience.bullets?.[languageCode][3] }}
            </p>
            <p
                v-if="lotusNutritionExperience.note"
                class="text-danger mt-3 text-sm leading-7"
            >
                {{ lotusNutritionExperience.note[languageCode] }}
            </p>
        </div>
    </section>
</template>
