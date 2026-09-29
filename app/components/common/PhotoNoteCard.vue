<script setup lang="ts">
withDefaults(
    defineProps<{
        src: string
        alt: string
        width: number
        height: number
        caption: string
        rotate?: "left" | "right" | "none"
        sizes?: string
    }>(),
    { rotate: "none", sizes: "100vw sm:50vw lg:360px" }
)
</script>

<template>
    <figure
        class="photo-paper bg-[#fffaf1] p-2 pb-4 text-[#18231f]"
        :class="
            rotate === 'left'
                ? '-rotate-2'
                : rotate === 'right'
                  ? 'rotate-2'
                  : ''
        "
    >
        <NuxtImg
            :src="src"
            :alt="alt"
            :width="width"
            :height="height"
            :sizes="sizes"
            format="webp"
            :quality="84"
            loading="lazy"
            decoding="async"
            placeholder
            class="aspect-[4/3] w-full object-cover"
        />
        <figcaption class="font-handwritten px-2 pt-3 text-center text-sm">
            {{ caption }}
        </figcaption>
    </figure>
</template>
