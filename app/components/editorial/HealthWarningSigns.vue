<script setup lang="ts">
import { translated as t } from "~/data/editorialHelpers"
import { visualLabels } from "~/data/editorialVisuals"
const { languageCode } = useCurrentLanguage()
const { localizedPath } = useLocalizedPath()
const urgent = t(
    "Breathing difficulty, collapse or straining without passing urine needs immediate veterinary help.",
    "صعوبة التنفس أو الانهيار أو محاولة التبول دون خروج بول تحتاج إلى مساعدة بيطرية فورية.",
    "Difficulté à respirer, effondrement ou efforts pour uriner sans urine nécessitent une aide vétérinaire immédiate.",
    "呼吸困难、倒下或用力却无法排尿，需要立即寻求兽医帮助。"
)
const signs = [
    t("Repeated vomiting", "قيء متكرر", "Vomissements répétés", "反复呕吐"),
    t(
        "Appetite or weight changes",
        "تغير الشهية أو الوزن",
        "Appétit ou poids modifiés",
        "食欲或体重变化"
    ),
    t(
        "New limping or reduced jumping",
        "عرج جديد أو قفز أقل",
        "Boiterie nouvelle ou sauts réduits",
        "新出现的跛行或跳跃减少"
    ),
    t(
        "A stiff, uncomfortable tail",
        "ذيل متيبس أو مؤلم",
        "Queue raide ou inconfortable",
        "尾巴僵硬或不适"
    ),
    t(
        "Marked lethargy or loss of function",
        "خمول واضح أو فقدان القدرة على النشاط",
        "Abattement marqué ou perte de fonction",
        "明显精神不振或功能下降"
    )
]
</script>
<template>
    <aside
        class="bg-danger-soft border-danger/30 rounded-[1.5rem] border p-6 sm:p-8"
    >
        <p class="text-danger text-3xl" aria-hidden="true">!</p>
        <h2 class="text-ink mt-2 text-3xl">
            {{ visualLabels.warning[languageCode] }}
        </h2>
        <p class="text-ink mt-5 text-sm leading-7 font-semibold">
            {{ urgent[languageCode] }}
        </p>
        <ul class="mt-5 space-y-3">
            <li
                v-for="sign in signs"
                :key="sign.en"
                class="border-danger/20 text-muted border-t pt-3 text-sm leading-6"
            >
                {{ sign[languageCode] }}
            </li>
        </ul>
        <NuxtLink
            :to="localizedPath('/health/when-to-call-a-vet')"
            class="text-danger mt-5 inline-flex min-h-11 items-center gap-3 font-semibold underline underline-offset-4"
            >{{
                t(
                    "When to call a vet",
                    "متى تتصل بالطبيب",
                    "Quand appeler le vétérinaire",
                    "何时联系兽医"
                )[languageCode]
            }}
            →</NuxtLink
        >
    </aside>
</template>
