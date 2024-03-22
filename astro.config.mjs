import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next()],
  site: "https://jenntenem.github.io",
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});