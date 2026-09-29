<script setup lang="ts">
import { isLanguageCode } from "~/utils/languages"
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const searchQuery = ref("")
const { matchingResults } = useSiteSearch(searchQuery)
const { localizedPath } = useLocalizedPath()
usePageSeo({
    title: "Search FelisFold",
    description:
        "Search Scottish Fold health guides, nutrition, Lotus's story, glossary terms, resources and frequently asked questions."
})
</script>

<template>
    <div class="paper-texture px-4 py-12 sm:px-6 sm:py-16">
        <div class="mx-auto max-w-5xl">
            <div class="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
                <div>
                    <p
                        class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        Search FelisFold
                    </p>
                    <h1
                        class="font-editorial text-ink mt-3 text-5xl leading-none sm:text-6xl"
                    >
                        Find what your cat needs.
                    </h1>
                    <p class="text-muted mt-4 leading-7">
                        Search health topics, nutrition, Lotus's story, glossary
                        terms, resources and FAQs.
                    </p>
                </div>
                <SiteSearchForm v-model="searchQuery" />
            </div>
            <p class="text-muted mt-10 text-sm">
                {{ matchingResults.length }}
                {{ matchingResults.length === 1 ? "result" : "results" }}
            </p>
            <div
                v-if="matchingResults.length"
                class="divide-border border-border mt-3 divide-y border-y"
            >
                <NuxtLink
                    v-for="result in matchingResults"
                    :key="result.id"
                    :to="localizedPath(result.path)"
                    class="group grid gap-2 py-5 sm:grid-cols-[10rem_1fr_auto] sm:items-start sm:gap-5"
                    ><span
                        class="text-peach text-xs font-bold tracking-[0.14em] uppercase"
                        >{{ result.kind }}</span
                    ><span
                        ><strong
                            class="font-editorial text-ink block text-2xl"
                            >{{ result.title }}</strong
                        ><span class="text-muted mt-1 block leading-6">{{
                            result.summary
                        }}</span></span
                    ><span
                        class="text-peach text-xl transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                        aria-hidden="true"
                        >→</span
                    ></NuxtLink
                >
            </div>
            <div
                v-else
                class="border-border mt-8 border border-dashed p-8 text-center"
            >
                <FoldCatMascot size="sm" />
                <h2 class="font-editorial text-ink mt-4 text-2xl">
                    No match yet.
                </h2>
                <p class="text-muted mt-2">
                    Try a broader word such as pain, vomit, food, kidney or
                    mood.
                </p>
            </div>
        </div>
    </div>
</template>
