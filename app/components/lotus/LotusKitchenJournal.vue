<script setup lang="ts">
import type { LotusKitchenEntry } from "~/types/foldcare"
import { translated as t } from "~/data/editorialHelpers"
defineProps<{ entries: LotusKitchenEntry[] }>()
const { languageCode } = useCurrentLanguage()
const labels = {
    made: t("What I made", "ما صنعته", "Ce que j'ai préparé", "我做了什么"),
    why: t("Why I tried it", "لماذا جربته", "Pourquoi cet essai", "为什么尝试"),
    response: t(
        "How Lotus responded",
        "كيف استجاب لوتس",
        "La réponse de Lotus",
        "Lotus 的反应"
    ),
    change: t(
        "What I would change",
        "ما سأغيره",
        "Ce que je changerais",
        "我会如何调整"
    ),
    nutrition: t(
        "Nutrition note",
        "ملاحظة غذائية",
        "Note nutritionnelle",
        "营养说明"
    ),
    served: t(
        "Grams served / eaten",
        "الغرامات المقدمة / المأكولة",
        "Grammes servis / mangés",
        "喂食／吃下的克数"
    ),
    unknown: t("Not recorded", "غير مسجل", "Non consigné", "未记录"),
    yes: t("Yes", "نعم", "Oui", "是"),
    no: t("No", "لا", "Non", "否"),
    liked: t("Liked it", "أعجبه", "Apprécié", "是否喜欢"),
    vomit: t(
        "Vomiting afterward",
        "قيء بعد الوجبة",
        "Vomissement après",
        "之后是否呕吐"
    ),
    timing: t(
        "Minutes to vomiting",
        "دقائق حتى القيء",
        "Minutes avant vomissement",
        "距呕吐的分钟数"
    ),
    stool: t("Stool", "البراز", "Selles", "排便"),
    appetite: t(
        "Appetite afterward",
        "الشهية بعدها",
        "Appétit ensuite",
        "之后食欲"
    ),
    energy: t(
        "Energy afterward",
        "النشاط بعدها",
        "Énergie ensuite",
        "之后精神"
    ),
    vet: t(
        "Veterinary notes",
        "ملاحظات الطبيب",
        "Notes vétérinaires",
        "兽医意见"
    ),
    complete: t("Complete diet", "غذاء متكامل", "Régime complet", "完整饮食")
}
</script>
<template>
    <section
        v-for="entry in entries"
        :key="entry.id"
        class="border-border mt-10 border-t pt-8"
    >
        <p class="text-muted text-sm">{{ entry.date }}</p>
        <h2 class="font-editorial text-ink mt-2 text-3xl">
            {{ entry.mealName[languageCode] }}
        </h2>
        <h3 class="mt-5 font-semibold">{{ labels.made[languageCode] }}</h3>
        <ul class="mt-2 space-y-2">
            <li
                v-for="(ingredient, index) in entry.ingredients"
                :key="ingredient.en"
            >
                {{ ingredient[languageCode] }} —
                {{
                    entry.ingredientAmounts.find(
                        (amount) => amount.ingredientIndex === index
                    )?.grams ?? labels.unknown[languageCode]
                }}
                g
            </li>
        </ul>
        <p class="mt-3 leading-7">
            {{ entry.preparationMethod[languageCode] }}
        </p>
        <p class="mt-3">
            {{ labels.served[languageCode] }}: {{ entry.portionServed }} /
            {{ entry.amountEaten ?? labels.unknown[languageCode] }}
        </p>
        <h3 class="mt-5 font-semibold">{{ labels.why[languageCode] }}</h3>
        <p class="mt-2 leading-7">{{ entry.whyITriedIt[languageCode] }}</p>
        <h3 class="mt-5 font-semibold">{{ labels.response[languageCode] }}</h3>
        <dl class="mt-3 space-y-2">
            <div>
                <dt class="font-medium">{{ labels.liked[languageCode] }}</dt>
                <dd>
                    {{
                        (entry.whetherHeLikedIt === "unclear"
                            ? labels.unknown
                            : labels[entry.whetherHeLikedIt])[languageCode]
                    }}
                </dd>
            </div>
            <div>
                <dt class="font-medium">{{ labels.vomit[languageCode] }}</dt>
                <dd>
                    {{
                        (entry.vomitingAfter === null
                            ? labels.unknown
                            : entry.vomitingAfter
                              ? labels.yes
                              : labels.no)[languageCode]
                    }}
                </dd>
            </div>
            <div>
                <dt class="font-medium">{{ labels.timing[languageCode] }}</dt>
                <dd>
                    {{ entry.timeToVomiting ?? labels.unknown[languageCode] }}
                </dd>
            </div>
            <div
                v-for="item in [
                    { label: labels.stool, value: entry.stoolObservation },
                    { label: labels.appetite, value: entry.appetiteAfter },
                    { label: labels.energy, value: entry.energyAfter },
                    { label: labels.vet, value: entry.veterinaryNotes }
                ]"
                :key="item.label.en"
            >
                <dt class="font-medium">{{ item.label[languageCode] }}</dt>
                <dd>
                    {{
                        item.value?.[languageCode] ??
                        labels.unknown[languageCode]
                    }}
                </dd>
            </div>
        </dl>
        <p class="mt-3 leading-7">{{ entry.ownerNotes[languageCode] }}</p>
        <div class="mt-4 grid gap-4 sm:grid-cols-2">
            <NuxtImg
                v-for="photo in entry.photos"
                :key="photo.src"
                :src="photo.src"
                :alt="photo.alt[languageCode]"
                :width="photo.width"
                :height="photo.height"
                sizes="100vw sm:340px"
                loading="lazy"
                class="w-full rounded-xl"
            />
        </div>
        <h3 class="mt-5 font-semibold">{{ labels.change[languageCode] }}</h3>
        <p class="mt-2 leading-7">{{ entry.whatIWouldChange[languageCode] }}</p>
        <h3 class="mt-5 font-semibold">{{ labels.nutrition[languageCode] }}</h3>
        <p class="mt-2 leading-7">{{ entry.nutritionNote[languageCode] }}</p>
        <p class="mt-3">
            {{ labels.complete[languageCode] }}:
            {{ (entry.isCompleteDiet ? labels.yes : labels.no)[languageCode] }}
        </p>
        <p class="text-muted mt-3 text-sm">
            {{ entry.sourceNotes[languageCode] }}
        </p>
    </section>
</template>
