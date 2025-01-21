import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import icon from "astro-icon";




export default defineConfig({
  integrations: [ tailwind(),vue(),icon(),react(),mdx(),compress() ],
  server: {
    proxy: {
      '/backend/': {
        target: 'http//127.0.0.1:11001/',
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
  }

});
