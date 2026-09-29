import type { Ref } from "vue"
import { frequentlyAskedQuestions } from "~/data/faq"
import { healthTopics } from "~/data/healthTopics"
import { nutritionTopics } from "~/data/nutritionTopics"
import { glossaryTerms } from "~/data/resourceData"
import { textForLanguage } from "~/data/siteText"

export type SiteSearchResult = {
    id: string
    kind: string
    title: string
    summary: string
    path: string
}

export function useSiteSearch(searchQuery: Ref<string>) {
    const { languageCode } = useCurrentLanguage()
    const allSearchResults = computed<SiteSearchResult[]>(() => [
        ...healthTopics.map((topic) => ({
            id: `health-${topic.slug}`,
            kind: "Health guide",
            title: textForLanguage(topic.title, languageCode.value),
            summary: textForLanguage(topic.summary, languageCode.value),
            path: `/health/${topic.slug}`
        })),
        ...nutritionTopics.map((topic) => ({
            id: `nutrition-${topic.id}`,
            kind: "Nutrition",
            title: topic.title,
            summary: topic.summary,
            path: "/nutrition"
        })),
        ...glossaryTerms.map((term) => ({
            id: `glossary-${term.term}`,
            kind: "Glossary",
            title: term.term,
            summary: term.meaning,
            path: "/resources"
        })),
        ...frequentlyAskedQuestions.map((item) => ({
            id: `faq-${item.question}`,
            kind: "FAQ",
            title: item.question,
            summary: item.answer,
            path: "/resources"
        })),
        {
            id: "lotus-story",
            kind: "Lotus's story",
            title: "Meet Lotus",
            summary:
                "The real cat, daily observations and personal story behind FelisFold.",
            path: "/lotus"
        },
        {
            id: "tracker",
            kind: "Tool",
            title: "Daily health tracker",
            summary:
                "Record meals, water, vomiting, stool, mood, pain, mobility, grooming, medicines and weight.",
            path: "/tracker"
        }
    ])
    const matchingResults = computed(() => {
        const words = searchQuery.value
            .trim()
            .toLocaleLowerCase()
            .split(/\s+/)
            .filter(Boolean)
        if (!words.length) return allSearchResults.value
        return allSearchResults.value.filter((result) => {
            const searchableText =
                `${result.kind} ${result.title} ${result.summary}`.toLocaleLowerCase()
            return words.every((word) => searchableText.includes(word))
        })
    })
    return { matchingResults }
}
