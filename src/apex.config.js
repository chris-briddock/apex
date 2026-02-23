// ============================================================================
// Apex Configuration System
// ============================================================================
//  Configuration system supporting:
// 1. Runtime CSS Custom Properties (client-side theming)
// 2. Build-time SCSS generation (compile-time optimization)
// 3. JavaScript Configuration API (dynamic feature toggling)
//
// Usage:
//   import { configure, createCustomTheme, buildConfig } from './config.js';
//
//   // Runtime CSS Variables
//   configure({ colors: { primary: '#3b82f6' } });
//
//   // Build-time SCSS
//   buildConfig({ prefix: 'apex-', features: { rtl: true } });
//
//   // Custom Theme
//   createCustomTheme('my-theme', { colors: { primary: '#6366f1' } });
//
// ============================================================================

// ============================================================================
// Default Configuration
// ============================================================================

export const defaultConfig = {
  // Core framework settings
  core: {
    prefix: '',
    important: false,
    separator: ':',
    darkMode: 'class', // 'class', 'media', or false
    rtl: false
  },

  // Feature toggles - disable unused features to reduce bundle size
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
    animations: true,
    transforms: true,
    filters: true,
    aspectRatio: true,
    accessibility: true
  },

  // Responsive breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  // Spacing scale (in rem units)
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

  // Color palette - CSS custom properties will be generated for these
  colors: {
    // Primary brand colors
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

  // Typography settings
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

  // Border radius scale
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

  // Shadows
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

  // Transitions
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

  // Z-index scale
  zIndex: {
    auto: 'auto',
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50'
  },

  // Container max-widths
  container: {
    center: true,
    padding: '1rem',
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  }
};

// ============================================================================
// Runtime CSS Custom Properties Injection
// ============================================================================

/**
 * Injects CSS custom properties into the document
 * @param {Object} config - Configuration object with colors, spacing, etc.
 * @param {string} selector - CSS selector for the style block (default: ':root')
 */
export function injectCSSVariables(config, selector = ':root') {
  const css = generateCSSVariables(config);

  // Check if style block already exists
  let styleBlock = document.getElementById('apexcss-variables');
  if (!styleBlock) {
    styleBlock = document.createElement('style');
    styleBlock.id = 'apexcss-variables';
    document.head.appendChild(styleBlock);
  }

  styleBlock.textContent = `${selector} { ${css} }`;
}

/**
 * Generates CSS custom properties from configuration
 * @param {Object} config - Configuration object
 * @returns {string} CSS variable declarations
 */
function generateCSSVariables(config) {
  const variables = [];

  // Colors
  if (config.colors) {
    Object.entries(config.colors).forEach(([colorName, shades]) => {
      if (typeof shades === 'string') {
        variables.push(`--color-${colorName}: ${shades};`);
      } else if (typeof shades === 'object') {
        Object.entries(shades).forEach(([shade, value]) => {
          variables.push(`--color-${colorName}-${shade}: ${value};`);
        });
      }
    });
  }

  // Spacing
  if (config.spacing) {
    Object.entries(config.spacing).forEach(([key, value]) => {
      variables.push(`--spacing-${key}: ${value};`);
    });
  }

  // Typography
  if (config.typography?.fontSize) {
    Object.entries(config.typography.fontSize).forEach(([key, value]) => {
      const size = Array.isArray(value) ? value[0] : value;
      variables.push(`--font-size-${key}: ${size};`);
    });
  }

  // Border radius
  if (config.borderRadius) {
    Object.entries(config.borderRadius).forEach(([key, value]) => {
      variables.push(`--radius-${key}: ${value};`);
    });
  }

  // Shadows
  if (config.shadows) {
    Object.entries(config.shadows).forEach(([key, value]) => {
      variables.push(`--shadow-${key}: ${value};`);
    });
  }

  // Breakpoints
  if (config.breakpoints) {
    Object.entries(config.breakpoints).forEach(([key, value]) => {
      variables.push(`--breakpoint-${key}: ${value};`);
    });
  }

  return variables.join('\n  ');
}

/**
 * Gets a CSS variable value
 * @param {string} name - Variable name without -- prefix
 * @returns {string} The computed value
 */
export function getCSSVariable(name) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(`--${name}`).trim();
}

/**
 * Sets a CSS variable at runtime
 * @param {string} name - Variable name without -- prefix
 * @param {string} value - The value to set
 * @param {HTMLElement} element - Target element (default: document.documentElement)
 */
export function setCSSVariable(name, value, element = document.documentElement) {
  element.style.setProperty(`--${name}`, value);
}

// ============================================================================
// Build-time Configuration
// ============================================================================

/**
 * Generates SCSS configuration file for build-time use
 * @param {Object} userConfig - User configuration overrides
 * @returns {string} Generated SCSS content
 */
export function generateSCSSConfig(userConfig = {}) {
  const config = mergeDeep(defaultConfig, userConfig);

  return `// ============================================================================
// Auto-generated ApexCSS Configuration
// Generated at: ${new Date().toISOString()}
// ============================================================================

// ============================================================================
// Core Settings
// ============================================================================
$prefix: '${config.core.prefix}';
$important: ${config.core.important};
$dark-mode: ${config.core.darkMode ? `'${config.core.darkMode}'` : 'false'};
$rtl: ${config.core.rtl};

// ============================================================================
// Feature Flags
// ============================================================================
${Object.entries(config.features)
  .map(([key, value]) => `$enable-${key}: ${value};`)
  .join('\n')}

// ============================================================================
// Breakpoints
// ============================================================================
$breakpoints: (
${Object.entries(config.breakpoints)
  .map(([key, value]) => `  ${key}: ${value}`)
  .join(',\n')}
);

// ============================================================================
// Spacing Scale
// ============================================================================
$spacing-scale: (
${Object.entries(config.spacing)
  .map(([key, value]) => `  ${key}: ${value}`)
  .join(',\n')}
);

// ============================================================================
// Colors
// ============================================================================
$colors: (
${Object.entries(config.colors)
  .map(([name, shades]) => {
    if (typeof shades === 'string') {
      return `  ${name}: ${shades}`;
    }
    return `  ${name}: (${Object.entries(shades)
      .map(([shade, value]) => `${shade}: ${value}`)
      .join(', ')})`;
  })
  .join(',\n')}
);

// ============================================================================
// Typography
// ============================================================================
$font-families: (
${Object.entries(config.typography.fontFamily)
  .map(([key, value]) => `  ${key}: ${Array.isArray(value) ? value.join(', ') : value}`)
  .join(',\n')}
);

$font-sizes: (
${Object.entries(config.typography.fontSize)
  .map(([key, value]) => `  ${key}: ${Array.isArray(value) ? value[0] : value}`)
  .join(',\n')}
);

$font-weights: (
${Object.entries(config.typography.fontWeight)
  .map(([key, value]) => `  ${key}: ${value}`)
  .join(',\n')}
);

$letter-spacing: (
${Object.entries(config.typography.letterSpacing)
  .map(([key, value]) => `  ${key}: ${value}`)
  .join(',\n')}
);

$line-heights: (
${Object.entries(config.typography.lineHeight)
  .map(([key, value]) => `  ${key}: ${value}`)
  .join(',\n')}
);

// ============================================================================
// Border Radius
// ============================================================================
$border-radius-scale: (
${Object.entries(config.borderRadius)
  .map(([key, value]) => `  ${key}: ${value}`)
  .join(',\n')}
);

// ============================================================================
// Shadows
// ============================================================================
$shadows: (
${Object.entries(config.shadows)
  .map(([key, value]) => `  ${key}: ${value}`)
  .join(',\n')}
);

// ============================================================================
// Transitions
// ============================================================================
$transition-duration: (
${Object.entries(config.transition.duration)
  .map(([key, value]) => `  ${key}: ${value}`)
  .join(',\n')}
);

$transition-timing: (
${Object.entries(config.transition.timing)
  .map(([key, value]) => `  ${key}: ${value}`)
  .join(',\n')}
);
`;
}

/**
 * Writes configuration to SCSS file (for build tools)
 * @param {Object} config - User configuration
 * @param {string} outputPath - Path to write the SCSS file
 */
export function writeSCSSConfig(config = {}, outputPath = './src/config/_custom.scss') {
  const scss = generateSCSSConfig(config);

  // In browser environment, log to console
  if (typeof window !== 'undefined') {
    console.log('SCSS Configuration (copy to _custom.scss):');
    console.log(scss);
    return scss;
  }

  // In Node environment, could write to file
  return scss;
}

// ============================================================================
// Theme Management
// ============================================================================

const themes = new Map();

/**
 * Creates a custom theme
 * @param {string} name - Theme name
 * @param {Object} themeConfig - Theme-specific configuration
 * @returns {Object} Theme object with apply/remove methods
 */
export function createTheme(name, themeConfig) {
  const theme = {
    name,
    config: mergeDeep({}, themeConfig),

    /**
     * Applies the theme by injecting CSS variables
     * @param {HTMLElement} element - Target element (default: :root)
     */
    apply(element = document.documentElement) {
      const css = generateCSSVariables(this.config);

      // Create or update theme style block
      let styleBlock = document.getElementById(`apexcss-theme-${this.name}`);
      if (!styleBlock) {
        styleBlock = document.createElement('style');
        styleBlock.id = `apexcss-theme-${this.name}`;
        document.head.appendChild(styleBlock);
      }

      const selector = element === document.documentElement ? ':root' : `.theme-${this.name}`;
      styleBlock.textContent = `${selector} { ${css} }`;

      // Add theme class to element
      if (element !== document.documentElement) {
        element.classList.add(`theme-${this.name}`);
      }

      return this;
    },

    /**
     * Removes the theme
     * @param {HTMLElement} element - Target element
     */
    remove(element = document.documentElement) {
      const styleBlock = document.getElementById(`apexcss-theme-${this.name}`);
      if (styleBlock) {
        styleBlock.remove();
      }

      if (element !== document.documentElement) {
        element.classList.remove(`theme-${this.name}`);
      }

      return this;
    },

    /**
     * Toggles the theme on/off
     */
    toggle(element = document.documentElement) {
      const styleBlock = document.getElementById(`apexcss-theme-${this.name}`);
      if (styleBlock) {
        return this.remove(element);
      }
      return this.apply(element);
    }
  };

  themes.set(name, theme);
  return theme;
}

/**
 * Gets a registered theme
 * @param {string} name - Theme name
 * @returns {Object|undefined} Theme object
 */
export function getTheme(name) {
  return themes.get(name);
}

/**
 * Lists all registered themes
 * @returns {Array} Array of theme names
 */
export function listThemes() {
  return Array.from(themes.keys());
}

// ============================================================================
// Configuration API
// ============================================================================

let currentConfig = { ...defaultConfig };

/**
 * Configures the framework with user options
 * @param {Object} userConfig - Configuration overrides
 * @param {boolean} injectVars - Whether to inject CSS variables immediately
 * @returns {Object} Merged configuration
 */
export function configure(userConfig = {}, injectVars = true) {
  currentConfig = mergeDeep(defaultConfig, userConfig);

  if (injectVars && typeof document !== 'undefined') {
    injectCSSVariables(currentConfig);
  }

  return currentConfig;
}

/**
 * Gets the current configuration
 * @returns {Object} Current configuration
 */
export function getConfig() {
  return { ...currentConfig };
}

/**
 * Resets configuration to defaults
 * @param {boolean} removeVars - Whether to remove injected CSS variables
 */
export function resetConfig(removeVars = true) {
  currentConfig = { ...defaultConfig };

  if (removeVars && typeof document !== 'undefined') {
    const styleBlock = document.getElementById('apexcss-variables');
    if (styleBlock) {
      styleBlock.remove();
    }
  }

  return currentConfig;
}

/**
 * Enables a feature
 * @param {string} feature - Feature name
 */
export function enableFeature(feature) {
  if (currentConfig.features.hasOwnProperty(feature)) {
    currentConfig.features[feature] = true;
  }
}

/**
 * Disables a feature
 * @param {string} feature - Feature name
 */
export function disableFeature(feature) {
  if (currentConfig.features.hasOwnProperty(feature)) {
    currentConfig.features[feature] = false;
  }
}

/**
 * Checks if a feature is enabled
 * @param {string} feature - Feature name
 * @returns {boolean}
 */
export function isFeatureEnabled(feature) {
  return !!currentConfig.features[feature];
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Deep merges two objects
 * @param {Object} target - Target object
 * @param {Object} source - Source object
 * @returns {Object} Merged object
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

// ============================================================================
// Predefined Themes
// ============================================================================

export const presetThemes = {
  // Ocean theme with blue/cyan colors
  ocean: {
    colors: {
      primary: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63'
      }
    }
  },

  // Forest theme with green colors
  forest: {
    colors: {
      primary: {
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
      }
    }
  },

  // Sunset theme with orange/red colors
  sunset: {
    colors: {
      primary: {
        50: '#fff7ed',
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#f97316',
        600: '#ea580c',
        700: '#c2410c',
        800: '#9a3412',
        900: '#7c2d12'
      }
    }
  },

  // Corporate theme with indigo colors
  corporate: {
    colors: {
      primary: {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#312e81'
      }
    }
  }
};

// Create theme instances from presets
Object.entries(presetThemes).forEach(([name, config]) => {
  createTheme(name, config);
});

// ============================================================================
// Initialization
// ============================================================================

// Auto-initialize with default config if in browser
if (typeof document !== 'undefined') {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      injectCSSVariables(defaultConfig);
    });
  } else {
    injectCSSVariables(defaultConfig);
  }
}

// Export everything
export default {
  defaultConfig,
  configure,
  getConfig,
  resetConfig,
  enableFeature,
  disableFeature,
  isFeatureEnabled,
  createTheme,
  getTheme,
  listThemes,
  presetThemes,
  injectCSSVariables,
  getCSSVariable,
  setCSSVariable,
  generateSCSSConfig,
  writeSCSSConfig
};
