<script setup lang="ts">
const emailAddress = ref("")
const hasSubscribed = ref(false)

function submitPlaceholder() {
    hasSubscribed.value = true
}
</script>

<template>
    <section
        class="bg-forest paper-texture px-4 py-10 text-[#fffaf1] sm:px-6 lg:px-8"
    >
        <div
            class="mx-auto grid max-w-[90rem] gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center"
        >
            <div>
                <p
                    class="text-xs font-bold tracking-[0.2em] text-[#efb79e] uppercase"
                >
                    Stay in the loop
                </p>
                <h2 class="font-editorial mt-2 text-3xl sm:text-4xl">
                    Gentle guidance for better cat days.
                </h2>
                <p class="mt-2 max-w-xl text-sm leading-6 text-[#d9e5df]">
                    Evidence-led guides, Lotus updates and practical care notes.
                    Newsletter UI only for V1—no address is sent anywhere.
                </p>
            </div>
            <form
                class="flex flex-col gap-2 sm:flex-row"
                @submit.prevent="submitPlaceholder"
            >
                <label class="sr-only" for="newsletter-email"
                    >Email address</label
                >
                <input
                    id="newsletter-email"
                    v-model="emailAddress"
                    type="email"
                    required
                    placeholder="Your email address"
                    class="min-h-12 flex-1 rounded-full border border-white/20 bg-[#fffaf1] px-5 text-[#18231f] outline-none focus:border-[#ef9c79]"
                />
                <button
                    type="submit"
                    class="bg-peach text-on-accent min-h-12 rounded-full px-7 font-semibold"
                >
                    {{ hasSubscribed ? "Saved for later ✓" : "Subscribe" }}
                </button>
            </form>
        </div>
    </section>
</template>
