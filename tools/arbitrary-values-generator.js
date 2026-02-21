#!/usr/bin/env node

/**
 * ApexCSS Arbitrary Values Generator
 * ============================================================================
 * This tool generates utility classes for arbitrary values at build time.
 * Unlike Tailwind's JIT compiler, we generate classes based on a predefined
 * set of values to keep the bundle size manageable.
 *
 * Usage:
 *   node tools/arbitrary-values-generator.js
 *
 * Configuration:
 *   Add to apexcss.config.js:
 *   {
 *     arbitraryValues: {
 *       enabled: true,
 *       // Common pixel values
 *       pixels: [100, 200, 300, 400, 500],
 *       // Common percentage values
 *       percentages: [25, 50, 75, 100],
 *       // Common rem values
 *       rems: [1, 2, 3, 4, 5],
 *       // Custom values
 *       custom: ['calc(100%-20px)', '100vh', '100vw']
 *     }
 *   }
 *
 * Generated classes:
 *   .min-h-[100px] { min-height: 100px; }
 *   .w-[50%] { width: 50%; }
 *   .p-[1rem] { padding: 1rem; }
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Property definitions for arbitrary value utilities
 */
const propertyDefinitions = {
  // Sizing
  'w': { property: 'width', units: ['px', '%', 'rem', 'em', 'vw', 'vh', ''] },
  'h': { property: 'height', units: ['px', '%', 'rem', 'em', 'vw', 'vh', ''] },
  'min-w': { property: 'min-width', units: ['px', '%', 'rem', 'em', 'vw', 'vh', ''] },
  'min-h': { property: 'min-height', units: ['px', '%', 'rem', 'em', 'vw', 'vh', ''] },
  'max-w': { property: 'max-width', units: ['px', '%', 'rem', 'em', 'vw', 'vh', ''] },
  'max-h': { property: 'max-height', units: ['px', '%', 'rem', 'em', 'vw', 'vh', ''] },

  // Spacing (margin)
  'm': { property: 'margin', units: ['px', 'rem', 'em', ''] },
  'mt': { property: 'margin-top', units: ['px', 'rem', 'em', ''] },
  'mr': { property: 'margin-right', units: ['px', 'rem', 'em', ''] },
  'mb': { property: 'margin-bottom', units: ['px', 'rem', 'em', ''] },
  'ml': { property: 'margin-left', units: ['px', 'rem', 'em', ''] },
  'mx': { property: ['margin-left', 'margin-right'], units: ['px', 'rem', 'em', ''] },
  'my': { property: ['margin-top', 'margin-bottom'], units: ['px', 'rem', 'em', ''] },

  // Spacing (padding)
  'p': { property: 'padding', units: ['px', 'rem', 'em', ''] },
  'pt': { property: 'padding-top', units: ['px', 'rem', 'em', ''] },
  'pr': { property: 'padding-right', units: ['px', 'rem', 'em', ''] },
  'pb': { property: 'padding-bottom', units: ['px', 'rem', 'em', ''] },
  'pl': { property: 'padding-left', units: ['px', 'rem', 'em', ''] },
  'px': { property: ['padding-left', 'padding-right'], units: ['px', 'rem', 'em', ''] },
  'py': { property: ['padding-top', 'padding-bottom'], units: ['px', 'rem', 'em', ''] },

  // Positioning
  'top': { property: 'top', units: ['px', '%', 'rem', 'em', ''] },
  'right': { property: 'right', units: ['px', '%', 'rem', 'em', ''] },
  'bottom': { property: 'bottom', units: ['px', '%', 'rem', 'em', ''] },
  'left': { property: 'left', units: ['px', '%', 'rem', 'em', ''] },
  'inset': { property: ['top', 'right', 'bottom', 'left'], units: ['px', '%', 'rem', 'em', ''] },
  'inset-x': { property: ['left', 'right'], units: ['px', '%', 'rem', 'em', ''] },
  'inset-y': { property: ['top', 'bottom'], units: ['px', '%', 'rem', 'em', ''] },

  // Typography
  'text': { property: 'font-size', units: ['px', 'rem', 'em', ''] },
  'leading': { property: 'line-height', units: ['', 'rem', 'em'] },
  'tracking': { property: 'letter-spacing', units: ['px', 'rem', 'em', ''] },

  // Gap
  'gap': { property: 'gap', units: ['px', 'rem', 'em', ''] },
  'gap-x': { property: 'column-gap', units: ['px', 'rem', 'em', ''] },
  'gap-y': { property: 'row-gap', units: ['px', 'rem', 'em', ''] },

  // Border
  'border': { property: 'border-width', units: ['px', 'rem', 'em', ''] },
  'border-t': { property: 'border-top-width', units: ['px', 'rem', 'em', ''] },
  'border-r': { property: 'border-right-width', units: ['px', 'rem', 'em', ''] },
  'border-b': { property: 'border-bottom-width', units: ['px', 'rem', 'em', ''] },
  'border-l': { property: 'border-left-width', units: ['px', 'rem', 'em', ''] },

  // Border radius
  'rounded': { property: 'border-radius', units: ['px', 'rem', 'em', '%', ''] },
  'rounded-t': { property: ['border-top-left-radius', 'border-top-right-radius'], units: ['px', 'rem', 'em', '%', ''] },
  'rounded-r': { property: ['border-top-right-radius', 'border-bottom-right-radius'], units: ['px', 'rem', 'em', '%', ''] },
  'rounded-b': { property: ['border-bottom-right-radius', 'border-bottom-left-radius'], units: ['px', 'rem', 'em', '%', ''] },
  'rounded-l': { property: ['border-top-left-radius', 'border-bottom-left-radius'], units: ['px', 'rem', 'em', '%', ''] },
  'rounded-tl': { property: 'border-top-left-radius', units: ['px', 'rem', 'em', '%', ''] },
  'rounded-tr': { property: 'border-top-right-radius', units: ['px', 'rem', 'em', '%', ''] },
  'rounded-br': { property: 'border-bottom-right-radius', units: ['px', 'rem', 'em', '%', ''] },
  'rounded-bl': { property: 'border-bottom-left-radius', units: ['px', 'rem', 'em', '%', ''] },

  // Transitions
  'duration': { property: 'transition-duration', units: ['ms', 's', ''] },
  'delay': { property: 'transition-delay', units: ['ms', 's', ''] },

  // Z-index
  'z': { property: 'z-index', units: [''] },

  // Opacity
  'opacity': { property: 'opacity', units: [''] },

  // Flex
  'basis': { property: 'flex-basis', units: ['px', '%', 'rem', 'em', ''] },
  'order': { property: 'order', units: [''] },
  'flex': { property: 'flex', units: [''] },
  'grow': { property: 'flex-grow', units: [''] },
  'shrink': { property: 'flex-shrink', units: [''] },
};

/**
 * Default arbitrary values configuration
 */
const defaultConfig = {
  enabled: true,
  // Pixel values (for sizing, spacing)
  pixels: [0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 88, 96, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 360, 400, 440, 480, 500, 560, 600, 640, 720, 800, 960, 1024, 1200, 1400, 1600],
  // Percentage values
  percentages: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
  // Rem values
  rems: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 80, 96, 120],
  // Em values
  ems: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 8, 10],
  // Viewport units
  vh: [0, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100],
  vw: [0, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100],
  // Custom values (for calc, special units)
  custom: [
    'calc(100%-1rem)',
    'calc(100%-2rem)',
    'calc(100%-3rem)',
    'calc(100%-4rem)',
    'calc(100%-20px)',
    'calc(100%-40px)',
    'calc(100%-60px)',
    'calc(100vh-1rem)',
    'calc(100vh-2rem)',
    'calc(100vh-3rem)',
    'calc(100vw-1rem)',
    'calc(100vw-2rem)',
    'calc(50%-0.5rem)',
    'calc(50%-1rem)',
    'min-content',
    'max-content',
    'fit-content',
    'auto',
    'none'
  ],
  // Z-index values
  zIndex: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 200, 250, 500, 1000, 9999, 99999],
  // Opacity values
  opacity: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
  // Duration values (in ms)
  duration: [75, 100, 150, 200, 250, 300, 350, 400, 500, 600, 700, 800, 900, 1000],
  // Flex values
  flex: [1, 'auto', 'none', 'initial'],
  // Order values
  order: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'first', 'last', 'none'],
};

/**
 * Generate SCSS output for arbitrary value utilities
 */
function generateArbitrarySCSS(config) {
  const lines = [];

  lines.push(`// ============================================================================`);
  lines.push(`// Arbitrary Value Utilities (Auto-generated)`);
  lines.push(`// ============================================================================`);
  lines.push(`// This file is auto-generated by tools/arbitrary-values-generator.js`);
  lines.push(`// Last generated: ${new Date().toISOString()}`);
  lines.push(`// ============================================================================`);
  lines.push('');
  lines.push(`@use '../config/settings' as settings;`);
  lines.push(`@use '../config/breakpoints' as bp;`);
  lines.push('');

  // Generate utilities for each property definition
  for (const [prefix, def] of Object.entries(propertyDefinitions)) {
    const { property, units } = def;
    const properties = Array.isArray(property) ? property : [property];

    // Skip if disabled in config
    if (!shouldGenerate(prefix, config)) continue;

    lines.push(`// ============================================================================`);
    lines.push(`// ${capitalizeFirst(properties[0].replace(/-/g, ' '))} with Arbitrary Values`);
    lines.push(`// ============================================================================`);
    lines.push(`@if settings.$enable-${getFeatureFlag(prefix)} == true {`);

    // Generate for each unit type
    for (const unit of units) {
      const values = getValuesForUnit(unit, config);
      if (values.length === 0) continue;

      for (const value of values) {
        const className = generateClassName(prefix, value, unit);
        const cssValue = formatCSSValue(value, unit);

        // Generate the rule
        if (properties.length === 1) {
          lines.push(`  .${className} { ${properties[0]}: ${cssValue}; }`);
        } else {
          // Multiple properties (like mx, my, inset)
          const decls = properties.map(p => `${p}: ${cssValue}`).join('; ');
          lines.push(`  .${className} { ${decls}; }`);
        }
      }
    }

    // Add custom values
    if (config.custom && config.custom.length > 0) {
      for (const custom of config.custom) {
        const className = generateClassName(prefix, custom, '');
        const cssValue = custom;

        if (properties.length === 1) {
          lines.push(`  .${className} { ${properties[0]}: ${cssValue}; }`);
        } else {
          const decls = properties.map(p => `${p}: ${cssValue}`).join('; ');
          lines.push(`  .${className} { ${decls}; }`);
        }
      }
    }

    lines.push('}');
    lines.push('');
  }

  // Generate responsive variants
  lines.push('// ============================================================================');
  lines.push('// Responsive Arbitrary Value Utilities');
  lines.push('// ============================================================================');
  lines.push('@if settings.$enable-sizing == true {');
  lines.push('  $breakpoints: (');
  lines.push('    sm: bp.$breakpoint-sm,');
  lines.push('    md: bp.$breakpoint-md,');
  lines.push('    lg: bp.$breakpoint-lg,');
  lines.push('    xl: bp.$breakpoint-xl,');
  lines.push('    xxl: bp.$breakpoint-xxl');
  lines.push('  );');
  lines.push('');

  // Generate responsive variants for key utilities
  const responsivePrefixes = ['w', 'h', 'min-w', 'min-h', 'max-w', 'max-h', 'm', 'p', 'gap'];

  lines.push('  @each $bp-name, $bp-value in $breakpoints {');
  lines.push('    @media (min-width: $bp-value) {');

  for (const prefix of responsivePrefixes) {
    if (!shouldGenerate(prefix, config)) continue;
    const def = propertyDefinitions[prefix];
    if (!def) continue;

    const { property, units } = def;
    const properties = Array.isArray(property) ? property : [property];

    // Generate for px values (most common for responsive)
    if (config.pixels && config.pixels.length > 0) {
      for (const value of config.pixels.slice(0, 10)) { // Limit to first 10 for responsive
        const className = generateClassName(prefix, value, 'px');
        const cssValue = formatCSSValue(value, 'px');
        const escapedClassName = `#{$bp-name}\\:${className}`;

        if (properties.length === 1) {
          lines.push(`        .${escapedClassName} { ${properties[0]}: ${cssValue}; }`);
        } else {
          const decls = properties.map(p => `${p}: ${cssValue}`).join('; ');
          lines.push(`        .${escapedClassName} { ${decls}; }`);
        }
      }
    }
  }

  lines.push('    }');
  lines.push('  }');
  lines.push('}');

  return lines.join('\n');
}

/**
 * Check if we should generate utilities for a given prefix
 */
function shouldGenerate(prefix, config) {
  // Map prefixes to feature flags
  const featureMap = {
    'w': 'sizing', 'h': 'sizing', 'min-w': 'sizing', 'min-h': 'sizing',
    'max-w': 'sizing', 'max-h': 'sizing',
    'm': 'spacing', 'mt': 'spacing', 'mr': 'spacing', 'mb': 'spacing', 'ml': 'spacing',
    'mx': 'spacing', 'my': 'spacing',
    'p': 'spacing', 'pt': 'spacing', 'pr': 'spacing', 'pb': 'spacing', 'pl': 'spacing',
    'px': 'spacing', 'py': 'spacing',
    'top': 'positioning', 'right': 'positioning', 'bottom': 'positioning', 'left': 'positioning',
    'inset': 'positioning', 'inset-x': 'positioning', 'inset-y': 'positioning',
    'text': 'typography', 'leading': 'typography', 'tracking': 'typography',
    'gap': 'spacing', 'gap-x': 'spacing', 'gap-y': 'spacing',
    'border': 'borders', 'border-t': 'borders', 'border-r': 'borders',
    'border-b': 'borders', 'border-l': 'borders',
    'rounded': 'borders', 'rounded-t': 'borders', 'rounded-r': 'borders',
    'rounded-b': 'borders', 'rounded-l': 'borders', 'rounded-tl': 'borders',
    'rounded-tr': 'borders', 'rounded-br': 'borders', 'rounded-bl': 'borders',
    'duration': 'transitions', 'delay': 'transitions',
    'z': 'z-index',
    'opacity': 'opacity',
    'basis': 'flexbox', 'order': 'flexbox', 'flex': 'flexbox',
    'grow': 'flexbox', 'shrink': 'flexbox',
  };

  return true; // Always generate, the SCSS will handle feature flags
}

/**
 * Get the feature flag name for a prefix
 */
function getFeatureFlag(prefix) {
  const featureMap = {
    'w': 'sizing', 'h': 'sizing', 'min-w': 'sizing', 'min-h': 'sizing',
    'max-w': 'sizing', 'max-h': 'sizing',
    'm': 'spacing', 'mt': 'spacing', 'mr': 'spacing', 'mb': 'spacing', 'ml': 'spacing',
    'mx': 'spacing', 'my': 'spacing',
    'p': 'spacing', 'pt': 'spacing', 'pr': 'spacing', 'pb': 'spacing', 'pl': 'spacing',
    'px': 'spacing', 'py': 'spacing',
    'top': 'positioning', 'right': 'positioning', 'bottom': 'positioning', 'left': 'positioning',
    'inset': 'positioning', 'inset-x': 'positioning', 'inset-y': 'positioning',
    'text': 'typography', 'leading': 'typography', 'tracking': 'typography',
    'gap': 'spacing', 'gap-x': 'spacing', 'gap-y': 'spacing',
    'border': 'borders', 'border-t': 'borders', 'border-r': 'borders',
    'border-b': 'borders', 'border-l': 'borders',
    'rounded': 'borders', 'rounded-t': 'borders', 'rounded-r': 'borders',
    'rounded-b': 'borders', 'rounded-l': 'borders', 'rounded-tl': 'borders',
    'rounded-tr': 'borders', 'rounded-br': 'borders', 'rounded-bl': 'borders',
    'duration': 'transitions', 'delay': 'transitions',
    'z': 'z-index',
    'opacity': 'opacity',
    'basis': 'flexbox', 'order': 'flexbox', 'flex': 'flexbox',
    'grow': 'flexbox', 'shrink': 'flexbox',
  };
  return featureMap[prefix] || prefix;
}

/**
 * Get values for a specific unit type
 */
function getValuesForUnit(unit, config) {
  if (unit === 'px') return config.pixels || [];
  if (unit === '%') return config.percentages || [];
  if (unit === 'rem') return config.rems || [];
  if (unit === 'em') return config.ems || [];
  if (unit === 'vh') return config.vh || [];
  if (unit === 'vw') return config.vw || [];
  if (unit === 'ms') return config.duration || [];
  if (unit === 's') return config.duration ? config.duration.map(v => v / 1000) : [];
  if (unit === '') {
    // Unitless values
    if (config.zIndex) return config.zIndex;
    if (config.opacity) return config.opacity;
    if (config.flex) return config.flex;
    if (config.order) return config.order;
  }
  return [];
}

/**
 * Generate CSS class name from value
 */
function generateClassName(prefix, value, unit) {
  let safeValue = String(value).replace(/\./g, '\\.');

  // Handle special characters
  safeValue = safeValue.replace(/%/g, '\\%');
  safeValue = safeValue.replace(/\(/g, '\\(');
  safeValue = safeValue.replace(/\)/g, '\\)');
  safeValue = safeValue.replace(/\+/g, '\\+');
  safeValue = safeValue.replace(/-/g, '\\-');
  safeValue = safeValue.replace(/ /g, '\\ ');

  // Handle slashes
  safeValue = safeValue.replace(/\//g, '\\/');

  // Wrap in brackets (escape brackets for SCSS compatibility)
  return `${prefix}-\\[${safeValue}${unit}\\]`;
}

/**
 * Format CSS value with unit
 */
function formatCSSValue(value, unit) {
  if (typeof value === 'string') {
    // Special keywords don't need units
    if (['min-content', 'max-content', 'fit-content', 'auto', 'none', 'initial'].includes(value)) {
      return value;
    }
    // Keywords like 'first', 'last'
    if (['first', 'last', 'none'].includes(value)) {
      if (value === 'first') return '-9999';
      if (value === 'last') return '9999';
      if (value === 'none') return '0';
    }
    return value;
  }

  // Convert ms to seconds for duration
  if (unit === 's' && typeof value === 'number') {
    return `${value}s`;
  }

  // Add unit if provided
  if (unit && unit !== '') {
    return `${value}${unit}`;
  }

  return String(value);
}

/**
 * Capitalize first letter
 */
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Load user configuration
 */
async function loadConfig() {
  const configPath = path.resolve(process.cwd(), 'apexcss.config.js');

  try {
    const module = await import(configPath + '?t=' + Date.now());
    const userConfig = module.default || module;

    if (userConfig.arbitraryValues) {
      return { ...defaultConfig, ...userConfig.arbitraryValues };
    }
  } catch (err) {
    // Config not found, use defaults
  }

  return defaultConfig;
}

/**
 * Main build function
 */
async function build() {
  try {
    console.log('🎨 ApexCSS Arbitrary Values Generator\n');

    // Load configuration
    const config = await loadConfig();

    if (!config.enabled) {
      console.log('⚠️  Arbitrary values are disabled in config.\n');
      return;
    }

    // Generate SCSS
    const scss = generateArbitrarySCSS(config);

    // Ensure output directory exists
    const outputDir = path.resolve(process.cwd(), 'src/core');
    await fs.mkdir(outputDir, { recursive: true });

    // Write SCSS file
    const outputPath = path.join(outputDir, '_arbitrary-generated.scss');
    await fs.writeFile(outputPath, scss);

    // Count generated classes
    const classCount = (scss.match(/\.{1}/g) || []).length;

    console.log(`✅ Generated: ${outputPath}`);
    console.log(`   Classes: ~${classCount}`);
    console.log(`\n🎉 Arbitrary values built successfully!\n`);

  } catch (err) {
    console.error('❌ Build failed:', err.message);
    process.exit(1);
  }
}

// Run build
build();
