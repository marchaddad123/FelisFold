<script setup lang="ts">
import { isLanguageCode } from "~/utils/languages"
import { vetVisitChecklist } from "~/data/resourceData"
import type { TrackerEntry } from "~/types/foldcare"

definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { loadEntries, entries, clearAllEntries, entriesWithinDays } =
    useHealthTracker()
const selectedDays = ref<7 | 30>(7)
const confirmClearIsOpen = ref(false)
const formElement = ref<HTMLElement>()
const entryBeingEdited = ref<TrackerEntry | null>(null)
const clearAllButton = ref<HTMLButtonElement>()
const clearDialog = ref<HTMLElement>()
const cancelClearButton = ref<HTMLButtonElement>()
const trackerEntriesHeading = ref<HTMLElement>()

onMounted(loadEntries)

function scrollToForm() {
    formElement.value?.scrollIntoView({ behavior: "smooth", block: "start" })
}
function clearTrackerEntries() {
    clearAllEntries()
    confirmClearIsOpen.value = false
    nextTick(() => trackerEntriesHeading.value?.focus())
}
async function openClearDialog() {
    confirmClearIsOpen.value = true
    await nextTick()
    cancelClearButton.value?.focus()
}
function closeClearDialog() {
    confirmClearIsOpen.value = false
    nextTick(() => clearAllButton.value?.focus())
}
function keepFocusInsideClearDialog(event: KeyboardEvent) {
    if (event.key !== "Tab") return
    const focusableElements = clearDialog.value?.querySelectorAll<HTMLElement>(
        "button:not([disabled])"
    )
    if (!focusableElements?.length) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]
    if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement?.focus()
    } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement?.focus()
    }
}
function editEntry(entry: TrackerEntry) {
    entryBeingEdited.value = entry
    scrollToForm()
}
function finishEditing() {
    entryBeingEdited.value = null
}
function exportSummary() {
    const lines = entriesWithinDays(selectedDays.value).map(
        (entry) =>
            `${new Date(entry.dateTime).toLocaleString()} | ${entry.type} | ${entry.amount ?? ""} ${entry.unit ?? ""} | ${entry.note}`
    )
    const content = [
        `FelisFold ${selectedDays.value}-day health summary`,
        "Educational record — not a diagnosis",
        "",
        ...lines
    ].join("\n")
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = `felisfold-health-summary-${selectedDays.value}-days.txt`
    link.click()
    URL.revokeObjectURL(link.href)
}

usePageSeo({
    title: "Daily cat health tracker — FelisFold",
    description:
        "A private, local-first Scottish Fold health tracker for meals, water, vomiting, stool, appetite, mood, pain, mobility, grooming, medicine and weight.",
    image: "/images/lotus/lotus-home.jpg"
})
</script>

<template>
    <div>
        <section class="paper-texture">
            <div
                class="mx-auto grid max-w-[90rem] lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch"
            >
                <div
                    class="order-2 px-4 py-10 sm:px-8 sm:py-14 lg:order-1 lg:flex lg:flex-col lg:justify-center lg:px-14"
                >
                    <p
                        class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        Scottish Fold care tracker
                    </p>
                    <h1
                        class="font-editorial text-ink mt-3 text-5xl leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
                    >
                        Daily tracker.
                        <span class="block text-3xl sm:text-4xl lg:text-5xl"
                            >Small steps for healthier tomorrows.</span
                        >
                    </h1>
                    <p class="text-muted mt-5 max-w-xl text-lg leading-8">
                        Track meals, water, vomiting, stool, appetite, mood,
                        pain, mobility, grooming, medicine and weight—all
                        privately in this browser.
                    </p>
                    <button
                        type="button"
                        class="bg-peach text-on-accent mt-7 inline-flex min-h-12 w-fit items-center rounded-full px-6 font-bold"
                        @click="scrollToForm"
                    >
                        Add today's entry <span class="ms-3">+</span>
                    </button>
                </div>
                <div
                    class="relative order-1 min-h-[22rem] lg:order-2 lg:min-h-[36rem]"
                >
                    <NuxtImg
                        src="/images/lotus/lotus-home.jpg"
                        alt="Lotus resting while his daily health is tracked"
                        width="1152"
                        height="1536"
                        sizes="100vw lg:58vw"
                        format="webp"
                        :quality="87"
                        preload
                        fetchpriority="high"
                        class="absolute inset-0 size-full object-cover object-[center_38%]"
                    /><HandwrittenNote
                        text="Track. Understand. Care."
                        tone="paper"
                        class="absolute end-6 bottom-6 rotate-2 bg-[#fff4dc]/90 p-4 shadow-xl"
                    />
                </div>
            </div>
            <WavySectionDivider tone="sky" />
        </section>

        <section class="bg-sky-soft paper-texture px-4 pb-12 sm:px-6 sm:pb-16">
            <div class="mx-auto max-w-[90rem]">
                <div class="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <p
                            class="text-sky text-xs font-bold tracking-[0.18em] uppercase"
                        >
                            Today's summary
                        </p>
                        <h2 class="font-editorial text-ink mt-1 text-3xl">
                            A clearer picture, one note at a time.
                        </h2>
                    </div>
                    <div
                        class="border-sky/25 bg-paper flex rounded-full border p-1"
                    >
                        <button
                            v-for="days in [7, 30] as const"
                            :key="days"
                            type="button"
                            class="min-h-10 rounded-full px-4 text-sm font-bold"
                            :class="
                                selectedDays === days
                                    ? 'bg-sky text-on-accent'
                                    : 'text-ink'
                            "
                            @click="selectedDays = days"
                        >
                            {{ days }} days
                        </button>
                    </div>
                </div>
                <TrackerSummary :days="selectedDays" class="mt-7" />
            </div>
        </section>

        <section class="mx-auto max-w-[90rem] px-4 py-14 sm:px-6 sm:py-20">
            <div class="flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p
                        class="text-peach text-xs font-bold tracking-[0.18em] uppercase"
                    >
                        Track what matters
                    </p>
                    <h2
                        ref="trackerEntriesHeading"
                        tabindex="-1"
                        class="font-editorial text-ink mt-2 text-4xl"
                    >
                        Build a useful health story.
                    </h2>
                </div>
                <div class="flex gap-2">
                    <button
                        v-if="entries.length"
                        type="button"
                        class="border-border text-ink min-h-11 rounded-full border px-5 text-sm font-bold"
                        @click="exportSummary"
                    >
                        Export summary</button
                    ><button
                        v-if="entries.length"
                        ref="clearAllButton"
                        type="button"
                        class="text-danger min-h-11 px-3 text-sm font-bold"
                        @click="openClearDialog"
                    >
                        Clear all
                    </button>
                </div>
            </div>
            <div
                class="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start"
            >
                <div ref="formElement">
                    <HealthTrackerForm
                        :entry-to-edit="entryBeingEdited"
                        @saved="finishEditing"
                        @cancelled="finishEditing"
                    />
                </div>
                <TrackerEntryList @edit="editEntry" />
            </div>
            <TrackerTrendChart :days="selectedDays" class="mt-8" />
        </section>

        <section class="bg-sky-soft paper-texture px-4 py-14 sm:px-6">
            <div
                class="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center"
            >
                <div>
                    <p
                        class="text-sky text-xs font-bold tracking-[0.18em] uppercase"
                    >
                        What to share with your vet
                    </p>
                    <h2 class="font-editorial text-ink mt-2 text-4xl">
                        Bring the pattern, not just the memory.
                    </h2>
                    <p class="text-muted mt-4 leading-7">
                        A short timeline can help a veterinarian understand
                        frequency, change and context. It still does not replace
                        an examination.
                    </p>
                    <ul class="mt-5 grid gap-3 sm:grid-cols-2">
                        <li
                            v-for="item in vetVisitChecklist"
                            :key="item"
                            class="text-ink flex gap-3 text-sm leading-6"
                        >
                            <span class="text-sky" aria-hidden="true">☑</span
                            >{{ item }}
                        </li>
                    </ul>
                    <button
                        type="button"
                        class="bg-peach text-on-accent mt-6 min-h-11 rounded-full px-5 font-bold"
                        @click="exportSummary"
                    >
                        Download {{ selectedDays }}-day summary →
                    </button>
                </div>
                <PhotoNoteCard
                    src="/images/lotus/lotus-with-creator.jpg"
                    alt="Lotus with his owner"
                    :width="864"
                    :height="1536"
                    caption="Always by my side."
                    rotate="right"
                />
            </div>
        </section>

        <section class="paper-texture px-4 py-14 sm:px-6">
            <div
                class="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-[0.7fr_1fr_0.7fr] lg:items-center"
            >
                <NuxtImg
                    src="/images/lotus/lotus-cozy.jpg"
                    alt="Lotus sleeping comfortably"
                    width="864"
                    height="1536"
                    sizes="100vw lg:30vw"
                    format="webp"
                    :quality="82"
                    loading="lazy"
                    decoding="async"
                    placeholder
                    class="aspect-[4/3] w-full rounded-[48%_48%_8%_8%] object-cover object-[center_30%]"
                />
                <div class="text-center">
                    <h2 class="font-editorial text-ink text-4xl">
                        Tracking today for more tomorrows.
                    </h2>
                    <p class="text-muted mt-4 leading-7">
                        Every entry can help you notice what changed, what
                        stayed steady and what is worth bringing to the vet.
                    </p>
                    <button
                        type="button"
                        class="bg-peach text-on-accent mt-6 min-h-12 rounded-full px-7 font-bold"
                        @click="scrollToForm"
                    >
                        Start tracking now →
                    </button>
                </div>
                <RunningCatIcon
                    cat-color="black"
                    class="mx-auto w-44 text-[#5b2a1e]"
                />
            </div>
        </section>

        <div
            v-if="confirmClearIsOpen"
            class="fixed inset-0 z-[100] grid place-items-center bg-black/50 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="clear-tracker-title"
            @keydown="keepFocusInsideClearDialog"
            @keydown.esc.stop.prevent="closeClearDialog"
            @click.self="closeClearDialog"
        >
            <div
                ref="clearDialog"
                class="bg-paper w-full max-w-md p-6 shadow-2xl"
            >
                <h2
                    id="clear-tracker-title"
                    class="font-editorial text-ink text-2xl"
                >
                    Clear all entries?
                </h2>
                <p class="text-muted mt-3 leading-7">
                    This permanently removes this browser's local tracker
                    history. There is no cloud copy.
                </p>
                <div class="mt-6 flex gap-3">
                    <button
                        type="button"
                        class="bg-danger text-on-accent min-h-11 rounded-full px-5 font-bold"
                        @click="clearTrackerEntries"
                    >
                        Clear entries</button
                    ><button
                        ref="cancelClearButton"
                        type="button"
                        class="border-border text-ink min-h-11 rounded-full border px-5 font-bold"
                        @click="closeClearDialog"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
