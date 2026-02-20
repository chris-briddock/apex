// ============================================================================
// PurgeCSS Configuration - Remove unused CSS for smaller bundle size
// ============================================================================

export default {
  content: [
    './src/**/*.scss',
    './src/**/*.html',
    './src/**/*.js',
    './docs/**/*.html',
    './src/components/**/*.html'
  ],
  safelist: [
    // State variants
    /-(hover|focus|active|disabled|visited|before|after)$/,
    // Screen reader utilities
    /^sr-only/,
    /^not-sr-only/,
    // RTL variants
    /^rtl-/,
    // Dark mode variants
    /^dark:/,
    // Animation classes
    /^animate-/,
    // Focus visible
    /^focus-visible/,
    /^focus-within/
  ],
  extractors: [
    {
      extractor: (content) => {
        // Match CSS class names
        const matches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
        return [...new Set(matches)];
      },
      extensions: ['html', 'js', 'scss', 'vue', 'react']
    }
  ],
  output: {
    warnings: true
  },
  rejected: false
};