<script setup lang="ts">
import type { HealthTopic } from "~/types/foldcare"
import { textForLanguage } from "~/data/siteText"

const props = withDefaults(
    defineProps<{ topic: HealthTopic; dark?: boolean }>(),
    { dark: false }
)
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const title = computed(() =>
    textForLanguage(props.topic.title, languageCode.value)
)
const summary = computed(() =>
    textForLanguage(props.topic.summary, languageCode.value)
)
const imageBySlug: Record<
    string,
    {
        src: string
        alt: string
        width: number
        height: number
        position?: string
    }
> = {
    osteochondrodysplasia: {
        src: "/images/scottish-folds/silver-tabby-kitten.jpg",
        alt: "A silver tabby Scottish Fold kitten; an illustrative breed photo",
        width: 1422,
        height: 1829,
        position: "center 30%"
    },
    "pain-and-mobility": {
        src: "/images/scottish-folds/blue-fold-portrait.jpg",
        alt: "A blue Scottish Fold sitting indoors; an illustrative breed photo",
        width: 810,
        height: 1080,
        position: "center 42%"
    },
    vomiting: {
        src: "/images/lotus/lotus-feeding.jpg",
        alt: "Lotus eating a measured meal",
        width: 1152,
        height: 1536,
        position: "center 58%"
    },
    pkd: {
        src: "/images/scottish-folds/black-fold-portrait.png",
        alt: "A black Scottish Fold resting indoors; an illustrative breed photo",
        width: 1920,
        height: 2218,
        position: "center 44%"
    },
    "heart-health": {
        src: "/images/scottish-folds/fold-kitten-playing.jpg",
        alt: "A Scottish Fold kitten playing with a ball; an illustrative breed photo",
        width: 1920,
        height: 1280,
        position: "center 52%"
    },
    "ears-and-grooming": {
        src: "/images/scottish-folds/fold-kitten-ball.jpg",
        alt: "A young Scottish Fold at play; an illustrative breed photo",
        width: 1920,
        height: 1280,
        position: "center 48%"
    },
    "weight-and-quality-of-life": {
        src: "/images/scottish-folds/red-fold-portrait.jpg",
        alt: "A red Scottish Fold sitting indoors; an illustrative breed photo",
        width: 1006,
        height: 1633,
        position: "center 35%"
    },
    "when-to-call-a-vet": {
        src: "/images/lotus/lotus-with-creator.jpg",
        alt: "Lotus with his owner",
        width: 864,
        height: 1536,
        position: "center 30%"
    }
}
const topicImage = computed(
    () => imageBySlug[props.topic.slug] ?? imageBySlug.osteochondrodysplasia!
)
</script>

<template>
    <NuxtLink
        :to="localizedPath(`/health/${topic.slug}`)"
        class="group flex min-w-0 flex-col overflow-hidden rounded-[1.35rem] border transition duration-300 hover:-translate-y-1"
        :class="
            dark
                ? 'border-white/15 bg-white/5 text-[#fffaf1]'
                : 'border-border bg-paper text-ink shadow-[0_12px_35px_rgb(45_32_20/0.06)]'
        "
    >
        <NuxtImg
            :src="topicImage.src"
            :alt="topicImage.alt"
            :width="topicImage.width"
            :height="topicImage.height"
            sizes="100vw sm:50vw lg:320px"
            format="webp"
            :quality="82"
            loading="lazy"
            decoding="async"
            placeholder
            class="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            :style="{ objectPosition: topicImage.position ?? 'center' }"
        />
        <div class="flex flex-1 flex-col p-5">
            <div class="flex items-center justify-between gap-3">
                <span class="text-xl" aria-hidden="true">{{ topic.icon }}</span
                ><span
                    class="text-xs font-bold tracking-[0.15em] uppercase"
                    :class="dark ? 'text-[#efb79e]' : 'text-peach'"
                    >Guide</span
                >
            </div>
            <h3 class="font-editorial mt-3 text-xl leading-tight">
                {{ title }}
            </h3>
            <p
                class="mt-2 line-clamp-3 flex-1 text-sm leading-6"
                :class="dark ? 'text-[#c8d5cf]' : 'text-muted'"
            >
                {{ summary }}
            </p>
            <span
                class="mt-4 inline-flex items-center text-sm font-bold"
                :class="dark ? 'text-[#efb79e]' : 'text-peach'"
                >Read the guide
                <span
                    class="ms-2 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                    aria-hidden="true"
                    >→</span
                ></span
            >
        </div>
    </NuxtLink>
</template>
