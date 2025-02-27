import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

import alpinejs from "@astrojs/alpinejs";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.anikvonrohr.de",
  integrations: [alpinejs(), robotsTxt(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});