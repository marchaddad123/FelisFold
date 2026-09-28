import type { ComputedRef } from "vue"
import { supportedLanguages } from "~/utils/languages"

export function usePageSeo(options: {
    title: string | ComputedRef<string>
    description: string | ComputedRef<string>
    image?: string
    type?: "website" | "article"
}) {
    const route = useRoute()
    const runtimeConfig = useRuntimeConfig()
    const { languageCode } = useCurrentLanguage()
    const { samePageInLanguage } = useLocalizedPath()

    const title = computed(() => unref(options.title))
    const description = computed(() => unref(options.description))
    const siteUrl = computed(() =>
        String(runtimeConfig.public.siteUrl || "https://foldcare.example")
    )
    const canonicalUrl = computed(() =>
        new URL(route.path, siteUrl.value).toString()
    )
    const socialImage = computed(() =>
        new URL(
            options.image ?? "/images/lotus/lotus-portrait.jpg",
            siteUrl.value
        ).toString()
    )

    useSeoMeta({
        title,
        description,
        ogTitle: title,
        ogDescription: description,
        ogType: options.type ?? "website",
        ogUrl: canonicalUrl,
        ogImage: socialImage,
        twitterCard: "summary_large_image",
        twitterTitle: title,
        twitterDescription: description,
        twitterImage: socialImage
    })

    useHead(() => ({
        link: [
            { rel: "canonical" as const, href: canonicalUrl.value },
            ...supportedLanguages.map((language) => ({
                rel: "alternate" as const,
                hreflang: language.code,
                href: new URL(
                    samePageInLanguage(language.code),
                    siteUrl.value
                ).toString()
            })),
            {
                rel: "alternate" as const,
                hreflang: "x-default",
                href: new URL(
                    samePageInLanguage("en"),
                    siteUrl.value
                ).toString()
            }
        ]
    }))

    return {
        languageCode,
        canonicalUrl
    }
}
