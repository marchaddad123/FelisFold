<script setup lang="ts">
import { siteText, textForLanguage } from "~/data/siteText"

const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()

const badge = computed(() =>
    textForLanguage(siteText.home.badge, languageCode.value)
)
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
</script>

<template>
    <section class="overflow-hidden pt-8 sm:pt-14 lg:pt-18">
        <div
            class="mx-auto grid max-w-7xl gap-9 px-4 sm:px-5 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8"
        >
            <div>
                <div
                    class="border-border bg-paper/85 text-ink inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm"
                >
                    <span aria-hidden="true">🐾</span>
                    {{ badge }}
                </div>
                <h1
                    class="text-ink mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl"
                >
                    {{ title }}
                </h1>
                <p
                    class="text-muted mt-6 max-w-2xl text-lg leading-8 sm:text-xl"
                >
                    {{ intro }}
                </p>
                <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <NuxtLink
                        :to="localizedPath('/lotus')"
                        class="bg-ink text-surface-inverse inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 font-medium transition hover:-translate-y-0.5"
                    >
                        {{ meetLotus }}
                    </NuxtLink>
                    <NuxtLink
                        :to="localizedPath('/health')"
                        class="border-border bg-paper text-ink hover:border-lilac/25 inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-3 font-medium transition hover:-translate-y-0.5"
                    >
                        {{ exploreHealth }}
                    </NuxtLink>
                </div>
                <MedicalInformationNotice class="mt-6 max-w-2xl" />
            </div>

            <div class="relative">
                <div
                    class="from-lilac-soft to-sage-soft absolute -inset-5 -z-10 rounded-[3rem] bg-gradient-to-br via-transparent blur-2xl"
                    aria-hidden="true"
                />
                <NuxtImg
                    src="/images/lotus/lotus-home.jpg"
                    alt="Lotus, the Scottish Fold mix who inspired FoldCare"
                    width="1152"
                    height="1536"
                    sizes="100vw lg:50vw xl:700px"
                    format="webp"
                    :quality="88"
                    preload
                    fetchpriority="high"
                    class="aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-[0_35px_90px_rgb(65_54_69/0.14)]"
                />
            </div>
        </div>
    </section>
</template>
