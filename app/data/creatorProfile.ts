import type { LanguageCode, LocalizedText } from "~/types/foldcare"

export type CreatorSocialId =
    "instagram" | "tiktok" | "linkedin" | "github" | "portfolio" | "email"

export type CreatorSocialLink = {
    id: CreatorSocialId
    label: string
    url: string
    handle?: string
}

export type CreatorPhoto = {
    sourcePath: string
    width: number
    height: number
    altText: LocalizedText
    objectPosition: string
}

export type CreatorProfile = {
    name: string
    onlineName: string
    role: LocalizedText
    relationshipToLotus: LocalizedText
    location: LocalizedText
    jobTitle: LocalizedText
    background: LocalizedText
    shortBio: LocalizedText
    longBio: Record<LanguageCode, string[]>
    notVeterinarian: LocalizedText
    email: string
    instagram: { handle: string; url: string }
    tiktok: { handle: string; url: string }
    linkedin: { url: string }
    github: { url: string }
    portfolio: { url: string }
    creatorWithLotusPhoto: CreatorPhoto
}

export const creatorProfile: CreatorProfile = {
    name: "Mark Haddad",
    onlineName: "@iam.markos",
    role: {
        en: "Creator of FelisFold",
        ar: "مؤسس FelisFold",
        fr: "Créateur de FelisFold",
        zh: "FelisFold 创建者"
    },
    relationshipToLotus: {
        en: "Lotus's human",
        ar: "رفيق لوتس",
        fr: "L'humain de Lotus",
        zh: "Lotus 的家人"
    },
    location: {
        en: "Lebanon",
        ar: "لبنان",
        fr: "Liban",
        zh: "黎巴嫩"
    },
    jobTitle: {
        en: "Frontend / Software Engineer",
        ar: "مهندس برمجيات وواجهات أمامية",
        fr: "Ingénieur frontend / logiciel",
        zh: "前端 / 软件工程师"
    },
    background: {
        en: "Around six years building with Vue, Nuxt, TypeScript and Tailwind, with a focus on responsive UI, frontend architecture, performance and interactive applications.",
        ar: "نحو ست سنوات في بناء المنتجات باستخدام Vue وNuxt وTypeScript وTailwind، مع اهتمام بالواجهات المتجاوبة، وبنية الواجهات، والأداء، والتطبيقات التفاعلية.",
        fr: "Environ six ans à créer avec Vue, Nuxt, TypeScript et Tailwind, avec un intérêt particulier pour les interfaces adaptatives, l'architecture frontend, la performance et les applications interactives.",
        zh: "约六年 Vue、Nuxt、TypeScript 与 Tailwind 开发经验，专注响应式界面、前端架构、性能和交互式应用。"
    },
    shortBio: {
        en: "A software engineer from Lebanon, Lotus's human, and the person behind FelisFold. Mark combines one cat's lived experience with carefully sourced general information for Scottish Fold families.",
        ar: "مهندس برمجيات من لبنان، ورفيق لوتس، والشخص الذي يقف خلف FelisFold. يجمع مارك بين تجربة قط واحد الحقيقية ومعلومات عامة موثقة لعائلات Scottish Fold.",
        fr: "Ingénieur logiciel libanais, humain de Lotus et personne derrière FelisFold. Mark relie l'expérience vécue d'un chat à des informations générales soigneusement sourcées pour les familles de Scottish Folds.",
        zh: "Mark 是来自黎巴嫩的软件工程师、Lotus 的家人，也是 FelisFold 的创作者。他把一只猫的真实经历与经过认真查证的苏格兰折耳猫通用信息结合起来。"
    },
    longBio: {
        en: [
            "I am Mark Haddad, a frontend and software engineer from Lebanon. I have spent around six years building responsive interfaces and interactive applications with Vue, Nuxt, TypeScript and Tailwind, with a strong interest in clear architecture and performance.",
            "Lotus came into my life in June 2021, when he was about two and a half months old. As he grew, I began noticing changes in his movement, jumping, strength, eating, vomiting and behaviour. I wanted to understand those observations and bring better questions to his veterinarian.",
            "FelisFold grew from that process. It keeps Lotus's experience clearly labelled as one cat's story, then places it beside broader veterinary findings so other families can learn without confusing personal observation with diagnosis."
        ],
        ar: [
            "أنا مارك حداد، مهندس برمجيات وواجهات أمامية من لبنان. أمضيت نحو ست سنوات في بناء واجهات متجاوبة وتطبيقات تفاعلية باستخدام Vue وNuxt وTypeScript وTailwind، مع اهتمام واضح بالبنية السهلة والأداء.",
            "دخل لوتس حياتي في يونيو 2021 وكان عمره نحو شهرين ونصف. ومع نموه، بدأت ألاحظ تغيّرات في حركته وقفزه وقوته وأكله وقيئه وسلوكه. أردت فهم هذه الملاحظات وطرح أسئلة أفضل على طبيبه البيطري.",
            "نشأ FelisFold من هذه الرحلة. يعرض تجربة لوتس بوضوح كقصة قط واحد، ثم يضعها إلى جانب النتائج البيطرية العامة حتى تتعلم العائلات الأخرى من دون الخلط بين الملاحظة الشخصية والتشخيص."
        ],
        fr: [
            "Je m'appelle Mark Haddad, ingénieur frontend et logiciel originaire du Liban. Depuis environ six ans, je construis des interfaces adaptatives et des applications interactives avec Vue, Nuxt, TypeScript et Tailwind, avec un intérêt marqué pour une architecture claire et la performance.",
            "Lotus est entré dans ma vie en juin 2021, à environ deux mois et demi. En grandissant, j'ai commencé à remarquer des changements dans ses mouvements, ses sauts, sa force, son alimentation, ses vomissements et son comportement. Je voulais mieux comprendre ces observations et poser de meilleures questions à son vétérinaire.",
            "FelisFold est né de cette démarche. L'expérience de Lotus y reste clairement présentée comme l'histoire d'un seul chat, puis mise en regard de connaissances vétérinaires plus générales afin d'aider d'autres familles sans confondre observation personnelle et diagnostic."
        ],
        zh: [
            "我是 Mark Haddad，来自黎巴嫩的前端与软件工程师。大约六年来，我一直使用 Vue、Nuxt、TypeScript 和 Tailwind 构建响应式界面与交互式应用，并特别关注清晰的架构和性能。",
            "Lotus 在 2021 年 6 月来到我的生活中，当时大约两个半月大。随着他长大，我开始注意到他在活动、跳跃、力量、进食、呕吐和行为方面的变化。我想理解这些观察，也希望能向他的兽医提出更好的问题。",
            "FelisFold 就从这个过程里成长出来。这里会清楚标明 Lotus 的经历只是一只猫的故事，再把它与更广泛的兽医资料并列，让其他家庭学习时不会把个人观察误当成诊断。"
        ]
    },
    notVeterinarian: {
        en: "Mark is not a veterinarian. FelisFold provides educational information and does not replace an examination or advice from your cat's veterinary team.",
        ar: "مارك ليس طبيباً بيطرياً. يقدم FelisFold معلومات تثقيفية ولا يحل محل فحص قطك أو نصيحة الفريق البيطري.",
        fr: "Mark n'est pas vétérinaire. FelisFold propose des informations éducatives et ne remplace ni un examen ni les conseils de l'équipe vétérinaire de votre chat.",
        zh: "Mark 不是兽医。FelisFold 提供科普信息，不能替代猫咪兽医团队的检查或建议。"
    },
    email: "mark_haddad@outlook.com",
    instagram: {
        handle: "@iam.markos",
        url: "https://www.instagram.com/iam.markos/"
    },
    tiktok: {
        handle: "@iam.markos",
        url: "https://www.tiktok.com/@iam.markos"
    },
    linkedin: {
        url: "https://www.linkedin.com/in/marc-haddad-bb074b220/"
    },
    github: { url: "https://github.com/marchaddad123" },
    portfolio: { url: "https://mark-haddad-portfolio.vercel.app/" },
    creatorWithLotusPhoto: {
        sourcePath: "/images/lotus/lotus-with-creator-younger.jpg",
        width: 1152,
        height: 1536,
        altText: {
            en: "Mark Haddad holding Lotus when Lotus was younger",
            ar: "مارك حداد يحمل لوتس عندما كان أصغر",
            fr: "Mark Haddad tenant Lotus lorsqu'il était plus jeune",
            zh: "Mark Haddad 抱着幼年时的 Lotus"
        },
        objectPosition: "center 38%"
    }
}

export const creatorSocialLinks: CreatorSocialLink[] = [
    {
        id: "instagram",
        label: "Instagram",
        handle: creatorProfile.instagram.handle,
        url: creatorProfile.instagram.url
    },
    {
        id: "tiktok",
        label: "TikTok",
        handle: creatorProfile.tiktok.handle,
        url: creatorProfile.tiktok.url
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        url: creatorProfile.linkedin.url
    },
    {
        id: "github",
        label: "GitHub",
        url: creatorProfile.github.url
    },
    {
        id: "portfolio",
        label: "Portfolio",
        url: creatorProfile.portfolio.url
    },
    {
        id: "email",
        label: "Email",
        url: `mailto:${creatorProfile.email}`
    }
]

export function getAvailableCreatorSocialLinks(
    links: Array<CreatorSocialLink | null | undefined> = creatorSocialLinks
): CreatorSocialLink[] {
    return links.filter((link): link is CreatorSocialLink =>
        Boolean(link?.label && link.url)
    )
}

export function creatorPersonStructuredData(siteUrl: string) {
    return {
        "@type": "Person",
        "@id": `${siteUrl.replace(/\/$/, "")}/#creator`,
        name: creatorProfile.name,
        alternateName: creatorProfile.onlineName,
        url: creatorProfile.portfolio.url,
        email: creatorProfile.email,
        jobTitle: creatorProfile.jobTitle.en,
        homeLocation: {
            "@type": "Country",
            name: creatorProfile.location.en
        },
        sameAs: creatorSocialLinks
            .filter((link) => link.id !== "email")
            .map((link) => link.url)
    }
}
