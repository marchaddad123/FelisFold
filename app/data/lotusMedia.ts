import type {
    LocalizedText,
    LotusMediaItem,
    ReadyLotusMediaItem
} from "~/types/foldcare"

const mediaText = (
    en: string,
    ar: string,
    fr: string,
    zh: string
): LocalizedText => ({ en, ar, fr, zh })

export const lotusMedia: LotusMediaItem[] = [
    {
        id: "lotus-portrait",
        type: "photo",
        availability: "ready",
        selection: "use",
        sourcePath: "/images/lotus/lotus-portrait.jpg",
        width: 1536,
        height: 1536,
        title: mediaText(
            "Lotus today",
            "لوتس اليوم",
            "Lotus aujourd’hui",
            "现在的 Lotus"
        ),
        caption: mediaText(
            "Lotus at home—the real cat behind FelisFold.",
            "لوتس في المنزل، القط الحقيقي وراء FelisFold.",
            "Lotus à la maison, le vrai chat derrière FelisFold.",
            "家里的 Lotus，也是 FelisFold 背后的真实猫咪。"
        ),
        altText: mediaText(
            "Lotus, a cream Scottish Fold and Siamese mix, looking toward the camera",
            "لوتس، قط كريمي وُصف بأنه مزيج Scottish Fold وSiamese، ينظر نحو الكاميرا",
            "Lotus, un chat crème décrit comme croisé Scottish Fold et Siamois, regarde l’objectif",
            "奶油色的 Lotus 看向镜头，兽医曾描述他为 Scottish Fold 与 Siamese 混种"
        ),
        peopleVisible: false,
        requiresPublicationApproval: false,
        featured: true,
        mobileObjectPosition: "center 42%",
        desktopObjectPosition: "center 40%"
    },
    {
        id: "lotus-with-creator-younger",
        type: "photo",
        availability: "ready",
        selection: "use",
        sourcePath: "/images/lotus/lotus-with-creator-younger.jpg",
        width: 1152,
        height: 1536,
        approximateDate: true,
        ageLabel: mediaText(
            "Younger Lotus",
            "لوتس في عمر أصغر",
            "Lotus plus jeune",
            "更年轻的 Lotus"
        ),
        title: mediaText(
            "An earlier chapter",
            "فصل أقدم",
            "Un chapitre plus ancien",
            "更早的一章"
        ),
        caption: mediaText(
            "Lotus with me when he was younger.",
            "لوتس معي عندما كان أصغر.",
            "Lotus avec moi lorsqu’il était plus jeune.",
            "Lotus 小时候和我在一起。"
        ),
        altText: mediaText(
            "A younger Lotus beside his owner",
            "لوتس في عمر أصغر بجانب صاحبه",
            "Lotus plus jeune aux côtés de son propriétaire",
            "更年轻的 Lotus 和主人在一起"
        ),
        storyContext: mediaText(
            "Part of the owner-and-Lotus story; the exact date is not yet confirmed.",
            "جزء من قصة لوتس وصاحبه، والتاريخ الدقيق غير مؤكد بعد.",
            "Un moment de l’histoire entre Lotus et moi ; la date exacte reste à confirmer.",
            "这是 Lotus 和主人故事的一部分，确切日期尚未确认。"
        ),
        peopleVisible: true,
        ownerVisible: true,
        requiresPublicationApproval: false,
        featured: true,
        mobileObjectPosition: "center 40%",
        desktopObjectPosition: "center 40%"
    },
    {
        id: "lotus-with-creator-now",
        type: "photo",
        availability: "ready",
        selection: "use",
        sourcePath: "/images/lotus/lotus-with-creator.jpg",
        width: 864,
        height: 1536,
        title: mediaText(
            "Still together",
            "ما زلنا معاً",
            "Toujours ensemble",
            "依然在一起"
        ),
        caption: mediaText(
            "A recent quiet moment with Lotus.",
            "لحظة هادئة حديثة مع لوتس.",
            "Un moment calme et récent avec Lotus.",
            "最近和 Lotus 相处的安静时刻。"
        ),
        altText: mediaText(
            "Lotus resting beside his owner",
            "لوتس يستريح بجانب صاحبه",
            "Lotus se repose auprès de son propriétaire",
            "Lotus 靠在主人身边休息"
        ),
        peopleVisible: true,
        ownerVisible: true,
        requiresPublicationApproval: false,
        featured: true,
        mobileObjectPosition: "center 34%",
        desktopObjectPosition: "center 30%"
    },
    {
        id: "lotus-family",
        type: "photo",
        availability: "ready",
        selection: "use",
        sourcePath: "/images/lotus/lotus-family.jpg",
        width: 1536,
        height: 1152,
        title: mediaText(
            "Shared naps",
            "قيلولة مشتركة",
            "Sieste partagée",
            "一起午睡"
        ),
        caption: mediaText(
            "Lotus resting with his cat family.",
            "لوتس يستريح مع عائلته من القطط.",
            "Lotus se repose avec sa famille féline.",
            "Lotus 和猫咪家人一起休息。"
        ),
        altText: mediaText(
            "Lotus sleeping beside two ginger cats",
            "لوتس ينام بجانب قطين برتقاليين",
            "Lotus dort à côté de deux chats roux",
            "Lotus 睡在两只橘猫旁边"
        ),
        peopleVisible: false,
        requiresPublicationApproval: false,
        mobileObjectPosition: "center",
        desktopObjectPosition: "center"
    },
    {
        id: "lotus-cuddling",
        type: "photo",
        availability: "ready",
        selection: "use",
        sourcePath: "/images/lotus/lotus-cuddling.jpg",
        width: 1152,
        height: 1536,
        title: mediaText(
            "Close company",
            "رفقة قريبة",
            "Une présence proche",
            "亲密陪伴"
        ),
        caption: mediaText(
            "Lotus and one of his cat companions sharing the sofa.",
            "لوتس وأحد رفاقه من القطط يتشاركان الكنبة.",
            "Lotus et l’un de ses compagnons partagent le canapé.",
            "Lotus 和猫咪伙伴一起待在沙发上。"
        ),
        altText: mediaText(
            "Lotus cuddling a ginger cat on a patterned sofa",
            "لوتس يحتضن قطاً برتقالياً على كنبة مزخرفة",
            "Lotus câline un chat roux sur un canapé à motifs",
            "Lotus 在花纹沙发上依偎着一只橘猫"
        ),
        peopleVisible: false,
        requiresPublicationApproval: false,
        mobileObjectPosition: "center 42%",
        desktopObjectPosition: "center 42%"
    },
    {
        id: "lotus-cozy",
        type: "photo",
        availability: "ready",
        selection: "use",
        sourcePath: "/images/lotus/lotus-cozy.jpg",
        width: 864,
        height: 1536,
        title: mediaText(
            "A safe corner",
            "زاوية آمنة",
            "Un coin rassurant",
            "安心的小角落"
        ),
        caption: mediaText(
            "Lotus often chooses quiet, tucked-away places to rest.",
            "غالباً ما يختار لوتس أماكن هادئة ومخفية للراحة.",
            "Lotus choisit souvent des endroits calmes et abrités pour se reposer.",
            "Lotus 常常选择安静、隐蔽的地方休息。"
        ),
        altText: mediaText(
            "A close view of Lotus resting between soft cushions",
            "لقطة قريبة للوتس وهو يستريح بين الوسائد",
            "Gros plan de Lotus reposant entre des coussins",
            "Lotus 躺在柔软靠垫之间的特写"
        ),
        peopleVisible: false,
        requiresPublicationApproval: false,
        mobileObjectPosition: "center 48%",
        desktopObjectPosition: "center 48%"
    },
    {
        id: "lotus-sunlight",
        type: "photo",
        availability: "ready",
        selection: "use",
        sourcePath: "/images/lotus/lotus-sunlight.jpg",
        width: 1152,
        height: 1536,
        title: mediaText(
            "Good-day energy",
            "طاقة يوم جيد",
            "L’énergie des bons jours",
            "状态好的一天"
        ),
        caption: mediaText(
            "Lotus still has active moments and genuine bursts of energy.",
            "لا تزال لدى لوتس لحظات نشطة ودفعات حقيقية من الطاقة.",
            "Lotus garde des moments actifs et de vrais élans d’énergie.",
            "Lotus 仍然会活动，也会突然充满活力。"
        ),
        altText: mediaText(
            "Lotus grooming and stretching one rear leg in sunlight",
            "لوتس ينظف نفسه ويمد إحدى رجليه الخلفيتين في ضوء الشمس",
            "Lotus se toilette et étire une patte arrière au soleil",
            "Lotus 在阳光下梳理毛发并伸展一条后腿"
        ),
        healthContext: mediaText(
            "This illustrates daily function; it does not prove the absence of pain.",
            "تُظهر الصورة وظيفة يومية ولا تثبت غياب الألم.",
            "Cette image montre une fonction quotidienne ; elle ne prouve pas l’absence de douleur.",
            "这张照片只记录日常活动，不能证明没有疼痛。"
        ),
        peopleVisible: false,
        requiresPublicationApproval: false,
        mobileObjectPosition: "center 54%",
        desktopObjectPosition: "center 54%"
    },
    {
        id: "lotus-posture",
        type: "photo",
        availability: "ready",
        selection: "use",
        sourcePath: "/images/lotus/lotus-posture.jpg",
        width: 1152,
        height: 1536,
        title: mediaText(
            "A daily-life posture",
            "وضعية من الحياة اليومية",
            "Une posture du quotidien",
            "日常姿势"
        ),
        caption: mediaText(
            "One ordinary resting posture I can compare over time.",
            "وضعية راحة عادية أستطيع مقارنتها مع مرور الوقت.",
            "Une posture de repos ordinaire que je peux comparer avec le temps.",
            "一个普通的休息姿势，可以随时间对比。"
        ),
        altText: mediaText(
            "Lotus sitting upright on a patterned chair",
            "لوتس يجلس منتصباً على كرسي مزخرف",
            "Lotus assis droit sur un fauteuil à motifs",
            "Lotus 直坐在花纹椅子上"
        ),
        peopleVisible: false,
        requiresPublicationApproval: false,
        mobileObjectPosition: "center 38%",
        desktopObjectPosition: "center 38%"
    },
    {
        id: "lotus-feeding",
        type: "photo",
        availability: "ready",
        selection: "use",
        sourcePath: "/images/lotus/lotus-feeding.jpg",
        width: 1152,
        height: 1536,
        title: mediaText(
            "Mealtime notes",
            "ملاحظات وقت الطعام",
            "Notes de repas",
            "进食记录"
        ),
        caption: mediaText(
            "Meal size, food and timing are more useful when I record them together.",
            "يصبح حجم الوجبة والطعام والتوقيت أكثر فائدة عندما أسجلها معاً.",
            "La taille du repas, l’aliment et l’heure sont plus utiles quand je les note ensemble.",
            "把餐量、食物和时间一起记录，信息才更有用。"
        ),
        altText: mediaText(
            "Lotus eating from a raised white bowl",
            "لوتس يأكل من وعاء أبيض مرتفع",
            "Lotus mange dans une gamelle blanche surélevée",
            "Lotus 从抬高的白色食碗里进食"
        ),
        peopleVisible: false,
        requiresPublicationApproval: false,
        mobileObjectPosition: "center 58%",
        desktopObjectPosition: "center 58%"
    },
    {
        id: "lotus-grooming",
        type: "photo",
        availability: "ready",
        selection: "use",
        sourcePath: "/images/lotus/lotus-grooming.jpg",
        width: 692,
        height: 1536,
        title: mediaText(
            "Still grooming",
            "لا يزال ينظف نفسه",
            "Il se toilette encore",
            "仍会自己梳理"
        ),
        caption: mediaText(
            "Lotus still reaches his back legs, belly and rear area to groom.",
            "لا يزال لوتس يصل إلى رجليه الخلفيتين وبطنه والمنطقة الخلفية لتنظيفها.",
            "Lotus atteint encore ses pattes arrière, son ventre et l’arrière de son corps pour se toiletter.",
            "Lotus 仍能梳理后腿、腹部和身体后侧。"
        ),
        altText: mediaText(
            "Lotus grooming a raised rear leg on a rug",
            "لوتس ينظف رجله الخلفية المرفوعة على سجادة",
            "Lotus toilette une patte arrière levée sur un tapis",
            "Lotus 在地毯上梳理抬起的后腿"
        ),
        peopleVisible: false,
        requiresPublicationApproval: false,
        mobileObjectPosition: "center 58%",
        desktopObjectPosition: "center 58%"
    },
    {
        id: "lotus-glasses",
        type: "photo",
        availability: "ready",
        selection: "use",
        sourcePath: "/images/lotus/lotus-glasses.jpg",
        width: 1536,
        height: 1333,
        title: mediaText(
            "Still completely Lotus",
            "لا يزال لوتس كما هو",
            "Toujours pleinement Lotus",
            "还是那个 Lotus"
        ),
        caption: mediaText(
            "Health questions are part of his life, not his whole personality.",
            "الأسئلة الصحية جزء من حياته وليست كل شخصيته.",
            "Les questions de santé font partie de sa vie, mais ne résument pas sa personnalité.",
            "健康问题只是他生活的一部分，并不是他的全部。"
        ),
        altText: mediaText(
            "Lotus resting with a pair of glasses balanced on his face",
            "لوتس يستريح ونظارة موضوعة على وجهه",
            "Lotus se repose avec une paire de lunettes posée sur le visage",
            "Lotus 休息时脸上架着一副眼镜"
        ),
        peopleVisible: false,
        requiresPublicationApproval: false,
        mobileObjectPosition: "center 45%",
        desktopObjectPosition: "center 45%"
    },
    {
        id: "lotus-home",
        type: "photo",
        availability: "ready",
        selection: "use",
        sourcePath: "/images/lotus/lotus-home.jpg",
        width: 1152,
        height: 1536,
        title: mediaText(
            "Home territory",
            "منطقته في المنزل",
            "Son territoire à la maison",
            "家里的地盘"
        ),
        caption: mediaText(
            "Lotus enjoys watching the home and exploring just outside the apartment door.",
            "يحب لوتس مراقبة المنزل واستكشاف المساحة خارج باب الشقة مباشرة.",
            "Lotus aime observer la maison et explorer juste devant la porte de l’appartement.",
            "Lotus 喜欢观察家里，也喜欢探索公寓门外的一小片区域。"
        ),
        altText: mediaText(
            "Lotus stretched out on a glass table at home",
            "لوتس ممدد على طاولة زجاجية في المنزل",
            "Lotus allongé sur une table en verre à la maison",
            "Lotus 趴在家里的玻璃桌上"
        ),
        peopleVisible: false,
        requiresPublicationApproval: false,
        mobileObjectPosition: "center 55%",
        desktopObjectPosition: "center 55%"
    },

    // The seven inline previews supplied in this conversation are catalogued here,
    // but their original files were not mounted into the workspace. They must not
    // be rendered until the original binaries are attached and dimensions verified.
    {
        id: "incoming-kitten-with-woman",
        type: "photo",
        availability: "awaiting-original",
        selection: "keep-for-later",
        sourcePath: null,
        width: null,
        height: null,
        originalReference:
            "Supplied inline preview 1: kitten Lotus beside an identifiable woman",
        approximateDate: true,
        ageLabel: mediaText("Kittenhood", "مرحلة الصغر", "Chaton", "幼猫时期"),
        title: mediaText(
            "Early bond",
            "رابطة مبكرة",
            "Premier lien",
            "早期陪伴"
        ),
        caption: mediaText(
            "An early-life photo that needs the other person’s publication approval.",
            "صورة مبكرة تحتاج إلى موافقة الشخص الآخر قبل النشر.",
            "Une photo ancienne qui nécessite l’accord de l’autre personne avant publication.",
            "一张早期照片，公开前需要画面中另一人的许可。"
        ),
        altText: mediaText(
            "Kitten Lotus beside a woman",
            "لوتس صغير بجانب امرأة",
            "Lotus chaton auprès d’une femme",
            "幼猫 Lotus 靠在一位女士身边"
        ),
        peopleVisible: true,
        ownerVisible: false,
        requiresPublicationApproval: true
    },
    {
        id: "incoming-kitten-first-bed",
        type: "photo",
        availability: "awaiting-original",
        selection: "use",
        sourcePath: null,
        width: null,
        height: null,
        originalReference:
            "Supplied inline preview 2: kitten Lotus resting in a dark pet bed",
        date: "2021",
        approximateDate: true,
        ageLabel: mediaText(
            "About 2–3 months",
            "نحو شهرين إلى ثلاثة",
            "Environ 2 à 3 mois",
            "约 2–3 个月"
        ),
        title: mediaText(
            "One of his first beds",
            "أحد أسرّته الأولى",
            "L’un de ses premiers couchages",
            "最初的小床之一"
        ),
        caption: mediaText(
            "Tiny Lotus settling into home.",
            "لوتس الصغير يبدأ الاعتياد على المنزل.",
            "Le tout petit Lotus découvre sa maison.",
            "小小的 Lotus 正在适应新家。"
        ),
        altText: mediaText(
            "Kitten Lotus lying in a dark pet bed",
            "لوتس صغير مستلقٍ في سرير داكن للقطط",
            "Lotus chaton couché dans un panier sombre",
            "幼猫 Lotus 躺在深色宠物床里"
        ),
        peopleVisible: false,
        requiresPublicationApproval: false,
        featured: true
    },
    {
        id: "incoming-kitten-tv-evening",
        type: "photo",
        availability: "awaiting-original",
        selection: "do-not-use-publicly",
        sourcePath: null,
        width: null,
        height: null,
        originalReference:
            "Supplied inline preview 3: kitten foreground, identifiable woman and television content on phone",
        approximateDate: true,
        ageLabel: mediaText("Kittenhood", "مرحلة الصغر", "Chaton", "幼猫时期"),
        title: mediaText(
            "Private home moment",
            "لحظة منزلية خاصة",
            "Moment privé à la maison",
            "私密的家庭时刻"
        ),
        caption: mediaText(
            "Kept private because another person and third-party screen content are prominent.",
            "تُحفظ بشكل خاص لأن شخصاً آخر ومحتوى شاشة لطرف ثالث يظهران بوضوح.",
            "Conservée en privé car une autre personne et un contenu d’écran tiers sont très visibles.",
            "因画面中另一人和第三方屏幕内容十分明显，此照片不公开使用。"
        ),
        altText: mediaText(
            "Kitten Lotus during a private home moment",
            "لوتس صغير في لحظة منزلية خاصة",
            "Lotus chaton lors d’un moment privé à la maison",
            "幼猫 Lotus 在一次私密的家庭时刻中"
        ),
        peopleVisible: true,
        ownerVisible: false,
        requiresPublicationApproval: true
    },
    {
        id: "incoming-kitten-with-owner",
        type: "photo",
        availability: "awaiting-original",
        selection: "use",
        sourcePath: null,
        width: null,
        height: null,
        originalReference:
            "Supplied inline preview 4: owner holding kitten Lotus",
        date: "2021",
        approximateDate: true,
        ageLabel: mediaText(
            "About 2–3 months",
            "نحو شهرين إلى ثلاثة",
            "Environ 2 à 3 mois",
            "约 2–3 个月"
        ),
        title: mediaText(
            "Our first weeks",
            "أسابيعنا الأولى",
            "Nos premières semaines",
            "最初的几周"
        ),
        caption: mediaText(
            "Lotus with me during his first weeks at home.",
            "لوتس معي خلال أسابيعه الأولى في المنزل.",
            "Lotus avec moi pendant ses premières semaines à la maison.",
            "Lotus 到家最初几周和我在一起。"
        ),
        altText: mediaText(
            "The owner holding kitten Lotus",
            "صاحب لوتس يحمله وهو صغير",
            "Le propriétaire tient Lotus chaton",
            "主人抱着幼猫 Lotus"
        ),
        peopleVisible: true,
        ownerVisible: true,
        requiresPublicationApproval: false,
        featured: true
    },
    {
        id: "incoming-kitten-blue-eyes",
        type: "photo",
        availability: "awaiting-original",
        selection: "use",
        sourcePath: null,
        width: null,
        height: null,
        originalReference:
            "Supplied inline preview 5: close kitten portrait on dotted clothing",
        date: "2021",
        approximateDate: true,
        ageLabel: mediaText(
            "About 2–3 months",
            "نحو شهرين إلى ثلاثة",
            "Environ 2 à 3 mois",
            "约 2–3 个月"
        ),
        title: mediaText(
            "Those early blue eyes",
            "عيناه الزرقاوان في البداية",
            "Ses yeux bleus de chaton",
            "小时候的蓝眼睛"
        ),
        caption: mediaText(
            "A close kitten portrait from Lotus’s early months.",
            "صورة قريبة للوتس خلال أشهره الأولى.",
            "Un portrait rapproché des premiers mois de Lotus.",
            "Lotus 幼猫时期的一张近距离照片。"
        ),
        altText: mediaText(
            "A close portrait of kitten Lotus with blue eyes",
            "صورة قريبة للوتس الصغير بعينين زرقاوين",
            "Portrait rapproché de Lotus chaton aux yeux bleus",
            "蓝眼睛幼猫 Lotus 的近距离照片"
        ),
        peopleVisible: false,
        requiresPublicationApproval: false
    },
    {
        id: "incoming-first-scratching-post",
        type: "photo",
        availability: "awaiting-original",
        selection: "use",
        sourcePath: null,
        width: null,
        height: null,
        originalReference:
            "Supplied inline preview 6: owner with kitten Lotus and first scratching post",
        date: "2021",
        approximateDate: true,
        ageLabel: mediaText(
            "About 2–3 months",
            "نحو شهرين إلى ثلاثة",
            "Environ 2 à 3 mois",
            "约 2–3 个月"
        ),
        title: mediaText(
            "His first scratching post",
            "عمود الخدش الأول",
            "Son premier griffoir",
            "第一个猫抓柱"
        ),
        caption: mediaText(
            "An early home moment with Lotus and one of his first toys.",
            "لحظة مبكرة في المنزل مع لوتس وإحدى ألعابه الأولى.",
            "Un premier moment à la maison avec Lotus et l’un de ses premiers jouets.",
            "Lotus 到家早期和第一批玩具在一起的时刻。"
        ),
        altText: mediaText(
            "The owner holding kitten Lotus beside a blue scratching post",
            "صاحب لوتس يحمله بجانب عمود خدش أزرق",
            "Le propriétaire tient Lotus chaton près d’un griffoir bleu",
            "主人抱着幼猫 Lotus，旁边是蓝色猫抓柱"
        ),
        peopleVisible: true,
        ownerVisible: true,
        requiresPublicationApproval: false,
        featured: true
    },
    {
        id: "incoming-kitten-sofa",
        type: "photo",
        availability: "awaiting-original",
        selection: "use",
        sourcePath: null,
        width: null,
        height: null,
        originalReference:
            "Supplied inline preview 7: kitten Lotus looking upward on patterned sofa",
        date: "2021",
        approximateDate: true,
        ageLabel: mediaText(
            "About 2–3 months",
            "نحو شهرين إلى ثلاثة",
            "Environ 2 à 3 mois",
            "约 2–3 个月"
        ),
        title: mediaText(
            "Tiny explorer",
            "مستكشف صغير",
            "Petit explorateur",
            "小小探索者"
        ),
        caption: mediaText(
            "Kitten Lotus watching the room with wide blue eyes.",
            "لوتس الصغير يراقب الغرفة بعينين زرقاوين واسعتين.",
            "Lotus chaton observe la pièce avec de grands yeux bleus.",
            "幼猫 Lotus 睁着蓝色大眼睛观察房间。"
        ),
        altText: mediaText(
            "Kitten Lotus looking upward from a patterned sofa",
            "لوتس صغير ينظر إلى الأعلى من كنبة مزخرفة",
            "Lotus chaton regarde vers le haut depuis un canapé à motifs",
            "幼猫 Lotus 在花纹沙发上抬头看"
        ),
        peopleVisible: false,
        requiresPublicationApproval: false,
        featured: true
    }
]

export const readyLotusMedia = lotusMedia.filter(
    (item): item is ReadyLotusMediaItem =>
        item.availability === "ready" &&
        item.selection === "use" &&
        !item.requiresPublicationApproval
)

export const pendingLotusMedia = lotusMedia.filter(
    (item) => item.availability === "awaiting-original"
)

export function lotusMediaById(id: string): ReadyLotusMediaItem {
    const mediaItem = readyLotusMedia.find((item) => item.id === id)

    if (!mediaItem)
        throw new Error(`Lotus media is not publication-ready: ${id}`)

    return mediaItem
}
