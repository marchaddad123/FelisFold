import type { HealthSection, LocalizedText } from "~/types/foldcare"

export function translated(
    en: string,
    ar: string,
    fr: string,
    zh: string
): LocalizedText {
    return { en, ar, fr, zh }
}

export function paragraphSection(
    heading: LocalizedText,
    copy: LocalizedText,
    tone: HealthSection["tone"] = "plain"
): HealthSection {
    return {
        heading,
        paragraphs: {
            en: [copy.en],
            ar: [copy.ar],
            fr: [copy.fr],
            zh: [copy.zh]
        },
        tone
    }
}

export const editorialLabels = {
    evidence: translated(
        "Global veterinary evidence",
        "الأدلة البيطرية العامة",
        "Données vétérinaires générales",
        "通用兽医证据"
    ),
    owner: translated(
        "Mark's observations — one cat's experience",
        "ملاحظات مارك — تجربة قط واحد",
        "Observations de Mark — le vécu d'un seul chat",
        "Mark 的观察——一只猫的经历"
    ),
    contents: translated(
        "In this guide",
        "في هذا الدليل",
        "Dans ce guide",
        "本指南内容"
    ),
    related: translated(
        "Keep reading",
        "تابع القراءة",
        "Poursuivre la lecture",
        "继续阅读"
    ),
    quickStart: translated(
        "Start with your question",
        "ابدأ بسؤالك",
        "Commencez par votre question",
        "从你的问题开始"
    ),
    healthCare: translated(
        "Health & care",
        "الصحة والعناية",
        "Santé et soins",
        "健康与护理"
    ),
    breed: translated(
        "Scottish Fold",
        "القط الاسكتلندي مطوي الأذن",
        "Scottish Fold",
        "苏格兰折耳猫"
    ),
    mixes: translated(
        "Fold mixes",
        "القطط الهجينة",
        "Croisements Fold",
        "折耳混种猫"
    ),
    sources: translated("Sources", "المصادر", "Sources", "资料来源"),
    about: translated("About", "عن الموقع", "À propos", "关于"),
    search: translated(
        "Find an answer",
        "ابحث عن إجابة",
        "Trouver une réponse",
        "查找答案"
    ),
    searchCopy: translated(
        "Search by what you notice: stiff tail, vomiting food, pet stairs, or when to call a vet.",
        "ابحث عما تلاحظه: ذيل متيبس، قيء الطعام، درج للحيوانات، أو متى تتصل بالطبيب.",
        "Recherchez ce que vous observez : queue raide, aliments vomis, marches ou consultation vétérinaire.",
        "按观察搜索：尾巴僵硬、吐食物、宠物台阶或何时联系兽医。"
    ),
    results: translated("results", "نتائج", "résultats", "条结果"),
    noResults: translated(
        "No matching guide. Try a shorter question or another word.",
        "لا يوجد دليل مطابق. جرّب سؤالاً أقصر أو كلمة أخرى.",
        "Aucun guide correspondant. Essayez une question plus courte ou un autre mot.",
        "没有匹配的指南。试试更短的问题或另一个词。"
    ),
    openMenu: translated(
        "Open menu",
        "افتح القائمة",
        "Ouvrir le menu",
        "打开菜单"
    ),
    closeMenu: translated(
        "Close menu",
        "أغلق القائمة",
        "Fermer le menu",
        "关闭菜单"
    ),
    navigation: translated(
        "Main navigation",
        "التنقل الرئيسي",
        "Navigation principale",
        "主导航"
    ),
    skip: translated(
        "Skip to content",
        "انتقل إلى المحتوى",
        "Aller au contenu",
        "跳到正文"
    ),
    updated: translated(
        "Editorial review",
        "مراجعة تحريرية",
        "Révision éditoriale",
        "编辑复核"
    ),
    sourceType: translated(
        "Source type",
        "نوع المصدر",
        "Type de source",
        "来源类型"
    ),
    publication: translated(
        "Publication",
        "الجهة الناشرة",
        "Publication",
        "出版机构"
    ),
    year: translated("Year", "السنة", "Année", "年份"),
    online: translated(
        "Online reference; accessed October 2026",
        "مرجع إلكتروني؛ تمت مراجعته في أكتوبر 2026",
        "Référence en ligne ; consultée en octobre 2026",
        "在线资料；2026 年 10 月查阅"
    ),
    veterinaryReference: translated(
        "Veterinary reference",
        "مرجع بيطري",
        "Référence vétérinaire",
        "兽医参考资料"
    ),
    researchPaper: translated(
        "Research paper",
        "بحث علمي",
        "Article scientifique",
        "研究论文"
    ),
    ownerRecord: translated(
        "Owner record, not a medical study",
        "سجل المالك، وليس دراسة طبية",
        "Récit du propriétaire, pas une étude médicale",
        "主人记录，不是医学研究"
    ),
    photoAlt: translated(
        "Lotus at home, the cat whose story inspired FelisFold",
        "لوتس في المنزل، القط الذي ألهمت قصته FelisFold",
        "Lotus chez lui, le chat dont l'histoire a inspiré FelisFold",
        "在家的 Lotus，他的故事启发了 FelisFold"
    ),
    lotus: translated(
        "Meet Lotus",
        "تعرّف على لوتس",
        "Rencontrer Lotus",
        "认识 Lotus"
    ),
    kitchen: translated(
        "Lotus's kitchen",
        "مطبخ لوتس",
        "La cuisine de Lotus",
        "Lotus 的厨房"
    ),
    lessons: translated(
        "What I wish I knew when Lotus was 3 months old",
        "ما أتمنى لو عرفته عندما كان لوتس بعمر 3 أشهر",
        "Ce que j'aurais aimé savoir quand Lotus avait 3 mois",
        "Lotus 三个月大时，我希望自己早已知道的事"
    ),
    start: translated(
        "I just got a Scottish Fold — start here",
        "لدي قط اسكتلندي مطوي الأذن جديد — ابدأ هنا",
        "Je viens d'accueillir un Scottish Fold — par où commencer",
        "刚接回苏格兰折耳猫——从这里开始"
    )
}
