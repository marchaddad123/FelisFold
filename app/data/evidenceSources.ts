import type { HealthSource } from "~/types/foldcare"

const cornellBase =
    "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/"

export const evidenceSources = {
    highlanderCase: {
        name: "Genetic epidemiology of blood type, disease and trait variants, and genome-wide genetic diversity in over 11,000 domestic cats",
        organization: "Anderson et al., PLOS Genetics",
        url: "https://journals.plos.org/plosgenetics/article?id=10.1371/journal.pgen.1009804",
        year: 2022,
        type: "research"
    },
    breedHistory: {
        name: "Scottish Fold — breed history",
        organization: "The Cat Fanciers' Association",
        url: "https://cfa.org/breed/scottish-fold/",
        type: "breed-history"
    },
    crossbreedSurvey: {
        name: "Genetic Evidence of a Recent Decline and Crossbreed Distribution of TRPV4 c.1024G>T Variant in Domestic Cats",
        organization: "Animal Genetics",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13158167/",
        year: 2026,
        type: "research"
    },
    genetics: {
        name: "Scottish Fold — TRPV4 genetic test",
        organization: "UC Davis Veterinary Genetics Laboratory",
        url: "https://vgl.ucdavis.edu/test/scottish-fold"
    },
    variation: {
        name: "Radiographical Survey of Osteochondrodysplasia in Scottish Fold Cats caused by the TRPV4 gene variant",
        organization: "Rorden et al., Human Genetics",
        url: "https://pubmed.ncbi.nlm.nih.gov/34406467/",
        year: 2021,
        type: "research"
    },
    followUp: {
        name: "Osteochondrodysplasia and the c.1024G>T variant of TRPV4 gene in Scottish Fold cats: genetic and radiographic evaluation",
        organization: "Journal of Feline Medicine and Surgery",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10811760/",
        year: 2023,
        type: "research"
    },
    crosses: {
        name: "Osteochondrodysplasia in Scottish Fold cross-breed cats",
        organization:
            "Takanosu & Hattori, Journal of Veterinary Medical Science",
        url: "https://pubmed.ncbi.nlm.nih.gov/33162427/",
        year: 2020,
        type: "research"
    },
    feeding: {
        name: "Feeding Your Cat",
        organization: "Cornell Feline Health Center",
        url: `${cornellBase}feeding-your-cat`
    },
    vomiting: {
        name: "Vomiting",
        organization: "Cornell Feline Health Center",
        url: `${cornellBase}vomiting`,
        year: 2021
    },
    nutrition: {
        name: "WSAVA Nutritional Assessment Guidelines",
        organization: "WSAVA / Journal of Small Animal Practice",
        url: "https://wsava.org/wp-content/uploads/2020/01/WSAVA-Nutrition-Assessment-Guidelines-2011-JSAP.pdf",
        year: 2011
    },
    foodSelection: {
        name: "Selecting a Pet Food",
        organization: "WSAVA Global Nutrition Committee",
        url: "https://wsava.org/wp-content/uploads/2021/04/Selecting-a-pet-food-for-your-pet-updated-2021_WSAVA-Global-Nutrition-Toolkit.pdf",
        year: 2021
    },
    homemade: {
        name: "Homemade Cat Food Diets Could Be Risky",
        organization: "UC Davis",
        url: "https://www.ucdavis.edu/curiosity/homemade-cat-food-diets-could-be-risky",
        year: 2019
    },
    emergency: {
        name: "When to See a Veterinarian",
        organization: "Merck Veterinary Manual",
        url: "https://www.merckvetmanual.com/multimedia/table/when-to-see-a-veterinarian"
    },
    allium: {
        name: "Garlic and Onion (Allium spp) Toxicosis in Animals",
        organization: "MSD Veterinary Manual",
        url: "https://www.msdvetmanual.com/toxicology/food-hazards/garlic-and-onion-allium-spp-toxicosis-in-animals"
    },
    chocolate: {
        name: "Chocolate Toxicosis in Animals",
        organization: "MSD Veterinary Manual",
        url: "https://www.msdvetmanual.com/toxicology/food-hazards/chocolate-toxicosis-in-animals"
    },
    dough: {
        name: "Bread Dough Toxicosis in Animals",
        organization: "MSD Veterinary Manual",
        url: "https://www.msdvetmanual.com/toxicology/food-hazards/bread-dough-toxicosis-in-animals"
    },
    rawFood: {
        name: "Raw Meat-Based Diets for Pets",
        organization: "WSAVA Global Nutrition Committee",
        url: "https://wsava.org/wp-content/uploads/2021/04/Raw-Meat-Based-Diets-for-Pets_WSAVA-Global-Nutrition-Toolkit.pdf",
        year: 2021
    },
    poisons: {
        name: "Common Cat Hazards",
        organization: "Cornell Feline Health Center",
        url: "https://www.vet.cornell.edu/sites/default/files/CatConLA-FactSheet1.pdf"
    },
    kidney: {
        name: "Chronic Kidney Disease",
        organization: "Cornell Feline Health Center",
        url: `${cornellBase}chronic-kidney-disease`
    },
    lifeStages: {
        name: "2021 AAHA/AAFP Feline Life Stage Guidelines",
        organization: "AAHA / AAFP",
        url: "https://www.aaha.org/resources/2021-aaha-aafp-feline-life-stage-guidelines/",
        year: 2021
    },
    catVisit: {
        name: "Helping your cat cope with veterinary visits",
        organization: "AAHA",
        url: "https://www.aaha.org/resources/helping-your-cat-cope-with-veterinary-visits/",
        year: 2026
    },
    ears: {
        name: "Feline Ear Disorders",
        organization: "Cornell Feline Health Center",
        url: `${cornellBase}feline-ear-disorders`
    },
    foodHazards: {
        name: "Food Hazards",
        organization: "Merck Veterinary Manual",
        url: "https://www.merckvetmanual.com/special-pet-topics/poisoning/food-hazards",
        year: 2026
    }
} satisfies Record<string, HealthSource>
