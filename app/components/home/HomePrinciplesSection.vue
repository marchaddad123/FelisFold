<script setup lang="ts">
import { siteText, textForLanguage } from "~/data/siteText"

const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const heading = computed(() =>
    languageCode.value === "ar"
        ? "ما لاحظته في لوتس"
        : languageCode.value === "fr"
          ? "Ce que j'ai remarqué chez Lotus"
          : languageCode.value === "zh"
            ? "我在 Lotus 身上注意到的变化"
            : "What I noticed in Lotus"
)
const copy = computed(() =>
    textForLanguage(siteText.home.storyCopy, languageCode.value)
)
</script>

<template>
    <section
        class="bg-sky-soft paper-texture relative overflow-hidden px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8"
    >
        <div
            class="mx-auto grid max-w-[90rem] gap-10 pb-12 sm:pb-16 lg:grid-cols-[0.9fr_1.05fr_0.72fr] lg:items-center"
        >
            <div class="relative mx-auto max-w-md lg:mx-0">
                <NuxtImg
                    src="/images/lotus/lotus-sunlight.jpg"
                    alt="Lotus looking up in warm sunlight"
                    width="1152"
                    height="1536"
                    sizes="90vw sm:430px"
                    format="webp"
                    :quality="85"
                    loading="lazy"
                    decoding="async"
                    placeholder
                    class="aspect-[4/5] w-full rounded-[48%_48%_8%_8%] object-cover object-[center_38%]"
                />
                <HandwrittenNote
                    text="It started with these little changes…"
                    rotate="left"
                    tone="paper"
                    class="absolute start-3 top-4 max-w-36 rounded-sm bg-[#fffaf1]/88 px-3 py-2 shadow-sm sm:start-5 sm:top-6"
                />
            </div>
            <div>
                <p
                    class="text-sky text-xs font-bold tracking-[0.2em] uppercase"
                >
                    Our story
                </p>
                <h2
                    class="font-editorial text-ink mt-3 text-4xl leading-[1] tracking-[-0.04em] sm:text-5xl"
                >
                    {{ heading }}
                </h2>
                <p class="text-muted mt-5 text-lg leading-8">{{ copy }}</p>
                <p class="text-muted mt-4 leading-7">
                    He began jumping less, seemed stiffer, had recurring
                    vomiting episodes, and his eating habits changed. Those
                    observations started questions—not a diagnosis.
                </p>
                <NuxtLink
                    :to="localizedPath('/lotus')"
                    class="border-ink text-ink mt-6 inline-flex min-h-11 items-center rounded-full border px-5 font-semibold"
                    >Read our story
                    <span class="ms-3" aria-hidden="true">→</span></NuxtLink
                >
            </div>
            <PhotoNoteCard
                src="/images/lotus/lotus-cozy.jpg"
                alt="Lotus resting on a soft blanket"
                :width="864"
                :height="1536"
                caption="Same boy. Still curious. Still loving life."
                rotate="right"
            />
        </div>
        <WavySectionDivider
            tone="forest"
            class="-mx-4 w-[calc(100%+2rem)] sm:-mx-6 sm:w-[calc(100%+3rem)] lg:-mx-8 lg:w-[calc(100%+4rem)]"
        />
    </section>
</template>
