import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import icon from "astro-icon";
import vercel from '@astrojs/vercel/serverless';

import rehypeExternalLinks from "rehype-external-links";



export default defineConfig({
  markdown: {
    smartypants: true,
    syntaxHighlight: "shiki",
    shikiConfig: {
      // theme: "catppuccin-mocha",
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
  integrations: [ tailwind(),vue(),icon(),react(),mdx(),compress() ],
  server: {
    allowedHosts:[
      'localhost',
      '127.0.0.1',
      '0.0.0.0',
      'laravelmail.com',
      'frontend.laravelmail.com'
    ],
    proxy: {
      '/backend/': {
        target: 'http//127.0.0.1:1101/',
        secure: false,
        autoRewrite: true,
        changeOrigin: true,
        rewrite: (path)  => path.replace(/^\/backend/,  ''),
      },
    }
  },
  buildOptions: {
    outdir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: true,
    compressHTML: false,
    minifyCSS: true,
    rollupOptions: {
      plugins: [
        vue(),
        mdx(),
        tailwind(),
        compress(),
        react(),
        icon(),
      ],
      external: ['vue', 'astro-icon'],
    },
  },
  ssr: {
    noExternal: [/.astro/]
  },
  output: 'server',
  adapter: vercel(),
});
