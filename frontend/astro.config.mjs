import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import icon from "astro-icon";
import node from '@astrojs/node';

import rehypeExternalLinks from "rehype-external-links";

export default defineConfig({
  markdown: {
    smartypants: true,
    syntaxHighlight: "shiki",
    shikiConfig: {
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-macchiato",
      },
    },
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
        },
      ],
    ],
    prefetch: true,
  },
  integrations: [
    tailwind(),
    vue(),
    react(),
    mdx(),
    compress(),
    icon(),
  ],
  server: {
    host: true,
    port: 1100,
    proxy: {
      '/backend/': {
        target: 'http://127.0.0.1:1101/',
        secure: false,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/backend/, ''),
      },
    },
  },
  build: {
    sourcemap: true,
    emptyOutDir: true,
  },
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});
                                                                  