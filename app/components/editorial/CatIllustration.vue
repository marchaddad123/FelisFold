<script setup lang="ts">
withDefaults(defineProps<{ sleeping?: boolean }>(), { sleeping: false })
</script>

<template>
    <NuxtImg
        :src="
            sleeping
                ? '/images/cat/tabby-resting.webp'
                : '/images/cat/tabby-standing.webp'
        "
        :width="sleeping ? 900 : 384"
        :height="sleeping ? 355 : 361"
        sizes="192px sm:256px"
        loading="lazy"
        decoding="async"
        alt=""
        aria-hidden="true"
        class="w-48 object-contain"
    />
</template>
