<script setup lang="ts">
import { editorialLabels } from "~/data/editorialHelpers"
import { isLanguageCode } from "~/utils/languages"
definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const route = useRoute()
const searchQuery = ref(typeof route.query.q === "string" ? route.query.q : "")
const { matchingResults } = useSiteSearch(searchQuery)
const { localizedPath } = useLocalizedPath()
const { languageCode } = useCurrentLanguage()
usePageSeo({
    title: computed(
        () => `${editorialLabels.search[languageCode.value]} — FelisFold`
    ),
    description: computed(() => editorialLabels.searchCopy[languageCode.value])
})
watch(
    () => route.query.q,
    (query) => {
        searchQuery.value = typeof query === "string" ? query : ""
    }
)
</script>
<template>
    <div class="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 class="font-editorial text-ink text-4xl sm:text-5xl">
            {{ editorialLabels.search[languageCode] }}
        </h1>
        <p class="text-muted mt-5 max-w-2xl leading-8">
            {{ editorialLabels.searchCopy[languageCode] }}
        </p>
        <SiteSearchForm v-model="searchQuery" class="mt-6" />
        <p class="text-muted mt-6 text-sm" role="status" aria-live="polite">
            {{ matchingResults.length }}
            {{ editorialLabels.results[languageCode] }}
        </p>
        <ul
            v-if="matchingResults.length"
            class="divide-border border-border mt-4 divide-y border-y"
        >
            <li v-for="result in matchingResults" :key="result.id">
                <NuxtLink :to="localizedPath(result.path)" class="block py-5"
                    ><p class="text-muted text-xs">{{ result.kind }}</p>
                    <h2 class="font-editorial text-ink mt-2 text-2xl">
                        {{ result.title }}
                    </h2>
                    <p class="text-muted mt-2 leading-7">
                        {{ result.summary }}
                    </p></NuxtLink
                >
            </li>
        </ul>
        <p v-else class="text-muted mt-8 leading-7">
            {{ editorialLabels.noResults[languageCode] }}
        </p>
    </div>
</template>
