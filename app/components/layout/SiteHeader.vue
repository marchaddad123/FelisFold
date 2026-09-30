<script setup lang="ts">
import { siteText, textForLanguage } from "~/data/siteText"

const route = useRoute()
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const mobileMenuIsOpen = ref(false)
const headerElement = ref<HTMLElement>()
const mobileMenuButton = ref<HTMLButtonElement>()
const mobileNavigation = ref<HTMLElement>()

const navigationItems = computed(() => [
    {
        label: textForLanguage(siteText.navigation.home, languageCode.value),
        to: localizedPath("/")
    },
    {
        label: textForLanguage(siteText.navigation.health, languageCode.value),
        to: localizedPath("/health")
    },
    {
        label: textForLanguage(
            siteText.navigation.nutrition,
            languageCode.value
        ),
        to: localizedPath("/nutrition")
    },
    {
        label: textForLanguage(siteText.navigation.lotus, languageCode.value),
        to: localizedPath("/lotus")
    },
    {
        label: textForLanguage(siteText.navigation.tracker, languageCode.value),
        to: localizedPath("/tracker")
    },
    {
        label: textForLanguage(siteText.navigation.sources, languageCode.value),
        to: localizedPath("/resources")
    }
])

const getStartedLabel = computed(() => {
    if (languageCode.value === "ar") return "ابدأ الآن"
    if (languageCode.value === "fr") return "Commencer"
    if (languageCode.value === "zh") return "开始使用"
    return "Get started"
})

function closeMobileMenu(restoreButtonFocus = false) {
    if (!mobileMenuIsOpen.value) return
    mobileMenuIsOpen.value = false
    if (restoreButtonFocus) nextTick(() => mobileMenuButton.value?.focus())
}

async function toggleMobileMenu() {
    if (mobileMenuIsOpen.value) {
        closeMobileMenu(true)
        return
    }

    mobileMenuIsOpen.value = true
    await nextTick()
    mobileNavigation.value
        ?.querySelector<HTMLElement>("a, button, select")
        ?.focus()
}

function closeMenuFromOutside(event: MouseEvent) {
    const clickedElement = event.target
    if (
        mobileMenuIsOpen.value &&
        clickedElement instanceof Node &&
        !headerElement.value?.contains(clickedElement)
    ) {
        closeMobileMenu(true)
    }
}

function closeMenuWithEscape(event: KeyboardEvent) {
    if (event.key === "Escape") closeMobileMenu(true)
}

watch(
    () => route.fullPath,
    () => closeMobileMenu()
)

onMounted(() => {
    document.addEventListener("click", closeMenuFromOutside)
    document.addEventListener("keydown", closeMenuWithEscape)
})

onBeforeUnmount(() => {
    document.removeEventListener("click", closeMenuFromOutside)
    document.removeEventListener("keydown", closeMenuWithEscape)
})
</script>

<template>
    <header
        ref="headerElement"
        class="border-border bg-cream/95 sticky top-0 z-50 border-b backdrop-blur-xl"
    >
        <div
            class="mx-auto flex min-h-[4.5rem] max-w-[90rem] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8"
        >
            <NuxtLink
                :to="localizedPath('/')"
                aria-label="FelisFold home"
                class="shrink-0"
                ><BrandLogo
            /></NuxtLink>
            <nav
                class="hidden items-stretch self-stretch lg:flex"
                aria-label="Main navigation"
            >
                <NuxtLink
                    v-for="item in navigationItems"
                    :key="item.to"
                    :to="item.to"
                    class="text-muted hover:text-ink relative flex items-center px-3 text-sm font-semibold transition"
                    active-class="text-ink after:absolute after:right-3 after:bottom-0 after:left-3 after:h-0.5 after:bg-peach"
                    >{{ item.label }}</NuxtLink
                >
            </nav>
            <div class="flex shrink-0 items-center gap-1.5 sm:gap-2">
                <NuxtLink
                    :to="localizedPath('/search')"
                    class="text-ink hover:bg-paper hidden size-11 place-items-center rounded-full transition sm:grid"
                    :aria-label="
                        textForLanguage(
                            siteText.navigation.search,
                            languageCode
                        )
                    "
                >
                    <svg
                        viewBox="0 0 24 24"
                        class="size-5"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        aria-hidden="true"
                    >
                        <circle cx="11" cy="11" r="6.5" />
                        <path d="m16 16 4 4" stroke-linecap="round" />
                    </svg>
                </NuxtLink>
                <div class="hidden xl:block"><LanguageSwitcher /></div>
                <ThemeToggle />
                <NuxtLink
                    :to="localizedPath('/tracker')"
                    class="bg-peach text-on-accent hidden min-h-11 items-center rounded-full px-5 text-sm font-bold shadow-sm transition hover:-translate-y-0.5 xl:inline-flex"
                    >{{ getStartedLabel }}</NuxtLink
                >
                <button
                    ref="mobileMenuButton"
                    type="button"
                    class="border-border bg-paper text-ink grid size-11 place-items-center rounded-full border lg:hidden"
                    :aria-expanded="mobileMenuIsOpen"
                    aria-haspopup="true"
                    aria-controls="mobile-navigation"
                    :aria-label="mobileMenuIsOpen ? 'Close menu' : 'Open menu'"
                    @click="toggleMobileMenu"
                >
                    <span class="grid gap-1.5" aria-hidden="true"
                        ><span class="h-0.5 w-5 bg-current" /><span
                            class="h-0.5 w-5 bg-current" /><span
                            class="h-0.5 w-5 bg-current"
                    /></span>
                </button>
            </div>
        </div>
        <Transition name="mobile-nav">
            <div
                v-if="mobileMenuIsOpen"
                id="mobile-navigation"
                ref="mobileNavigation"
                class="border-border bg-cream border-t px-4 py-4 shadow-xl lg:hidden"
            >
                <nav
                    class="mx-auto grid max-w-[90rem] gap-1"
                    aria-label="Mobile navigation"
                >
                    <NuxtLink
                        v-for="item in navigationItems"
                        :key="item.to"
                        :to="item.to"
                        class="text-ink hover:bg-paper flex min-h-12 items-center justify-between rounded-xl px-4 font-semibold"
                        >{{ item.label }}
                        <span aria-hidden="true">→</span></NuxtLink
                    >
                    <NuxtLink
                        :to="localizedPath('/search')"
                        class="text-ink hover:bg-paper flex min-h-12 items-center justify-between rounded-xl px-4 font-semibold"
                        >{{
                            textForLanguage(
                                siteText.navigation.search,
                                languageCode
                            )
                        }}
                        <span aria-hidden="true">⌕</span></NuxtLink
                    >
                    <div class="mt-3 flex items-center justify-between gap-3">
                        <LanguageSwitcher /><NuxtLink
                            :to="localizedPath('/tracker')"
                            class="bg-peach text-on-accent inline-flex min-h-11 items-center rounded-full px-5 font-bold"
                            >{{ getStartedLabel }}</NuxtLink
                        >
                    </div>
                </nav>
            </div>
        </Transition>
    </header>
</template>
