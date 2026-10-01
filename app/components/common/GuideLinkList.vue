<script setup lang="ts">
import type { HealthTopic } from "~/types/foldcare"
defineProps<{ guides: HealthTopic[]; basePath: string }>()
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
</script>

<template>
    <ul class="divide-border border-border divide-y border-y">
        <li v-for="guide in guides" :key="guide.slug">
            <NuxtLink
                :to="localizedPath(`${basePath}/${guide.slug}`)"
                class="group grid gap-2 py-6 sm:grid-cols-[1fr_auto]"
            >
                <div>
                    <h2
                        class="font-editorial text-ink text-2xl group-hover:underline"
                    >
                        {{ guide.title[languageCode] }}
                    </h2>
                    <p class="text-muted mt-2 max-w-2xl leading-7">
                        {{ guide.summary[languageCode] }}
                    </p>
                </div>
                <span aria-hidden="true" class="text-lilac">→</span>
            </NuxtLink>
        </li>
    </ul>
</template>
