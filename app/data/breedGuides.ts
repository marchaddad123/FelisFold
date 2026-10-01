import type { HealthTopic } from "~/types/foldcare"
import {
    translated as t,
    paragraphSection as section,
    editorialLabels
} from "~/data/editorialHelpers"
import { evidenceSources as sources } from "~/data/evidenceSources"

export const breedGuide: HealthTopic = {
    slug: "scottish-fold",
    icon: "🐾",
    reviewedOn: "2026-10-01",
    eyebrow: editorialLabels.evidence,
    title: t(
        "What makes a Scottish Fold different?",
        "ما الذي يميز القط الاسكتلندي مطوي الأذن؟",
        "Qu'est-ce qui distingue le Scottish Fold ?",
        "苏格兰折耳猫有什么不同？"
    ),
    summary: t(
        "Folded ears are a cartilage trait. Understanding the genetics helps you ask better questions about comfort, movement and lifelong care.",
        "الأذن المطوية صفة غضروفية. فهم الوراثة يساعدك على طرح أسئلة أفضل عن الراحة والحركة والعناية طوال الحياة.",
        "Les oreilles pliées sont un trait du cartilage. Comprendre la génétique aide à poser les bonnes questions sur le confort, la mobilité et les soins tout au long de la vie.",
        "折耳是一种软骨性状。了解遗传机制，有助于关注舒适、活动能力和终身护理。"
    ),
    sections: [
        section(
            t(
                "From a Scottish farm cat to a breed",
                "من قط مزرعة اسكتلندية إلى سلالة",
                "D'un chat de ferme écossais à une race",
                "从苏格兰农场猫到一个品种"
            ),
            t(
                "The breed traces its origins to Susie, a folded-ear farm cat found in Scotland in 1961. The ear tips fold forward because the cartilage develops differently. The appeal of that appearance should not obscure the skeletal implications.",
                "تعود السلالة إلى سوزي، قطة مزرعة ذات أذنين مطويتين عُثر عليها في اسكتلندا عام 1961. تنطوي الأذن إلى الأمام بسبب اختلاف نمو الغضروف. جمال المظهر لا ينبغي أن يحجب تأثيراته على الهيكل العظمي.",
                "La race remonte à Susie, une chatte de ferme aux oreilles pliées découverte en Écosse en 1961. Les oreilles se replient vers l'avant car le cartilage se développe différemment. Cet aspect ne doit pas faire oublier les implications osseuses.",
                "这一品种源于 1961 年在苏格兰发现的折耳农场猫 Susie。软骨发育的差异使耳朵向前折。外形的吸引力不应掩盖骨骼健康问题。"
            )
        ),
        section(
            t(
                "TRPV4: one copy or two",
                "TRPV4: نسخة واحدة أم نسختان",
                "TRPV4 : une ou deux copies",
                "TRPV4：一个或两个拷贝"
            ),
            t(
                "The disease-associated c.1024G>T variant of TRPV4 affects cartilage and bone, not just ears. Heterozygous means one variant copy; homozygous means two. Two copies are associated with more severe skeletal disease. One copy does not remove the risk.",
                "يؤثر متغير TRPV4 المرتبط بالمرض c.1024G>T على الغضاريف والعظام وليس الأذنين فقط. متغاير الزيجوت يعني نسخة واحدة، ومتماثل الزيجوت يعني نسختين. ترتبط النسختان بمرض هيكلي أشد، لكن نسخة واحدة لا تلغي الخطر.",
                "Le variant TRPV4 c.1024G>T associé à la maladie touche le cartilage et les os, pas seulement les oreilles. Hétérozygote signifie une copie du variant ; homozygote, deux. Deux copies sont associées à une atteinte osseuse plus sévère. Une copie n'annule pas le risque.",
                "与疾病相关的 TRPV4 c.1024G>T 变异影响软骨和骨骼，而不仅是耳朵。杂合表示一个变异拷贝，纯合表示两个。两个拷贝与更严重的骨骼疾病有关；一个拷贝也不意味着没有风险。"
            )
        ),
        section(
            t(
                "Scottish Straight and straight ears",
                "القط الاسكتلندي مستقيم الأذن",
                "Scottish Straight et oreilles droites",
                "苏格兰立耳猫与直立耳朵"
            ),
            t(
                "Scottish Straights belong to the same breed family but have upright ears. UC Davis describes cats without this Fold variant as having normal ears. Ancestry, appearance and genotype are different pieces of information: in mixed cats, another ear trait can hide the usual Fold appearance. A genetic test is more informative than guessing from a photograph.",
                "ينتمي الاسكتلندي مستقيم الأذن إلى عائلة السلالة نفسها. تصف جامعة كاليفورنيا ديفيس القطط التي لا تحمل هذا المتغير بأن أذنيها طبيعيتان. النسب والمظهر والنمط الجيني معلومات مختلفة؛ وفي القطط الهجينة قد تخفي صفة أذن أخرى مظهر الطي المعتاد. الفحص الجيني أدق من تخمين الصورة.",
                "Les Scottish Straights appartiennent à la même famille de race mais ont les oreilles droites. UC Davis décrit les chats sans ce variant comme ayant des oreilles normales. Ascendance, aspect et génotype sont distincts : chez un croisement, un autre trait auriculaire peut masquer le pli habituel. Un test génétique renseigne mieux qu'une photo.",
                "苏格兰立耳猫属于同一品种家族，但耳朵直立。UC Davis 将不带此变异的猫描述为正常耳形。祖先、外形和基因型是不同的信息；混种猫的其他耳形性状可能掩盖典型折耳。基因检测比看照片猜测更可靠。"
            )
        ),
        section(
            t(
                "Osteochondrodysplasia and variation",
                "خلل نمو العظام والغضاريف وتفاوت الشدة",
                "Ostéochondrodysplasie et variabilité",
                "骨软骨发育不良与个体差异"
            ),
            t(
                "Osteochondrodysplasia means abnormal development of cartilage and bone. It can affect limbs, paws, joints and the tail. A 2021 blinded radiographic survey of 22 cats found milder changes in its 10 heterozygous Folds than earlier reports. A small 2023 study also found variable clinical and radiographic findings. Neither small study predicts an individual cat's lifelong course or proves absence of pain.",
                "خلل نمو العظام والغضاريف قد يصيب الأطراف والأقدام والمفاصل والذيل. وجدت دراسة أشعة معماة عام 2021 شملت 22 قطاً تغيرات أخف لدى القطط المطوية العشرة متغايرة الزيجوت مقارنة بتقارير سابقة. ووجدت دراسة صغيرة عام 2023 تفاوتاً في العلامات السريرية والأشعة. لا تتنبأ أي منهما بمسار حياة قط بعينه ولا تثبت غياب الألم.",
                "L'ostéochondrodysplasie est un développement anormal du cartilage et des os pouvant toucher membres, pattes, articulations et queue. Une étude radiographique en aveugle de 2021 sur 22 chats a trouvé des changements plus légers chez ses 10 Folds hétérozygotes que dans les rapports antérieurs. Une petite étude de 2023 a aussi montré des résultats variables. Elles ne prédisent ni l'évolution individuelle à vie ni l'absence de douleur.",
                "骨软骨发育不良指软骨和骨骼发育异常，可影响四肢、爪、关节和尾巴。2021 年一项对 22 只猫进行的盲法影像研究发现，其中 10 只杂合折耳猫的变化比早期报告更轻。2023 年的一项小型研究也发现临床和影像表现不同。这些小样本研究不能预测每只猫的终身发展，也不能证明没有疼痛。"
            )
        ),
        section(
            t(
                "Pedigree Folds: care beyond the ears",
                "القطط ذات النسب الموثق: العناية تتجاوز الأذنين",
                "Folds de pedigree : au-delà des oreilles",
                "纯种折耳猫：护理不止关注耳朵"
            ),
            t(
                "A pedigree is not a health guarantee. Watch changes in jumping, gait, paws, tail flexibility, handling tolerance, grooming and litter-box access. Maintain an appropriate weight, offer easy routes around the home and discuss orthopedic examination, imaging and pain management with your vet when indicated. Comfort and quality of life matter more than the breed label.",
                "النسب الموثق ليس ضماناً للصحة. راقب تغير القفز والمشية والأقدام ومرونة الذيل وتقبل اللمس والتنظيف والوصول إلى الرمل. حافظ على وزن مناسب ووفر مسارات سهلة، وناقش الفحص العظمي والتصوير وعلاج الألم مع الطبيب عند الحاجة. الراحة وجودة الحياة أهم من اسم السلالة.",
                "Un pedigree ne garantit pas la santé. Surveillez sauts, démarche, pattes, souplesse de la queue, tolérance au toucher, toilette et accès à la litière. Maintenez un poids adapté, facilitez les déplacements et discutez examen orthopédique, imagerie et traitement de la douleur avec le vétérinaire si nécessaire. Confort et qualité de vie passent avant l'étiquette de race.",
                "血统证书不能保证健康。关注跳跃、步态、爪、尾巴灵活性、触碰耐受、梳毛和猫砂盆使用的变化。保持合适体重，提供易走的路线，并在需要时与兽医讨论骨科检查、影像和疼痛管理。舒适与生活质量比品种标签更重要。"
            )
        ),
        section(
            t(
                "Growing up: observations, not a fixed disease timeline",
                "النمو: ملاحظات وليست جدولاً ثابتاً للمرض",
                "Grandir : observer, sans calendrier de maladie imposé",
                "成长：观察变化，而不是固定病程"
            ),
            t(
                "Kitten: establish a baseline for play, movement, growth and comfortable handling. Young adult: compare jumping and grooming with that baseline. Adult: review weight, dental health and new movement changes. Older cat: discuss more frequent checks and kidney, heart and other age-related concerns with your vet. Fold-related signs may appear early or later; age alone cannot rule them in or out. Preventive care continues even on good days.",
                "في الصغر: تعرف إلى نمط اللعب والحركة والنمو واللمس المريح. في الشباب: قارن القفز والتنظيف بهذا النمط. في البلوغ: راجع الوزن والأسنان وتغير الحركة. مع التقدم بالعمر: ناقش فحوصاً أكثر وتقييم الكلى والقلب والمشكلات العمرية مع الطبيب. قد تظهر علامات الطي مبكراً أو لاحقاً؛ العمر وحده لا يؤكدها ولا ينفيها. تستمر الوقاية حتى في الأيام الجيدة.",
                "Chaton : établissez un repère pour le jeu, la mobilité, la croissance et le toucher confortable. Jeune adulte : comparez sauts et toilette à ce repère. Adulte : suivez poids, dents et changements de mobilité. Plus âgé : discutez de contrôles plus fréquents et des préoccupations rénales, cardiaques et liées à l'âge. Les signes Fold peuvent apparaître tôt ou tard ; l'âge seul ne permet ni de les confirmer ni de les exclure. La prévention continue même les bons jours.",
                "幼猫：建立玩耍、活动、成长和舒适触碰的基线。年轻成猫：比较跳跃与梳毛是否改变。成年猫：关注体重、牙齿和活动变化。老年猫：与兽医讨论更频繁的检查以及肾脏、心脏和其他年龄相关问题。折耳相关症状可能早也可能晚出现；年龄本身不能确认或排除问题。状态好的日子也需要预防保健。"
            )
        )
    ],
    sources: [
        sources.breedHistory,
        sources.genetics,
        sources.variation,
        sources.followUp,
        sources.crosses,
        sources.lifeStages
    ]
}

export const startHereGuide: HealthTopic = {
    slug: "start-here",
    icon: "🐾",
    reviewedOn: "2026-10-01",
    eyebrow: editorialLabels.evidence,
    title: editorialLabels.start,
    summary: t(
        "A calm first-week checklist: know your cat, arrange preventive care, make home accessible and learn the signs that need help.",
        "قائمة هادئة للأسبوع الأول: تعرف إلى قطك، نظم الوقاية، سهل الوصول في المنزل وتعلم العلامات التي تستدعي المساعدة.",
        "Une première semaine sereine : connaître votre chat, organiser la prévention, faciliter la maison et reconnaître les signes qui nécessitent de l'aide.",
        "平静度过第一周：了解猫咪、安排预防保健、改善家中可达性，并认识需要求助的迹象。"
    ),
    sections: [
        section(
            t(
                "1. Give your cat a quiet place to settle",
                "1. وفر مكاناً هادئاً للتأقلم",
                "1. Prévoir un endroit calme",
                "1. 提供安静的适应空间"
            ),
            t(
                "Keep food, water, a resting place and a low-entry litter box easy to reach. Introduce the home and other animals gradually. Ask the previous carer what food the cat already eats; avoid changing everything at once.",
                "اجعل الغذاء والماء ومكان الراحة وصندوق الرمل منخفض المدخل سهلة الوصول. قدم المنزل والحيوانات الأخرى تدريجياً. اسأل المالك السابق عن الغذاء المعتاد ولا تغير كل شيء مرة واحدة.",
                "Rendez accessibles nourriture, eau, couchage et litière à entrée basse. Présentez progressivement la maison et les autres animaux. Demandez l'alimentation habituelle à la personne précédente ; évitez de tout changer à la fois.",
                "让食物、水、休息处和低入口猫砂盆容易到达。逐渐介绍新环境和其他动物。询问此前照护者猫咪的日常食物，不要同时改变一切。"
            )
        ),
        section(
            t(
                "2. Arrange a veterinary introduction",
                "2. رتب زيارة تعريفية للطبيب",
                "2. Organiser un premier rendez-vous vétérinaire",
                "2. 安排初次兽医检查"
            ),
            t(
                "Bring vaccination, parasite-treatment and medical records, if available. Discuss age, growth, dental care, body condition, neutering and an individualized preventive plan. Mention Fold ancestry and ask about movement and tail comfort. Unknown parents or pedigree should stay recorded as unknown.",
                "أحضر سجلات اللقاحات والطفيليات والعلاج إن وجدت. ناقش العمر والنمو والأسنان وحالة الجسم والتعقيم وخطة وقاية فردية. اذكر النسب الاسكتلندي واسأل عن الحركة وراحة الذيل. إذا كان الأبوان أو النسب مجهولين فسجلهما كذلك.",
                "Apportez les dossiers de vaccination, antiparasitaires et soins disponibles. Discutez âge, croissance, dents, état corporel, stérilisation et prévention individualisée. Mentionnez l'ascendance Fold et le confort de la mobilité et de la queue. Des parents ou un pedigree inconnus restent inconnus.",
                "带上已有疫苗、驱虫和医疗记录。讨论年龄、成长、牙齿、体况、绝育和个体预防计划。说明折耳祖先情况，询问活动和尾巴是否舒适。父母或血统未知，就如实记录为未知。"
            )
        ),
        section(
            t(
                "3. Notice the normal before looking for changes",
                "3. تعرف إلى المعتاد لتلاحظ التغير",
                "3. Connaître les habitudes pour repérer les changements",
                "3. 先了解平常状态，再识别变化"
            ),
            t(
                "Observe walking, play, jumping up and down, appetite, stool, urination and grooming. Short videos can give your vet useful context. Do not bend the tail or force a jump to test it. A playful kitten does not guarantee a symptom-free adult life.",
                "لاحظ المشي واللعب والقفز صعوداً ونزولاً والشهية والبراز والتبول والتنظيف. قد تفيد الفيديوهات القصيرة الطبيب. لا تثنِ الذيل ولا تفرض قفزة لاختباره. نشاط الصغير لا يضمن غياب الأعراض في البلوغ.",
                "Observez marche, jeu, sauts vers le haut et le bas, appétit, selles, urines et toilette. De courtes vidéos donnent du contexte au vétérinaire. Ne pliez pas la queue et ne forcez pas un saut pour tester. Un chaton joueur ne garantit pas une vie adulte sans symptômes.",
                "观察走路、玩耍、跳上跳下、食欲、排便、排尿和梳毛。短视频能为兽医提供背景。不要弯尾巴或强迫跳跃来测试。幼猫爱玩不保证成年后始终没有症状。"
            )
        ),
        section(
            t(
                "4. Choose complete food and learn the warning signs",
                "4. اختر غذاءً متكاملاً وتعلم علامات الخطر",
                "4. Choisir une alimentation complète et connaître les alertes",
                "4. 选择完整食物并认识警示迹象"
            ),
            t(
                "Use complete feline food appropriate to life stage, with fresh water always available. Check the nutrition and veterinary guidance below. Trouble breathing, collapse or straining without passing urine needs immediate veterinary help; do not wait for a scheduled introductory visit.",
                "استخدم غذاءً متكاملاً للقطط مناسباً للعمر مع ماء نظيف دائماً. راجع أدلة الغذاء والطبيب أدناه. صعوبة التنفس أو الانهيار أو محاولة التبول دون خروج بول تستدعي مساعدة فورية؛ لا تنتظر الزيارة المقررة.",
                "Choisissez un aliment complet pour chat adapté au stade de vie et laissez de l'eau fraîche disponible. Consultez les guides ci-dessous. Difficulté à respirer, effondrement ou efforts sans émission d'urine nécessitent une aide immédiate ; n'attendez pas le premier rendez-vous prévu.",
                "选择适合生命阶段的完整猫粮，随时提供清洁饮水。阅读下方营养和就医指南。呼吸困难、倒下或用力却排不出尿，需要立即求助兽医，不要等预约的初次检查。"
            )
        )
    ],
    sources: [
        sources.lifeStages,
        sources.genetics,
        sources.feeding,
        sources.emergency
    ]
}
