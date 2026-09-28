import type { TrackerEntry, TrackerEntryType } from "~/types/foldcare"
import { storageKeys } from "~/utils/storageKeys"

function createEntryId(): string {
    if (import.meta.client && "randomUUID" in crypto) {
        return crypto.randomUUID()
    }

    return `entry-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export function useHealthTracker() {
    const entries = useState<TrackerEntry[]>(
        "foldcare-tracker-entries-state",
        () => []
    )
    const hasLoadedEntries = useState<boolean>(
        "foldcare-tracker-loaded",
        () => false
    )

    function loadEntries() {
        if (import.meta.server || hasLoadedEntries.value) return

        try {
            const savedEntries = window.localStorage.getItem(
                storageKeys.trackerEntries
            )
            entries.value = savedEntries
                ? (JSON.parse(savedEntries) as TrackerEntry[])
                : []
        } catch {
            entries.value = []
        }

        hasLoadedEntries.value = true
    }

    function saveEntries() {
        if (import.meta.client) {
            window.localStorage.setItem(
                storageKeys.trackerEntries,
                JSON.stringify(entries.value)
            )
        }
    }

    function addEntry(input: Omit<TrackerEntry, "id">) {
        entries.value = [{ ...input, id: createEntryId() }, ...entries.value]
        saveEntries()
    }

    function removeEntry(entryId: string) {
        entries.value = entries.value.filter((entry) => entry.id !== entryId)
        saveEntries()
    }

    function clearAllEntries() {
        entries.value = []
        saveEntries()
    }

    function countEntriesByType(type: TrackerEntryType, days = 30): number {
        const cutoff = Date.now() - days * 24 * 60 * 60 * 1000
        return entries.value.filter(
            (entry) =>
                entry.type === type &&
                new Date(entry.dateTime).getTime() >= cutoff
        ).length
    }

    const latestWeight = computed(() => {
        return entries.value.find(
            (entry) =>
                entry.type === "weight" && typeof entry.amount === "number"
        )
    })

    return {
        entries: readonly(entries),
        latestWeight,
        loadEntries,
        addEntry,
        removeEntry,
        clearAllEntries,
        countEntriesByType
    }
}
