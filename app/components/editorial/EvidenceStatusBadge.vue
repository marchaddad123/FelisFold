<script setup lang="ts">
import { translated as t } from "~/data/editorialHelpers"
const props = defineProps<{ slug: string }>()
const { languageCode } = useCurrentLanguage()
const evidence = computed(() =>
    props.slug === "scottish-fold-siamese"
        ? {
              label: t(
                  "Our real example · owner observations",
                  "مثالنا الحقيقي · ملاحظات المالك",
                  "Notre exemple réel · observations du propriétaire",
                  "我们的真实案例 · 主人观察"
              ),
              classes: "bg-peach-soft text-peach"
          }
        : props.slug === "scottish-fold-highlander"
          ? {
                label: t(
                    "Documented genetic case · limited evidence",
                    "حالة وراثية موثقة · أدلة محدودة",
                    "Cas génétique documenté · données limitées",
                    "有记录的遗传案例 · 证据有限"
                ),
                classes: "bg-sky-soft text-sky"
            }
          : {
                label: t(
                    "Published veterinary case report",
                    "تقرير حالة بيطرية منشور",
                    "Cas clinique vétérinaire publié",
                    "已发表兽医病例报告"
                ),
                classes: "bg-sage-soft text-sage"
            }
)
</script>
<template>
    <p
        class="inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs leading-5 font-semibold"
        :class="evidence.classes"
    >
        <span aria-hidden="true">↳</span>{{ evidence.label[languageCode] }}
    </p>
</template>
