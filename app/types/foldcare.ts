export type LanguageCode = "en" | "ar" | "fr" | "zh"

export type ThemeName = "light" | "dark"

export type LocalizedText = Record<LanguageCode, string>

export type HealthSource = {
    name: string
    organization: string
    url: string
    type?: string
    year?: number | string
}

export type HealthSection = {
    heading: LocalizedText
    paragraphs: Record<LanguageCode, string[]>
    bullets?: Record<LanguageCode, string[]>
    tone?: "plain" | "lilac" | "sage" | "peach" | "sky" | "warning"
}

export type HealthTopic = {
    slug: string
    icon: string
    title: LocalizedText
    summary: LocalizedText
    eyebrow: LocalizedText
    tag?: LocalizedText
    sections: HealthSection[]
    sources: HealthSource[]
    reviewedOn: string
    image?: {
        src: string
        alt: string
        width: number
        height: number
        position?: string
    }
}

export type CatProfile = {
    id: string
    name: string
    photo: string
    width: number
    height: number
    caption: string
    attribution: string
    source: "owner-supplied" | "licensed-public" | "demonstration"
    sourceUrl?: string
    license?: string
    licenseUrl?: string
    isLotus: boolean
}

export type TrackerEntryType =
    | "meal"
    | "water"
    | "vomit"
    | "litter"
    | "appetite"
    | "mood"
    | "pain"
    | "mobility"
    | "grooming"
    | "medicine"
    | "weight"
    | "note"

export type TrackerEntry = {
    id: string
    type: TrackerEntryType
    dateTime: string
    note: string
    amount?: number
    unit?: string
    foodName?: string
    vomitHadHair?: boolean
    vomitHadBlood?: boolean
    stoolQuality?: "hard" | "normal" | "soft" | "diarrhea"
    appetiteScore?: number
    moodScore?: number
    painScore?: number
    mobilityScore?: number
    groomingScore?: number
    medicationName?: string
    medicationTaken?: boolean
}
