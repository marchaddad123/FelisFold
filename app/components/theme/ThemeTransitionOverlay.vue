<script setup lang="ts">
const { transitionDirection } = useThemeTransition()

const isVisible = computed(() => transitionDirection.value !== null)
const isSwitchingToLight = computed(
    () => transitionDirection.value === "to-light"
)
</script>

<template>
    <Transition name="theme-overlay">
        <div
            v-if="isVisible"
            class="pointer-events-none fixed inset-0 z-[120] overflow-hidden"
            aria-hidden="true"
        >
            <div
                class="theme-wipe absolute inset-0"
                :class="
                    isSwitchingToLight
                        ? 'theme-wipe-light bg-[#f8f3ea]'
                        : 'theme-wipe-dark bg-[#151318]'
                "
            />
            <RunningCatRow
                :cat-color="isSwitchingToLight ? 'white' : 'black'"
            />
        </div>
    </Transition>
</template>
