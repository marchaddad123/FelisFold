<script setup lang="ts">
import {
    homemadeGuide,
    foodsToAvoidGuide,
    kitchenGuide
} from "~/data/foodGuides"
import { foodPhoto } from "~/data/editorialVisuals"
import { translated as t } from "~/data/editorialHelpers"
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const labels = {
    title: t(
        "A homemade meal ≠ a complete diet",
        "وجبة منزلية ≠ غذاء متكامل",
        "Un repas maison ≠ un régime complet",
        "自制一餐 ≠ 完整饮食"
    ),
    preparation: t(
        "Prepare. Weigh. Observe.",
        "حضّر. زن. لاحظ.",
        "Préparer. Peser. Observer.",
        "准备、称量、观察。"
    ),
    record: t(
        "The next real kitchen entry",
        "السجل الحقيقي القادم من المطبخ",
        "La prochaine vraie note de cuisine",
        "下一份真实厨房记录"
    ),
    fields: [
        t(
            "Meal photo & date",
            "صورة الوجبة وتاريخها",
            "Photo et date du repas",
            "餐食照片与日期"
        ),
        t(
            "Ingredients, exact grams & preparation",
            "المكونات والغرامات الدقيقة والتحضير",
            "Ingrédients, grammes exacts et préparation",
            "食材、确切克数与准备方式"
        ),
        t(
            "Portion offered & amount eaten",
            "الكمية المقدمة والمأكولة",
            "Portion servie et quantité mangée",
            "喂食份量与吃下的量"
        ),
        t(
            "Vomiting, timing, stool, appetite & energy",
            "القيء وتوقيته والبراز والشهية والنشاط",
            "Vomissement, délai, selles, appétit et énergie",
            "呕吐、时间、排便、食欲与精神"
        ),
        t(
            "Notes, next changes & veterinary comments",
            "الملاحظات والتغييرات المقبلة وتعليقات الطبيب",
            "Notes, changements et commentaires vétérinaires",
            "记录、下次调整与兽医意见"
        )
    ]
}
</script>
<template>
    <section class="bg-sky-soft paper-texture px-5 py-12 sm:px-8 sm:py-16">
        <div class="mx-auto max-w-[80rem]">
            <div class="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                    <h2 class="text-ink text-3xl sm:text-4xl">
                        {{ labels.title[languageCode] }}
                    </h2>
                    <p class="text-muted mt-5 leading-8">
                        {{ homemadeGuide.summary[languageCode] }}
                    </p>
                    <NuxtLink
                        :to="localizedPath('/nutrition/homemade')"
                        class="editorial-link text-peach mt-4 inline-flex min-h-11 items-center"
                        >{{ homemadeGuide.title[languageCode] }} →</NuxtLink
                    >
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <EditorialPhoto
                        :photo="foodPhoto('raw-chicken')"
                        image-class="aspect-square rounded-xl"
                    /><EditorialPhoto
                        :photo="foodPhoto('kitchen-scale')"
                        image-class="aspect-square rounded-xl"
                    />
                </div>
            </div>
        </div>
    </section>
    <section class="bg-danger-soft px-5 py-10 sm:px-8">
        <div
            class="mx-auto grid max-w-[80rem] gap-7 sm:grid-cols-[16rem_1fr] sm:items-center"
        >
            <EditorialPhoto
                :photo="foodPhoto('garlic')"
                image-class="aspect-[4/3] rounded-xl"
                sizes="100vw sm:256px"
            />
            <div>
                <h2 class="text-ink text-3xl">
                    {{ foodsToAvoidGuide.title[languageCode] }}
                </h2>
                <p class="text-muted mt-4 leading-7">
                    {{ foodsToAvoidGuide.summary[languageCode] }}
                </p>
                <NuxtLink
                    :to="localizedPath('/nutrition/foods-to-avoid')"
                    class="editorial-link text-danger mt-3 inline-flex min-h-11 items-center"
                    >{{
                        t(
                            "Read the full safety guide",
                            "اقرأ دليل السلامة الكامل",
                            "Lire le guide de sécurité complet",
                            "阅读完整安全指南"
                        )[languageCode]
                    }}
                    →</NuxtLink
                >
            </div>
        </div>
    </section>
    <section class="bg-cream px-5 py-12 sm:px-8 sm:py-16">
        <div class="mx-auto grid max-w-[80rem] gap-8 lg:grid-cols-2">
            <div>
                <p class="text-peach mb-3 text-sm font-semibold">
                    {{ labels.preparation[languageCode] }}
                </p>
                <h2 class="text-ink text-3xl sm:text-4xl">
                    {{ kitchenGuide.title[languageCode] }}
                </h2>
                <p class="text-muted mt-5 leading-8">
                    {{ kitchenGuide.sections[0]!.paragraphs[languageCode][0] }}
                </p>
                <NuxtLink
                    :to="localizedPath('/nutrition/lotus-kitchen')"
                    class="editorial-link text-peach mt-4 inline-flex min-h-11 items-center"
                    >{{ kitchenGuide.title[languageCode] }} →</NuxtLink
                >
            </div>
            <div
                class="bg-paper border-border rotate-0 border p-6 shadow-sm sm:rotate-1 sm:p-8"
            >
                <h3 class="text-ink text-2xl">
                    {{ labels.record[languageCode] }}
                </h3>
                <ol class="mt-5 space-y-4">
                    <li
                        v-for="(field, index) in labels.fields"
                        :key="field.en"
                        class="border-border text-muted flex gap-4 border-b pb-3 text-sm leading-6"
                    >
                        <span class="text-peach" aria-hidden="true"
                            >0{{ index + 1 }}</span
                        >{{ field[languageCode] }}
                    </li>
                </ol>
                <p class="text-danger mt-5 text-sm leading-7">
                    {{ kitchenGuide.sections[1]!.paragraphs[languageCode][0] }}
                </p>
            </div>
        </div>
    </section>
</template>
