<script setup lang="ts">
import { editorialLabels, translated as t } from "~/data/editorialHelpers"
import { visualLabels } from "~/data/editorialVisuals"
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const items = [
    editorialLabels.evidence,
    t(
        "Clearly cited sources",
        "مصادر مذكورة بوضوح",
        "Des sources clairement citées",
        "明确引用来源"
    ),
    editorialLabels.owner
]
</script>
<template>
    <aside class="dark-panel px-5 py-8 sm:px-8">
        <div class="mx-auto grid max-w-[80rem] gap-5 lg:grid-cols-[1fr_1.4fr]">
            <h2 class="text-2xl">{{ visualLabels.trust[languageCode] }}</h2>
            <div>
                <ul class="grid gap-4 text-sm sm:grid-cols-3">
                    <li
                        v-for="item in items"
                        :key="item.en"
                        class="border-s border-white/25 ps-4 leading-6"
                    >
                        {{ item[languageCode] }}
                    </li>
                </ul>
                <NuxtLink
                    :to="localizedPath('/sources')"
                    class="mt-4 inline-flex min-h-11 items-center gap-3 text-sm text-[#efb69a] underline underline-offset-4"
                    >{{ editorialLabels.sources[languageCode] }} →</NuxtLink
                >
            </div>
        </div>
    </aside>
</template>
