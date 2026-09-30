<script setup lang="ts">
import {
    cats,
    communityStoryNote,
    licensedScottishFoldPhotos
} from "~/data/cats"

const galleryCats = [cats[0]!, ...licensedScottishFoldPhotos.slice(0, 7)]
const rotationClasses = [
    "-rotate-2",
    "rotate-1",
    "-rotate-1",
    "rotate-2",
    "rotate-1",
    "-rotate-2",
    "rotate-2",
    "-rotate-1"
]
</script>

<template>
    <section
        class="bg-cream paper-texture relative overflow-hidden px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8"
    >
        <div
            class="text-sage/18 font-handwritten pointer-events-none absolute -start-2 top-10 -rotate-12 text-5xl"
            aria-hidden="true"
        >
            &#10047;
        </div>
        <div class="mx-auto max-w-[90rem] pb-14 sm:pb-20">
            <div
                class="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-center"
            >
                <div>
                    <p
                        class="text-sage text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        A life well loved
                    </p>
                    <h2 class="font-editorial text-ink mt-3 text-4xl">
                        Real moments. Real cat. A real reason.
                    </h2>
                    <p class="text-muted mt-4 leading-7">
                        Lotus starts this story. Licensed photos from other
                        Scottish Fold homes widen the picture, while the health
                        guidance remains general and veterinarian-led.
                    </p>
                    <p
                        class="border-sage text-muted mt-5 border-s-2 ps-4 text-sm leading-6"
                    >
                        {{ communityStoryNote }}
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
                    <figure
                        v-for="(cat, index) in galleryCats"
                        :key="cat.id"
                        class="photo-paper bg-[#fffaf1] p-2 pb-3 text-[#18231f]"
                        :class="rotationClasses[index]"
                    >
                        <NuxtImg
                            :src="cat.photo"
                            :alt="cat.caption"
                            :width="cat.width"
                            :height="cat.height"
                            sizes="50vw sm:25vw lg:220px"
                            format="webp"
                            :quality="80"
                            loading="lazy"
                            decoding="async"
                            placeholder
                            class="aspect-[4/5] w-full object-cover"
                            :style="{
                                objectPosition: cat.objectPosition ?? 'center'
                            }"
                        />
                        <figcaption
                            class="mt-2 line-clamp-1 text-center text-xs font-semibold"
                        >
                            {{ cat.name }}
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
        <div
            class="mx-auto flex max-w-[90rem] items-center justify-center gap-4 pb-5 text-center"
            aria-hidden="true"
        >
            <span class="text-peach text-xl">&#128062;</span>
            <p class="font-handwritten text-muted text-sm sm:text-base">
                Different cats. Shared need for thoughtful care.
            </p>
            <RunningCatIcon class="text-sage w-14" />
        </div>
        <WavySectionDivider
            tone="forest"
            class="-mx-4 w-[calc(100%+2rem)] sm:-mx-6 sm:w-[calc(100%+3rem)] lg:-mx-8 lg:w-[calc(100%+4rem)]"
        />
    </section>
</template>
