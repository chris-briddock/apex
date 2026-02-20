import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    postcss: './postcss.config.js'
  },
  build: {
    cssCodeSplit: false,
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: 'src/styles/index.js'
      },
      output: {
        entryFileNames: 'framework.css',
        assetFileNames: 'framework.[ext]',
        manualChunks: undefined
      }
    }
  },
  server: {
    open: true,
    port: 3000
  }
});
