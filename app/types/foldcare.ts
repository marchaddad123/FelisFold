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
    photoSource: "Owner supplied" | "Pexels" | "Unsplash"
    photographer: string
    sourceUrl?: string
    license: string
    licenseUrl?: string
    objectPosition?: string
    isLotus: boolean
}

export type LotusMediaSelection =
    "use" | "keep-for-later" | "do-not-use-publicly"

export type LotusMediaAvailability = "ready" | "awaiting-original"

type LotusMediaBase = {
    id: string
    type: "photo" | "video"
    availability: LotusMediaAvailability
    selection: LotusMediaSelection
    posterPath?: string
    date?: string
    approximateDate?: boolean
    ageLabel?: LocalizedText
    title: LocalizedText
    caption: LocalizedText
    altText: LocalizedText
    storyContext?: LocalizedText
    healthContext?: LocalizedText
    peopleVisible: boolean
    ownerVisible?: boolean
    requiresPublicationApproval: boolean
    featured?: boolean
    mobileObjectPosition?: string
    desktopObjectPosition?: string
}

export type ReadyLotusMediaItem = LotusMediaBase & {
    availability: "ready"
    sourcePath: string
    width: number
    height: number
}

export type PendingLotusMediaItem = LotusMediaBase & {
    availability: "awaiting-original"
    sourcePath: null
    width: null
    height: null
    originalReference: string
}

export type LotusMediaItem = ReadyLotusMediaItem | PendingLotusMediaItem

export type LotusTimelineItem = {
    id: string
    dateLabel: LocalizedText
    title: LocalizedText
    copy: LocalizedText
    mediaId?: string
}

export type LotusExperienceContent = {
    eyebrow: LocalizedText
    title: LocalizedText
    copy: LocalizedText
    bullets?: Record<LanguageCode, string[]>
    note?: LocalizedText
    tone?: "plain" | "lilac" | "sage" | "peach" | "sky" | "warning"
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
