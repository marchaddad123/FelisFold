import type { Ref } from "vue"
import { healthTopics } from "~/data/healthTopics"
import { breedGuide, startHereGuide } from "~/data/breedGuides"
import {
    nutritionGuide,
    homemadeGuide,
    foodsToAvoidGuide,
    kitchenGuide
} from "~/data/foodGuides"
import { mixProfiles, mixesGuide } from "~/data/mixGuides"
import { careGuide, earlyLotusLessons } from "~/data/ownerGuides"
import { editorialLabels } from "~/data/editorialHelpers"
import { lotusPageText } from "~/data/lotusStory"

export type SiteSearchResult = {
    id: string
    kind: string
    title: string
    summary: string
    path: string
    searchableText: string
}
const ownerKeywords: Record<string, string> = {
    "pain-and-mobility":
        "jump jumping stairs pet steps ramp cat won't jump cat wont jump limping joints arthritis stiff tail قفز درج عرج مفاصل ذيل sauter saut escalier rampe boiterie queue raide 跳跃 台阶 坡道 关节 尾巴僵硬",
    osteochondrodysplasia:
        "stiff tail fold genetics cartilage bone trpv4 ذيل متيبس وراثة غضروف queue raide génétique os cartilage 尾巴僵硬 遗传 骨骼 软骨",
    vomiting:
        "vomiting food throw up sick regurgitation undigested stomach hairball قيء تقيؤ طعام معدة vomit vomissements aliments régurgitation estomac 呕吐 吐食物 未消化 反流 毛球 胃",
    "when-to-call-a-vet":
        "when vet call doctor urgent emergency breathing pee urine متى طبيب طوارئ تنفس تبول quand vétérinaire urgence respirer urine 何时 兽医 就医 急诊 呼吸 排尿",
    nutrition:
        "what food feed wet dry meals hydration treats ما طعام غذاء تغذية quoi nourriture nourrir alimentation repas 喂什么 猫粮 饮食 湿粮 干粮",
    care: "pet stairs ramps steps litter brush vet visit درج منحدر تمشيط visite vétérinaire escalier brosser 宠物台阶 坡道 梳毛 就诊",
    "scottish-fold-siamese":
        "fold siamese mix lotus هجين سيامي siamois croisé 暹罗 混种",
    homemade:
        "cook chicken recipe complete taurine calcium phosphorus nutrient طبخ دجاج وصفة تورين poulet recette taurine calcium 自制 鸡肉 食谱 牛磺酸 钙 磷"
}
const ignoredWords = new Set(
    "i my a an the is are cat cats fold scottish s wont won't keeps just got have has with for to of should can do it me and mon ma le la les de des un une du est je que ne pas il avec et قط قطي قطتي القط ما أنا هل في من و 猫 我的".split(
        " "
    )
)
function normalizeSearch(value: string) {
    return value
        .normalize("NFKD")
        .replace(/\p{M}/gu, "")
        .toLocaleLowerCase()
        .replace(/[’']/g, "")
        .replace(/[^\p{L}\p{N}\s]/gu, " ")
}

export function useSiteSearch(searchQuery: Ref<string>) {
    const { languageCode } = useCurrentLanguage()
    const allSearchResults = computed<SiteSearchResult[]>(() => {
        const guides = [
            ...healthTopics.map((guide) => ({
                guide,
                path: `/health/${guide.slug}`,
                kind: editorialLabels.healthCare
            })),
            ...mixProfiles.map((guide) => ({
                guide,
                path: `/mixes/${guide.slug}`,
                kind: editorialLabels.mixes
            })),
            ...[
                { guide: breedGuide, path: "/scottish-fold" },
                { guide: startHereGuide, path: "/start-here" },
                { guide: careGuide, path: "/care" },
                { guide: nutritionGuide, path: "/nutrition" },
                { guide: homemadeGuide, path: "/nutrition/homemade" },
                { guide: foodsToAvoidGuide, path: "/nutrition/foods-to-avoid" },
                { guide: kitchenGuide, path: "/nutrition/lotus-kitchen" },
                { guide: mixesGuide, path: "/mixes" },
                { guide: earlyLotusLessons, path: "/lotus/what-i-wish-i-knew" }
            ].map((item) => ({ ...item, kind: item.guide.eyebrow }))
        ]
        const results = guides.map(({ guide, path, kind }) => ({
            id: guide.slug,
            kind: kind[languageCode.value],
            title: guide.title[languageCode.value],
            summary: guide.summary[languageCode.value],
            path,
            searchableText: normalizeSearch(
                [
                    guide.title[languageCode.value],
                    guide.summary[languageCode.value],
                    ...guide.sections.flatMap((section) => [
                        section.heading[languageCode.value],
                        ...section.paragraphs[languageCode.value],
                        ...(section.bullets?.[languageCode.value] ?? [])
                    ]),
                    ownerKeywords[guide.slug] ?? ""
                ].join(" ")
            )
        }))
        const lotusText = lotusPageText[languageCode.value]
        return [
            ...results,
            {
                id: "lotus-story",
                kind: editorialLabels.owner[languageCode.value],
                title: lotusText.heroTitle,
                summary: lotusText.heroCopy,
                path: "/lotus",
                searchableText: normalizeSearch(
                    `${lotusText.heroTitle} ${lotusText.heroCopy} Lotus لوتس pet shop adoption story histoire 故事`
                )
            }
        ]
    })
    const matchingResults = computed(() => {
        const words = normalizeSearch(searchQuery.value)
            .trim()
            .split(/\s+/)
            .filter(Boolean)
        if (!words.length) return allSearchResults.value
        const meaningfulWords = words.filter((word) => !ignoredWords.has(word))
        const searchWords = meaningfulWords.length ? meaningfulWords : words
        return allSearchResults.value.filter((result) =>
            searchWords.every((word) => result.searchableText.includes(word))
        )
    })
    return { matchingResults }
}
