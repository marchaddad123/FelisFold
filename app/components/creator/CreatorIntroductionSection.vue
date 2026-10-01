<script setup lang="ts">
import { creatorProfile } from "~/data/creatorProfile"

const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()

const text = computed(() => {
    if (languageCode.value === "ar")
        return {
            eyebrow: "الشخص خلف FelisFold",
            title: "بُني بالبرمجيات، وبدأ بحب لوتس.",
            copy: "يحوّل مارك الملاحظات اليومية والأسئلة الصعبة إلى تجربة واضحة تربط قصة لوتس بالمعلومات البيطرية العامة.",
            link: "تعرّف على مارك وطريقة بناء FelisFold"
        }
    if (languageCode.value === "fr")
        return {
            eyebrow: "La personne derrière FelisFold",
            title: "Construit avec du code, né de l'amour de Lotus.",
            copy: `${creatorProfile.name} transforme les observations du quotidien et les questions difficiles en une expérience claire qui relie l'histoire de Lotus aux connaissances vétérinaires générales.`,
            link: `Découvrir ${creatorProfile.name} et la création de FelisFold`
        }
    if (languageCode.value === "zh")
        return {
            eyebrow: "FelisFold 背后的人",
            title: "用代码搭建，因爱 Lotus 而开始。",
            copy: `${creatorProfile.name} 把日常观察和棘手问题整理成清晰的体验，将 Lotus 的故事与通用兽医资料连接起来。`,
            link: `了解 ${creatorProfile.name} 与 FelisFold 的创作过程`
        }
    return {
        eyebrow: "The person behind FelisFold",
        title: "Built with software. Started with love for Lotus.",
        copy: `${creatorProfile.name} turns everyday observations and difficult questions into a clear experience that connects Lotus's story with broader veterinary information.`,
        link: `Meet ${creatorProfile.name} and see how FelisFold is made`
    }
})
</script>

<template>
    <section
        id="creator-introduction"
        class="bg-sage-soft paper-texture px-4 py-14 sm:px-6 sm:py-20"
    >
        <div
            class="mx-auto grid max-w-[90rem] gap-9 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"
        >
            <figure class="relative mx-auto w-full max-w-md lg:mx-0">
                <NuxtImg
                    :src="creatorProfile.creatorWithLotusPhoto.sourcePath"
                    :alt="
                        creatorProfile.creatorWithLotusPhoto.altText[
                            languageCode
                        ]
                    "
                    :width="creatorProfile.creatorWithLotusPhoto.width"
                    :height="creatorProfile.creatorWithLotusPhoto.height"
                    sizes="100vw sm:440px lg:34vw"
                    format="webp"
                    :quality="84"
                    loading="lazy"
                    decoding="async"
                    placeholder
                    class="aspect-[4/3] w-full rounded-[46%_46%_1.5rem_1.5rem] object-cover"
                    :style="{
                        objectPosition:
                            creatorProfile.creatorWithLotusPhoto.objectPosition
                    }"
                />
                <figcaption
                    class="bg-paper text-ink absolute end-3 -bottom-4 max-w-[12rem] -rotate-2 px-4 py-3 text-sm shadow-lg"
                >
                    {{ creatorProfile.name }} ·
                    {{ creatorProfile.relationshipToLotus[languageCode] }}
                </figcaption>
            </figure>
            <div class="max-w-3xl lg:ps-5">
                <p
                    class="text-sage text-xs font-bold tracking-[0.2em] uppercase"
                >
                    {{ text.eyebrow }}
                </p>
                <h2
                    class="font-editorial text-ink mt-3 text-4xl leading-tight sm:text-5xl"
                >
                    {{ text.title }}
                </h2>
                <p class="text-muted mt-5 text-lg leading-8">
                    {{ text.copy }}
                </p>
                <p class="text-muted mt-4 leading-7">
                    {{ creatorProfile.background[languageCode] }}
                </p>
                <NuxtLink
                    :to="localizedPath('/about')"
                    class="bg-peach text-on-accent mt-7 inline-flex min-h-11 items-center rounded-full px-5 font-bold transition hover:-translate-y-0.5"
                >
                    {{ text.link }} →
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
