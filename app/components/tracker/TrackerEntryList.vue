<script setup lang="ts">
const { languageCode } = useCurrentLanguage()
const { entries, removeEntry } = useHealthTracker()

const labels = computed(() => {
    if (languageCode.value === "ar")
        return {
            emptyTitle: "لا توجد سجلات بعد",
            emptyCopy: "أضف أول وجبة أو حالة قيء أو وزن أو ملاحظة حركة.",
            remove: "حذف",
            mobility: "الحركة",
            hair: "تم تسجيل وجود شعر.",
            blood: "تم تسجيل وجود دم — تواصل مع طبيب بيطري."
        }
    if (languageCode.value === "fr")
        return {
            emptyTitle: "Aucune entrée pour le moment",
            emptyCopy:
                "Ajoutez le premier repas, vomissement, poids ou note de mobilité.",
            remove: "Supprimer",
            mobility: "Mobilité",
            hair: "Des poils ont été notés.",
            blood: "Du sang a été noté — contactez un vétérinaire."
        }
    if (languageCode.value === "zh")
        return {
            emptyTitle: "还没有记录",
            emptyCopy: "先添加一条进餐、呕吐、体重或活动记录。",
            remove: "删除",
            mobility: "活动",
            hair: "记录到毛发。",
            blood: "记录到血液——请联系兽医。"
        }
    return {
        emptyTitle: "No entries yet",
        emptyCopy:
            "Add the first meal, vomiting event, weight or mobility note above.",
        remove: "Remove",
        mobility: "Mobility",
        hair: "Hair was present.",
        blood: "Blood was recorded — contact a veterinarian."
    }
})

function entryTypeLabel(entryType: string): string {
    const labelsByLanguage: Record<string, Record<string, string>> = {
        en: {
            meal: "Meal",
            vomit: "Vomiting",
            mobility: "Mobility",
            medicine: "Medicine",
            weight: "Weight",
            note: "Note"
        },
        ar: {
            meal: "وجبة",
            vomit: "قيء",
            mobility: "حركة",
            medicine: "دواء",
            weight: "وزن",
            note: "ملاحظة"
        },
        fr: {
            meal: "Repas",
            vomit: "Vomissement",
            mobility: "Mobilité",
            medicine: "Médicament",
            weight: "Poids",
            note: "Note"
        },
        zh: {
            meal: "进餐",
            vomit: "呕吐",
            mobility: "活动",
            medicine: "用药",
            weight: "体重",
            note: "备注"
        }
    }
    return labelsByLanguage[languageCode.value]?.[entryType] ?? entryType
}

function formatDate(dateTime: string): string {
    return new Intl.DateTimeFormat(undefined, {
        dateStyle: "medium",
        timeStyle: "short"
    }).format(new Date(dateTime))
}
</script>

<template>
    <section>
        <div
            v-if="entries.length === 0"
            class="border-border bg-paper/60 rounded-[2rem] border border-dashed p-8 text-center"
        >
            <FoldCatMascot size="sm" />
            <h2 class="text-ink mt-3 text-xl font-semibold">
                {{ labels.emptyTitle }}
            </h2>
            <p class="text-muted mt-2">{{ labels.emptyCopy }}</p>
        </div>
        <div v-else class="space-y-3">
            <article
                v-for="entry in entries.slice(0, 25)"
                :key="entry.id"
                class="border-border bg-paper rounded-[1.6rem] border p-5"
            >
                <div class="flex items-start justify-between gap-4">
                    <div>
                        <p
                            class="text-lilac text-xs font-semibold tracking-[0.16em] uppercase"
                        >
                            {{ entryTypeLabel(entry.type) }}
                        </p>
                        <p class="text-muted mt-1 text-sm">
                            {{ formatDate(entry.dateTime) }}
                        </p>
                    </div>
                    <button
                        type="button"
                        class="text-muted hover:bg-danger-soft hover:text-danger rounded-full px-3 py-1 text-xs font-medium"
                        @click="removeEntry(entry.id)"
                    >
                        {{ labels.remove }}
                    </button>
                </div>
                <p
                    v-if="entry.amount !== undefined"
                    class="text-ink mt-3 font-semibold"
                >
                    {{ entry.amount }} {{ entry.unit }}
                </p>
                <p v-if="entry.mobilityScore" class="text-ink mt-3 text-sm">
                    {{ labels.mobility }}: {{ entry.mobilityScore }}/5
                </p>
                <p v-if="entry.vomitHadHair" class="text-muted mt-2 text-sm">
                    {{ labels.hair }}
                </p>
                <p
                    v-if="entry.vomitHadBlood"
                    class="text-danger mt-2 text-sm font-medium"
                >
                    {{ labels.blood }}
                </p>
                <p v-if="entry.note" class="text-muted mt-3 leading-7">
                    {{ entry.note }}
                </p>
            </article>
        </div>
    </section>
</template>
