<script setup lang="ts">
import { isLanguageCode } from "~/utils/languages"

definePageMeta({ validate: (route) => isLanguageCode(route.params.locale) })
const { languageCode } = useCurrentLanguage()
const { loadEntries, entries, clearAllEntries } = useHealthTracker()
const confirmClearIsOpen = ref(false)

function clearTrackerEntries() {
    clearAllEntries()
    confirmClearIsOpen.value = false
}

onMounted(loadEntries)

const title = computed(() =>
    languageCode.value === "ar"
        ? "سجل يوميات قطتك"
        : languageCode.value === "fr"
          ? "Journal de santé de votre chat"
          : languageCode.value === "zh"
            ? "猫咪健康记录"
            : "Your cat's health tracker"
)
const copy = computed(() =>
    languageCode.value === "ar"
        ? "سجل الوجبات والقيء والوزن والحركة والأدوية والملاحظات. البيانات تبقى في هذا المتصفح فقط."
        : languageCode.value === "fr"
          ? "Notez repas, vomissements, poids, mobilité, médicaments et observations. Les données restent uniquement dans ce navigateur."
          : languageCode.value === "zh"
            ? "记录进餐、呕吐、体重、活动、用药和备注。数据只保存在当前浏览器。"
            : "Record meals, vomiting, weight, mobility, medicine and notes. The data stays in this browser only."
)
const trackerLabels = computed(() => {
    if (languageCode.value === "ar")
        return {
            eyebrow: "أداة محلية خاصة",
            clear: "حذف الكل",
            clearTitle: "حذف كل السجلات؟",
            clearCopy:
                "سيتم حذف السجل المحلي من هذا المتصفح. لا توجد نسخة سحابية.",
            confirm: "حذف السجلات",
            cancel: "إلغاء"
        }
    if (languageCode.value === "fr")
        return {
            eyebrow: "Outil local privé",
            clear: "Tout effacer",
            clearTitle: "Effacer toutes les entrées ?",
            clearCopy:
                "Cela supprime l'historique local de ce navigateur. Il n'existe pas de copie cloud.",
            confirm: "Effacer les entrées",
            cancel: "Annuler"
        }
    if (languageCode.value === "zh")
        return {
            eyebrow: "本机私密工具",
            clear: "全部清除",
            clearTitle: "清除所有记录？",
            clearCopy: "这会删除当前浏览器里的本地记录，没有云端副本。",
            confirm: "清除记录",
            cancel: "取消"
        }
    return {
        eyebrow: "Private local tool",
        clear: "Clear all",
        clearTitle: "Clear all tracker entries?",
        clearCopy:
            "This removes the local history from this browser. There is no cloud copy.",
        confirm: "Clear entries",
        cancel: "Cancel"
    }
})

usePageSeo({
    title: computed(() => `${title.value} — FoldCare`),
    description: copy
})
</script>

<template>
    <div class="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20">
        <div class="flex flex-wrap items-end justify-between gap-5">
            <AppSectionHeading
                :eyebrow="trackerLabels.eyebrow"
                :title="title"
                :copy="copy"
            />
            <button
                v-if="entries.length"
                type="button"
                class="border-border bg-paper text-muted hover:border-danger/30 hover:text-danger rounded-full border px-4 py-2 text-sm font-medium"
                @click="confirmClearIsOpen = true"
            >
                {{ trackerLabels.clear }}
            </button>
        </div>

        <TrackerSummary class="mt-9" />

        <div class="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <HealthTrackerForm />
            <TrackerEntryList />
        </div>

        <MedicalInformationNotice class="mt-10" />

        <div
            v-if="confirmClearIsOpen"
            class="fixed inset-0 z-[100] grid place-items-center bg-black/40 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="clear-tracker-title"
            @click.self="confirmClearIsOpen = false"
        >
            <div class="bg-paper w-full max-w-md rounded-[2rem] p-6 shadow-2xl">
                <h2
                    id="clear-tracker-title"
                    class="text-ink text-xl font-semibold"
                >
                    {{ trackerLabels.clearTitle }}
                </h2>
                <p class="text-muted mt-3 leading-7">
                    {{ trackerLabels.clearCopy }}
                </p>
                <div class="mt-6 flex flex-wrap gap-3">
                    <button
                        type="button"
                        class="bg-danger rounded-full px-5 py-2.5 font-medium text-white"
                        @click="clearTrackerEntries"
                    >
                        {{ trackerLabels.confirm }}
                    </button>
                    <button
                        type="button"
                        class="border-border text-ink rounded-full border px-5 py-2.5 font-medium"
                        @click="confirmClearIsOpen = false"
                    >
                        {{ trackerLabels.cancel }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
