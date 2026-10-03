<script setup lang="ts">
import type { HealthTopic } from "~/types/foldcare"
import { translated as t } from "~/data/editorialHelpers"
import { visualLabels } from "~/data/editorialVisuals"
const props = defineProps<{ guide: HealthTopic }>()
const { languageCode } = useCurrentLanguage()
const isLotus = computed(() => props.guide.slug === "scottish-fold-siamese")
const known = computed(() =>
    isLotus.value
        ? [
              t(
                  "Veterinarian-assessed Fold × Siamese example",
                  "مثال هجين اسكتلندي × سيامي بحسب تقييم الطبيب",
                  "Exemple Fold × Siamois évalué par son vétérinaire",
                  "兽医评估的折耳 × 暹罗案例"
              ),
              t(
                  "Home since June 2021, at about 2½ months old",
                  "في المنزل منذ يونيو 2021 بعمر نحو شهرين ونصف",
                  "À la maison depuis juin 2021, vers 2½ mois",
                  "2021 年 6 月约两个半月大时来到家中"
              ),
              t(
                  "Real owner observations of daily life",
                  "ملاحظات حقيقية للمالك عن الحياة اليومية",
                  "De vraies observations de la vie quotidienne",
                  "主人对日常生活的真实观察"
              )
          ]
        : [
              t(
                  "A documented case, not a population study",
                  "حالة موثقة وليست دراسة سكانية",
                  "Un cas documenté, pas une étude de population",
                  "有记录的病例，不是群体研究"
              ),
              props.guide.slug === "scottish-fold-highlander"
                  ? t(
                        "One TRPV4 variant copy in the reported kitten",
                        "نسخة واحدة من متغير TRPV4 لدى القط الصغير المبلغ عنه",
                        "Une copie du variant TRPV4 chez le chaton rapporté",
                        "报告中的幼猫带有一个 TRPV4 变异拷贝"
                    )
                  : t(
                        "Two TRPV4 variant copies in the reported cat",
                        "نسختان من متغير TRPV4 لدى القط المبلغ عنه",
                        "Deux copies du variant TRPV4 chez le chat rapporté",
                        "报告中的猫带有两个 TRPV4 变异拷贝"
                    ),
              t(
                  "The original publication remains accessible below",
                  "المنشور الأصلي متاح أدناه",
                  "La publication originale reste accessible ci-dessous",
                  "下方保留原始文献链接"
              )
          ]
)
const unknown = computed(() =>
    isLotus.value
        ? [
              t(
                  "Parents and pedigree",
                  "الأبوان والنسب",
                  "Parents et pedigree",
                  "父母与血统"
              ),
              t(
                  "TRPV4 genotype",
                  "النمط الجيني لـ TRPV4",
                  "Génotype TRPV4",
                  "TRPV4 基因型"
              ),
              t(
                  "Outcomes for other cats with this ancestry",
                  "نتائج القطط الأخرى من هذا النسب",
                  "Évolution des autres chats de cette ascendance",
                  "同样祖先背景的其他猫会怎样"
              )
          ]
        : [
              t(
                  "How common these findings are in the mix",
                  "مدى شيوع هذه النتائج لدى الهجين",
                  "La fréquence de ces résultats dans ce croisement",
                  "这些发现在混种猫中有多常见"
              ),
              t(
                  "A reliable lifelong forecast for another cat",
                  "توقع موثوق لحياة قط آخر",
                  "Une prévision fiable à vie pour un autre chat",
                  "对另一只猫的可靠终身预测"
              ),
              t(
                  "Health status from a photograph alone",
                  "الحالة الصحية من الصورة وحدها",
                  "L'état de santé à partir d'une photo seule",
                  "仅凭照片判断健康状况"
              )
          ]
)
</script>
<template>
    <section class="bg-cream px-5 py-12 sm:px-8">
        <div class="mx-auto max-w-[80rem]">
            <EvidenceStatusBadge :slug="guide.slug" />
            <div class="mt-6 grid gap-5 md:grid-cols-2">
                <div
                    v-for="(points, index) in [known, unknown]"
                    :key="index"
                    class="rounded-[1.5rem] p-6 sm:p-8"
                    :class="index === 0 ? 'bg-sage-soft' : 'bg-peach-soft'"
                >
                    <h2 class="text-ink text-3xl">
                        {{
                            (index === 0
                                ? visualLabels.facts
                                : visualLabels.unknown)[languageCode]
                        }}
                    </h2>
                    <ul class="text-muted mt-5 space-y-4">
                        <li
                            v-for="point in points"
                            :key="point.en"
                            class="flex gap-3 leading-7"
                        >
                            <span class="text-peach" aria-hidden="true">{{
                                index === 0 ? "✓" : "?"
                            }}</span
                            ><span>{{ point[languageCode] }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
