export type NutritionTopic = {
    id: string
    icon: string
    title: string
    summary: string
    note: string
    tone: "cream" | "sky" | "sage" | "peach"
    image: { src: string; alt: string; width: number; height: number }
}

export const nutritionTopics: NutritionTopic[] = [
    {
        id: "small-meals",
        icon: "01",
        title: "Small, frequent meals",
        summary:
            "Measured portions make patterns easier to see and can be gentler for cats who eat too quickly.",
        note: "Track the food, grams and time—not just “breakfast.”",
        tone: "cream",
        image: {
            src: "/images/lotus/lotus-feeding.jpg",
            alt: "Lotus eating a measured meal",
            width: 1152,
            height: 1536
        }
    },
    {
        id: "hydration",
        icon: "02",
        title: "Hydration that feels easy",
        summary:
            "Wet food, fresh water stations and quiet bowl placement can help increase water intake.",
        note: "A sudden change in drinking deserves veterinary attention.",
        tone: "sky",
        image: {
            src: "/images/scottish-folds/black-fold-portrait.png",
            alt: "A black Scottish Fold resting indoors",
            width: 1920,
            height: 2218
        }
    },
    {
        id: "wet-dry",
        icon: "03",
        title: "Wet and dry can both fit",
        summary:
            "The useful question is whether the complete diet suits the individual cat—not which format wins online.",
        note: "Use a food labelled complete for the cat's life stage.",
        tone: "sage",
        image: {
            src: "/images/scottish-folds/red-fold-portrait.jpg",
            alt: "A red Scottish Fold looking toward the camera",
            width: 1006,
            height: 1633
        }
    },
    {
        id: "hairballs",
        icon: "04",
        title: "Hairball support",
        summary:
            "Regular brushing may reduce swallowed loose hair, but repeated vomiting still needs its own assessment.",
        note: "Hair in vomit does not automatically explain frequent vomiting.",
        tone: "peach",
        image: {
            src: "/images/scottish-folds/fold-kitten-ball.jpg",
            alt: "A Scottish Fold kitten playing at home",
            width: 1920,
            height: 1280
        }
    },
    {
        id: "transition",
        icon: "05",
        title: "Change food gradually",
        summary:
            "Unless a veterinarian advises otherwise, transition over several days and watch appetite, stool and vomiting.",
        note: "One change at a time makes reactions easier to interpret.",
        tone: "cream",
        image: {
            src: "/images/scottish-folds/fold-kitten-playing.jpg",
            alt: "A young Scottish Fold investigating a ball",
            width: 1920,
            height: 1280
        }
    },
    {
        id: "vet",
        icon: "06",
        title: "Know when food is not the fix",
        summary:
            "Ongoing vomiting, weight loss, appetite change, pain or dehydration need a veterinary work-up.",
        note: "A new bag of food cannot diagnose an underlying condition.",
        tone: "peach",
        image: {
            src: "/images/scottish-folds/silver-tabby-kitten.jpg",
            alt: "A silver tabby Scottish Fold kitten",
            width: 1422,
            height: 1829
        }
    }
]

export const feedingSchedule = [
    { time: "7:00", label: "Breakfast", detail: "Small measured meal" },
    { time: "11:00", label: "Snack", detail: "Wet or dry portion" },
    { time: "15:00", label: "Lunch", detail: "Small measured meal" },
    { time: "19:00", label: "Dinner", detail: "Main measured meal" },
    { time: "22:00", label: "Late snack", detail: "Only if it suits your cat" }
]
