import { storageKeys } from "~/utils/storageKeys"
import { loadCatSequence } from "~/utils/catSequences"
import {
    catActions,
    catActionSequences,
    type CatAction
} from "~/utils/catMotion"
import { createCatVisit, catVisitFrame, type CatVisit } from "~/utils/catVisit"

export function useCatVisits() {
    const visitsEnabled = ref(true)
    const soundEnabled = ref(true)
    const reducedMotion = ref(false)
    const visit = shallowRef<CatVisit | null>(null)
    const seconds = ref(0)
    const menuIsOpen = ref(false)
    const { isThemeTransitionRunning } = useThemeTransition()
    const frame = computed(() =>
        visit.value ? catVisitFrame(visit.value, seconds.value) : null
    )
    let visitTimer: ReturnType<typeof setTimeout> | undefined
    let animationFrame = 0
    let startedAt = 0
    let previousAction: CatAction | undefined
    let motionPreference: MediaQueryList | undefined
    let audioContext: AudioContext | undefined
    let meowRecording: Promise<AudioBuffer> | undefined
    let meow: AudioBufferSourceNode | undefined
    let meowHasPlayed = false
    let componentIsMounted = false
    let visitRequest = 0

    function savePreferences() {
        try {
            localStorage.setItem(
                storageKeys.cats,
                JSON.stringify({
                    version: 2,
                    visits: visitsEnabled.value,
                    sound: soundEnabled.value
                })
            )
        } catch {
            /* Visits also work when browser storage is unavailable. */
        }
    }
    function clearTimer() {
        clearTimeout(visitTimer)
        visitTimer = undefined
    }
    function stopVisit() {
        visitRequest++
        cancelAnimationFrame(animationFrame)
        visit.value = null
        meow?.stop()
        meow = undefined
        meowHasPlayed = false
    }
    function pageIsBusy() {
        return (
            document.hidden ||
            isThemeTransitionRunning.value ||
            Boolean(
                document.querySelector('[role="dialog"], #mobile-navigation')
            ) ||
            document.activeElement?.matches(
                'input, textarea, select, [contenteditable="true"]'
            )
        )
    }
    function scheduleVisit(first = false) {
        clearTimer()
        if (!componentIsMounted || !visitsEnabled.value || reducedMotion.value)
            return
        // No catch-up visits after changing tabs. Only one future timer exists.
        visitTimer = setTimeout(
            () => {
                if (pageIsBusy() || menuIsOpen.value) {
                    scheduleVisit()
                    return
                }
                void inviteCat()
            },
            first
                ? 12000 + Math.random() * 10000
                : 45000 + Math.random() * 45000
        )
    }
    async function playMeow() {
        if (
            !soundEnabled.value ||
            !visit.value ||
            meowHasPlayed ||
            document.hidden ||
            !audioContext ||
            audioContext.state !== "running"
        )
            return
        const request = visitRequest
        try {
            meowRecording ??= fetch("/audio/cat-meow.mp3")
                .then((response) => {
                    if (!response.ok)
                        throw new Error("Meow recording unavailable")
                    return response.arrayBuffer()
                })
                .then((recording) => audioContext!.decodeAudioData(recording))
                .catch((error: unknown) => {
                    meowRecording = undefined
                    throw error
                })
            const recording = await meowRecording
            if (
                !componentIsMounted ||
                request !== visitRequest ||
                !visit.value ||
                !soundEnabled.value ||
                meowHasPlayed ||
                pageIsBusy() ||
                audioContext.state !== "running"
            )
                return
            const volume = audioContext.createGain()
            volume.gain.value = 0.25
            volume.connect(audioContext.destination)
            const recordingSource = audioContext.createBufferSource()
            meow = recordingSource
            recordingSource.buffer = recording
            recordingSource.connect(volume)
            recordingSource.onended = () => {
                recordingSource.disconnect()
                volume.disconnect()
                if (meow === recordingSource) meow = undefined
            }
            meowHasPlayed = true
            recordingSource.start()
        } catch {
            // A failed recording or browser audio restriction never changes preferences.
        }
    }
    async function unlockSound(event: Event) {
        if (!event.isTrusted || !soundEnabled.value || document.hidden) return
        try {
            // Resume inside a real click, tap or key press, before any await.
            audioContext ??= new AudioContext()
            if (audioContext.state === "suspended") await audioContext.resume()
            await playMeow()
        } catch {
            /* Try again on the next trusted interaction. */
        }
    }
    async function inviteCat(action?: CatAction) {
        clearTimer()
        stopVisit()
        menuIsOpen.value = false
        if (pageIsBusy()) {
            scheduleVisit()
            return
        }
        const request = ++visitRequest
        const choices = catActions.filter((choice) => choice !== previousAction)
        const nextAction = reducedMotion.value
            ? "food"
            : (action ??
              choices[Math.floor(Math.random() * choices.length)] ??
              "food")
        try {
            await loadCatSequence(catActionSequences[nextAction])
        } catch {
            scheduleVisit()
            return
        }
        if (!componentIsMounted || request !== visitRequest) return
        if (pageIsBusy()) {
            scheduleVisit()
            return
        }
        previousAction = nextAction
        const viewport = document
            .querySelector('[data-testid="global-cat-visits"]')
            ?.getBoundingClientRect()
        visit.value = createCatVisit(nextAction, {
            width: viewport?.width ?? window.innerWidth,
            height: viewport?.height ?? window.innerHeight,
            topInset: Math.max(
                0,
                document.querySelector("header")?.getBoundingClientRect()
                    .bottom ?? 0
            )
        })
        seconds.value = reducedMotion.value ? 1 : 0
        void playMeow()
        if (reducedMotion.value) return
        startedAt = performance.now()
        animationFrame = requestAnimationFrame(tick)
    }
    function tick(timestamp: number) {
        if (!visit.value) return
        if (pageIsBusy()) {
            dismissCat()
            return
        }
        seconds.value = (timestamp - startedAt) / 1000
        if (frame.value?.finished) {
            dismissCat()
            return
        }
        animationFrame = requestAnimationFrame(tick)
    }
    function dismissCat() {
        stopVisit()
        scheduleVisit()
    }
    function toggleVisits() {
        visitsEnabled.value = !visitsEnabled.value
        savePreferences()
        if (visitsEnabled.value) scheduleVisit(true)
        else {
            clearTimer()
            stopVisit()
        }
    }
    function toggleSound() {
        soundEnabled.value = !soundEnabled.value
        savePreferences()
        if (soundEnabled.value) void playMeow()
        else {
            meow?.stop()
            meow = undefined
        }
    }
    function visibilityChanged() {
        clearTimer()
        stopVisit()
        if (!document.hidden) scheduleVisit()
    }
    function motionChanged() {
        reducedMotion.value = motionPreference?.matches ?? false
        clearTimer()
        stopVisit()
        scheduleVisit()
    }
    watch(isThemeTransitionRunning, (running) => {
        if (running) {
            clearTimer()
            stopVisit()
        } else scheduleVisit()
    })
    onMounted(() => {
        componentIsMounted = true
        try {
            const saved: unknown = JSON.parse(
                localStorage.getItem(storageKeys.cats) ?? "null"
            )
            // The public experience is automatic. Saved controls are for development,
            // and legacy opt-in sound preferences do not mute the new default.
            if (
                import.meta.dev &&
                saved &&
                typeof saved === "object" &&
                "version" in saved &&
                saved.version === 2
            ) {
                if ("visits" in saved && typeof saved.visits === "boolean")
                    visitsEnabled.value = saved.visits
                if ("sound" in saved && typeof saved.sound === "boolean")
                    soundEnabled.value = saved.sound
            }
        } catch {
            /* Ignore stale or unavailable preferences. */
        }
        motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)")
        reducedMotion.value = motionPreference.matches
        motionPreference.addEventListener("change", motionChanged)
        document.addEventListener("visibilitychange", visibilityChanged)
        document.addEventListener("pointerup", unlockSound)
        document.addEventListener("keydown", unlockSound)
        window.addEventListener("resize", visibilityChanged)
        scheduleVisit(true)
    })
    onBeforeUnmount(() => {
        componentIsMounted = false
        clearTimer()
        stopVisit()
        motionPreference?.removeEventListener("change", motionChanged)
        document.removeEventListener("visibilitychange", visibilityChanged)
        document.removeEventListener("pointerup", unlockSound)
        document.removeEventListener("keydown", unlockSound)
        window.removeEventListener("resize", visibilityChanged)
        if (audioContext) void audioContext.close().catch(() => {})
    })
    return {
        visitsEnabled,
        soundEnabled,
        reducedMotion,
        visit,
        seconds,
        frame,
        menuIsOpen,
        inviteCat,
        dismissCat,
        toggleVisits,
        toggleSound
    }
}
