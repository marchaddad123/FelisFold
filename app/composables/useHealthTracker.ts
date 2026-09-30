import type { TrackerEntry, TrackerEntryType } from "~/types/foldcare"
import { storageKeys } from "~/utils/storageKeys"

function createEntryId(): string {
    if (import.meta.client && "randomUUID" in crypto) return crypto.randomUUID()
    return `entry-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function isTrackerEntry(value: unknown): value is TrackerEntry {
    if (!value || typeof value !== "object") return false
    const entry = value as Partial<TrackerEntry>
    return (
        typeof entry.id === "string" &&
        typeof entry.type === "string" &&
        typeof entry.dateTime === "string" &&
        typeof entry.note === "string"
    )
}

export function useHealthTracker() {
    const entries = useState<TrackerEntry[]>(
        "felisfold-tracker-entries-state",
        () => []
    )
    const hasLoadedEntries = useState<boolean>(
        "felisfold-tracker-loaded",
        () => false
    )

    function loadEntries() {
        if (import.meta.server || hasLoadedEntries.value) return
        try {
            const savedEntries =
                window.localStorage.getItem(storageKeys.trackerEntries) ??
                window.localStorage.getItem("foldcare-tracker-entries")
            const parsedEntries: unknown = savedEntries
                ? JSON.parse(savedEntries)
                : []
            entries.value = Array.isArray(parsedEntries)
                ? parsedEntries
                      .filter(isTrackerEntry)
                      .sort(
                          (first, second) =>
                              new Date(second.dateTime).getTime() -
                              new Date(first.dateTime).getTime()
                      )
                : []
        } catch {
            entries.value = []
        }
        hasLoadedEntries.value = true
    }

    function saveEntries() {
        if (import.meta.client)
            window.localStorage.setItem(
                storageKeys.trackerEntries,
                JSON.stringify(entries.value)
            )
    }

    function addEntry(input: Omit<TrackerEntry, "id">) {
        entries.value = [
            { ...input, id: createEntryId() },
            ...entries.value
        ].sort(
            (first, second) =>
                new Date(second.dateTime).getTime() -
                new Date(first.dateTime).getTime()
        )
        saveEntries()
    }

    function removeEntry(entryId: string) {
        entries.value = entries.value.filter((entry) => entry.id !== entryId)
        saveEntries()
    }

    function updateEntry(updatedEntry: TrackerEntry) {
        if (!entries.value.some((entry) => entry.id === updatedEntry.id)) return

        entries.value = entries.value
            .map((entry) =>
                entry.id === updatedEntry.id ? updatedEntry : entry
            )
            .sort(
                (first, second) =>
                    new Date(second.dateTime).getTime() -
                    new Date(first.dateTime).getTime()
            )
        saveEntries()
    }

    function clearAllEntries() {
        entries.value = []
        saveEntries()
    }

    function entriesWithinDays(days: number): TrackerEntry[] {
        const cutoff = Date.now() - days * 24 * 60 * 60 * 1000
        return entries.value.filter(
            (entry) => new Date(entry.dateTime).getTime() >= cutoff
        )
    }

    function countEntriesByType(type: TrackerEntryType, days = 30): number {
        return entriesWithinDays(days).filter((entry) => entry.type === type)
            .length
    }

    const latestWeight = computed(() =>
        entries.value.find(
            (entry) =>
                entry.type === "weight" && typeof entry.amount === "number"
        )
    )

    return {
        entries: readonly(entries),
        latestWeight,
        loadEntries,
        addEntry,
        updateEntry,
        removeEntry,
        clearAllEntries,
        countEntriesByType,
        entriesWithinDays
    }
}
