import type { HealthTopic, LocalizedText } from "~/types/foldcare"
import {
    translated as t,
    paragraphSection as section
} from "~/data/editorialHelpers"
import { evidenceSources as sources } from "~/data/evidenceSources"

const headings = {
    what: t("What it is", "ما هو", "De quoi s'agit-il ?", "是什么"),
    signs: t(
        "What you may notice",
        "ما قد تلاحظه",
        "Ce que vous pouvez remarquer",
        "可能注意到什么"
    ),
    similar: t(
        "What can look similar",
        "ما قد يبدو مشابهاً",
        "Ce qui peut y ressembler",
        "哪些情况可能相似"
    ),
    home: t(
        "What you can safely do at home",
        "ما يمكنك فعله بأمان في المنزل",
        "Ce que vous pouvez faire à la maison",
        "在家可以安全做什么"
    ),
    avoid: t(
        "What not to do",
        "ما لا ينبغي فعله",
        "Ce qu'il faut éviter",
        "不要做什么"
    ),
    vet: t(
        "When to contact a vet",
        "متى تتصل بالطبيب",
        "Quand contacter le vétérinaire",
        "何时联系兽医"
    ),
    investigate: t(
        "How a vet may investigate",
        "كيف قد يفحص الطبيب",
        "Les examens possibles",
        "兽医可能如何检查"
    ),
    management: t(
        "Possible management — veterinarian-directed",
        "التعامل المحتمل — بإشراف الطبيب",
        "Prise en charge avec le vétérinaire",
        "可能的管理方式——由兽医指导"
    )
}

type TopicAdvice = {
    signs: LocalizedText
    similar: LocalizedText
    home: LocalizedText
    avoid: LocalizedText
    vet: LocalizedText
    investigate?: LocalizedText
    management?: LocalizedText
}

const movementAdvice: TopicAdvice = {
    signs: t(
        "Hesitation or lower jumps, difficulty getting down, limping, stiffness after rest, altered posture or paws, a thick or stiff tail, less play, handling intolerance, and trouble grooming or using the litter box can all matter. Note changes rather than forcing a demonstration.",
        "التردد أو القفز المنخفض وصعوبة النزول والعرج والتيبس بعد الراحة وتغير الوقفة أو الأقدام والذيل القاسي وقلة اللعب ورفض اللمس وصعوبة التنظيف أو الرمل مهمة. لاحظ التغير ولا تفرض عرضاً للحركة.",
        "Hésitation, sauts plus bas, descente difficile, boiterie, raideur après repos, posture ou pattes modifiées, queue rigide, moins de jeu, refus du toucher et toilette ou litière difficiles comptent. Observez sans forcer une démonstration.",
        "跳跃犹豫或变低、下来困难、跛行、休息后僵硬、姿态或爪形变化、粗硬尾巴、少玩、抗拒触碰以及梳毛或如厕困难都值得注意。记录变化，不要强迫展示。"
    ),
    similar: t(
        "Injury, other forms of arthritis, neurologic problems and systemic illness can also change movement. The Fold variant does not explain every limp. An examination is needed to distinguish them.",
        "قد تغير الإصابة وأنواع أخرى من التهاب المفاصل ومشاكل الأعصاب والأمراض العامة الحركة. متغير الطي لا يفسر كل عرج. يحتاج التفريق إلى فحص.",
        "Blessure, autres arthrites, troubles neurologiques et maladies générales peuvent modifier la mobilité. Le variant Fold n'explique pas chaque boiterie. Un examen permet de les distinguer.",
        "损伤、其他关节炎、神经问题和全身疾病也可能改变活动。折耳变异不能解释所有跛行，需要检查区分。"
    ),
    home: t(
        "Offer stable pet steps or ramps, non-slip routes, low-access furniture, a low-entry litter box and reachable food and water. Provide comfortable warm resting places without unsafe heat. Let the cat choose gentle activity and avoid forced jumps. These support comfort; they do not treat the underlying skeletal disorder.",
        "وفر درجات أو منحدرات ثابتة ومسارات غير زلقة وأثاثاً منخفضاً وصندوق رمل منخفض المدخل وغذاء وماء قريبين. وفر راحة دافئة دون حرارة خطرة، ودع القط يختار النشاط الهادئ دون قفز إجباري. هذه تدعم الراحة ولا تعالج اضطراب الهيكل.",
        "Proposez marches ou rampes stables, chemins antidérapants, meubles bas, litière basse et ressources accessibles. Offrez un repos chaud sans chauffage dangereux et laissez choisir l'activité douce sans saut forcé. Cela soutient le confort sans traiter le trouble osseux.",
        "提供稳固宠物台阶或坡道、防滑路线、低家具、低入口猫砂盆和易达食物饮水。提供温暖舒适休息处，避免危险热源。让猫选择温和活动，不强迫跳跃。这些支持舒适，不能治疗骨骼问题。"
    ),
    avoid: t(
        "Do not bend a stiff tail, stretch painful limbs or use human painkillers. Do not assume running means there is no pain. Random supplements are not a substitute for assessment; benefits for this disorder are uncertain.",
        "لا تثنِ الذيل المتيبس أو تمد الأطراف المؤلمة أو تستخدم مسكنات بشرية. الركض لا يعني غياب الألم. المكملات العشوائية لا تستبدل الفحص وفائدتها لهذا الاضطراب غير مؤكدة.",
        "Ne pliez pas la queue raide, n'étirez pas les membres douloureux et n'utilisez pas d'antalgiques humains. Courir ne prouve pas l'absence de douleur. Les compléments au hasard ne remplacent pas l'examen ; leurs bénéfices sont incertains.",
        "不要弯僵硬尾巴、拉伸疼痛四肢或用人用止痛药。能跑不表示不痛。随意补充营养不能替代评估，对此病的获益仍不确定。"
    ),
    vet: t(
        "Arrange a visit for new or persistent jumping changes, limping, a painful tail or reduced daily function. Rapidly worsening weakness, inability to stand, sudden limb paralysis, severe pain or major trauma needs urgent assessment. Sources: UC Davis Fold reference and Merck emergency guidance.",
        "رتب زيارة لتغير القفز الجديد أو المستمر أو العرج أو ألم الذيل أو تراجع الوظيفة اليومية. يحتاج الضعف سريع التفاقم أو عدم الوقوف أو شلل طرف مفاجئ أو الألم الشديد أو الإصابة الكبرى تقييماً عاجلاً. المصادر: ديفيس وإرشادات طوارئ Merck.",
        "Consultez pour changements nouveaux ou persistants des sauts, boiterie, queue douloureuse ou fonction réduite. Faiblesse rapidement aggravée, impossibilité de se tenir debout, paralysie soudaine, douleur sévère ou traumatisme majeur nécessitent une évaluation urgente. Sources : UC Davis et Merck.",
        "新出现或持续的跳跃变化、跛行、尾痛或日常功能下降应安排就诊。迅速加重的无力、无法站立、突然肢体瘫痪、剧痛或重大外伤需紧急评估。来源：UC Davis 折耳资料与 Merck 急症指南。"
    ),
    investigate: t(
        "Your vet may compare movement videos, examine joints, paws, spine and tail, and recommend imaging if indicated. Other tests depend on the examination. TRPV4 testing identifies genotype but cannot grade pain or replace an orthopedic assessment.",
        "قد يقارن الطبيب فيديو الحركة ويفحص المفاصل والأقدام والعمود والذيل ويقترح التصوير عند الحاجة. تحدد نتائج الفحص الاختبارات الأخرى. يكشف TRPV4 النمط الجيني ولا يقيس الألم أو يستبدل الفحص العظمي.",
        "Le vétérinaire peut comparer des vidéos, examiner articulations, pattes, colonne et queue et proposer une imagerie si indiquée. Les autres tests dépendent de l'examen. TRPV4 renseigne le génotype sans mesurer la douleur ni remplacer l'examen orthopédique.",
        "兽医可能比较活动视频，检查关节、爪、脊柱和尾巴，必要时做影像。其他检测依检查结果决定。TRPV4 检测识别基因型，不能评估疼痛程度或替代骨科检查。"
    )
}

const advice: Record<string, TopicAdvice> = {
    osteochondrodysplasia: movementAdvice,
    "pain-and-mobility": movementAdvice,
    vomiting: {
        signs: t(
            "Observe whether there is retching and abdominal effort, the time after a meal, undigested food, bile, foam, hair or blood, frequency, stool, appetite, weight, energy and drinking. Undigested food alone cannot distinguish vomiting from regurgitation. A video can help your vet.",
            "لاحظ التهوع وجهد البطن ووقت الحادثة بعد الوجبة والطعام غير المهضوم والصفرا والرغوة والشعر والدم والتكرار والبراز والشهية والوزن والطاقة والشرب. الطعام غير المهضوم وحده لا يميز القيء من الارتجاع. قد يفيد الفيديو الطبيب.",
            "Notez efforts abdominaux, délai après repas, aliments non digérés, bile, mousse, poils ou sang, fréquence, selles, appétit, poids, énergie et boisson. Les aliments non digérés seuls ne distinguent pas vomissement et régurgitation. Une vidéo peut aider.",
            "观察干呕和腹部用力、餐后时间、未消化食物、胆汁、泡沫、毛发或血、频率、排便、食欲、体重、精神及饮水。仅凭未消化食物不能区分呕吐和反流。视频能帮助兽医。"
        ),
        similar: t(
            "Regurgitation is more passive. Fast eating or a large meal may be associated with an episode, but hairballs, diet-related disease, parasites, gut inflammation, foreign objects and systemic illness can also be involved. Food changes and timing observations do not establish the cause.",
            "الارتجاع أقل جهداً. قد ترتبط الحادثة بالأكل السريع أو الوجبة الكبيرة، وقد تتدخل كرات الشعر أو المرض المرتبط بالغذاء أو الطفيليات أو التهاب الأمعاء أو الأجسام الغريبة أو المرض العام. توقيت الحادثة وتغيير الغذاء لا يثبتان السبب.",
            "La régurgitation est plus passive. Manger vite ou beaucoup peut accompagner un épisode, mais poils, maladie alimentaire, parasites, inflammation, corps étranger ou maladie générale peuvent intervenir. Le calendrier et une transition alimentaire ne prouvent pas la cause.",
            "反流通常更被动。快吃或大餐可能与一次发作有关，但毛球、食物相关疾病、寄生虫、肠炎、异物或全身病也可能参与。时间观察和换粮不能确定病因。"
        ),
        home: t(
            "Write down what happened and photograph or video an episode if safe. Keep usual water accessible. Ask your vet whether smaller portions of the normal complete food are appropriate. Keep a food history, including treats and medicines, rather than repeatedly trying new foods.",
            "سجل ما حدث وصور الحادثة إن كان آمناً. أبقِ الماء متاحاً واسأل الطبيب إن كانت حصص أصغر من الغذاء المعتاد المتكامل مناسبة. احتفظ بتاريخ الغذاء والمكافآت والأدوية بدلاً من تجارب متكررة.",
            "Notez les faits et filmez si possible sans risque. Laissez l'eau habituelle accessible. Demandez si de petites portions du même aliment complet conviennent. Gardez l'historique, friandises et médicaments compris, au lieu de multiplier les essais.",
            "记录经过，在安全时拍照或视频。保留正常饮水。问兽医是否适合少量多餐的原完整食物。保存包括零食和药物的饮食历史，不要反复试新食物。"
        ),
        avoid: t(
            "Do not assume every episode is hair, fast eating or food intolerance. Do not give human anti-vomiting drugs, copy Lotus's medication or withhold food for a prolonged period without veterinary direction. Do not pull visible string from the mouth or anus; seek veterinary help.",
            "لا تفترض أن كل حادثة شعر أو أكل سريع أو عدم تحمل. لا تعطِ أدوية قيء بشرية أو تنسخ دواء لوتس أو تمنع الطعام طويلاً دون توجيه. لا تسحب خيطاً ظاهراً من الفم أو الشرج؛ اطلب مساعدة الطبيب.",
            "Ne supposez pas que tout vient des poils, de la vitesse ou d'une intolérance. Pas d'antiémétique humain, de médicament copié sur Lotus ni de jeûne prolongé sans avis. Ne tirez pas une ficelle visible de la bouche ou de l'anus ; consultez.",
            "不要假定每次都是毛球、吃太快或食物不耐受。不要自行给人用止吐药、照抄 Lotus 用药或长时间禁食。嘴或肛门露出线绳时不要拉扯，应求助兽医。"
        ),
        vet: t(
            "Frequent episodes or vomiting with weakness, lethargy, reduced appetite, blood, diarrhea or thirst/urination changes need prompt evaluation. Repeated vomiting with inability to keep water down warrants same-day urgent contact. Suspected toxin or foreign-body ingestion is urgent. A quiet interval does not rule out disease. Sources: Cornell vomiting and Merck emergency guidance.",
            "الحوادث المتكررة أو القيء مع الضعف أو الخمول أو قلة الشهية أو الدم أو الإسهال أو تغير العطش والتبول تحتاج فحصاً سريعاً. القيء المتكرر مع عدم الاحتفاظ بالماء يستدعي اتصالاً عاجلاً في اليوم نفسه. الاشتباه بسم أو جسم غريب عاجل. فترة هدوء لا تستبعد المرض. المصادر: Cornell وMerck.",
            "Des épisodes fréquents ou accompagnés de faiblesse, abattement, perte d'appétit, sang, diarrhée ou changements de soif/urines nécessitent un examen rapide. Vomissements répétés sans garder l'eau : appel urgent le jour même. Toxique ou corps étranger suspecté : urgence. Une accalmie n'exclut pas une maladie. Sources : Cornell et Merck.",
            "频繁呕吐或伴随无力、嗜睡、食欲下降、血、腹泻或饮水排尿变化应及时评估。反复呕吐且留不住水应当日紧急联系。疑似毒物或异物摄入属紧急情况。暂时不吐不能排除疾病。来源：Cornell 和 Merck。"
        ),
        investigate: t(
            "A vet starts with the history and examination, then may recommend blood, urine or stool tests, radiographs or ultrasound. Further tests, including biopsy in selected cases, depend on findings. Management may involve fluids, a specific diet or prescribed medicines; it follows the cause rather than one universal remedy.",
            "يبدأ الطبيب بالتاريخ والفحص وقد يطلب الدم أو البول أو البراز أو الأشعة أو الألتراساوند. تعتمد فحوص إضافية ومنها خزعة لبعض الحالات على النتائج. قد يشمل التعامل سوائل أو غذاء محدداً أو أدوية موصوفة بحسب السبب لا علاجاً واحداً للجميع.",
            "Le vétérinaire part de l'histoire et de l'examen, puis peut proposer sang, urines, selles, radiographies ou échographie. D'autres tests, parfois une biopsie, dépendent des résultats. Fluides, régime ou médicaments répondent à la cause, sans remède universel.",
            "兽医先问病史并检查，再可能做血、尿或粪便检测、X 光或超声。进一步检查、包括部分病例的活检，依结果决定。补液、特定饮食或处方药物应针对病因，没有通用单一疗法。"
        )
    },
    pkd: {
        signs: t(
            "Early kidney disease may be quiet. Increased thirst or urination, weight loss, reduced appetite and vomiting can occur with kidney problems and need assessment. These signs do not diagnose PKD.",
            "قد يكون مرض الكلى المبكر صامتاً. قد يصاحب مشاكل الكلى عطش أو تبول أكثر وخسارة وزن وقلة شهية وقيء وتحتاج فحصاً. لا تشخص هذه العلامات المرض متعدد الكيسات.",
            "L'atteinte précoce peut être discrète. Soif ou urines accrues, amaigrissement, baisse d'appétit et vomissements méritent un bilan ; ils ne diagnostiquent pas la polykystose.",
            "早期肾病可能没有明显迹象。饮水或排尿增加、消瘦、食欲下降和呕吐可能伴随肾问题，应评估，但不能凭这些诊断多囊肾。"
        ),
        similar: t(
            "Chronic kidney disease has causes other than PKD. Diabetes, thyroid disease and other illness can also change thirst and weight. The Fold TRPV4 variant and PKD1 are separate genetic questions.",
            "للمرض الكلوي المزمن أسباب غير الكيسات. قد يغير السكري والغدة الدرقية وغيره العطش والوزن. متغير TRPV4 وPKD1 مسألتان وراثيتان منفصلتان.",
            "La maladie rénale chronique a d'autres causes. Diabète, thyroïde et autres maladies peuvent modifier soif et poids. TRPV4 et PKD1 sont deux questions génétiques distinctes.",
            "慢性肾病还有多囊肾以外的原因。糖尿病、甲状腺疾病等也可改变饮水和体重。TRPV4 与 PKD1 是不同遗传问题。"
        ),
        home: t(
            "Offer accessible fresh water, note appetite, weight and litter changes, and follow the prescribed diet if there is one. Record the food and supplements actually eaten for your vet.",
            "وفر ماء نظيفاً قريباً ولاحظ الشهية والوزن والرمل واتبع الغذاء الموصوف إن وجد. سجل الغذاء والمكملات المأكولة فعلياً للطبيب.",
            "Proposez de l'eau accessible, notez appétit, poids et litière et suivez le régime prescrit. Consignez aliments et compléments réellement consommés.",
            "提供易达清洁水，关注食欲、体重和排泄变化，遵循已有处方饮食。为兽医记录实际吃下的食物和补充剂。"
        ),
        avoid: t(
            "Do not start a renal diet, restrict water or add mineral supplements just because your cat is a Fold. A negative PKD1 test does not exclude all kidney disease.",
            "لا تبدأ حمية كلوية أو تقيد الماء أو تضف معادن لمجرد أن القط مطوي الأذن. فحص PKD1 السلبي لا يستبعد كل أمراض الكلى.",
            "Ne commencez pas de régime rénal, ne limitez pas l'eau et n'ajoutez pas de minéraux pour la seule ascendance Fold. Un test PKD1 négatif n'exclut pas toutes les maladies rénales.",
            "不要仅因折耳背景就开始肾脏处方饮食、限制水或添加矿物质。PKD1 阴性不能排除所有肾病。"
        ),
        vet: t(
            "Contact your vet for persistent thirst, weight or appetite changes. Straining without passing urine is an emergency, even if mistaken for constipation. Collapse or repeated vomiting with severe weakness needs urgent care. Sources: Cornell kidney reference and Merck emergency guidance.",
            "اتصل للطبيب لتغير العطش أو الوزن أو الشهية المستمر. محاولة التبول دون خروج بول طارئ حتى لو بدا إمساكاً. الانهيار أو القيء مع ضعف شديد يحتاج رعاية عاجلة. المصادر: Cornell للكلى وMerck للطوارئ.",
            "Consultez pour changements persistants de soif, poids ou appétit. Des efforts sans urine sont une urgence, même confondus avec constipation. Effondrement ou vomissements avec forte faiblesse nécessitent des soins urgents. Sources : Cornell et Merck.",
            "持续饮水、体重或食欲变化应联系兽医。用力却无尿是急症，即使看似便秘。倒下或反复呕吐伴严重无力需紧急护理。来源：Cornell 肾病与 Merck 急症资料。"
        )
    },
    "heart-health": {
        signs: t(
            "Heart disease may have no obvious early signs. Changes in breathing, exercise tolerance, appetite or energy deserve discussion. Open-mouth or laboured breathing is an emergency; do not wait to measure a perfect rate.",
            "قد لا تظهر علامات قلب مبكرة. تغير التنفس أو تحمل النشاط أو الشهية أو الطاقة يستحق النقاش. التنفس بفم مفتوح أو بجهد طارئ؛ لا تنتظر قياس معدل مثالي.",
            "Les premiers signes peuvent être absents. Changements respiratoires, tolérance à l'effort, appétit ou énergie méritent discussion. Respiration bouche ouverte ou laborieuse : urgence, sans attendre un chiffre parfait.",
            "心脏病早期可能无明显迹象。呼吸、活动耐受、食欲或精神变化值得讨论。张嘴或费力呼吸属急症，不要等精确计数。"
        ),
        similar: t(
            "Lung disease, asthma, pain and other problems can change breathing or activity. A murmur is not by itself a complete diagnosis, and absence of a murmur does not settle every heart question.",
            "قد تغير أمراض الرئة والربو والألم وغيرها التنفس والنشاط. النفخة ليست تشخيصاً كاملاً وحدها وغيابها لا يحسم كل أسئلة القلب.",
            "Maladie pulmonaire, asthme, douleur et autres troubles peuvent modifier respiration et activité. Un souffle seul n'est pas un diagnostic complet et son absence ne clôt pas toutes les questions.",
            "肺病、哮喘、疼痛等也可改变呼吸或活动。杂音本身不是完整诊断，没有杂音也不能解决所有心脏问题。"
        ),
        home: t(
            "Know your cat's relaxed breathing pattern, keep prescribed medicines consistent and bring changes to your vet. Keep handling and transport calm if breathing is abnormal; arrange help rather than forcing activity.",
            "اعرف نمط التنفس الهادئ والتزم بالأدوية الموصوفة وأبلغ الطبيب بالتغير. هدئ اللمس والنقل عند التنفس غير الطبيعي واطلب المساعدة دون فرض النشاط.",
            "Connaissez sa respiration au repos, suivez les prescriptions et signalez les changements. En cas de respiration anormale, gardez manipulation et transport calmes et demandez de l'aide sans forcer l'activité.",
            "了解猫放松时的呼吸规律，按处方用药，并向兽医报告变化。呼吸异常时平静触碰和转运，安排救助，不强迫活动。"
        ),
        avoid: t(
            "Do not diagnose heart disease from breed alone or give someone else's heart medicine. A home observation cannot replace echocardiography or the vet's examination.",
            "لا تشخص القلب من السلالة وحدها ولا تعطِ دواء قلب لغيره. الملاحظة المنزلية لا تستبدل الإيكو أو فحص الطبيب.",
            "Ne diagnostiquez pas sur la race seule et ne donnez pas les médicaments d'un autre animal. L'observation ne remplace ni échographie ni examen.",
            "不要仅凭品种诊断心脏病，或用其他动物的心脏药。居家观察不能替代心超或兽医检查。"
        ),
        vet: t(
            "Breathing difficulty, collapse or sudden painful hind-limb weakness/paralysis needs emergency care. Discuss less dramatic persistent changes promptly too. Sources: Cornell HCM and Merck emergency guidance.",
            "صعوبة التنفس أو الانهيار أو ضعف/شلل خلفي مفاجئ مؤلم يحتاج طوارئ. ناقش التغير المستمر الأقل وضوحاً سريعاً أيضاً. المصادر: Cornell للقلب وMerck للطوارئ.",
            "Difficulté respiratoire, effondrement ou faiblesse/paralysie postérieure soudaine et douloureuse nécessitent une urgence. Discutez aussi rapidement les changements persistants plus discrets. Sources : Cornell HCM et Merck.",
            "呼吸困难、倒下或突然疼痛性后肢无力／瘫痪需急诊。较轻但持续的变化也应及时讨论。来源：Cornell HCM 与 Merck 急症指南。"
        )
    },
    "ears-and-grooming": {
        signs: t(
            "Look for ear odour, redness, discharge, head shaking or scratching, new mats and less grooming. Handling discomfort can make care harder. Repeated vomiting needs its own assessment even when hair is present.",
            "راقب رائحة الأذن والاحمرار والإفرازات وهز الرأس والحك والتلبد الجديد وقلة التنظيف. قد يصعب الألم العناية. القيء المتكرر يحتاج فحصه حتى بوجود شعر.",
            "Surveillez odeur, rougeur, écoulement, secouements, grattage, nouveaux nœuds et baisse de toilette. L'inconfort complique les soins. Les vomissements répétés demandent un bilan même avec des poils.",
            "留意耳异味、发红、分泌物、甩头、抓挠、新结毛和少梳毛。触碰不适可增加护理困难。即使有毛，反复呕吐也需要单独检查。"
        ),
        similar: t(
            "Ear mites, infection, allergy or injury may look similar. Reduced grooming may reflect joint pain, dental pain or another illness rather than laziness.",
            "قد تتشابه عث الأذن والعدوى والحساسية والإصابة. قلة التنظيف قد تعكس ألم مفاصل أو أسنان أو مرضاً آخر وليس كسلاً.",
            "Acariens, infection, allergie ou blessure peuvent se ressembler. Une toilette réduite peut refléter douleur articulaire, dentaire ou autre maladie, pas de la paresse.",
            "耳螨、感染、过敏或损伤可能相似。减少梳毛可能是关节痛、牙痛或其他病，不是懒惰。"
        ),
        home: t(
            "Brush briefly and gently where touch is accepted; pause at discomfort. Inspect the outer ear without probing. Keep essentials accessible if movement limits grooming, and ask for safe help with mats.",
            "مشط بلطف لفترة قصيرة حيث يقبل اللمس وتوقف للانزعاج. افحص الأذن الخارجية دون إدخال أدوات. سهل الاحتياجات عند محدودية الحركة واطلب مساعدة آمنة للتلبد.",
            "Brossez brièvement et doucement sur les zones acceptées ; arrêtez à l'inconfort. Regardez l'oreille externe sans sonder. Facilitez les ressources et demandez de l'aide pour les nœuds.",
            "在接受触碰的地方短暂轻柔梳毛，不适时停下。只观察外耳，不探入。活动限制梳毛时方便日常用品，并为结毛求助。"
        ),
        avoid: t(
            "Do not force painful handling, cut close mats with scissors, push cotton swabs into ears or use unprescribed ear drops. Folded ears alone are not a reason for aggressive cleaning.",
            "لا تفرض اللمس المؤلم أو تقص التلبد القريب بالمقص أو تدخل أعواد القطن أو تستخدم قطرات غير موصوفة. الطي وحده ليس سبباً لتنظيف قوي.",
            "Ne forcez pas le toucher douloureux, ne coupez pas les nœuds proches avec des ciseaux, ne poussez pas de coton-tige et n'utilisez pas de gouttes non prescrites. Le pli seul ne justifie pas un nettoyage agressif.",
            "不要强迫疼痛触碰、用剪刀贴皮剪结毛、伸棉签入耳或用未开具耳药。折耳本身不需要强力清洁。"
        ),
        vet: t(
            "Contact your vet for pain, discharge, persistent scratching, sudden grooming changes or repeated vomiting. A new head tilt, imbalance or marked distress warrants prompt assessment.",
            "اتصل للألم أو الإفرازات أو الحك المستمر أو تغير التنظيف المفاجئ أو القيء المتكرر. ميل رأس جديد أو اختلال توازن أو انزعاج شديد يحتاج تقييماً سريعاً.",
            "Consultez pour douleur, écoulement, grattage persistant, changement de toilette ou vomissements répétés. Tête nouvellement inclinée, déséquilibre ou détresse marquée nécessitent un examen rapide.",
            "疼痛、分泌物、持续抓挠、突然梳毛变化或反复呕吐应联系兽医。新出现歪头、失衡或明显痛苦应及时评估。"
        )
    },
    "weight-and-quality-of-life": {
        signs: t(
            "Watch trends in weight, body condition, appetite, play, grooming and litter use. Extra weight adds effort to sore joints; weight loss or muscle loss also needs explanation. A single kilogram number cannot define ideal weight for every cat.",
            "راقب اتجاه الوزن وحالة الجسم والشهية واللعب والتنظيف والرمل. يزيد الوزن جهد المفاصل المؤلمة، وخسارة الوزن أو العضلات تحتاج تفسيراً. رقم وزن واحد لا يحدد المثالي لكل قط.",
            "Suivez poids, état corporel, appétit, jeu, toilette et litière. L'excès augmente l'effort des articulations douloureuses ; perte de poids ou muscle doit être expliquée. Un chiffre unique ne définit pas le poids idéal de tous.",
            "观察体重、体况、食欲、玩耍、梳毛和如厕趋势。超重增加疼痛关节负担，消瘦或肌肉减少也需解释。一个体重数字不能定义所有猫的理想体重。"
        ),
        similar: t(
            "Unmeasured portions, competition for food, pain and medical disease can all affect weight and daily activity. Reduced activity is not automatically ageing or a Fold diagnosis.",
            "الكميات غير المقاسة والتنافس على الغذاء والألم والمرض تؤثر على الوزن والنشاط. قلة النشاط ليست تلقائياً عمراً أو تشخيص طي.",
            "Portions non mesurées, concurrence alimentaire, douleur et maladie peuvent modifier poids et activité. Moins bouger n'est pas automatiquement l'âge ou une maladie Fold.",
            "未称量份量、抢食、疼痛和疾病都影响体重和活动。活动减少不自动等于衰老或折耳疾病。"
        ),
        home: t(
            "Measure complete food and treats, provide gentle play and accessible resting places, and note changes over time. Use a vet-agreed weight plan rather than restricting food abruptly.",
            "قس الغذاء والمكافآت وفر لعباً هادئاً وراحة سهلة وسجل التغير. استخدم خطة وزن متفقاً عليها بدلاً من تقييد مفاجئ.",
            "Mesurez aliments et friandises, proposez jeu doux et repos accessible, et notez l'évolution. Suivez un plan convenu plutôt que de restreindre brutalement.",
            "称量完整食物和零食，提供温和玩耍和易达休息处，记录趋势。采用与兽医协商的体重计划，不骤然限制食物。"
        ),
        avoid: t(
            "Do not crash-diet, judge comfort from running alone or copy Lotus's weight target. Do not assume vitamins solve low energy or poor appetite.",
            "لا تستخدم حمية قاسية أو تحكم على الراحة بالركض وحده أو تنسخ وزن لوتس. لا تفترض أن الفيتامينات تحل قلة الطاقة أو الشهية.",
            "Pas de régime brutal, de confort jugé sur la course seule ni d'objectif copié sur Lotus. Les vitamines ne résolvent pas automatiquement fatigue ou appétit réduit.",
            "不要骤然节食、仅凭能跑判断舒适或照抄 Lotus 的体重目标。不要假定维生素能解决精神或食欲低下。"
        ),
        vet: t(
            "Unexplained weight change or persistent loss of function deserves a visit. Refusal of food or marked lethargy needs prompt veterinary advice; do not wait for a weight threshold. Collapse or severe weakness needs urgent care. Sources: feline life-stage and Merck emergency guidance.",
            "تغير الوزن غير المفسر أو تراجع الوظيفة المستمر يحتاج زيارة. رفض الغذاء أو خمول واضح يحتاج نصيحة سريعة ولا تنتظر حد وزن. الانهيار أو الضعف الشديد عاجل. المصادر: مراحل حياة القطط وMerck.",
            "Poids inexpliqué ou fonction durablement réduite mérite une visite. Refus alimentaire ou abattement marqué : conseil rapide sans attendre un seuil. Effondrement ou faiblesse sévère : urgence. Sources : stades de vie félins et Merck.",
            "不明体重变化或持续功能下降应就诊。拒食或明显嗜睡需及时咨询，不要等体重阈值。倒下或严重无力需急诊。来源：猫生命阶段与 Merck 指南。"
        )
    }
}

// The same readable sequence helps owners compare topics without suggesting a diagnosis.
export function structureHealthGuide(topic: HealthTopic): HealthTopic {
    if (topic.slug === "when-to-call-a-vet")
        return {
            ...topic,
            reviewedOn: "2026-10-01",
            sections: veterinarySections,
            sources: [sources.emergency, sources.vomiting, sources.lifeStages]
        }
    const topicAdvice = advice[topic.slug]
    if (!topicAdvice) return topic
    const investigationIndex = {
        osteochondrodysplasia: 1,
        pkd: 1,
        "heart-health": 1
    }[topic.slug as "osteochondrodysplasia" | "pkd" | "heart-health"]
    const investigation = topicAdvice.investigate
        ? section(headings.investigate, topicAdvice.investigate)
        : investigationIndex !== undefined
          ? {
                ...topic.sections[investigationIndex]!,
                heading: headings.investigate
            }
          : section(
                headings.investigate,
                t(
                    "Your vet reviews the history and examines your cat. Tests depend on the findings: body condition and oral examination, ear examination and samples, or blood and urine tests may be appropriate. Bring food, medication and symptom details so the investigation answers the individual problem.",
                    "يراجع الطبيب التاريخ ويفحص القط. حسب النتائج قد يناسب تقييم الجسم والفم أو الأذن وعيناتها أو الدم والبول. أحضر تفاصيل الغذاء والدواء والأعراض لتوجيه الفحص للمشكلة الفردية.",
                    "Le vétérinaire examine et reprend l'histoire. Selon les résultats : état corporel, bouche, oreilles et prélèvements ou sang et urines. Apportez aliments, médicaments et symptômes pour orienter le bilan individuel.",
                    "兽医了解病史并检查。依据发现可能评估体况和口腔、耳检查和取样，或验血验尿。带上食物、药物和症状详情，帮助调查个体问题。"
                )
            )
    const managementIndex = {
        osteochondrodysplasia: 2,
        "pain-and-mobility": 1
    }[topic.slug as "osteochondrodysplasia" | "pain-and-mobility"]
    const management =
        managementIndex !== undefined
            ? {
                  ...topic.sections[managementIndex]!,
                  heading: headings.management
              }
            : section(
                  headings.management,
                  t(
                      "Management depends on the cause, overall health and response. Your vet may recommend a targeted diet, environmental changes, monitoring or prescribed treatment. Do not use another cat's medicines or assume a supplement replaces treatment. Agree how and when to review comfort, appetite and daily function.",
                      "يعتمد التعامل على السبب والصحة والاستجابة. قد يوصي الطبيب بغذاء محدد أو تغيير البيئة أو متابعة أو علاج موصوف. لا تستخدم دواء قط آخر ولا تفترض أن المكمل بديل العلاج. اتفق على مراجعة الراحة والشهية والوظيفة اليومية.",
                      "La prise en charge dépend de la cause, de la santé et de la réponse. Régime ciblé, environnement, surveillance ou traitement prescrit sont possibles. N'utilisez pas les médicaments d'un autre chat ni un complément en remplacement. Convenez du suivi du confort, appétit et fonctionnement.",
                      "管理取决于病因、整体健康和反应。兽医可能建议特定饮食、环境变化、监测或处方治疗。不要用其他猫药物，也不要把补充剂当治疗替代。约定何时复查舒适、食欲和日常功能。"
                  )
              )
    return {
        ...topic,
        reviewedOn: "2026-10-01",
        sections: [
            { ...topic.sections[0]!, heading: headings.what, tone: "plain" },
            section(headings.signs, topicAdvice.signs),
            section(headings.similar, topicAdvice.similar),
            section(headings.home, topicAdvice.home),
            section(headings.avoid, topicAdvice.avoid),
            section(headings.vet, topicAdvice.vet, "warning"),
            investigation,
            management
        ],
        sources: [
            ...topic.sources,
            sources.emergency,
            sources.lifeStages,
            ...(topic.slug === "pkd" ? [sources.kidney] : []),
            ...(topic.slug === "ears-and-grooming" ? [sources.ears] : []),
            ...(topic.slug === "osteochondrodysplasia"
                ? [sources.variation, sources.followUp]
                : [])
        ].filter(
            (source, index, all) =>
                all.findIndex((candidate) => candidate.url === source.url) ===
                index
        )
    }
}

const veterinarySections = [
    section(
        t(
            "Emergency / same-day care",
            "طوارئ / رعاية في اليوم نفسه",
            "Urgence / soins le jour même",
            "紧急／当日就医"
        ),
        t(
            "Seek emergency help now for breathing difficulty, collapse, inability to stand, sudden paralysis, severe pain, major trauma or straining without passing urine. Repeated vomiting with inability to keep water down, blood in vomit or black tarry stool warrants urgent same-day contact; severity and accompanying signs may make it an emergency. Suspected poisoning needs immediate advice. Sources: Merck emergency table and Cornell vomiting.",
            "اطلب طوارئ فوراً لصعوبة التنفس أو الانهيار أو عدم الوقوف أو الشلل المفاجئ أو الألم الشديد أو إصابة كبيرة أو محاولة التبول دون بول. القيء المتكرر دون الاحتفاظ بالماء أو دم القيء أو البراز الأسود يستدعي اتصالاً عاجلاً في اليوم نفسه؛ قد تجعله الشدة والأعراض طارئاً. الاشتباه بالتسمم يحتاج نصيحة فورية. المصادر: Merck وCornell.",
            "Urgence immédiate pour difficulté respiratoire, effondrement, impossibilité de se tenir debout, paralysie soudaine, douleur sévère, traumatisme majeur ou efforts sans urine. Vomissements répétés sans garder l'eau, sang ou selles noires : contact urgent le jour même ; l'état global peut en faire une urgence immédiate. Intoxication suspectée : conseil immédiat. Sources : Merck et Cornell.",
            "呼吸困难、倒下、无法站立、突然瘫痪、剧痛、重大外伤或用力无尿应立即急诊。反复呕吐且留不住水、吐血或黑柏油样便应当日紧急联系；严重程度与伴随症状可能要求立即急诊。怀疑中毒需立即咨询。来源：Merck 急症表与 Cornell 呕吐资料。"
        ),
        "warning"
    ),
    section(
        t(
            "Contact your vet soon",
            "اتصل بالطبيب قريباً",
            "Contacter rapidement le vétérinaire",
            "尽快联系兽医"
        ),
        t(
            "Persistent vomiting, appetite loss, marked lethargy, weight change, new limping, a stiff painful tail or reduced jumping deserves assessment. Food refusal can become serious; call promptly rather than relying on a fixed number of hours. Kittens, older cats and cats with existing illness may need earlier care. Sources: Cornell vomiting, Merck emergency table and feline life-stage guidance.",
            "القيء المستمر أو فقد الشهية أو خمول واضح أو تغير الوزن أو عرج جديد أو ذيل مؤلم أو قلة القفز يحتاج فحصاً. رفض الغذاء قد يصبح خطيراً؛ اتصل سريعاً ولا تعتمد على ساعات ثابتة. قد يحتاج الصغار والكبار والمرضى رعاية أبكر. المصادر: Cornell وMerck ومراحل حياة القطط.",
            "Vomissements persistants, perte d'appétit, abattement marqué, poids modifié, boiterie nouvelle, queue raide douloureuse ou sauts réduits méritent un bilan. Le refus alimentaire peut devenir sérieux : appelez sans vous fier à un délai fixe. Chatons, seniors et chats malades peuvent nécessiter une prise en charge plus précoce. Sources : Cornell, Merck et stades de vie.",
            "持续呕吐、食欲下降、明显嗜睡、体重变化、新跛行、僵硬疼痛尾巴或少跳都应评估。拒食可能变严重，应及时联系，不依赖固定小时数。幼猫、老年猫和已有疾病猫可能需更早护理。来源：Cornell、Merck 与生命阶段指南。"
        )
    ),
    section(
        t(
            "Monitor closely + discuss with your vet",
            "راقب بدقة وناقش مع الطبيب",
            "Observer attentivement et en discuter",
            "密切观察并与兽医讨论"
        ),
        t(
            "If a brief isolated change has resolved and your cat otherwise seems well, note food, water, stool, urination, movement and recurrence. Discuss it with your vet, especially if it returns. Observation is not a promise that a visit is unnecessary. Any worsening sign moves the decision toward earlier care.",
            "إذا زال تغير قصير منفرد وبدا القط بخير، سجل الغذاء والماء والبراز والتبول والحركة والتكرار. ناقشه مع الطبيب خاصة إن عاد. المراقبة ليست وعداً بعدم الحاجة إلى زيارة. التفاقم يدفع لرعاية أبكر.",
            "Si un changement bref et isolé a disparu et que le chat semble bien, notez alimentation, eau, selles, urines, mobilité et récidive. Discutez-le, surtout s'il revient. Observer ne garantit pas qu'une visite est inutile. Toute aggravation conduit à consulter plus tôt.",
            "短暂单次变化消失且猫其他状态正常时，记录食物、水、排便、排尿、活动和是否复发。与兽医讨论，尤其复发时。观察不保证无需就诊；任何加重都应更早求助。"
        )
    ),
    section(
        t(
            "Routine preventive care",
            "الوقاية الروتينية",
            "Prévention régulière",
            "常规预防保健"
        ),
        t(
            "Keep an individual schedule for examinations, vaccination, parasite prevention, dental care, body condition and age-related checks. Fold ancestry adds questions about joints and tail comfort, not a reason to skip general cat care. Ask your veterinary team what is appropriate for your cat's age, environment and medical history.",
            "اتبع جدولاً فردياً للفحص واللقاحات والطفيليات والأسنان وحالة الجسم والفحوص العمرية. يضيف النسب أسئلة المفاصل والذيل ولا يبرر ترك العناية العامة. اسأل الفريق عما يناسب عمر قطك وبيئته وتاريخه.",
            "Gardez un calendrier individuel d'examens, vaccins, antiparasitaires, dents, état corporel et bilans liés à l'âge. L'ascendance Fold ajoute des questions articulaires sans remplacer les soins généraux. Demandez ce qui convient à l'âge, au milieu et à l'histoire de votre chat.",
            "制定个体检查、疫苗、驱虫、牙齿、体况和年龄相关检查计划。折耳祖先增加关节与尾巴问题，不代表可以忽略一般猫护理。询问团队什么适合猫的年龄、环境和病史。"
        )
    ),
    section(
        t(
            "What to write down before calling",
            "ما تسجله قبل الاتصال",
            "Quoi noter avant d'appeler",
            "联系前记下什么"
        ),
        t(
            "Give your cat's age, known conditions and medicines, what changed, when it began, how often it happens, eating and drinking, urination and stool, and any possible injury or exposure. Bring product packaging or a video if useful. Do not delay an emergency to complete notes, and do not induce vomiting or give human medicines yourself.",
            "اذكر العمر والحالات والأدوية والتغير وبدايته وتكراره والأكل والشرب والتبول والبراز واحتمال إصابة أو تعرض. أحضر العبوة أو الفيديو إن أفاد. لا تؤخر الطوارئ لإكمال السجل ولا تسبب القيء أو تعطِ دواء بشرياً.",
            "Donnez âge, maladies, médicaments, changement, début, fréquence, alimentation, eau, urines, selles et exposition ou blessure possible. Apportez emballage ou vidéo. Ne retardez pas l'urgence pour finir les notes et ne faites ni vomir ni prendre de médicament humain vous-même.",
            "提供年龄、已知疾病和药物、变化内容、开始时间、频率、进食饮水、排尿排便以及可能外伤或危险接触。可带包装或视频。不要为记完笔记延误急诊，不自行催吐或给人药。"
        )
    )
]
