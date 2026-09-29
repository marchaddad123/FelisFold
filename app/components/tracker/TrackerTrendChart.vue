<script setup lang="ts">
const props = withDefaults(defineProps<{ days?: number }>(), { days: 7 })
const { entriesWithinDays } = useHealthTracker()
const scoreKeys = [
    "appetiteScore",
    "moodScore",
    "mobilityScore",
    "painScore"
] as const
const lineColors = ["#be4825", "#7d4aae", "#2f7591", "#a5362b"]
const labels = ["Appetite", "Mood", "Mobility", "Pain signs"]
const recentEntries = computed(() =>
    [...entriesWithinDays(props.days)].reverse()
)
const series = computed(() =>
    scoreKeys.map((key, index) => ({
        label: labels[index],
        color: lineColors[index],
        points: recentEntries.value
            .map((entry, pointIndex) => {
                const score = entry[key]
                return typeof score === "number"
                    ? {
                          x:
                              recentEntries.value.length <= 1
                                  ? 50
                                  : (pointIndex /
                                        (recentEntries.value.length - 1)) *
                                    100,
                          y: 100 - ((score - 1) / 4) * 100
                      }
                    : null
            })
            .filter(
                (point): point is { x: number; y: number } => point !== null
            )
    }))
)
</script>

<template>
    <section class="border-border bg-paper border p-5 sm:p-7">
        <div class="flex flex-wrap items-end justify-between gap-4">
            <div>
                <p
                    class="text-sky text-xs font-bold tracking-[0.18em] uppercase"
                >
                    Weekly overview
                </p>
                <h2 class="font-editorial text-ink mt-2 text-3xl">
                    Patterns, not perfect days.
                </h2>
            </div>
            <div class="flex flex-wrap gap-3 text-xs">
                <span
                    v-for="item in series"
                    :key="item.label"
                    class="flex items-center gap-1.5"
                    ><span
                        class="size-2.5 rounded-full"
                        :style="{ backgroundColor: item.color }"
                    />{{ item.label }}</span
                >
            </div>
        </div>
        <div v-if="series.some((item) => item.points.length)" class="mt-6">
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                class="h-56 w-full"
                role="img"
                :aria-label="`${days} day health score trends`"
            >
                <path
                    v-for="line in [0, 25, 50, 75, 100]"
                    :key="line"
                    :d="`M0 ${line}H100`"
                    stroke="currentColor"
                    class="text-border"
                    stroke-width="0.5"
                    vector-effect="non-scaling-stroke"
                />
                <polyline
                    v-for="item in series"
                    :key="item.label"
                    :points="
                        item.points
                            .map((point) => `${point.x},${point.y}`)
                            .join(' ')
                    "
                    fill="none"
                    :stroke="item.color"
                    stroke-width="2"
                    vector-effect="non-scaling-stroke"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
        <div
            v-else
            class="border-border mt-6 border border-dashed p-8 text-center"
        >
            <p class="font-editorial text-ink text-xl">
                Your first trend will appear here.
            </p>
            <p class="text-muted mt-2 text-sm">
                Add appetite, mood, mobility or pain entries to build a simple
                timeline.
            </p>
        </div>
    </section>
</template>
