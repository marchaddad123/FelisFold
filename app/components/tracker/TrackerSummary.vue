<script setup lang="ts">
const props = withDefaults(defineProps<{ days?: number }>(), { days: 7 })
const { latestWeight, countEntriesByType } = useHealthTracker()
const cards = computed(() => [
    {
        icon: "◉",
        label: "Meals",
        value: countEntriesByType("meal", props.days)
    },
    {
        icon: "↝",
        label: "Vomiting",
        value: countEntriesByType("vomit", props.days)
    },
    {
        icon: "↗",
        label: "Mobility notes",
        value: countEntriesByType("mobility", props.days)
    },
    {
        icon: "⚖",
        label: "Latest weight",
        value: latestWeight.value?.amount
            ? `${latestWeight.value.amount} ${latestWeight.value.unit ?? "kg"}`
            : "—"
    }
])
</script>

<template>
    <section
        class="grid grid-cols-2 gap-3 lg:grid-cols-4"
        :aria-label="`${days} day tracker summary`"
    >
        <article
            v-for="card in cards"
            :key="card.label"
            class="border-border bg-paper border p-4 sm:p-5"
        >
            <div class="flex items-center justify-between gap-3">
                <span class="text-peach text-xl" aria-hidden="true">{{
                    card.icon
                }}</span
                ><span class="text-muted text-xs">{{ days }} days</span>
            </div>
            <p class="font-editorial text-ink mt-4 text-3xl">
                {{ card.value }}
            </p>
            <p class="text-muted mt-1 text-sm">{{ card.label }}</p>
        </article>
    </section>
</template>
