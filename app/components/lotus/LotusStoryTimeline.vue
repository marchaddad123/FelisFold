<script setup lang="ts">
defineProps<{
    heading: string
    copy: string
    earlierCaption: string
    currentCaption: string
}>()
</script>

<template>
    <section>
        <AppSectionHeading :title="heading" :copy="copy" />
        <div class="mt-7 grid gap-4 md:grid-cols-2">
            <figure
                class="border-border bg-paper overflow-hidden rounded-[2rem] border p-3"
            >
                <NuxtImg
                    src="/images/lotus/lotus-with-creator-younger.jpg"
                    alt="Lotus with the FelisFold creator when Lotus was younger"
                    width="1152"
                    height="1536"
                    sizes="100vw md:50vw lg:560px"
                    format="webp"
                    :quality="86"
                    loading="lazy"
                    decoding="async"
                    placeholder
                    class="aspect-[4/3] w-full rounded-[1.6rem] object-cover object-[center_40%]"
                />
                <figcaption class="text-muted px-3 pt-4 pb-2 text-sm">
                    {{ earlierCaption }}
                </figcaption>
            </figure>
            <figure
                class="border-border bg-paper overflow-hidden rounded-[2rem] border p-3"
            >
                <NuxtImg
                    src="/images/lotus/lotus-with-creator.jpg"
                    alt="Lotus with the FelisFold creator more recently"
                    width="864"
                    height="1536"
                    sizes="100vw md:50vw lg:560px"
                    format="webp"
                    :quality="86"
                    loading="lazy"
                    decoding="async"
                    placeholder
                    class="aspect-[4/3] w-full rounded-[1.6rem] object-cover object-[center_45%]"
                />
                <figcaption class="text-muted px-3 pt-4 pb-2 text-sm">
                    {{ currentCaption }}
                </figcaption>
            </figure>
        </div>
    </section>
</template>
