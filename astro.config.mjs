import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"

export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://gfdiaz1121.github.io/my-portfolio/',
  base: '/my-portfolio/',
})
