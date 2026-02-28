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
 *   --config    Path to configuration file (default: src/apex.config.js)
 *   --output    Output directory (default: src/config)
 *   --watch     Watch for changes and rebuild automatically
 *   --help      Show help
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Complete default configuration with all feature toggles
const defaultConfig = {
  // ============================================================================
  // Dark Mode Strategy
  // ============================================================================
  // "media" = uses system preference (prefers-color-scheme)
  // "class" = uses .dark class on parent element
  darkModeStrategy: 'class',

  // ============================================================================
  // Feature Toggles - Enable/disable utility categories
  // ============================================================================
  features: {
    // Core Layout Utilities
    display: true,
    flexbox: true,
    grid: true,
    positioning: true,
    visibility: true,

    // Core Spacing Utilities
    spacing: true,
    sizing: true,

    // Core Typography Utilities
    typography: true,

    // Core Visual Utilities
    colors: true,
    backgrounds: true,
    borders: true,
    shadows: true,
    opacity: true,
    overflow: true,
    objectFit: true,

    // Core Interaction Utilities
    cursor: true,
    transitions: true,

    // Extended Layout Utilities
    flexExtended: true,
    gridExtended: true,
    float: true,
    containerQueries: true,
    isolation: true,
    placeItems: true,
    justifyItems: true,
    spaceBetween: true,
    columns: true,
    columnsExtended: true,

    // Extended Typography Utilities
    typographyExtended: true,
    fontExtended: true,
    letterSpacing: true,
    lineHeight: true,
    textAlignLast: true,
    textDecorationExtended: true,
    textJustify: true,
    textIndent: true,
    textShadow: true,
    textEmphasis: true,
    textOrientation: true,
    textUnderline: true,
    hangingPunctuation: true,
    hyphenate: true,
    initialLetter: true,
    tabSize: true,
    wordBreak: true,
    wordWrap: true,
    writingMode: true,
    unicodeBidi: true,

    // Extended Visual Utilities
    backgroundExtended: true,
    colorModifiers: false,
    blendModes: true,
    masks: true,
    borderRadiusLogical: true,
    ring: true,
    outline: true,
    appearance: true,
    accentColor: true,
    colorScheme: true,

    // Extended Interaction Utilities
    interaction: true,
    userSelect: true,
    willChange: true,
    all: true,
    caret: true,
    scroll: true,
    overscrollBehavior: true,
    overscrollBehaviorExtended: true,
    overflowExtended: true,

    // Effects (Animations, Transforms, Filters)
    animations: true,
    transforms: true,
    transforms3d: true,
    filters: true,
    aspectRatio: true,
    imageRendering: true,
    transitionBehavior: true,

    // Content Utilities (Lists, Tables, Print)
    list: true,
    listStyleExtended: true,
    table: true,
    counter: true,
    caption: true,
    quotes: true,
    orphans: true,
    widows: true,
    pageBreak: true,
    break: true,
    verticalAlign: true,

    // Advanced/Specialized Utilities
    arbitrary: false,
    logicalProperties: true,
    sizingLogical: true,
    offset: true,
    shapeOutside: true,
    markerExtended: true,
    zoom: true,
    fieldSizing: true,
    svg: true,
    box: true,
    divide: true,

    // State Variants
    states: true,
    hover: true,
    focus: true,
    active: true,
    disabled: true,

    // Theme Support
    darkMode: true,
    rtl: true,
    accessibility: true,
    zIndex: true
  },

  // ============================================================================
  // Breakpoints - Responsive design breakpoints
  // ============================================================================
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px'
  },

  // ============================================================================
  // Spacing Scale - Margin, padding, and gap values
  // ============================================================================
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

  // ============================================================================
  // Colors - Complete color palette
  // ============================================================================
  colors: {
    // Primary brand color
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
    // Gray scale
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
    // Semantic colors
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

  // ============================================================================
  // Typography - Font families, sizes, weights, spacing
  // ============================================================================
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

  // ============================================================================
  // Border Radius - Corner roundness values
  // ============================================================================
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    default: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px'
  },

  // ============================================================================
  // Shadows - Box shadow values
  // ============================================================================
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    default: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: 'none'
  },

  // ============================================================================
  // Transitions - Animation timing
  // ============================================================================
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
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },

  // ============================================================================
  // Z-Index - Stacking order values
  // ============================================================================
  zIndex: {
    auto: 'auto',
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50'
  },

  // ============================================================================
  // Opacity - Transparency values
  // ============================================================================
  opacity: {
    0: '0',
    5: '0.05',
    10: '0.1',
    20: '0.2',
    25: '0.25',
    30: '0.3',
    40: '0.4',
    50: '0.5',
    60: '0.6',
    70: '0.7',
    75: '0.75',
    80: '0.8',
    90: '0.9',
    95: '0.95',
    100: '1'
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
// Feature Toggles - Enable/disable utility categories
// Set to false to exclude specific utilities from the build
// ============================================================================
${generateFeatureToggles(merged.features)}

// ============================================================================
// Dark Mode Strategy
// ============================================================================
${generateDarkModeStrategy(merged.darkModeStrategy)}

// ============================================================================
// Breakpoints - Responsive design breakpoints
// ============================================================================
${generateBreakpoints(merged.breakpoints)}

// ============================================================================
// Spacing Scale - Margin, padding, and gap values
// ============================================================================
${generateSpacing(merged.spacing)}

// ============================================================================
// Colors - Complete color palette with semantic and gray scales
// ============================================================================
${generateColors(merged.colors)}

// ============================================================================
// Typography - Font families, sizes, weights, and spacing
// ============================================================================
${generateTypography(merged.typography)}

// ============================================================================
// Border Radius - Corner roundness values
// ============================================================================
${generateBorderRadius(merged.borderRadius)}

// ============================================================================
// Shadows - Box shadow values
// ============================================================================
${generateShadows(merged.shadows)}

// ============================================================================
// Transitions - Animation timing functions and durations
// ============================================================================
${generateTransitions(merged.transition)}

// ============================================================================
// Z-Index - Stacking order values
// ============================================================================
${generateZIndex(merged.zIndex)}

// ============================================================================
// Opacity - Transparency values
// ============================================================================
${generateOpacity(merged.opacity)}

// ============================================================================
// End of ApexCSS Configuration
// ============================================================================
`;
}

/**
 * Generate feature toggle variables with categorization
 */
function generateFeatureToggles(features) {
  const categories = {
    'Core Layout': ['display', 'flexbox', 'grid', 'positioning', 'visibility'],
    'Core Spacing': ['spacing', 'sizing'],
    'Core Typography': ['typography'],
    'Core Visual': ['colors', 'backgrounds', 'borders', 'shadows', 'opacity', 'overflow', 'objectFit'],
    'Core Interaction': ['cursor', 'transitions'],
    'Extended Layout': ['flexExtended', 'gridExtended', 'float', 'containerQueries', 'isolation', 'placeItems', 'justifyItems', 'spaceBetween', 'columns', 'columnsExtended'],
    'Extended Typography': ['typographyExtended', 'fontExtended', 'letterSpacing', 'lineHeight', 'textAlignLast', 'textDecorationExtended', 'textJustify', 'textIndent', 'textShadow', 'textEmphasis', 'textOrientation', 'textUnderline', 'hangingPunctuation', 'hyphenate', 'initialLetter', 'tabSize', 'wordBreak', 'wordWrap', 'writingMode', 'unicodeBidi'],
    'Extended Visual': ['backgroundExtended', 'colorModifiers', 'blendModes', 'masks', 'borderRadiusLogical', 'ring', 'outline', 'appearance', 'accentColor', 'colorScheme'],
    'Extended Interaction': ['interaction', 'userSelect', 'willChange', 'all', 'caret', 'scroll', 'overscrollBehavior', 'overscrollBehaviorExtended', 'overflowExtended'],
    'Effects': ['animations', 'transforms', 'transforms3d', 'filters', 'aspectRatio', 'imageRendering', 'transitionBehavior'],
    'Content': ['list', 'listStyleExtended', 'table', 'counter', 'caption', 'quotes', 'orphans', 'widows', 'pageBreak', 'break', 'verticalAlign'],
    'Advanced': ['arbitrary', 'logicalProperties', 'sizingLogical', 'offset', 'shapeOutside', 'markerExtended', 'zoom', 'fieldSizing', 'svg', 'box', 'divide'],
    'State Variants': ['states', 'hover', 'focus', 'active', 'disabled'],
    'Theme Support': ['darkMode', 'rtl', 'accessibility', 'zIndex']
  };

  let output = [];

  for (const [category, keys] of Object.entries(categories)) {
    output.push(`// ${category}`);
    keys.forEach(key => {
      if (key in features) {
        const varName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        const comment = features[key] ? 'enabled' : 'disabled';
        output.push(`$enable-${varName}: ${features[key]} !default; // ${comment}`);
      }
    });
    output.push('');
  }

  return output.join('\n');
}

/**
 * Generate dark mode strategy configuration
 */
function generateDarkModeStrategy(darkMode) {
  const lines = [];
  lines.push('// Dark Mode Strategy');
  lines.push('// "media" = uses system preference (prefers-color-scheme)');
  lines.push('// "class" = uses .dark class on parent element');
  lines.push(`$dark-mode-strategy: '${darkMode}' !default;`);
  lines.push('');
  return lines.join('\n');
}

/**
 * Generate breakpoint variables and CSS custom properties
 */
function generateBreakpoints(breakpoints) {
  const lines = [];

  // Individual SCSS variables
  lines.push('// Individual breakpoint variables');
  Object.entries(breakpoints).forEach(([key, value]) => {
    lines.push(`$breakpoint-${key}: ${value} !default;`);
  });

  // SCSS map for iteration
  lines.push('');
  lines.push('// Breakpoints map for SCSS iteration');
  lines.push('$breakpoints: (');
  Object.entries(breakpoints).forEach(([key, value], index, arr) => {
    const comma = index < arr.length - 1 ? ',' : '';
    lines.push(`  ${key}: ${value}${comma}`);
  });
  lines.push(') !default;');

  // Breakpoint class name prefixes (for responsive utility class naming)
  lines.push('');
  lines.push('// Breakpoint prefixes for responsive class names');
  lines.push('$breakpoint-prefixes: (');
  Object.entries(breakpoints).forEach(([key, value], index, arr) => {
    const comma = index < arr.length - 1 ? ',' : '';
    // For 'xxl', use 'xxl' directly. For others, use the key as-is
    const prefix = key === 'xxl' ? 'xxl' : key;
    lines.push(`  ${key}: ${prefix}${comma}`);
  });
  lines.push(') !default;');

  // Alias for backwards compatibility with code that uses $breakpoint-class-names
  lines.push('');
  lines.push('// Alias for backwards compatibility');
  lines.push('$breakpoint-class-names: $breakpoint-prefixes !default;');

  return lines.join('\n');
}

/**
 * Generate spacing scale
 */
function generateSpacing(spacing) {
  const lines = [];

  lines.push('$spacing-scale: (');
  Object.entries(spacing).forEach(([key, value], index, arr) => {
    const comma = index < arr.length - 1 ? ',' : '';
    lines.push(`  ${key}: ${value}${comma}`);
  });
  lines.push(') !default;');

  return lines.join('\n');
}

/**
 * Generate color variables
 */
function generateColors(colors) {
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
 * Generate typography configuration
 */
function generateTypography(typography) {
  const lines = [];

  // Font families
  lines.push('// Font Families');
  lines.push('$font-families: (');
  Object.entries(typography.fontFamily).forEach(([key, value], index, arr) => {
    const comma = index < arr.length - 1 ? ',' : '';
    const fontList = Array.isArray(value) ? value.join(', ') : value;
    lines.push(`  ${key}: "${fontList}"${comma}`);
  });
  lines.push(') !default;');
  lines.push('');

  // Font sizes
  lines.push('// Font Sizes');
  lines.push('$font-sizes: (');
  Object.entries(typography.fontSize).forEach(([key, value], index, arr) => {
    const comma = index < arr.length - 1 ? ',' : '';
    const size = Array.isArray(value) ? value[0] : value;
    lines.push(`  ${key}: ${size}${comma}`);
  });
  lines.push(') !default;');
  lines.push('');

  // Font weights
  lines.push('// Font Weights');
  lines.push('$font-weights: (');
  Object.entries(typography.fontWeight).forEach(([key, value], index, arr) => {
    const comma = index < arr.length - 1 ? ',' : '';
    lines.push(`  ${key}: ${value}${comma}`);
  });
  lines.push(') !default;');
  lines.push('');

  // Letter spacing
  lines.push('// Letter Spacing');
  lines.push('$letter-spacing: (');
  Object.entries(typography.letterSpacing).forEach(([key, value], index, arr) => {
    const comma = index < arr.length - 1 ? ',' : '';
    lines.push(`  ${key}: ${value}${comma}`);
  });
  lines.push(') !default;');
  lines.push('');

  // Line heights
  lines.push('// Line Heights');
  lines.push('$line-heights: (');
  Object.entries(typography.lineHeight).forEach(([key, value], index, arr) => {
    const comma = index < arr.length - 1 ? ',' : '';
    lines.push(`  ${key}: ${value}${comma}`);
  });
  lines.push(') !default;');

  return lines.join('\n');
}

/**
 * Generate border radius scale
 */
function generateBorderRadius(borderRadius) {
  const lines = [];

  lines.push('$border-radius-scale: (');
  Object.entries(borderRadius).forEach(([key, value], index, arr) => {
    const comma = index < arr.length - 1 ? ',' : '';
    lines.push(`  ${key}: ${value}${comma}`);
  });
  lines.push(') !default;');

  return lines.join('\n');
}

/**
 * Generate shadow variables
 */
function generateShadows(shadows) {
  const lines = [];

  lines.push('$shadows: (');
  Object.entries(shadows).forEach(([key, value], index, arr) => {
    const comma = index < arr.length - 1 ? ',' : '';
    const needsQuotes = value.includes(',');
    lines.push(`  ${key}: ${needsQuotes ? `"${value}"` : value}${comma}`);
  });
  lines.push(') !default;');

  return lines.join('\n');
}

/**
 * Generate transition configuration
 */
function generateTransitions(transition) {
  const lines = [];

  // Durations
  lines.push('// Transition Durations');
  lines.push('$transition-duration: (');
  Object.entries(transition.duration).forEach(([key, value], index, arr) => {
    const comma = index < arr.length - 1 ? ',' : '';
    lines.push(`  ${key}: ${value}${comma}`);
  });
  lines.push(') !default;');
  lines.push('');

  // Timing functions
  lines.push('// Transition Timing Functions');
  lines.push('$transition-timing: (');
  Object.entries(transition.timing).forEach(([key, value], index, arr) => {
    const comma = index < arr.length - 1 ? ',' : '';
    lines.push(`  ${key}: ${value}${comma}`);
  });
  lines.push(') !default;');

  return lines.join('\n');
}

/**
 * Generate z-index scale
 */
function generateZIndex(zIndex) {
  const lines = [];

  lines.push('$z-index: (');
  Object.entries(zIndex).forEach(([key, value], index, arr) => {
    const comma = index < arr.length - 1 ? ',' : '';
    lines.push(`  ${key}: ${value}${comma}`);
  });
  lines.push(') !default;');

  return lines.join('\n');
}

/**
 * Generate opacity scale
 */
function generateOpacity(opacity) {
  const lines = [];

  lines.push('$opacity-scale: (');
  Object.entries(opacity).forEach(([key, value], index, arr) => {
    const comma = index < arr.length - 1 ? ',' : '';
    lines.push(`  ${key}: ${value}${comma}`);
  });
  lines.push(') !default;');

  return lines.join('\n');
}

/**
 * Generate a complete sample config file
 */
function generateSampleConfig() {
  // Generate the features section from defaultConfig
  const featureCategories = {
    'Core Layout': ['display', 'flexbox', 'grid', 'positioning', 'visibility'],
    'Core Spacing': ['spacing', 'sizing'],
    'Core Typography': ['typography'],
    'Core Visual': ['colors', 'backgrounds', 'borders', 'shadows', 'opacity', 'overflow', 'objectFit'],
    'Core Interaction': ['cursor', 'transitions'],
    'Extended Layout': ['flexExtended', 'gridExtended', 'float', 'containerQueries', 'isolation', 'placeItems', 'justifyItems', 'spaceBetween', 'columns', 'columnsExtended'],
    'Extended Typography': ['typographyExtended', 'fontExtended', 'letterSpacing', 'lineHeight', 'textAlignLast', 'textDecorationExtended', 'textJustify', 'textIndent', 'textShadow', 'textEmphasis', 'textOrientation', 'textUnderline', 'hangingPunctuation', 'hyphenate', 'initialLetter', 'tabSize', 'wordBreak', 'wordWrap', 'writingMode', 'unicodeBidi'],
    'Extended Visual': ['backgroundExtended', 'colorModifiers', 'blendModes', 'masks', 'borderRadiusLogical', 'ring', 'outline', 'appearance', 'accentColor', 'colorScheme'],
    'Extended Interaction': ['interaction', 'userSelect', 'willChange', 'all', 'caret', 'scroll', 'overscrollBehavior', 'overscrollBehaviorExtended', 'overflowExtended'],
    'Effects': ['animations', 'transforms', 'transforms3d', 'filters', 'aspectRatio', 'imageRendering', 'transitionBehavior'],
    'Content': ['list', 'listStyleExtended', 'table', 'counter', 'caption', 'quotes', 'orphans', 'widows', 'pageBreak', 'break', 'verticalAlign'],
    'Advanced': ['arbitrary', 'logicalProperties', 'sizingLogical', 'offset', 'shapeOutside', 'markerExtended', 'zoom', 'fieldSizing', 'svg', 'box', 'divide'],
    'State Variants': ['states', 'hover', 'focus', 'active', 'disabled'],
    'Theme Support': ['darkMode', 'rtl', 'accessibility', 'zIndex']
  };

  let featuresSection = '';
  for (const [category, keys] of Object.entries(featureCategories)) {
    featuresSection += `    // ${category}\n`;
    keys.forEach(key => {
      if (key in defaultConfig.features) {
        featuresSection += `    ${key}: true,\n`;
      }
    });
    featuresSection += '\n';
  }

  return `/**
 * ApexCSS Configuration File
 *
 * This is your configuration file for customizing ApexCSS.
 * All features are enabled by default. Set any feature to false to disable it
 * and reduce your bundle size.
 *
 * Usage:
 *   1. Modify the values below to customize the framework
 *   2. Run: npm run config:build
 *   3. The SCSS files will be regenerated with your customizations
 *
 */

export default {
  // ============================================================================
  // Dark Mode Strategy
  // ============================================================================
  // "media" = uses system preference (prefers-color-scheme)
  // "class" = uses .dark class on parent element
  darkModeStrategy: 'media',

  // ============================================================================
  // Feature Toggles - Enable/disable utility categories
  // ============================================================================
  features: {
${featuresSection.trim()}
  },

  // ============================================================================
  // Breakpoints - Customize responsive breakpoints
  // ============================================================================
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px'
  },

  // ============================================================================
  // Spacing Scale - Customize margin/padding values
  // ============================================================================
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    4: '1rem',
    8: '2rem',
    16: '4rem'
    // Add or remove values as needed
  },

  // ============================================================================
  // Colors - Customize your color palette
  // ============================================================================
  colors: {
    primary: {
      50: '#eff6ff',
      500: '#3b82f6',
      900: '#1e3a8a'
    }
    // Add your brand colors here
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
    init: false
  };

  args.forEach(arg => {
    if (arg.startsWith('--config=')) {
      options.config = arg.split('=')[1];
    } else if (arg.startsWith('--output=')) {
      options.output = arg.split('=')[1];
    } else if (arg === '--watch' || arg === '-w') {
      options.watch = true;
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
    console.log('   Using default configuration...\\n');
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
    const scssPath = path.join(options.output, '_custom-config.scss');
    await fs.writeFile(scssPath, scss);
    console.log(`✅ Generated: ${scssPath}`);

    console.log('\\n🎉 Configuration built successfully!');
    console.log('   Run "npm run build" to compile the framework.\\n');

  } catch (err) {
    console.error('❌ Build failed:', err.message);
    process.exit(1);
  }
}

/**
 * Initialize config file
 */
async function init() {
  const configPath = path.resolve(process.cwd(), 'src/apex.config.js');

  const sample = generateSampleConfig();
  await fs.writeFile(configPath, sample);
  console.log('✅ Created: src/apex.config.js\\n');
  console.log('   Edit this file to customize ApexCSS, then run:');
  console.log('   npm run config:build\\n');
}

/**
 * Watch for changes
 */
async function watch(options) {
  const configPath = path.resolve(process.cwd(), options.config);

  console.log(`👀 Watching ${options.config} for changes...\\n`);

  // Initial build
  await build(options);

  // Watch for changes
  const { watchFile } = await import('fs');
  watchFile(configPath, async (curr, prev) => {
    if (curr.mtime !== prev.mtime) {
      console.log(`📝 Config changed, rebuilding...\\n`);
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
