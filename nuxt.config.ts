export default defineNuxtConfig({
    modules: [
        "@pinia/nuxt",
        "@nuxtjs/tailwindcss",
        "@nuxtjs/i18n",
        "@nuxt/test-utils/module",
    ],
    devtools: { enabled: true },
    i18n: {
        vueI18n: "./i18n.config.ts",
    },
});
