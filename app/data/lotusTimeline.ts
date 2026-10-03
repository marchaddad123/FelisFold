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

// Expanded owner memories use only details already documented in lotusStory.ts.
export const lotusTimelineDetails: Record<string, LocalizedText> = {
    "home-june-2021": text(
        "It started with an unplanned stop at a pet shop. While other cats were meowing, Lotus was quiet and frightened in his own cage. My then-girlfriend noticed him first; we took him home that same day.",
        "بدأت القصة بدخول غير مخطط إلى متجر للحيوانات. كانت القطط الأخرى تموء، بينما كان لوتس هادئاً وخائفاً في قفصه. لاحظته صديقتي آنذاك أولاً، وأخذناه إلى المنزل في اليوم نفسه.",
        "Tout a commencé par un arrêt imprévu dans une animalerie. Les autres chats miaulaient ; Lotus était silencieux et effrayé dans sa cage. Ma compagne de l’époque l’a remarqué la première. Nous l’avons ramené ce jour-là.",
        "故事始于一次临时决定的宠物店探访。其他猫在叫，Lotus 却安静、害怕地待在自己的笼子里。当时的女友先注意到他，我们当天就把他带回了家。"
    ),
    "active-kittenhood": text(
        "He chased things, explored and jumped high. I also remember him being more comfortable in my arms. Those memories matter to our story, but old photos cannot tell us whether his joints were medically normal.",
        "كان يطارد الأشياء ويستكشف ويقفز عالياً. وأتذكر أيضاً أنه كان أكثر ارتياحاً بين ذراعيّ. هذه الذكريات مهمة لقصتنا، لكن الصور القديمة لا تثبت أن مفاصله كانت سليمة طبياً.",
        "Il poursuivait des objets, explorait et sautait haut. Je me souviens aussi qu’il était plus à l’aise dans mes bras. Ces souvenirs comptent, mais les anciennes photos ne permettent pas d’évaluer la santé de ses articulations.",
        "他会追逐东西、探索，也能跳得很高。我还记得那时抱着他更容易。这些回忆是故事的一部分，但旧照片不能证明他的关节在医学上正常。"
    ),
    "strength-change": text(
        "The changes became part of ordinary moments: pausing near an edge before jumping, finding jumping down harder, and allowing less handling of his paws and legs. I noticed them at home; they are observations rather than a pain score.",
        "ظهرت التغيّرات في مواقف يومية: التوقف قرب الحافة قبل القفز، وصعوبة أكبر في النزول، وتقبّل أقل للمس الكفوف والأرجل. لاحظتها في المنزل؛ إنها ملاحظات وليست تقييماً للألم.",
        "Les changements se voyaient dans les moments ordinaires : hésiter au bord avant un saut, avoir plus de mal à descendre, moins accepter qu’on touche ses pattes. Ce sont mes observations à la maison, pas un score de douleur.",
        "变化出现在日常小事中：起跳前在边缘停顿、往下跳更困难，也更不愿让人碰爪子和腿。这些是我在家里的观察，不是疼痛评分。"
    ),
    "remembered-imaging": text(
        "I remember the vet showing me images where his limbs looked unusually shaped, almost zig-zagged. Without the original report, I cannot verify what the images showed or turn that recollection into a confirmed diagnosis.",
        "أتذكر أن الطبيب أظهر لي صوراً بدت فيها أطرافه غير معتادة، كأنها متعرجة. من دون التقرير الأصلي لا أستطيع تأكيد ما أظهرته الصور أو تحويل الذكرى إلى تشخيص مؤكّد.",
        "Je me souviens d’images montrées par le vétérinaire où ses membres semblaient inhabituels, presque en zigzag. Sans le compte rendu original, je ne peux vérifier leur contenu ni en tirer un diagnostic confirmé.",
        "我记得兽医给我看过影像，四肢形状似乎不正常，近似弯折。没有原始报告，我无法确认影像显示了什么，也不能把回忆当成确诊。"
    ),
    neutering: text(
        "A veterinarian had suggested neutering around age two and feeding the cats separately. We followed the neutering advice. The date remains unknown, and the absence of an obvious change to me does not tell us what caused his movement difficulties.",
        "اقترح طبيب بيطري التعقيم نحو عمر سنتين وإطعام القطط منفصلة. اتبعنا نصيحة التعقيم. يبقى التاريخ غير معروف، وعدم ملاحظتي تغيّراً واضحاً لا يحدد سبب صعوبة الحركة.",
        "Un vétérinaire avait conseillé la castration vers deux ans et des repas séparés. Nous avons suivi le conseil de castration. La date reste inconnue ; l’absence de changement évident à mes yeux n’explique pas ses difficultés à bouger.",
        "兽医曾建议在两岁左右绝育，并单独喂食。我们遵循了绝育建议。日期仍不清楚；我没有看到明显变化，并不能说明活动困难的原因。"
    ),
    "kinder-arrives": text(
        "His physical problems had already begun before Kinder arrived. I deliberately gave Lotus more one-to-one attention and took him to the vet. I do not remember the exact treatment, so that part of the record stays open.",
        "كانت مشاكله الجسدية قد بدأت قبل وصول كيندر. حرصت على منحه اهتماماً فردياً أكبر وأخذته إلى الطبيب. لا أتذكر العلاج الدقيق، لذلك يبقى هذا الجزء من السجل مفتوحاً.",
        "Ses difficultés physiques avaient commencé avant l’arrivée de Kinder. J’ai donné à Lotus davantage de temps seul avec moi et je l’ai emmené chez le vétérinaire. Je ne me souviens pas du traitement exact.",
        "Kinder 到来前，他的身体问题就已经开始了。我特意增加了单独陪伴，也带他看了兽医。我不记得具体治疗，所以这部分记录仍留空。"
    ),
    "bond-with-kinder": text(
        "Sharing a home became something gentler. Their shared naps and playful chases are part of his life too. A playful moment is real, but it does not prove that nothing hurts.",
        "أصبح تقاسم المنزل أكثر هدوءاً. القيلولة المشتركة والمطاردة أثناء اللعب جزء من حياته أيضاً. لحظة اللعب حقيقية، لكنها لا تثبت غياب الألم.",
        "Partager la maison est devenu plus doux. Les siestes ensemble et les poursuites font aussi partie de sa vie. Ces moments de jeu sont réels, sans prouver l’absence de douleur.",
        "共享一个家慢慢变得温和起来。一起睡觉和追逐玩耍也是他生活的一部分。玩耍是真实的，但不能证明没有疼痛。"
    ),
    "vomiting-begins": text(
        "There are still quieter periods. The food often looks relatively undigested, which is why I do not assume every episode is true vomiting rather than regurgitation. The pattern needs veterinary interpretation, not a guess from a photograph.",
        "ما زالت هناك فترات أهدأ. يبدو الطعام غالباً غير مهضوم نسبياً، لذلك لا أفترض أن كل نوبة قيء حقيقي وليست ارتجاعاً. يحتاج النمط إلى تفسير بيطري، وليس تخميناً من صورة.",
        "Il reste des périodes plus calmes. Les aliments paraissent souvent peu digérés ; je ne suppose donc pas que chaque épisode soit un vomissement plutôt qu’une régurgitation. Ce schéma demande une interprétation vétérinaire.",
        "仍有较少发生的时期。食物常看起来没充分消化，所以我不会把每次都当成呕吐而非反流。这个规律需要兽医判断，不能根据照片猜测。"
    ),
    "feeding-changes": text(
        "Large portions and mixing different foods close together seemed harder for him. During a period of plain cooked chicken, I noticed much less vomiting. That experience is not a complete diet recommendation for another cat.",
        "بدت الكميات الكبيرة وخلط أطعمة مختلفة بفاصل قصير أصعب عليه. خلال فترة من الدجاج المطبوخ السادة لاحظت قيئاً أقل بكثير. هذه التجربة ليست توصية بغذاء كامل لقط آخر.",
        "Les grosses portions et les aliments différents rapprochés semblaient moins bien tolérés. Pendant une période de poulet cuit nature, j’ai observé beaucoup moins de vomissements. Ce n’est pas une recommandation de régime complet pour un autre chat.",
        "大份食物和短时间内混合不同食物似乎更难接受。有一段时间吃原味熟鸡肉时，我观察到呕吐明显减少。这不是给其他猫的完整饮食建议。"
    ),
    today: text(
        "He still sleeps beside me while I work, finds quiet resting places, scratches, grooms and uses his litter box. Some days are harder than others. The curious cat I brought home is still here, and we are still learning together.",
        "لا يزال ينام بجانبي أثناء عملي ويجد أماكن هادئة للراحة ويخدش وينظف نفسه ويستخدم صندوق الرمل. بعض الأيام أصعب من غيرها. القط الفضولي الذي أخذته إلى المنزل ما زال هنا، وما زلنا نتعلم معاً.",
        "Il dort encore près de moi pendant que je travaille, trouve des coins calmes, fait ses griffes, se toilette et utilise sa litière. Certains jours sont plus difficiles. Le chat curieux que j’ai ramené est toujours là ; nous apprenons encore ensemble.",
        "他仍会在我工作时睡在身旁，找安静的地方休息、磨爪、梳理自己，也使用猫砂盆。有些日子更困难。那个被我带回家的好奇小猫仍在，我们也仍在一起学习。"
    )
}
