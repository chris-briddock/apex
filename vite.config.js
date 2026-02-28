import { defineConfig } from 'vite';
import fs from 'fs/promises';
import path from 'path';

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

    try {
      await cleanupJsFiles(outDir);
    } catch (e) {
      // Ignore errors if dist doesn't exist
    }
  }
});

export default defineConfig({
  plugins: [cssOnlyPlugin()],
  css: {
    postcss: './postcss.config.js',
    devSourcemap: true
  },
  build: {
    cssCodeSplit: true,
    sourcemap: true,
    minify: 'esbuild',
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
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return '[name][extname]';
          }
          return '[name][extname]';
        },
      }
    }
  },
  server: {
    open: true,
    port: 3000
  }
});
