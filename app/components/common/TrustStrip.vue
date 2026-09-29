<script setup lang="ts">
const { languageCode } = useCurrentLanguage()

const text = computed(() => {
    if (languageCode.value === "ar")
        return {
            eyebrow: "موثوق ومدعوم بالأدلة",
            title: "معلومات يمكنك الوثوق بها.",
            items: [
                "أبحاث بيطرية",
                "مصادر واضحة",
                "مراجعة منتظمة",
                "رفاه القط أولاً"
            ]
        }
    if (languageCode.value === "fr")
        return {
            eyebrow: "Fiable et fondé sur les preuves",
            title: "Des informations dignes de confiance.",
            items: [
                "Recherche vétérinaire",
                "Sources claires",
                "Mises à jour régulières",
                "Bien-être réel"
            ]
        }
    if (languageCode.value === "zh")
        return {
            eyebrow: "可信且基于证据",
            title: "值得信赖的信息。",
            items: ["兽医研究", "清楚来源", "定期更新", "关注真实福祉"]
        }
    return {
        eyebrow: "Trusted & evidence-led",
        title: "Information you can trust.",
        items: [
            "Veterinary research",
            "Clearly cited sources",
            "Regularly reviewed",
            "Real cat wellbeing"
        ]
    }
})
</script>

<template>
    <section
        class="dark-panel paper-texture relative overflow-hidden px-4 pt-10 sm:px-6 sm:pt-12 lg:px-8"
    >
        <div
            class="mx-auto grid max-w-[90rem] gap-8 pb-10 sm:pb-12 lg:grid-cols-[1.1fr_1.9fr] lg:items-center"
        >
            <div>
                <p
                    class="text-xs font-bold tracking-[0.2em] text-[#d4b99f] uppercase"
                >
                    {{ text.eyebrow }}
                </p>
                <h2
                    class="font-editorial mt-2 text-3xl text-[#fffaf1] sm:text-4xl"
                >
                    {{ text.title }}
                </h2>
            </div>
            <ul
                class="grid gap-4 text-sm text-[#e8eee9] sm:grid-cols-2 lg:grid-cols-4"
            >
                <li
                    v-for="(item, index) in text.items"
                    :key="item"
                    class="flex items-center gap-3 border-s border-white/15 ps-4"
                >
                    <span
                        class="font-editorial text-xl text-[#ef9c79]"
                        aria-hidden="true"
                        >0{{ index + 1 }}</span
                    >
                    <span>{{ item }}</span>
                </li>
            </ul>
        </div>
        <WavySectionDivider
            tone="paper"
            class="-mx-4 w-[calc(100%+2rem)] sm:-mx-6 sm:w-[calc(100%+3rem)] lg:-mx-8 lg:w-[calc(100%+4rem)]"
        />
    </section>
</template>
