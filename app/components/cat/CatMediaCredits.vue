<script setup lang="ts">
import { catFootageCredits } from "~/data/catSequences"
import { catVisitLabels } from "~/data/catVisitLabels"
const { languageCode } = useCurrentLanguage()
</script>

<template>
    <div class="text-muted space-y-3 text-sm leading-7">
        <p>
            {{ catVisitLabels.footage[languageCode] }}:
            <template
                v-for="(credit, index) in catFootageCredits"
                :key="credit.sourceUrl"
            >
                {{ index ? ", " : ""
                }}<a
                    class="underline underline-offset-4"
                    :href="credit.sourceUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ credit.creator }}</a
                >
            </template>
            ·
            <a
                class="underline underline-offset-4"
                href="https://www.pexels.com/license/"
                target="_blank"
                rel="noopener noreferrer"
                >Pexels</a
            >
        </p>
        <p>
            <a
                class="underline underline-offset-4"
                href="https://commons.wikimedia.org/wiki/File:Meow.ogg"
                target="_blank"
                rel="noopener noreferrer"
                >{{ catVisitLabels.credit[languageCode] }}</a
            >: Dan Crosby ·
            <a
                class="underline underline-offset-4"
                href="https://creativecommons.org/licenses/by-sa/3.0/"
                target="_blank"
                rel="noopener noreferrer"
                >CC BY-SA 3.0</a
            >
        </p>
    </div>
</template>
