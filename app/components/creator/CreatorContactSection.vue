<script setup lang="ts">
import { creatorProfile } from "~/data/creatorProfile"

const { languageCode } = useCurrentLanguage()

const text = computed(() => {
    if (languageCode.value === "ar")
        return {
            eyebrow: "تواصل مع مارك",
            title: "أسئلة واضحة، ورسالة مباشرة.",
            copy: "لأسئلة FelisFold أو التصحيحات أو قصص Scottish Fold أو اقتراح مصادر أو تعاون تقني، استخدم البريد الإلكتروني أو إحدى القنوات أدناه.",
            note: "لا يمكن تقديم تشخيص أو نصيحة بيطرية فردية عبر الرسائل. في الحالات الصحية تواصل مع طبيب بيطري يفحص قطك."
        }
    if (languageCode.value === "fr")
        return {
            eyebrow: `Contacter ${creatorProfile.name}`,
            title: "Une question claire, un message direct.",
            copy: "Pour une question sur FelisFold, une correction, une histoire de Scottish Fold, une suggestion de source ou une collaboration technique, écrivez par e-mail ou utilisez l'un des liens ci-dessous.",
            note: "Aucun diagnostic ni conseil vétérinaire individuel ne peut être donné par message. Pour la santé de votre chat, contactez un vétérinaire qui peut l'examiner."
        }
    if (languageCode.value === "zh")
        return {
            eyebrow: `联系 ${creatorProfile.name}`,
            title: "清楚的问题，直接的联系。",
            copy: "如有 FelisFold 问题、内容纠正、苏格兰折耳猫故事、资料来源建议或技术合作，请通过电子邮件或以下渠道联系。",
            note: "私信无法提供诊断或个别兽医建议。如有健康问题，请联系能实际检查猫咪的兽医。"
        }
    return {
        eyebrow: `Contact ${creatorProfile.name}`,
        title: "A clear question. A direct line.",
        copy: "For FelisFold questions, corrections, Scottish Fold stories, source suggestions or a technical collaboration, use email or one of the channels below.",
        note: "Messages cannot provide a diagnosis or individual veterinary advice. For health concerns, contact a veterinarian who can examine your cat."
    }
})
</script>

<template>
    <section class="dark-panel paper-texture px-5 py-10 sm:px-8 sm:py-12">
        <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
                <p
                    class="text-xs font-bold tracking-[0.18em] text-[#efb79e] uppercase"
                >
                    {{ text.eyebrow }}
                </p>
                <h2
                    class="font-editorial mt-2 text-4xl leading-tight text-[#fffaf1]"
                >
                    {{ text.title }}
                </h2>
                <p class="mt-4 leading-7 text-[#c8d5cf]">{{ text.copy }}</p>
                <p class="mt-4 text-sm leading-6 text-[#9fb4aa]">
                    {{ text.note }}
                </p>
            </div>
            <CreatorSocialLinks variant="full" />
        </div>
    </section>
</template>
