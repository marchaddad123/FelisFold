<script setup lang="ts">
import { cats, licensedScottishFoldPhotos } from "~/data/cats"
import { siteText, textForLanguage } from "~/data/siteText"

const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const title = computed(() =>
    textForLanguage(siteText.home.title, languageCode.value)
)
const intro = computed(() =>
    textForLanguage(siteText.home.intro, languageCode.value)
)
const meetLotus = computed(() =>
    textForLanguage(siteText.home.meetLotus, languageCode.value)
)
const exploreHealth = computed(() =>
    textForLanguage(siteText.home.exploreHealth, languageCode.value)
)
const featuredCatFaces = [cats[0]!, ...licensedScottishFoldPhotos.slice(0, 3)]
</script>

<template>
    <section class="paper-texture relative">
        <div
            class="mx-auto grid max-w-[90rem] lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch"
        >
            <div
                class="order-2 flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:order-1 lg:px-8"
            >
                <p
                    class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                >
                    Scottish Fold health, care & real life
                </p>
                <h1
                    class="font-editorial text-ink mt-4 max-w-3xl text-[2.8rem] leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-[4.65rem] xl:text-[5.35rem]"
                >
                    {{ title }}
                </h1>
                <p
                    class="text-muted mt-5 max-w-xl text-base leading-7 sm:text-lg"
                >
                    {{ intro }}
                </p>
                <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <NuxtLink
                        :to="localizedPath('/lotus')"
                        class="bg-peach text-on-accent inline-flex min-h-12 items-center justify-center rounded-full px-7 font-bold shadow-sm transition hover:-translate-y-0.5"
                        >{{ meetLotus }}
                        <span class="ms-3" aria-hidden="true"
                            >🐾</span
                        ></NuxtLink
                    >
                    <NuxtLink
                        :to="localizedPath('/health')"
                        class="editorial-link text-ink inline-flex min-h-12 items-center justify-center px-2 font-semibold"
                        >{{ exploreHealth }}
                        <span class="ms-3" aria-hidden="true">→</span></NuxtLink
                    >
                </div>
                <div class="mt-7 flex flex-wrap items-center gap-3">
                    <div class="flex -space-x-2 rtl:space-x-reverse">
                        <NuxtImg
                            v-for="cat in featuredCatFaces"
                            :key="cat.id"
                            :src="cat.photo"
                            :alt="cat.name"
                            :width="cat.width"
                            :height="cat.height"
                            sizes="44px"
                            format="webp"
                            :quality="76"
                            class="border-cream size-11 rounded-full border-2 object-cover"
                            :style="{
                                objectPosition: cat.objectPosition ?? 'center'
                            }"
                        />
                    </div>
                    <p
                        class="text-muted max-w-28 text-xs leading-5 sm:max-w-36"
                    >
                        A growing resource for every Fold.
                    </p>
                    <span
                        class="font-handwritten text-peach text-2xl"
                        aria-hidden="true"
                        >♡</span
                    >
                </div>
            </div>
            <div
                class="relative order-1 min-h-[22rem] overflow-hidden sm:min-h-[30rem] lg:order-2 lg:min-h-[44rem]"
            >
                <NuxtImg
                    src="/images/lotus/lotus-home.jpg"
                    alt="Lotus, the Scottish Fold mix who inspired FelisFold"
                    width="1152"
                    height="1536"
                    sizes="100vw lg:58vw xl:860px"
                    format="webp"
                    :quality="88"
                    preload
                    fetchpriority="high"
                    class="absolute inset-0 size-full object-cover object-[center_37%]"
                />
                <div
                    class="from-cream absolute inset-y-0 start-0 hidden w-28 bg-gradient-to-r to-transparent lg:block"
                    aria-hidden="true"
                />
                <HandwrittenNote
                    text="Lotus — our why"
                    rotate="left"
                    tone="paper"
                    class="absolute start-7 top-7 rounded-sm bg-[#fffaf1]/88 px-3 py-2 shadow-sm sm:start-10 sm:top-10"
                />
                <HandwrittenNote
                    text="Same curious eyes. A healthier tomorrow."
                    rotate="right"
                    tone="light"
                    class="absolute end-5 top-5 hidden drop-shadow-md sm:block lg:end-9 lg:top-9"
                />
                <div
                    class="absolute end-5 bottom-5 max-w-44 rotate-2 bg-[#fff4dc] p-4 shadow-xl sm:end-8 sm:bottom-8"
                >
                    <HandwrittenNote
                        text="Small steps. Brighter days. For every Fold."
                        tone="paper"
                    />
                </div>
            </div>
        </div>
        <div
            class="bg-cream text-peach relative z-10 -mt-5 flex items-center justify-center gap-5 py-3"
            aria-hidden="true"
        >
            <span>🐾</span
            ><RunningCatIcon
                cat-color="black"
                class="w-20 text-[#5b2a1e]"
            /><span>🐾</span><span>🐾</span>
        </div>
        <WavySectionDivider tone="sky" class="-mb-px" />
    </section>
</template>
