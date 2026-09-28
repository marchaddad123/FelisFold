<script setup lang="ts">
import { siteText, textForLanguage } from "~/data/siteText"

const route = useRoute()
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const mobileMenuIsOpen = ref(false)

const navigationItems = computed(() => [
    {
        label: textForLanguage(siteText.navigation.health, languageCode.value),
        to: localizedPath("/health")
    },
    {
        label: textForLanguage(siteText.navigation.care, languageCode.value),
        to: localizedPath("/care")
    },
    {
        label: textForLanguage(
            siteText.navigation.nutrition,
            languageCode.value
        ),
        to: localizedPath("/nutrition")
    },
    {
        label: textForLanguage(siteText.navigation.tracker, languageCode.value),
        to: localizedPath("/tracker")
    },
    {
        label: textForLanguage(siteText.navigation.lotus, languageCode.value),
        to: localizedPath("/lotus")
    }
])

const emergencyLabel = computed(() =>
    textForLanguage(siteText.navigation.emergency, languageCode.value)
)
const brandTagline = computed(() =>
    textForLanguage(siteText.brandTagline, languageCode.value)
)

watch(
    () => route.fullPath,
    () => {
        mobileMenuIsOpen.value = false
    }
)
</script>

<template>
    <header
        class="border-border bg-cream/90 sticky top-0 z-50 border-b backdrop-blur-xl"
        @keydown.esc="mobileMenuIsOpen = false"
    >
        <div
            class="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5 lg:px-8"
        >
            <NuxtLink
                :to="localizedPath('/')"
                class="flex min-w-0 items-center gap-3"
                aria-label="FoldCare home"
            >
                <span
                    class="bg-lilac-soft grid size-10 shrink-0 place-items-center rounded-full text-lg"
                    aria-hidden="true"
                    >🐾</span
                >
                <span class="min-w-0">
                    <span
                        class="text-ink block truncate text-lg font-semibold tracking-tight"
                        >FoldCare</span
                    >
                    <span class="text-muted hidden truncate text-xs sm:block">{{
                        brandTagline
                    }}</span>
                </span>
            </NuxtLink>

            <nav
                class="hidden items-center gap-1 lg:flex"
                aria-label="Main navigation"
            >
                <NuxtLink
                    v-for="item in navigationItems"
                    :key="item.to"
                    :to="item.to"
                    class="text-muted hover:bg-paper hover:text-ink rounded-full px-3.5 py-2.5 text-sm font-medium transition duration-200 active:scale-[0.98]"
                    active-class="bg-paper text-ink shadow-sm"
                >
                    {{ item.label }}
                </NuxtLink>
            </nav>

            <div class="flex shrink-0 items-center gap-2">
                <NuxtLink
                    :to="localizedPath('/health/when-to-call-a-vet')"
                    class="bg-ink text-surface-inverse hidden min-h-11 items-center rounded-full px-4 py-2 text-sm font-medium transition duration-200 hover:-translate-y-0.5 active:translate-y-0 xl:inline-flex"
                >
                    {{ emergencyLabel }}
                </NuxtLink>
                <NuxtLink
                    :to="localizedPath('/search')"
                    class="border-border bg-paper text-ink hover:border-lilac/30 hidden size-11 place-items-center rounded-full border text-lg shadow-sm transition lg:grid"
                    :aria-label="
                        textForLanguage(
                            siteText.navigation.search,
                            languageCode
                        )
                    "
                    :title="
                        textForLanguage(
                            siteText.navigation.search,
                            languageCode
                        )
                    "
                >
                    <span aria-hidden="true">⌕</span>
                </NuxtLink>
                <div class="hidden sm:block">
                    <LanguageSwitcher />
                </div>
                <ThemeToggle />
                <button
                    type="button"
                    class="border-border bg-paper text-ink hover:border-lilac/30 grid size-11 place-items-center rounded-full border shadow-sm transition lg:hidden"
                    :aria-expanded="mobileMenuIsOpen"
                    aria-controls="mobile-navigation"
                    :aria-label="mobileMenuIsOpen ? 'Close menu' : 'Open menu'"
                    @click="mobileMenuIsOpen = !mobileMenuIsOpen"
                >
                    <span class="relative block size-5" aria-hidden="true">
                        <span
                            class="absolute top-1 left-0 block h-0.5 w-5 rounded-full bg-current transition duration-200"
                            :class="
                                mobileMenuIsOpen
                                    ? 'translate-y-1.5 rotate-45'
                                    : ''
                            "
                        />
                        <span
                            class="absolute top-2.5 left-0 block h-0.5 w-5 rounded-full bg-current transition duration-200"
                            :class="mobileMenuIsOpen ? 'opacity-0' : ''"
                        />
                        <span
                            class="absolute top-4 left-0 block h-0.5 w-5 rounded-full bg-current transition duration-200"
                            :class="
                                mobileMenuIsOpen
                                    ? '-translate-y-1.5 -rotate-45'
                                    : ''
                            "
                        />
                    </span>
                </button>
            </div>
        </div>

        <Transition name="mobile-nav">
            <div
                v-if="mobileMenuIsOpen"
                id="mobile-navigation"
                class="border-border bg-cream/98 border-t px-4 pt-3 pb-4 shadow-[0_20px_45px_rgb(20_18_22/0.12)] backdrop-blur-xl lg:hidden"
            >
                <nav
                    class="mx-auto grid max-w-7xl gap-1"
                    aria-label="Mobile navigation"
                >
                    <NuxtLink
                        v-for="item in navigationItems"
                        :key="item.to"
                        :to="item.to"
                        class="text-muted hover:bg-paper hover:text-ink flex min-h-12 items-center rounded-2xl px-4 text-base font-medium transition"
                        active-class="bg-paper text-ink shadow-sm"
                    >
                        {{ item.label }}
                    </NuxtLink>
                    <NuxtLink
                        :to="localizedPath('/search')"
                        class="text-muted hover:bg-paper hover:text-ink flex min-h-12 items-center rounded-2xl px-4 text-base font-medium transition"
                    >
                        {{
                            textForLanguage(
                                siteText.navigation.search,
                                languageCode
                            )
                        }}
                    </NuxtLink>
                    <NuxtLink
                        :to="localizedPath('/health/when-to-call-a-vet')"
                        class="bg-ink text-surface-inverse mt-2 flex min-h-12 items-center justify-center rounded-2xl px-4 text-base font-medium"
                    >
                        {{ emergencyLabel }}
                    </NuxtLink>
                    <div class="mt-3 sm:hidden">
                        <LanguageSwitcher />
                    </div>
                </nav>
            </div>
        </Transition>
    </header>
</template>
