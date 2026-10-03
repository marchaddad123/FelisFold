<script setup lang="ts">
import { siteText, textForLanguage } from "~/data/siteText"
import { creatorProfile } from "~/data/creatorProfile"

const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const footerGroups = computed(() => [
    {
        title:
            languageCode.value === "fr"
                ? "Explorer"
                : languageCode.value === "ar"
                  ? "استكشف"
                  : languageCode.value === "zh"
                    ? "浏览"
                    : "Explore",
        links: [
            [
                textForLanguage(siteText.navigation.home, languageCode.value),
                "/"
            ],
            [
                textForLanguage(siteText.navigation.health, languageCode.value),
                "/health"
            ],
            [
                textForLanguage(
                    siteText.navigation.nutrition,
                    languageCode.value
                ),
                "/nutrition"
            ],
            [
                textForLanguage(siteText.navigation.care, languageCode.value),
                "/care"
            ]
        ]
    },
    {
        title:
            languageCode.value === "fr"
                ? "À propos"
                : languageCode.value === "ar"
                  ? "عن الموقع"
                  : languageCode.value === "zh"
                    ? "关于"
                    : "About",
        links: [
            [
                textForLanguage(siteText.navigation.lotus, languageCode.value),
                "/lotus"
            ],
            [
                textForLanguage(siteText.navigation.about, languageCode.value),
                "/about"
            ],
            [
                textForLanguage(
                    siteText.navigation.contact,
                    languageCode.value
                ),
                "/contact"
            ],
            [
                textForLanguage(
                    siteText.navigation.sources,
                    languageCode.value
                ),
                "/sources"
            ],
            [
                textForLanguage(siteText.navigation.search, languageCode.value),
                "/search"
            ]
        ]
    }
])
</script>

<template>
    <footer>
        <div class="bg-[#08251f] px-4 py-10 text-[#d9e5df] sm:px-6 lg:px-8">
            <div
                class="mx-auto grid max-w-[90rem] gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]"
            >
                <div>
                    <BrandLogo inverse />
                    <p class="mt-5 max-w-md text-sm leading-6">
                        {{
                            textForLanguage(
                                siteText.common.medicalNote,
                                languageCode
                            )
                        }}
                    </p>
                    <p class="mt-4 text-xs text-[#9fb4aa]">
                        © {{ new Date().getFullYear() }} FelisFold.
                    </p>
                </div>
                <nav
                    v-for="group in footerGroups"
                    :key="group.title"
                    :aria-label="group.title"
                >
                    <h2 class="text-sm font-bold text-[#fffaf1]">
                        {{ group.title }}
                    </h2>
                    <ul class="mt-4 space-y-3 text-sm">
                        <li v-for="link in group.links" :key="link[1]">
                            <NuxtLink
                                :to="localizedPath(link[1])"
                                class="hover:text-[#ef9c79]"
                                >{{ link[0] }}</NuxtLink
                            >
                        </li>
                    </ul>
                </nav>
                <section aria-labelledby="footer-creator-title">
                    <h2
                        id="footer-creator-title"
                        class="text-sm font-bold text-[#fffaf1]"
                    >
                        {{ creatorProfile.role[languageCode] }}
                    </h2>
                    <p class="mt-4 font-semibold text-[#fffaf1]">
                        {{ creatorProfile.name }}
                    </p>
                    <p class="mt-1 text-sm text-[#9fb4aa]">
                        <bdi dir="ltr">{{ creatorProfile.onlineName }}</bdi> ·
                        {{ creatorProfile.relationshipToLotus[languageCode] }} ·
                        {{ creatorProfile.location[languageCode] }}
                    </p>
                    <CreatorSocialLinks class="mt-4" variant="icons" />
                </section>
            </div>
        </div>
    </footer>
</template>
