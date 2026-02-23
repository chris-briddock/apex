/**
 * ApexCSS Configuration File
 *
 * This is your configuration file for customizing ApexCSS.
 *
 * Usage:
 *   1. Modify the values below to customize the framework
 *   2. Run: npm run config:build
 *   3. The SCSS files will be regenerated with your customizations
 *
 */

export default {
  // Core settings
  core: {
    prefix: '',           // Add prefix to all classes (e.g., 'apex-' -> .apex-flex)
    important: false,     // Add !important to all utilities
    separator: ':',       // Separator for variants (e.g., hover:flex)
    darkMode: false,      // Disable class-based dark mode
    rtl: true             // Enable RTL support
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
