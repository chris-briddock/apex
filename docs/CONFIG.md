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

Enable or disable utility categories to optimize bundle size. ApexCSS provides **104 feature toggles** organized into logical groups:

#### Core Utilities

```javascript
features: {
  // Core Layout
  display: true,        // Display utilities (block, flex, grid, etc.)
  flexbox: true,        // Flexbox layout utilities
  grid: true,           // CSS Grid layout utilities
  positioning: true,    // Position utilities (static, relative, absolute, etc.)
  visibility: true,     // Visibility utilities (visible, hidden, collapse)
  sizing: true,         // Width and height utilities

  // Core Spacing
  spacing: true,        // Margin and padding utilities

  // Core Typography
  typography: true,     // Basic typography utilities

  // Core Visual
  colors: true,         // Text color utilities
  backgrounds: true,    // Background color utilities
  borders: true,        // Border width, style, and color utilities
  shadows: true,        // Box shadow utilities
  opacity: true,        // Opacity utilities
  overflow: true,       // Overflow utilities
  objectFit: true,      // Object-fit utilities (cover, contain, etc.)

  // Core Interaction
  cursor: true,         // Cursor utilities
  transitions: true,    // Transition utilities
}
```

#### Extended Layout Utilities

```javascript
features: {
  // Extended Flexbox & Grid
  flexExtended: true,       // Extended flex utilities (grow, shrink, basis)
  gridExtended: true,       // Extended grid utilities (auto-flow, template areas)

  // Layout Helpers
  float: true,              // Float utilities (left, right, none)
  containerQueries: true,   // CSS Container Query utilities
  isolation: true,          // Isolation utilities (isolate, auto)
  placeItems: true,         // Place-items and place-content utilities
  justifyItems: true,       // Justify-items utilities
  spaceBetween: true,       // Space-between utilities for flex/grid

  // Column Layout
  columns: true,            // CSS columns utilities
  columnsExtended: true,    // Extended column utilities (fill, span)
}
```

#### Extended Typography Utilities

```javascript
features: {
  typographyExtended: true,      // Extended typography utilities
  fontExtended: true,            // Extended font utilities (font-synthesis, etc.)
  letterSpacing: true,           // Letter spacing utilities
  lineHeight: true,              // Line height utilities
  textAlignLast: true,           // Text-align-last utilities
  textDecorationExtended: true,  // Extended text decoration (thickness, offset)
  textJustify: true,             // Text justify utilities
  textIndent: true,              // Text indent utilities
  textShadow: true,              // Text shadow utilities
  textEmphasis: true,            // Text emphasis utilities
  textOrientation: true,         // Text orientation utilities
  textUnderline: true,           // Text underline utilities
  hangingPunctuation: true,      // Hanging punctuation utilities
  hyphenate: true,               // Hyphenation utilities
  initialLetter: true,           // Initial letter (drop caps) utilities
  tabSize: true,                 // Tab size utilities
  wordBreak: true,               // Word break utilities
  wordWrap: true,                // Word wrap utilities
  writingMode: true,             // Writing mode utilities (horizontal/vertical)
  unicodeBidi: true,             // Unicode bidi utilities
}
```

#### Extended Visual Utilities

```javascript
features: {
  backgroundExtended: true,   // Extended background utilities (clip, origin, etc.)
  colorModifiers: false,      // Color modifier utilities (lighten, darken)
  blendModes: true,           // Mix blend mode utilities
  masks: true,                // CSS mask utilities
  borderRadiusLogical: true,  // Logical border radius utilities
  ring: true,                 // Focus ring utilities
  outline: true,              // Outline utilities (offset, style, color)
  appearance: true,             // Appearance utilities (none, auto, etc.)
  accentColor: true,          // Accent color utilities (for form controls)
  colorScheme: true,          // Color scheme utilities (light/dark)
}
```

#### Extended Interaction Utilities

```javascript
features: {
  interaction: true,              // Base interaction utilities
  userSelect: true,               // User select utilities (none, text, all)
  willChange: true,               // Will-change utilities for performance
  all: true,                      // All property utilities (revert, unset)
  caret: true,                    // Caret color utilities
  scroll: true,                   // Scroll behavior and snap utilities
  overscrollBehavior: true,       // Overscroll behavior utilities
  overscrollBehaviorExtended: true, // Extended overscroll utilities
  overflowExtended: true,         // Extended overflow utilities
}
```

#### Effects & Animations

```javascript
features: {
  animations: true,           // Keyframe animation utilities
  transforms: true,           // 2D transform utilities (translate, rotate, scale)
  transforms3d: true,         // 3D transform utilities (perspective, etc.)
  filters: true,              // CSS filter utilities (blur, brightness, etc.)
  aspectRatio: true,          // Aspect ratio utilities
  imageRendering: true,       // Image rendering utilities (pixelated, etc.)
  transitionBehavior: true,   // Transition behavior utilities
}
```

#### Content Utilities

```javascript
features: {
  list: true,                 // List style utilities
  listStyleExtended: true,    // Extended list style utilities
  table: true,                // Table display utilities
  counter: true,              // CSS counter utilities
  caption: true,              // Caption side utilities
  quotes: true,               // Quotes utilities
  orphans: true,              // Orphans control (typography)
  widows: true,               // Widows control (typography)
  pageBreak: true,            // Page break utilities (print)
  break: true,                // Break utilities (inside, before, after)
  verticalAlign: true,        // Vertical align utilities
}
```

#### Advanced Utilities

```javascript
features: {
  arbitrary: true,            // Arbitrary value support ([w-123px], etc.)
  logicalProperties: true,    // CSS logical properties (start/end instead of left/right)
  sizingLogical: true,        // Logical sizing utilities (inline/block size)
  offset: true,               // Offset utilities (for positioned elements)
  shapeOutside: true,         // Shape outside utilities (text wrapping)
  markerExtended: true,       // Extended ::marker utilities
  zoom: true,                 // Zoom utilities
  fieldSizing: true,          // Field sizing utilities (form inputs)
  svg: true,                  // SVG-specific utilities (fill, stroke)
  box: true,                  // Box utilities (decoration-break)
  divide: true,               // Divide utilities (borders between children)
}
```

#### State Variants

```javascript
features: {
  states: true,       // Enable state variants globally
  hover: true,        // Hover state utilities
  focus: true,        // Focus state utilities
  active: true,       // Active state utilities
  disabled: true,     // Disabled state utilities
}
```

#### Theme Support

```javascript
features: {
  darkMode: true,         // Dark mode support
  rtl: true,              // Right-to-left language support
  accessibility: true,    // Accessibility utilities (sr-only, focus-visible)
  zIndex: true,           // Z-index utilities
}
```

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

### Border Radius

Customize corner roundness values:

```javascript
borderRadius: {
  none: '0',
  sm: '0.125rem',
  default: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
}
```

### Shadows

Define box shadow presets:

```javascript
shadows: {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  default: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: 'none',
}
```

### Transitions

Configure animation timing and durations:

```javascript
transition: {
  duration: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms',
  },
  timing: {
    linear: 'linear',
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
}
```

### Z-Index

Configure stacking order values:

```javascript
zIndex: {
  auto: 'auto',
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
}
```

### Opacity

Configure transparency values:

```javascript
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
  100: '1',
}
```

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
    backgrounds: true,
    borders: true,
    shadows: true,
    sizing: true,
    positioning: true,
    visibility: true,
    overflow: true,
    cursor: true,
    transitions: true,

    // Disable all extended features
    flexExtended: false,
    gridExtended: false,
    typographyExtended: false,
    fontExtended: false,
    letterSpacing: false,
    lineHeight: false,
    animations: false,
    transforms: false,
    transforms3d: false,
    filters: false,
    blendModes: false,
    masks: false,
    arbitrary: false,
    containerQueries: false,
    logicalProperties: false,
    colorModifiers: false,
    backgroundExtended: false,
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

### Print-Focused Configuration

```javascript
export default {
  features: {
    // Enable print-related utilities
    pageBreak: true,
    orphans: true,
    widows: true,
    break: true,

    // Disable unnecessary interactive features
    animations: false,
    transforms3d: false,
    filters: false,
    transitions: false,
    cursor: false,
    hover: false,
    focus: false,
  }
}
```

### RTL-First Configuration

```javascript
export default {
  features: {
    rtl: true,
    logicalProperties: true,
    typographyExtended: true,
    writingMode: true,
    unicodeBidi: true,
    textOrientation: true,
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
