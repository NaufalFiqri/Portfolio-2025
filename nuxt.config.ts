// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  css: [],
  modules: ["@nuxtjs/tailwindcss"],
  nitro: {
    output: {
      // Ensure static output is written directly to `dist/`
      // so Netlify can publish a single folder reliably.
      dir: "dist",
      publicDir: "dist",
    },
  },
  app: {
    head: {
      title: "Naufal Fiqri",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Naufal Fiqri - Front-end engineer specializing in Vue.js, building real-time dashboards, RBAC systems, and reporting pipelines.",
        },
        { name: "author", content: "Naufal Fiqri" },
        {
          name: "keywords",
          content:
            "Naufal Fiqri, Vue.js developer, Front-end engineer, Web developer Malaysia, Portfolio",
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Naufal Fiqri | Web Developer & Digital Creator" },
        {
          property: "og:description",
          content:
            "Front-end engineer specializing in Vue.js, building real-time dashboards, RBAC systems, and reporting pipelines.",
        },
        { property: "og:url", content: "https://naufalfiqri.netlify.app/" },
        { property: "og:image", content: "https://naufalfiqri.netlify.app/NFLogo.svg" },
        { property: "og:site_name", content: "Naufal Fiqri Portfolio" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: "Naufal Fiqri | Web Developer & Digital Creator" },
        {
          name: "twitter:description",
          content:
            "Front-end engineer specializing in Vue.js, building real-time dashboards, RBAC systems, and reporting pipelines.",
        },
        { name: "twitter:image", content: "https://naufalfiqri.netlify.app/NFLogo.svg" },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/NFLogo.svg" },
        { rel: "icon", type: "image/x-icon", href: "/NFLogo.ico" },
        { rel: "apple-touch-icon", href: "/NFLogo.svg" },
        { rel: "canonical", href: "https://naufalfiqri.netlify.app/" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap",
        },
      ],
    },
  },
  ssr: false,
});
