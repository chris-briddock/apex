# PurgeCSS - Removing Unused CSS

ApexCSS uses [PurgeCSS](https://purgecss.com/) to automatically remove unused CSS classes from your production builds, resulting in smaller CSS bundles - similar to Tailwind CSS's JIT compiler.

## How It Works

PurgeCSS scans your source files (HTML, JS, TS, Vue, etc.) to find which CSS classes are actually being used. Any classes that aren't found in your source code are removed from the final CSS bundle.

## Configuration

### Default Configuration

PurgeCSS is automatically configured in [`postcss.config.js`](postcss.config.js:20) and runs during production builds (`npm run build`).

### Scanning Your Files

By default, PurgeCSS scans these file patterns:

```javascript
content: [
  './**/*.html',
  './**/*.htm',
  './**/*.js',
  './**/*.jsx',
  './**/*.ts',
  './**/*.tsx',
  './**/*.vue',
  './**/*.svelte',
  './**/*.php',
  './**/*.rb',
  './**/*.erb',
]
```

### Safelisting Classes

Some classes might be used dynamically (via JavaScript) and need to be preserved. The following patterns are safelisted by default:

```javascript
safelist: [
  // State variants
  /-(hover|focus|active|disabled|visited|before|after)$/,
  
  // Responsive prefixes
  /^(sm|md|lg|xl|xxl):/,
  
  // Dark mode
  /^dark:/,
  
  // RTL
  /^rtl:/,
  
  // Animations
  /^animate-/,
  
  // Screen reader utilities
  /^sr-only/,
  /^not-sr-only/,
  
  // Opacity modifiers
  /\/(5|10|15|20|25|30|35|40|45|50|55|60|65|70|75|80|85|90|95|100)$/,
  
  // Arbitrary values
  /\[.*\]/,
]
```

## Customizing PurgeCSS

### Adding Custom Content Paths

If your project has files in non-standard locations, add them to the `content` array in `postcss.config.js`:

```javascript
import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';

purgeCSSPlugin({
  content: [
    // Default patterns
    './**/*.html',
    './**/*.js',
    
    // Your custom paths
    './src/templates/**/*.hbs',
    './src/emails/**/*.mjml',
    './cms/**/*.liquid',
  ],
  // ... rest of config
})
```

### Adding Safelisted Classes

If you have classes that are dynamically generated or added by JavaScript, add them to the safelist:

```javascript
safelist: [
  // Keep all classes starting with 'dynamic-'
  /^dynamic-/,
  
  // Keep specific class names
  'modal-open',
  'tooltip-visible',
  'slide-enter',
  'slide-exit',
  
  // Keep all classes ending with '-active'
  /-active$/,
]
```

### Creating a Custom PurgeCSS Config

For more control, create a `purgecss.config.js` file:

```javascript
// purgecss.config.js
export default {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.vue',
  ],
  
  safelist: {
    standard: [
      /^apex-/,
      /^dark/,
    ],
    deep: [
      /apex-(hover|focus|active)/,
    ],
    greedy: [
      /apex-.*/,
    ],
  },
  
  extractors: [
    {
      extractor: (content) => {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
      },
      extensions: ['html', 'vue', 'js'],
    },
  ],
  
  // Remove unused @font-face rules
  fontFace: true,
  
  // Remove unused @keyframes
  keyframes: true,
  
  // Remove unused CSS variables
  variables: true,
};
```

Then use it in your PostCSS config:

```javascript
import purgecssConfig from './purgecss.config.js';

export default {
  plugins: [
    purgecss(purgecssConfig),
  ],
};
```

## Checking What's Removed

To see which CSS classes are being removed, run:

```bash
npm run build -- --verbose
```

Or check the `rejected` option in the config:

```javascript
purgecss({
  // ... other options
  rejected: true, // Log removed selectors
  rejectedOnSave: true, // Save to file
})
```

## Disabling PurgeCSS

For debugging or specific use cases, you can disable PurgeCSS:

```bash
# Skip PurgeCSS during build
NODE_ENV=development npm run build
```

Or set `purge: false` in your config for specific builds.

## Bundle Size Comparison

Typical results when using PurgeCSS:

| Framework | Default Size | With PurgeCSS | Reduction |
|-----------|--------------|---------------|-----------|
| ApexCSS Full | ~50 KB | ~8-15 KB | 70-85% |
| Bootstrap 5 | ~160 KB | ~25-40 KB | 75-85% |
| Tailwind CSS | ~350 KB | ~5-10 KB | 95-97% |

## Best Practices

### 1. Write Clean HTML

PurgeCSS scans your HTML files for class names. Make sure your classes are clearly visible:

```html
<!-- Good: class is explicit -->
<div class="bg-primary text-white p-4"></div>

<!-- Bad: class is constructed dynamically -->
<div class="bg-" + color + " text-" + textColor + " p-" + padding></div>
```

### 2. Use Safelists for Dynamic Classes

If you must use dynamic classes, safelist them:

```javascript
// If your JS does: element.classList.add('bg-' + color)
safelist: [
  /^bg-(primary|secondary|success|danger|warning|info)$/,
  /^text-(white|black|gray)-\d+$/,
]
```

### 3. Include All Template Files

Make sure PurgeCSS can find all your templates:

```javascript
content: [
  // Framework-specific
  './src/**/*.vue',    // Vue
  './src/**/*.svelte', // Svelte
  './src/**/*.tsx',    // React/Next.js
  './**/*.blade.php',  // Laravel
  './**/*.twig',       // Symfony
  './**/*.erb',        // Ruby/Rails
]
```

### 4. Test in Production Mode

Always test with production builds:

```bash
npm run build
npm run preview
```

### 5. Handle Dynamic Imports

If you use dynamic imports, make sure those files are included:

```javascript
content: [
  './src/**/*.js',
  './src/dynamic-components/**/*.js', // Include dynamic imports
]
```

## Troubleshooting

### Classes Are Being Removed That I Need

Add them to the safelist:

```javascript
safelist: [
  'my-dynamic-class',
  /pattern-.*/,
]
```

### PurgeCSS Isn't Finding My Files

Check that your `content` paths are correct relative to `postcss.config.js`:

```javascript
// If postcss.config.js is in root
content: [
  './src/**/*.html',  // Correct: relative to postcss.config.js
]

// Not
content: [
  '../src/**/*.html', // Wrong: goes outside project
]
```

### Third-Party Libraries

Some libraries add classes dynamically. Safelist them:

```javascript
safelist: [
  // Bootstrap Vue
  /^bv-/,
  
  // Vue Select
  /^vs__/,
  
  // React Modal
  /ReactModal/,
  
  // ApexCharts
  /^apexcharts/,
]
```

### CSS Variables Are Being Removed

Enable `variables: false` in PurgeCSS config to keep all CSS variables:

```javascript
purgecss({
  // ... other options
  variables: false, // Keep all CSS variables
})
```

Or safelist specific variables:

```javascript
safelist: [
  '--color-primary',
  '--spacing-unit',
]
```

## Integration with Frameworks

### Next.js

ApexCSS works automatically with Next.js. PurgeCSS runs during the build process.

### Vue CLI

```javascript
// vue.config.js
module.exports = {
  css: {
    extract: true,
  },
}
```

### Vite

Vite uses PostCSS automatically. The `postcss.config.js` will be picked up.

### Webpack

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: './postcss.config.js',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
}
```

## See Also

- [PurgeCSS Documentation](https://purgecss.com/)
- [PostCSS Documentation](https://postcss.org/)
- [Tailwind CSS Purge](https://tailwindcss.com/docs/optimizing-for-production)
