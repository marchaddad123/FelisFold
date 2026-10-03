// A clock that exists only while an animated component is mounted.
export function useAnimationClock() {
    const seconds = ref(0)
    let animationFrame = 0
    let startedAt = 0
    function tick(timestamp: number) {
        if (!startedAt) startedAt = timestamp
        seconds.value = (timestamp - startedAt) / 1000
        animationFrame = requestAnimationFrame(tick)
    }
    onMounted(() => {
        animationFrame = requestAnimationFrame(tick)
    })
    onBeforeUnmount(() => cancelAnimationFrame(animationFrame))
    return seconds
}
