<script setup lang="ts">
import type { HealthTopic } from "~/types/foldcare"
import { catPhotoById } from "~/data/cats"
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
const illustrativePhotoLabel = computed(() => {
    if (languageCode.value === "ar") return "صورة توضيحية · ليست تشخيصًا"
    if (languageCode.value === "fr")
        return "Photo d’illustration · aucun diagnostic"
    if (languageCode.value === "zh") return "示意照片 · 非诊断"
    return "Illustrative photo · no diagnosis"
})
type TopicImage = {
    photo: string
    caption: string
    width: number
    height: number
    objectPosition?: string
    isIllustrative?: boolean
}

const imageBySlug: Record<string, TopicImage> = {
    osteochondrodysplasia: {
        ...catPhotoById("dark-grey-fold"),
        isIllustrative: true
    },
    "pain-and-mobility": {
        ...catPhotoById("fold-on-floor"),
        isIllustrative: true
    },
    vomiting: {
        photo: "/images/lotus/lotus-feeding.jpg",
        caption: "Lotus eating a measured meal",
        width: 1152,
        height: 1536,
        objectPosition: "center 58%"
    },
    pkd: {
        ...catPhotoById("grey-fold-dark-setting"),
        isIllustrative: true
    },
    "heart-health": {
        ...catPhotoById("raised-paw-fold"),
        isIllustrative: true
    },
    "ears-and-grooming": {
        ...catPhotoById("white-ginger-amber-eyes"),
        isIllustrative: true
    },
    "weight-and-quality-of-life": {
        ...catPhotoById("fold-on-sofa"),
        isIllustrative: true
    },
    "when-to-call-a-vet": {
        photo: "/images/lotus/lotus-with-creator.jpg",
        caption: "Lotus with his owner",
        width: 864,
        height: 1536,
        objectPosition: "center 30%"
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
        <div class="relative overflow-hidden">
            <NuxtImg
                :src="topicImage.photo"
                :alt="topicImage.caption"
                :width="topicImage.width"
                :height="topicImage.height"
                sizes="100vw sm:50vw lg:320px"
                format="webp"
                :quality="82"
                loading="lazy"
                decoding="async"
                placeholder
                class="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                :style="{
                    objectPosition: topicImage.objectPosition ?? 'center'
                }"
            />
            <span
                v-if="topicImage.isIllustrative"
                class="absolute start-2 bottom-2 rounded-full bg-[#071f1a]/90 px-2.5 py-1 text-[0.65rem] leading-none font-bold tracking-wide text-white shadow-sm backdrop-blur-sm"
            >
                {{ illustrativePhotoLabel }}
            </span>
        </div>
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
