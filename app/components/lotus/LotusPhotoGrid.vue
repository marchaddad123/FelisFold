<script setup lang="ts">
const photos = [
    {
        src: "/images/lotus/lotus-family.jpg",
        alt: "Lotus sleeping with other cats",
        width: 1536,
        height: 1152,
        position: "center"
    },
    {
        src: "/images/lotus/lotus-glasses.jpg",
        alt: "Lotus wearing a pair of glasses",
        width: 1536,
        height: 1333,
        position: "center"
    },
    {
        src: "/images/lotus/lotus-grooming.jpg",
        alt: "Lotus grooming himself",
        width: 692,
        height: 1536,
        position: "center 58%"
    },
    {
        src: "/images/lotus/lotus-feeding.jpg",
        alt: "Lotus eating from his food bowl",
        width: 1152,
        height: 1536,
        position: "center 58%"
    }
]
</script>

<template>
    <div class="grid grid-cols-2 gap-3 sm:gap-4">
        <NuxtImg
            v-for="photo in photos"
            :key="photo.src"
            :src="photo.src"
            :alt="photo.alt"
            :width="photo.width"
            :height="photo.height"
            sizes="50vw lg:340px"
            format="webp"
            :quality="84"
            loading="lazy"
            decoding="async"
            placeholder
            class="aspect-square w-full rounded-[1.6rem] object-cover"
            :style="{ objectPosition: photo.position }"
        />
    </div>
</template>
