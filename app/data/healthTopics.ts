import type { HealthTopic, LanguageCode, LocalizedText } from "~/types/foldcare"

const localizedText = (
    en: string,
    ar: string,
    fr: string,
    zh: string
): LocalizedText => ({ en, ar, fr, zh })

const localizedParagraphs = (
    en: string[],
    ar: string[],
    fr: string[],
    zh: string[]
): Record<LanguageCode, string[]> => ({ en, ar, fr, zh })

const localizedBullets = (
    en: string[],
    ar: string[],
    fr: string[],
    zh: string[]
): Record<LanguageCode, string[]> => ({ en, ar, fr, zh })

export const healthTopicGroups: Record<string, string[]> = {
    mobility: [
        "osteochondrodysplasia",
        "pain-and-mobility",
        "weight-and-quality-of-life"
    ],
    digestion: ["vomiting", "ears-and-grooming", "weight-and-quality-of-life"],
    daily: ["ears-and-grooming", "weight-and-quality-of-life", "heart-health"],
    vet: ["pkd", "heart-health", "when-to-call-a-vet"]
}

export const healthTopics: HealthTopic[] = [
    {
        slug: "osteochondrodysplasia",
        icon: "🦴",
        eyebrow: localizedText(
            "Core Fold health",
            "صحة Scottish Fold الأساسية",
            "Santé essentielle du Fold",
            "折耳猫核心健康"
        ),
        title: localizedText(
            "Bones, joints & the Fold gene",
            "العظام والمفاصل وجين الأذن المطوية",
            "Os, articulations et gène Fold",
            "骨骼、关节与折耳基因"
        ),
        summary: localizedText(
            "What the TRPV4 Fold variant can do to cartilage, joints, paws and the tail — and what chronic pain can look like.",
            "كيف يمكن لمتغيّر TRPV4 أن يؤثر على الغضاريف والمفاصل والأقدام والذيل، وكيف قد يظهر الألم المزمن.",
            "Comment le variant TRPV4 peut toucher le cartilage, les articulations, les pattes et la queue, et à quoi peut ressembler une douleur chronique.",
            "TRPV4 折耳变异如何影响软骨、关节、爪子和尾巴，以及慢性疼痛可能是什么样子。"
        ),
        tag: localizedText(
            "Core topic",
            "موضوع أساسي",
            "Sujet clé",
            "核心主题"
        ),
        reviewedOn: "2026-09-28",
        sections: [
            {
                heading: localizedText(
                    "What is happening?",
                    "ما الذي يحدث؟",
                    "Que se passe-t-il ?",
                    "到底发生了什么？"
                ),
                paragraphs: localizedParagraphs(
                    [
                        "The same TRPV4 variant that folds the ears can also affect cartilage and bone elsewhere in the body. One copy can be enough to create the Fold ear shape, while two copies are linked with more severe skeletal disease.",
                        "Severity varies a lot between cats. A Fold can still run, play and have good days while also living with painful joint disease."
                    ],
                    [
                        "متغيّر TRPV4 نفسه الذي يسبب شكل الأذن المطوية يمكن أن يؤثر أيضاً على الغضاريف والعظام في أماكن أخرى من الجسم. نسخة واحدة قد تكفي لظهور الأذن المطوية، بينما ترتبط نسختان بمشاكل هيكلية أشد.",
                        "تختلف الشدة كثيراً بين القطط. قد يركض القط ويلعب وتكون لديه أيام جيدة، ومع ذلك يعاني من ألم في المفاصل."
                    ],
                    [
                        "Le même variant TRPV4 qui plie les oreilles peut aussi toucher le cartilage et les os ailleurs dans le corps. Une seule copie peut suffire pour les oreilles pliées, tandis que deux copies sont associées à une maladie osseuse plus sévère.",
                        "La gravité varie beaucoup. Un Fold peut encore courir, jouer et avoir de bonnes journées tout en vivant avec une douleur articulaire."
                    ],
                    [
                        "让耳朵折下来的同一个 TRPV4 变异，也会影响身体其他部位的软骨和骨骼。一个拷贝就可能形成折耳，而两个拷贝与更严重的骨骼问题有关。",
                        "不同猫的严重程度差异很大。猫咪仍然会跑、会玩、有状态好的日子，并不代表它没有关节疼痛。"
                    ]
                ),
                tone: "lilac"
            },
            {
                heading: localizedText(
                    "Signs owners may notice",
                    "علامات قد يلاحظها المالك",
                    "Signes que l'on peut remarquer",
                    "主人可能注意到的迹象"
                ),
                paragraphs: localizedParagraphs(
                    [
                        "Cats often hide chronic pain, so changes at home can matter more than dramatic limping."
                    ],
                    [
                        "القطط غالباً ما تخفي الألم المزمن، لذلك قد تكون التغيّرات اليومية في المنزل أهم من العرج الواضح."
                    ],
                    [
                        "Les chats cachent souvent la douleur chronique. Les petits changements à la maison peuvent donc être plus utiles qu'une boiterie spectaculaire."
                    ],
                    [
                        "猫很会隐藏慢性疼痛，因此家里的细小行为变化有时比明显跛行更重要。"
                    ]
                ),
                bullets: localizedBullets(
                    [
                        "Less jumping or hesitation before jumping",
                        "Using chairs, boxes or furniture as intermediate steps",
                        "Stiffness after rest or shorter strides",
                        "Discomfort when paws, legs, hips or tail are handled",
                        "A thick, rigid or painful tail",
                        "Less play, climbing or grooming"
                    ],
                    [
                        "قفز أقل أو تردد قبل القفز",
                        "استخدام الكراسي أو الأثاث كخطوات وسيطة",
                        "تيبّس بعد الراحة أو خطوات أقصر",
                        "انزعاج عند لمس الأقدام أو الأرجل أو الوركين أو الذيل",
                        "ذيل سميك أو قاسٍ أو مؤلم",
                        "لعب أو تسلق أو تنظيف ذاتي أقل"
                    ],
                    [
                        "Moins de sauts ou hésitation avant de sauter",
                        "Utilisation de meubles comme étapes intermédiaires",
                        "Raideur après le repos ou pas plus courts",
                        "Inconfort lorsqu'on touche les pattes, les hanches ou la queue",
                        "Queue épaisse, rigide ou douloureuse",
                        "Moins de jeu, d'escalade ou de toilettage"
                    ],
                    [
                        "跳跃减少或跳之前犹豫",
                        "用椅子、箱子或家具分段上去",
                        "休息后僵硬或步幅变短",
                        "触碰爪子、腿、髋部或尾巴时不舒服",
                        "尾巴粗、僵硬或疼痛",
                        "玩耍、攀爬或梳理毛发减少"
                    ]
                ),
                tone: "sage"
            },
            {
                heading: localizedText(
                    "How a vet can investigate",
                    "كيف يمكن للطبيب البيطري التحقيق",
                    "Comment le vétérinaire peut explorer",
                    "兽医会怎样检查"
                ),
                paragraphs: localizedParagraphs(
                    [
                        "A hands-on orthopedic exam can assess the paws, wrists, hocks, spine, hips and tail. Radiographs can show malformed bones, osteoarthritis or extra bone growth. DNA testing can confirm the Fold-associated TRPV4 variant, but a DNA result does not measure pain."
                    ],
                    [
                        "يمكن للفحص العظمي تقييم الأقدام والرسغين والعرقوب والعمود الفقري والوركين والذيل. قد تُظهر الأشعة تشوهات في العظام أو التهاب مفاصل أو نمو عظم إضافي. فحص الحمض النووي يؤكد متغيّر TRPV4 لكنه لا يقيس مقدار الألم."
                    ],
                    [
                        "Un examen orthopédique peut évaluer les pattes, poignets, jarrets, colonne, hanches et queue. Les radiographies peuvent montrer des malformations, de l'arthrose ou des excroissances osseuses. Le test ADN confirme le variant TRPV4 mais ne mesure pas la douleur."
                    ],
                    [
                        "骨科体检可以检查爪子、腕部、跗关节、脊柱、髋部和尾巴。X 光可显示骨骼畸形、骨关节炎或异常骨增生。DNA 检测可确认 TRPV4 折耳变异，但不能告诉你疼痛有多重。"
                    ]
                )
            },
            {
                heading: localizedText(
                    "Treatment goal",
                    "هدف العلاج",
                    "Objectif du traitement",
                    "治疗目标"
                ),
                paragraphs: localizedParagraphs(
                    [
                        "There is no treatment that removes the Fold gene or reverses established skeletal changes. Care focuses on comfort, mobility and quality of life: appropriate pain control, weight management, easier access around the home, and specialist treatment when needed."
                    ],
                    [
                        "لا يوجد علاج يزيل جين Fold أو يعكس التغيّرات العظمية الموجودة. الهدف هو الراحة والحركة وجودة الحياة عبر السيطرة المناسبة على الألم، والحفاظ على وزن مناسب، وتسهيل الحركة في المنزل، والعلاج التخصصي عند الحاجة."
                    ],
                    [
                        "Aucun traitement ne supprime le gène Fold ni ne renverse les lésions osseuses installées. Les soins visent le confort, la mobilité et la qualité de vie : contrôle de la douleur, poids adapté, environnement plus facile et soins spécialisés si nécessaire."
                    ],
                    [
                        "目前没有办法去掉折耳基因或逆转已经形成的骨骼改变。护理重点是舒适、活动能力和生活质量：合理止痛、控制体重、让家里更容易活动，并在需要时接受专科治疗。"
                    ]
                ),
                tone: "peach"
            }
        ],
        sources: [
            {
                name: "Scottish Fold — TRPV4 genetic test",
                organization: "UC Davis Veterinary Genetics Laboratory",
                url: "https://vgl.ucdavis.edu/test/scottish-fold"
            },
            {
                name: "Osteochondrodysplasia and the c.1024G>T variant of TRPV4 gene in Scottish Fold cats",
                organization: "Journal of Feline Medicine and Surgery, 2023",
                url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10811760/"
            },
            {
                name: "2024 ISFM and AAFP consensus guidelines on long-term NSAID use in cats",
                organization: "Journal of Feline Medicine and Surgery",
                url: "https://journals.sagepub.com/doi/10.1177/1098612X241241951"
            }
        ]
    },
    {
        slug: "pain-and-mobility",
        icon: "🐾",
        eyebrow: localizedText(
            "Movement & comfort",
            "الحركة والراحة",
            "Mobilité et confort",
            "活动与舒适"
        ),
        title: localizedText(
            "Pain, mobility & jumping",
            "الألم والحركة والقفز",
            "Douleur, mobilité et sauts",
            "疼痛、活动与跳跃"
        ),
        summary: localizedText(
            "How chronic joint pain can change jumping, stairs, grooming and everyday behaviour — even when a cat still plays sometimes.",
            "كيف يمكن لألم المفاصل المزمن أن يغيّر القفز والسلالم والتنظيف والسلوك اليومي حتى لو كان القط لا يزال يلعب أحياناً.",
            "Comment la douleur articulaire chronique peut changer les sauts, les escaliers, le toilettage et le comportement quotidien, même si le chat joue encore parfois.",
            "慢性关节痛如何改变跳跃、上下高处、梳理毛发和日常行为，即使猫有时还会玩。"
        ),
        reviewedOn: "2026-09-28",
        sections: [
            {
                heading: localizedText(
                    "Pain can be quiet",
                    "الألم قد يكون صامتاً",
                    "La douleur peut être discrète",
                    "疼痛可能很安静"
                ),
                paragraphs: localizedParagraphs(
                    [
                        "Cats often adapt instead of crying. A smaller jump, a new route to the sofa, sleeping more, or refusing to be picked up can be meaningful changes."
                    ],
                    [
                        "القطط غالباً تتأقلم بدلاً من الصراخ. قفزة أصغر، طريق جديد إلى الكنبة، نوم أكثر، أو رفض الحمل قد تكون تغيّرات مهمة."
                    ],
                    [
                        "Les chats s'adaptent souvent au lieu de vocaliser. Un saut plus petit, un nouveau chemin vers le canapé, plus de sommeil ou le refus d'être porté peuvent être significatifs."
                    ],
                    [
                        "猫往往会适应疼痛，而不是叫出来。跳得更低、换路线爬上沙发、睡得更多或不愿被抱，都可能有意义。"
                    ]
                ),
                tone: "lilac"
            },
            {
                heading: localizedText(
                    "Make the home easier",
                    "اجعل المنزل أسهل",
                    "Rendre la maison plus facile",
                    "让家里更容易活动"
                ),
                paragraphs: localizedParagraphs(
                    [
                        "Use stable intermediate steps or ramps, non-slip surfaces, a low-entry litter box, and comfortable resting places. The goal is not to stop movement; it is to reduce painful effort."
                    ],
                    [
                        "استخدم خطوات ثابتة أو منحدرات، وأس surfaces غير زلقة، وصندوق رمل بمدخل منخفض، وأماكن راحة مريحة. الهدف ليس منع الحركة بل تقليل الجهد المؤلم."
                    ],
                    [
                        "Utilisez des marches stables ou des rampes, des surfaces antidérapantes, un bac à litière bas et des zones de repos confortables. Le but n'est pas d'empêcher le mouvement, mais de réduire l'effort douloureux."
                    ],
                    [
                        "可以使用稳固的小台阶或坡道、防滑地面、低入口猫砂盆和舒适的休息位置。目标不是让猫不动，而是减少疼痛的用力。"
                    ]
                ),
                tone: "sage"
            },
            {
                heading: localizedText(
                    "Pain treatment is individual",
                    "علاج الألم فردي",
                    "Le traitement de la douleur est individuel",
                    "止痛需要个体化"
                ),
                paragraphs: localizedParagraphs(
                    [
                        "Modern feline pain care can include environmental changes, veterinarian-selected anti-inflammatory medicine, anti-NGF treatment such as frunevetmab, and other multimodal strategies. A vet should choose the plan after checking the cat's overall health."
                    ],
                    [
                        "قد تشمل رعاية الألم تغييرات في البيئة وأدوية مضادة للالتهاب يختارها الطبيب وعلاجات anti-NGF مثل frunevetmab وأساليب أخرى متعددة. يجب أن يختار الطبيب الخطة بعد تقييم صحة القط كاملة."
                    ],
                    [
                        "La prise en charge moderne peut inclure des adaptations de l'environnement, des anti-inflammatoires choisis par le vétérinaire, un traitement anti-NGF comme le frunevetmab et d'autres approches multimodales. Le plan doit être personnalisé après bilan de santé."
                    ],
                    [
                        "现代猫疼痛管理可包括环境调整、兽医选择的抗炎药、frunevetmab 等 anti-NGF 治疗，以及其他多模式方案。具体方案应由兽医在评估整体健康后决定。"
                    ]
                )
            }
        ],
        sources: [
            {
                name: "2024 ISFM and AAFP consensus guidelines on long-term NSAID use in cats",
                organization: "Journal of Feline Medicine and Surgery",
                url: "https://journals.sagepub.com/doi/10.1177/1098612X241241951"
            },
            {
                name: "Scottish Fold — TRPV4 genetic test",
                organization: "UC Davis Veterinary Genetics Laboratory",
                url: "https://vgl.ucdavis.edu/test/scottish-fold"
            }
        ]
    },
    {
        slug: "vomiting",
        icon: "🍽️",
        eyebrow: localizedText(
            "Stomach & gut",
            "المعدة والجهاز الهضمي",
            "Estomac et intestin",
            "胃肠道"
        ),
        title: localizedText(
            "Vomiting, hairballs & the gut",
            "القيء وكرات الشعر والجهاز الهضمي",
            "Vomissements, boules de poils et intestin",
            "呕吐、毛球与胃肠道"
        ),
        summary: localizedText(
            "How to tell vomiting from regurgitation, what frequent episodes can mean, and what information helps your vet.",
            "كيف تفرّق بين القيء والارتجاع، وما الذي قد يعنيه تكرار الحوادث، وما المعلومات التي تساعد الطبيب البيطري.",
            "Comment distinguer vomissement et régurgitation, ce que des épisodes fréquents peuvent signifier et quelles informations aident le vétérinaire.",
            "如何区分呕吐和反流、频繁发生可能意味着什么，以及哪些记录能帮助兽医。"
        ),
        tag: localizedText(
            "Lotus topic",
            "موضوع مرتبط بلوتس",
            "Sujet Lotus",
            "Lotus 主题"
        ),
        reviewedOn: "2026-09-28",
        sections: [
            {
                heading: localizedText(
                    "Vomiting or regurgitation?",
                    "قيء أم ارتجاع؟",
                    "Vomissement ou régurgitation ?",
                    "呕吐还是反流？"
                ),
                paragraphs: localizedParagraphs(
                    [
                        "Vomiting is usually active: nausea, repeated swallowing or retching, and abdominal effort. Regurgitation is more passive and often brings up undigested food soon after eating."
                    ],
                    [
                        "القيء غالباً عملية نشطة تتضمن غثياناً وبلعاً متكرراً أو محاولة للتقيؤ وجهداً في البطن. الارتجاع أكثر سلبية وغالباً يعيد طعاماً غير مهضوم بعد الأكل بقليل."
                    ],
                    [
                        "Le vomissement est généralement actif : nausée, déglutitions répétées, haut-le-cœur et contractions abdominales. La régurgitation est plus passive et survient souvent peu après le repas avec des aliments non digérés."
                    ],
                    [
                        "呕吐通常是主动过程，会出现恶心、反复吞咽、干呕和腹部用力。反流更被动，常在进食后不久出现，食物往往未消化。"
                    ]
                ),
                tone: "sky"
            },
            {
                heading: localizedText(
                    "Frequent vomiting is not automatically a hairball problem",
                    "القيء المتكرر ليس تلقائياً مشكلة كرات شعر",
                    "Des vomissements fréquents ne sont pas automatiquement des boules de poils",
                    "频繁呕吐不能自动归因于毛球"
                ),
                paragraphs: localizedParagraphs(
                    [
                        "Hair can trigger vomiting, but repeated vomiting can also occur with intestinal inflammation, food-responsive disease, parasites, pancreatitis, metabolic disease, obstruction and other conditions. Cornell advises veterinary evaluation when vomiting happens more than about once a week or comes with other concerning signs."
                    ],
                    [
                        "قد يسبب الشعر القيء، لكن التكرار قد يحدث أيضاً بسبب التهاب الأمعاء أو مشاكل مرتبطة بالغذاء أو الطفيليات أو التهاب البنكرياس أو أمراض استقلابية أو انسداد وغيرها. توصي Cornell بالتقييم البيطري عندما يتكرر القيء أكثر من نحو مرة أسبوعياً أو ترافقه علامات مقلقة."
                    ],
                    [
                        "Les poils peuvent provoquer des vomissements, mais des épisodes répétés peuvent aussi être liés à une inflammation intestinale, une maladie répondant à l'alimentation, des parasites, une pancréatite, une maladie métabolique, une obstruction ou autre. Cornell conseille une évaluation vétérinaire lorsque les vomissements dépassent environ une fois par semaine ou s'accompagnent d'autres signes inquiétants."
                    ],
                    [
                        "毛发确实会引起呕吐，但反复呕吐也可能与肠道炎症、食物相关疾病、寄生虫、胰腺炎、代谢性疾病、梗阻等有关。Cornell 建议，如果呕吐频率超过大约每周一次，或伴有其他异常，应让兽医评估。"
                    ]
                ),
                tone: "peach"
            },
            {
                heading: localizedText(
                    "What to record",
                    "ماذا تسجّل؟",
                    "Quoi noter ?",
                    "应该记录什么？"
                ),
                paragraphs: localizedParagraphs(
                    [
                        "A short video of an episode can help distinguish vomiting from regurgitation. A simple log can reveal patterns that are hard to remember."
                    ],
                    [
                        "قد يساعد فيديو قصير للحادثة على التفريق بين القيء والارتجاع. وسجل بسيط قد يكشف أنماطاً يصعب تذكرها."
                    ],
                    [
                        "Une courte vidéo d'un épisode peut aider à distinguer vomissement et régurgitation. Un journal simple peut révéler des tendances difficiles à mémoriser."
                    ],
                    [
                        "拍一小段发作视频有助于区分呕吐和反流。简单日志也能发现平时很难靠记忆看出的规律。"
                    ]
                ),
                bullets: localizedBullets(
                    [
                        "Time since the last meal",
                        "Portion size and eating speed",
                        "Food, foam, bile, hair or blood",
                        "Body-weight or appetite changes",
                        "Stool and hydration changes"
                    ],
                    [
                        "الوقت منذ آخر وجبة",
                        "حجم الوجبة وسرعة الأكل",
                        "طعام أو رغوة أو صفرا أو شعر أو دم",
                        "تغيّر الوزن أو الشهية",
                        "تغيّر البراز أو الترطيب"
                    ],
                    [
                        "Temps depuis le dernier repas",
                        "Taille de portion et vitesse d'ingestion",
                        "Aliments, mousse, bile, poils ou sang",
                        "Changements de poids ou d'appétit",
                        "Changements des selles ou de l'hydratation"
                    ],
                    [
                        "距离上次进食的时间",
                        "份量和进食速度",
                        "食物、泡沫、胆汁、毛发或血",
                        "体重或食欲变化",
                        "排便和饮水变化"
                    ]
                )
            }
        ],
        sources: [
            {
                name: "Vomiting",
                organization: "Cornell Feline Health Center",
                url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/vomiting"
            },
            {
                name: "Vomiting in Cats",
                organization: "Merck Veterinary Manual",
                url: "https://www.merckvetmanual.com/cat-owners/digestive-disorders-of-cats/vomiting-in-cats"
            }
        ]
    },
    {
        slug: "pkd",
        icon: "🫘",
        eyebrow: localizedText("Kidneys", "الكلى", "Reins", "肾脏"),
        title: localizedText(
            "Polycystic kidney disease (PKD1)",
            "مرض الكلى متعدد الكيسات PKD1",
            "Polykystose rénale (PKD1)",
            "多囊肾病（PKD1）"
        ),
        summary: localizedText(
            "Why PKD1 genetic screening can be worth discussing in Scottish Folds and what a positive result means.",
            "لماذا قد يكون فحص PKD1 الجيني مفيداً في Scottish Fold وما معنى النتيجة الإيجابية.",
            "Pourquoi le dépistage génétique PKD1 peut être utile chez le Scottish Fold et ce qu'un résultat positif signifie.",
            "为什么苏格兰折耳猫可以考虑 PKD1 基因筛查，以及阳性结果意味着什么。"
        ),
        reviewedOn: "2026-09-28",
        sections: [
            {
                heading: localizedText(
                    "What PKD1 does",
                    "ماذا يفعل PKD1؟",
                    "Que fait PKD1 ?",
                    "PKD1 会造成什么？"
                ),
                paragraphs: localizedParagraphs(
                    [
                        "PKD1 is an inherited condition in which kidney cysts develop early in life. Kidney failure, when it happens, usually appears later. UC Davis lists Scottish Fold and Scottish Straight among breeds appropriate for PKD1 testing."
                    ],
                    [
                        "PKD1 حالة وراثية تتكوّن فيها أكياس في الكلى في عمر مبكر. أما الفشل الكلوي، إن حدث، فعادة يظهر لاحقاً. تدرج UC Davis كل من Scottish Fold وScottish Straight ضمن السلالات المناسبة للفحص."
                    ],
                    [
                        "PKD1 est une maladie héréditaire dans laquelle des kystes rénaux apparaissent tôt dans la vie. L'insuffisance rénale, lorsqu'elle survient, apparaît généralement plus tard. UC Davis inclut les Scottish Fold et Scottish Straight parmi les races adaptées au dépistage."
                    ],
                    [
                        "PKD1 是遗传性疾病，肾脏囊肿可在很早期出现，而肾功能衰竭通常在更晚时发生。UC Davis 将 Scottish Fold 和 Scottish Straight 列为适合做 PKD1 检测的品种。"
                    ]
                ),
                tone: "sage"
            },
            {
                heading: localizedText(
                    "Testing and monitoring",
                    "الفحص والمتابعة",
                    "Dépistage et suivi",
                    "检测与监测"
                ),
                paragraphs: localizedParagraphs(
                    [
                        "A DNA test can identify the common PKD1 variant once in a cat's lifetime. A positive cat may then need a vet-led monitoring plan using blood tests, urine testing, blood pressure and ultrasound depending on age and findings."
                    ],
                    [
                        "يمكن لفحص DNA تحديد متغيّر PKD1 الشائع مرة واحدة في حياة القط. القط الإيجابي قد يحتاج بعدها خطة متابعة بيطرية تشمل تحاليل دم وبول وضغط دم وألتراساوند حسب العمر والنتائج."
                    ],
                    [
                        "Un test ADN peut identifier le variant PKD1 courant une fois pour toute la vie. Un chat positif peut ensuite bénéficier d'un suivi vétérinaire avec analyses sanguines, urine, pression artérielle et échographie selon l'âge et les résultats."
                    ],
                    [
                        "DNA 检测一生通常只需做一次，就能识别常见 PKD1 变异。阳性猫随后可根据年龄和检查结果，由兽医安排血液、尿液、血压和超声监测。"
                    ]
                )
            }
        ],
        sources: [
            {
                name: "Polycystic Kidney Disease (PKD1)",
                organization: "UC Davis Veterinary Genetics Laboratory",
                url: "https://vgl.ucdavis.edu/test/pkd1-cat"
            }
        ]
    },
    {
        slug: "heart-health",
        icon: "🫀",
        eyebrow: localizedText("Heart", "القلب", "Cœur", "心脏"),
        title: localizedText(
            "Heart health & HCM",
            "صحة القلب وHCM",
            "Santé cardiaque et HCM",
            "心脏健康与 HCM"
        ),
        summary: localizedText(
            "What hypertrophic cardiomyopathy is, what a routine exam can pick up, and when an echocardiogram may be recommended.",
            "ما هو اعتلال عضلة القلب الضخامي HCM، وما الذي قد يكشفه الفحص الروتيني، ومتى قد يوصى بإيكو القلب.",
            "Ce qu'est la cardiomyopathie hypertrophique, ce qu'un examen peut détecter et quand une échographie cardiaque peut être proposée.",
            "什么是肥厚型心肌病（HCM）、常规体检能发现什么，以及什么时候可能需要心脏超声。"
        ),
        reviewedOn: "2026-09-28",
        sections: [
            {
                heading: localizedText(
                    "HCM is not the Fold gene",
                    "HCM ليس جين Fold",
                    "La HCM n'est pas le gène Fold",
                    "HCM 不是折耳基因"
                ),
                paragraphs: localizedParagraphs(
                    [
                        "HCM is a disease in which the heart muscle becomes abnormally thick. It is separate from osteochondrodysplasia. A heart murmur, gallop rhythm, abnormal breathing or family history can lead a veterinarian to recommend further testing."
                    ],
                    [
                        "HCM مرض تصبح فيه عضلة القلب سميكة بشكل غير طبيعي. وهو منفصل عن osteochondrodysplasia. قد تدفع نفخة قلبية أو إيقاع غير طبيعي أو مشاكل تنفس أو تاريخ عائلي الطبيب لطلب فحوص إضافية."
                    ],
                    [
                        "La HCM est une maladie où le muscle cardiaque s'épaissit anormalement. Elle est distincte de l'ostéochondrodysplasie. Un souffle, un rythme de galop, une respiration anormale ou des antécédents familiaux peuvent conduire à des examens complémentaires."
                    ],
                    [
                        "HCM 是心肌异常增厚的疾病，与折耳骨软骨发育异常是不同问题。心杂音、奔马律、异常呼吸或家族史都可能让兽医建议进一步检查。"
                    ]
                ),
                tone: "sky"
            },
            {
                heading: localizedText(
                    "Echocardiography",
                    "إيكو القلب",
                    "Échocardiographie",
                    "心脏超声"
                ),
                paragraphs: localizedParagraphs(
                    [
                        "An echocardiogram is the main imaging test used to assess heart structure and function. Screening decisions should be individualized rather than assuming every Fold has heart disease."
                    ],
                    [
                        "إيكو القلب هو الفحص التصويري الرئيسي لتقييم بنية القلب ووظيفته. قرار الفحص يجب أن يكون فردياً، وليس على افتراض أن كل Scottish Fold لديه مرض قلب."
                    ],
                    [
                        "L'échocardiographie est l'examen d'imagerie principal pour évaluer la structure et la fonction du cœur. Le dépistage doit être individualisé plutôt que de supposer que chaque Fold est atteint."
                    ],
                    [
                        "心脏超声是评估心脏结构和功能的主要影像检查。是否筛查应根据个体情况决定，而不是默认每只折耳猫都有心脏病。"
                    ]
                )
            }
        ],
        sources: [
            {
                name: "Hypertrophic Cardiomyopathy",
                organization: "Cornell Feline Health Center",
                url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/hypertrophic-cardiomyopathy"
            },
            {
                name: "Hypertrophic Cardiomyopathy in Dogs and Cats",
                organization: "Merck Veterinary Manual",
                url: "https://www.merckvetmanual.com/circulatory-system/cardiomyopathy-in-dogs-and-cats/hypertrophic-cardiomyopathy-in-dogs-and-cats"
            }
        ]
    },
    {
        slug: "ears-and-grooming",
        icon: "🧼",
        eyebrow: localizedText(
            "Everyday care",
            "العناية اليومية",
            "Soins quotidiens",
            "日常护理"
        ),
        title: localizedText(
            "Ears, grooming & hairballs",
            "الأذن والتنظيف وكرات الشعر",
            "Oreilles, toilettage et boules de poils",
            "耳朵、梳理与毛球"
        ),
        summary: localizedText(
            "Simple care without over-cleaning: what healthy folded ears can look like, how grooming affects swallowed hair, and when to ask a vet.",
            "عناية بسيطة من دون تنظيف مفرط: كيف تبدو الأذن السليمة، وكيف يؤثر التنظيف على الشعر المبتلع، ومتى يجب سؤال الطبيب.",
            "Des soins simples sans sur-nettoyage : aspect d'une oreille saine, lien entre toilettage et poils avalés, et quand consulter.",
            "不过度清洁的简单护理：健康折耳长什么样、梳毛怎样减少吞入的毛发，以及什么时候该问兽医。"
        ),
        reviewedOn: "2026-09-28",
        sections: [
            {
                heading: localizedText(
                    "Do not clean healthy ears just because they fold",
                    "لا تنظف الأذن السليمة فقط لأنها مطوية",
                    "Ne pas nettoyer une oreille saine juste parce qu'elle est pliée",
                    "不要因为耳朵折着就频繁清洁健康耳朵"
                ),
                paragraphs: localizedParagraphs(
                    [
                        "Check for odor, redness, discharge, head shaking, scratching or pain. Healthy ears do not need aggressive routine cleaning, and cotton swabs should not be pushed into the ear canal."
                    ],
                    [
                        "راقب الرائحة والاحمرار والإفرازات وهز الرأس والحك والألم. الأذن السليمة لا تحتاج تنظيفاً قوياً بشكل روتيني، ولا يجب إدخال أعواد القطن داخل قناة الأذن."
                    ],
                    [
                        "Surveillez odeur, rougeur, écoulement, secouements de tête, grattage ou douleur. Une oreille saine ne nécessite pas de nettoyage agressif et il ne faut pas enfoncer de coton-tige dans le conduit."
                    ],
                    [
                        "留意异味、发红、分泌物、甩头、抓挠或疼痛。健康耳朵不需要频繁强力清洁，也不要把棉签伸进耳道。"
                    ]
                ),
                tone: "lilac"
            },
            {
                heading: localizedText(
                    "Brush more, swallow less",
                    "تمشيط أكثر، شعر مبتلع أقل",
                    "Plus de brossage, moins de poils avalés",
                    "多梳毛，少吞毛"
                ),
                paragraphs: localizedParagraphs(
                    [
                        "Regular brushing removes loose fur before it is swallowed during grooming. That can reduce hairball load, but repeated vomiting still deserves its own investigation rather than being blamed on hair alone."
                    ],
                    [
                        "التمشيط المنتظم يزيل الشعر المتساقط قبل أن يبتلعه القط أثناء تنظيف نفسه. قد يقلل ذلك من كرات الشعر، لكن القيء المتكرر يحتاج تقييماً مستقلاً ولا يجب إلقاء اللوم على الشعر وحده."
                    ],
                    [
                        "Le brossage régulier enlève les poils morts avant qu'ils ne soient avalés. Cela peut réduire les boules de poils, mais des vomissements répétés nécessitent toujours leur propre évaluation."
                    ],
                    [
                        "规律梳毛可以在猫咪舔进去之前去掉松散毛发，有助于减少毛球负担。但反复呕吐仍应单独调查，不能只归因于毛发。"
                    ]
                ),
                tone: "sage"
            }
        ],
        sources: [
            {
                name: "Managing hairballs in cats",
                organization: "Merck Veterinary Manual",
                url: "https://www.merckvetmanual.com/multimedia/table/managing-hairballs-in-cats"
            }
        ]
    },
    {
        slug: "weight-and-quality-of-life",
        icon: "⚖️",
        eyebrow: localizedText(
            "Long-term wellbeing",
            "الرفاه طويل الأمد",
            "Bien-être à long terme",
            "长期生活质量"
        ),
        title: localizedText(
            "Weight & quality of life",
            "الوزن وجودة الحياة",
            "Poids et qualité de vie",
            "体重与生活质量"
        ),
        summary: localizedText(
            "Why lean body condition matters for painful joints and how to watch trends in comfort, play, grooming, appetite and social behaviour.",
            "لماذا يهم الحفاظ على وزن مناسب للمفاصل المؤلمة، وكيف تراقب الراحة واللعب والتنظيف والشهية والسلوك الاجتماعي.",
            "Pourquoi un poids adapté compte pour les articulations douloureuses et comment suivre confort, jeu, toilettage, appétit et comportement social.",
            "为什么保持合适体况能减轻疼痛关节负担，以及如何观察舒适度、玩耍、梳理、食欲和社交行为。"
        ),
        reviewedOn: "2026-09-28",
        sections: [
            {
                heading: localizedText(
                    "Weight is joint load",
                    "الوزن يعني حملاً على المفاصل",
                    "Le poids charge les articulations",
                    "体重就是关节负荷"
                ),
                paragraphs: localizedParagraphs(
                    [
                        "Extra body weight increases the work painful joints must do. The goal is a healthy, stable body condition — not aggressive dieting. A vet can help set a safe calorie target if weight loss is needed."
                    ],
                    [
                        "الوزن الزائد يزيد الجهد على المفاصل المؤلمة. الهدف هو حالة جسم صحية ومستقرة، وليس حمية قاسية. يمكن للطبيب تحديد هدف سعرات آمن إذا كان إنقاص الوزن مطلوباً."
                    ],
                    [
                        "Le surpoids augmente le travail des articulations douloureuses. L'objectif est un état corporel sain et stable, pas un régime brutal. Le vétérinaire peut fixer un objectif calorique sûr si une perte de poids est nécessaire."
                    ],
                    [
                        "额外体重会增加疼痛关节的负担。目标是健康、稳定的体况，而不是激进节食。如需减重，应让兽医帮助制定安全的热量目标。"
                    ]
                ),
                tone: "sage"
            },
            {
                heading: localizedText(
                    "Look for trends, not one bad day",
                    "راقب الاتجاه لا يوماً سيئاً واحداً",
                    "Observer la tendance, pas une mauvaise journée",
                    "看趋势，不看单独一天"
                ),
                paragraphs: localizedParagraphs(
                    [
                        "Track jumping, play, grooming, appetite, litter-box use, social contact and willingness to be touched. A gradual change across weeks can be more useful than a single snapshot."
                    ],
                    [
                        "راقب القفز واللعب والتنظيف والشهية وصندوق الرمل والتواصل الاجتماعي ومدى تقبل اللمس. التغيّر التدريجي عبر أسابيع قد يكون أهم من يوم واحد."
                    ],
                    [
                        "Suivez les sauts, le jeu, le toilettage, l'appétit, la litière, les contacts sociaux et la tolérance au toucher. Une évolution sur plusieurs semaines est souvent plus informative qu'une seule journée."
                    ],
                    [
                        "记录跳跃、玩耍、梳理、食欲、猫砂盆使用、社交以及是否愿意被触碰。几周内的趋势通常比某一天更有价值。"
                    ]
                )
            }
        ],
        sources: [
            {
                name: "Routine health care of cats",
                organization: "Merck Veterinary Manual",
                url: "https://www.merckvetmanual.com/cat-owners/caring-for-cats/routine-health-care-of-cats"
            }
        ]
    },
    {
        slug: "when-to-call-a-vet",
        icon: "🩺",
        eyebrow: localizedText(
            "Safety first",
            "السلامة أولاً",
            "Sécurité d'abord",
            "安全第一"
        ),
        title: localizedText(
            "When to call a vet",
            "متى تتصل بالطبيب البيطري",
            "Quand appeler un vétérinaire",
            "什么时候该联系兽医"
        ),
        summary: localizedText(
            "A practical red-flag guide for repeated vomiting, breathing trouble, severe pain, sudden weakness, appetite loss and major behaviour changes.",
            "دليل عملي للعلامات الخطرة: القيء المتكرر، صعوبة التنفس، الألم الشديد، الضعف المفاجئ، فقدان الشهية والتغيّرات الكبيرة في السلوك.",
            "Un guide pratique des signaux d'alarme : vomissements répétés, difficulté à respirer, douleur sévère, faiblesse soudaine, perte d'appétit et grands changements de comportement.",
            "实用警示指南：反复呕吐、呼吸困难、剧烈疼痛、突然虚弱、食欲消失和明显行为改变。"
        ),
        tag: localizedText(
            "Urgent guide",
            "دليل عاجل",
            "Guide urgent",
            "紧急指南"
        ),
        reviewedOn: "2026-09-28",
        sections: [
            {
                heading: localizedText(
                    "Emergency signs",
                    "علامات طارئة",
                    "Signes d'urgence",
                    "紧急迹象"
                ),
                paragraphs: localizedParagraphs(
                    [
                        "Seek urgent veterinary care if a cat has trouble breathing, collapses, cannot use a limb suddenly, appears in severe uncontrolled pain, repeatedly vomits and cannot keep water down, or has blood in vomit or black/tarry stool."
                    ],
                    [
                        "اطلب رعاية بيطرية عاجلة إذا كان القط يعاني من صعوبة في التنفس، أو انهار، أو فقد استخدام أحد الأطراف فجأة، أو بدا في ألم شديد، أو تكرر القيء ولم يستطع الاحتفاظ بالماء، أو ظهر دم في القيء أو براز أسود قطراني."
                    ],
                    [
                        "Consultez en urgence en cas de difficulté respiratoire, effondrement, perte soudaine de l'usage d'un membre, douleur intense incontrôlée, vomissements répétés avec impossibilité de garder l'eau, sang dans les vomissements ou selles noires goudronneuses."
                    ],
                    [
                        "如果猫咪呼吸困难、倒下、突然不能使用某条腿、出现严重无法控制的疼痛、反复呕吐且喝水也留不住，或呕吐物带血/粪便呈黑色柏油样，应紧急就医。"
                    ]
                ),
                tone: "warning"
            },
            {
                heading: localizedText(
                    "Book an appointment promptly",
                    "احجز موعداً قريباً",
                    "Prendre rendez-vous rapidement",
                    "尽快预约兽医"
                ),
                paragraphs: localizedParagraphs(
                    [
                        "Recurrent vomiting, gradual loss of jumping ability, stiffness, pain when handled, a rigid tail, weight loss despite appetite, or a meaningful change in normal behaviour deserve investigation even when the cat still has energetic moments."
                    ],
                    [
                        "القيء المتكرر، فقدان القدرة على القفز تدريجياً، التيبس، الألم عند الحمل أو اللمس، ذيل قاسٍ، فقدان الوزن رغم الشهية، أو تغير واضح في السلوك تستحق الفحص حتى لو كان القط نشيطاً أحياناً."
                    ],
                    [
                        "Des vomissements récurrents, une diminution progressive des sauts, de la raideur, une douleur au toucher, une queue rigide, une perte de poids malgré l'appétit ou un changement net de comportement méritent une consultation même si le chat reste parfois énergique."
                    ],
                    [
                        "反复呕吐、逐渐不愿跳、僵硬、触碰时疼痛、尾巴僵硬、明明有食欲却体重下降，或日常行为明显改变，都值得检查，即使猫有时看起来还很有精神。"
                    ]
                )
            }
        ],
        sources: [
            {
                name: "Vomiting",
                organization: "Cornell Feline Health Center",
                url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/vomiting"
            },
            {
                name: "Routine health care of cats",
                organization: "Merck Veterinary Manual",
                url: "https://www.merckvetmanual.com/cat-owners/caring-for-cats/routine-health-care-of-cats"
            }
        ]
    }
]

export function findHealthTopic(slug: string): HealthTopic | undefined {
    return healthTopics.find((topic) => topic.slug === slug)
}
