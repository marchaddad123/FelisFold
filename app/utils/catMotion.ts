import type { CatSequenceName } from "~/data/catSequences"

export type CatAction = "food" | "ball" | "jump"
export const catActions: CatAction[] = ["food", "ball", "jump"]
export const catActionSequences: Record<CatAction, CatSequenceName> = {
    food: "eat",
    ball: "play",
    jump: "jump"
}
export const catGround = 245

// Calibrated to the mouth in the complete feeding footage, in a 400 × 260
// display frame. This positions the prop; it never changes the cat's anatomy.
export const catFeedingMouth = { x: 38, y: 184 }

export function smoothStep(progress: number) {
    const bounded = Math.max(0, Math.min(1, progress))
    return bounded * bounded * (3 - 2 * bounded)
}
