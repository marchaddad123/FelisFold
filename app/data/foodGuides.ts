import type { HealthTopic, LotusKitchenEntry } from "~/types/foldcare"
import {
    translated as t,
    paragraphSection as section,
    editorialLabels
} from "~/data/editorialHelpers"
import { evidenceSources as sources } from "~/data/evidenceSources"

export const nutritionGuide: HealthTopic = {
    slug: "nutrition",
    icon: "🍽️",
    reviewedOn: "2026-10-01",
    eyebrow: editorialLabels.evidence,
    title: t(
        "Food & nutrition",
        "الغذاء والتغذية",
        "Alimentation et nutrition",
        "食物与营养"
    ),
    summary: t(
        "Choose food by nutritional adequacy and your cat's needs. Then make portions, water and everyday feeding easier to manage.",
        "اختر الغذاء بحسب اكتماله واحتياجات قطك، ثم نظم الكميات والماء والوجبات اليومية.",
        "Choisissez selon l'équilibre nutritionnel et les besoins de votre chat, puis adaptez portions, eau et repas quotidiens.",
        "根据营养完整性和猫咪需求选择食物，再安排份量、饮水和日常喂食。"
    ),
    sections: [
        section(
            t(
                "What cats need",
                "ما تحتاجه القطط",
                "Les besoins du chat",
                "猫咪需要什么"
            ),
            t(
                "Cats need protein, essential amino acids including taurine, fats and essential fatty acids, vitamins, minerals and water. Enough calories alone does not mean enough nutrients. A complete feline food for the right life stage is the starting point; kittens have different needs from adult cats.",
                "تحتاج القطط إلى البروتين والأحماض الأمينية الأساسية ومنها التورين والدهون والأحماض الدهنية والفيتامينات والمعادن والماء. السعرات الكافية لا تعني عناصر غذائية كافية. البداية غذاء متكامل مناسب للعمر؛ احتياجات الصغار تختلف عن البالغين.",
                "Le chat a besoin de protéines, d'acides aminés essentiels dont la taurine, de graisses, d'acides gras essentiels, de vitamines, de minéraux et d'eau. Des calories suffisantes ne garantissent pas les nutriments. Commencez par un aliment complet pour le bon stade de vie ; les chatons ont des besoins différents.",
                "猫需要蛋白质、包括牛磺酸在内的必需氨基酸、脂肪、必需脂肪酸、维生素、矿物质和水。热量充足不代表营养完整。应从适合生命阶段的完整猫粮开始；幼猫与成猫需求不同。"
            )
        ),
        section(
            t(
                "How to evaluate commercial food",
                "كيف تقيّم الغذاء التجاري",
                "Évaluer un aliment commercial",
                "如何评估商业猫粮"
            ),
            t(
                "Look for a complete-and-balanced nutritional adequacy statement and the intended life stage. Ask the manufacturer who formulates the food, how quality is controlled, and its calories per gram or serving. An ingredient list or a 'premium' claim cannot answer those questions. Veterinary diets should be selected for an individual medical need with your vet.",
                "ابحث عن بيان اكتمال وتوازن الغذاء والعمر المستهدف. اسأل الشركة عمن يصيغ الغذاء وكيف تضبط الجودة والسعرات لكل غرام أو وجبة. قائمة المكونات أو عبارة فاخر لا تجيب عن هذه الأسئلة. يختار الطبيب الغذاء العلاجي حسب الحاجة الفردية.",
                "Cherchez la déclaration d'adéquation nutritionnelle et le stade de vie. Demandez au fabricant qui formule, comment la qualité est contrôlée et les calories par gramme ou portion. Une liste d'ingrédients ou la mention « premium » ne répond pas à ces questions. Un régime vétérinaire répond à un besoin médical individuel avec votre vétérinaire.",
                "查看完整均衡营养声明和适用生命阶段。询问厂家由谁配方、如何控制质量，以及每克或每份热量。配料表或“高端”字样无法回答这些问题。处方饮食应由兽医根据个体医疗需求选择。"
            )
        ),
        section(
            t(
                "Wet, dry or mixed feeding?",
                "رطب أم جاف أم مزيج؟",
                "Humide, sec ou mixte ?",
                "湿粮、干粮还是混合喂养？"
            ),
            t(
                "Wet food supplies more water; dry food is more concentrated and convenient to measure. Either format can be nutritionally complete. With mixed feeding, count calories from both rather than giving a full allowance of each. Keep fresh water in accessible, clean bowls; thirst or urination changes deserve a veterinary discussion.",
                "الغذاء الرطب يوفر ماء أكثر، والجاف أكثر تركيزاً ويسهل قياسه. يمكن لأي منهما أن يكون متكاملاً. عند المزج احسب سعرات الاثنين ولا تقدم حصة كاملة من كل نوع. وفر أوعية ماء نظيفة وسهلة الوصول؛ تغير العطش أو التبول يستحق مراجعة الطبيب.",
                "L'humide apporte plus d'eau ; le sec est plus concentré et facile à mesurer. Les deux peuvent être complets. En alimentation mixte, comptez les calories des deux sans donner une ration entière de chacun. Proposez de l'eau fraîche accessible ; un changement de soif ou d'urines mérite une discussion vétérinaire.",
                "湿粮提供更多水分，干粮更浓缩且易称量。两者都可以营养完整。混合喂养应计算两种食物的总热量，不要各给一份完整日粮。提供清洁、易到达的饮水；饮水或排尿变化应咨询兽医。"
            )
        ),
        section(
            t(
                "Portions, meals and body condition",
                "الكميات والوجبات وحالة الجسم",
                "Portions, repas et état corporel",
                "份量、餐次与体况"
            ),
            t(
                "Start with the feeding guide, then adjust with your vet using body condition and weight trends. Weigh food when practical; include treats and food offered by everyone in the household. Split the daily amount into meals that suit the cat. Feed cats separately if competition makes it hard to know who ate what. Weight loss should be gradual and veterinarian-guided; do not crash-diet a cat.",
                "ابدأ بإرشادات العبوة ثم عدلها مع الطبيب بحسب حالة الجسم واتجاه الوزن. زن الغذاء إن أمكن واحسب المكافآت وما يقدمه أفراد المنزل. قسم الكمية اليومية إلى وجبات مناسبة. أطعم القطط منفصلة إذا حالت المنافسة دون معرفة ما أكلته. خسارة الوزن تدريجية بإشراف الطبيب؛ لا تستخدم حمية قاسية.",
                "Partez des indications puis ajustez avec le vétérinaire selon l'état corporel et l'évolution du poids. Pesez si possible et comptez friandises et apports de toute la famille. Répartissez la quantité quotidienne en repas adaptés. Séparez les chats si la compétition empêche de savoir qui mange quoi. La perte de poids doit être progressive et encadrée ; pas de régime brutal.",
                "从包装指南开始，再与兽医根据体况和体重趋势调整。尽量称量，并计入零食和其他家人投喂的食物。把每日总量分成适合猫咪的餐次。竞争影响判断食量时，应分开喂养。减重需要缓慢且由兽医指导，不要突然严格节食。"
            )
        ),
        section(
            t(
                "Changing food, sensitive stomachs and hairballs",
                "تغيير الغذاء والمعدة الحساسة وكرات الشعر",
                "Transition, estomac sensible et boules de poils",
                "换粮、敏感肠胃与毛球"
            ),
            t(
                "For a routine change, introduce a little new food alongside the usual complete food and increase gradually over several days if tolerated. Follow a different schedule if your vet prescribes one. Change one thing at a time so you can describe the response. Repeated vomiting needs investigation; switching foods or brushing more is not a diagnosis. Avoid withholding food without veterinary advice.",
                "للتغيير المعتاد أضف قليلاً من الغذاء الجديد إلى الغذاء المتكامل المعتاد وزد تدريجياً خلال عدة أيام إذا تقبله القط. اتبع جدول الطبيب إذا وصف غير ذلك. غير شيئاً واحداً كل مرة لتصف الاستجابة. القيء المتكرر يحتاج فحصاً؛ تبديل الطعام أو زيادة التمشيط ليس تشخيصاً. لا تمنع الطعام دون نصيحة الطبيب.",
                "Pour une transition courante, introduisez un peu du nouvel aliment avec l'aliment complet habituel et augmentez sur plusieurs jours si toléré. Suivez le calendrier prescrit par votre vétérinaire le cas échéant. Changez une chose à la fois pour décrire la réponse. Des vomissements récurrents nécessitent une investigation ; changer d'aliment ou brosser davantage ne pose pas de diagnostic. Ne privez pas de nourriture sans conseil vétérinaire.",
                "常规换粮时，在原有完整食物旁加入少量新食物，耐受后用几天逐渐增加。若兽医另有安排，应按其计划。一次只改变一件事，便于描述反应。反复呕吐需要检查；换粮或多梳毛不能确定病因。不要自行禁食。"
            )
        ),
        section(
            t(
                "Treats and supplements",
                "المكافآت والمكملات",
                "Friandises et compléments",
                "零食与补充剂"
            ),
            t(
                "Keep treats and other incomplete foods a small part of daily calories; WSAVA uses 10% as a general upper limit, not a target. A complete diet usually does not need extra vitamins or minerals. Supplements can create excesses or interactions. Ask your vet what specific problem a product is meant to address and what evidence supports it, especially for joint products.",
                "اجعل المكافآت والأغذية غير المتكاملة جزءاً صغيراً من السعرات؛ تستخدم WSAVA نسبة 10% كحد عام أعلى لا كهدف. الغذاء المتكامل لا يحتاج عادة فيتامينات أو معادن إضافية. قد تسبب المكملات زيادة أو تداخلات. اسأل الطبيب عن المشكلة التي يعالجها المنتج ودليله، خاصة منتجات المفاصل.",
                "Limitez friandises et aliments incomplets à une petite part des calories ; WSAVA propose 10 % comme plafond général, pas un objectif. Un régime complet n'exige généralement pas de vitamines ou minéraux supplémentaires. Les compléments peuvent entraîner excès ou interactions. Demandez quel problème précis le produit vise et quelles preuves le soutiennent, notamment pour les articulations.",
                "零食和不完整食物应只占每日热量的小部分；WSAVA 的 10% 是一般上限而非目标。完整饮食通常无需额外维生素或矿物质。补充剂可能造成过量或相互作用。尤其对关节产品，应问兽医它针对什么问题、有什么证据。"
            )
        )
    ],
    sources: [
        sources.feeding,
        sources.foodSelection,
        sources.nutrition,
        sources.vomiting
    ]
}

export const homemadeGuide: HealthTopic = {
    slug: "homemade",
    icon: "🍲",
    reviewedOn: "2026-10-01",
    eyebrow: editorialLabels.evidence,
    title: t(
        "Homemade meals and complete diets",
        "الوجبات المنزلية والغذاء المتكامل",
        "Repas maison et régimes complets",
        "自制餐与完整饮食"
    ),
    summary: t(
        "A meal your cat enjoys and a complete long-term feline diet are different questions. Plan for nutritional requirements before replacing complete food.",
        "الوجبة التي يحبها قطك والغذاء المتكامل طويل المدى سؤالان مختلفان. خطط للمتطلبات الغذائية قبل استبدال الغذاء المتكامل.",
        "Un repas apprécié et un régime félin complet à long terme sont deux questions distinctes. Planifiez les besoins nutritionnels avant de remplacer l'aliment complet.",
        "猫喜欢吃的一餐与长期完整饮食是两回事。替换完整猫粮前，要先满足营养需求。"
    ),
    sections: [
        section(
            t(
                "Chicken alone is incomplete",
                "الدجاج وحده غير متكامل",
                "Le poulet seul est incomplet",
                "鸡肉本身并不完整"
            ),
            t(
                "Plain cooked chicken can be an occasional food if appropriate for your cat, but it does not supply all feline nutrients in the right proportions. Looking energetic or vomiting less cannot demonstrate nutritional adequacy. UC Davis research found important deficiencies in published homemade recipes; a recipe's popularity does not validate it.",
                "قد يكون الدجاج المطبوخ السادة طعاماً عرضياً مناسباً لقطك، لكنه لا يوفر جميع العناصر بالنسب الصحيحة. النشاط أو قلة القيء لا يثبتان اكتمال الغذاء. وجدت أبحاث ديفيس نقصاً مهماً في وصفات منزلية منشورة؛ الشهرة لا تثبت صلاحيتها.",
                "Le poulet cuit nature peut être occasionnellement adapté, mais il ne fournit pas tous les nutriments dans les bonnes proportions. L'énergie ou une réduction des vomissements ne prouvent pas l'équilibre. Les travaux de UC Davis ont trouvé des déficits importants dans des recettes publiées ; leur popularité ne les valide pas.",
                "清煮鸡肉可能适合作为偶尔的食物，但不能按正确比例提供猫所需的全部营养。精神好或呕吐减少不能证明营养完整。UC Davis 的研究发现已发表自制食谱存在重要营养缺口，流行不等于可靠。"
            )
        ),
        section(
            t(
                "Formulation starts with feline requirements",
                "صياغة الغذاء تبدأ باحتياجات القطط",
                "Formuler à partir des besoins félins",
                "配方始于猫的营养需求"
            ),
            t(
                "A complete recipe must account for protein and essential amino acids such as taurine and arginine, fats including arachidonic acid, vitamins, minerals, calcium-to-phosphorus balance and trace nutrients. Requirements depend on life stage and health. Ingredient weights, preparation losses and the exact supplement all matter. Adding a random multivitamin or organ meat does not automatically balance a meal.",
                "يجب أن تشمل الوصفة المتكاملة البروتين والأحماض الأمينية كالتورين والأرجينين والدهون ومنها حمض الأراكيدونيك والفيتامينات والمعادن وتوازن الكالسيوم والفوسفور والعناصر الدقيقة. تختلف الاحتياجات بالعمر والصحة. أوزان المكونات وفقد التحضير ونوع المكمل مهمة. إضافة فيتامين عشوائي أو أحشاء لا توازن الوجبة تلقائياً.",
                "Une recette complète doit couvrir protéines, acides aminés essentiels dont taurine et arginine, graisses dont acide arachidonique, vitamines, minéraux, équilibre calcium-phosphore et oligoéléments. Les besoins dépendent de l'âge et de la santé. Poids, pertes de préparation et supplément exact comptent. Ajouter un multivitamine ou des abats au hasard ne suffit pas.",
                "完整食谱必须考虑蛋白质、牛磺酸和精氨酸等必需氨基酸、包括花生四烯酸在内的脂肪、维生素、矿物质、钙磷比例和微量营养素。需求随年龄和健康状况变化。食材重量、烹饪损失和补充剂的具体规格都重要。随意加复合维生素或内脏不能自动使一餐均衡。"
            )
        ),
        section(
            t(
                "Before making homemade food the main diet",
                "قبل أن يصبح الغذاء المنزلي الغذاء الأساسي",
                "Avant d'en faire l'alimentation principale",
                "作为主食之前"
            ),
            t(
                "Ask your vet for a veterinary nutritionist or equivalent qualified formulation service. WSAVA recommends evaluating homemade diets for protein, fat, vitamins, minerals and cat-specific nutrients. Work from recognized feline nutrient standards, such as NRC, AAFCO or FEDIAF, through that professional. Follow the exact formulated recipe and arrange monitoring; substitutions need review.",
                "اطلب من الطبيب إحالة إلى اختصاصي تغذية بيطرية أو خدمة مؤهلة لصياغة الغذاء. توصي WSAVA بتقييم البروتين والدهون والفيتامينات والمعادن والعناصر الخاصة بالقطط. اعمل مع المختص وفق معايير معترف بها مثل NRC أو AAFCO أو FEDIAF. اتبع الوصفة المحددة ورتب المتابعة؛ تبديل المكونات يحتاج مراجعة.",
                "Demandez une orientation vers un nutritionniste vétérinaire ou un service de formulation qualifié. WSAVA recommande d'évaluer protéines, graisses, vitamines, minéraux et nutriments spécifiques au chat. Avec ce professionnel, partez des standards félins reconnus comme NRC, AAFCO ou FEDIAF. Suivez la recette exacte et prévoyez le suivi ; les substitutions doivent être réévaluées.",
                "请兽医转介兽医营养师或同等合格的配方服务。WSAVA 建议评估自制饮食的蛋白质、脂肪、维生素、矿物质和猫特有营养需求。通过专业人员参照 NRC、AAFCO 或 FEDIAF 等公认猫营养标准。严格遵循配方并安排监测；替换食材需要重新审查。"
            )
        ),
        section(
            t(
                "Safe preparation and small observations",
                "تحضير آمن وملاحظات محدودة",
                "Préparation sûre et observations modestes",
                "安全准备与有限观察"
            ),
            t(
                "Avoid raw meat, bones, onions, garlic and seasonings unsafe for cats. Keep hands, utensils and food surfaces clean and store cooked food safely. Discuss any trial with your vet if the cat has ongoing vomiting or a prescribed diet. Photograph ingredients and the portion, record grams served and eaten, and describe what happened without calling it a treatment trial.",
                "تجنب اللحوم النيئة والعظام والبصل والثوم والتوابل غير الآمنة. نظف اليدين والأدوات والأسطح واحفظ الطعام المطبوخ بأمان. ناقش التجربة مع الطبيب عند وجود قيء مستمر أو غذاء علاجي. صور المكونات والحصة وسجل الغرامات المقدمة والمأكولة، وصف ما حدث دون اعتباره تجربة علاجية.",
                "Évitez viande crue, os, oignon, ail et assaisonnements dangereux. Gardez mains, ustensiles et surfaces propres et conservez correctement les aliments cuits. Discutez tout essai si le chat vomit régulièrement ou suit un régime prescrit. Photographiez ingrédients et portion, notez les grammes servis et mangés, puis décrivez les faits sans parler d'essai thérapeutique.",
                "避免生肉、骨头、洋葱、大蒜和对猫不安全的调味料。保持手、器具和台面清洁，安全储存熟食。若猫反复呕吐或使用处方饮食，应先与兽医讨论尝试。拍摄食材和份量，记录喂食及吃下的克数，如实描述经过，不称之为治疗试验。"
            )
        )
    ],
    sources: [
        sources.nutrition,
        sources.homemade,
        sources.feeding,
        sources.rawFood
    ]
}

export const foodsToAvoidGuide: HealthTopic = {
    slug: "foods-to-avoid",
    icon: "⚠️",
    reviewedOn: "2026-10-01",
    eyebrow: editorialLabels.evidence,
    title: t(
        "Foods and ingredients to avoid",
        "أطعمة ومكونات يجب تجنبها",
        "Aliments et ingrédients à éviter",
        "应避免的食物与成分"
    ),
    summary: t(
        "Poisoning, injury and an incomplete diet are different risks. If an exposure may be dangerous, contact a vet with the product, amount and time; do not induce vomiting yourself.",
        "التسمم والإصابة ونقص الغذاء مخاطر مختلفة. عند تعرض خطر محتمل اتصل بالطبيب مع المنتج والكمية والوقت؛ لا تسبب القيء بنفسك.",
        "Intoxication, blessure et déséquilibre alimentaire sont des risques distincts. Après une exposition potentiellement dangereuse, appelez avec le produit, la quantité et l'heure ; ne faites pas vomir vous-même.",
        "中毒、损伤和营养不完整是不同风险。怀疑危险摄入时，告知兽医产品、数量与时间，不要自行催吐。"
    ),
    sections: [
        section(
            t(
                "Onion, garlic and other alliums",
                "البصل والثوم وبقية الفصيلة الثومية",
                "Oignon, ail et autres alliacées",
                "洋葱、大蒜及其他葱属植物"
            ),
            t(
                "Raw, cooked and powdered alliums can damage red blood cells; cats are particularly sensitive. This can be serious even before obvious signs appear. Keep them out of meals, sauces and broths. If eaten, contact a vet promptly with the ingredient label and estimated amount. Source: MSD Allium toxicosis reference.",
                "قد تؤذي الثوميات النيئة والمطبوخة والمسحوقة خلايا الدم الحمراء، والقطط حساسة خاصة. قد يكون الأمر خطيراً قبل ظهور علامات واضحة. أبعدها عن الوجبات والصلصات والمرق. إذا أكلها القط اتصل سريعاً بالطبيب مع الملصق والكمية المقدرة. المصدر: مرجع MSD للثوميات.",
                "Crus, cuits ou en poudre, les alliacées peuvent endommager les globules rouges ; les chats y sont particulièrement sensibles. Le risque peut être sérieux avant des signes visibles. Excluez-les des repas, sauces et bouillons. En cas d'ingestion, appelez rapidement avec l'étiquette et la quantité estimée. Source : MSD, intoxication aux alliacées.",
                "生、熟或粉末形式的葱属食物可能损害红细胞，猫尤其敏感。明显症状出现前也可能已很严重。不要放进猫餐、酱汁或汤里。摄入后及时联系兽医，提供标签和估计数量。来源：MSD 葱属中毒资料。"
            )
        ),
        section(
            t(
                "Chocolate and caffeine",
                "الشوكولاتة والكافيين",
                "Chocolat et caféine",
                "巧克力与咖啡因"
            ),
            t(
                "Theobromine and caffeine can affect the heart and nervous system. Cats should not be offered chocolate, coffee or energy products. Treat suspected ingestion as a prompt veterinary or poison-service call. Give the type, amount and time; dog toxicity calculators are not a cat safety threshold. Sources: MSD chocolate reference and Cornell cat hazards.",
                "قد يؤثر الثيوبرومين والكافيين على القلب والجهاز العصبي. لا تقدم الشوكولاتة أو القهوة أو منتجات الطاقة للقطط. اتصل فور الاشتباه بالطبيب أو مركز السموم، واذكر النوع والكمية والوقت. حاسبات تسمم الكلاب ليست حداً آمناً للقطط. المصادر: MSD ومخاطر القطط من Cornell.",
                "Théobromine et caféine peuvent toucher cœur et système nerveux. Ne donnez ni chocolat, ni café, ni produits énergétiques. Appelez rapidement le vétérinaire ou un service antipoison en cas de suspicion. Précisez type, quantité et heure ; les calculateurs canins ne définissent pas un seuil sûr pour les chats. Sources : MSD et dangers félins de Cornell.",
                "可可碱和咖啡因可能影响心脏与神经系统。不要给猫巧克力、咖啡或能量产品。怀疑摄入时尽快联系兽医或动物毒物服务，提供种类、数量和时间。犬用中毒计算器不能作为猫的安全阈值。来源：MSD 巧克力资料与 Cornell 猫常见危险资料。"
            )
        ),
        section(
            t(
                "Alcohol and unbaked yeast dough",
                "الكحول وعجين الخميرة غير المخبوز",
                "Alcool et pâte crue à levure",
                "酒精与未烤的酵母面团"
            ),
            t(
                "Alcohol can depress the nervous system. Yeast dough can expand in the stomach and produce ethanol; serious distension and intoxication are possible. Keep drinks and dough out of reach. Suspected ingestion needs an immediate veterinary call, without waiting for symptoms. Source: MSD bread dough toxicosis.",
                "قد يثبط الكحول الجهاز العصبي. قد يتمدد عجين الخميرة في المعدة وينتج الإيثانول، مما قد يسبب انتفاخاً وتسمماً شديدين. أبعد المشروبات والعجين. يستدعي الاشتباه اتصالاً فورياً دون انتظار الأعراض. المصدر: MSD لتسمم عجين الخبز.",
                "L'alcool peut déprimer le système nerveux. La pâte à levure peut gonfler dans l'estomac et produire de l'éthanol, avec distension et intoxication graves possibles. Gardez boissons et pâte hors de portée. Appelez immédiatement en cas d'ingestion présumée, sans attendre les signes. Source : MSD, pâte à pain.",
                "酒精可能抑制神经系统。酵母面团在胃内可能膨胀并产生乙醇，引发严重胀气和中毒。将酒与面团放在猫接触不到的地方。怀疑摄入时应立即联系兽医，不要等待症状。来源：MSD 面团中毒资料。"
            )
        ),
        section(
            t(
                "Bones and raw feeding",
                "العظام والتغذية النيئة",
                "Os et alimentation crue",
                "骨头与生食"
            ),
            t(
                "Bones can break teeth or obstruct the digestive tract. Raw meat can expose cats and people to pathogens; freezing does not remove every hazard. These are injury and infection risks, not a proven route to healthier joints. If there is choking, pain or vomiting after bone ingestion, seek urgent care. Ask a vet about any raw-food exposure and symptoms. Source: WSAVA raw meat-based diets.",
                "قد تكسر العظام الأسنان أو تسد الجهاز الهضمي. قد تعرض اللحوم النيئة القطط والبشر للجراثيم؛ التجميد لا يزيل كل المخاطر. هذه مخاطر إصابة وعدوى وليست طريقاً مثبتاً لمفاصل أصح. اطلب رعاية عاجلة للاختناق أو الألم أو القيء بعد ابتلاع العظام، وناقش التعرض للنيء والأعراض مع الطبيب. المصدر: WSAVA.",
                "Les os peuvent casser les dents ou obstruer le tube digestif. La viande crue expose chats et humains à des agents pathogènes ; congeler ne supprime pas tous les risques. Ce sont des risques de blessure et d'infection, pas une voie prouvée vers des articulations saines. Étouffement, douleur ou vomissement après ingestion d'os nécessitent des soins urgents. Discutez les expositions au cru avec votre vétérinaire. Source : WSAVA.",
                "骨头可能损坏牙齿或堵塞消化道。生肉可能让猫和人接触病原体，冷冻不能消除全部危险。这是损伤与感染风险，并非改善关节的已证实办法。吃骨头后窒息、疼痛或呕吐需紧急就医。生食接触和症状应咨询兽医。来源：WSAVA 生肉饮食资料。"
            )
        ),
        section(
            t(
                "Dog food, tuna-only meals and unbalanced homemade diets",
                "غذاء الكلاب والتونة وحدها والغذاء المنزلي غير المتوازن",
                "Aliment pour chien, thon seul et régimes maison déséquilibrés",
                "狗粮、只吃金枪鱼与不均衡自制饮食"
            ),
            t(
                "These should not replace complete feline food. The concern is missing or incorrectly balanced nutrients over time, rather than every accidental mouthful being a poisoning emergency. If one has become the main diet, arrange a veterinary nutrition review. Heavy salt additions are unnecessary; report significant salt exposure or illness to a vet. Sources: Cornell feeding and WSAVA nutritional assessment.",
                "لا تستبدل بها الغذاء المتكامل للقطط. المشكلة نقص العناصر أو اختلالها مع الوقت، وليس أن كل لقمة عارضة طارئ تسمم. إذا أصبح أحدها الغذاء الأساسي رتب مراجعة تغذية بيطرية. الملح المضاف بكثرة غير ضروري؛ أبلغ الطبيب عن تعرض كبير أو مرض. المصادر: Cornell وWSAVA.",
                "Ils ne doivent pas remplacer l'aliment complet pour chat. Le risque est le manque ou le déséquilibre de nutriments au fil du temps, sans faire de chaque bouchée accidentelle une urgence toxique. Si c'est devenu le régime principal, organisez une consultation nutritionnelle. Les ajouts importants de sel sont inutiles ; signalez une forte exposition ou une maladie. Sources : Cornell et WSAVA.",
                "这些不应替代完整猫粮。主要问题是长期营养缺失或比例不当，不是每一口误食都属于中毒急症。若已成为主食，应安排兽医营养评估。无需大量加盐；显著盐摄入或不适应告知兽医。来源：Cornell 喂养与 WSAVA 营养评估资料。"
            )
        ),
        section(
            t(
                "Grapes and raisins: avoid borrowing dog certainty",
                "العنب والزبيب: لا تنقل يقين الكلاب إلى القطط",
                "Raisin : ne pas transposer la certitude canine",
                "葡萄与葡萄干：不要照搬犬的结论"
            ),
            t(
                "Serious grape/raisin kidney toxicity is well documented in dogs. Cat-specific evidence is limited, so this site does not give a feline toxic dose or claim the same outcome is established. Do not offer them; discuss an accidental ingestion with your vet rather than assuming it is safe or applying a dog threshold. This is a precaution with an explicit evidence gap.",
                "تسمم الكلى بالعنب والزبيب موثق جيداً لدى الكلاب. الأدلة الخاصة بالقطط محدودة، لذلك لا يقدم الموقع جرعة سامة للقطط ولا يدعي ثبوت النتيجة نفسها. لا تقدمها، وناقش الابتلاع العارض مع الطبيب بدلاً من افتراض الأمان أو تطبيق حد الكلاب. هذا احتياط مع فجوة دليل واضحة.",
                "La toxicité rénale du raisin est bien documentée chez le chien. Les données félines sont limitées : ce site ne donne ni dose toxique pour le chat ni certitude d'une évolution identique. N'en proposez pas ; discutez une ingestion accidentelle sans supposer l'innocuité ni appliquer un seuil canin. C'est une précaution avec une lacune explicite.",
                "葡萄和葡萄干对犬的严重肾毒性已有充分记录，但猫的证据有限。本站不给出猫的毒性剂量，也不宣称已证实相同后果。不要主动喂食；误食后应询问兽医，不要假定安全或套用犬的阈值。这是明确说明证据缺口的预防建议。"
            )
        )
    ],
    sources: [
        sources.allium,
        sources.chocolate,
        sources.dough,
        sources.rawFood,
        sources.poisons,
        sources.feeding,
        sources.nutrition,
        sources.foodHazards
    ]
}

// Publish only measured, owner-supplied records. An empty list is intentional.
export const lotusKitchenEntries: LotusKitchenEntry[] = []

export const kitchenGuide: HealthTopic = {
    slug: "lotus-kitchen",
    icon: "🍲",
    reviewedOn: "2026-10-01",
    eyebrow: editorialLabels.owner,
    title: editorialLabels.kitchen,
    summary: t(
        "Real meals, real notes. We will record what Mark makes, the grams served and eaten, and what happens afterward — with the limits of one cat's experience kept visible.",
        "وجبات حقيقية وملاحظات حقيقية. سنسجل ما يصنعه مارك والغرامات المقدمة والمأكولة وما يحدث بعدها، مع توضيح حدود تجربة قط واحد.",
        "Des repas et des notes réels. Nous noterons ce que Mark prépare, les grammes servis et mangés, puis la réponse de Lotus, en gardant visibles les limites d'une seule expérience.",
        "真实的餐食与记录。我们将记录 Mark 做了什么、喂了多少克、吃了多少以及之后的情况，并明确这只是一只猫的经历。"
    ),
    sections: [
        section(
            t(
                "No measured meals published yet",
                "لم تنشر وجبات مقاسة بعد",
                "Aucun repas mesuré publié pour le moment",
                "尚未发布称量过的餐食记录"
            ),
            t(
                "Mark recalls less vomiting during a period of plain cooked chicken, but the date, grams and preparation were not recorded. That history belongs in Lotus's observations, not a completed kitchen entry. Future records will include ingredients, preparation, portion, acceptance, vomiting timing, stool, appetite, energy, photos and any veterinary comments. We will not invent results or label these as universal recipes.",
                "يتذكر مارك قيئاً أقل خلال فترة الدجاج المطبوخ السادة، لكن التاريخ والغرامات وطريقة التحضير لم تسجل. مكانها ملاحظات لوتس وليست إدخالاً مكتملاً في المطبخ. ستشمل السجلات القادمة المكونات والتحضير والحصة والتقبل ووقت القيء والبراز والشهية والطاقة والصور وتعليقات الطبيب. لن نخترع نتائج أو نقدمها كوصفات عامة.",
                "Mark se souvient de moins de vomissements pendant une période de poulet cuit nature, mais sans date, grammes ni préparation consignés. Cela reste une observation, pas une entrée complète. Les prochains récits incluront ingrédients, préparation, portion, appréciation, délai avant vomissement, selles, appétit, énergie, photos et commentaires vétérinaires. Aucun résultat inventé ni recette universelle.",
                "Mark 记得有一段时间吃清煮鸡肉时呕吐减少，但没有记录日期、克数和做法。这应属于 Lotus 的观察，而不是完整厨房条目。以后将记录食材、做法、份量、接受情况、呕吐时间、排便、食欲、精神、照片与兽医意见。我们不会编造结果或将其称作通用食谱。"
            )
        ),
        section(
            t(
                "Nutrition note",
                "ملاحظة غذائية",
                "Note nutritionnelle",
                "营养说明"
            ),
            t(
                "An owner food observation is not a scientific experiment or proof of treatment. A meal is not a complete diet unless it has been appropriately formulated and verified. Read the homemade-food guide before replacing complete food.",
                "ملاحظة المالك ليست تجربة علمية ولا إثبات علاج. الوجبة ليست غذاءً متكاملاً ما لم تصغ وتتحقق منها بشكل مناسب. اقرأ دليل الغذاء المنزلي قبل استبدال الغذاء المتكامل.",
                "Une observation alimentaire n'est ni une étude scientifique ni une preuve de traitement. Un repas n'est pas complet sans formulation et vérification adaptées. Lisez le guide maison avant de remplacer l'aliment complet.",
                "主人的食物观察不是科学实验，也不能证明治疗效果。只有经适当配方和核实，一餐才可称为完整饮食。替换完整猫粮前请阅读自制食物指南。"
            ),
            "peach"
        )
    ],
    sources: []
}
