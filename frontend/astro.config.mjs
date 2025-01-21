import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import icon from "astro-icon";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  output: "server",
  server: { port: 11000, host: true},
  integrations: [expressiveCode(), react(), mdx({
    gfm: true,
  }), icon(), tailwind({
    applyBaseStyles: false
  }), compress()]
});