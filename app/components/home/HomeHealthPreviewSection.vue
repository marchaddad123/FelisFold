<script setup lang="ts">
import { healthTopics } from "~/data/healthTopics"
const { localizedPath } = useLocalizedPath()
</script>

<template>
    <section
        class="dark-panel paper-texture relative overflow-hidden px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8"
    >
        <div
            class="pointer-events-none absolute start-[4%] top-10 rotate-[-14deg] text-4xl text-[#ef9c79]/20"
            aria-hidden="true"
        >
            &#128062;
        </div>
        <div class="mx-auto max-w-[90rem] pb-14 sm:pb-20">
            <div class="grid gap-7 lg:grid-cols-[0.72fr_1.8fr] lg:items-end">
                <div>
                    <p
                        class="text-xs font-bold tracking-[0.2em] text-[#efb79e] uppercase"
                    >
                        Health guides
                    </p>
                    <h2
                        class="font-editorial mt-3 text-4xl leading-[0.98] text-[#fffaf1] sm:text-5xl"
                    >
                        Real information for real cats.
                    </h2>
                    <p class="mt-4 max-w-md leading-7 text-[#c8d5cf]">
                        Clear, practical and evidence-led guides on the
                        questions that matter most for Scottish Folds.
                    </p>
                    <NuxtLink
                        :to="localizedPath('/health')"
                        class="mt-6 inline-flex min-h-12 items-center rounded-full bg-[#fffaf1] px-6 font-bold text-[#18231f]"
                        >Explore all health topics
                        <span class="ms-3" aria-hidden="true">→</span></NuxtLink
                    >
                </div>
                <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <HealthTopicCard
                        v-for="topic in healthTopics.slice(0, 4)"
                        :key="topic.slug"
                        :topic="topic"
                        dark
                    />
                </div>
            </div>
        </div>
        <WavySectionDivider
            tone="paper"
            class="-mx-4 w-[calc(100%+2rem)] sm:-mx-6 sm:w-[calc(100%+3rem)] lg:-mx-8 lg:w-[calc(100%+4rem)]"
        />
    </section>
</template>
