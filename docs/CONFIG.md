# ApexCSS Configuration Guide

## Overview

You can now customize ApexCSS using the `apex.config.js` file in the project root. This JavaScript-based configuration allows you to:

- Enable/disable utility categories
- Customize breakpoints
- Modify spacing scales
- Define custom colors using OKLCH color space
- Adjust typography, shadows, borders, and more

## Quick Start

### 1. Edit Configuration

Open `apex.config.js` and modify any settings:

```javascript
export default {
  features: {
    // Disable features you don't need to reduce bundle size
    animations: false,
    transforms3d: false,
    // ...
  },
  
  colors: {
    // Change primary color from blue (250) to purple (300)
    primary: {
      hue: 300,
      chroma: 0.18,
      lightnessScale: {
        50: 95, 100: 90, 200: 85, 300: 78, 400: 70,
        500: 62, 600: 55, 700: 45, 800: 35, 900: 25, 950: 20
      }
    }
  },
  
  breakpoints: {
    // Customize responsive breakpoints
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1920px'  // Modified
  }
}
```

### 2. Build Configuration

After making changes, run:

```bash
npm run config:build
```

This generates the SCSS configuration file at `src/config/_custom-config.scss`.

### 3. Build Framework

Finally, compile the framework:

```bash
npm run build
```

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run config:build` | Generate SCSS from `apex.config.js` |
| `npm run config:watch` | Watch for changes and auto-rebuild |
| `npm run build` | Build the complete framework (includes config:build) |

## Configuration Options

### Features

Enable or disable utility categories to optimize bundle size:

```javascript
features: {
  // Core utilities
  display: true,
  flexbox: true,
  grid: true,
  positioning: true,
  spacing: true,
  typography: true,
  colors: true,
  
  // Extended utilities
  animations: true,
  transforms: true,
  filters: true,
  
  // Set to false to exclude from build
  colorModifiers: false,
  arbitrary: false
}
```

**104 feature toggles available** - see `apex.config.js` for complete list.

### Colors (OKLCH Format)

Colors are defined using the perceptually uniform OKLCH color space:

```javascript
colors: {
  primary: {
    hue: 250,        // 0-360 (color wheel angle)
    chroma: 0.18,    // 0-0.4 (color intensity/saturation)
    lightnessScale: {
      50: 95,   // Lightest
      500: 62,  // Base
      950: 20   // Darkest
    }
  }
}
```

**Why OKLCH?**

- Perceptually uniform (unlike RGB/HSL)
- Consistent lightness across different hues
- Better for accessibility and contrast

### Breakpoints

```javascript
breakpoints: {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px'
}
```

### Spacing Scale

```javascript
spacing: {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  4: '1rem',
  8: '2rem',
  16: '4rem'
  // Add or modify as needed
}
```

### Typography

```javascript
typography: {
  fontFamily: {
    sans: ['ui-sans-serif', 'system-ui', ...],
    serif: ['ui-serif', 'Georgia', ...],
    mono: ['ui-monospace', 'SFMono-Regular', ...]
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }]
  },
  fontWeight: {
    light: '300',
    normal: '400',
    bold: '700'
  }
}
```

### Other Options

- `borderRadius` - Corner roundness values
- `shadows` - Box shadow presets
- `transition` - Animation timing and durations
- `zIndex` - Stacking order values
- `opacity` - Transparency values

See `apex.config.js` for all available options and their defaults.

## Configuration Validation

The config builder validates your configuration:

- **Type errors** - Will stop the build if types don't match
- **Unknown keys** - Will warn but continue (allows forward compatibility)
- **Feature toggles** - Must be boolean values

Example validation error:

```
Configuration validation failed:
- Invalid type for `breakpoints.sm`: expected string, received number.
```

## Watch Mode

For active development, use watch mode:

```bash
npm run config:watch
```

This automatically rebuilds the configuration whenever `apex.config.js` changes.

## Advanced: Partial Configuration

You don't need to specify everything - only override what you need:

```javascript
export default {
  // Only customize colors
  colors: {
    primary: {
      hue: 300,
      chroma: 0.20,
      lightnessScale: { /* ... */ }
    }
  }
  
  // Everything else uses defaults
}
```

## Troubleshooting

### Changes not taking effect?

1. Ensure you ran `npm run config:build`
2. Check for validation errors in the console
3. Verify `src/config/_custom-config.scss` was updated
4. Run `npm run build` to compile the framework

### Config file not found?

The build system looks for `apex.config.js` in the project root. If missing, it uses defaults.

### Need to reset to defaults?

Delete or rename `apex.config.js`, then run `npm run config:build`.

## Examples

### Minimal Build (Core Only)

Reduce bundle size by disabling extended features:

```javascript
export default {
  features: {
    // Core features only
    display: true,
    flexbox: true,
    grid: true,
    spacing: true,
    typography: true,
    colors: true,
    
    // Disable all extended features
    animations: false,
    transforms: false,
    filters: false,
    blendModes: false,
    masks: false,
    // ... set others to false
  }
}
```

### Custom Brand Colors

```javascript
export default {
  colors: {
    primary: {
      hue: 210,     // Brand blue
      chroma: 0.22,
      lightnessScale: { /* ... */ }
    },
    brand: {
      hue: 340,     // Brand pink
      chroma: 0.18,
      lightnessScale: { /* ... */ }
    }
  }
}
```

### Mobile-First Breakpoints

```javascript
export default {
  breakpoints: {
    xs: '375px',  // Extra small
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
}
```

## Next Steps

1. Explore all options in `apex.config.js`
2. Customize colors to match your brand
3. Disable unused features to optimize bundle size
4. Run `npm run config:build` and `npm run build`
5. Test your customizations

For more information, see the main README.md.
