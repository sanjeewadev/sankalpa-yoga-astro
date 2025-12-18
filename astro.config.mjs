// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  // ADD THIS LINE BELOW:
  site: "https://sankalpa-yoga.pages.dev",

  integrations: [tailwind(), icon()],
});
