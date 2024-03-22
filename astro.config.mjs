import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [astroI18next()],
  site: "https://jenntenem.github.io"
});
