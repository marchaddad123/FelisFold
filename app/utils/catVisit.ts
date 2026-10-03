import {
    catGround,
    catFeedingMouth,
    smoothStep,
    type CatAction
} from "~/utils/catMotion"
import type { CatSequenceName } from "~/data/catSequences"

export function createCatVisit(
    action: CatAction,
    viewport: { width: number; height: number; topInset: number }
) {
    const margin = 16
    const topEdge = Math.max(margin, viewport.topInset + margin)
    const availableHeight = Math.max(1, viewport.height - topEdge - margin)
    const width = Math.min(
        320,
        viewport.width - margin * 2,
        Math.max(220, viewport.width * 0.65),
        (availableHeight * 400) / 260
    )
    const scale = width / 400
    const rightEdge = Math.max(margin, viewport.width - width - margin)
    const bottomEdge = Math.max(topEdge, viewport.height - 260 * scale - margin)
    const horizontalPosition = Math.random()
    const verticalPosition = Math.random()
    const isSnack = action === "food"
    const isRight = horizontalPosition >= 0.5
    const isBottom = verticalPosition >= 0.5
    const destination = isSnack
        ? isRight
            ? rightEdge
            : margin
        : margin + (rightEdge - margin) * horizontalPosition
    const top = isSnack
        ? isBottom
            ? bottomEdge
            : topEdge
        : topEdge + (bottomEdge - topEdge) * verticalPosition
    // Snacks face inward; mirroring the complete frame also mirrors its mouth.
    const reversed = isSnack ? !isRight : Math.random() > 0.5
    return {
        action,
        width,
        scale,
        destination,
        top,
        placement: isSnack
            ? `${isBottom ? "bottom" : "top"}-${isRight ? "right" : "left"}`
            : "free",
        reversed,
        ground: catGround,
        bowlTop: top + (catGround - 72) * scale,
        bowlCenter:
            destination +
            (reversed ? 400 - catFeedingMouth.x : catFeedingMouth.x) * scale,
        duration: action === "jump" ? 2.2 : action === "food" ? 9.7 : 6.2
    }
}
export type CatVisit = ReturnType<typeof createCatVisit>

export function catVisitFrame(visit: CatVisit, seconds: number) {
    const sequence: CatSequenceName =
        visit.action === "jump"
            ? "jump"
            : visit.action === "food"
              ? "eat"
              : "play"
    const sequenceSeconds = Math.max(0, seconds - 0.6)
    let phase = "arriving"
    const position = visit.destination
    let opacity = smoothStep(seconds / 0.6)
    let food = 1
    if (visit.action === "jump") {
        if (seconds >= 0.6) phase = "jumping"
        if (seconds >= 1.6) {
            phase = "leaving"
            opacity = 1 - smoothStep((seconds - 1.6) / 0.6)
        }
    } else {
        if (seconds >= 0.6)
            phase = visit.action === "food" ? "eating" : "playing"
        if (visit.action === "food") {
            food = Math.max(0, 1 - Math.floor(sequenceSeconds / 0.75) / 10)
            if (seconds >= 8.6) phase = "happy"
        }
        if (seconds >= visit.duration - 0.6) {
            phase = "leaving"
            opacity = 1 - smoothStep((seconds - visit.duration + 0.6) / 0.6)
        }
    }
    return {
        sequence,
        sequenceSeconds,
        phase,
        position,
        opacity,
        food,
        propOpacity: Math.min(
            smoothStep(seconds / 0.6),
            1 - smoothStep((seconds - visit.duration + 0.6) / 0.6)
        ),
        finished: seconds >= visit.duration
    }
}
