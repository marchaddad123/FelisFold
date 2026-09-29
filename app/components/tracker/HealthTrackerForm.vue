<script setup lang="ts">
import type { TrackerEntryType } from "~/types/foldcare"

const { addEntry } = useHealthTracker()
const emit = defineEmits<{ saved: [] }>()
function localDateTime(): string {
    const now = new Date()
    return new Date(now.getTime() - now.getTimezoneOffset() * 60_000)
        .toISOString()
        .slice(0, 16)
}

const entryType = ref<TrackerEntryType>("meal")
const dateTime = ref(localDateTime())
const note = ref("")
const amount = ref<number>()
const unit = ref("g")
const foodName = ref("")
const vomitHadHair = ref(false)
const vomitHadBlood = ref(false)
const stoolQuality = ref<"hard" | "normal" | "soft" | "diarrhea">("normal")
const score = ref(3)
const medicationName = ref("")
const medicationTaken = ref(true)
const savedMessageIsVisible = ref(false)

const types: Array<{ value: TrackerEntryType; label: string; icon: string }> = [
    { value: "meal", label: "Meal / food", icon: "◉" },
    { value: "water", label: "Water", icon: "◌" },
    { value: "vomit", label: "Vomiting / hairball", icon: "↝" },
    { value: "litter", label: "Litter / stool", icon: "▤" },
    { value: "appetite", label: "Appetite", icon: "⌁" },
    { value: "mood", label: "Mood", icon: "☺" },
    { value: "pain", label: "Pain signs", icon: "♡" },
    { value: "mobility", label: "Mobility", icon: "↗" },
    { value: "grooming", label: "Grooming", icon: "✦" },
    { value: "medicine", label: "Medication", icon: "+" },
    { value: "weight", label: "Weight", icon: "⚖" },
    { value: "note", label: "Note", icon: "✎" }
]
const scoreTypes: TrackerEntryType[] = [
    "appetite",
    "mood",
    "pain",
    "mobility",
    "grooming"
]

watch(entryType, (nextType) => {
    amount.value = undefined
    unit.value =
        nextType === "weight" ? "kg" : nextType === "water" ? "ml" : "g"
    savedMessageIsVisible.value = false
})

function saveEntry() {
    const scoreFields = {
        ...(entryType.value === "appetite"
            ? { appetiteScore: score.value }
            : {}),
        ...(entryType.value === "mood" ? { moodScore: score.value } : {}),
        ...(entryType.value === "pain" ? { painScore: score.value } : {}),
        ...(entryType.value === "mobility"
            ? { mobilityScore: score.value }
            : {}),
        ...(entryType.value === "grooming"
            ? { groomingScore: score.value }
            : {})
    }
    addEntry({
        type: entryType.value,
        dateTime: new Date(dateTime.value).toISOString(),
        note: note.value.trim(),
        ...(amount.value !== undefined
            ? { amount: amount.value, unit: unit.value }
            : {}),
        ...(entryType.value === "meal" && foodName.value
            ? { foodName: foodName.value.trim() }
            : {}),
        ...(entryType.value === "vomit"
            ? {
                  vomitHadHair: vomitHadHair.value,
                  vomitHadBlood: vomitHadBlood.value
              }
            : {}),
        ...(entryType.value === "litter"
            ? { stoolQuality: stoolQuality.value }
            : {}),
        ...(entryType.value === "medicine"
            ? {
                  medicationName: medicationName.value.trim(),
                  medicationTaken: medicationTaken.value
              }
            : {}),
        ...scoreFields
    })
    note.value = ""
    amount.value = undefined
    vomitHadHair.value = false
    vomitHadBlood.value = false
    savedMessageIsVisible.value = true
    emit("saved")
}
</script>

<template>
    <form
        class="border-border bg-paper paper-texture border p-5 sm:p-7"
        @submit.prevent="saveEntry"
    >
        <fieldset>
            <legend class="font-editorial text-ink text-2xl">
                What are you recording?
            </legend>
            <div class="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                <label
                    v-for="type in types"
                    :key="type.value"
                    class="border-border has-[:checked]:border-peach has-[:checked]:bg-peach-soft flex min-h-14 cursor-pointer items-center gap-2 border px-3 text-sm"
                    ><input
                        v-model="entryType"
                        type="radio"
                        name="entry-type"
                        :value="type.value"
                        class="sr-only"
                    /><span class="text-peach" aria-hidden="true">{{
                        type.icon
                    }}</span
                    ><span>{{ type.label }}</span></label
                >
            </div>
        </fieldset>
        <div class="mt-5 grid gap-4 sm:grid-cols-2">
            <label class="text-ink grid gap-2 text-sm font-semibold"
                >Date and time<input
                    v-model="dateTime"
                    type="datetime-local"
                    required
                    class="border-border bg-cream focus:border-peach min-h-12 border px-4 outline-none" /></label
            ><label
                v-if="entryType === 'meal'"
                class="text-ink grid gap-2 text-sm font-semibold"
                >Food name<input
                    v-model="foodName"
                    placeholder="Brand or recipe"
                    class="border-border bg-cream focus:border-peach min-h-12 border px-4 outline-none"
            /></label>
        </div>
        <div
            v-if="['meal', 'water', 'weight'].includes(entryType)"
            class="mt-4 grid gap-4 sm:grid-cols-[1fr_0.45fr]"
        >
            <label class="text-ink grid gap-2 text-sm font-semibold"
                >Amount<input
                    v-model.number="amount"
                    type="number"
                    min="0"
                    step="0.1"
                    class="border-border bg-cream focus:border-peach min-h-12 border px-4 outline-none" /></label
            ><label class="text-ink grid gap-2 text-sm font-semibold"
                >Unit<input
                    v-model="unit"
                    class="border-border bg-cream focus:border-peach min-h-12 border px-4 outline-none"
            /></label>
        </div>
        <fieldset v-if="entryType === 'vomit'" class="bg-peach-soft mt-4 p-4">
            <legend class="sr-only">Vomiting details</legend>
            <div class="flex flex-wrap gap-5">
                <label class="flex min-h-11 items-center gap-2"
                    ><input
                        v-model="vomitHadHair"
                        type="checkbox"
                        class="accent-peach size-5"
                    />
                    Hair was present</label
                ><label class="flex min-h-11 items-center gap-2"
                    ><input
                        v-model="vomitHadBlood"
                        type="checkbox"
                        class="accent-peach size-5"
                    />
                    Blood was present</label
                >
            </div>
            <p v-if="vomitHadBlood" class="text-danger mt-2 text-sm font-bold">
                Blood in vomit needs prompt veterinary advice.
            </p>
        </fieldset>
        <label
            v-if="entryType === 'litter'"
            class="text-ink mt-4 grid gap-2 text-sm font-semibold"
            >Stool quality<select
                v-model="stoolQuality"
                class="border-border bg-cream min-h-12 border px-4"
            >
                <option value="hard">Hard</option>
                <option value="normal">Normal</option>
                <option value="soft">Soft</option>
                <option value="diarrhea">Diarrhea</option>
            </select></label
        >
        <label
            v-if="scoreTypes.includes(entryType)"
            class="text-ink mt-4 grid gap-3 text-sm font-semibold"
            >Score: {{ score }}/5
            <span class="text-muted font-normal">{{
                entryType === "pain"
                    ? "1 = no signs, 5 = severe signs"
                    : "1 = poor, 5 = excellent"
            }}</span
            ><input
                v-model.number="score"
                type="range"
                min="1"
                max="5"
                step="1"
                class="accent-peach w-full"
        /></label>
        <div
            v-if="entryType === 'medicine'"
            class="mt-4 grid gap-4 sm:grid-cols-2"
        >
            <label class="text-ink grid gap-2 text-sm font-semibold"
                >Medication<input
                    v-model="medicationName"
                    class="border-border bg-cream min-h-12 border px-4" /></label
            ><label class="text-ink flex min-h-12 items-end gap-2 pb-2"
                ><input
                    v-model="medicationTaken"
                    type="checkbox"
                    class="accent-peach size-5"
                />
                Dose taken</label
            >
        </div>
        <label class="text-ink mt-4 grid gap-2 text-sm font-semibold"
            >Notes<textarea
                v-model="note"
                rows="3"
                maxlength="500"
                class="border-border bg-cream focus:border-peach border px-4 py-3 outline-none"
                placeholder="What changed? What did you notice?"
            />
        </label>
        <div class="mt-5 flex flex-wrap items-center gap-4">
            <button
                type="submit"
                class="bg-peach min-h-12 rounded-full px-7 font-bold text-white"
            >
                Save today's entry
            </button>
            <p
                v-if="savedMessageIsVisible"
                class="text-sage text-sm font-bold"
                role="status"
            >
                Saved locally ✓
            </p>
        </div>
    </form>
</template>
