// @ts-check
import { writeFile } from "node:fs/promises";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import tailwindcss from "@tailwindcss/vite";

/** @param {string} value */
const phpString = (value) => `'${value.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;

/**
 * Writes dist/kontakt-config.php from .env, so the recipient address for the contact form
 * (public/kontakt.php) never ends up in the Git repository.
 * @returns {import("astro").AstroIntegration}
 */
const contactFormConfig = () => ({
  name: "contact-form-config",
  hooks: {
    "astro:build:done": async ({ dir, logger }) => {
      const env = loadEnv("production", process.cwd(), "");
      const to = env.CONTACT_EMAIL;
      if (!to) throw new Error("CONTACT_EMAIL fehlt in .env – siehe .env.example");
      const from = env.CONTACT_FORM_FROM || to;
      const php = `<?php
// Automatisch beim Build erzeugt – nicht bearbeiten, nicht committen.
if (!defined('KONTAKT')) { http_response_code(404); exit; }
return ['to' => ${phpString(to)}, 'from' => ${phpString(from)}];
`;
      await writeFile(new URL("kontakt-config.php", dir), php);
      logger.info("kontakt-config.php erzeugt");
    }
  }
});

export default defineConfig({
  site: "https://www.anikvonrohr.de",
  trailingSlash: "ignore",
  integrations: [
    // Legal pages carry contact data and are marked noindex, so keep them out of the sitemap too
    sitemap({ filter: (page) => !/\/(impressum|datenschutzerklaerung)\/?$/.test(page) }),
    robotsTxt(),
    contactFormConfig()
  ],
  prefetch: { prefetchAll: true },
  vite: {
    plugins: [tailwindcss()]
  }
});
