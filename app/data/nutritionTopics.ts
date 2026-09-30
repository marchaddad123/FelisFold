import { catPhotoById } from "~/data/cats"

export type NutritionTopic = {
    id: string
    icon: string
    title: string
    summary: string
    note: string
    tone: "cream" | "sky" | "sage" | "peach"
    image: {
        src: string
        alt: string
        width: number
        height: number
        position?: string
    }
}

function communityCatImage(id: string, alt: string): NutritionTopic["image"] {
    const photo = catPhotoById(id)

    return {
        src: photo.photo,
        alt,
        width: photo.width,
        height: photo.height,
        ...(photo.objectPosition ? { position: photo.objectPosition } : {})
    }
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
        image: communityCatImage(
            "fold-on-chair",
            "A Scottish Fold resting on a chair by a window; an illustrative breed photo"
        )
    },
    {
        id: "wet-dry",
        icon: "03",
        title: "Wet and dry can both fit",
        summary:
            "The useful question is whether the complete diet suits the individual cat—not which format wins online.",
        note: "Use a food labelled complete for the cat's life stage.",
        tone: "sage",
        image: communityCatImage(
            "grey-fold-forward",
            "A grey Scottish Fold looking ahead; an illustrative breed photo"
        )
    },
    {
        id: "hairballs",
        icon: "04",
        title: "Hairball support",
        summary:
            "Regular brushing may reduce swallowed loose hair, but repeated vomiting still needs its own assessment.",
        note: "Hair in vomit does not automatically explain frequent vomiting.",
        tone: "peach",
        image: communityCatImage(
            "fluffy-brown-fold",
            "A fluffy brown Scottish Fold; an illustrative breed photo"
        )
    },
    {
        id: "transition",
        icon: "05",
        title: "Change food gradually",
        summary:
            "Unless a veterinarian advises otherwise, transition over several days and watch appetite, stool and vomiting.",
        note: "One change at a time makes reactions easier to interpret.",
        tone: "cream",
        image: communityCatImage(
            "fold-kitten-playing",
            "A young Scottish Fold playing at home; an illustrative breed photo"
        )
    },
    {
        id: "vet",
        icon: "06",
        title: "Know when food is not the fix",
        summary:
            "Ongoing vomiting, weight loss, appetite change, pain or dehydration need a veterinary work-up.",
        note: "A new bag of food cannot diagnose an underlying condition.",
        tone: "peach",
        image: communityCatImage(
            "white-fold",
            "A white Scottish Fold portrait; an illustrative breed photo"
        )
    }
]

export const feedingSchedule = [
    { time: "7:00", label: "Breakfast", detail: "Small measured meal" },
    { time: "11:00", label: "Snack", detail: "Wet or dry portion" },
    { time: "15:00", label: "Lunch", detail: "Small measured meal" },
    { time: "19:00", label: "Dinner", detail: "Main measured meal" },
    { time: "22:00", label: "Late snack", detail: "Only if it suits your cat" }
]
