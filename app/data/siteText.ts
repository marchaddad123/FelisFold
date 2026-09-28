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
        nutrition: { en: "Food", ar: "الغذاء", fr: "Alimentation", zh: "饮食" },
        tracker: { en: "Tracker", ar: "المتابعة", fr: "Suivi", zh: "记录" },
        lotus: { en: "Lotus", ar: "لوتس", fr: "Lotus", zh: "Lotus" },
        sources: {
            en: "Sources",
            ar: "المصادر",
            fr: "Sources",
            zh: "资料来源"
        },
        about: { en: "About", ar: "عن الموقع", fr: "À propos", zh: "关于" },
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
    },
    home: {
        badge: {
            en: "A real cat. A real story. Clear veterinary evidence.",
            ar: "قط حقيقي. قصة حقيقية. معلومات بيطرية واضحة.",
            fr: "Un vrai chat. Une vraie histoire. Des données vétérinaires claires.",
            zh: "真实的猫，真实的故事，清楚的兽医证据。"
        },
        title: {
            en: "This is Lotus. He's why FoldCare exists.",
            ar: "هذا لوتس. هو السبب وراء إنشاء FoldCare.",
            fr: "Voici Lotus. C'est pour lui que FoldCare existe.",
            zh: "这是 Lotus。FoldCare 因他而诞生。"
        },
        intro: {
            en: "I started FoldCare after noticing changes in my own cat — how he moved, jumped, ate and behaved. His story leads into simple, evidence-led guides about Scottish Fold health, daily care and quality of life.",
            ar: "بدأت FoldCare بعدما لاحظت تغيّرات على قطّي: في حركته وقفزه وأكله وتصرفاته. قصة لوتس تقود إلى أدلة بسيطة ومدعومة بالمصادر عن صحة Scottish Fold والعناية اليومية وجودة الحياة.",
            fr: "J'ai créé FoldCare après avoir remarqué des changements chez mon propre chat : sa façon de bouger, sauter, manger et se comporter. Son histoire mène vers des guides simples et sourcés sur la santé du Scottish Fold, les soins quotidiens et la qualité de vie.",
            zh: "我在自己的猫身上注意到一些变化——走路、跳跃、进食和日常行为——于是开始做 FoldCare。Lotus 的故事会带你进入清楚、基于证据的苏格兰折耳猫健康、日常护理与生活质量指南。"
        },
        meetLotus: {
            en: "Meet Lotus",
            ar: "تعرّف على لوتس",
            fr: "Rencontrer Lotus",
            zh: "认识 Lotus"
        },
        exploreHealth: {
            en: "Explore health guides",
            ar: "استكشف أدلة الصحة",
            fr: "Explorer les guides santé",
            zh: "浏览健康指南"
        },
        storyHeading: {
            en: "Start with one cat. Learn what matters for many.",
            ar: "نبدأ بقط واحد، ثم نتعلم ما قد يهم الكثيرين.",
            fr: "Commencer par un chat. Comprendre ce qui peut aider beaucoup d'autres.",
            zh: "从一只猫开始，了解许多猫都可能需要知道的事。"
        },
        storyCopy: {
            en: "Lotus is not a diagnosis and his experience is not every Scottish Fold's experience. He is the real-life thread that keeps the science grounded and understandable.",
            ar: "لوتس ليس تشخيصاً، وتجربته لا تمثل كل قطط Scottish Fold. لكنه القصة الحقيقية التي تجعل المعلومات العلمية أقرب وأسهل للفهم.",
            fr: "Lotus n'est pas un diagnostic et son vécu ne représente pas tous les Scottish Folds. Il est le fil conducteur réel qui rend la science plus concrète et compréhensible.",
            zh: "Lotus 不是一种诊断，他的经历也不代表所有苏格兰折耳猫。他只是这条真实的主线，让科学信息更贴近日常生活。"
        }
    }
} as const

export function textForLanguage<T extends Record<LanguageCode, string>>(
    text: T,
    languageCode: LanguageCode
): string {
    return text[languageCode] ?? text.en
}
