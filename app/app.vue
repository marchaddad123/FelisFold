<script setup lang="ts">
import { creatorPersonStructuredData } from "~/data/creatorProfile"

const runtimeConfig = useRuntimeConfig()
useHead({
    script: [
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                    creatorPersonStructuredData(
                        String(runtimeConfig.public.siteUrl)
                    ),
                    {
                        "@type": "Organization",
                        name: "FelisFold",
                        url: runtimeConfig.public.siteUrl,
                        slogan: "Born from Lotus. For every Fold.",
                        founder: {
                            "@id": `${String(runtimeConfig.public.siteUrl).replace(/\/$/, "")}/#creator`
                        }
                    },
                    {
                        "@type": "WebSite",
                        name: "FelisFold",
                        url: runtimeConfig.public.siteUrl,
                        potentialAction: {
                            "@type": "SearchAction",
                            target: `${runtimeConfig.public.siteUrl}/en/search?q={search_term_string}`,
                            "query-input": "required name=search_term_string"
                        }
                    }
                ]
            })
        }
    ]
})
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
