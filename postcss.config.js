import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';

/**
 * PostCSS Configuration
 * ============================================================================
 * - autoprefixer: Adds vendor prefixes
 * - purgecss: Removes unused CSS (production only)
 * - cssnano: Minifies CSS (production only)
 */

const isProduction = process.env.NODE_ENV === 'production';

export default {
  plugins: [
    // Add vendor prefixes
    autoprefixer({
      grid: 'autoplace',
      flexbox: 'no-2009'
    }),

    // // Remove unused CSS in production
    // // NOTE: Disable PurgeCSS if you need all classes available
    // // PurgeCSS only keeps classes found in your HTML/JSX files
    // ...(false && isProduction ? [
    //   purgeCSSPlugin({
    //     // Scan these files for used CSS classes
    //     content: [
    //       './**/*.html',
    //       './**/*.htm',
    //       './**/*.js',
    //       './**/*.jsx',
    //       './**/*.ts',
    //       './**/*.tsx',
    //       './**/*.vue',
    //       './**/*.svelte',
    //       './**/*.php',
    //       './**/*.rb',
    //       './**/*.erb',
    //       './docs/**/*',
    //       './docs-next/**/*',
    //       './tests/e2e/**/*'
    //     ],

    //     // CSS selectors to always keep (safelist)
    //     safelist: [
    //       // Base HTML elements
    //       /^(html|body|head|title|meta|link|script|style)$/,

    //       // ApexCSS utility patterns that might be dynamically constructed
    //       /^apex-/,

    //       // State variants (hover, focus, etc.)
    //       /-(hover|focus|active|disabled|visited|before|after|first|last|odd|even|group-hover|group-focus|focus-within|focus-visible)$/,
    //       /^-(hover|focus|active|disabled):/,

    //       // Responsive prefixes
    //       /^(sm|md|lg|xl|xxl):/,

    //       // Dark mode
    //       /^dark:/,
    //       /^dark/,

    //       // RTL
    //       /^rtl:/,

    //       // Animation
    //       /^animate-/,
    //       /^transition-/,

    //       // Screen reader utilities
    //       /^sr-only/,
    //       /^not-sr-only/,

    //       // Common dynamic patterns
    //       /^col-(start|end)-/,
    //       /^row-(start|end)-/,

    //       // Opacity modifiers (color/opacity) - matches bg-gray-800/50, text-white/75, etc.
    //       /\/(5|10|15|20|25|30|35|40|45|50|55|60|65|70|75|80|85|90|95|100)$/,

    //       // Dark mode with opacity modifiers - matches dark:bg-gray-800/50, etc.
    //       /^dark:bg-.*\/\d+$/,
    //       /^dark:text-.*\/\d+$/,
    //       /^dark:border-.*\/\d+$/,

    //       // Arbitrary values
    //       /\[.*\]/,

    //       // Data attributes commonly used
    //       /\[data-.*\]/,

    //       // Container queries
    //       /@container/,

    //     ],

    //     // Extract CSS classes from content
    //     extractors: [
    //       {
    //         extractor: (content) => {
    //           // Match class names including Tailwind-like arbitrary values
    //           const matches = content.match(/[^<>'"`\s]*[^<>'"`\s:]/g) || [];
    //           return [...new Set(matches)];
    //         },
    //         extensions: ['html', 'htm', 'js', 'jsx', 'ts', 'tsx', 'vue', 'svelte', 'php', 'rb', 'erb']
    //       }
    //     ],

    //     // Options
    //     rejected: true, // Log removed selectors

    //     // Remove unused @font-face rules
    //     fontFace: true,

    //     // Remove unused @keyframes
    //     keyframes: true,

    //     // Remove unused CSS variables
    //     variables: true,
    //   })
    // ] : []),

    // Minify CSS in production
    ...(false && isProduction ? [
      cssnano({
        preset: ['default', {
          // Preserve CSS custom properties for runtime theming
          discardUnused: {
            fontFace: false,
            keyframes: false,
          },
          normalizeUnicode: false,
        }],
        discardComments: {
          removeAll: true
        },
        normalizeWhitespace: true,
        minifyFontValues: true,
        minifyGradients: true,
        minifyParams: true,
        minifySelectors: true,
        reduceIdents: false,
        zindex: false,
      })
    ] : [])
  ]
};
