<script setup lang="ts">
const { languageCode } = useCurrentLanguage()
const { latestWeight, countEntriesByType } = useHealthTracker()

const cards = computed(() => [
    {
        label:
            languageCode.value === "ar"
                ? "وجبات خلال 30 يوماً"
                : languageCode.value === "fr"
                  ? "Repas sur 30 jours"
                  : languageCode.value === "zh"
                    ? "30 天内进餐"
                    : "Meals in 30 days",
        value: countEntriesByType("meal", 30)
    },
    {
        label:
            languageCode.value === "ar"
                ? "حالات قيء"
                : languageCode.value === "fr"
                  ? "Vomissements"
                  : languageCode.value === "zh"
                    ? "呕吐次数"
                    : "Vomiting events",
        value: countEntriesByType("vomit", 30)
    },
    {
        label:
            languageCode.value === "ar"
                ? "ملاحظات حركة"
                : languageCode.value === "fr"
                  ? "Notes mobilité"
                  : languageCode.value === "zh"
                    ? "活动记录"
                    : "Mobility notes",
        value: countEntriesByType("mobility", 30)
    },
    {
        label:
            languageCode.value === "ar"
                ? "آخر وزن"
                : languageCode.value === "fr"
                  ? "Dernier poids"
                  : languageCode.value === "zh"
                    ? "最新体重"
                    : "Latest weight",
        value: latestWeight.value?.amount
            ? `${latestWeight.value.amount} ${latestWeight.value.unit ?? "kg"}`
            : "—"
    }
])
</script>

<template>
    <section
        class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        aria-label="30 day tracker summary"
    >
        <article
            v-for="card in cards"
            :key="card.label"
            class="border-border bg-paper rounded-[1.6rem] border p-5"
        >
            <p class="text-muted text-sm">{{ card.label }}</p>
            <p class="text-ink mt-2 text-2xl font-semibold">{{ card.value }}</p>
        </article>
    </section>
</template>
