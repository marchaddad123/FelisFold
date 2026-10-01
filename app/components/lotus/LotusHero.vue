<script setup lang="ts">
defineProps<{
    eyebrow: string
    title: string
    subtitle: string
    copy: string
    storyButton: string
    healthButton: string
    note: string
    paperNote: string
    imageAlt: string
}>()
const { localizedPath } = useLocalizedPath()
</script>

<template>
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
                    {{ eyebrow }}
                </p>
                <h1
                    class="font-editorial text-ink mt-3 text-5xl leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
                >
                    {{ title }}
                    <span class="block text-3xl sm:text-4xl lg:text-5xl">{{
                        subtitle
                    }}</span>
                </h1>
                <p class="text-muted mt-5 max-w-xl text-lg leading-8">
                    {{ copy }}
                </p>
                <div class="mt-7 flex flex-wrap gap-3">
                    <a
                        href="#lotus-story"
                        class="bg-peach text-on-accent inline-flex min-h-12 items-center rounded-full px-6 font-bold"
                        >{{ storyButton }}
                        <span class="ms-3" aria-hidden="true">🐾</span></a
                    ><NuxtLink
                        :to="localizedPath('/health')"
                        class="editorial-link text-ink inline-flex min-h-12 items-center px-2 font-semibold"
                        >{{ healthButton }}
                        <span class="ms-2" aria-hidden="true">→</span></NuxtLink
                    >
                </div>
            </div>
            <div
                class="relative order-1 min-h-[23rem] lg:order-2 lg:min-h-[39rem]"
            >
                <NuxtImg
                    src="/images/lotus/lotus-portrait.jpg"
                    :alt="imageAlt"
                    width="1536"
                    height="1536"
                    sizes="100vw lg:60vw"
                    format="webp"
                    :quality="88"
                    preload
                    fetchpriority="high"
                    class="absolute inset-0 size-full object-cover object-[center_40%]"
                /><HandwrittenNote
                    :text="note"
                    rotate="left"
                    tone="light"
                    class="absolute start-6 top-7 drop-shadow-lg"
                /><HandwrittenNote
                    :text="paperNote"
                    rotate="right"
                    tone="paper"
                    class="absolute end-5 bottom-7 max-w-40 bg-[#fffaf1]/88 p-3 shadow-lg"
                />
            </div>
        </div>
        <WavySectionDivider tone="sky" />
    </section>
</template>
