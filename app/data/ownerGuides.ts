import type { HealthTopic } from "~/types/foldcare"
import {
    translated as t,
    paragraphSection as section,
    editorialLabels
} from "~/data/editorialHelpers"
import { evidenceSources as sources } from "~/data/evidenceSources"

export const careGuide: HealthTopic = {
    slug: "care",
    icon: "🐾",
    reviewedOn: "2026-10-01",
    eyebrow: editorialLabels.evidence,
    title: t(
        "Make everyday life easier",
        "اجعل الحياة اليومية أسهل",
        "Faciliter la vie quotidienne",
        "让日常生活更轻松"
    ),
    summary: t(
        "Practical home adaptations and calmer veterinary visits. These changes support comfort; they do not replace examination or treatment.",
        "تعديلات منزلية عملية وزيارات أهدأ للطبيب. تدعم الراحة ولا تستبدل الفحص أو العلاج.",
        "Des adaptations pratiques et des visites plus calmes. Elles soutiennent le confort sans remplacer examen ou traitement.",
        "实用居家调整与更平静的就诊。这些改变支持舒适，不能替代检查和治疗。"
    ),
    sections: [
        section(
            t(
                "Set up steps or a ramp",
                "رتب درجات أو منحدراً",
                "Installer des marches ou une rampe",
                "设置台阶或坡道"
            ),
            t(
                "1. Choose a place your cat already uses. 2. Provide a stable, non-slip route with manageable steps and a safe landing. 3. Check that it cannot slide or tip. 4. Let your cat explore at their own pace; do not force a jump. 5. Observe both getting up and getting down, and adjust with your vet if it still looks uncomfortable. Keep a lower resting option nearby.",
                "1. اختر مكاناً يستخدمه القط. 2. وفر طريقاً ثابتاً غير زلق بدرجات مناسبة وهبوط آمن. 3. تأكد أنه لا ينزلق أو ينقلب. 4. دعه يستكشف بحرية ولا تفرض القفز. 5. راقب الصعود والنزول وعدل مع الطبيب إن بقي الانزعاج. وفر مكان راحة منخفضاً قريباً.",
                "1. Choisissez un endroit déjà utilisé. 2. Prévoyez une route stable, antidérapante, avec marches accessibles et arrivée sûre. 3. Vérifiez l'absence de glissement ou bascule. 4. Laissez explorer sans forcer. 5. Observez montée et descente et adaptez avec le vétérinaire si l'inconfort persiste. Gardez un couchage plus bas à proximité.",
                "1. 选择猫原本常去的位置。2. 提供稳固、防滑、步距合适且落脚安全的路线。3. 确认不会滑动或倾倒。4. 让猫自行探索，不强迫跳跃。5. 观察上去与下来；仍不适时与兽医一起调整。附近保留低处休息选项。"
            )
        ),
        section(
            t(
                "Bring essentials within easy reach",
                "قرب الاحتياجات الأساسية",
                "Rendre les ressources accessibles",
                "让必需品容易到达"
            ),
            t(
                "Use a low-entry litter box with enough space to turn around, clean non-slip paths and food and water on an accessible level. Offer quiet comfortable resting places, without unsafe heat sources. In multi-cat homes, provide separate access so a less mobile cat is not blocked by another cat. New litter accidents can reflect illness as well as access difficulty.",
                "استخدم صندوق رمل منخفض المدخل واسعاً للدوران ومسارات نظيفة غير زلقة وغذاء وماء في مستوى سهل. وفر راحة هادئة دون مصادر حرارة خطرة. وفر وصولاً منفصلاً في المنزل متعدد القطط كي لا يمنع قط آخر الأقل حركة. قد تعكس حوادث الرمل مرضاً إضافة لصعوبة الوصول.",
                "Utilisez une litière basse assez large pour tourner, des chemins propres antidérapants et nourriture et eau à un niveau accessible. Offrez des repos calmes sans chauffage dangereux. Dans un foyer multichat, prévoyez des accès séparés. Des accidents de litière nouveaux peuvent aussi traduire une maladie.",
                "使用低入口且能转身的猫砂盆，保持道路清洁防滑，把食物和水放在易达高度。提供安静舒适的休息处，避免危险热源。多猫家庭应提供独立通道，避免其他猫挡住活动困难的猫。新的排泄事故也可能与疾病有关。"
            )
        ),
        section(
            t(
                "Brush without forcing sore areas",
                "مشط دون إجبار المناطق المؤلمة",
                "Brosser sans forcer les zones sensibles",
                "梳毛时不要强迫触碰疼痛部位"
            ),
            t(
                "Choose a calm moment and start with a brief session where your cat accepts touch. Stop if they pull away, tense up or protest. Do not stretch limbs or bend a stiff tail. Ask a vet about pain or mats you cannot safely remove. Look at the ears for redness, odour or discharge; do not push cotton swabs into the canal.",
                "اختر وقتاً هادئاً وجلسة قصيرة في مكان يتقبل لمسَه. توقف إذا ابتعد أو توتر أو اعترض. لا تمد الأطراف ولا تثنِ الذيل المتيبس. اسأل الطبيب عن الألم أو الشعر المتلبد الذي لا تستطيع إزالته بأمان. راقب احمرار الأذن والرائحة والإفرازات ولا تدخل أعواد القطن.",
                "Choisissez un moment calme et une séance courte sur une zone où le toucher est accepté. Arrêtez en cas de retrait, tension ou protestation. N'étirez pas les membres et ne pliez pas la queue raide. Consultez pour douleur ou nœuds difficiles. Vérifiez rougeur, odeur ou écoulement des oreilles sans enfoncer de coton-tige.",
                "选择平静时刻，从猫接受触碰的部位短暂开始。猫躲开、紧张或抗议时停下。不要拉伸四肢或弯僵硬尾巴。无法安全清理的结毛或疼痛应咨询兽医。留意耳朵发红、异味或分泌物，不要把棉签伸入耳道。"
            )
        ),
        section(
            t(
                "Prepare for the veterinary visit",
                "استعد لزيارة الطبيب",
                "Préparer la consultation",
                "为就诊做准备"
            ),
            t(
                "Leave the carrier available as a familiar resting place before the visit. Use familiar bedding, support the carrier securely and keep travel calm. Bring records, current food and medicine names, questions and short videos of movement or vomiting. Tell the clinic if handling is painful or very stressful. Any pre-visit medicine must be prescribed for your cat; do not borrow another pet's medication.",
                "اجعل الحاملة مكان راحة مألوفاً قبل الزيارة. استخدم فراشاً مألوفاً وثبت الحاملة وهدئ السفر. أحضر السجلات وأسماء الغذاء والأدوية والأسئلة وفيديو الحركة أو القيء. أبلغ العيادة إن كان اللمس مؤلماً أو مرهقاً. أي دواء قبل الزيارة يجب أن يصفه الطبيب لقطك؛ لا تستعر دواء حيوان آخر.",
                "Laissez la caisse comme couchage familier avant la visite. Utilisez une literie connue, maintenez-la stable et voyagez calmement. Apportez dossiers, aliments, médicaments, questions et vidéos. Prévenez si le toucher est douloureux ou stressant. Tout médicament avant visite doit être prescrit pour ce chat, jamais emprunté.",
                "就诊前把航空箱放在家中作为熟悉休息处。用熟悉垫布，稳定支撑箱子并保持出行平静。带上记录、食物和药物名称、问题以及活动或呕吐短视频。若触碰疼痛或压力很大，应告知诊所。就诊前药物必须为这只猫开具，不要借用其他宠物药物。"
            )
        )
    ],
    sources: [
        sources.lifeStages,
        sources.genetics,
        sources.vomiting,
        sources.catVisit,
        sources.ears
    ]
}

export const earlyLotusLessons: HealthTopic = {
    slug: "what-i-wish-i-knew",
    icon: "🐾",
    reviewedOn: "2026-10-01",
    eyebrow: editorialLabels.owner,
    title: editorialLabels.lessons,
    summary: t(
        "I found a tiny, scared cat in a pet shop in 2021. These are the questions I would bring to his first months now, knowing what I later noticed.",
        "وجدت قطاً صغيراً خائفاً في متجر حيوانات عام 2021. هذه الأسئلة التي كنت سأطرحها في أشهره الأولى بعد ما لاحظته لاحقاً.",
        "J'ai trouvé un tout petit chat effrayé dans une animalerie en 2021. Voici les questions que je poserais pendant ses premiers mois, avec ce que j'ai appris ensuite.",
        "2021 年，我在宠物店发现了一只小小的、害怕的猫。知道后来观察到的事情后，这些是我希望在他最初几个月提出的问题。"
    ),
    sections: [
        section(
            t(
                "A lively kitten does not answer every health question",
                "نشاط الصغير لا يجيب عن كل الأسئلة الصحية",
                "Un chaton actif ne répond pas à toutes les questions",
                "活泼幼猫不能回答所有健康问题"
            ),
            t(
                "Lotus ran, jumped high and played when he was young. Around age two I started noticing strength and mobility changes. I would now ask about Fold ancestry and long-term comfort early, without assuming he was destined to follow a particular course. His vet assessed him as Fold × Siamese, but his parents and genotype remain unknown.",
                "كان لوتس يركض ويقفز عالياً ويلعب. قرب السنتين لاحظت تغير القوة والحركة. كنت سأسأل مبكراً عن النسب والراحة طويلة المدى دون افتراض مسار محدد. قيّمه الطبيب كهجين مع سيامي، لكن والدَيه ونمطه الجيني مجهولان.",
                "Lotus courait, sautait haut et jouait. Vers deux ans, j'ai remarqué des changements de force et de mobilité. Je poserais plus tôt les questions d'ascendance et de confort sans lui assigner un destin. Son vétérinaire l'a évalué comme Fold × Siamois, mais parents et génotype restent inconnus.",
                "Lotus 小时候会跑、跳得高，也爱玩。约两岁时，我发现力量和活动变化。现在我会更早询问折耳祖先与长期舒适问题，而不假定某种必然病程。兽医评估他为折耳 × 暹罗，但父母和基因型仍未知。"
            )
        ),
        section(
            t(
                "Remember how he moves, not just how cute he looks",
                "تذكر حركته وليس جماله فقط",
                "Se souvenir de sa mobilité, pas seulement de son apparence",
                "记住他如何活动，不只关注可爱外形"
            ),
            t(
                "I would keep a few ordinary videos of walking, play and getting up and down. Today he hesitates before jumping, moves to the edge and sometimes lands awkwardly; going down is often harder. His tail is partly stiff and handling can be brief. There are good and difficult days, and he still plays with Kinder. Those details are useful questions for his vet, not a diagnosis from me.",
                "كنت سأحتفظ بفيديوهات عادية للمشي واللعب والصعود والنزول. اليوم يتردد ويقترب من الحافة وقد يهبط بشكل غير مريح؛ النزول أصعب غالباً. ذيله متيبس جزئياً وتقبل الحمل قصير. هناك أيام جيدة وصعبة وما زال يلعب مع كيندر. هذه تفاصيل مفيدة للطبيب وليست تشخيصاً مني.",
                "Je garderais quelques vidéos ordinaires de marche, jeu, montée et descente. Aujourd'hui il hésite, s'approche du bord et atterrit parfois maladroitement ; descendre est souvent plus difficile. Sa queue est partiellement raide et le portage bref. Il joue encore avec Kinder, avec de bons et mauvais jours. Ces détails servent au vétérinaire, pas à mon diagnostic.",
                "我会保留一些平常走路、玩耍、上下的视频。现在他跳前犹豫，走到边缘，有时落地不稳，往下跳常更难。尾巴部分僵硬，被抱的耐受时间短。他有好日子也有困难日子，仍与 Kinder 玩。这些是给兽医的线索，不是我的诊断。"
            )
        ),
        section(
            t(
                "Make the easy route available",
                "وفر الطريق الأسهل",
                "Prévoir un chemin plus facile",
                "提供轻松路线"
            ),
            t(
                "I still have not added dedicated pet stairs. That is a change I plan to make, especially for coming down. I would think about stable steps, low-access resting places and non-slip surfaces before a route becomes difficult, then let Lotus choose. I would never test his comfort by forcing a jump or bending his tail.",
                "لم أضف بعد درجاً مخصصاً. هذا تغيير أخطط له خاصة للنزول. كنت سأفكر في درجات ثابتة وراحة منخفضة وأسطح غير زلقة قبل صعوبة الطريق ثم أترك الخيار للوتس. لن أختبر راحته بإجبار القفز أو ثني الذيل.",
                "Je n'ai pas encore ajouté d'escalier dédié. C'est prévu, surtout pour descendre. Je penserais aux marches stables, couchages bas et surfaces antidérapantes avant les difficultés, puis laisserais Lotus choisir. Jamais de saut forcé ou de queue pliée pour tester.",
                "我尚未添置专用宠物台阶，但计划改善，尤其是下来的路线。我会在路线变难前考虑稳固台阶、低处休息点和防滑面，让 Lotus 自己选择。不会强迫跳跃或弯尾巴来测试舒适度。"
            )
        ),
        section(
            t(
                "Food observations need details and limits",
                "ملاحظات الطعام تحتاج تفاصيل وحدوداً",
                "Décrire et limiter les observations alimentaires",
                "食物观察需要细节和界限"
            ),
            t(
                "Vomiting started later, around age three. Smaller meals and less mixing close together seemed easier; plain cooked chicken seemed to help during one period. I wish I had recorded dates, grams and the whole response. Those impressions do not identify a cause or show that chicken is complete. Medication history, including Motilium/domperidone, is something to review with his vet, never a dose for readers to copy.",
                "بدأ القيء لاحقاً قرب الثالثة. بدت الوجبات الصغيرة وتقليل الخلط أسهل، وبدا الدجاج مفيداً خلال فترة. أتمنى لو سجلت التاريخ والغرامات والاستجابة كاملة. لا تحدد هذه الانطباعات سبباً ولا تثبت اكتمال الدجاج. تاريخ الأدوية ومنها Motilium/domperidone يراجع مع الطبيب ولا يقدم كجرعة للقراء.",
                "Les vomissements ont commencé vers trois ans. Petits repas, moins de mélanges rapprochés et une période de poulet semblaient aider. J'aurais aimé noter dates, grammes et réponse complète. Ces impressions n'identifient ni cause ni équilibre du poulet. Les médicaments, dont Motilium/domperidone, se revoient avec son vétérinaire, sans dose à copier.",
                "呕吐约三岁才开始。少量餐食、避免短时间混合不同食物，以及一段时间的清煮鸡肉似乎更合适。我希望当时记下日期、克数和完整反应。这些印象不能确定病因或证明鸡肉完整。包括 Motilium/domperidone 在内的用药史应与兽医核对，不能让读者照抄剂量。"
            )
        ),
        section(
            t(
                "Ask for records and keep uncertainty visible",
                "اطلب السجلات وأوضح المجهول",
                "Demander les dossiers et montrer les incertitudes",
                "索取记录并明确未知信息"
            ),
            t(
                "I remember imaging and abnormal-looking limb structure being discussed around age two, but I do not have the report or imaging type here. I do not know the exact earlier pain medicine or the Eminent food product. I would keep copies of reports, prescriptions and food labels from the beginning. FelisFold can tell this story honestly while those blanks remain.",
                "أتذكر التصوير ومناقشة بنية أطراف بدت غير طبيعية قرب السنتين، لكن التقرير ونوع التصوير غير متاحين هنا. لا أعرف دواء الألم السابق أو منتج Eminent بدقة. كنت سأحتفظ بالتقارير والوصفات والملصقات منذ البداية. يمكن للموقع رواية القصة بصدق رغم هذه الفراغات.",
                "Je me souviens d'imagerie et d'une structure des membres décrite comme anormale vers deux ans, sans rapport ni type d'imagerie disponible ici. L'ancien antalgique et le produit Eminent exact sont inconnus. Je conserverais comptes rendus, prescriptions et étiquettes dès le départ. Le récit peut rester honnête avec ces cases vides.",
                "我记得约两岁时做过影像并讨论过看似异常的四肢结构，但这里没有报告和影像类型。此前止痛药和 Eminent 具体产品也未知。我会从一开始保存报告、处方和食物标签。保留这些空白，FelisFold 仍能诚实讲述故事。"
            )
        )
    ],
    sources: []
}
