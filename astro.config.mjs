import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://margz05.github.io',
  base: '/CSARCH2-S02-Group5',
  output: 'static',
  integrations: [react(), mdx()],
});
