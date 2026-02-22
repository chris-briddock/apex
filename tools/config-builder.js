#!/usr/bin/env node

/**
 * ApexCSS Configuration Builder
 *
 * This script generates SCSS configuration files from JavaScript config.
 * It allows users to customize the framework via a JS config file.
 *
 * Usage:
 *   node tools/config-builder.js --config=apex.config.js
 *   node tools/config-builder.js --watch
 *
 * Options:
 *   --config    Path to configuration file (default: apex.config.js)
 *   --output    Output directory (default: src/config)
 *   --watch     Watch for changes and rebuild automatically
 *   --help      Show help
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Default configuration matching src/config.js structure
const defaultConfig = {
  core: {
    prefix: '',
    important: false,
    separator: ':',
    darkMode: 'class',
    rtl: false
  },
  features: {
    spacing: true,
    sizing: true,
    typography: true,
    colors: true,
    flexbox: true,
    grid: true,
    positioning: true,
    display: true,
    borders: true,
    shadows: true,
    opacity: true,
    overflow: true,
    visibility: true,
    transitions: true,
    cursor: true,
    interaction: true,
    svg: true,
    columns: true,
    break: true,
    isolation: true,
    list: true,
    float: true,
    verticalAlign: true,
    textIndent: true,
    objectFit: true,
    table: true,
    outline: true,
    appearance: true,
    userSelect: true,
    willChange: true,
    accentColor: true,
    placeItems: true,
    spaceBetween: true,
    states: true,
    hover: true,
    focus: true,
    active: true,
    disabled: true,
    darkMode: true,
    rtl: true,
    animations: true,
    transforms: true,
    filters: true,
    aspectRatio: true,
    accessibility: true
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  spacing: {
    0: '0',
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem'
  },
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554'
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712'
    },
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d'
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f'
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d'
    },
    info: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e'
    }
  },
  typography: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      serif: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }]
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2'
    }
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: 'none'
  },
  transition: {
    duration: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms'
    },
    timing: {
      linear: 'linear',
      DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },
  zIndex: {
    auto: 'auto',
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50'
  }
};

/**
 * Generate SCSS configuration from user config
 */
function generateSCSS(config) {
  const merged = mergeDeep(defaultConfig, config);

  return `// ============================================================================
// ApexCSS Configuration - Auto-generated by config-builder.js
// ============================================================================
// This file is automatically generated. Do not edit directly.
// Instead, modify your apex.config.js and run: npm run config:build
// ============================================================================

// ============================================================================
// Core Settings
// ============================================================================
$prefix: '${merged.core.prefix}' !default;
$important: ${merged.core.important} !default;
$separator: '${merged.core.separator}' !default;
$dark-mode: ${merged.core.darkMode === false ? 'false' : `'${merged.core.darkMode}'`} !default;
$rtl: ${merged.core.rtl} !default;

// ============================================================================
// Feature Flags
// ============================================================================
${Object.entries(merged.features)
  .map(([key, value]) => `$enable-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value} !default;`)
  .join('\n')}

// ============================================================================
// Breakpoints
// ============================================================================
$breakpoints: (
${Object.entries(merged.breakpoints)
  .map(([key, value]) => `  ${key}: ${value}`)
  .join(',\n')}
) !default;

// ============================================================================
// Spacing Scale
// ============================================================================
$spacing-scale: (
${Object.entries(merged.spacing)
  .map(([key, value]) => `  ${key}: ${value}`)
  .join(',\n')}
) !default;

// ============================================================================
// Colors
// ============================================================================
${generateColorVariables(merged.colors)}

// ============================================================================
// Typography
// ============================================================================
$font-families: (
${Object.entries(merged.typography.fontFamily)
  .map(([key, value]) => {
    const val = Array.isArray(value) ? value.join(', ') : value;
    return `  ${key}: ${val}`;
  })
  .join(',\n')}
) !default;

$font-sizes: (
${Object.entries(merged.typography.fontSize)
  .map(([key, value]) => `  ${key}: ${Array.isArray(value) ? value[0] : value}`)
  .join(',\n')}
) !default;

$font-weights: (
${Object.entries(merged.typography.fontWeight)
  .map(([key, value]) => `  ${key}: ${value}`)
  .join(',\n')}
) !default;

$letter-spacing: (
${Object.entries(merged.typography.letterSpacing)
  .map(([key, value]) => `  ${key}: ${value}`)
  .join(',\n')}
) !default;

$line-heights: (
${Object.entries(merged.typography.lineHeight)
  .map(([key, value]) => `  ${key}: ${value}`)
  .join(',\n')}
) !default;

// ============================================================================
// Border Radius
// ============================================================================
$border-radius-scale: (
${Object.entries(merged.borderRadius)
  .map(([key, value]) => `  ${key}: ${value}`)
  .join(',\n')}
) !default;

// ============================================================================
// Shadows
// ============================================================================
$shadows: (
${Object.entries(merged.shadows)
  .map(([key, value]) => `  ${key}: ${value}`)
  .join(',\n')}
) !default;

// ============================================================================
// Transitions
// ============================================================================
$transition-duration: (
${Object.entries(merged.transition.duration)
  .map(([key, value]) => `  ${key}: ${value}`)
  .join(',\n')}
) !default;

$transition-timing: (
${Object.entries(merged.transition.timing)
  .map(([key, value]) => `  ${key}: ${value}`)
  .join(',\n')}
) !default;

// ============================================================================
// Z-Index
// ============================================================================
$z-index: (
${Object.entries(merged.zIndex)
  .map(([key, value]) => `  ${key}: ${value}`)
  .join(',\n')}
) !default;
`;
}

/**
 * Generate color SCSS variables
 */
function generateColorVariables(colors) {
  const lines = [];

  Object.entries(colors).forEach(([colorName, shades]) => {
    if (typeof shades === 'string') {
      lines.push(`$color-${colorName}: ${shades} !default;`);
    } else {
      Object.entries(shades).forEach(([shade, value]) => {
        lines.push(`$color-${colorName}-${shade}: ${value} !default;`);
      });
    }
  });

  return lines.join('\n');
}

/**
 * Generate CSS custom properties for runtime theming
 */
function generateCSSVariables(config) {
  const merged = mergeDeep(defaultConfig, config);
  const variables = [];

  // Colors
  Object.entries(merged.colors).forEach(([colorName, shades]) => {
    if (typeof shades === 'string') {
      variables.push(`  --apex-${colorName}: ${shades};`);
    } else {
      Object.entries(shades).forEach(([shade, value]) => {
        variables.push(`  --apex-${colorName}-${shade}: ${value};`);
      });
    }
  });

  // Spacing
  Object.entries(merged.spacing).forEach(([key, value]) => {
    variables.push(`  --apex-spacing-${key}: ${value};`);
  });

  // Border radius
  Object.entries(merged.borderRadius).forEach(([key, value]) => {
    variables.push(`  --apex-radius-${key}: ${value};`);
  });

  // Shadows
  Object.entries(merged.shadows).forEach(([key, value]) => {
    variables.push(`  --apex-shadow-${key}: ${value};`);
  });

  return `:root {
${variables.join('\n')}
}
`;
}

/**
 * Generate a sample config file
 */
function generateSampleConfig() {
  return `/**
 * ApexCSS Configuration File
 *
 * This is your configuration file for customizing ApexCSS.
 *
 * Usage:
 *   1. Modify the values below to customize the framework
 *   2. Run: npm run config:build
 *   3. The SCSS files will be regenerated with your customizations
 *
 * For full documentation, see: https://apexcss.dev/docs/configuration
 */

export default {
  // Core settings
  core: {
    prefix: '',           // Add prefix to all classes (e.g., 'apex-' -> .apex-flex)
    important: false,     // Add !important to all utilities
    separator: ':',       // Separator for variants (e.g., hover:flex)
    darkMode: 'class',    // 'class', 'media', or false
    rtl: false            // Enable RTL support
  },

  // Disable features you don't need to reduce bundle size
  features: {
    spacing: true,
    sizing: true,
    typography: true,
    colors: true,
    flexbox: true,
    grid: true,
    // ... disable any features you don't need
  },

  // Custom breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  // Custom colors
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      500: '#3b82f6',
      600: '#2563eb',
      900: '#1e3a8a'
    },
    // Add your brand colors here
    brand: {
      50: '#f0f9ff',
      500: '#0ea5e9',
      900: '#0c4a6e'
    }
  },

  // Custom spacing scale
  spacing: {
    // Add custom spacing values
    18: '4.5rem',
    88: '22rem'
  },

  // Typography customization
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      display: ['Poppins', 'sans-serif']
    }
  }
};
`;
}

/**
 * Deep merge two objects
 */
function mergeDeep(target, source) {
  const output = { ...target };

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = mergeDeep(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }

  return output;
}

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Parse command line arguments
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    config: 'src/apex.config.js',
    output: 'src/config',
    watch: false,
    css: false,
    init: false
  };

  args.forEach(arg => {
    if (arg.startsWith('--config=')) {
      options.config = arg.split('=')[1];
    } else if (arg.startsWith('--output=')) {
      options.output = arg.split('=')[1];
    } else if (arg === '--watch' || arg === '-w') {
      options.watch = true;
    } else if (arg === '--css') {
      options.css = true;
    } else if (arg === '--init') {
      options.init = true;
    } else if (arg === '--help' || arg === '-h') {
      showHelp();
      process.exit(0);
    }
  });

  return options;
}

function showHelp() {
  console.log(`
ApexCSS Configuration Builder

Usage: node config-builder.js [options]

Options:
  --config=<file>    Config file path (default: src/apex.config.js)
  --output=<dir>     Output directory (default: src/config)
  --css              Generate CSS variables file
  --watch, -w        Watch for changes and rebuild
  --init             Create sample config file
  --help, -h         Show this help

Examples:
  node config-builder.js
  node config-builder.js --config=custom.config.js
  node config-builder.js --watch
  node config-builder.js --init
`);
}

/**
 * Load user configuration
 */
async function loadConfig(configPath) {
  try {
    const fullPath = path.resolve(process.cwd(), configPath);
    await fs.access(fullPath);
    const module = await import(fullPath + '?t=' + Date.now());
    return module.default || module;
  } catch (err) {
    console.log(`⚠️  Config file not found: ${configPath}`);
    console.log('   Using default configuration...\n');
    return {};
  }
}

/**
 * Main build function
 */
async function build(options) {
  try {
    // Load user config
    const userConfig = await loadConfig(options.config);

    // Generate SCSS
    const scss = generateSCSS(userConfig);

    // Ensure output directory exists
    await fs.mkdir(options.output, { recursive: true });

    // Write SCSS file
    const scssPath = path.join(options.output, '_custom.scss');
    await fs.writeFile(scssPath, scss);
    console.log(`✅ Generated: ${scssPath}`);

    // Generate CSS variables if requested
    if (options.css) {
      const css = generateCSSVariables(userConfig);
      const cssPath = path.join(options.output, '../themes/custom.css');
      await fs.mkdir(path.dirname(cssPath), { recursive: true });
      await fs.writeFile(cssPath, css);
      console.log(`✅ Generated: ${cssPath}`);
    }

    console.log('\n🎉 Configuration built successfully!');
    console.log('   Run "npm run build" to compile the framework.\n');

  } catch (err) {
    console.error('❌ Build failed:', err.message);
    process.exit(1);
  }
}

/**
 * Initialize config file
 */
async function init() {
  const configPath = path.resolve(process.cwd(), 'apex.config.js');

  try {
    await fs.access(configPath);
    console.log('⚠️  Config file already exists: apex.config.js\n');
    return;
  } catch {
    // File doesn't exist, create it
  }

  const sample = generateSampleConfig();
  await fs.writeFile(configPath, sample);
  console.log('✅ Created: apex.config.js\n');
  console.log('   Edit this file to customize ApexCSS, then run:');
  console.log('   npm run config:build\n');
}

/**
 * Watch for changes
 */
async function watch(options) {
  const configPath = path.resolve(process.cwd(), options.config);

  console.log(`👀 Watching ${options.config} for changes...\n`);

  // Initial build
  await build(options);

  // Watch for changes
  const { watchFile } = await import('fs');
  watchFile(configPath, async (curr, prev) => {
    if (curr.mtime !== prev.mtime) {
      console.log(`📝 Config changed, rebuilding...\n`);
      await build(options);
    }
  });
}

// Main execution
async function main() {
  const options = parseArgs();

  if (options.init) {
    await init();
    return;
  }

  if (options.watch) {
    await watch(options);
  } else {
    await build(options);
  }
}

main();
