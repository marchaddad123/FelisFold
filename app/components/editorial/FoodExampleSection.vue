<script setup lang="ts">
import { translated as t } from "~/data/editorialHelpers"
const { languageCode } = useCurrentLanguage()
const labels = {
    title: t(
        "Recognizable foods. Better label questions.",
        "أغذية معروفة. أسئلة أفضل عن العبوة.",
        "Des aliments connus. Mieux lire les étiquettes.",
        "熟悉的食物，更好的标签问题。"
    ),
    copy: t(
        "Informational examples, not rankings or endorsements. Formulas and labels vary by country. Manufacturer descriptions identify products; they do not establish medical benefits.",
        "أمثلة للمعلومات وليست ترتيباً أو تأييداً. تختلف التركيبات والعبوات حسب البلد. وصف المصنع يحدد المنتج ولا يثبت فوائد طبية.",
        "Exemples informatifs, sans classement ni recommandation. Formules et étiquettes varient selon le pays. Les descriptions identifient le produit, sans prouver un bénéfice médical.",
        "信息示例，不是排名或推荐。配方及标签因国家而异。厂家描述用于识别产品，不证明医疗益处。"
    ),
    history: t(
        "Lotus has eaten this brand",
        "لوتس أكل من هذه العلامة",
        "Lotus a mangé cette marque",
        "Lotus 吃过这个品牌"
    ),
    source: t(
        "Product information source",
        "مصدر معلومات المنتج",
        "Source des informations produit",
        "产品信息来源"
    )
}
const examples = [
    {
        brand: "Equilibrio",
        name: "Adult Cats",
        copy: t(
            "Total Alimentos · dry · adult cats · complete food. This is a verified product example; Lotus's exact historical Equilibrio formula is not confirmed.",
            "Total Alimentos · جاف · للقطط البالغة · غذاء متكامل. هذا مثال منتج موثق؛ تركيبة Equilibrio التاريخية الخاصة بلوتس غير مؤكدة.",
            "Total Alimentos · sec · chats adultes · aliment complet. Exemple vérifié ; la formule Equilibrio historique exacte de Lotus n'est pas confirmée.",
            "Total Alimentos · 干粮 · 成猫 · 完整食物。这是已核实的产品示例；Lotus 当年的具体 Equilibrio 配方尚未确认。"
        ),
        source: "https://www.eu.equilibrio-petfood.com/wp-content/uploads/2019/11/cat-adult.pdf",
        history: true
    },
    {
        brand: "Royal Canin",
        name: "Instinctive Loaf",
        copy: t(
            "Royal Canin · wet loaf · adult cats · complete feed on the UK product page. An everyday food example, not a prescribed diet or a claim that Lotus has eaten it.",
            "Royal Canin · رطب · للقطط البالغة · غذاء متكامل بحسب الصفحة البريطانية. مثال غذاء يومي وليس حمية موصوفة أو ادعاء بأن لوتس أكله.",
            "Royal Canin · pâtée humide · chats adultes · aliment complet sur la page britannique. Exemple courant, ni régime prescrit ni aliment attribué à Lotus.",
            "Royal Canin · 湿粮肉糕 · 成猫 · 英国产品页面标为完整食物。日常食物示例，不是处方饮食，也不表示 Lotus 吃过。"
        ),
        source: "https://pro.royalcanin.co.uk/products/cat/instinctive-loaf/",
        history: false
    },
    {
        brand: "Eminent",
        name: null,
        copy: t(
            "Mark remembers a stomach-focused food. The exact bag, formula, life stage and adequacy statement are unknown. No substitute formula or packaging is shown.",
            "يتذكر مارك غذاءً للمعدة. العبوة والتركيبة والعمر المناسب وبيان الاكتمال غير معروفة. لا نعرض تركيبة أو عبوة بديلة.",
            "Mark se souvient d'un aliment pour l'estomac. Sac, formule, âge et mention d'adéquation restent inconnus. Aucune formule ni image de remplacement.",
            "Mark 记得一种关注肠胃的食物。具体包装、配方、生命阶段与营养声明未知。不展示替代配方或包装。"
        ),
        source: null,
        history: false
    }
]
</script>
<template>
    <section class="bg-peach-soft paper-texture px-5 py-12 sm:px-8">
        <div class="mx-auto max-w-[80rem]">
            <div class="grid gap-5 lg:grid-cols-2">
                <h2 class="text-ink text-3xl sm:text-4xl">
                    {{ labels.title[languageCode] }}
                </h2>
                <p class="text-muted leading-7">
                    {{ labels.copy[languageCode] }}
                </p>
            </div>
            <div class="mt-8 grid gap-5 md:grid-cols-3">
                <article
                    v-for="example in examples"
                    :key="example.brand"
                    class="bg-paper border-border border-t-4 p-6"
                >
                    <p class="text-peach text-2xl font-semibold">
                        <bdi>{{ example.brand }}</bdi>
                    </p>
                    <h3 v-if="example.name" class="text-ink mt-2 text-xl">
                        <bdi>{{ example.name }}</bdi>
                    </h3>
                    <p
                        v-if="example.history"
                        class="text-sage mt-3 text-sm font-semibold"
                    >
                        {{ labels.history[languageCode] }}
                    </p>
                    <p class="text-muted mt-4 text-sm leading-7">
                        {{ example.copy[languageCode] }}
                    </p>
                    <a
                        v-if="example.source"
                        :href="example.source"
                        target="_blank"
                        rel="noreferrer"
                        class="text-peach mt-3 inline-flex min-h-11 items-center text-sm underline underline-offset-4"
                        >{{ labels.source[languageCode] }} ↗</a
                    >
                </article>
            </div>
        </div>
    </section>
</template>
