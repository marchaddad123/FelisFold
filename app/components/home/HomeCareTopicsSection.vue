<script setup lang="ts">
const { localizedPath } = useLocalizedPath()
const topics = [
    {
        icon: "↗",
        title: "Early signs to watch",
        copy: "Spot changes early and know when to see a vet.",
        to: "/health/when-to-call-a-vet"
    },
    {
        icon: "◡",
        title: "Nutrition for Folds",
        copy: "Complete diets, hydration and gentler feeding habits.",
        to: "/nutrition"
    },
    {
        icon: "♡",
        title: "Daily care & comfort",
        copy: "Make home easier on sore joints without removing choice.",
        to: "/care"
    },
    {
        icon: "＋",
        title: "Vet visits & monitoring",
        copy: "Turn daily observations into useful clinical context.",
        to: "/tracker"
    }
]
</script>

<template>
    <section
        id="home-care-topics"
        class="bg-paper paper-texture relative overflow-hidden px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8"
    >
        <div
            class="mx-auto grid max-w-[90rem] gap-8 pb-14 sm:pb-20 xl:grid-cols-[0.85fr_1.65fr] xl:items-end"
        >
            <div>
                <p
                    class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                >
                    Practical care
                </p>
                <h2
                    class="font-editorial text-ink mt-3 text-4xl leading-[1] sm:text-5xl"
                >
                    Guidance for a healthier, happier life.
                </h2>
                <p class="text-muted mt-4 max-w-lg leading-7">
                    Start with what you notice, understand what it can mean,
                    then take one practical next step.
                </p>
            </div>
            <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <NuxtLink
                    v-for="topic in topics"
                    :key="topic.title"
                    :to="localizedPath(topic.to)"
                    class="group border-border bg-cream/55 hover:bg-cream rounded-[1.4rem] border p-5 shadow-[0_12px_30px_rgb(45_32_20/0.05)] transition hover:-translate-y-1"
                >
                    <span
                        class="text-sky font-editorial text-3xl"
                        aria-hidden="true"
                        >{{ topic.icon }}</span
                    >
                    <h3
                        class="font-editorial text-ink mt-6 text-xl leading-tight"
                    >
                        {{ topic.title }}
                    </h3>
                    <p class="text-muted mt-2 text-sm leading-6">
                        {{ topic.copy }}
                    </p>
                    <span
                        class="text-peach group-hover:bg-peach group-hover:text-on-accent mt-5 inline-grid size-9 place-items-center rounded-full border border-current transition"
                        aria-hidden="true"
                        >→</span
                    >
                </NuxtLink>
            </div>
        </div>
        <WavySectionDivider
            tone="cream"
            class="-mx-4 w-[calc(100%+2rem)] sm:-mx-6 sm:w-[calc(100%+3rem)] lg:-mx-8 lg:w-[calc(100%+4rem)]"
        />
    </section>
</template>
