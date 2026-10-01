<script setup lang="ts">
import { editorialLabels, translated as t } from "~/data/editorialHelpers"
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const sections = [
    {
        path: "/scottish-fold",
        heading: t(
            "More than folded ears",
            "أكثر من أذنين مطويتين",
            "Bien plus que des oreilles pliées",
            "不只是折耳"
        ),
        copy: t(
            "The Fold-associated TRPV4 variant changes cartilage and bone. Severity and timing vary; straight ears and mixed ancestry need careful interpretation. Start with the genetics, then learn what to watch.",
            "يغير متغير TRPV4 الغضاريف والعظام. تختلف الشدة والتوقيت، وتحتاج الأذن المستقيمة والنسب الهجين إلى تفسير حذر. ابدأ بالوراثة ثم تعلم ما تراقبه.",
            "Le variant TRPV4 touche cartilage et os. Gravité et calendrier varient ; oreilles droites et ascendance mixte demandent une interprétation prudente. Comprenez la génétique, puis les signes à surveiller.",
            "TRPV4 折耳变异影响软骨和骨骼。严重程度和出现时间各不相同；立耳与混种祖先需要谨慎解释。先了解遗传，再认识需要关注的变化。"
        )
    },
    {
        path: "/health",
        heading: t(
            "Notice changes in ordinary days",
            "لاحظ التغير في الأيام العادية",
            "Repérer les changements du quotidien",
            "关注平常生活的变化"
        ),
        copy: t(
            "Fold-related movement concerns include hesitant jumps, a stiff gait, a rigid or uncomfortable tail, altered paws and difficulty grooming or entering the litter box. Vomiting, appetite and weight changes are general cat symptoms, not automatically Fold disease. Changes deserve attention even when your cat still plays.",
            "تشمل مخاوف الحركة المرتبطة بالطي التردد في القفز والمشية المتيبسة والذيل القاسي أو المزعج وتغير الأقدام وصعوبة التنظيف أو دخول الرمل. القيء وتغير الشهية والوزن أعراض عامة وليست تلقائياً مرض الطي. انتبه للتغير حتى لو بقي قطك يلعب.",
            "Les préoccupations de mobilité Fold comprennent sauts hésitants, démarche raide, queue rigide ou inconfortable, pattes modifiées et difficulté à se toiletter ou entrer dans la litière. Vomissements, appétit et poids sont des symptômes félins généraux, pas automatiquement une maladie Fold. Surveillez les changements même si votre chat joue.",
            "折耳相关活动问题包括跳跃犹豫、步态僵硬、尾巴僵硬或不适、爪形改变以及梳毛或进入猫砂盆困难。呕吐、食欲和体重变化是一般猫症状，不自动等于折耳疾病。即使仍爱玩，也应关注变化。"
        )
    },
    {
        path: "/lotus",
        heading: t(
            "Lotus is why I started researching",
            "لوتس هو سبب بدء بحثي",
            "Lotus m'a donné envie de comprendre",
            "Lotus 让我开始查资料"
        ),
        copy: t(
            "I brought a tiny, scared cat home in June 2021. He ran and jumped as a kitten; around age two I noticed movement changes. Today, jumping down is harder, his tail is partly stiff and some days are easier than others. He still runs and plays with Kinder. These are my observations, not a diagnosis or everyone's future.",
            "أحضرت قطاً صغيراً خائفاً إلى المنزل في يونيو 2021. كان يركض ويقفز، ثم لاحظت تغير الحركة قرب السنتين. اليوم النزول أصعب وذيله متيبس جزئياً، وتختلف الأيام. ما زال يركض ويلعب مع كيندر. هذه ملاحظاتي وليست تشخيصاً أو مستقبل كل القطط.",
            "J'ai ramené un tout petit chat effrayé en juin 2021. Chaton, il courait et sautait ; vers deux ans, j'ai remarqué des changements. Aujourd'hui, descendre est plus difficile, sa queue est partiellement raide et les jours varient. Il joue encore avec Kinder. Ce sont mes observations, pas un diagnostic ni l'avenir de tous les chats.",
            "2021 年 6 月，我带回了一只小小的、害怕的猫。幼年他会跑会跳；约两岁时，我发现活动变化。现在往下跳更难，尾巴部分僵硬，状态每天不同。他仍与 Kinder 跑着玩。这是我的观察，不是诊断，也不是所有猫的未来。"
        )
    },
    {
        path: "/nutrition",
        heading: t(
            "Food that meets a cat's needs",
            "غذاء يلبي احتياجات القط",
            "Une alimentation adaptée aux besoins du chat",
            "满足猫咪需求的食物"
        ),
        copy: t(
            "Understand complete food, wet and dry feeding, portions, water, treats and safe food changes. Lotus's food observations sit beside the evidence. Homemade meals need a separate nutrition plan before becoming a complete diet.",
            "افهم الغذاء المتكامل والرطب والجاف والكميات والماء والمكافآت والتغيير الآمن. ملاحظات لوتس بجانب الأدلة. تحتاج الوجبات المنزلية إلى خطة تغذية قبل أن تصبح غذاءً متكاملاً.",
            "Comprenez aliment complet, humide et sec, portions, eau, friandises et transitions. Les observations de Lotus sont présentées à côté des données. Les repas maison exigent une formulation avant de devenir un régime complet.",
            "了解完整食物、干湿喂养、份量、饮水、零食和安全换粮。Lotus 的食物观察与证据并列。自制餐成为完整饮食之前需要单独的营养计划。"
        )
    },
    {
        path: "/mixes",
        heading: t(
            "A mix still deserves informed care",
            "الهجين يحتاج أيضاً إلى عناية واعية",
            "Un croisement mérite aussi des soins éclairés",
            "混种猫也需要有依据的护理"
        ),
        copy: t(
            "A different parent does not automatically remove the Fold-associated variant. Read documented crossbreed cases and Lotus's veterinarian-assessed Fold × Siamese story, with the limits of each clearly explained.",
            "الوالد من سلالة أخرى لا يلغي تلقائياً متغير الطي. اقرأ الحالات الموثقة وقصة لوتس كهجين مع سيامي بحسب تقييم الطبيب، مع حدود واضحة لكل منها.",
            "Un parent différent n'annule pas automatiquement le variant Fold. Lisez les cas documentés et le récit de Lotus, évalué comme Fold × Siamois, avec les limites de chacun.",
            "另一方父母不同，不会自动消除折耳变异。阅读已记录病例，以及兽医评估为折耳 × 暹罗的 Lotus 故事，并了解各自局限。"
        )
    },
    {
        path: "/health/when-to-call-a-vet",
        heading: t(
            "When to contact a vet",
            "متى تتصل بالطبيب البيطري",
            "Quand contacter un vétérinaire",
            "何时联系兽医"
        ),
        copy: t(
            "Emergency or same-day care, contact your vet soon, close observation with veterinary discussion, and routine prevention. Use the guide for next steps; symptoms and the whole cat matter more than a timer.",
            "رعاية طارئة أو في اليوم نفسه، اتصال قريب، مراقبة مع نقاش بيطري، ووقاية روتينية. استخدم الدليل للخطوة التالية؛ الأعراض والحالة الكاملة أهم من عداد الوقت.",
            "Urgence ou soins le jour même, contact rapide, observation attentive à discuter et prévention régulière. Le guide aide à choisir la suite ; les signes et l'ensemble de l'état comptent davantage qu'un délai.",
            "紧急或当日就医、尽快联系兽医、密切观察并讨论，以及常规预防。指南帮助决定下一步；症状和猫的整体情况比计时更重要。"
        )
    }
]
</script>
<template>
    <div class="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <section
            v-for="section in sections"
            :key="section.path"
            class="border-border grid gap-4 border-b py-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12"
        >
            <h2 class="font-editorial text-ink text-3xl leading-tight">
                {{ section.heading[languageCode] }}
            </h2>
            <div>
                <p class="text-muted leading-8">
                    {{ section.copy[languageCode] }}
                </p>
                <NuxtLink
                    :to="localizedPath(section.path)"
                    class="text-lilac mt-3 inline-flex min-h-11 items-center underline underline-offset-4"
                    >{{ section.heading[languageCode] }} →</NuxtLink
                >
            </div>
        </section>
        <NuxtLink
            :to="localizedPath('/sources')"
            class="text-lilac mt-5 inline-flex min-h-11 items-center underline underline-offset-4"
            >{{ editorialLabels.sources[languageCode] }} →</NuxtLink
        >
    </div>
</template>
