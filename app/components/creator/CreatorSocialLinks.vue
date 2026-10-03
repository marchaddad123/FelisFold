<script setup lang="ts">
import { translated } from "~/data/editorialHelpers"
import {
    creatorSocialLinks,
    getAvailableCreatorSocialLinks,
    type CreatorSocialLink
} from "~/data/creatorProfile"

const props = withDefaults(
    defineProps<{
        variant?: "icons" | "compact" | "full"
        links?: Array<CreatorSocialLink | null | undefined> | null
    }>(),
    { variant: "compact", links: null }
)

const { languageCode } = useCurrentLanguage()
const linksLabel = translated(
    "Creator links",
    "روابط صاحب الموقع",
    "Liens du créateur",
    "创作者链接"
)
function linkLabel(link: CreatorSocialLink) {
    if (link.id === "email")
        return translated("Email", "البريد الإلكتروني", "E-mail", "电子邮件")[
            languageCode.value
        ]
    if (link.id === "portfolio")
        return translated("Portfolio", "معرض الأعمال", "Portfolio", "作品集")[
            languageCode.value
        ]
    return link.label
}
const availableLinks = computed(() =>
    getAvailableCreatorSocialLinks(props.links ?? creatorSocialLinks)
)
const fallbackLabel = computed(() => {
    if (languageCode.value === "ar") return "روابط التواصل غير متاحة حالياً."
    if (languageCode.value === "fr")
        return "Les liens sociaux ne sont pas disponibles pour le moment."
    if (languageCode.value === "zh") return "社交链接暂时不可用。"
    return "Social links are not available right now."
})

function linkDetail(link: CreatorSocialLink): string {
    if (link.handle) return link.handle
    if (link.id === "email") return link.url.replace("mailto:", "")
    try {
        return new URL(link.url).hostname.replace(/^www\./, "")
    } catch {
        return link.url
    }
}
</script>

<template>
    <ul
        v-if="availableLinks.length"
        class="flex flex-wrap"
        :class="variant === 'full' ? 'grid gap-3 sm:grid-cols-2' : 'gap-2'"
        :aria-label="linksLabel[languageCode]"
    >
        <li v-for="link in availableLinks" :key="link.id">
            <a
                :href="link.url"
                :target="link.id === 'email' ? undefined : '_blank'"
                :rel="link.id === 'email' ? undefined : 'noopener noreferrer'"
                :aria-label="`${linkLabel(link)}: ${linkDetail(link)}`"
                :title="`${linkLabel(link)}: ${linkDetail(link)}`"
                class="focus-visible:outline-lilac transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                :class="{
                    'border-border hover:border-peach hover:text-peach grid size-11 place-items-center rounded-full border':
                        variant === 'icons',
                    'border-border bg-paper text-ink hover:border-peach hover:text-peach inline-flex min-h-11 items-center gap-2 rounded-full border px-3 text-sm font-semibold':
                        variant === 'compact',
                    'border-border bg-paper text-ink hover:border-peach flex min-h-16 items-center gap-3 border p-3 [--color-ink:var(--color-social-ink)] [--color-muted:var(--color-social-detail)]':
                        variant === 'full'
                }"
            >
                <CreatorSocialIcon
                    class="size-5 shrink-0"
                    :social-id="link.id"
                />
                <template v-if="variant !== 'icons'">
                    <span v-if="variant === 'compact'">{{
                        linkLabel(link)
                    }}</span>
                    <span v-else class="min-w-0">
                        <strong class="block text-sm">{{
                            linkLabel(link)
                        }}</strong>
                        <span
                            dir="ltr"
                            class="text-muted block truncate text-xs"
                            >{{ linkDetail(link) }}</span
                        >
                    </span>
                </template>
            </a>
        </li>
    </ul>
    <p v-else class="text-muted text-sm" role="status">
        {{ fallbackLabel }}
    </p>
</template>
