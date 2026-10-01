<script setup lang="ts">
import { isLanguageCode } from "~/utils/languages"
import { lotusTimeline } from "~/data/lotusTimeline"
import { lotusMediaById } from "~/data/lotusMedia"
import { lotusNotebookSections, lotusPageText } from "~/data/lotusStory"

definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()
const pageText = computed(() => lotusPageText[languageCode.value])

const portraitPhoto = lotusMediaById("lotus-portrait")
const earlierPhoto = lotusMediaById("lotus-with-creator-younger")
const currentPhoto = lotusMediaById("lotus-with-creator-now")
const familyPhoto = lotusMediaById("lotus-family")
const cuddlingPhoto = lotusMediaById("lotus-cuddling")
const posturePhoto = lotusMediaById("lotus-posture")
const galleryPhotos = [
    lotusMediaById("lotus-glasses"),
    lotusMediaById("lotus-grooming"),
    lotusMediaById("lotus-feeding"),
    lotusMediaById("lotus-home"),
    lotusMediaById("lotus-cozy")
]

usePageSeo({
    title: computed(() => `${pageText.value.heroTitle} — FelisFold`),
    description: computed(() => pageText.value.heroCopy),
    image: portraitPhoto.sourcePath
})
</script>

<template>
    <div>
        <LotusHero
            :eyebrow="pageText.heroEyebrow"
            :title="pageText.heroTitle"
            :subtitle="pageText.heroSubtitle"
            :copy="pageText.heroCopy"
            :story-button="pageText.storyButton"
            :health-button="pageText.healthButton"
            :note="pageText.heroNote"
            :paper-note="pageText.heroPaperNote"
            :image-alt="portraitPhoto.altText[languageCode]"
        />

        <section class="bg-sky-soft paper-texture px-4 pb-12 sm:px-6 sm:pb-16">
            <div
                class="mx-auto grid max-w-[90rem] gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"
            >
                <div>
                    <p
                        class="text-sky text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        {{ pageText.glanceEyebrow }}
                    </p>
                    <h2
                        class="font-editorial text-ink mt-2 text-4xl leading-tight"
                    >
                        {{ pageText.glanceTitle }}
                    </h2>
                    <p class="text-muted mt-4 leading-7">
                        {{ pageText.glanceCopy }}
                    </p>
                </div>
                <dl
                    class="border-sky/20 grid grid-cols-2 border-s border-t sm:grid-cols-5"
                >
                    <div
                        v-for="fact in pageText.facts"
                        :key="fact[0]"
                        class="border-sky/20 border-e border-b p-4"
                    >
                        <dt class="text-muted text-xs uppercase">
                            {{ fact[0] }}
                        </dt>
                        <dd
                            class="font-editorial text-ink mt-2 text-lg leading-tight"
                        >
                            {{ fact[1] }}
                        </dd>
                    </div>
                </dl>
            </div>
        </section>

        <section class="paper-texture px-4 py-10 sm:px-6">
            <CreatorMiniProfile class="mx-auto max-w-[90rem]" context="lotus" />
        </section>

        <section
            id="lotus-story"
            class="paper-texture px-4 py-14 sm:px-6 sm:py-20"
        >
            <div
                class="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
            >
                <div>
                    <p
                        class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        {{ pageText.originEyebrow }}
                    </p>
                    <h2
                        class="font-editorial text-ink mt-2 text-4xl leading-tight sm:text-5xl"
                    >
                        {{ pageText.originTitle }}
                    </h2>
                    <p
                        v-for="paragraph in pageText.originParagraphs"
                        :key="paragraph"
                        class="text-muted mt-4 leading-7"
                    >
                        {{ paragraph }}
                    </p>
                    <div class="border-peach/50 mt-6 border-s-4 ps-5">
                        <h3 class="font-editorial text-ink text-2xl">
                            {{ pageText.ownerObservationLabel }}
                        </h3>
                        <p class="text-muted mt-2 text-sm leading-6">
                            {{ pageText.ownerObservationCopy }}
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4 sm:gap-6">
                    <PhotoNoteCard
                        :src="earlierPhoto.sourcePath"
                        :alt="earlierPhoto.altText[languageCode]"
                        :width="earlierPhoto.width"
                        :height="earlierPhoto.height"
                        :caption="pageText.earlyCaption"
                        rotate="left"
                    />
                    <PhotoNoteCard
                        :src="familyPhoto.sourcePath"
                        :alt="familyPhoto.altText[languageCode]"
                        :width="familyPhoto.width"
                        :height="familyPhoto.height"
                        :caption="pageText.familyCaption"
                        rotate="right"
                    />
                </div>
            </div>

            <LotusStoryTimeline
                class="mx-auto mt-16 max-w-[90rem]"
                :heading="pageText.timelineTitle"
                :copy="pageText.timelineCopy"
                :items="lotusTimeline"
            />
        </section>

        <section class="bg-sky-soft paper-texture px-4 py-14 sm:px-6 sm:py-20">
            <LotusBeforeNowComparison
                class="mx-auto max-w-[90rem]"
                :eyebrow="pageText.beforeNowEyebrow"
                :title="pageText.beforeNowTitle"
                :before-label="pageText.beforeLabel"
                :before-copy="pageText.beforeCopy"
                :before-items="pageText.beforeItems"
                :now-label="pageText.nowLabel"
                :now-copy="pageText.nowCopy"
                :now-items="pageText.nowItems"
                :before-photo="earlierPhoto"
                :now-photo="posturePhoto"
            />
        </section>

        <section
            class="dark-panel organic-top paper-texture px-4 py-14 sm:px-6 sm:py-20"
        >
            <div
                class="mx-auto grid max-w-[90rem] gap-9 lg:grid-cols-[0.68fr_1.32fr] lg:items-center"
            >
                <div>
                    <p
                        class="text-xs font-bold tracking-[0.2em] text-[#efb79e] uppercase"
                    >
                        {{ pageText.dailyEyebrow }}
                    </p>
                    <h2
                        class="font-editorial mt-2 text-5xl leading-tight text-[#fffaf1]"
                    >
                        {{ pageText.dailyTitle }}
                    </h2>
                    <p class="mt-4 leading-7 text-[#c8d5cf]">
                        {{ pageText.dailyCopy }}
                    </p>
                    <div class="mt-7 border-s-2 border-[#efb79e] ps-5">
                        <h3 class="font-editorial text-2xl text-[#fffaf1]">
                            {{ pageText.kinderTitle }}
                        </h3>
                        <p class="mt-2 text-sm leading-6 text-[#c8d5cf]">
                            {{ pageText.kinderCopy }}
                        </p>
                    </div>
                </div>
                <div class="grid gap-4 sm:grid-cols-2">
                    <figure
                        v-for="photo in [familyPhoto, cuddlingPhoto]"
                        :key="photo.id"
                        class="border border-white/15 bg-white/5"
                    >
                        <NuxtImg
                            :src="photo.sourcePath"
                            :alt="photo.altText[languageCode]"
                            :width="photo.width"
                            :height="photo.height"
                            sizes="100vw sm:50vw lg:420px"
                            format="webp"
                            :quality="82"
                            loading="lazy"
                            decoding="async"
                            placeholder
                            class="aspect-[4/3] w-full object-cover"
                            :style="{
                                objectPosition: photo.desktopObjectPosition
                            }"
                        />
                        <figcaption class="p-4">
                            <strong
                                class="font-editorial block text-xl text-[#fffaf1]"
                                >{{ photo.title[languageCode] }}</strong
                            >
                            <span
                                class="mt-1 block text-sm leading-5 text-[#c8d5cf]"
                                >{{ photo.caption[languageCode] }}</span
                            >
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>

        <section class="paper-texture px-4 py-14 sm:px-6 sm:py-20">
            <div
                class="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start"
            >
                <LotusObservationCard
                    :title="pageText.observationsTitle"
                    :items="pageText.observations"
                />
                <div>
                    <p
                        class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        {{ pageText.notebookEyebrow }}
                    </p>
                    <h2
                        class="font-editorial text-ink mt-2 text-4xl leading-tight"
                    >
                        {{ pageText.notebookTitle }}
                    </h2>
                    <p class="text-muted mt-3 leading-7">
                        {{ pageText.notebookCopy }}
                    </p>
                    <div class="mt-7 grid gap-5 sm:grid-cols-2">
                        <LotusExperiencePanel
                            v-for="section in lotusNotebookSections"
                            :key="section.title.en"
                            :content="section"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section
            class="bg-peach-soft paper-texture px-4 py-14 sm:px-6 sm:py-20"
        >
            <div class="mx-auto max-w-[90rem]">
                <AppSectionHeading
                    :eyebrow="pageText.mediaEyebrow"
                    :title="pageText.mediaTitle"
                    :copy="pageText.mediaCopy"
                />
                <LotusMediaGallery class="mt-8" :items="galleryPhotos" />
            </div>
        </section>

        <section class="paper-texture px-4 py-14 sm:px-6 sm:py-20">
            <div
                class="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-[1fr_0.62fr] lg:items-center"
            >
                <div>
                    <p
                        class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        {{ pageText.whyEyebrow }}
                    </p>
                    <h2
                        class="font-editorial text-ink mt-2 text-4xl leading-tight sm:text-5xl"
                    >
                        {{ pageText.whyTitle }}
                    </h2>
                    <p class="text-muted mt-4 max-w-3xl leading-7">
                        {{ pageText.whyCopy }}
                    </p>
                </div>
                <PhotoNoteCard
                    :src="currentPhoto.sourcePath"
                    :alt="currentPhoto.altText[languageCode]"
                    :width="currentPhoto.width"
                    :height="currentPhoto.height"
                    :caption="pageText.currentCaption"
                    rotate="right"
                />
            </div>
        </section>
        <TrustStrip />
    </div>
</template>
