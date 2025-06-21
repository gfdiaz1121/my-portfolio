import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'

// Replace this with your actual GitHub Pages site URL (format: https://<username>.github.io/<repo>/)
const siteUrl = 'https://gfdiaz1121.github.io/my-portfolio/'

export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: siteUrl,
  base: '/my-portfolio/', // 👈 this is required for GitHub Pages!
  build: {
    outDir: 'docs', // 👈 GitHub Pages uses the /docs folder by default
  },
})
