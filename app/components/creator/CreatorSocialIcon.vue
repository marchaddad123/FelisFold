<script setup lang="ts">
import type { CreatorSocialId } from "~/data/creatorProfile"

defineProps<{ socialId: CreatorSocialId }>()
</script>

<template>
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
    >
        <template v-if="socialId === 'instagram'">
            <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
            <circle cx="12" cy="12" r="3.8" />
            <path d="M17.7 6.4h.01" />
        </template>
        <template v-else-if="socialId === 'tiktok'">
            <path d="M14.5 4v10.2a4.3 4.3 0 1 1-3.7-4.25" />
            <path d="M14.5 4c.65 2.5 2.1 3.8 4.5 4.25" />
        </template>
        <template v-else-if="socialId === 'linkedin'">
            <rect x="4" y="9" width="3" height="10" />
            <path d="M5.5 5.2v.1" />
            <path d="M11 19V9h3v1.7c.9-1.25 4.5-1.55 4.5 2.8V19" />
        </template>
        <template v-else-if="socialId === 'github'">
            <path
                d="M9 19c-4.5 1.4-4.5-2.3-6.3-2.8M15 21v-3.5c0-1 .1-1.7-.5-2.3 2.9-.3 5.9-1.4 5.9-6.5a5 5 0 0 0-1.35-3.5 4.7 4.7 0 0 0-.1-3.45S17.9 1.4 15 3.1a12 12 0 0 0-6 0C6.1 1.4 5.05 1.75 5.05 1.75a4.7 4.7 0 0 0-.1 3.45A5 5 0 0 0 3.6 8.7c0 5.1 3 6.2 5.9 6.5-.5.5-.7 1.2-.65 2.05V21"
            />
        </template>
        <template v-else-if="socialId === 'email'">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
        </template>
        <template v-else>
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </template>
    </svg>
</template>
