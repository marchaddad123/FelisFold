<script setup lang="ts">
const isVisible = ref(true)
const { languageCode } = useCurrentLanguage()

const message = computed(() => {
    if (languageCode.value === "ar") return "لوتس يجهّز المكان…"
    if (languageCode.value === "fr") return "Lotus prépare tout…"
    if (languageCode.value === "zh") return "Lotus 正在准备…"
    return "Lotus is getting things ready…"
})

onMounted(() => {
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
    window.setTimeout(
        () => {
            isVisible.value = false
        },
        reduceMotion ? 120 : 620
    )
})
</script>

<template>
    <Transition name="loading-screen">
        <div
            v-if="isVisible"
            class="bg-cream fixed inset-0 z-[130] grid place-items-center px-6"
            role="status"
            aria-live="polite"
        >
            <div class="text-center">
                <LoadingCatFace />
                <p class="text-ink mt-7 text-base font-semibold sm:text-lg">
                    {{ message }}
                </p>
                <div
                    class="bg-border mx-auto mt-4 h-1.5 w-36 overflow-hidden rounded-full"
                    aria-hidden="true"
                >
                    <div
                        class="loading-progress bg-lilac h-full rounded-full"
                    />
                </div>
            </div>
        </div>
    </Transition>
</template>
