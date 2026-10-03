export type CatSequenceName = "walk" | "eat" | "play" | "jump"

// Every tile is a complete photographed cat. These are 25 fps video frames,
// packed into sheets to avoid hundreds of separate image requests.
export const catSequences = {
    walk: { path: "walk", frameCount: 18, loop: true },
    eat: { path: "feed", frameCount: 200, loop: false },
    play: { path: "play", frameCount: 125, loop: false },
    jump: { path: "jump", frameCount: 25, loop: false }
} satisfies Record<
    CatSequenceName,
    {
        path: string
        frameCount: number
        loop: boolean
    }
>

export const catFrameSize = { width: 320, height: 208 }
export const catFramesPerSecond = 25
export const catSheetColumns = 8
export const catFramesPerSheet = 64
export const themeCatDuration = 6

export const catFootageCredits = [
    {
        creator: "Ileana Bondor",
        sourceUrl:
            "https://www.pexels.com/video/cat-walking-on-top-of-fence-10296775/",
        actions: "walk, jump"
    },
    {
        creator: "Thirdman",
        sourceUrl:
            "https://www.pexels.com/video/cat-eating-from-a-bowl-8944057/",
        actions: "eat"
    },
    {
        creator: "cottonbro studio",
        sourceUrl:
            "https://www.pexels.com/video/playing-bait-with-a-cat-6864989/",
        actions: "play"
    }
]
