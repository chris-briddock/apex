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

📖 **[See full configuration guide](./CONFIG.md)**

## Documentation

📖 **[View Full Documentation](https://docs.apex-css.com)**

## License

MIT License - see LICENSE file for details

---

Built with ❤️ using Sass and modern CSS features.
