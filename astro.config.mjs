// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.anikvonrohr.de",
  trailingSlash: "ignore",
  integrations: [
    // Legal pages carry contact data and are marked noindex, so keep them out of the sitemap too
    sitemap({ filter: (page) => !/\/(impressum|datenschutzerklaerung)\/?$/.test(page) }),
    robotsTxt()
  ],
  prefetch: { prefetchAll: true },
  vite: {
    plugins: [tailwindcss()]
  }
});
