import type { Ref } from "vue"
import { healthTopics } from "~/data/healthTopics"
import { textForLanguage } from "~/data/siteText"

export function useSiteSearch(searchQuery: Ref<string>) {
    const { languageCode } = useCurrentLanguage()

    const matchingTopics = computed(() => {
        const normalizedQuery = searchQuery.value.trim().toLocaleLowerCase()
        if (!normalizedQuery) return healthTopics

        return healthTopics.filter((topic) => {
            const title = textForLanguage(
                topic.title,
                languageCode.value
            ).toLocaleLowerCase()
            const summary = textForLanguage(
                topic.summary,
                languageCode.value
            ).toLocaleLowerCase()
            return (
                title.includes(normalizedQuery) ||
                summary.includes(normalizedQuery)
            )
        })
    })

    return {
        matchingTopics
    }
}
