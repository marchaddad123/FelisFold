import tailwindcss from "@tailwindcss/vite"

const themeBootScript = `(() => {
    try {
        const savedTheme = localStorage.getItem("felisfold-theme") ?? localStorage.getItem("foldcare-theme")
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        const theme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : systemTheme
        document.documentElement.classList.toggle("dark", theme === "dark")
        document.documentElement.dataset.theme = theme
        document.documentElement.style.colorScheme = theme
    } catch {}
})()`

export default defineNuxtConfig({
    compatibilityDate: "2026-09-01",
    buildDir: ".nuxt",
    devtools: { enabled: false },
    modules: ["@nuxt/eslint", "@nuxt/image"],
    components: [{ path: "~/components", pathPrefix: false }],
    css: ["~/assets/css/main.css"],
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://felisfold.com"
        }
    },
    image: {
        quality: 85,
        screens: {
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            "2xl": 1536
        }
    },
    vite: {
        plugins: [tailwindcss()]
    },
    app: {
        pageTransition: { name: "page", mode: "out-in" },
        head: {
            htmlAttrs: { lang: "en", dir: "ltr" },
            titleTemplate: "%s",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                },
                { name: "theme-color", content: "#f6f0e8" },
                { name: "color-scheme", content: "light dark" }
            ],
            link: [
                { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }
            ],
            script: [{ innerHTML: themeBootScript }]
        }
    },
    typescript: {
        strict: true
    }
})
