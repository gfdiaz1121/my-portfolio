import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"

export default defineConfig({
  base: '/my-portfolio/', // <-- IMPORTANT FIX
  site: 'https://gfdiaz1121.github.io/my-portfolio',
  integrations: [tailwind(), robotsTxt()],
})
