import type { LocalizedText, LotusTimelineItem } from "~/types/foldcare"

const text = (
    en: string,
    ar: string,
    fr: string,
    zh: string
): LocalizedText => ({ en, ar, fr, zh })

export const lotusTimeline: LotusTimelineItem[] = [
    {
        id: "home-june-2021",
        dateLabel: text("June 2021", "يونيو 2021", "Juin 2021", "2021 年 6 月"),
        title: text(
            "Lotus came home",
            "وصل لوتس إلى المنزل",
            "Lotus est arrivé à la maison",
            "Lotus 来到家里"
        ),
        copy: text(
            "He was about two and a half months old. This is the one firm date in the early timeline.",
            "كان عمره نحو شهرين ونصف. هذا هو التاريخ المؤكد الوحيد في بداية القصة.",
            "Il avait environ deux mois et demi. C’est la seule date certaine du début de son histoire.",
            "他大约两个半月大。这是早期时间线中唯一确定的日期。"
        ),
        mediaId: "lotus-with-creator-younger"
    },
    {
        id: "active-kittenhood",
        dateLabel: text("Kittenhood", "مرحلة الصغر", "Chaton", "幼猫时期"),
        title: text(
            "Movement looked easy",
            "بدت الحركة سهلة",
            "Bouger semblait facile",
            "活动看起来很轻松"
        ),
        copy: text(
            "I remember running, high jumps, chasing and exploring without obvious hesitation. That is an owner memory, not a joint assessment.",
            "أتذكر الركض والقفز عالياً والمطاردة والاستكشاف من دون تردد واضح. هذه ذاكرة مالك وليست تقييماً للمفاصل.",
            "Je me souviens de courses, de grands sauts et d’exploration sans hésitation visible. C’est un souvenir, pas une évaluation articulaire.",
            "我记得他会奔跑、跳得很高、追逐和探索，没有明显犹豫。这是主人的回忆，不是关节评估。"
        )
    },
    {
        id: "strength-change",
        dateLabel: text(
            "Around age 2",
            "نحو عمر سنتين",
            "Vers 2 ans",
            "约 2 岁"
        ),
        title: text(
            "Strength seemed to change",
            "بدا أن القوة بدأت تتغير",
            "Sa force semblait changer",
            "力量似乎开始变化"
        ),
        copy: text(
            "His movement and tolerance of handling began to look different to me. The timing is approximate.",
            "بدأت حركته وتقبله للمس يبدوان مختلفين لي. التوقيت تقريبي.",
            "Ses mouvements et sa tolérance au contact m’ont semblé différents. La période reste approximative.",
            "在我看来，他的活动和对触碰的接受程度开始发生变化。时间为大致估计。"
        )
    },
    {
        id: "remembered-imaging",
        dateLabel: text(
            "Around age 2",
            "نحو عمر سنتين",
            "Vers 2 ans",
            "约 2 岁"
        ),
        title: text(
            "A scan is remembered",
            "أتذكر إجراء صورة",
            "Un examen d’imagerie est évoqué",
            "记得做过一次影像检查"
        ),
        copy: text(
            "I remember veterinary imaging, but the type, date and report are not available. FelisFold does not turn that memory into a diagnosis.",
            "أتذكر إجراء تصوير بيطري، لكن النوع والتاريخ والتقرير غير متوفرة. لا يحوّل FelisFold هذه الذاكرة إلى تشخيص.",
            "Je me souviens d’un examen d’imagerie vétérinaire, mais ni le type, ni la date, ni le compte rendu ne sont disponibles.",
            "我记得做过兽医影像检查，但检查类型、日期和报告都没有记录。FelisFold 不会把这段回忆当成诊断。"
        )
    },
    {
        id: "neutering",
        dateLabel: text("Later", "لاحقاً", "Plus tard", "后来"),
        title: text(
            "He was neutered",
            "أُجريت له عملية التعقيم",
            "Il a été castré",
            "他接受了绝育"
        ),
        copy: text(
            "The exact date is not documented here. I did not notice a clear improvement in the movement concerns afterward.",
            "التاريخ الدقيق غير موثق هنا. لم ألاحظ تحسناً واضحاً في مشاكل الحركة بعدها.",
            "La date exacte n’est pas documentée ici. Je n’ai pas constaté d’amélioration nette de sa mobilité ensuite.",
            "具体日期没有记录。之后我没有观察到活动问题有明显改善。"
        )
    },
    {
        id: "kinder-arrives",
        dateLabel: text("Later", "لاحقاً", "Plus tard", "后来"),
        title: text(
            "Kinder joined the home",
            "انضمت كيندر إلى المنزل",
            "Kinder a rejoint le foyer",
            "Kinder 来到家里"
        ),
        copy: text(
            "Lotus seemed deeply affected by sharing his home and attention. A vet visit and more deliberate one-to-one attention followed.",
            "بدا لوتس متأثراً كثيراً بمشاركة منزله والاهتمام. تبع ذلك فحص بيطري واهتمام فردي أكبر.",
            "Lotus a semblé très affecté par le partage de son espace et de l’attention. Une consultation et davantage de temps en tête-à-tête ont suivi.",
            "Lotus 似乎很受共享空间和关注的影响。随后进行了兽医就诊，也增加了单独陪伴。"
        ),
        mediaId: "lotus-cuddling"
    },
    {
        id: "bond-with-kinder",
        dateLabel: text("With time", "مع الوقت", "Avec le temps", "慢慢地"),
        title: text(
            "They found their rhythm",
            "وجدا إيقاعهما معاً",
            "Ils ont trouvé leur rythme",
            "他们找到了相处方式"
        ),
        copy: text(
            "Lotus and Kinder became close. They rest together, play-fight and he still runs after her.",
            "أصبح لوتس وكيندر قريبين. يستريحان معاً ويتشاجران بلطف ولا يزال يركض خلفها.",
            "Lotus et Kinder se sont rapprochés. Ils se reposent ensemble, jouent à se battre et il court encore après elle.",
            "Lotus 和 Kinder 变得亲近，会一起休息、打闹，他现在仍会追着她跑。"
        ),
        mediaId: "lotus-family"
    },
    {
        id: "vomiting-begins",
        dateLabel: text(
            "Around age 3",
            "نحو عمر ثلاث سنوات",
            "Vers 3 ans",
            "约 3 岁"
        ),
        title: text(
            "Vomiting began",
            "بدأ القيء",
            "Les vomissements ont commencé",
            "开始出现呕吐"
        ),
        copy: text(
            "Recurrent episodes became another concern to track separately from movement. The timing is approximate and the cause is not established.",
            "أصبحت النوبات المتكررة مصدر قلق آخر يُتابع بشكل منفصل عن الحركة. التوقيت تقريبي والسبب غير مثبت.",
            "Les épisodes récurrents sont devenus un autre sujet à suivre séparément de la mobilité. La période est approximative et la cause n’est pas établie.",
            "反复发作成为另一个需要与活动问题分开记录的情况。时间为大致估计，原因尚未确定。"
        ),
        mediaId: "lotus-feeding"
    },
    {
        id: "feeding-changes",
        dateLabel: text(
            "More recently",
            "في وقت أقرب",
            "Plus récemment",
            "近来"
        ),
        title: text(
            "Meals became more deliberate",
            "أصبحت الوجبات أكثر تنظيماً",
            "Les repas sont devenus plus réfléchis",
            "进食安排更加谨慎"
        ),
        copy: text(
            "Smaller, more frequent meals and simpler food combinations appeared to help. That observation does not identify the cause.",
            "بدا أن الوجبات الأصغر والأكثر تكراراً وخلطات الطعام الأبسط تساعد. هذه الملاحظة لا تحدد السبب.",
            "Des repas plus petits et fréquents, avec des mélanges plus simples, ont semblé aider. Cette observation n’identifie pas la cause.",
            "少量多餐和更简单的食物组合似乎有所帮助，但这一观察不能说明原因。"
        )
    },
    {
        id: "today",
        dateLabel: text("Today", "اليوم", "Aujourd’hui", "现在"),
        title: text(
            "Good days and hard days",
            "أيام جيدة وأيام صعبة",
            "De bons jours et des jours difficiles",
            "有好日子，也有难熬的日子"
        ),
        copy: text(
            "He weighs about 3.2–3.3 kg. Movement varies, jumping down is harder and his tail seems partly stiff—yet he still runs, plays and grooms.",
            "يزن نحو 3.2–3.3 كغ. تتغير حركته ويصعب عليه القفز إلى الأسفل ويبدو ذيله متيبساً جزئياً، لكنه لا يزال يركض ويلعب وينظف نفسه.",
            "Il pèse environ 3,2–3,3 kg. Sa mobilité varie, descendre d’un saut est plus difficile et sa queue semble partiellement raide, mais il court, joue et se toilette encore.",
            "他现在约重 3.2–3.3 公斤。活动状态有变化，向下跳更困难，尾巴似乎部分僵硬，但他仍会奔跑、玩耍和梳理自己。"
        ),
        mediaId: "lotus-portrait"
    }
]
