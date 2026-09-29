<script setup lang="ts">
const isVisible = ref(true)
const { languageCode } = useCurrentLanguage()

const message = computed(() => {
    if (languageCode.value === "ar") return "لوتس يجهّز المكان…"
    if (languageCode.value === "fr") return "Lotus prépare tout…"
    if (languageCode.value === "zh") return "Lotus 正在准备…"
    return "Getting things ready…"
})

const detail = computed(() => {
    if (languageCode.value === "ar") return "جارٍ تحميل أدلة العناية"
    if (languageCode.value === "fr") return "Chargement des guides de soins"
    if (languageCode.value === "zh") return "正在加载护理指南"
    return "Loading care guides"
})

let hideTimer: number | undefined

onMounted(() => {
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
    if (reduceMotion) {
        isVisible.value = false
        return
    }

    hideTimer = window.setTimeout(() => {
        isVisible.value = false
    }, 2600)
})

onBeforeUnmount(() => {
    if (hideTimer) window.clearTimeout(hideTimer)
})
</script>

<template>
    <Transition name="loading-screen">
        <div
            v-if="isVisible"
            class="loading-stage fixed inset-0 z-[130] grid place-items-center overflow-hidden bg-[#fbf3e8] px-5 py-8 text-[#2c211a] dark:bg-[#071f1a] dark:text-[#fff7ec]"
            role="status"
            aria-live="polite"
        >
            <div
                class="bg-peach/8 absolute -start-24 -top-24 size-80 rounded-full blur-3xl dark:bg-[#ef9c79]/8"
                aria-hidden="true"
            />
            <div
                class="absolute -end-24 -bottom-24 size-96 rounded-full bg-[#d8b58f]/18 blur-3xl dark:bg-[#5f927b]/10"
                aria-hidden="true"
            />
            <div class="relative w-full max-w-3xl text-center">
                <BrandLogo size="hero" class="justify-center" />
                <LoadingCatFace />
                <p
                    class="font-handwritten mt-7 text-2xl leading-tight font-semibold sm:text-4xl"
                >
                    {{ message }}
                </p>
                <div
                    class="relative mx-auto mt-6 h-9 w-full max-w-xl"
                    aria-hidden="true"
                >
                    <div
                        class="absolute inset-x-0 top-1/2 h-3 -translate-y-1/2 overflow-hidden rounded-full bg-[#decdbd] shadow-inner dark:bg-[#28453c]"
                    >
                        <div
                            class="loading-progress h-full rounded-full bg-gradient-to-r from-[#c9a07d] to-[#be4825] dark:from-[#7fb29a] dark:to-[#ef9c79]"
                        />
                    </div>
                    <svg
                        viewBox="0 0 40 40"
                        class="loading-paw absolute top-1/2 size-9 -translate-x-1/2 -translate-y-1/2 text-[#8f552f] drop-shadow-[0_2px_2px_rgb(255_250_241/0.9)] dark:text-[#efb18f] dark:drop-shadow-[0_2px_2px_rgb(7_31_26/0.9)]"
                        fill="currentColor"
                    >
                        <ellipse cx="11" cy="11" rx="4" ry="5" />
                        <ellipse cx="20" cy="8" rx="4" ry="5" />
                        <ellipse cx="29" cy="11" rx="4" ry="5" />
                        <ellipse cx="8" cy="20" rx="3.5" ry="4.5" />
                        <path
                            d="M20 15c-7 0-11 6-11 12 0 4 3 6 7 5 3-1 5-1 8 0 4 1 7-1 7-5 0-6-4-12-11-12Z"
                        />
                    </svg>
                </div>
                <p class="mt-2 text-sm tracking-wide opacity-65 sm:text-base">
                    {{ detail }}
                </p>
            </div>
        </div>
    </Transition>
</template>
