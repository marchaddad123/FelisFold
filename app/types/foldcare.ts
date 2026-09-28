export type LanguageCode = "en" | "ar" | "fr" | "zh"

export type ThemeName = "light" | "dark"

export type LocalizedText = Record<LanguageCode, string>

export type HealthSource = {
    name: string
    organization: string
    url: string
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
}

export type TrackerEntryType =
    "meal" | "vomit" | "mobility" | "medicine" | "weight" | "note"

export type TrackerEntry = {
    id: string
    type: TrackerEntryType
    dateTime: string
    note: string
    amount?: number
    unit?: string
    vomitHadHair?: boolean
    vomitHadBlood?: boolean
    mobilityScore?: number
}
