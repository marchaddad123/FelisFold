import type { CatProfile } from "~/types/foldcare"

const pexelsLicenseUrl = "https://www.pexels.com/license/"
const unsplashLicenseUrl = "https://unsplash.com/license"

export const cats: CatProfile[] = [
    {
        id: "lotus",
        name: "Lotus",
        photo: "/images/lotus/lotus-portrait.jpg",
        width: 1536,
        height: 1536,
        caption: "The curious Scottish Fold mix who started FelisFold.",
        attribution: "Photo supplied by Lotus's owner",
        source: "owner-supplied",
        photoSource: "Owner supplied",
        photographer: "Lotus's owner",
        license: "Used with permission",
        objectPosition: "center 42%",
        isLotus: true
    },
    {
        id: "lotus-family",
        name: "Lotus & family",
        photo: "/images/lotus/lotus-family.jpg",
        width: 1536,
        height: 1152,
        caption:
            "Real cats, different personalities, one very shared nap schedule.",
        attribution: "Photo supplied by Lotus's owner",
        source: "owner-supplied",
        photoSource: "Owner supplied",
        photographer: "Lotus's owner",
        license: "Used with permission",
        objectPosition: "center",
        isLotus: false
    },
    {
        id: "lotus-cuddling",
        name: "Lotus & a friend",
        photo: "/images/lotus/lotus-cuddling.jpg",
        width: 1152,
        height: 1536,
        caption:
            "Daily life is more than symptoms: rest, warmth and company matter too.",
        attribution: "Photo supplied by Lotus's owner",
        source: "owner-supplied",
        photoSource: "Owner supplied",
        photographer: "Lotus's owner",
        license: "Used with permission",
        objectPosition: "center 46%",
        isLotus: false
    },
    {
        id: "grey-orange-eyes",
        name: "Grey Fold portrait",
        photo: "/images/scottish-folds/grey-orange-eyes-pexels-29121471.jpg",
        width: 1400,
        height: 933,
        caption:
            "A grey Scottish Fold photographed in soft natural light; an illustrative breed photo.",
        attribution: "Photo by Gundula Vogel on Pexels",
        source: "licensed-public",
        photoSource: "Pexels",
        photographer: "Gundula Vogel",
        sourceUrl:
            "https://www.pexels.com/photo/scottish-fold-cat-with-bright-orange-eyes-29121471/",
        license: "Pexels License",
        licenseUrl: pexelsLicenseUrl,
        objectPosition: "center 42%",
        isLotus: false
    },
    {
        id: "blue-eyed-fold",
        name: "Blue-eyed Fold",
        photo: "/images/scottish-folds/blue-eyed-fold-pexels-36437657.jpg",
        width: 1400,
        height: 933,
        caption:
            "A light-coated Scottish Fold indoors; an illustrative breed photo.",
        attribution: "Photo by Renkgezgini on Pexels",
        source: "licensed-public",
        photoSource: "Pexels",
        photographer: "Renkgezgini",
        sourceUrl:
            "https://www.pexels.com/photo/curious-scottish-fold-cat-indoors-36437657/",
        license: "Pexels License",
        licenseUrl: pexelsLicenseUrl,
        objectPosition: "center 38%",
        isLotus: false
    },
    {
        id: "fold-kitten-playing",
        name: "Fold kitten at play",
        photo: "/images/scottish-folds/kitten-playing-pexels-6931480.jpg",
        width: 1400,
        height: 933,
        caption:
            "A young Scottish Fold playing at home; an illustrative breed photo.",
        attribution: "Photo by Anna Bondarenko on Pexels",
        source: "licensed-public",
        photoSource: "Pexels",
        photographer: "Anna Bondarenko",
        sourceUrl:
            "https://www.pexels.com/photo/close-up-photo-of-a-kitten-6931480/",
        license: "Pexels License",
        licenseUrl: pexelsLicenseUrl,
        objectPosition: "center 50%",
        isLotus: false
    },
    {
        id: "yellow-background-fold",
        name: "Fold on yellow",
        photo: "/images/scottish-folds/yellow-background-pexels-16579461.jpg",
        width: 1400,
        height: 933,
        caption:
            "A grey Scottish Fold against a bright yellow background; an illustrative breed photo.",
        attribution: "Photo by Sofie Witters on Pexels",
        source: "licensed-public",
        photoSource: "Pexels",
        photographer: "Sofie Witters",
        sourceUrl:
            "https://www.pexels.com/photo/scottish-fold-on-yellow-background-16579461/",
        license: "Pexels License",
        licenseUrl: pexelsLicenseUrl,
        objectPosition: "center 42%",
        isLotus: false
    },
    {
        id: "white-fold",
        name: "White Fold portrait",
        photo: "/images/scottish-folds/white-fold-pexels-17802934.jpg",
        width: 1400,
        height: 2100,
        caption:
            "A white Scottish Fold in a close portrait; an illustrative breed photo.",
        attribution: "Photo by Pet foto on Pexels",
        source: "licensed-public",
        photoSource: "Pexels",
        photographer: "Pet foto",
        sourceUrl:
            "https://www.pexels.com/photo/portrait-of-cute-white-cat-17802934/",
        license: "Pexels License",
        licenseUrl: pexelsLicenseUrl,
        objectPosition: "center 36%",
        isLotus: false
    },
    {
        id: "fold-in-blanket",
        name: "Fold in a blanket",
        photo: "/images/scottish-folds/fold-in-blanket-unsplash-nodtncsldte.jpg",
        width: 1400,
        height: 875,
        caption:
            "A brown Scottish Fold resting beneath a blanket; an illustrative breed photo.",
        attribution: "Photo by Mikhail Vasilyev on Unsplash",
        source: "licensed-public",
        photoSource: "Unsplash",
        photographer: "Mikhail Vasilyev",
        sourceUrl:
            "https://unsplash.com/photos/brown-scottish-fold-in-brown-thick-pile-blanket-NodtnCsLdTE",
        license: "Unsplash License",
        licenseUrl: unsplashLicenseUrl,
        objectPosition: "center 50%",
        isLotus: false
    },
    {
        id: "fluffy-brown-fold",
        name: "Fluffy brown Fold",
        photo: "/images/scottish-folds/fluffy-brown-unsplash-y1g5qp3hbak.jpg",
        width: 1400,
        height: 2099,
        caption:
            "A fluffy brown Scottish Fold in a home setting; an illustrative breed photo.",
        attribution: "Photo by Carol Gauthier on Unsplash",
        source: "licensed-public",
        photoSource: "Unsplash",
        photographer: "Carol Gauthier",
        sourceUrl:
            "https://unsplash.com/photos/a-fluffy-brown-scottish-fold-cat-with-orange-eyes-Y1G5qP3Hbak",
        license: "Unsplash License",
        licenseUrl: unsplashLicenseUrl,
        objectPosition: "center 34%",
        isLotus: false
    },
    {
        id: "dark-grey-fold",
        name: "Dark grey Fold",
        photo: "/images/scottish-folds/dark-grey-yellow-eyes-pexels-29588838.jpg",
        width: 1400,
        height: 933,
        caption:
            "A dark grey Scottish Fold portrait; an illustrative breed photo.",
        attribution: "Photo by Omar Ramadan on Pexels",
        source: "licensed-public",
        photoSource: "Pexels",
        photographer: "Omar Ramadan",
        sourceUrl:
            "https://www.pexels.com/photo/close-up-of-a-scottish-fold-cat-with-yellow-eyes-29588838/",
        license: "Pexels License",
        licenseUrl: pexelsLicenseUrl,
        objectPosition: "center 42%",
        isLotus: false
    },
    {
        id: "fold-on-floor",
        name: "Fold at home",
        photo: "/images/scottish-folds/fold-on-floor-pexels-15926123.jpg",
        width: 1400,
        height: 2100,
        caption:
            "A grey Scottish Fold lying on a floor at home; an illustrative breed photo.",
        attribution: "Photo by Omar Ramadan on Pexels",
        source: "licensed-public",
        photoSource: "Pexels",
        photographer: "Omar Ramadan",
        sourceUrl:
            "https://www.pexels.com/photo/a-scottish-fold-cat-lying-on-the-floor-15926123/",
        license: "Pexels License",
        licenseUrl: pexelsLicenseUrl,
        objectPosition: "center 58%",
        isLotus: false
    },
    {
        id: "raised-paw-fold",
        name: "Fold with raised paw",
        photo: "/images/scottish-folds/raised-paw-pexels-8942615.jpg",
        width: 1400,
        height: 2100,
        caption:
            "A Scottish Fold raising one paw indoors; an illustrative breed photo.",
        attribution: "Photo by Thirdman on Pexels",
        source: "licensed-public",
        photoSource: "Pexels",
        photographer: "Thirdman",
        sourceUrl:
            "https://www.pexels.com/photo/a-scottish-fold-with-a-raised-paw-8942615/",
        license: "Pexels License",
        licenseUrl: pexelsLicenseUrl,
        objectPosition: "center 48%",
        isLotus: false
    },
    {
        id: "fold-on-sofa",
        name: "Fold on a sofa",
        photo: "/images/scottish-folds/fold-on-sofa-pexels-8942610.jpg",
        width: 1400,
        height: 933,
        caption:
            "A grey Scottish Fold resting on a sofa; an illustrative breed photo.",
        attribution: "Photo by Thirdman on Pexels",
        source: "licensed-public",
        photoSource: "Pexels",
        photographer: "Thirdman",
        sourceUrl:
            "https://www.pexels.com/photo/a-scottish-fold-cat-on-a-sofa-8942610/",
        license: "Pexels License",
        licenseUrl: pexelsLicenseUrl,
        objectPosition: "center 46%",
        isLotus: false
    },
    {
        id: "white-ginger-amber-eyes",
        name: "White and ginger Fold",
        photo: "/images/scottish-folds/white-ginger-amber-eyes-pexels-34506267.jpg",
        width: 1400,
        height: 2100,
        caption:
            "A white and ginger Scottish Fold portrait; an illustrative breed photo.",
        attribution: "Photo by VAROL • on Pexels",
        source: "licensed-public",
        photoSource: "Pexels",
        photographer: "VAROL •",
        sourceUrl:
            "https://www.pexels.com/photo/close-up-of-a-scottish-fold-cat-with-amber-eyes-34506267/",
        license: "Pexels License",
        licenseUrl: pexelsLicenseUrl,
        objectPosition: "center 38%",
        isLotus: false
    },
    {
        id: "fold-on-chair",
        name: "Fold by a window",
        photo: "/images/scottish-folds/fold-on-chair-unsplash-gahso6mnue.jpg",
        width: 1400,
        height: 2100,
        caption:
            "A tabby Scottish Fold resting on a chair by a window; an illustrative breed photo.",
        attribution: "Photo by Natalia Marcelewicz on Unsplash",
        source: "licensed-public",
        photoSource: "Unsplash",
        photographer: "Natalia Marcelewicz",
        sourceUrl:
            "https://unsplash.com/photos/a-scottish-fold-cat-rests-on-a-chair-gAHsO6mNU_E",
        license: "Unsplash License",
        licenseUrl: unsplashLicenseUrl,
        objectPosition: "center 42%",
        isLotus: false
    },
    {
        id: "grey-fold-dark-setting",
        name: "Grey Fold in low light",
        photo: "/images/scottish-folds/grey-fold-dark-unsplash-c8aq3dofhg.jpg",
        width: 1400,
        height: 2100,
        caption:
            "A grey Scottish Fold in a colourful low-light setting; an illustrative breed photo.",
        attribution: "Photo by Alex 0101 on Unsplash",
        source: "licensed-public",
        photoSource: "Unsplash",
        photographer: "Alex 0101",
        sourceUrl:
            "https://unsplash.com/photos/a-grumpy-grey-scottish-fold-cat-sits-indoors-C8A-q3dOFHg",
        license: "Unsplash License",
        licenseUrl: unsplashLicenseUrl,
        objectPosition: "center 70%",
        isLotus: false
    },
    {
        id: "grey-fold-forward",
        name: "Grey Fold looking ahead",
        photo: "/images/scottish-folds/grey-fold-forward-unsplash-13wo7ix78qa.jpg",
        width: 1400,
        height: 933,
        caption:
            "A grey Scottish Fold looking ahead in window light; an illustrative breed photo.",
        attribution: "Photo by Terra Raponi on Unsplash",
        source: "licensed-public",
        photoSource: "Unsplash",
        photographer: "Terra Raponi",
        sourceUrl:
            "https://unsplash.com/photos/a-scottish-fold-cat-with-folded-ears-looks-ahead-13WO7iX78QA",
        license: "Unsplash License",
        licenseUrl: unsplashLicenseUrl,
        objectPosition: "center 44%",
        isLotus: false
    }
]

export const licensedScottishFoldPhotos = cats.filter(
    (cat) => cat.source === "licensed-public"
)

export function catPhotoById(id: string): CatProfile {
    const cat = cats.find((candidate) => candidate.id === id)

    if (!cat) throw new Error(`Unknown cat photo: ${id}`)

    return cat
}

export const communityStoryNote =
    "These are visual breed examples only. A photo cannot confirm pedigree, Fd/Fd genotype or health status."
