import type { HealthTopic } from "~/types/foldcare"
import {
    translated as t,
    paragraphSection as section,
    editorialLabels
} from "~/data/editorialHelpers"
import { evidenceSources as sources } from "~/data/evidenceSources"

export const mixesGuide: HealthTopic = {
    slug: "mixes",
    icon: "🐾",
    reviewedOn: "2026-10-01",
    eyebrow: editorialLabels.evidence,
    title: t(
        "Scottish Fold mixes",
        "القطط الهجينة ذات النسب الاسكتلندي",
        "Croisements Scottish Fold",
        "苏格兰折耳混种猫"
    ),
    summary: t(
        "Another breed in the family does not automatically remove Fold-associated genetic risk. Start with what is documented, and keep ancestry claims separate from testing.",
        "وجود سلالة أخرى في العائلة لا يلغي تلقائياً الخطر الوراثي المرتبط بالطي. ابدأ بالمعلومات الموثقة وافصل ادعاءات النسب عن الفحص.",
        "Un autre parent de race différente ne supprime pas automatiquement le risque génétique Fold. Commencez par les faits documentés et distinguez ascendance déclarée et tests.",
        "另一方父母属于其他品种，并不会自动消除折耳相关遗传风险。应从有记录的信息开始，把祖先说法与检测结果分开。"
    ),
    sections: [
        section(
            t(
                "Newer genetic evidence",
                "أدلة وراثية أحدث",
                "Données génétiques récentes",
                "较新的遗传证据"
            ),
            t(
                "A 2026 Japanese survey found the variant in cats recorded as American Curl, Munchkin, Norwegian Forest and Minuet. Parentage was not confirmed, and clinical outcomes were not assessed; this is genetic evidence, not a prognosis.",
                "وجد مسح ياباني عام 2026 المتغير لدى قطط مسجلة كأمريكان كيرل ومانشكين وقط الغابة النرويجي ومينويت. لم يُؤكد النسب ولم تُقيّم النتائج السريرية؛ هذا دليل وراثي وليس توقعاً لمصير القط.",
                "Une enquête japonaise de 2026 a détecté le variant chez des chats déclarés American Curl, Munchkin, Norvégien et Minuet. Parentage non confirmé et évolution clinique non évaluée : preuve génétique, pas pronostic.",
                "2026 年日本调查在登记为美国卷耳、曼基康、挪威森林和米努特的猫中发现该变异。亲缘关系未经确认，也未评估临床结局；这是遗传证据，不是预后。"
            )
        ),
        section(
            t(
                "Ancestry is a question, not a diagnosis",
                "النسب سؤال وليس تشخيصاً",
                "L'ascendance est une question, pas un diagnostic",
                "祖先背景是问题，不是诊断"
            ),
            t(
                "A cat with Fold ancestry may inherit the disease-associated TRPV4 variant. A cross name does not tell you whether the cat has zero, one or two copies. Another ear-shape trait may obscure folded ears. Ask what pedigree or genetic evidence exists rather than reading ancestry from a photo.",
                "قد يرث القط ذو النسب الاسكتلندي متغير TRPV4 المرتبط بالمرض. اسم الهجين لا يحدد هل يحمل صفر نسخ أو نسخة أو نسختين. قد تخفي صفة شكل أذن أخرى الطي. اسأل عن دليل النسب أو الفحص بدلاً من استنتاجه من صورة.",
                "Un chat d'ascendance Fold peut hériter du variant TRPV4 associé à la maladie. Le nom du croisement n'indique pas zéro, une ou deux copies. Un autre trait auriculaire peut masquer le pli. Demandez les preuves généalogiques ou génétiques plutôt que de déduire l'ascendance d'une photo.",
                "有折耳祖先的猫可能遗传疾病相关 TRPV4 变异。混种名称不能告诉你有零个、一个还是两个拷贝。其他耳形性状也可能掩盖折耳。应询问血统或遗传证据，不要从照片推断。"
            )
        ),
        section(
            t(
                "What has been documented",
                "ما تم توثيقه",
                "Ce qui a été documenté",
                "已有记录的发现"
            ),
            t(
                "A 2020 case report described severe hind-limb skeletal abnormalities in a Fold × Munchkin and a Fold × American Curl around one year of age. Both were homozygous for the variant. These two cases demonstrate that crossbreeding is not a guarantee against the disease. They do not establish how common this outcome is in either cross or what will happen to a heterozygous cat.",
                "وصف تقرير عام 2020 تغيرات هيكلية شديدة في الطرفين الخلفيين لدى هجين مع مانشكين وآخر مع أمريكان كيرل قرب عمر السنة. حمل كلاهما نسختين من المتغير. يوضحان أن التهجين ليس ضماناً ضد المرض، لكنهما لا يحددان انتشار النتيجة أو مصير قط يحمل نسخة واحدة.",
                "Un rapport de 2020 décrit des anomalies osseuses sévères des membres postérieurs chez un Fold × Munchkin et un Fold × American Curl vers un an. Les deux étaient homozygotes. Cela montre que le croisement ne garantit pas l'absence de maladie, sans en établir la fréquence ni prédire le devenir d'un hétérozygote.",
                "2020 年病例报告描述了一只折耳 × 曼基康与一只折耳 × 美国卷耳猫，在约一岁时出现严重后肢骨骼异常。两者均为纯合。这说明混种不保证避开疾病，但不能说明发生率，也不能预测杂合猫的未来。"
            )
        ),
        section(
            t(
                "Appearance and the other parent",
                "المظهر والسلالة الأخرى",
                "Apparence et autre parent",
                "外形与另一方父母"
            ),
            t(
                "Coat, body shape, ear shape and temperament can vary widely in a mixed litter. The other parent's family history may add separate health questions; it does not predict that every predisposition will be inherited. For limited-evidence crosses, this library does not invent risk percentages, designer names or owner stories.",
                "قد يختلف الفراء وشكل الجسم والأذن والطبع كثيراً بين أفراد الهجين. تاريخ السلالة الأخرى قد يضيف أسئلة صحية مستقلة لكنه لا يعني وراثة كل استعداد. لا يخترع هذا الموقع نسب خطر أو أسماء تجارية أو قصصاً للقطط ذات الأدلة المحدودة.",
                "Pelage, silhouette, oreilles et tempérament varient beaucoup. L'histoire de l'autre famille peut ajouter des questions distinctes sans garantir l'héritage de chaque prédisposition. Pour les croisements peu documentés, nous n'inventons ni pourcentages de risque, ni noms commerciaux, ni récits de propriétaires.",
                "同窝混种猫的毛色、体型、耳形和性格可能差别很大。另一方的家族史可能增加独立健康问题，但不表示每种易感性都会遗传。对于证据有限的混种，本站不编造风险比例、商业品种名或主人故事。"
            )
        )
    ],
    sources: [
        sources.genetics,
        sources.crosses,
        sources.variation,
        sources.highlanderCase,
        sources.crossbreedSurvey
    ]
}

const mixedCatCare = [
    section(
        t(
            "What owners should watch",
            "ما ينبغي للمالك مراقبته",
            "Ce qu'il faut observer",
            "主人应观察什么"
        ),
        t(
            "Compare jumping, walking, play, tail comfort, handling tolerance, grooming and litter-box access with the cat's usual pattern. Repeated vomiting, appetite or weight changes are general cat concerns, not proof of a Fold-related diagnosis. A cat who still runs may still be uncomfortable.",
            "قارن القفز والمشي واللعب وراحة الذيل وتقبل اللمس والتنظيف والوصول للرمل بالمعتاد. القيء وتغير الشهية والوزن مسائل عامة للقطط وليست إثباتاً لتشخيص مرتبط بالطي. قد يشعر القط الذي يركض بالانزعاج أيضاً.",
            "Comparez sauts, marche, jeu, confort de la queue, toucher, toilette et litière aux habitudes. Vomissements, appétit ou poids sont des préoccupations félines générales, pas la preuve d'une maladie Fold. Un chat qui court peut aussi être inconfortable.",
            "将跳跃、走路、玩耍、尾巴舒适度、触碰耐受、梳毛和猫砂盆使用与平常状态比较。反复呕吐、食欲或体重变化是一般猫健康问题，不证明折耳疾病。仍然跑动的猫也可能不舒服。"
        )
    ),
    section(
        t(
            "Care and veterinary discussion",
            "العناية والنقاش مع الطبيب",
            "Soins et discussion vétérinaire",
            "护理与兽医讨论"
        ),
        t(
            "Offer stable steps or ramps, non-slip footing and easy-access essentials. Do not manipulate painful joints or the tail. Discuss the available ancestry records, TRPV4 testing if useful, orthopedic assessment, imaging when indicated and a personalized comfort plan. Bring videos of movement and the other parent's known medical history. New or rapidly worsening weakness needs prompt assessment.",
            "وفر درجات ثابتة أو منحدرات وأرضية غير زلقة واحتياجات سهلة الوصول. لا تتلاعب بالمفاصل المؤلمة أو الذيل. ناقش سجلات النسب وفحص TRPV4 إن أفاد والفحص العظمي والتصوير عند الحاجة وخطة راحة فردية. أحضر فيديو الحركة وتاريخ الوالد الآخر المعروف. الضعف الجديد أو السريع التفاقم يحتاج تقييماً سريعاً.",
            "Proposez marches stables ou rampes, surfaces antidérapantes et ressources accessibles. Ne manipulez pas articulations douloureuses ou queue. Discutez ascendance, test TRPV4 si utile, examen orthopédique, imagerie indiquée et confort individualisé. Apportez des vidéos et les antécédents connus de l'autre parent. Une faiblesse nouvelle ou rapidement aggravée mérite un examen rapide.",
            "提供稳固台阶或坡道、防滑落脚处和易到达的日常用品。不要摆弄疼痛关节或尾巴。讨论祖先记录、有需要时做 TRPV4 检测、骨科评估、必要影像和个体舒适计划。带上活动视频及另一方已知病史。新出现或迅速加重的无力应及时评估。"
        )
    )
]

export const mixProfiles: HealthTopic[] = [
    {
        slug: "scottish-fold-siamese",
        icon: "🐾",
        reviewedOn: "2026-10-01",
        eyebrow: editorialLabels.owner,
        title: t(
            "Scottish Fold × Siamese",
            "اسكتلندي مطوي الأذن × سيامي",
            "Scottish Fold × Siamois",
            "苏格兰折耳 × 暹罗"
        ),
        summary: t(
            "Lotus is our real example, assessed by his veterinarian. His parents, pedigree and TRPV4 genotype are unknown; his experience cannot stand for every cat with this background.",
            "لوتس مثالنا الحقيقي بحسب تقييم طبيبه. والداه ونسبه الموثق ونمط TRPV4 مجهولة؛ تجربته لا تمثل كل قط بهذا النسب.",
            "Lotus est notre exemple réel, évalué par son vétérinaire. Parents, pedigree et génotype TRPV4 restent inconnus ; son vécu ne représente pas tous ces chats.",
            "Lotus 是我们的真实例子，其背景由兽医评估。父母、血统和 TRPV4 基因型未知；他的经历不代表所有这种背景的猫。"
        ),
        sections: [
            section(
                t(
                    "Status and limits of the evidence",
                    "حالة الدليل وحدوده",
                    "Statut et limites des données",
                    "证据状态与局限"
                ),
                t(
                    "This is a veterinarian-assessed owner case, not a genetically confirmed cross or an established designer breed. We have not identified a cross-specific clinical study that estimates outcomes for Fold × Siamese cats. Appearance can vary; coat colour or folded ears alone cannot verify both parents. Siamese ancestry does not cancel the Fold variant if inherited.",
                    "هذه حالة يرويها المالك بتقييم الطبيب وليست هجيناً مؤكداً جينياً ولا سلالة تجارية معتمدة. لم نحدد دراسة خاصة تقدر نتائج هذا الهجين. يختلف المظهر ولا يثبت اللون أو طي الأذن هوية الوالدين. النسب السيامي لا يلغي متغير الطي إذا ورثه القط.",
                    "C'est un cas rapporté par le propriétaire et évalué par le vétérinaire, pas un croisement confirmé génétiquement ni une race reconnue. Nous n'avons pas identifié d'étude clinique spécifique estimant son évolution. L'apparence varie ; couleur ou pli ne vérifient pas les deux parents. L'ascendance siamoise n'annule pas un variant Fold hérité.",
                    "这是主人记录、经兽医评估的个案，不是基因确认的混种或公认商业品种。我们未找到估计折耳 × 暹罗结局的专门临床研究。外形可不同；毛色或折耳不能证实双亲。若遗传折耳变异，暹罗祖先不会将其消除。"
                )
            ),
            section(
                t(
                    "Other-parent questions",
                    "أسئلة عن الوالد الآخر",
                    "Questions sur l'autre parent",
                    "另一方父母的问题"
                ),
                t(
                    "Ask for any available family medical history rather than assigning Lotus every condition associated with Siamese cats. A vet can decide whether a particular history warrants screening. There is no confirmed family history to publish for Lotus.",
                    "اطلب التاريخ الطبي للعائلة إن وجد بدلاً من نسب كل حالة مرتبطة بالسيامي إلى لوتس. يقرر الطبيب إن كان تاريخ معين يستدعي فحصاً. لا يوجد تاريخ عائلي مؤكد لنشره عن لوتس.",
                    "Demandez les antécédents familiaux disponibles sans attribuer à Lotus toutes les maladies associées aux Siamois. Le vétérinaire décide si une histoire justifie un dépistage. Aucun antécédent familial confirmé n'est disponible pour Lotus.",
                    "询问已有家族病史，而不是把所有与暹罗有关的疾病都套在 Lotus 身上。兽医可判断具体病史是否需要筛查。Lotus 没有已确认、可发布的家族病史。"
                )
            ),
            ...mixedCatCare
        ],
        sources: [sources.genetics, sources.variation, sources.crosses]
    },
    {
        slug: "scottish-fold-highlander",
        title: t(
            "Scottish Fold × Highlander",
            "اسكتلندي مطوي الأذن × هايلاندر",
            "Scottish Fold × Highlander",
            "苏格兰折耳 × 高地猫"
        ),
        summary: t(
            "A documented cross with one variant copy, showing why ear shape alone cannot settle genetic status.",
            "هجين موثق يحمل نسخة واحدة، يوضح أن شكل الأذن وحده لا يحدد الحالة الوراثية.",
            "Un croisement documenté avec une copie du variant : la forme des oreilles ne suffit pas.",
            "记录在案的一例混种携带一个变异拷贝，说明耳形不能确定遗传状态。"
        ),
        icon: "🐾",
        reviewedOn: "2026-10-01",
        eyebrow: editorialLabels.evidence,
        sections: [
            section(
                t(
                    "What was reported",
                    "ما ورد في البحث",
                    "Observation publiée",
                    "已报告的发现"
                ),
                t(
                    "A 2022 genetic study reported a Fold × Highlander kitten with one TRPV4 variant copy, backward-curled ears and a shortened stiff tail. One case cannot establish long-term outcomes or prevalence.",
                    "أبلغت دراسة وراثية عام 2022 عن هجين صغير يحمل نسخة واحدة من متغير TRPV4، بأذنين ملتفتين للخلف وذيل قصير متيبس. لا تحدد حالة واحدة النتائج طويلة المدى أو الانتشار.",
                    "Une étude génétique de 2022 rapporte un chaton Fold × Highlander avec une copie du variant TRPV4, des oreilles recourbées et une queue courte rigide. Un cas ne définit ni évolution ni fréquence.",
                    "2022 年遗传研究报告一只折耳 × 高地幼猫携带一个 TRPV4 变异拷贝，耳朵向后卷，尾巴短而僵硬。单例不能确定长期结局或发生率。"
                )
            ),
            section(
                t(
                    "Other-parent history and appearance",
                    "تاريخ الوالد الآخر والمظهر",
                    "Autre parent et apparence",
                    "另一方亲本与外形"
                ),
                t(
                    "Ask for documented family history and a vet's individual screening advice. Different ears, coat or body shape do not establish a healthy skeleton. No owner narrative or licensed profile photo is supplied here.",
                    "اطلب تاريخ العائلة الموثق ونصيحة الطبيب للفحص الفردي. اختلاف الأذن أو الفراء أو الجسم لا يثبت سلامة الهيكل. لا تتوفر هنا قصة مالك أو صورة مرخصة للحالة.",
                    "Demandez les antécédents familiaux et un avis individuel sur le dépistage. Oreilles, pelage ou silhouette ne prouvent pas la santé osseuse. Aucun récit de propriétaire ou photo sous licence n'est fourni.",
                    "询问已记录家族史和兽医的个体筛查建议。不同耳形、毛色或体型不能证明骨骼健康。此处没有额外主人故事或授权病例照片。"
                )
            ),
            ...mixedCatCare
        ],
        sources: [sources.highlanderCase, sources.genetics, sources.variation]
    },
    ...[
        {
            slug: "scottish-fold-munchkin",
            title: t(
                "Scottish Fold × Munchkin",
                "اسكتلندي مطوي الأذن × مانشكين",
                "Scottish Fold × Munchkin",
                "苏格兰折耳 × 曼基康"
            ),
            finding: t(
                "The 2020 paper's first cat had short limbs resembling a Munchkin and forward-folded ears. Radiographs at 12 months showed severe hind-limb exostosis and fused metatarsal bones. Testing found two copies of the Fold-associated TRPV4 variant. The short-limb trait and Fold cartilage disorder are separate questions; this single case cannot measure an interaction or a cross-wide risk.",
                "كانت القطة الأولى في ورقة 2020 قصيرة الأطراف كالمانشكين وبأذنين مطويتين للأمام. أظهرت الأشعة بعمر 12 شهراً نمو عظم شديداً والتحام عظام مشط القدم الخلفية. كشف الفحص نسختين من متغير الطي. صفة قصر الأطراف واضطراب الغضروف مسألتان منفصلتان؛ لا تقيس حالة واحدة التفاعل أو خطر الهجين كله.",
                "Le premier chat du rapport de 2020 avait des membres courts de type Munchkin et des oreilles pliées vers l'avant. À 12 mois, les radiographies montraient de sévères exostoses et des métatarsiens fusionnés. Il portait deux copies du variant Fold. Membres courts et trouble cartilagineux sont des questions distinctes ; un cas ne mesure ni leur interaction ni le risque du croisement.",
                "2020 年论文中的第一只猫四肢短，类似曼基康，耳朵向前折。12 个月时影像显示严重后肢外生骨赘和跖骨融合。检测发现两个折耳相关变异拷贝。短肢性状与折耳软骨问题是独立问题，单个病例不能衡量相互作用或整个混种群体的风险。"
            )
        },
        {
            slug: "scottish-fold-american-curl",
            title: t(
                "Scottish Fold × American Curl",
                "اسكتلندي مطوي الأذن × أمريكان كيرل",
                "Scottish Fold × American Curl",
                "苏格兰折耳 × 美国卷耳"
            ),
            finding: t(
                "The second cat had ears curled backward like an American Curl, rather than the usual forward fold. Around one year old, radiographs showed severe hind-limb exostosis and fused metatarsal bones. It also carried two variant copies. In this case, a different visible ear shape did not exclude the Fold-associated genotype. That does not prove every American Curl cross has the same outcome.",
                "كانت أذنا القطة الثانية ملتفتين للخلف كالأمريكان كيرل بدلاً من الطي المعتاد للأمام. قرب عمر السنة أظهرت الأشعة نمو عظم شديداً والتحام عظام مشط القدم الخلفية. حملت أيضاً نسختين من المتغير. شكل الأذن المختلف لم يستبعد النمط الجيني، لكن ذلك لا يثبت النتيجة نفسها لكل هجين مع أمريكان كيرل.",
                "Le second chat avait les oreilles recourbées vers l'arrière comme l'American Curl, plutôt que pliées vers l'avant. Vers un an, les images montraient de sévères exostoses et des métatarsiens fusionnés. Il portait aussi deux copies. Cette autre forme d'oreille n'excluait pas le génotype Fold, sans prouver une évolution identique chez tous ces croisements.",
                "第二只猫耳朵向后卷，类似美国卷耳而非典型向前折。约一岁时，影像显示严重后肢外生骨赘和跖骨融合，同样带有两个变异拷贝。这个病例中，不同耳形不能排除折耳基因型，但不证明所有美国卷耳混种都会如此。"
            )
        }
    ].map((profile): HealthTopic => ({
        slug: profile.slug,
        title: profile.title,
        icon: "🐾",
        reviewedOn: "2026-10-01",
        eyebrow: editorialLabels.evidence,
        summary: t(
            "A published case, not a prediction: what one homozygous crossbred cat can tell us, and what remains unknown.",
            "حالة منشورة وليست توقعاً: ما تخبرنا به قطة هجينة تحمل نسختين وما يبقى مجهولاً.",
            "Un cas publié, pas une prédiction : ce qu'un chat croisé homozygote nous apprend et ce qui reste inconnu.",
            "已发表的病例，不是预言：一只纯合混种猫提供的线索与未知之处。"
        ),
        sections: [
            section(
                t(
                    "Status: published veterinary case report",
                    "الحالة: تقرير بيطري منشور",
                    "Statut : cas clinique vétérinaire publié",
                    "状态：已发表兽医病例报告"
                ),
                profile.finding
            ),
            section(
                t(
                    "What this does and does not establish",
                    "ما يثبته التقرير وما لا يثبته",
                    "Ce que le rapport établit et ses limites",
                    "证实了什么，以及局限"
                ),
                t(
                    "The report documents a real cross with genetic and radiographic findings. It supports retained Fold-associated risk, not a prevalence estimate, a complete other-parent health profile or a guarantee of identical severity. Mixed-cat appearance varies. There is no separate owner story or licensed profile photo supplied here.",
                    "يوثق التقرير هجيناً حقيقياً مع نتائج جينية وأشعة. يدعم بقاء خطر الطي وليس تقدير الانتشار أو ملفاً كاملاً لصحة الوالد الآخر أو ضمان شدة مماثلة. يختلف مظهر الهجين. لا توجد قصة مالك مستقلة أو صورة مرخصة مقدمة هنا.",
                    "Le rapport documente un vrai croisement avec génétique et radiographies. Il confirme un risque Fold conservé, sans estimer sa fréquence, dresser le bilan complet de l'autre parent ou garantir une gravité identique. L'apparence varie. Aucun autre récit de propriétaire ni photo de profil sous licence n'est fourni ici.",
                    "报告记录了真实混种以及遗传和影像发现，支持折耳相关风险可保留；不能估计发生率、提供另一方全面健康画像或保证严重程度相同。混种外形可不同。这里没有额外主人故事或授权资料照片。"
                )
            ),
            ...mixedCatCare
        ],
        sources: [sources.crosses, sources.genetics, sources.variation]
    }))
]
