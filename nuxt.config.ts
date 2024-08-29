// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  pages: true,
  app: {
    head: {
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/manifest.webmanifest" },
      ],
    },
  },
  modules: ["@nuxt/image", "@nuxt/fonts", "@nuxtjs/tailwindcss"],
});
