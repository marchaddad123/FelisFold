import type {
    LanguageCode,
    LocalizedText,
    LotusExperienceContent
} from "~/types/foldcare"

const localizedText = (
    en: string,
    ar: string,
    fr: string,
    zh: string
): LocalizedText => ({ en, ar, fr, zh })

const localizedBullets = (
    en: string[],
    ar: string[],
    fr: string[],
    zh: string[]
): Record<LanguageCode, string[]> => ({ en, ar, fr, zh })

export const lotusKnownFacts = {
    cameHome: "2021-06",
    approximateAgeAtArrivalMonths: 2.5,
    documentedPedigree: null,
    veterinarianBreedAssessment: "Scottish Fold × Siamese mix",
    currentWeightKilograms: { minimum: 3.2, maximum: 3.3, approximate: true },
    exactImagingType: null,
    imagingDate: null,
    imagingReport: null,
    exactJointPainMedication: null,
    jointPainMedicationDose: null,
    exactEminentFoodProduct: null,
    kinderAdoptionDate: null,
    neuteringDate: null,
    olderWeightHistory: null,
    veterinaryRecords: null,
    ownerReportedDomperidone: {
        productName: "Motilium",
        reportedTabletFraction: "approximately one third",
        reportedIntervalHours: { minimum: 6, maximum: 8 },
        tabletStrength: null,
        veterinarianInstructionConfirmed: null
    }
} as const

type LotusPageText = {
    heroEyebrow: string
    heroTitle: string
    heroSubtitle: string
    heroCopy: string
    storyButton: string
    healthButton: string
    heroNote: string
    heroPaperNote: string
    glanceEyebrow: string
    glanceTitle: string
    glanceCopy: string
    facts: Array<[label: string, value: string]>
    originEyebrow: string
    originTitle: string
    originParagraphs: string[]
    ownerObservationLabel: string
    ownerObservationCopy: string
    earlyCaption: string
    familyCaption: string
    timelineTitle: string
    timelineCopy: string
    beforeNowEyebrow: string
    beforeNowTitle: string
    beforeLabel: string
    beforeCopy: string
    beforeItems: string[]
    nowLabel: string
    nowCopy: string
    nowItems: string[]
    dailyEyebrow: string
    dailyTitle: string
    dailyCopy: string
    kinderTitle: string
    kinderCopy: string
    observationsTitle: string
    observations: string[]
    notebookEyebrow: string
    notebookTitle: string
    notebookCopy: string
    mediaEyebrow: string
    mediaTitle: string
    mediaCopy: string
    whyEyebrow: string
    whyTitle: string
    whyCopy: string
    currentCaption: string
}

export const lotusPageText: Record<LanguageCode, LotusPageText> = {
    en: {
        heroEyebrow: "My cat. My teacher. The reason FelisFold exists.",
        heroTitle: "Meet Lotus.",
        heroSubtitle: "A little cat with a big story.",
        heroCopy:
            "Lotus came home in June 2021, about two and a half months old. A veterinarian later described him as a Scottish Fold–Siamese mix, but his parents and pedigree are unknown.",
        storyButton: "Read our story",
        healthButton: "Explore health guides",
        heroNote: "Lotus — our why",
        heroPaperNote: "Same curious eyes. Still completely himself.",
        glanceEyebrow: "Lotus at a glance",
        glanceTitle: "Curious, quiet and completely himself.",
        glanceCopy:
            "He loves safe sleeping spots, supervising meals and taking what he considers enormous trips just outside the apartment door.",
        facts: [
            ["Came home", "June 2021"],
            ["Age then", "About 2½ months"],
            ["Breed", "Vet-described Fold–Siamese mix"],
            ["Weight now", "About 3.2–3.3 kg"],
            ["Pedigree", "Unknown"]
        ],
        originEyebrow: "How we met",
        originTitle: "Getting Lotus was completely unplanned.",
        originParagraphs: [
            "My then-girlfriend and I were walking when she suggested looking inside a random pet shop. Many cats were meowing, but Lotus was quiet and frightened in his own cage.",
            "She noticed him first and wanted to get him out of there. We took him home that day. I remember paying about $150 in total for Lotus, a carrier, food, litter supplies and a few basics.",
            "He was already clean and vaccinated. We do not have pedigree records. Later, a veterinarian said he appeared to be a Scottish Fold–Siamese mix."
        ],
        ownerObservationLabel: "Owner memory—not medical proof",
        ownerObservationCopy:
            "As a kitten, I remember Lotus running, jumping high, chasing things and exploring without obvious hesitation. The old photos support the story of that period; they do not prove that his joints were medically normal.",
        earlyCaption: "Lotus and me in an earlier chapter.",
        familyCaption: "Real cats. Shared naps. A real home.",
        timelineTitle: "The story as I remember it",
        timelineCopy:
            "Only June 2021 is a firm date. The later stages use approximate ages and sequence because I do not want to invent dates I cannot verify.",
        beforeNowEyebrow: "Then → now",
        beforeNowTitle:
            "A change over time, not a ‘healthy versus sick’ label.",
        beforeLabel: "Then — what I remember",
        beforeCopy:
            "During kittenhood, movement problems were not obvious to me.",
        beforeItems: [
            "Ran and played normally",
            "Jumped high without noticeable hesitation",
            "Chased things and explored",
            "Tolerated being held more comfortably"
        ],
        nowLabel: "Now — daily life",
        nowCopy: "Every day is different, and jumping down is especially hard.",
        nowItems: [
            "Moves closer to an edge and pauses before jumping",
            "Both front and rear limbs seem affected to me",
            "His tail appears partly stiff and he dislikes it being touched",
            "Still runs after Kinder, grooms and has genuine good days"
        ],
        dailyEyebrow: "Life beyond symptoms",
        dailyTitle: "Lotus is still Lotus.",
        dailyCopy:
            "He hides in quiet places, sleeps beside me while I work, scratches, grooms, uses the litter box and still has bursts of energy. A difficult day does not erase the good ones—and a playful moment does not prove that nothing hurts.",
        kinderTitle: "Kinder changed his world, then became part of it.",
        kinderCopy:
            "Kinder joined after Lotus’s physical problems had begun. His behaviour changed noticeably and he seemed deeply affected by sharing his home and attention. I took him to the vet and deliberately gave him more attention. The exact treatment is not remembered. Over time, Lotus and Kinder became close; they play-fight and he still runs after her.",
        observationsTitle: "What I’ve noticed",
        observations: [
            "Jumping down appears harder than jumping up",
            "He may hesitate for several seconds before committing",
            "After 5–10 seconds of being held, he may try to escape",
            "He rarely permits much paw or leg handling",
            "His mobility changes noticeably from day to day"
        ],
        notebookEyebrow: "My care notebook",
        notebookTitle: "What I tried, what changed and what is still unknown.",
        notebookCopy:
            "These are honest owner notes, not a treatment plan for another cat. Medical decisions and medicine doses belong with a veterinarian who has examined the individual cat.",
        mediaEyebrow: "Real moments",
        mediaTitle: "A life documented, not staged.",
        mediaCopy:
            "I chose a small set of photos that adds something different: family, grooming, eating, rest and personality. Videos will be added only when the real Lotus files are supplied, reviewed and captioned.",
        whyEyebrow: "Why FelisFold exists",
        whyTitle: "One cat’s story. Better questions for many.",
        whyCopy:
            "Lotus’s health questions pushed me to research more carefully. FelisFold keeps three things separate: what I observed, what veterinary evidence says, and what only a veterinarian can decide for an individual cat.",
        currentCaption: "Lotus and me now. Still learning together."
    },
    ar: {
        heroEyebrow: "قطّي. معلّمي. والسبب وراء FelisFold.",
        heroTitle: "تعرّف على لوتس.",
        heroSubtitle: "قط صغير بقصة كبيرة.",
        heroCopy:
            "وصل لوتس إلى المنزل في يونيو 2021 وكان عمره نحو شهرين ونصف. وصفه طبيب بيطري لاحقاً بأنه مزيج Scottish Fold وSiamese، لكن والديه ونَسَبه غير معروفين.",
        storyButton: "اقرأ قصتنا",
        healthButton: "استكشف أدلة الصحة",
        heroNote: "لوتس — سببنا",
        heroPaperNote: "نفس النظرة الفضولية. وما زال كما هو.",
        glanceEyebrow: "لوتس في لمحة",
        glanceTitle: "فضولي وهادئ وشخصيته لا تشبه أحداً.",
        glanceCopy:
            "يحب أماكن النوم الآمنة ومراقبة الوجبات، ويعامل خروجه إلى المساحة أمام باب الشقة كأنه رحلة كبيرة.",
        facts: [
            ["وصل إلى المنزل", "يونيو 2021"],
            ["عمره حينها", "نحو شهرين ونصف"],
            ["السلالة", "مزيج Fold وSiamese بحسب الطبيب"],
            ["الوزن حالياً", "نحو 3.2–3.3 كغ"],
            ["النَسَب", "غير معروف"]
        ],
        originEyebrow: "كيف التقينا",
        originTitle: "الحصول على لوتس لم يكن مخططاً له إطلاقاً.",
        originParagraphs: [
            "كنت أمشي مع صديقتي آنذاك عندما اقترحت أن ندخل متجراً عشوائياً للحيوانات. كانت قطط كثيرة تموء، لكن لوتس كان خائفاً وهادئاً داخل قفصه.",
            "هي لاحظته أولاً وأرادت إخراجه من هناك. أخذناه إلى المنزل في اليوم نفسه. أذكر أن المبلغ الإجمالي كان نحو 150 دولاراً للوتس وحامل وطعام ولوازم رمل وبعض الأساسيات.",
            "كان نظيفاً وملقحاً. لا نملك أوراق نَسَب، وقال طبيب بيطري لاحقاً إنه يبدو مزيج Scottish Fold وSiamese."
        ],
        ownerObservationLabel: "ذاكرة المالك، وليست دليلاً طبياً",
        ownerObservationCopy:
            "أتذكر أن لوتس كان يركض ويقفز عالياً ويطارد الأشياء ويستكشف من دون تردد واضح وهو صغير. الصور القديمة تسند قصة تلك الفترة، لكنها لا تثبت طبياً أن مفاصله كانت طبيعية.",
        earlyCaption: "لوتس وأنا في فصل أقدم من قصتنا.",
        familyCaption: "قطط حقيقية. قيلولة مشتركة. منزل حقيقي.",
        timelineTitle: "القصة كما أتذكرها",
        timelineCopy:
            "يونيو 2021 هو التاريخ الثابت الوحيد. المراحل اللاحقة تستخدم أعماراً وتسلسلاً تقريبيين حتى لا أخترع تواريخ لا أستطيع تأكيدها.",
        beforeNowEyebrow: "في السابق ← الآن",
        beforeNowTitle: "تغيّر مع الوقت، وليس تصنيفاً بين «سليم» و«مريض».",
        beforeLabel: "في السابق — ما أتذكره",
        beforeCopy: "لم تكن مشاكل الحركة واضحة لي خلال مرحلة الصغر.",
        beforeItems: [
            "كان يركض ويلعب بصورة طبيعية",
            "كان يقفز عالياً من دون تردد ملحوظ",
            "كان يطارد الأشياء ويستكشف",
            "كان يتقبل الحمل براحة أكبر"
        ],
        nowLabel: "الآن — الحياة اليومية",
        nowCopy: "كل يوم مختلف، والقفز إلى الأسفل هو الأصعب خصوصاً.",
        nowItems: [
            "يقترب من الحافة ويتوقف قبل القفز",
            "تبدو الأطراف الأمامية والخلفية متأثرة من وجهة نظري",
            "يبدو ذيله متيبساً جزئياً ولا يحب لمسه",
            "لا يزال يركض خلف كيندر وينظف نفسه ولديه أيام جيدة فعلاً"
        ],
        dailyEyebrow: "الحياة أبعد من الأعراض",
        dailyTitle: "لوتس ما زال لوتس.",
        dailyCopy:
            "يختبئ في أماكن هادئة وينام بجانبي أثناء العمل ويخدش وينظف نفسه ويستخدم صندوق الرمل، ولا تزال لديه دفعات من الطاقة. اليوم الصعب لا يلغي الأيام الجيدة، ولحظة اللعب لا تثبت أن لا شيء يؤلمه.",
        kinderTitle: "غيّرت كيندر عالمه، ثم أصبحت جزءاً منه.",
        kinderCopy:
            "وصلت كيندر بعد بدء المشاكل الجسدية. تغيّر سلوكه بوضوح وبدا متأثراً بمشاركة منزله واهتمامي. أخذته إلى الطبيب وأعطيته اهتماماً أكبر عمداً، لكنني لا أتذكر العلاج بالتحديد. مع الوقت أصبحا قريبين؛ يتشاجران بلطف ولا يزال يركض خلفها.",
        observationsTitle: "ما ألاحظه اليوم",
        observations: [
            "القفز إلى الأسفل يبدو أصعب من القفز إلى الأعلى",
            "قد يتردد لعدة ثوانٍ قبل أن يقفز",
            "بعد 5–10 ثوانٍ من الحمل قد يحاول الهرب",
            "نادراً ما يسمح بلمس القدمين أو الأرجل كثيراً",
            "تتغير حركته بوضوح من يوم إلى آخر"
        ],
        notebookEyebrow: "دفتر العناية الخاص بي",
        notebookTitle: "ما جرّبته، وما تغيّر، وما زال مجهولاً.",
        notebookCopy:
            "هذه ملاحظات صادقة من المالك وليست خطة علاج لقط آخر. القرارات الطبية وجرعات الأدوية يجب أن تبقى مع طبيب فحص القط نفسه.",
        mediaEyebrow: "لحظات حقيقية",
        mediaTitle: "حياة موثقة، لا مشاهد مصطنعة.",
        mediaCopy:
            "اخترت مجموعة صغيرة من الصور، لكل منها معنى مختلف: العائلة والتنظيف والطعام والراحة والشخصية. لن نضيف الفيديو إلا عند توفير ملفات لوتس الحقيقية ومراجعتها وإضافة وصف مناسب.",
        whyEyebrow: "لماذا وُجد FelisFold",
        whyTitle: "قصة قط واحد. أسئلة أفضل للكثيرين.",
        whyCopy:
            "دفعتني أسئلة صحة لوتس إلى البحث بعناية أكبر. يفصل FelisFold بين ما لاحظته، وما تقوله الأدلة البيطرية، وما لا يستطيع تحديده إلا طبيب يفحص القط نفسه.",
        currentCaption: "لوتس وأنا الآن. وما زلنا نتعلم معاً."
    },
    fr: {
        heroEyebrow: "Mon chat. Mon professeur. La raison d’être de FelisFold.",
        heroTitle: "Voici Lotus.",
        heroSubtitle: "Un petit chat, une grande histoire.",
        heroCopy:
            "Lotus est arrivé à la maison en juin 2021, à environ deux mois et demi. Un vétérinaire l’a ensuite décrit comme un croisé Scottish Fold–Siamois, mais ses parents et son pedigree sont inconnus.",
        storyButton: "Lire notre histoire",
        healthButton: "Explorer les guides santé",
        heroNote: "Lotus — notre raison",
        heroPaperNote: "Le même regard curieux. Toujours lui-même.",
        glanceEyebrow: "Lotus en bref",
        glanceTitle: "Curieux, calme et parfaitement lui-même.",
        glanceCopy:
            "Il aime les cachettes tranquilles, surveiller les repas et transformer le palier devant l’appartement en grande aventure.",
        facts: [
            ["Arrivé", "Juin 2021"],
            ["Âge à l’arrivée", "Environ 2 mois et demi"],
            ["Race", "Croisé Fold–Siamois selon le vétérinaire"],
            ["Poids actuel", "Environ 3,2–3,3 kg"],
            ["Pedigree", "Inconnu"]
        ],
        originEyebrow: "Notre rencontre",
        originTitle: "L’arrivée de Lotus n’était absolument pas prévue.",
        originParagraphs: [
            "Je marchais avec ma petite amie de l’époque lorsqu’elle a proposé d’entrer dans une animalerie au hasard. Beaucoup de chats miaulaient, mais Lotus restait silencieux et effrayé dans sa cage.",
            "Elle l’a remarqué la première et voulait le sortir de là. Nous l’avons ramené le jour même. Je me souviens d’environ 150 dollars au total pour Lotus, une caisse, de la nourriture, la litière et quelques produits de base.",
            "Il était déjà propre et vacciné. Nous n’avons aucun document de pedigree. Plus tard, un vétérinaire a estimé qu’il ressemblait à un croisé Scottish Fold–Siamois."
        ],
        ownerObservationLabel: "Souvenir du propriétaire, pas preuve médicale",
        ownerObservationCopy:
            "Chaton, je me souviens de Lotus courant, sautant haut, poursuivant des objets et explorant sans hésitation évidente. Les anciennes photos illustrent cette période ; elles ne prouvent pas que ses articulations étaient médicalement normales.",
        earlyCaption: "Lotus et moi, dans un chapitre plus ancien.",
        familyCaption:
            "De vrais chats. Des siestes partagées. Une vraie maison.",
        timelineTitle: "L’histoire telle que je m’en souviens",
        timelineCopy:
            "Juin 2021 est la seule date ferme. Les étapes suivantes utilisent des âges et un ordre approximatifs pour ne pas inventer de dates.",
        beforeNowEyebrow: "Avant → aujourd’hui",
        beforeNowTitle:
            "Une évolution, pas une opposition « en bonne santé » contre « malade ».",
        beforeLabel: "Avant — mes souvenirs",
        beforeCopy:
            "Les problèmes de mobilité ne m’étaient pas évidents pendant ses premiers mois.",
        beforeItems: [
            "Il courait et jouait normalement",
            "Il sautait haut sans hésitation visible",
            "Il poursuivait et explorait",
            "Il acceptait plus facilement d’être porté"
        ],
        nowLabel: "Aujourd’hui — le quotidien",
        nowCopy:
            "Chaque jour est différent et descendre d’un saut semble particulièrement difficile.",
        nowItems: [
            "Il glisse vers le bord puis attend avant de sauter",
            "Les membres avant et arrière me semblent concernés",
            "Sa queue paraît partiellement raide et il n’aime pas qu’on la touche",
            "Il court encore après Kinder, se toilette et connaît de vrais bons jours"
        ],
        dailyEyebrow: "Au-delà des symptômes",
        dailyTitle: "Lotus reste Lotus.",
        dailyCopy:
            "Il se cache dans des endroits calmes, dort près de moi pendant que je travaille, fait ses griffes, se toilette, utilise sa litière et garde des élans d’énergie. Une mauvaise journée n’efface pas les bonnes, et un moment de jeu ne prouve pas l’absence de douleur.",
        kinderTitle:
            "Kinder a bouleversé son monde, puis en est devenue une partie.",
        kinderCopy:
            "Kinder est arrivée après le début des difficultés physiques de Lotus. Son comportement a nettement changé et il semblait profondément affecté par le partage de son foyer et de mon attention. Je l’ai emmené chez le vétérinaire et lui ai consacré davantage d’attention. Je ne me souviens pas du traitement exact. Avec le temps, ils sont devenus proches ; ils jouent à se battre et Lotus court encore après elle.",
        observationsTitle: "Ce que j’observe aujourd’hui",
        observations: [
            "Descendre semble plus difficile que monter",
            "Il peut hésiter plusieurs secondes avant de sauter",
            "Après 5 à 10 secondes dans les bras, il peut chercher à fuir",
            "Il tolère rarement longtemps la manipulation des pattes",
            "Sa mobilité varie nettement d’un jour à l’autre"
        ],
        notebookEyebrow: "Mon carnet de soins",
        notebookTitle:
            "Ce que j’ai essayé, ce qui a changé et ce qui reste inconnu.",
        notebookCopy:
            "Ce sont des notes honnêtes de propriétaire, pas un protocole pour un autre chat. Les décisions médicales et les doses appartiennent au vétérinaire qui a examiné l’animal.",
        mediaEyebrow: "Moments réels",
        mediaTitle: "Une vie documentée, pas mise en scène.",
        mediaCopy:
            "J’ai retenu quelques photos qui racontent chacune autre chose : la famille, le toilettage, les repas, le repos et sa personnalité. Les vidéos seront ajoutées uniquement lorsque les vrais fichiers de Lotus seront fournis, vérifiés et sous-titrés.",
        whyEyebrow: "Pourquoi FelisFold existe",
        whyTitle:
            "L’histoire d’un chat. De meilleures questions pour beaucoup.",
        whyCopy:
            "Les questions de santé de Lotus m’ont poussé à chercher plus sérieusement. FelisFold sépare ce que j’ai observé, ce que disent les données vétérinaires et ce que seul un vétérinaire peut décider pour un chat donné.",
        currentCaption:
            "Lotus et moi aujourd’hui. Nous apprenons encore ensemble."
    },
    zh: {
        heroEyebrow: "我的猫，我的老师，也是 FelisFold 存在的原因。",
        heroTitle: "认识 Lotus。",
        heroSubtitle: "一只小猫，一段很长的故事。",
        heroCopy:
            "Lotus 在 2021 年 6 月来到家里，当时大约两个半月大。兽医后来认为他像 Scottish Fold 与 Siamese 混种，但他的父母和血统资料都不清楚。",
        storyButton: "阅读我们的故事",
        healthButton: "浏览健康指南",
        heroNote: "Lotus — 我们的初心",
        heroPaperNote: "还是那双好奇的眼睛，还是他自己。",
        glanceEyebrow: "Lotus 小档案",
        glanceTitle: "好奇、安静，而且始终很有自己的个性。",
        glanceCopy:
            "他喜欢安全安静的睡觉角落、监督大家吃饭，还会把走到公寓门外当成一次大旅行。",
        facts: [
            ["到家", "2021 年 6 月"],
            ["当时年龄", "约两个半月"],
            ["品种", "兽医认为是 Fold–Siamese 混种"],
            ["目前体重", "约 3.2–3.3 公斤"],
            ["血统资料", "未知"]
        ],
        originEyebrow: "我们怎样相遇",
        originTitle: "把 Lotus 带回家完全不在计划里。",
        originParagraphs: [
            "我和当时的女友散步时，她提议随便进一家宠物店看看。许多猫都在叫，只有 Lotus 独自在笼子里，安静又害怕。",
            "她先注意到他，也很想把他带离那里。我们当天就把他带回家。我记得总共大约花了 150 美元，包括 Lotus、航空箱、食物、猫砂用品和一些基本物品。",
            "他已经会保持清洁，也接种过疫苗。我们没有血统文件。后来一位兽医认为他看起来像 Scottish Fold 与 Siamese 混种。"
        ],
        ownerObservationLabel: "主人的回忆，不是医学证明",
        ownerObservationCopy:
            "我记得 Lotus 小时候会正常奔跑、跳得很高、追逐和探索，看不出明显犹豫。旧照片可以呈现那段生活，却不能在医学上证明他的关节当时完全正常。",
        earlyCaption: "更早一个阶段的 Lotus 和我。",
        familyCaption: "真实的猫，共享的午睡，真实的家。",
        timelineTitle: "我记忆中的经历",
        timelineCopy:
            "2021 年 6 月是唯一确定的日期。后面的阶段只写大概年龄和先后顺序，因为我不想编造无法核实的日期。",
        beforeNowEyebrow: "那时 → 现在",
        beforeNowTitle: "这是随时间发生的变化，不是“健康”与“生病”的二分标签。",
        beforeLabel: "那时 — 我的记忆",
        beforeCopy: "幼猫时期，我没有明显看出活动问题。",
        beforeItems: [
            "正常奔跑和玩耍",
            "跳得很高，没有明显犹豫",
            "追逐东西并到处探索",
            "被抱时更容易放松"
        ],
        nowLabel: "现在 — 日常生活",
        nowCopy: "每天状态都不同，往下跳尤其困难。",
        nowItems: [
            "先挪到边缘，停下来再决定是否跳",
            "在我看来，前后肢似乎都有影响",
            "尾巴看起来有些僵硬，也不喜欢被碰",
            "仍会追 Kinder、自己梳理，也确实有状态好的日子"
        ],
        dailyEyebrow: "症状之外的生活",
        dailyTitle: "Lotus 还是 Lotus。",
        dailyCopy:
            "他会躲进安静的地方，会在我工作时睡在旁边，也会抓挠、梳理、正常使用猫砂盆，偶尔还会突然充满活力。困难的一天不会抹掉好日子；一次玩耍也不能证明他毫无疼痛。",
        kinderTitle: "Kinder 改变了他的世界，后来也成为其中的一部分。",
        kinderCopy:
            "Kinder 到家时，Lotus 的身体问题已经开始。他的行为明显改变，似乎很难适应分享家和关注。我带他去看兽医，也刻意给他更多陪伴，但已经记不清当时具体的治疗。后来他们变得很亲近，会打闹，Lotus 现在仍会追着 Kinder 跑。",
        observationsTitle: "我现在观察到的情况",
        observations: [
            "往下跳似乎比往上跳更难",
            "起跳前可能犹豫几秒",
            "被抱 5–10 秒后可能会想挣脱",
            "通常不允许长时间触碰爪子和腿",
            "活动状态每天都有明显变化"
        ],
        notebookEyebrow: "我的照护记录",
        notebookTitle: "我试过什么、发生了什么，还有哪些事情不清楚。",
        notebookCopy:
            "这些是主人诚实记录的经历，不是给其他猫的治疗方案。医疗决定和药物剂量应由实际检查过那只猫的兽医负责。",
        mediaEyebrow: "真实时刻",
        mediaTitle: "记录生活，而不是摆拍生活。",
        mediaCopy:
            "这里只挑选少量各有意义的照片：家人、梳理、吃饭、休息和性格。只有在真实 Lotus 视频文件提供、审核并完成说明后，才会加入视频。",
        whyEyebrow: "FelisFold 为什么存在",
        whyTitle: "一只猫的故事，让更多人提出更好的问题。",
        whyCopy:
            "Lotus 的健康疑问让我开始更认真地查资料。FelisFold 始终把三件事分开：我观察到的、兽医证据说明的，以及只能由兽医为个体猫判断的。",
        currentCaption: "现在的 Lotus 和我，仍在一起学习。"
    }
}

const mobilityExperience: LotusExperienceContent = {
    eyebrow: localizedText(
        "Lotus’s experience",
        "تجربة لوتس",
        "L’expérience de Lotus",
        "Lotus 的经历"
    ),
    title: localizedText(
        "What I notice about his movement",
        "ما ألاحظه في حركته",
        "Ce que j’observe dans ses mouvements",
        "我观察到的活动变化"
    ),
    copy: localizedText(
        "Lotus was active as a kitten. Around age two, I began noticing loss of strength. I remember a vet showing me imaging where his limbs looked abnormally shaped, almost zig-zagged, but I cannot verify the imaging type or report.",
        "كان لوتس نشطاً وهو صغير. قرابة عمر السنتين بدأت ألاحظ فقدان القوة. أتذكر أن الطبيب أظهر لي تصويراً بدت فيه أطرافه غير طبيعية وكأنها متعرجة، لكنني لا أستطيع تأكيد نوع التصوير أو التقرير.",
        "Lotus était actif chaton. Vers deux ans, j’ai commencé à remarquer une perte de force. Je me souviens d’images montrées par le vétérinaire où ses membres paraissaient anormaux, presque en zigzag, mais je ne peux confirmer ni le type d’examen ni le compte rendu.",
        "Lotus 小时候很活跃。大约两岁时，我开始注意到力量下降。我记得兽医给我看过影像，四肢形状似乎不正常，近似弯折，但我无法确认影像类型或报告内容。"
    ),
    bullets: localizedBullets(
        [
            "Jumping down is especially difficult",
            "He pauses and moves close to an edge before jumping",
            "His tail seems partly stiff and he dislikes it being touched",
            "Good and bad days vary; he still runs after Kinder"
        ],
        [
            "القفز إلى الأسفل صعب خصوصاً",
            "يتوقف ويقترب من الحافة قبل القفز",
            "يبدو الذيل متيبساً جزئياً ولا يحب لمسه",
            "تختلف الأيام الجيدة والصعبة ولا يزال يركض خلف كيندر"
        ],
        [
            "Descendre d’un saut est particulièrement difficile",
            "Il s’approche du bord et marque une pause",
            "Sa queue paraît partiellement raide et il n’aime pas qu’on la touche",
            "Les jours varient ; il court encore après Kinder"
        ],
        [
            "往下跳尤其困难",
            "起跳前会靠近边缘并停顿",
            "尾巴似乎有些僵硬，也不喜欢被碰",
            "每天状态不同，但仍会追着 Kinder 跑"
        ]
    ),
    note: localizedText(
        "These are owner observations, not a confirmed diagnosis or pain score.",
        "هذه ملاحظات المالك وليست تشخيصاً مؤكداً أو تقييماً للألم.",
        "Ce sont des observations de propriétaire, pas un diagnostic ni un score de douleur confirmé.",
        "这些是主人的观察，不是确诊，也不是疼痛评分。"
    ),
    tone: "lilac"
}

export const lotusHealthExamples: Record<string, LotusExperienceContent> = {
    osteochondrodysplasia: mobilityExperience,
    "pain-and-mobility": mobilityExperience,
    vomiting: {
        eyebrow: localizedText(
            "Lotus’s experience",
            "تجربة لوتس",
            "L’expérience de Lotus",
            "Lotus 的经历"
        ),
        title: localizedText(
            "What I notice around vomiting",
            "ما ألاحظه حول القيء",
            "Ce que j’observe autour des vomissements",
            "我观察到的呕吐情况"
        ),
        copy: localizedText(
            "Episodes seem to have started around age three and became more frequent over time, although there are still quiet periods. The food often looks relatively undigested, so I do not assume every episode is true vomiting rather than regurgitation.",
            "يبدو أن النوبات بدأت قرب عمر ثلاث سنوات ثم زادت مع الوقت، مع وجود فترات هادئة. غالباً يبدو الطعام غير مهضوم نسبياً، لذلك لا أفترض أن كل نوبة قيء حقيقي وليست ارتجاعاً.",
            "Les épisodes semblent avoir commencé vers trois ans puis être devenus plus fréquents, avec encore des périodes calmes. Les aliments paraissent souvent peu digérés ; je ne suppose donc pas que chaque épisode soit un vrai vomissement plutôt qu’une régurgitation.",
            "这些情况似乎从三岁左右开始，后来逐渐频繁，但也会有一段时间不发生。食物常看起来没有充分消化，因此我不会擅自判断每次都是真正的呕吐，而不是反流。"
        ),
        bullets: localizedBullets(
            [
                "Larger meals seem worse",
                "Smaller portions appear easier",
                "Mixing foods close together seems worse",
                "Leaving several hours between different food types seems better"
            ],
            [
                "تبدو الوجبات الكبيرة أسوأ",
                "تبدو الكميات الأصغر أسهل",
                "خلط الأطعمة بفاصل قصير يبدو أسوأ",
                "ترك ساعات بين أنواع الطعام المختلفة يبدو أفضل"
            ],
            [
                "Les gros repas semblent moins bien tolérés",
                "Les petites portions semblent plus faciles",
                "Mélanger des aliments rapprochés semble aggraver les choses",
                "Espacer de plusieurs heures les aliments différents semble aider"
            ],
            [
                "大餐似乎更容易出问题",
                "少量进食似乎更容易接受",
                "短时间内混合不同食物似乎更糟",
                "不同食物间隔几小时似乎更好"
            ]
        ),
        note: localizedText(
            "Owner experience—not a dosing guide. I have sometimes used a product sold as Motilium, but the tablet strength and whether the dosing came from a veterinarian are not documented. Medication and dosing must be discussed with a veterinarian.",
            "تجربة مالك وليست دليلاً للجرعات. استخدمت أحياناً منتجاً باسم Motilium، لكن قوة القرص ومصدر الجرعة البيطري غير موثقين. يجب مناقشة الدواء والجرعة مع طبيب بيطري.",
            "Expérience de propriétaire, pas guide de dosage. J’ai parfois utilisé un produit vendu sous le nom Motilium, mais le dosage du comprimé et l’origine vétérinaire de cette utilisation ne sont pas documentés. Tout médicament et toute dose doivent être discutés avec un vétérinaire.",
            "这是主人经历，不是用药剂量指南。我有时用过名为 Motilium 的产品，但药片规格以及是否来自兽医处方都没有记录。药物和剂量必须与兽医讨论。"
        ),
        tone: "warning"
    },
    "ears-and-grooming": {
        eyebrow: localizedText(
            "Lotus’s experience",
            "تجربة لوتس",
            "L’expérience de Lotus",
            "Lotus 的经历"
        ),
        title: localizedText(
            "Grooming is still part of his day",
            "لا يزال التنظيف جزءاً من يومه",
            "Le toilettage fait toujours partie de sa journée",
            "梳理仍是日常的一部分"
        ),
        copy: localizedText(
            "Lotus still grooms his back legs, belly and rear area. I brush all the cats occasionally and think I should brush him more often, but hairballs should not be assumed to explain every vomiting episode.",
            "لا يزال لوتس ينظف رجليه الخلفيتين وبطنه والمنطقة الخلفية. أنظف القطط بالفرشاة أحياناً وأعتقد أنه يحتاج إلى تكرار ذلك، لكن لا ينبغي افتراض أن كرات الشعر تفسر كل نوبة قيء.",
            "Lotus toilette encore ses pattes arrière, son ventre et l’arrière du corps. Je brosse parfois tous les chats et pense devoir le faire plus souvent, mais les boules de poils n’expliquent pas forcément chaque vomissement.",
            "Lotus 仍会梳理后腿、腹部和身体后侧。我偶尔给所有猫梳毛，也觉得应该更常给他梳，但不能把每次呕吐都归因于毛球。"
        ),
        tone: "sage"
    },
    "weight-and-quality-of-life": {
        eyebrow: localizedText(
            "Lotus’s experience",
            "تجربة لوتس",
            "L’expérience de Lotus",
            "Lotus 的经历"
        ),
        title: localizedText(
            "Good days and difficult days coexist",
            "الأيام الجيدة والصعبة موجودة معاً",
            "Les bons jours et les jours difficiles coexistent",
            "好日子和困难日子会同时存在"
        ),
        copy: localizedText(
            "His owner-reported weight is approximately 3.2–3.3 kg. Movement changes day to day: he may be quiet and hesitant, then later run after Kinder. Activity alone does not prove the absence of discomfort.",
            "وزنه الحالي بحسب المالك نحو 3.2–3.3 كغ. تتغير حركته يومياً؛ قد يكون هادئاً ومتردداً ثم يركض لاحقاً خلف كيندر. النشاط وحده لا يثبت غياب الانزعاج.",
            "Son poids rapporté est d’environ 3,2–3,3 kg. Sa mobilité varie : il peut être calme et hésitant, puis courir après Kinder. L’activité seule ne prouve pas l’absence d’inconfort.",
            "主人报告的目前体重约为 3.2–3.3 公斤。活动每天不同：有时安静犹豫，之后又会追 Kinder。仅凭活动不能证明没有不适。"
        ),
        tone: "sky"
    }
}

export const lotusNutritionExperience: LotusExperienceContent = {
    eyebrow: localizedText(
        "Lotus’s food history",
        "تاريخ طعام لوتس",
        "L’histoire alimentaire de Lotus",
        "Lotus 的饮食经历"
    ),
    title: localizedText(
        "What seemed easier for him",
        "ما بدا أسهل له",
        "Ce qui semblait plus facile pour lui",
        "哪些做法似乎更适合他"
    ),
    copy: localizedText(
        "Lotus used to eat Equilibrio dry food and later an unidentified Eminent stomach product. Today he rarely eats dry food and asks for food about every 3–4 hours. His water intake seems normal to me.",
        "كان لوتس يأكل طعام Equilibrio الجاف ثم منتجاً للمعدة من Eminent لم أعد أعرف اسمه. اليوم نادراً ما يأكل الجاف ويطلب الطعام كل 3–4 ساعات تقريباً، ويبدو شربه للماء طبيعياً لي.",
        "Lotus mangeait des croquettes Equilibrio, puis un produit Eminent pour l’estomac dont je ne connais plus la référence. Aujourd’hui, il mange rarement des croquettes et demande à manger toutes les 3 à 4 heures environ. Sa consommation d’eau me paraît normale.",
        "Lotus 以前吃 Equilibrio 干粮，后来吃过一种具体型号不明的 Eminent 肠胃产品。现在他很少吃干粮，大约每 3–4 小时会要吃的。在我看来，他喝水正常。"
    ),
    bullets: localizedBullets(
        [
            "Smaller meals appear easier than large portions",
            "Less mixing of foods close together seems better",
            "During a period of plain cooked chicken, I noticed much less vomiting",
            "Vitamins or supplements did not produce an obvious change"
        ],
        [
            "تبدو الوجبات الأصغر أسهل من الكميات الكبيرة",
            "تقليل خلط الأطعمة بفاصل قصير يبدو أفضل",
            "خلال فترة الدجاج المطبوخ السادة لاحظت قيئاً أقل بكثير",
            "لم ألاحظ فرقاً واضحاً مع الفيتامينات أو المكملات"
        ],
        [
            "Les petits repas semblent plus faciles que les grosses portions",
            "Éviter de rapprocher des aliments différents semble aider",
            "Pendant une période de poulet cuit nature, j’ai observé beaucoup moins de vomissements",
            "Les vitamines ou compléments n’ont pas produit de changement évident"
        ],
        [
            "少量进食似乎比大餐更容易接受",
            "减少短时间内混合不同食物似乎更好",
            "有一段时间吃清煮鸡胸肉时，我观察到呕吐明显减少",
            "维生素或补充剂没有带来明显变化"
        ]
    ),
    note: localizedText(
        "Plain chicken alone is not a complete long-term diet for cats, and an apparent improvement does not identify the underlying cause.",
        "الدجاج السادة وحده ليس غذاءً كاملاً للقطط على المدى الطويل، والتحسن الظاهر لا يحدد السبب الأساسي.",
        "Le poulet seul n’est pas une alimentation complète à long terme pour un chat, et une amélioration apparente n’identifie pas la cause.",
        "只吃清煮鸡肉并不是猫的长期完整饮食；看起来好转也不能说明真正原因。"
    ),
    tone: "peach"
}

export const lotusCareExperience: LotusExperienceContent = {
    eyebrow: localizedText(
        "What I’m changing now",
        "ما أغيّره الآن",
        "Ce que je change maintenant",
        "我现在准备改变的事"
    ),
    title: localizedText(
        "Making the route down easier",
        "تسهيل النزول",
        "Faciliter la descente",
        "让下来的路线更容易"
    ),
    copy: localizedText(
        "Lotus does not currently have dedicated pet stairs. Because getting down is often the hardest part, I am considering stable steps or a ramp near the places he uses most.",
        "لا يملك لوتس حالياً سلماً مخصصاً للحيوانات. ولأن النزول غالباً هو الأصعب، أفكر في إضافة خطوات ثابتة أو منحدر قرب الأماكن التي يستخدمها أكثر.",
        "Lotus n’a pas encore d’escalier pour animaux. Comme la descente est souvent la partie la plus difficile, j’envisage des marches stables ou une rampe près de ses endroits préférés.",
        "Lotus 目前没有专用宠物台阶。因为往下跳通常最困难，我正在考虑在他最常去的地方放稳固台阶或坡道。"
    ),
    bullets: localizedBullets(
        [
            "This is a practical home change, not a treatment for the Fold gene",
            "I will let Lotus choose whether to use it",
            "New or worsening movement changes still belong with a veterinarian"
        ],
        [
            "هذا تعديل عملي في المنزل وليس علاجاً لجين Fold",
            "سأترك للوتس حرية استخدامه",
            "التغيرات الجديدة أو المتفاقمة في الحركة تحتاج إلى طبيب"
        ],
        [
            "C’est une adaptation pratique, pas un traitement du gène Fold",
            "Lotus restera libre de l’utiliser",
            "Toute aggravation de la mobilité doit être discutée avec un vétérinaire"
        ],
        [
            "这是家庭环境调整，不是治疗折耳基因",
            "是否使用由 Lotus 自己选择",
            "新出现或加重的活动变化仍需咨询兽医"
        ]
    ),
    tone: "sage"
}

export const lotusNotebookSections: LotusExperienceContent[] = [
    {
        eyebrow: localizedText(
            "What the vet said",
            "ما قاله الطبيب",
            "Ce que le vétérinaire a dit",
            "兽医当时说的"
        ),
        title: localizedText(
            "Advice I remember",
            "النصيحة التي أتذكرها",
            "Les conseils dont je me souviens",
            "我记得的建议"
        ),
        copy: localizedText(
            "A veterinarian recommended neutering around age two and feeding Lotus separately. We followed the neutering advice, but I did not notice a clear mobility improvement. In daily life I still usually feed the cats in the same room.",
            "أوصى طبيب بتعقيم لوتس قرب عمر السنتين وإطعامه منفصلاً. اتبعنا نصيحة التعقيم لكنني لم ألاحظ تحسناً واضحاً في الحركة. عملياً ما زلت أطعم القطط عادة في الغرفة نفسها.",
            "Un vétérinaire a conseillé la castration vers deux ans et des repas séparés. Nous avons suivi le conseil de castration, sans amélioration nette de la mobilité à mes yeux. Au quotidien, je nourris encore généralement les chats dans la même pièce.",
            "兽医曾建议在两岁左右绝育并单独喂食。我们遵循了绝育建议，但我没有明显看到活动改善。现实生活中，我通常仍在同一个房间喂几只猫。"
        ),
        note: localizedText(
            "This history does not mean neutering treats Scottish Fold skeletal disease.",
            "هذا التاريخ لا يعني أن التعقيم يعالج مرض الهيكل العظمي في Scottish Fold.",
            "Ce récit ne signifie pas que la castration traite la maladie osseuse du Scottish Fold.",
            "这段经历不表示绝育可以治疗苏格兰折耳猫骨骼疾病。"
        ),
        tone: "sky"
    },
    lotusNutritionExperience,
    {
        eyebrow: localizedText(
            "What didn’t clearly help",
            "ما لم يساعد بوضوح",
            "Ce qui n’a pas clairement aidé",
            "没有明显帮助的尝试"
        ),
        title: localizedText(
            "No obvious change from supplements",
            "لا تغير واضح مع المكملات",
            "Pas de changement évident avec les compléments",
            "补充剂没有明显改变"
        ),
        copy: localizedText(
            "I tried vitamins or supplements but did not notice a meaningful improvement. The exact product is unknown, so this cannot be generalized into ‘vitamins do not work.’",
            "جرّبت فيتامينات أو مكملات ولم ألاحظ تحسناً مهماً. المنتج غير معروف، لذلك لا يمكن تعميم التجربة والقول إن الفيتامينات لا تعمل.",
            "J’ai essayé des vitamines ou compléments sans amélioration évidente. Le produit exact est inconnu ; cette expérience ne permet pas de conclure que « les vitamines ne fonctionnent pas ».",
            "我试过维生素或补充剂，但没有观察到明显改善。具体产品未知，因此不能把这段经历概括为“维生素没用”。"
        ),
        tone: "plain"
    },
    lotusCareExperience,
    {
        eyebrow: localizedText(
            "What remains unknown",
            "ما لا يزال مجهولاً",
            "Ce qui reste inconnu",
            "仍然未知的信息"
        ),
        title: localizedText(
            "I would rather leave a blank than invent an answer",
            "أفضل ترك فراغ على اختراع إجابة",
            "Mieux vaut laisser une case vide qu’inventer",
            "宁可留空，也不编造答案"
        ),
        copy: localizedText(
            "The imaging type and report, exact pain medicine and dose, Motilium tablet strength and prescription history, exact Eminent food, Kinder’s adoption date, neutering date, older weights and individual media dates still need records or metadata.",
            "ما زال نوع التصوير وتقريره، ودواء الألم وجرعته، وقوة قرص Motilium ومصدر استخدامه، ومنتج Eminent، وتاريخ وصول كيندر والتعقيم والأوزان القديمة وتواريخ الصور تحتاج إلى سجلات أو بيانات.",
            "Le type d’imagerie et son compte rendu, l’antalgique et sa dose, le dosage du Motilium et son origine, le produit Eminent, les dates d’arrivée de Kinder et de castration, les anciens poids et les dates des médias restent à documenter.",
            "影像类型与报告、止痛药及剂量、Motilium 药片规格与处方来源、Eminent 具体产品、Kinder 到家日期、绝育日期、过去体重和媒体日期仍需记录或元数据确认。"
        ),
        tone: "plain"
    }
]
