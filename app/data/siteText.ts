import type { LanguageCode } from "~/types/foldcare"

export const siteText = {
    brandTagline: {
        en: "Scottish Fold health, made human",
        ar: "صحة القطط Scottish Fold بطريقة بسيطة",
        fr: "La santé du Scottish Fold, simplement",
        zh: "把苏格兰折耳猫健康讲明白"
    },
    navigation: {
        home: { en: "Home", ar: "الرئيسية", fr: "Accueil", zh: "首页" },
        health: { en: "Health", ar: "الصحة", fr: "Santé", zh: "健康" },
        care: {
            en: "Daily care",
            ar: "العناية اليومية",
            fr: "Soins quotidiens",
            zh: "日常护理"
        },
        nutrition: {
            en: "Food & nutrition",
            ar: "الغذاء",
            fr: "Alimentation",
            zh: "饮食"
        },
        lotus: { en: "Lotus", ar: "لوتس", fr: "Lotus", zh: "Lotus" },
        sources: {
            en: "Sources",
            ar: "المصادر",
            fr: "Sources",
            zh: "资料来源"
        },
        about: { en: "About", ar: "عن الموقع", fr: "À propos", zh: "关于" },
        contact: { en: "Contact", ar: "تواصل", fr: "Contact", zh: "联系" },
        search: { en: "Search", ar: "بحث", fr: "Recherche", zh: "搜索" },
        emergency: {
            en: "Vet red flags",
            ar: "علامات تستدعي الطبيب",
            fr: "Urgences vétérinaires",
            zh: "就医警示"
        }
    },
    common: {
        readMore: {
            en: "Read guide",
            ar: "اقرأ الدليل",
            fr: "Lire le guide",
            zh: "阅读指南"
        },
        learnMore: {
            en: "Learn more",
            ar: "اعرف أكثر",
            fr: "En savoir plus",
            zh: "了解更多"
        },
        reviewed: {
            en: "Reviewed",
            ar: "آخر مراجعة",
            fr: "Révisé",
            zh: "已审核"
        },
        evidence: {
            en: "Evidence-led",
            ar: "مدعوم بالمصادر",
            fr: "Basé sur les preuves",
            zh: "基于证据"
        },
        lotusExperience: {
            en: "Lotus's experience",
            ar: "تجربة لوتس",
            fr: "L'expérience de Lotus",
            zh: "Lotus 的经历"
        },
        medicalNote: {
            en: "Educational information only. A veterinarian who examines your cat should make medical decisions.",
            ar: "هذه المعلومات للتثقيف فقط. القرارات الطبية يجب أن يتخذها طبيب بيطري بعد فحص قطتك.",
            fr: "Informations éducatives uniquement. Les décisions médicales doivent être prises par un vétérinaire qui examine votre chat.",
            zh: "本网站仅用于科普。医疗决定应由实际检查过猫咪的兽医作出。"
        }
    }
} as const
export function textForLanguage<T extends Record<LanguageCode, string>>(
    text: T,
    languageCode: LanguageCode
): string {
    return text[languageCode]
}
