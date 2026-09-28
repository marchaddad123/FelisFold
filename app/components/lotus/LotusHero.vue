<script setup lang="ts">
defineProps<{
    eyebrow: string
    title: string
    copy: string
}>()
</script>

<template>
    <section class="overflow-hidden pt-8 sm:pt-12 lg:pt-16">
        <div
            class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8"
        >
            <div class="order-2 lg:order-1">
                <p
                    class="text-lilac text-sm font-semibold tracking-[0.18em] uppercase"
                >
                    {{ eyebrow }}
                </p>
                <h1
                    class="text-ink mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl"
                >
                    {{ title }}
                </h1>
                <p class="text-muted mt-5 max-w-2xl text-lg leading-8">
                    {{ copy }}
                </p>
                <div class="mt-7 flex flex-wrap gap-2">
                    <span
                        class="bg-lilac-soft text-ink rounded-full px-4 py-2 text-sm font-medium"
                        >Scottish Fold mix</span
                    >
                    <span
                        class="bg-sky-soft text-ink rounded-full px-4 py-2 text-sm font-medium"
                        >Siamese mix</span
                    >
                    <span
                        class="bg-sage-soft text-ink rounded-full px-4 py-2 text-sm font-medium"
                        >~5 years</span
                    >
                </div>
            </div>
            <div class="order-1 lg:order-2">
                <NuxtImg
                    src="/images/lotus/lotus-portrait.jpg"
                    alt="Lotus, the Scottish Fold mix behind FoldCare"
                    width="1536"
                    height="1536"
                    sizes="100vw lg:52vw xl:680px"
                    format="webp"
                    :quality="88"
                    preload
                    fetchpriority="high"
                    class="aspect-[4/3] w-full rounded-[2.4rem] object-cover object-[center_40%] shadow-[0_30px_80px_rgb(65_54_69/0.14)] lg:aspect-[5/4]"
                />
            </div>
        </div>
    </section>
</template>
