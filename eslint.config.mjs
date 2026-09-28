import withNuxt from "./.nuxt/eslint.config.mjs"
import prettierRecommended from "eslint-plugin-prettier/recommended"
import customRules from "./customRules.js"
import vueParser from "vue-eslint-parser"

export default withNuxt([
    prettierRecommended,
    {
        ignores: [
            "**/*.min.js",
            "**/*.min.json",
            ".output/**",
            ".data/**",
            ".nuxt/**",
            ".nitro/**",
            ".cache/**",
            "dist/**",
            "node_modules/**",
            "logs/**",
            "*.log",
            ".DS_Store",
            ".fleet/**",
            ".idea/**",
            ".env",
            ".env.*",
            "!.env.example"
        ]
    },
    {
        files: ["**/*.js", "**/*.mjs", "**/*.ts", "**/*.vue"],
        rules: {
            "no-console":
                process.env.NODE_ENV === "production" ? "warn" : "off",
            "no-debugger":
                process.env.NODE_ENV === "production" ? "warn" : "off",
            "vue/multi-word-component-names": "off",
            "prettier/prettier": ["error", {}, { usePrettierrc: true }]
        }
    },
    {
        files: ["**/*.vue"],
        languageOptions: {
            parser: vueParser
        },
        plugins: { customRules },
        rules: {
            "customRules/no-crossorigin-before-src": "error"
        }
    }
])
