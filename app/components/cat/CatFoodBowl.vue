<script setup lang="ts">
withDefaults(defineProps<{ food?: number; front?: boolean }>(), {
    food: 1,
    front: false
})
</script>

<template>
    <svg viewBox="0 0 80 72" class="h-full w-full" aria-hidden="true">
        <template v-if="!front">
            <ellipse
                data-bowl-interior
                cx="40"
                cy="11"
                rx="35"
                ry="10"
                fill="#627978"
                fill-opacity="0.3"
                stroke="#b8c5c1"
                stroke-width="2"
            />
            <g data-cat-food :data-food-remaining="food">
                <circle
                    v-for="piece in 20"
                    :key="piece"
                    :cx="16 + ((piece * 17) % 49)"
                    :cy="7 + ((piece * 7) % 8)"
                    r="2.5"
                    :fill="piece % 2 ? '#a87644' : '#d49e65'"
                    :opacity="piece / 20 <= food ? 1 : 0"
                />
            </g>
            <path
                d="M15 33v36m50-36v36M10 70h60"
                fill="none"
                stroke="#58635f"
                stroke-width="3"
            />
        </template>
        <path
            v-else
            d="M5 12 Q40 27 75 12 L67 31 Q40 40 13 31 Z"
            fill="#b7cbc6"
            fill-opacity="0.45"
            stroke="#b8c5c1"
            stroke-width="2"
        />
    </svg>
</template>
