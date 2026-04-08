import { defineConfig } from 'vite';
import fs from 'node:fs/promises';
import path from 'node:path';

// Plugin to clean up JS files and empty directories after build (CSS-only output)
const cssOnlyPlugin = () => ({
  name: 'css-only',
  async closeBundle() {
    const outDir = path.resolve('dist');

    // Helper to recursively find and remove JS files and sourcemaps
    const cleanupJsFiles = async (dir) => {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      let filesRemoved = 0;

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          const removed = await cleanupJsFiles(fullPath);
          filesRemoved += removed;
          // Try to remove empty directory
          try {
            await fs.rmdir(fullPath);
            console.log(`  Removed empty dir: ${fullPath.replace(outDir + '/', '')}`);
          } catch {
            // Directory not empty or can't be removed, ignore
          }
        } else if (entry.name.endsWith('.js') || entry.name.endsWith('.js.map')) {
          await fs.unlink(fullPath);
          console.log(`  Removed: ${fullPath.replace(outDir + '/', '')}`);
          filesRemoved++;
        }
      }
      return filesRemoved;
    };
      await cleanupJsFiles(outDir);
  }
});

export default defineConfig({
  plugins: [cssOnlyPlugin()],
  css: {
    postcss: './postcss.config.js',
    devSourcemap: true,
  },
  build: {
    cssCodeSplit: true,
    sourcemap: true,
    // Use esbuild for both JS and CSS minification
    // Note: Vite 8 defaults to LightningCSS for CSS minification, but esbuild
    // is more compatible with complex SCSS-generated selectors
    minify: 'esbuild',
    cssMinify: 'esbuild',
    rollupOptions: {
      input: {
        'themes': 'src/entry-themes.scss',
        'base': 'src/entry-base.scss',
        'utilities': 'src/entry-utilities.scss',
        'apex': 'src/main.scss',
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          // Ensure CSS files keep their original names
          // Note: Vite 8/Rolldown uses `names` array instead of deprecated `name` property
          const name = assetInfo.names?.[0] ?? '';
          if (name.endsWith('.css')) {
            return '[name][extname]';
          }
        },
      },
    },
  }
});
