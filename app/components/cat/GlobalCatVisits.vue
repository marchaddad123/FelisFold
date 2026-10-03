<script setup lang="ts">
import { catVisitLabels } from "~/data/catVisitLabels"
const developerControlsAreVisible = import.meta.dev
const { languageCode } = useCurrentLanguage()
const {
    visitsEnabled,
    soundEnabled,
    reducedMotion,
    visit,
    frame,
    menuIsOpen,
    inviteCat,
    dismissCat,
    toggleVisits,
    toggleSound
} = useCatVisits()
const labels = computed(() =>
    Object.fromEntries(
        Object.entries(catVisitLabels).map(([key, value]) => [
            key,
            value[languageCode.value]
        ])
    )
)
const controls = useTemplateRef<HTMLElement>("controls")
const toggleButton = useTemplateRef<HTMLButtonElement>("toggle")
watch(menuIsOpen, async (isOpen) => {
    if (isOpen) {
        await nextTick()
        controls.value
            ?.querySelector<HTMLButtonElement>("#cat-visit-controls button")
            ?.focus()
    }
})

function closeMenu() {
    menuIsOpen.value = false
    toggleButton.value?.focus()
}
function sayGoodbye() {
    dismissCat()
    closeMenu()
}
function outsideClick(event: PointerEvent) {
    if (event.target instanceof Node && !controls.value?.contains(event.target))
        menuIsOpen.value = false
}
function escapePressed(event: KeyboardEvent) {
    if (event.key === "Escape" && menuIsOpen.value) {
        event.stopPropagation()
        closeMenu()
    }
}
onMounted(() => document.addEventListener("pointerdown", outsideClick))
onBeforeUnmount(() => document.removeEventListener("pointerdown", outsideClick))
</script>

<template>
    <div
        class="pointer-events-none fixed inset-0 z-40"
        data-testid="global-cat-visits"
        :data-cat-action="visit?.action"
        :data-cat-phase="frame?.phase ?? 'waiting'"
        :data-cat-placement="visit?.placement"
        :style="{ bottom: 'env(safe-area-inset-bottom, 0px)' }"
    >
        <div
            v-if="visit && frame"
            class="absolute inset-0 overflow-hidden"
            aria-hidden="true"
        >
            <div
                v-if="visit.action === 'food'"
                data-testid="cat-bowl"
                class="absolute"
                :style="{
                    left: `${visit.bowlCenter - 40 * visit.scale}px`,
                    top: `${visit.bowlTop}px`,
                    width: `${80 * visit.scale}px`,
                    height: `${72 * visit.scale}px`,
                    opacity: frame.propOpacity
                }"
            >
                <CatFoodBowl :food="frame.food" />
            </div>
            <div
                data-testid="cat-visitor"
                class="text-ink absolute"
                :style="{
                    left: 0,
                    top: `${visit.top}px`,
                    width: `${visit.width}px`,
                    height: `${260 * visit.scale}px`,
                    transform: `translate3d(${frame.position}px, 0, 0)`,
                    opacity: frame.opacity
                }"
            >
                <RealisticCat
                    :sequence="frame.sequence"
                    :seconds="frame.sequenceSeconds"
                    :reversed="visit.reversed"
                />
            </div>
            <div
                v-if="visit.action === 'food'"
                class="absolute"
                :style="{
                    left: `${visit.bowlCenter - 40 * visit.scale}px`,
                    top: `${visit.bowlTop}px`,
                    width: `${80 * visit.scale}px`,
                    height: `${72 * visit.scale}px`,
                    opacity: frame.propOpacity
                }"
            >
                <CatFoodBowl front />
            </div>
            <span
                v-if="frame.phase === 'happy'"
                class="text-peach absolute text-xl"
                :style="{
                    left: `${visit.bowlCenter - (visit.reversed ? -20 : 45)}px`,
                    top: `${visit.top + 100 * visit.scale}px`
                }"
                >♥</span
            >
        </div>
        <div
            v-if="developerControlsAreVisible"
            ref="controls"
            class="pointer-events-auto absolute end-3"
            :style="{
                bottom:
                    visit && !menuIsOpen
                        ? `min(${260 * visit.scale + 24}px, calc(100dvh - 128px))`
                        : '12px'
            }"
            @keydown="escapePressed"
        >
            <div
                v-if="menuIsOpen"
                id="cat-visit-controls"
                class="border-border bg-paper text-ink absolute end-0 bottom-14 max-h-[calc(100dvh-152px)] w-64 max-w-[calc(100vw-24px)] overflow-y-auto rounded-2xl border p-4 shadow-xl"
            >
                <div class="flex items-center justify-between gap-2">
                    <p class="font-display text-lg font-semibold">
                        {{ labels.title }}
                    </p>
                    <button
                        type="button"
                        class="hover:bg-cream grid size-11 shrink-0 place-items-center rounded-full"
                        :aria-label="labels.close"
                        @click="closeMenu"
                    >
                        ×
                    </button>
                </div>
                <p class="text-muted mb-3 text-sm">
                    {{ reducedMotion ? labels.reduced : labels.quiet }}
                </p>
                <button
                    type="button"
                    role="switch"
                    :aria-checked="visitsEnabled"
                    class="flex min-h-11 w-full items-center justify-between gap-3 text-sm"
                    @click="toggleVisits"
                >
                    {{ labels.random
                    }}<span
                        class="relative h-6 w-10 shrink-0 rounded-full"
                        :class="visitsEnabled ? 'bg-sage' : 'bg-muted/30'"
                        ><span
                            class="absolute top-1 size-4 rounded-full bg-white"
                            :class="visitsEnabled ? 'end-1' : 'start-1'"
                    /></span>
                </button>
                <button
                    type="button"
                    role="switch"
                    :aria-checked="soundEnabled"
                    class="mb-3 flex min-h-11 w-full items-center justify-between gap-3 text-sm"
                    @click="toggleSound"
                >
                    {{ labels.sound
                    }}<span
                        class="relative h-6 w-10 shrink-0 rounded-full"
                        :class="soundEnabled ? 'bg-sage' : 'bg-muted/30'"
                        ><span
                            class="absolute top-1 size-4 rounded-full bg-white"
                            :class="soundEnabled ? 'end-1' : 'start-1'"
                    /></span>
                </button>
                <div class="grid gap-1">
                    <button
                        v-for="action in ['food', 'ball', 'jump'] as const"
                        :key="action"
                        type="button"
                        class="border-border hover:bg-cream min-h-11 rounded-xl border px-3 text-start text-sm"
                        @click="inviteCat(action)"
                    >
                        {{ labels[action] }}
                    </button>
                    <button
                        v-if="visit"
                        type="button"
                        class="text-muted min-h-11 rounded-xl text-sm"
                        @click="sayGoodbye"
                    >
                        {{ labels.dismiss }}
                    </button>
                </div>
                <CatMediaCredits class="mt-3" />
            </div>
            <div class="flex items-center gap-2">
                <button
                    v-if="visit"
                    type="button"
                    class="border-border bg-paper/95 text-muted grid size-11 place-items-center rounded-full border shadow-sm"
                    :aria-label="labels.dismiss"
                    @click="dismissCat"
                >
                    ×
                </button>
                <button
                    ref="toggle"
                    type="button"
                    class="border-border bg-paper/95 text-ink hover:bg-cream grid size-11 place-items-center rounded-full border shadow-sm"
                    :aria-label="labels.controls"
                    :aria-expanded="menuIsOpen"
                    aria-controls="cat-visit-controls"
                    @click="menuIsOpen = !menuIsOpen"
                >
                    <svg
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <ellipse
                            cx="7"
                            cy="6"
                            rx="2.2"
                            ry="3"
                            transform="rotate(-20 7 6)"
                        />
                        <ellipse
                            cx="17"
                            cy="6"
                            rx="2.2"
                            ry="3"
                            transform="rotate(20 17 6)"
                        />
                        <ellipse
                            cx="3.5"
                            cy="11"
                            rx="2"
                            ry="2.7"
                            transform="rotate(-30 3.5 11)"
                        />
                        <ellipse
                            cx="20.5"
                            cy="11"
                            rx="2"
                            ry="2.7"
                            transform="rotate(30 20.5 11)"
                        />
                        <path
                            d="M6 17c0-3 3-7 6-7s6 4 6 7c0 4-4 2-6 2s-6 2-6-2Z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
