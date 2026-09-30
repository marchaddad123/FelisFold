<template>
    <div
        class="loading-cat-photo relative mx-auto mt-10 w-full max-w-sm sm:max-w-md"
    >
        <div
            class="bg-peach-soft dark:bg-peach/10 absolute inset-x-10 inset-y-8 rounded-full blur-3xl"
            aria-hidden="true"
        />
        <div
            class="border-border bg-paper relative overflow-hidden rounded-[48%_48%_2rem_2rem] border p-2 shadow-[0_1.5rem_4rem_rgb(80_53_35/0.16)] dark:shadow-[0_1.5rem_4rem_rgb(0_0_0/0.35)]"
        >
            <NuxtImg
                src="/images/scottish-folds/fold-in-blanket-unsplash-nodtncsldte.jpg"
                alt="A brown Scottish Fold peeking out from a warm blanket"
                width="1400"
                height="875"
                sizes="(max-width: 640px) 88vw, 448px"
                format="webp"
                :quality="82"
                decoding="async"
                class="aspect-[16/9] w-full rounded-[46%_46%_1.4rem_1.4rem] object-cover object-[center_48%]"
            />
            <div
                class="from-paper absolute inset-x-2 bottom-2 h-12 bg-gradient-to-t to-transparent"
                aria-hidden="true"
            />
        </div>
        <span
            class="font-handwritten text-peach absolute end-1 top-1 rotate-6 text-3xl sm:-end-4 sm:text-4xl"
            aria-hidden="true"
            >♡</span
        >
    </div>
</template>
