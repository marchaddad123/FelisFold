<script setup lang="ts">
import { themeCatDuration } from "~/data/catSequences"
const seconds = useAnimationClock()
const { completeThemeTransition } = useThemeTransition()
const viewportWidth = ref(1440)
const catWidth = computed(() => (viewportWidth.value < 640 ? 230 : 320))
const distance = computed(
    () =>
        (viewportWidth.value + catWidth.value) *
        Math.min(1, seconds.value / themeCatDuration)
)
watch(seconds, (value) => {
    if (value >= themeCatDuration) completeThemeTransition()
})
onMounted(() => {
    viewportWidth.value = window.innerWidth
})
</script>

<template>
    <div
        class="theme-cat-column"
        aria-hidden="true"
        :style="{
            width: `${catWidth}px`,
            transform: `translate3d(${distance - catWidth}px, 0, 0)`
        }"
    >
        <div
            v-for="catNumber in 3"
            :key="catNumber"
            class="theme-running-cat"
            :style="{ transform: `translateX(${(catNumber - 2) * 24}px)` }"
        >
            <RealisticCat
                sequence="walk"
                :seconds="seconds + catNumber * 0.1"
            />
        </div>
    </div>
</template>
