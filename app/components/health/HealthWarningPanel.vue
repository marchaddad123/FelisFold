<script setup lang="ts">
import { emergencySigns } from "~/data/resourceData"
const { localizedPath } = useLocalizedPath()
</script>

<template>
    <aside
        class="bg-paper paper-texture border-border border p-6 lg:sticky lg:top-24"
    >
        <p class="text-danger text-xs font-bold tracking-[0.18em] uppercase">
            Safety first
        </p>
        <h2 class="font-editorial text-ink mt-2 text-3xl leading-none">
            Warning signs to monitor.
        </h2>
        <p class="text-muted mt-3 text-sm leading-6">
            A sudden or severe change deserves professional advice.
        </p>
        <ul class="mt-5 space-y-3">
            <li
                v-for="sign in emergencySigns"
                :key="sign"
                class="text-ink flex gap-3 text-sm leading-6"
            >
                <span class="text-danger" aria-hidden="true">◉</span
                ><span>{{ sign }}</span>
            </li>
        </ul>
        <NuxtLink
            :to="localizedPath('/health/when-to-call-a-vet')"
            class="bg-peach mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full px-5 text-sm font-bold text-white"
            >When to call a vet
            <span class="ms-2" aria-hidden="true">→</span></NuxtLink
        >
    </aside>
</template>
