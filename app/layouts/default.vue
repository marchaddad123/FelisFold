<script setup lang="ts">
import { editorialLabels } from "~/data/editorialHelpers"
const { loadThemePreference } = useThemePreference()
const { languageCode } = useCurrentLanguage()

onMounted(loadThemePreference)
</script>

<template>
    <div class="min-h-screen">
        <a
            href="#main-content"
            class="bg-ink text-surface-inverse fixed start-4 top-3 z-[140] -translate-y-20 rounded-full px-4 py-2 text-sm font-medium transition-transform focus:translate-y-0"
        >
            {{ editorialLabels.skip[languageCode] }}
        </a>
        <FurryLoadingScreen />
        <ThemeTransitionOverlay />
        <SiteHeader />
        <main id="main-content" tabindex="-1">
            <slot />
        </main>
        <SiteFooter />
    </div>
</template>
