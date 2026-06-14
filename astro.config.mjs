import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://oneinfra.in',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets'
  },
  compressHTML: true,
  integrations: [sitemap()],
  vite: {
    build: {
      cssMinify: 'lightningcss',
      assetsInlineLimit: 2048
    }
  }
});
