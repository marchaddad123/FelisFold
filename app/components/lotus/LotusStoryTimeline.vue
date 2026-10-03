<script setup lang="ts">
import type { LotusTimelineItem } from "~/types/foldcare"
import { lotusTimelineDetails } from "~/data/lotusTimeline"
import { lotusMediaById } from "~/data/lotusMedia"
import { translated as t } from "~/data/editorialHelpers"

const props = defineProps<{
    heading: string
    copy: string
    items: LotusTimelineItem[]
}>()
const { languageCode } = useCurrentLanguage()
const headingId = useId()
const scrollInstructionsId = useId()
const storyViewport = ref<HTMLElement>()
const chapters = computed(() =>
    props.items.map((item) => ({
        ...item,
        detail: lotusTimelineDetails[item.id],
        photo: item.mediaId ? lotusMediaById(item.mediaId) : undefined
    }))
)
const labels = {
    order: t(
        "From the beginning to today",
        "من البداية إلى اليوم",
        "Du début à aujourd’hui",
        "从最初到现在"
    ),
    scroll: t(
        "Scroll through the chapters",
        "مرّر عبر فصول القصة",
        "Faites défiler les chapitres",
        "滚动阅读各个篇章"
    ),
    start: t("The beginning", "البداية", "Le début", "最初"),
    today: t("Today", "اليوم", "Aujourd’hui", "现在"),
    photoNote: t(
        "A photo from our story; the exact capture date is not documented.",
        "صورة من قصتنا؛ تاريخ التقاطها الدقيق غير موثّق.",
        "Une photo de notre histoire ; la date exacte de prise de vue n’est pas documentée.",
        "故事中的一张照片，具体拍摄日期没有记录。"
    ),
    ongoing: t(
        "Our story is still being written.",
        "قصتنا ما زالت تُكتب.",
        "Notre histoire continue de s’écrire.",
        "我们的故事仍在继续。"
    )
}
function scrollToChapter(position: "start" | "end") {
    const viewport = storyViewport.value
    if (!viewport) return
    const latestChapter = viewport.querySelector("li:last-child")
    const latestChapterTop = latestChapter
        ? latestChapter.getBoundingClientRect().top -
          viewport.getBoundingClientRect().top +
          viewport.scrollTop -
          parseFloat(getComputedStyle(viewport).paddingTop)
        : 0
    viewport.scrollTo({
        top: position === "start" ? 0 : latestChapterTop,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "instant"
            : "smooth"
    })
}
</script>

<template>
    <section>
        <h2 :id="headingId" class="text-ink text-3xl leading-tight sm:text-4xl">
            {{ heading }}
        </h2>
        <p class="text-muted mt-4 max-w-3xl leading-7">{{ copy }}</p>
        <div class="border-border bg-paper mt-8 rounded-2xl border">
            <div
                class="border-border flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b px-4 py-3 sm:px-8"
            >
                <div>
                    <p class="text-ink text-sm font-semibold">
                        {{ labels.order[languageCode] }}
                    </p>
                    <p
                        :id="scrollInstructionsId"
                        class="text-muted mt-1 text-xs"
                    >
                        {{ labels.scroll[languageCode] }}
                    </p>
                </div>
                <div class="flex gap-2">
                    <button
                        type="button"
                        class="border-border text-ink hover:bg-sage-soft min-h-11 rounded-lg border px-3 text-sm"
                        @click="scrollToChapter('start')"
                    >
                        {{ labels.start[languageCode] }}
                    </button>
                    <button
                        type="button"
                        class="border-border text-ink hover:bg-sage-soft min-h-11 rounded-lg border px-3 text-sm"
                        @click="scrollToChapter('end')"
                    >
                        {{ labels.today[languageCode] }}
                    </button>
                </div>
            </div>
            <div
                ref="storyViewport"
                role="region"
                tabindex="0"
                :aria-labelledby="headingId"
                :aria-describedby="scrollInstructionsId"
                data-testid="lotus-story-scroll"
                class="max-h-[min(75svh,56rem)] overflow-y-auto rounded-b-2xl px-4 pt-8 pb-4 focus-visible:outline-2 focus-visible:outline-offset-4 sm:px-8 sm:pt-10"
            >
                <ol data-testid="lotus-story-timeline">
                    <li
                        v-for="(chapter, index) in chapters"
                        :key="chapter.id"
                        :data-chapter="chapter.id"
                        class="relative pb-10 md:grid md:grid-cols-[9rem_minmax(0,1fr)] md:pb-14"
                    >
                        <span
                            class="bg-border absolute start-0 top-2 bottom-0 w-px md:start-36"
                            aria-hidden="true"
                        />
                        <span
                            class="bg-peach ring-paper absolute start-0 top-2 size-2.5 -translate-x-1/2 rounded-full ring-4 md:start-36 rtl:translate-x-1/2"
                            aria-hidden="true"
                        />
                        <p
                            class="text-peach ps-6 text-sm font-semibold md:ps-0 md:pe-6"
                        >
                            {{ chapter.dateLabel[languageCode] }}
                        </p>
                        <article class="ps-6 md:ps-8">
                            <p
                                class="text-muted mt-2 text-xs tabular-nums md:mt-0 rtl:text-right"
                                dir="ltr"
                                aria-hidden="true"
                            >
                                {{ String(index + 1).padStart(2, "0") }} /
                                {{ String(chapters.length).padStart(2, "0") }}
                            </p>
                            <h3
                                class="text-ink mt-2 text-2xl leading-tight sm:text-3xl"
                            >
                                {{ chapter.title[languageCode] }}
                            </h3>
                            <div
                                class="mt-4 grid gap-5"
                                :class="
                                    chapter.photo
                                        ? 'xl:grid-cols-[minmax(0,1fr)_14rem]'
                                        : ''
                                "
                            >
                                <div
                                    class="text-muted max-w-2xl space-y-3 leading-7"
                                >
                                    <p>{{ chapter.copy[languageCode] }}</p>
                                    <p v-if="chapter.detail">
                                        {{ chapter.detail[languageCode] }}
                                    </p>
                                </div>
                                <figure
                                    v-if="chapter.photo"
                                    class="max-w-sm xl:max-w-none"
                                >
                                    <NuxtImg
                                        :src="chapter.photo.sourcePath"
                                        :width="chapter.photo.width"
                                        :height="chapter.photo.height"
                                        :alt="
                                            chapter.photo.altText[languageCode]
                                        "
                                        sizes="100vw sm:384px xl:224px"
                                        loading="lazy"
                                        decoding="async"
                                        format="webp"
                                        class="aspect-[4/3] w-full rounded-lg object-cover"
                                        :style="{
                                            objectPosition:
                                                chapter.photo
                                                    .mobileObjectPosition ??
                                                'center'
                                        }"
                                    />
                                    <figcaption
                                        class="text-muted mt-2 text-xs leading-5"
                                    >
                                        {{
                                            chapter.photo.caption[languageCode]
                                        }}
                                        <span class="mt-1 block">{{
                                            labels.photoNote[languageCode]
                                        }}</span>
                                    </figcaption>
                                </figure>
                            </div>
                        </article>
                    </li>
                </ol>
                <p
                    class="font-handwritten text-ink border-border border-t py-5 text-center text-xl"
                >
                    {{ labels.ongoing[languageCode] }}
                </p>
            </div>
        </div>
    </section>
</template>
