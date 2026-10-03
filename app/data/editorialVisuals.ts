import { cats } from "~/data/cats"
import { lotusMediaById } from "~/data/lotusMedia"
import { translated as t } from "~/data/editorialHelpers"
import credits from "../../public/images/editorial/credits.json"
import type { LocalizedText } from "~/types/foldcare"

export type EditorialPhoto = {
    src: string
    width: number
    height: number
    alt: LocalizedText
    caption: LocalizedText
    position?: string | undefined
    credit?:
        | {
              creator: string
              sourceUrl: string
              license: string
              licenseUrl: string
              modified?: boolean
          }
        | undefined
}

export function lotusPhoto(id: string): EditorialPhoto {
    const photograph = lotusMediaById(id)
    return {
        src: photograph.sourcePath,
        width: photograph.width,
        height: photograph.height,
        alt: photograph.altText,
        caption: photograph.caption,
        position: photograph.desktopObjectPosition
    }
}

export function foldPhoto(id: string): EditorialPhoto {
    const photograph = cats.find((cat) => cat.id === id)
    if (!photograph) throw new Error(`Unknown Fold photograph: ${id}`)
    return {
        src: photograph.photo,
        width: photograph.width,
        height: photograph.height,
        alt: t(
            "A Scottish Fold in an illustrative breed photograph",
            "قط اسكتلندي مطوي الأذن في صورة توضيحية للسلالة",
            "Un Scottish Fold dans une photographie illustrative de la race",
            "苏格兰折耳猫品种示意照片"
        ),
        caption: t(
            "An illustrative Fold photo, not Lotus or a documented mix.",
            "صورة توضيحية لقط مطوي الأذن، وليست للوتس أو لهجين موثق.",
            "Photo illustrative d'un Fold, pas Lotus ni un croisement documenté.",
            "折耳猫示意照片，并非 Lotus 或有记录的混种猫。"
        ),
        position: photograph.objectPosition,
        credit:
            photograph.sourceUrl && photograph.licenseUrl
                ? {
                      creator: photograph.photographer,
                      sourceUrl: photograph.sourceUrl,
                      license: photograph.license,
                      licenseUrl: photograph.licenseUrl
                  }
                : undefined
    }
}

const foodCaptions: Record<string, LocalizedText> = {
    "wet-food": t(
        "Wet food: texture and moisture. Check the actual label for completeness.",
        "غذاء رطب: قوام ورطوبة. تحقق من العبوة للتأكد من اكتماله.",
        "Aliment humide : texture et eau. Vérifiez sa mention d'aliment complet.",
        "湿粮：质地与水分。请查看实际包装是否标明完整营养。"
    ),
    "dry-food": t(
        "Dry food: measure it as part of the daily allowance.",
        "غذاء جاف: قسه ضمن الكمية اليومية.",
        "Croquettes : mesurez-les dans la ration quotidienne.",
        "干粮：计入每日总份量。"
    ),
    "mixed-feeding": t(
        "A feeding setup with wet and dry food. This cat is not Lotus.",
        "وجبة تضم غذاءً رطباً وجافاً. هذا القط ليس لوتس.",
        "Un repas humide et sec. Ce chat n'est pas Lotus.",
        "干湿食物喂养场景。这只猫不是 Lotus。"
    ),
    water: t(
        "Fresh water, within easy reach. A fountain is one option.",
        "ماء نظيف يسهل الوصول إليه. النافورة خيار من الخيارات.",
        "De l'eau fraîche accessible. Une fontaine est une possibilité.",
        "方便取用的新鲜饮水。饮水机只是其中一种选择。"
    ),
    "kitchen-scale": t(
        "Record grams, rather than guessing a portion.",
        "سجل الغرامات بدلاً من تخمين الكمية.",
        "Consignez les grammes, plutôt qu'une portion estimée.",
        "记录克数，而不是猜测份量。"
    ),
    "raw-chicken": t(
        "An ingredient before cooking. This is not a recipe or advice to feed raw meat.",
        "مكون قبل الطهي. ليست هذه وصفة أو نصيحة لتقديم اللحم النيء.",
        "Un ingrédient avant cuisson. Ni recette, ni conseil de donner de la viande crue.",
        "烹饪前的食材。这不是食谱，也不是生肉喂养建议。"
    ),
    garlic: t(
        "Keep garlic and other alliums out of cat meals.",
        "أبعد الثوم وسائر الثوميات عن وجبات القطط.",
        "Écartez l'ail et les autres alliacées des repas du chat.",
        "猫咪食物应避开大蒜及其他葱属植物。"
    )
}

export function foodPhoto(id: string): EditorialPhoto {
    const photograph = credits.find((photo) => photo.id === id)
    const caption = foodCaptions[id]
    if (!photograph || !caption)
        throw new Error(`Unknown food photograph: ${id}`)
    return {
        src: photograph.localPath,
        width: photograph.width,
        height: photograph.height,
        alt: caption,
        caption,
        credit: {
            creator: photograph.creator,
            sourceUrl: photograph.sourceUrl,
            license: photograph.license,
            licenseUrl: photograph.licenseUrl,
            modified: true
        }
    }
}

export const visualLabels = {
    realLife: t(
        "Real life with Lotus",
        "الحياة الحقيقية مع لوتس",
        "La vraie vie avec Lotus",
        "与 Lotus 的真实生活"
    ),
    photoStory: t(
        "One cat. Many ordinary moments.",
        "قط واحد. لحظات يومية كثيرة.",
        "Un chat. Tant de moments ordinaires.",
        "一只猫，许多日常片段。"
    ),
    why: t(
        "Lotus — our why.",
        "لوتس — سبب البداية.",
        "Lotus — notre pourquoi.",
        "Lotus——我们的初衷。"
    ),
    then: t("Then", "حينها", "Avant", "从前"),
    now: t("Now", "الآن", "Aujourd'hui", "如今"),
    notes: t(
        "Lotus's notes",
        "ملاحظات لوتس",
        "Les notes de Lotus",
        "Lotus 的记录"
    ),
    guides: t(
        "Find the guide you need",
        "ابحث عن الدليل الذي تحتاجه",
        "Trouvez le guide qu'il vous faut",
        "找到你需要的指南"
    ),
    warning: t("Warning signs", "علامات الخطر", "Signes d'alerte", "警示迹象"),
    evidence: t(
        "Evidence, with its limits.",
        "أدلة وحدودها واضحة.",
        "Des données, et leurs limites.",
        "证据，也说明局限。"
    ),
    example: t(
        "Illustration only",
        "رسم توضيحي فقط",
        "Illustration uniquement",
        "仅为示意图"
    ),
    facts: t("What we know", "ما نعرفه", "Ce que nous savons", "我们知道什么"),
    unknown: t(
        "What we don't know",
        "ما لا نعرفه",
        "Ce que nous ignorons",
        "我们不知道什么"
    ),
    read: t(
        "Explore this guide",
        "استكشف هذا الدليل",
        "Explorer ce guide",
        "阅读指南"
    ),
    photoCredits: t(
        "Photography & credits",
        "الصور ونسبها",
        "Photographies et crédits",
        "照片与署名"
    ),
    trust: t(
        "Better questions. More informed care.",
        "أسئلة أفضل. عناية أكثر وعياً.",
        "De meilleures questions. Des soins plus éclairés.",
        "更好的问题，更有依据的护理。"
    )
}

export const photoModificationLabel = t(
    "Resized, converted to WebP and cropped for display.",
    "تغيير الحجم والتحويل إلى WebP والاقتصاص للعرض.",
    "Redimensionnée, convertie en WebP et recadrée pour l’affichage.",
    "已调整尺寸、转换为 WebP 并为展示裁剪。"
)
