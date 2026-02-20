#!/usr/bin/env node
// ============================================================================
// Watch Script - Watches for file changes and rebuilds automatically
// ============================================================================

const { execSync } = require('child_process');
const path = require('path');

console.log('👀 Starting watch mode...');
console.log('📝 Watching for changes in src/ directory...');
console.log('🛑 Press Ctrl+C to stop\n');

try {
  // Run Vite in watch mode
  execSync('npx vite build --watch', {
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit'
  });
} catch (error) {
  console.error('❌ Watch failed:', error.message);
  process.exit(1);
}