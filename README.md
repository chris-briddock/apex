# ApexCSS

This is still a work in progress and is in pre-release stage and is not fully tested. Documentation may be inaccurate. Use at your own risk

A utility-first CSS framework built with Sass. Apex provides 500+ utility classes for rapid UI development, covering everything from basic spacing and typography to advanced animations, transforms, and filters.

## Features

- **500+ Utility Classes**: Coverage of a large amount of CSS properties
- **Utility-First Approach**: Build designs directly in HTML using utility classes
- **Modular Architecture**: Import only what you need
- **JavaScript Configuration**: Customize via `apex.config.js` - colors, breakpoints, spacing, and more
- **Design Tokens**: Sass variables and CSS custom properties for easy customization
- **State Variants**: Built-in support for hover, focus, active, and disabled states
- **Dark Mode**: Full dark mode support with CSS custom properties
- **RTL Support**: Right-to-left language support
- **Accessibility**: Strong focus on accessibility with screen reader and focus management utilities and themes for colour blind
- **Extended Utilities**: Animations, transforms, filters, and aspect ratio
- **Plugin System**: Extensible architecture for community contributions

## Quick Start

### Installation

```bash
npm install apexcss
```

### Project Setup with Vite

#### 1. Install Vite (if not already installed)

```bash
npm install --save-dev vite
```

#### 2. Create a Vite Configuration

Create a `vite.config.js` in your project root:

```javascript
import { defineConfig } from 'vite'

export default defineConfig({
  // Vite automatically resolves bare CSS imports from node_modules
})
```

#### 3. Add Scripts to package.json

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

#### 4. Create an Entry HTML File

Create an `index.html` that links to your CSS:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Apex Project</title>
    <link rel="stylesheet" href="/css/main.css" />
  </head>
  <body>
    <!-- Your content here -->
  </body>
</html>
```

### Import Options

#### Option 1: Full Import

Import the complete Apex CSS framework:

```css
/* css/main.css */
@import 'apexcss';
```

#### Option 2: Individual Layers (Recommended)

Import specific layers with cascade layer assignment:

```css
/* css/main.css */
@layer base, utilities, themes;

@import 'apexcss/base' layer(base);
@import 'apexcss/utilities' layer(utilities);
@import 'apexcss/themes' layer(themes);
```

This approach allows you to:
- Control the order of cascade layers
- Add your own styles to each layer
- Optimize bundle size by importing only what you need

#### Option 3: Specific Files

Import individual files directly:

```css
@import 'apexcss/base';      /* Base styles (resets, typography) */
@import 'apexcss/utilities'; /* Utility classes */
@import 'apexcss/themes';    /* Theme variables and styles */
```

### Available Package Exports

| Export Path | Description |
|-------------|-------------|
| `apexcss` | Full framework (all layers combined) |
| `apexcss/base` | Base styles, resets, typography |
| `apexcss/utilities` | 500+ utility classes |
| `apexcss/themes` | Theme variables and color schemes |

### Running the Project

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Cascade Layers

Apex CSS uses CSS Cascade Layers (`@layer`) for predictable specificity:

1. **base** - Resets and foundational styles (lowest specificity)
2. **utilities** - Utility classes
3. **themes** - Theme variables and color schemes

When using individual layer imports, define your layer order first:

```css
@layer base, utilities, themes;
```

This ensures proper cascade order regardless of import order.

### Adding Custom Styles

Extend Apex CSS by adding your own styles in the appropriate layer:

```css
@layer base, utilities, themes;

@import 'apexcss/base' layer(base);
@import 'apexcss/utilities' layer(utilities);
@import 'apexcss/themes' layer(themes);

/* Your custom utilities */
@layer utilities {
  .my-custom-class {
    /* styles */
  }
}
```

### Framework Integration

Apex CSS works with any framework that supports Vite. The CSS import syntax remains the same across frameworks.

#### React (Vite)

1. Create a new Vite React project:

   ```bash
   npm create vite@latest my-app -- --template react
   cd my-app
   npm install apexcss
   ```

2. Import in your main CSS file (`src/index.css` or `src/App.css`):

  ```css
   @layer base, utilities, themes;
   
   @import 'apexcss/base' layer(base);
   @import 'apexcss/utilities' layer(utilities);
   @import 'apexcss/themes' layer(themes);
   ```

3. Or import in your entry point (`src/main.jsx`):

   ```jsx
   import 'apexcss'
   // or individual layers:
   // import 'apexcss/base'
   // import 'apexcss/utilities'
   // import 'apexcss/themes'
   ```

#### Vue (Vite)

1. Create a new Vite Vue project:

   ```bash
   npm create vite@latest my-app -- --template vue
   cd my-app
   npm install apexcss
   ```

2. Import in your main CSS file (`src/style.css`):

   ```css
   @layer base, utilities, themes;
   
   @import 'apexcss/base' layer(base);
   @import 'apexcss/utilities' layer(utilities);
   @import 'apexcss/themes' layer(themes);
   ```

3. Or import in your entry point (`src/main.js`):

   ```js
   import 'apexcss'
   ```

#### Angular

1. Create a new Angular project:

   ```bash
   ng new my-app
   cd my-app
   npm install apexcss
   ```

2. Add to `angular.json` styles array:

   ```json
   {
     "projects": {
       "my-app": {
         "architect": {
           "build": {
             "options": {
               "styles": [
                 "node_modules/apexcss/dist/apex.css",
                 "src/styles.css"
               ]
             }
           }
         }
       }
     }
   }
   ```

3. Or import in your global styles (`src/styles.css`):

   ```css
   @layer base, utilities, themes;
   
   @import 'apexcss/base' layer(base);
   @import 'apexcss/utilities' layer(utilities);
   @import 'apexcss/themes' layer(themes);
   ```

#### Svelte (Vite)

1. Create a new Svelte project:

   ```bash
   npm create vite@latest my-app -- --template svelte
   cd my-app
   npm install apexcss
   ```

2. Import in your main CSS file or entry point:

   ```css
   /* src/app.css */
   @layer base, utilities, themes;

   @import 'apexcss/base' layer(base);
   @import 'apexcss/utilities' layer(utilities);
   @import 'apexcss/themes' layer(themes);
   ```

### Configuration

Customize ApexCSS by editing `apex.config.js`:

```javascript
export default {
  features: {
    animations: false,  // Disable features you don't need
    transforms3d: false
  },
  colors: {
    primary: { hue: 300, chroma: 0.18, lightnessScale: { /* ... */ } }
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px'
  }
}
```

Then build:

```bash
npm run config:build
npm run build
```

📖 **[See full configuration guide](./docs/CONFIG.md)**

## Documentation

📖 **[View Full Documentation](https://docs.apex-css.com)**

## License

MIT License - see LICENSE file for details

---

Built with ❤️ using Sass and modern CSS features.
