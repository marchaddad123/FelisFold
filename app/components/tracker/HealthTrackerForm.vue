<script setup lang="ts">
import type { TrackerEntryType } from "~/types/foldcare"

const { languageCode } = useCurrentLanguage()
const { addEntry } = useHealthTracker()

const entryType = ref<TrackerEntryType>("meal")
function createLocalDateTimeValue(): string {
    const now = new Date()
    const localTime = new Date(now.getTime() - now.getTimezoneOffset() * 60_000)
    return localTime.toISOString().slice(0, 16)
}

const dateTime = ref(createLocalDateTimeValue())
const note = ref("")
const amount = ref<number | undefined>()
const unit = ref("g")
const vomitHadHair = ref(false)
const vomitHadBlood = ref(false)
const mobilityScore = ref(3)
const savedMessageIsVisible = ref(false)

const labels = computed(() => ({
    type:
        languageCode.value === "ar"
            ? "نوع السجل"
            : languageCode.value === "fr"
              ? "Type d'entrée"
              : languageCode.value === "zh"
                ? "记录类型"
                : "Entry type",
    date:
        languageCode.value === "ar"
            ? "الوقت"
            : languageCode.value === "fr"
              ? "Heure"
              : languageCode.value === "zh"
                ? "时间"
                : "Date and time",
    amount:
        languageCode.value === "ar"
            ? "الكمية"
            : languageCode.value === "fr"
              ? "Quantité"
              : languageCode.value === "zh"
                ? "数量"
                : "Amount",
    unit:
        languageCode.value === "ar"
            ? "الوحدة"
            : languageCode.value === "fr"
              ? "Unité"
              : languageCode.value === "zh"
                ? "单位"
                : "Unit",
    note:
        languageCode.value === "ar"
            ? "ملاحظة"
            : languageCode.value === "fr"
              ? "Note"
              : languageCode.value === "zh"
                ? "备注"
                : "Note",
    notePlaceholder:
        languageCode.value === "ar"
            ? "ماذا حدث؟ ماذا لاحظت؟"
            : languageCode.value === "fr"
              ? "Que s'est-il passé ? Qu'avez-vous remarqué ?"
              : languageCode.value === "zh"
                ? "发生了什么？你注意到了什么？"
                : "What happened? What did you notice?",
    hair:
        languageCode.value === "ar"
            ? "وجود شعر"
            : languageCode.value === "fr"
              ? "Poils présents"
              : languageCode.value === "zh"
                ? "有毛发"
                : "Hair present",
    blood:
        languageCode.value === "ar"
            ? "وجود دم"
            : languageCode.value === "fr"
              ? "Sang présent"
              : languageCode.value === "zh"
                ? "有血"
                : "Blood present",
    mobility:
        languageCode.value === "ar"
            ? "درجة الحركة"
            : languageCode.value === "fr"
              ? "Score de mobilité"
              : languageCode.value === "zh"
                ? "活动评分"
                : "Mobility score",
    save:
        languageCode.value === "ar"
            ? "احفظ"
            : languageCode.value === "fr"
              ? "Enregistrer"
              : languageCode.value === "zh"
                ? "保存"
                : "Save entry",
    saved:
        languageCode.value === "ar"
            ? "تم الحفظ محلياً ✓"
            : languageCode.value === "fr"
              ? "Enregistré localement ✓"
              : languageCode.value === "zh"
                ? "已保存到本机 ✓"
                : "Saved locally ✓"
}))

const typeOptions = computed(() => [
    {
        value: "meal",
        label:
            languageCode.value === "ar"
                ? "وجبة"
                : languageCode.value === "fr"
                  ? "Repas"
                  : languageCode.value === "zh"
                    ? "进餐"
                    : "Meal"
    },
    {
        value: "vomit",
        label:
            languageCode.value === "ar"
                ? "قيء"
                : languageCode.value === "fr"
                  ? "Vomissement"
                  : languageCode.value === "zh"
                    ? "呕吐"
                    : "Vomiting"
    },
    {
        value: "mobility",
        label:
            languageCode.value === "ar"
                ? "حركة"
                : languageCode.value === "fr"
                  ? "Mobilité"
                  : languageCode.value === "zh"
                    ? "活动"
                    : "Mobility"
    },
    {
        value: "medicine",
        label:
            languageCode.value === "ar"
                ? "دواء"
                : languageCode.value === "fr"
                  ? "Médicament"
                  : languageCode.value === "zh"
                    ? "用药"
                    : "Medicine"
    },
    {
        value: "weight",
        label:
            languageCode.value === "ar"
                ? "وزن"
                : languageCode.value === "fr"
                  ? "Poids"
                  : languageCode.value === "zh"
                    ? "体重"
                    : "Weight"
    },
    {
        value: "note",
        label:
            languageCode.value === "ar"
                ? "ملاحظة"
                : languageCode.value === "fr"
                  ? "Note"
                  : languageCode.value === "zh"
                    ? "备注"
                    : "Note"
    }
])

watch(entryType, (nextType) => {
    if (nextType === "weight") unit.value = "kg"
    if (nextType === "meal") unit.value = "g"
})

function saveEntry() {
    addEntry({
        type: entryType.value,
        dateTime: new Date(dateTime.value).toISOString(),
        note: note.value.trim(),
        ...(amount.value !== undefined
            ? { amount: amount.value, unit: unit.value }
            : {}),
        ...(entryType.value === "vomit"
            ? {
                  vomitHadHair: vomitHadHair.value,
                  vomitHadBlood: vomitHadBlood.value
              }
            : {}),
        ...(entryType.value === "mobility"
            ? { mobilityScore: mobilityScore.value }
            : {})
    })

    note.value = ""
    amount.value = undefined
    vomitHadHair.value = false
    vomitHadBlood.value = false
    savedMessageIsVisible.value = true
    window.setTimeout(() => (savedMessageIsVisible.value = false), 1600)
}
</script>

<template>
    <form
        class="border-border bg-paper rounded-[2rem] border p-5 sm:p-7"
        @submit.prevent="saveEntry"
    >
        <div class="grid gap-4 sm:grid-cols-2">
            <label class="text-ink grid gap-2 text-sm font-medium">
                {{ labels.type }}
                <select
                    v-model="entryType"
                    class="border-border bg-cream text-ink focus:border-lilac min-h-12 rounded-2xl border px-4 outline-none"
                >
                    <option
                        v-for="option in typeOptions"
                        :key="option.value"
                        :value="option.value"
                    >
                        {{ option.label }}
                    </option>
                </select>
            </label>
            <label class="text-ink grid gap-2 text-sm font-medium">
                {{ labels.date }}
                <input
                    v-model="dateTime"
                    type="datetime-local"
                    class="border-border bg-cream text-ink focus:border-lilac min-h-12 rounded-2xl border px-4 outline-none"
                    required
                />
            </label>
        </div>

        <div
            v-if="
                entryType === 'meal' ||
                entryType === 'weight' ||
                entryType === 'medicine'
            "
            class="mt-4 grid gap-4 sm:grid-cols-[1fr_0.45fr]"
        >
            <label class="text-ink grid gap-2 text-sm font-medium">
                {{ labels.amount }}
                <input
                    v-model.number="amount"
                    type="number"
                    min="0"
                    step="0.1"
                    class="border-border bg-cream text-ink focus:border-lilac min-h-12 rounded-2xl border px-4 outline-none"
                />
            </label>
            <label class="text-ink grid gap-2 text-sm font-medium">
                {{ labels.unit }}
                <input
                    v-model="unit"
                    class="border-border bg-cream text-ink focus:border-lilac min-h-12 rounded-2xl border px-4 outline-none"
                />
            </label>
        </div>

        <div
            v-if="entryType === 'vomit'"
            class="bg-peach-soft mt-4 flex flex-wrap gap-5 rounded-2xl p-4"
        >
            <label class="text-ink flex items-center gap-2 text-sm">
                <input
                    v-model="vomitHadHair"
                    type="checkbox"
                    class="accent-lilac size-4"
                />
                {{ labels.hair }}
            </label>
            <label class="text-ink flex items-center gap-2 text-sm">
                <input
                    v-model="vomitHadBlood"
                    type="checkbox"
                    class="accent-lilac size-4"
                />
                {{ labels.blood }}
            </label>
        </div>

        <label
            v-if="entryType === 'mobility'"
            class="text-ink mt-4 grid gap-2 text-sm font-medium"
        >
            {{ labels.mobility }}: {{ mobilityScore }}/5
            <input
                v-model.number="mobilityScore"
                type="range"
                min="1"
                max="5"
                step="1"
                class="accent-lilac w-full"
            />
        </label>

        <label class="text-ink mt-4 grid gap-2 text-sm font-medium">
            {{ labels.note }}
            <textarea
                v-model="note"
                rows="4"
                class="border-border bg-cream text-ink focus:border-lilac rounded-2xl border px-4 py-3 outline-none"
                :placeholder="labels.notePlaceholder"
            />
        </label>

        <div class="mt-5 flex items-center gap-4">
            <button
                type="submit"
                class="bg-ink text-surface-inverse min-h-12 rounded-full px-6 font-medium transition hover:-translate-y-0.5"
            >
                {{ labels.save }}
            </button>
            <p
                v-if="savedMessageIsVisible"
                class="text-sage text-sm font-medium"
            >
                {{ labels.saved }}
            </p>
        </div>
    </form>
</template>
