// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  css: [],
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Naufal Fiqri",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Naufal Fiqri - Web Developer & Digital Creator",
        },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/NFLogo.svg" },
        { rel: "icon", type: "image/x-icon", href: "/NFLogo.ico" },
        { rel: "apple-touch-icon", href: "/NFLogo.svg" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap",
        },
      ],
    },
  },
  ssr: false,
});
