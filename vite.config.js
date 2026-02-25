import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    postcss: './postcss.config.js',
    devSourcemap: true
  },
  esbuild: {
    logOverride: {
      'css-syntax-error': 'silent'
    }
  },
  build: {
    cssCodeSplit: false,
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: 'src/index.js'
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
