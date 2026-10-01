import type { ComputedRef } from "vue"
import { supportedLanguages } from "~/utils/languages"
import { editorialLabels, translated } from "~/data/editorialHelpers"
import { siteText } from "~/data/siteText"
import type { LocalizedText } from "~/types/foldcare"

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
    const breadcrumbLabels: Record<string, LocalizedText> = {
        health: editorialLabels.healthCare,
        care: siteText.navigation.care,
        nutrition: siteText.navigation.nutrition,
        mixes: editorialLabels.mixes,
        lotus: siteText.navigation.lotus,
        sources: editorialLabels.sources,
        about: siteText.navigation.about,
        contact: siteText.navigation.contact,
        search: editorialLabels.search,
        "scottish-fold": editorialLabels.breed,
        "start-here": editorialLabels.start,
        homemade: translated(
            "Homemade food",
            "الغذاء المنزلي",
            "Alimentation maison",
            "自制食物"
        )
    }

    const title = computed(() => unref(options.title))
    const description = computed(() => unref(options.description))
    const siteUrl = computed(() =>
        String(runtimeConfig.public.siteUrl || "https://felisfold.com")
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
        ],
        script: [
            {
                type: "application/ld+json",
                innerHTML: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: route.path
                        .split("/")
                        .filter(Boolean)
                        .map((part, index, parts) => ({
                            "@type": "ListItem",
                            position: index + 1,
                            name:
                                part === languageCode.value
                                    ? "FelisFold"
                                    : index === parts.length - 1
                                      ? title.value.replace(
                                            /\s*[—–-]\s*FelisFold$/,
                                            ""
                                        )
                                      : (breadcrumbLabels[part]?.[
                                            languageCode.value
                                        ] ?? part.replaceAll("-", " ")),
                            item: new URL(
                                `/${parts.slice(0, index + 1).join("/")}`,
                                siteUrl.value
                            ).toString()
                        }))
                })
            }
        ]
    }))

    return {
        languageCode,
        canonicalUrl
    }
}
