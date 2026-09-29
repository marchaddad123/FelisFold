<script setup lang="ts">
const { entries, removeEntry } = useHealthTracker()
const typeLabels: Record<string, string> = {
    meal: "Meal",
    water: "Water",
    vomit: "Vomiting",
    litter: "Litter / stool",
    appetite: "Appetite",
    mood: "Mood",
    pain: "Pain signs",
    mobility: "Mobility",
    grooming: "Grooming",
    medicine: "Medication",
    weight: "Weight",
    note: "Note"
}
const typeIcons: Record<string, string> = {
    meal: "◉",
    water: "◌",
    vomit: "↝",
    litter: "▤",
    appetite: "⌁",
    mood: "☺",
    pain: "♡",
    mobility: "↗",
    grooming: "✦",
    medicine: "+",
    weight: "⚖",
    note: "✎"
}
function formatDate(dateTime: string): string {
    return new Intl.DateTimeFormat(undefined, {
        dateStyle: "medium",
        timeStyle: "short"
    }).format(new Date(dateTime))
}
function scoreText(entry: (typeof entries.value)[number]): string | null {
    const score =
        entry.appetiteScore ??
        entry.moodScore ??
        entry.painScore ??
        entry.mobilityScore ??
        entry.groomingScore
    return typeof score === "number" ? `${score}/5` : null
}
</script>

<template>
    <section>
        <div
            v-if="entries.length === 0"
            class="border-border bg-paper border border-dashed p-8 text-center"
        >
            <FoldCatMascot size="sm" />
            <h2 class="font-editorial text-ink mt-3 text-2xl">
                No entries yet.
            </h2>
            <p class="text-muted mt-2">
                Add a meal, movement score or note to start seeing useful
                patterns.
            </p>
        </div>
        <div v-else class="divide-border border-border divide-y border-y">
            <article
                v-for="entry in entries.slice(0, 30)"
                :key="entry.id"
                class="grid gap-3 py-5 sm:grid-cols-[auto_1fr_auto] sm:items-start"
            >
                <span
                    class="bg-peach-soft text-peach grid size-10 place-items-center rounded-full"
                    aria-hidden="true"
                    >{{ typeIcons[entry.type] }}</span
                >
                <div>
                    <div class="flex flex-wrap items-baseline gap-x-3">
                        <h3 class="font-editorial text-ink text-xl">
                            {{ typeLabels[entry.type] }}
                        </h3>
                        <time
                            class="text-muted text-xs"
                            :datetime="entry.dateTime"
                            >{{ formatDate(entry.dateTime) }}</time
                        >
                    </div>
                    <p
                        v-if="entry.foodName"
                        class="text-ink mt-2 font-semibold"
                    >
                        {{ entry.foodName }}
                    </p>
                    <p v-if="entry.amount !== undefined" class="text-ink mt-1">
                        {{ entry.amount }} {{ entry.unit }}
                    </p>
                    <p
                        v-if="scoreText(entry)"
                        class="text-sky mt-2 text-sm font-bold"
                    >
                        Score {{ scoreText(entry) }}
                    </p>
                    <p
                        v-if="entry.stoolQuality"
                        class="text-muted mt-2 text-sm"
                    >
                        Stool: {{ entry.stoolQuality }}
                    </p>
                    <p
                        v-if="entry.medicationName"
                        class="text-muted mt-2 text-sm"
                    >
                        {{ entry.medicationName }} —
                        {{ entry.medicationTaken ? "taken" : "not taken" }}
                    </p>
                    <p
                        v-if="entry.vomitHadHair"
                        class="text-muted mt-2 text-sm"
                    >
                        Hair was present.
                    </p>
                    <p
                        v-if="entry.vomitHadBlood"
                        class="text-danger mt-2 text-sm font-bold"
                    >
                        Blood recorded — contact a veterinarian.
                    </p>
                    <p v-if="entry.note" class="text-muted mt-2 leading-7">
                        {{ entry.note }}
                    </p>
                </div>
                <button
                    type="button"
                    class="text-muted hover:text-danger min-h-10 px-3 text-xs font-bold"
                    @click="removeEntry(entry.id)"
                >
                    Remove
                </button>
            </article>
        </div>
    </section>
</template>
