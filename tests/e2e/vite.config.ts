import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import os from 'node:os'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vite 8 cache directory - use temp to avoid permission issues
  cacheDir: path.join(os.tmpdir(), 'vite-e2e-cache'),
  build: {
    // Vite 8 uses Rolldown - ensure compatibility
    sourcemap: true,
    // Empty output directory before build
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
})
