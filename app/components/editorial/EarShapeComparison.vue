<script setup lang="ts">
import { translated as t } from "~/data/editorialHelpers"
import { foldPhoto, type EditorialPhoto } from "~/data/editorialVisuals"
const { languageCode } = useCurrentLanguage()
const labels = {
    folded: t(
        "Forward-folded ears",
        "أذنان مطويتان للأمام",
        "Oreilles pliées vers l'avant",
        "向前折的耳朵"
    ),
    straight: t(
        "Upright ears",
        "أذنان مستقيمتان",
        "Oreilles droites",
        "直立耳朵"
    ),
    note: t(
        "Ear shape, ancestry and genotype are different information.",
        "شكل الأذن والنسب والنمط الجيني معلومات مختلفة.",
        "Forme des oreilles, ascendance et génotype sont des informations distinctes.",
        "耳形、祖先与基因型是不同的信息。"
    )
}
const photographs: { name: "folded" | "straight"; photo: EditorialPhoto }[] = [
    {
        name: "folded",
        photo: {
            ...foldPhoto("grey-orange-eyes"),
            position: "65% center",
            alt: t(
                "A grey Scottish Fold photographed face-on, showing ears folded forward",
                "صورة أمامية لقط اسكتلندي رمادي تظهر أذنيه المطويتين للأمام",
                "Un Scottish Fold gris de face, avec les oreilles pliées vers l'avant",
                "正面拍摄的灰色苏格兰折耳猫，耳朵向前折叠"
            ),
            caption: labels.folded
        }
    },
    {
        name: "straight",
        photo: {
            src: "/images/editorial/upright-ears-portrait.webp",
            width: 1400,
            height: 927,
            position: "65% center",
            alt: t(
                "A grey and white domestic cat photographed with both upright ears visible",
                "صورة لقط منزلي رمادي وأبيض تظهر أذنيه المستقيمتين كاملتين",
                "Un chat domestique gris et blanc, avec ses deux oreilles droites visibles",
                "灰白色家猫照片，两只直立的耳朵清晰可见"
            ),
            caption: labels.straight,
            credit: {
                creator: "Anton Porsche",
                sourceUrl:
                    "https://commons.wikimedia.org/wiki/File:Katze_Portrait.jpg",
                license: "CC BY-SA 4.0",
                licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
                modified: true
            }
        }
    }
]
</script>
<template>
    <div class="bg-sky-soft rounded-[2rem] p-6 sm:p-8">
        <div class="grid grid-cols-2 gap-3 text-center sm:gap-5">
            <EditorialPhoto
                v-for="photograph in photographs"
                :key="photograph.name"
                :photo="photograph.photo"
                sizes="40vw sm:25vw lg:260px"
                image-class="aspect-square rounded-2xl"
            />
        </div>
        <p class="text-muted mt-6 text-center text-sm leading-6">
            {{ labels.note[languageCode] }}
        </p>
    </div>
</template>
