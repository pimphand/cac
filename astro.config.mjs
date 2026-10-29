// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://cacmontessorimadiun.example',
  integrations: [vue()],
  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});