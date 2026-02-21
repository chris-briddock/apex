# Arbitrary Values

ApexCSS supports Tailwind-style arbitrary values using square bracket notation. This allows you to use any custom value without modifying your configuration.

## Basic Usage

Use arbitrary values by wrapping them in square brackets:

```html
<!-- Sizing -->
<div class="w-[100px]">...</div>
<div class="h-[50%]">...</div>
<div class="min-h-[200px]">...</div>

<!-- Spacing -->
<div class="m-[20px]">...</div>
<div class="p-[1rem]">...</div>
<div class="gap-[15px]">...</div>

<!-- Positioning -->
<div class="top-[50px]">...</div>
<div class="left-[25%]">...</div>

<!-- Typography -->
<div class="text-[24px]">...</div>
<div class="leading-[1.5]">...</div>
```

## Supported Properties

ApexCSS supports arbitrary values for the following utilities:

| Utility | Example | Output |
|---------|---------|--------|
| `w`, `h` | `w-[200px]` | `width: 200px` |
| `min-w`, `min-h` | `min-h-[100vh]` | `min-height: 100vh` |
| `max-w`, `max-h` | `max-w-[500px]` | `max-width: 500px` |
| `m`, `mt`, `mr`, `mb`, `ml` | `m-[20px]` | `margin: 20px` |
| `mx`, `my` | `mx-[10px]` | `margin-left: 10px; margin-right: 10px` |
| `p`, `pt`, `pr`, `pb`, `pl` | `p-[1rem]` | `padding: 1rem` |
| `px`, `py` | `py-[20px]` | `padding-top: 20px; padding-bottom: 20px` |
| `top`, `right`, `bottom`, `left` | `top-[50px]` | `top: 50px` |
| `inset` | `inset-[20px]` | `top/right/bottom/left: 20px` |
| `text` | `text-[24px]` | `font-size: 24px` |
| `leading` | `leading-[1.5]` | `line-height: 1.5` |
| `tracking` | `tracking-[2px]` | `letter-spacing: 2px` |
| `gap`, `gap-x`, `gap-y` | `gap-[15px]` | `gap: 15px` |
| `border`, `border-t`, etc. | `border-[2px]` | `border-width: 2px` |
| `rounded`, `rounded-t`, etc. | `rounded-[8px]` | `border-radius: 8px` |
| `duration` | `duration-[300ms]` | `transition-duration: 300ms` |
| `z` | `z-[9999]` | `z-index: 9999` |
| `opacity` | `opacity-[0.75]` | `opacity: 0.75` |

## CSS Custom Properties Approach

ApexCSS provides a CSS custom properties-based approach that works immediately without pre-generating classes:

```html
<!-- Use CSS variables with inline styles -->
<div class="min-h-[var(--min-h)]" style="--min-h: 200px;">
  Content
</div>

<div class="w-[var(--w)] p-[var(--p)]" style="--w: 150px; --p: 2rem;">
  Content
</div>

<!-- Responsive with CSS variables -->
<div class="md:min-h-[var(--min-h)]" style="--min-h: 300px;">
  Content
</div>
```

### Available CSS Variable Classes

The following classes accept CSS custom properties:

- `w-[var(--w)]`, `w-[var(--w-px)]`, `w-[var(--w-pct)]`, etc.
- `h-[var(--h)]`, `h-[var(--h-px)]`, `h-[var(--h-pct)]`, etc.
- `min-w-[var(--min-w)]`, `min-w-[var(--min-w-px)]`, etc.
- `min-h-[var(--min-h)]`, `min-h-[var(--min-h-px)]`, etc.
- `max-w-[var(--max-w)]`, `max-h-[var(--max-h)]`
- `m-[var(--m)]`, `mt-[var(--mt)]`, `mx-[var(--mx)]`, etc.
- `p-[var(--p)]`, `pt-[var(--pt)]`, `px-[var(--px)]`, etc.
- `gap-[var(--gap)]`, `gap-x-[var(--gap-x)]`, etc.
- `top-[var(--top)]`, `left-[var(--left)]`, etc.
- `text-[var(--text-size)]`, `text-[var(--text-color)]`
- `leading-[var(--leading)]`, `tracking-[var(--tracking)]`
- `rounded-[var(--rounded)]`, `border-[var(--border)]`
- `duration-[var(--duration)]`, `delay-[var(--delay)]`

## calc() Expressions

You can use calc() expressions with arbitrary values:

```html
<!-- Using calc() with generated classes -->
<div class="w-[calc(100%-20px)]">...</div>
<div class="h-[calc(100vh-4rem)]">...</div>
<div class="m-[calc(50%-100px)]">...</div>
```

## Responsive Variants

Apply arbitrary values responsively using breakpoint prefixes:

```html
<!-- Responsive arbitrary values -->
<div class="w-full md:w-[50%] lg:w-[33%]">...</div>
<div class="min-h-[200px] md:min-h-[300px] lg:min-h-[400px]">...</div>
```

## Configuration

You can customize which arbitrary values are generated in your `apexcss.config.js`:

```javascript
// apexcss.config.js
export default {
  arbitraryValues: {
    enabled: true,
    // Common pixel values to generate
    pixels: [100, 200, 300, 400, 500, 600, 800, 1000],
    // Common percentage values
    percentages: [25, 50, 75, 100],
    // Common rem values
    rems: [1, 2, 3, 4, 5, 6, 8, 10],
    // Custom values (calc expressions, keywords)
    custom: [
      'calc(100%-1rem)',
      'calc(100vh-4rem)',
      'min-content',
      'max-content',
      'fit-content'
    ]
  }
};
```

Run `npm run arbitrary:build` to generate the arbitrary value utilities based on your configuration.

## Build Process

Arbitrary values are generated at build time to keep your CSS bundle optimized. The build process:

1. Reads configuration from `apexcss.config.js`
2. Generates utility classes for all configured values
3. Outputs to `src/core/_arbitrary-generated.scss`
4. Classes are included in the final CSS bundle

## Comparison with Tailwind

| Feature | Tailwind JIT | ApexCSS |
|---------|--------------|---------|
| Any value | JIT compiles on-demand | Pre-generated + CSS vars |
| Bundle size | Only used classes | Configurable subset |
| Dynamic values | From class names in templates | Via CSS custom properties |
| Responsive | `md:w-[200px]` | `md:w-[200px]` |
| calc() support | `w-[calc(100%-20px)]` | `w-[calc(100%-20px)]` |

## Best Practices

### 1. Use Predefined Values When Possible

For common values, use the predefined utility classes instead of arbitrary values:

```html
<!-- Instead of -->
<div class="w-[16px]">...</div>

<!-- Use -->
<div class="w-4">...</div>  <!-- 16px is w-4 -->
```

### 2. Use CSS Variables for Dynamic Values

When you need runtime-customizable values, use the CSS custom property approach:

```html
<!-- Good for dynamic theming -->
<div class="text-[var(--brand-color)]" style="--brand-color: #3b82f6;">
  Content
</div>
```

### 3. Configure Common Arbitrary Values

Add frequently used arbitrary values to your config:

```javascript
// In apexcss.config.js
arbitraryValues: {
  custom: [
    // Your design system's special sizes
    'calc(100%-var(--sidebar-width))',
    'clamp(200px, 50vw, 500px)',
    'min(100%, 1200px)'
  ]
}
```

## Opacity Modifiers (Color Alpha)

ApexCSS supports Tailwind-style opacity modifiers for colors using the `/` syntax:

```html
<!-- Background colors with opacity -->
<div class="bg-gray-800/50">50% opacity gray background</div>
<div class="bg-primary/25">25% opacity primary background</div>
<div class="bg-white/10">10% opacity white background</div>
<div class="bg-black/75">75% opacity black background</div>

<!-- Text colors with opacity -->
<p class="text-gray-500/75">75% opacity gray text</p>
<p class="text-white/50">50% opacity white text</p>

<!-- Border colors with opacity -->
<div class="border-gray-700/50">50% opacity border</div>
<div class="border-white/25">25% opacity border</div>
```

### Available Opacity Values

| Modifier | Opacity |
|----------|---------|
| `/5` | 5% |
| `/10` | 10% |
| `/20` | 20% |
| `/25` | 25% |
| `/30` | 30% |
| `/40` | 40% |
| `/50` | 50% |
| `/60` | 60% |
| `/70` | 70% |
| `/75` | 75% |
| `/80` | 80% |
| `/90` | 90% |
| `/95` | 95% |
| `/100` | 100% |

### How It Works

Opacity modifiers use CSS `color-mix()` for modern browser support:

```css
.bg-gray-800\/50 {
  background-color: color-mix(in srgb, var(--color-gray-800) 50%, transparent);
}
```

**Browser Support**: `color-mix()` is supported in all modern browsers. For older browsers, the color will fall back to full opacity.

### CSS Custom Property Approach

For truly arbitrary opacity values:

```html
<div class="bg-opacity-[var(--bg-opacity)]"
     style="--bg-color: #3b82f6; --bg-opacity: 33%;">
  33% opacity background
</div>
```

## Dark Mode with Opacity

Dark mode works seamlessly with opacity modifiers:

```html
<!-- Dark mode with opacity -->
<div class="bg-white dark:bg-gray-800/50">
  White in light mode, 50% gray-800 in dark mode
</div>

<div class="text-gray-900 dark:text-white/75">
  Dark text in light mode, 75% white in dark mode
</div>

<div class="border-gray-200 dark:border-gray-700/50">
  Light border in light mode, 50% dark border in dark mode
</div>
```

### Available Dark Mode Opacity Classes

| Class | Description |
|-------|-------------|
| `dark:bg-gray-800/50` | 50% opacity gray-800 background in dark mode |
| `dark:bg-gray-800/75` | 75% opacity gray-800 background in dark mode |
| `dark:bg-gray-700/50` | 50% opacity gray-700 background in dark mode |
| `dark:bg-gray-900/50` | 50% opacity gray-900 background in dark mode |
| `dark:text-white/50` | 50% opacity white text in dark mode |
| `dark:text-white/75` | 75% opacity white text in dark mode |
| `dark:text-gray-300/50` | 50% opacity gray-300 text in dark mode |
| `dark:border-gray-700/50` | 50% opacity gray-700 border in dark mode |
| `dark:border-gray-700/25` | 25% opacity gray-700 border in dark mode |

### Usage Examples

**Card with semi-transparent dark background:**
```html
<div class="bg-white dark:bg-gray-800/50 rounded-lg p-6 shadow-lg">
  <h2 class="text-gray-900 dark:text-white">Card Title</h2>
  <p class="text-gray-600 dark:text-gray-300/75">
    Content with slightly muted text in dark mode
  </p>
</div>
```

**Modal overlay:**
```html
<div class="fixed inset-0 bg-black/50 dark:bg-black/75">
  <!-- Backdrop with 50% opacity in light, 75% in dark -->
</div>
```

**Navigation with glass effect:**
```html
<nav class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
  <!-- Glass-like navigation that adapts to dark mode -->
</nav>
```

**Toast notifications:**
```html
<div class="bg-success/90 dark:bg-success/75 text-white">
  Success message
</div>
<div class="bg-danger/90 dark:bg-danger/75 text-white">
  Error message
</div>
```

## Examples

### Card with Custom Dimensions

```html
<div class="w-[350px] p-[24px] rounded-[12px] shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
  <h3 class="text-[20px] mb-[16px]">Card Title</h3>
  <p class="text-[var(--text-muted)]">Card content...</p>
</div>
```

### Modal with calc()

```html
<div class="fixed inset-0 flex items-center justify-center bg-black/50">
  <div class="w-[calc(100%-2rem)] max-w-[500px] max-h-[calc(100vh-4rem)] p-[24px] rounded-[8px] bg-white">
    Modal content
  </div>
</div>
```

### Custom Grid Gap

```html
<div class="grid grid-cols-3 gap-[var(--grid-gap)]" style="--grid-gap: clamp(1rem, 3vw, 2rem);">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```
