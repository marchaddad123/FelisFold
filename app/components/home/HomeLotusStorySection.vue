<script setup lang="ts">
const { localizedPath } = useLocalizedPath()
</script>

<template>
    <section
        id="lotus-home-story"
        class="paper-texture px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
    >
        <div class="mx-auto max-w-[90rem]">
            <div class="grid lg:grid-cols-2">
                <article
                    class="border-border grid gap-5 border-b pb-8 lg:grid-cols-[1fr_0.75fr] lg:border-e lg:border-b-0 lg:pe-8"
                >
                    <div>
                        <p
                            class="text-peach text-xs font-bold tracking-[0.2em] uppercase"
                        >
                            Lotus's experience
                        </p>
                        <h2 class="font-editorial text-ink mt-2 text-3xl">
                            What I observe in daily life.
                        </h2>
                        <p class="text-muted mt-3 leading-7">
                            His movement, eating, vomiting, grooming and good
                            days. Real observations help shape better questions.
                        </p>
                        <NuxtLink
                            :to="localizedPath('/lotus')"
                            class="editorial-link text-peach mt-5 inline-flex font-bold"
                            >See Lotus's journey →</NuxtLink
                        >
                    </div>
                    <NuxtImg
                        src="/images/lotus/lotus-posture.jpg"
                        alt="Lotus sitting while his movement and posture are observed"
                        width="1152"
                        height="1536"
                        sizes="100vw lg:260px"
                        format="webp"
                        :quality="82"
                        loading="lazy"
                        decoding="async"
                        placeholder
                        class="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
                    />
                </article>
                <article
                    class="grid gap-5 pt-8 lg:grid-cols-[1fr_0.75fr] lg:ps-8 lg:pt-0"
                >
                    <div>
                        <p
                            class="text-sky text-xs font-bold tracking-[0.2em] uppercase"
                        >
                            What research says
                        </p>
                        <h2 class="font-editorial text-ink mt-2 text-3xl">
                            Evidence without the wall of jargon.
                        </h2>
                        <p class="text-muted mt-3 leading-7">
                            Veterinary studies, professional guidance and
                            trusted sources—explained in a calm, practical way.
                        </p>
                        <NuxtLink
                            :to="localizedPath('/resources')"
                            class="editorial-link text-peach mt-5 inline-flex font-bold"
                            >Read the science →</NuxtLink
                        >
                    </div>
                    <NuxtImg
                        src="/images/lotus/lotus-cozy.jpg"
                        alt="Lotus sleeping comfortably"
                        width="864"
                        height="1536"
                        sizes="100vw lg:260px"
                        format="webp"
                        :quality="82"
                        loading="lazy"
                        decoding="async"
                        placeholder
                        class="aspect-[4/3] w-full rounded-[1.5rem] object-cover object-[center_35%]"
                    />
                </article>
            </div>
        </div>
    </section>
</template>
