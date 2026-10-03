<script setup lang="ts">
import { creatorProfile } from "~/data/creatorProfile"
import { lotusPhoto, visualLabels } from "~/data/editorialVisuals"
import { editorialLabels, translated as t } from "~/data/editorialHelpers"
import { isLanguageCode } from "~/utils/languages"
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const aboutTitle = t(
    "Hi, I'm Mark. Lotus's human.",
    "مرحباً، أنا مارك. رفيق لوتس.",
    "Bonjour, moi c'est Mark. L'humain de Lotus.",
    "你好，我是 Mark，Lotus 的家人。"
)
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
usePageSeo({
    title: computed(
        () => `${editorialLabels.about[languageCode.value]} — FelisFold`
    ),
    description: computed(() => creatorProfile.shortBio[languageCode.value])
})
</script>
<template>
    <div>
        <EditorialHeroSection
            :title="aboutTitle"
            :eyebrow="editorialLabels.about"
            :copy="creatorProfile.shortBio"
            :photo="lotusPhoto('lotus-with-creator-younger')"
            :note="visualLabels.why"
            :links="[
                { path: '/lotus', label: editorialLabels.lotus },
                { path: '/health', label: editorialLabels.healthCare }
            ]"
        />
        <section
            class="bg-sky-soft paper-texture px-5 pt-6 pb-12 sm:px-8 sm:pb-16"
        >
            <div
                class="mx-auto grid max-w-[80rem] gap-9 lg:grid-cols-2 lg:items-center"
            >
                <div>
                    <p class="text-peach mb-3 text-sm font-semibold">
                        {{ creatorProfile.name }} ·
                        {{ creatorProfile.location[languageCode] }}
                    </p>
                    <h2 class="text-ink text-3xl sm:text-4xl">
                        {{ creatorProfile.jobTitle[languageCode] }}
                    </h2>
                    <p class="text-muted mt-5 leading-8">
                        {{ creatorProfile.longBio[languageCode][0] }}
                    </p>
                    <CreatorSocialLinks variant="full" class="mt-6" />
                </div>
                <EditorialPhoto
                    :photo="lotusPhoto('lotus-with-creator-now')"
                    frame
                    image-class="aspect-[4/3]"
                    class="sm:rotate-2"
                />
            </div>
        </section>
        <section class="bg-cream px-5 py-12 sm:px-8 sm:py-16">
            <div
                class="mx-auto grid max-w-[80rem] gap-10 lg:grid-cols-[0.8fr_1.2fr]"
            >
                <EditorialPhoto
                    :photo="lotusPhoto('lotus-home')"
                    image-class="aspect-[4/3] rounded-[2rem]"
                />
                <div>
                    <h2 class="text-ink text-3xl sm:text-4xl">
                        {{
                            t(
                                "Why Lotus led to FelisFold",
                                "كيف قاد لوتس إلى FelisFold",
                                "Pourquoi Lotus a mené à FelisFold",
                                "Lotus 如何让我创建 FelisFold"
                            )[languageCode]
                        }}
                    </h2>
                    <p
                        v-for="paragraph in creatorProfile.longBio[
                            languageCode
                        ].slice(1)"
                        :key="paragraph"
                        class="text-muted mt-5 leading-8"
                    >
                        {{ paragraph }}
                    </p>
                </div>
            </div>
        </section>
        <section class="dark-panel px-5 py-12 sm:px-8">
            <div class="mx-auto grid max-w-[80rem] gap-8 lg:grid-cols-2">
                <div>
                    <h2 class="text-3xl">
                        {{ visualLabels.trust[languageCode] }}
                    </h2>
                    <p class="mt-5 leading-8">
                        {{ creatorProfile.notVeterinarian[languageCode] }}
                    </p>
                    <NuxtLink
                        :to="localizedPath('/sources')"
                        class="mt-5 inline-flex min-h-11 items-center text-[#efb69a] underline underline-offset-4"
                        >{{ editorialLabels.sources[languageCode] }} →</NuxtLink
                    >
                </div>
                <ul class="grid gap-6 sm:grid-cols-2">
                    <li
                        v-for="label in [
                            editorialLabels.evidence,
                            editorialLabels.owner,
                            t(
                                'Read, learn and explore',
                                'اقرأ وتعلم واستكشف',
                                'Lire, apprendre et explorer',
                                '阅读、学习与探索'
                            ),
                            t(
                                'Questions for your veterinary team',
                                'أسئلة للفريق البيطري',
                                'Questions pour votre équipe vétérinaire',
                                '向兽医团队提出的问题'
                            )
                        ]"
                        :key="label.en"
                        class="border-s border-white/25 ps-5 text-lg leading-8"
                    >
                        {{ label[languageCode] }}
                    </li>
                </ul>
            </div>
        </section>
        <PhotoStoryStrip
            :title="visualLabels.photoStory"
            :photos="[
                lotusPhoto('lotus-family'),
                lotusPhoto('lotus-cuddling'),
                lotusPhoto('lotus-cozy')
            ]"
        />
        <section class="bg-cream px-5 py-12 sm:px-8">
            <div class="mx-auto max-w-[80rem]">
                <CreatorContactSection /><MedicalInformationNotice
                    class="mt-8"
                />
            </div>
        </section>
    </div>
</template>
