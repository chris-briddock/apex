# ApexCSS

A comprehensive, utility-first CSS framework built with Sass. ApexCSS provides 500+ utility classes for rapid UI development, covering everything from basic spacing and typography to advanced animations, transforms, and filters.

## Features

- **500+ Utility Classes**: Comprehensive coverage of CSS properties
- **Utility-First Approach**: Build designs directly in HTML using utility classes
- **Modular Architecture**: Import only what you need
- **Design Tokens**: Sass variables and CSS custom properties for easy customization
- **State Variants**: Built-in support for hover, focus, active, and disabled states
- **Dark Mode**: Full dark mode support with CSS custom properties
- **RTL Support**: Right-to-left language support
- **Accessibility**: Screen reader and focus management utilities
- **Extended Utilities**: Animations, transforms, filters, and aspect ratio
- **Plugin System**: Extensible architecture for community contributions

## Quick Start

### Installation

```bash
# Via npm
npm install apexcss

# Via CDN
<link rel="stylesheet" href="https://unpkg.com/apexcss@latest/dist/framework.css">
```

### Basic Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="dist/framework.css">
</head>
<body class="p-8 bg-gray-50">
  <h1 class="text-3xl font-bold text-gray-800 mb-4">Hello, World!</h1>
  <button class="inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors">
    Click Me
  </button>
</body>
</html>
```

## Core Utilities

### Spacing

Control margin, padding, and gap with consistent scale values.

```html
<!-- Margin -->
<div class="m-4">Margin all sides</div>
<div class="mt-4">Margin top</div>
<div class="mr-4">Margin right</div>
<div class="mb-4">Margin bottom</div>
<div class="ml-4">Margin left</div>
<div class="mx-4">Margin horizontal</div>
<div class="my-4">Margin vertical</div>

<!-- Padding -->
<div class="p-4">Padding all sides</div>
<div class="pt-4">Padding top</div>
<div class="px-4">Padding horizontal</div>
<div class="py-4">Padding vertical</div>

<!-- Gap -->
<div class="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Typography

Complete typography control including fonts, sizes, weights, and text styling.

```html
<!-- Font Size -->
<p class="text-xs">Extra small (0.75rem)</p>
<p class="text-sm">Small (0.875rem)</p>
<p class="text-base">Base (1rem)</p>
<p class="text-lg">Large (1.125rem)</p>
<p class="text-xl">Extra large (1.25rem)</p>
<p class="text-2xl">2XL (1.5rem)</p>
<p class="text-3xl">3XL (1.875rem)</p>
<p class="text-4xl">4XL (2.25rem)</p>
<p class="text-5xl">5XL (3rem)</p>
<p class="text-6xl">6XL (3.75rem)</p>

<!-- Font Weight -->
<p class="font-normal">Normal (400)</p>
<p class="font-medium">Medium (500)</p>
<p class="font-semibold">Semibold (600)</p>
<p class="font-bold">Bold (700)</p>

<!-- Line Height -->
<p class="leading-none">Line height 1</p>
<p class="leading-tight">Line height 1.25</p>
<p class="leading-normal">Line height 1.5</p>
<p class="leading-relaxed">Line height 1.625</p>
<p class="leading-loose">Line height 2</p>

<!-- Letter Spacing -->
<p class="tracking-tighter">Tighter (-0.05em)</p>
<p class="tracking-tight">Tight (-0.025em)</p>
<p class="tracking-normal">Normal (0)</p>
<p class="tracking-wide">Wide (0.025em)</p>
<p class="tracking-wider">Wider (0.05em)</p>
<p class="tracking-widest">Widest (0.1em)</p>

<!-- Text Alignment -->
<p class="text-left">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-right">Right aligned</p>
<p class="text-justify">Justified</p>
<p class="text-start">Start (LTR/RTL aware)</p>
<p class="text-end">End (LTR/RTL aware)</p>

<!-- Text Decoration -->
<p class="underline">Underlined text</p>
<p class="line-through">Strikethrough text</p>
<p class="no-underline">No underline</p>

<!-- Text Transform -->
<p class="uppercase">UPPERCASE</p>
<p class="lowercase">lowercase</p>
<p class="capitalize">Capitalize Words</p>

<!-- Text Overflow -->
<p class="truncate">Text with ellipsis truncation...</p>
```

### Colors

Semantic color system with full gray scale.

```html
<!-- Text Colors -->
<p class="text-primary">Primary text</p>
<p class="text-secondary">Secondary text</p>
<p class="text-success">Success text</p>
<p class="text-danger">Danger text</p>
<p class="text-warning">Warning text</p>
<p class="text-info">Info text</p>
<p class="text-gray-500">Gray text</p>
<p class="text-white">White text</p>
<p class="text-black">Black text</p>

<!-- Background Colors -->
<div class="bg-primary">Primary background</div>
<div class="bg-secondary">Secondary background</div>
<div class="bg-success">Success background</div>
<div class="bg-danger">Danger background</div>
<div class="bg-warning">Warning background</div>
<div class="bg-info">Info background</div>
<div class="bg-gray-100">Light gray background</div>
<div class="bg-gray-900">Dark gray background</div>
```

### Flexbox

Complete flexbox control with all modern properties.

```html
<!-- Display -->
<div class="flex">Flex container</div>
<div class="inline-flex">Inline flex container</div>

<!-- Direction -->
<div class="flex flex-row">Row (default)</div>
<div class="flex flex-row-reverse">Row reverse</div>
<div class="flex flex-col">Column</div>
<div class="flex flex-col-reverse">Column reverse</div>

<!-- Wrap -->
<div class="flex flex-wrap">Wrap</div>
<div class="flex flex-nowrap">No wrap</div>
<div class="flex flex-wrap-reverse">Wrap reverse</div>

<!-- Justify Content -->
<div class="flex justify-start">Start</div>
<div class="flex justify-end">End</div>
<div class="flex justify-center">Center</div>
<div class="flex justify-between">Space between</div>
<div class="flex justify-around">Space around</div>
<div class="flex justify-evenly">Space evenly</div>

<!-- Align Items -->
<div class="flex items-start">Align start</div>
<div class="flex items-end">Align end</div>
<div class="flex items-center">Align center</div>
<div class="flex items-baseline">Align baseline</div>
<div class="flex items-stretch">Align stretch</div>

<!-- Flex Grow/Shrink -->
<div class="flex-grow">Grow</div>
<div class="flex-grow-0">No grow</div>
<div class="flex-shrink">Shrink</div>
<div class="flex-shrink-0">No shrink</div>

<!-- Flex Basis -->
<div class="flex-basis-0">Basis 0</div>
<div class="flex-basis-auto">Basis auto</div>
<div class="flex-basis-full">Basis 100%</div>

<!-- Order -->
<div class="order-1">Order 1</div>
<div class="order-last">Order last</div>
<div class="order-first">Order first</div>

<!-- Flex Shorthand -->
<div class="flex-1">Flex 1 (1 1 0%)</div>
<div class="flex-auto">Flex auto</div>
<div class="flex-none">Flex none</div>
```

### Grid

CSS Grid utilities for complex layouts.

```html
<!-- Display -->
<div class="grid">Grid container</div>
<div class="inline-grid">Inline grid</div>

<!-- Template Columns -->
<div class="grid grid-cols-1">1 column</div>
<div class="grid grid-cols-2">2 columns</div>
<div class="grid grid-cols-3">3 columns</div>
<div class="grid grid-cols-4">4 columns</div>
<div class="grid grid-cols-12">12 columns</div>

<!-- Column Span -->
<div class="col-span-2">Span 2 columns</div>
<div class="col-span-full">Span all columns</div>

<!-- Gap -->
<div class="grid grid-cols-2 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Row/Column Gap -->
<div class="grid gap-x-4 gap-y-8">Horizontal and vertical gap</div>

<!-- Auto Flow -->
<div class="grid grid-flow-row">Row flow</div>
<div class="grid grid-flow-col">Column flow</div>
<div class="grid grid-flow-dense">Dense packing</div>
```

### Sizing

Width, height, min/max sizing utilities.

```html
<!-- Width -->
<div class="w-0">Width 0</div>
<div class="w-4">Width 1rem</div>
<div class="w-full">Width 100%</div>
<div class="w-screen">Width 100vw</div>
<div class="w-auto">Width auto</div>
<div class="w-min">Width min-content</div>
<div class="w-max">Width max-content</div>
<div class="w-fit">Width fit-content</div>
<div class="w-1/2">Width 50%</div>
<div class="w-1/3">Width 33.33%</div>
<div class="w-1/4">Width 25%</div>

<!-- Height -->
<div class="h-full">Height 100%</div>
<div class="h-screen">Height 100vh</div>
<div class="h-auto">Height auto</div>

<!-- Min/Max Width -->
<div class="min-w-0">Min width 0</div>
<div class="max-w-full">Max width 100%</div>
<div class="max-w-screen-lg">Max width 1024px</div>
<div class="max-w-md">Max width 28rem</div>

<!-- Min/Max Height -->
<div class="min-h-screen">Min height 100vh</div>
<div class="max-h-full">Max height 100%</div>
```

### Positioning

Position and z-index utilities.

```html
<!-- Position -->
<div class="static">Static (default)</div>
<div class="relative">Relative</div>
<div class="absolute">Absolute</div>
<div class="fixed">Fixed</div>
<div class="sticky">Sticky</div>

<!-- Inset -->
<div class="absolute inset-0">All sides 0</div>
<div class="absolute top-0 right-0">Top right 0</div>
<div class="absolute bottom-0 left-0">Bottom left 0</div>

<!-- Directional Offsets -->
<div class="absolute top-4">Top 1rem</div>
<div class="absolute right-4">Right 1rem</div>
<div class="absolute bottom-4">Bottom 1rem</div>
<div class="absolute left-4">Left 1rem</div>

<!-- Z-Index -->
<div class="z-0">z-index 0</div>
<div class="z-10">z-index 10</div>
<div class="z-20">z-index 20</div>
<div class="z-30">z-index 30</div>
<div class="z-40">z-index 40</div>
<div class="z-50">z-index 50</div>
<div class="z-auto">z-index auto</div>
```

### Borders

Border width, style, color, and radius.

```html
<!-- Border Width -->
<div class="border">Border 1px</div>
<div class="border-2">Border 2px</div>
<div class="border-4">Border 4px</div>
<div class="border-8">Border 8px</div>
<div class="border-0">No border</div>

<!-- Border Style -->
<div class="border-solid">Solid border</div>
<div class="border-dashed">Dashed border</div>
<div class="border-dotted">Dotted border</div>
<div class="border-double">Double border</div>

<!-- Border Color -->
<div class="border-primary">Primary border</div>
<div class="border-gray-300">Gray border</div>
<div class="border-transparent">Transparent border</div>

<!-- Border Radius -->
<div class="rounded-none">No radius</div>
<div class="rounded-sm">Small radius</div>
<div class="rounded">Default radius</div>
<div class="rounded-md">Medium radius</div>
<div class="rounded-lg">Large radius</div>
<div class="rounded-xl">Extra large</div>
<div class="rounded-full">Full radius (pill)</div>

<!-- Directional Radius -->
<div class="rounded-t">Top radius</div>
<div class="rounded-r">Right radius</div>
<div class="rounded-b">Bottom radius</div>
<div class="rounded-l">Left radius</div>
<div class="rounded-tl">Top-left radius</div>
<div class="rounded-br">Bottom-right radius</div>
```

### Shadows

Box shadow utilities.

```html
<div class="shadow-sm">Small shadow</div>
<div class="shadow">Default shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
<div class="shadow-xl">Extra large shadow</div>
<div class="shadow-2xl">2XL shadow</div>
<div class="shadow-inner">Inner shadow</div>
<div class="shadow-none">No shadow</div>
```

### Display

Display utilities for all common values.

```html
<div class="block">Block</div>
<div class="inline-block">Inline block</div>
<div class="inline">Inline</div>
<div class="flex">Flex</div>
<div class="inline-flex">Inline flex</div>
<div class="grid">Grid</div>
<div class="inline-grid">Inline grid</div>
<div class="table">Table</div>
<div class="table-cell">Table cell</div>
<div class="table-row">Table row</div>
<div class="flow-root">Flow root</div>
<div class="contents">Contents</div>
<div class="list-item">List item</div>
<div class="hidden">Hidden (none)</div>
```

### Opacity

Opacity utilities with fine-grained control.

```html
<div class="opacity-0">0%</div>
<div class="opacity-5">5%</div>
<div class="opacity-10">10%</div>
<div class="opacity-20">20%</div>
<div class="opacity-25">25%</div>
<div class="opacity-30">30%</div>
<div class="opacity-40">40%</div>
<div class="opacity-50">50%</div>
<div class="opacity-60">60%</div>
<div class="opacity-70">70%</div>
<div class="opacity-75">75%</div>
<div class="opacity-80">80%</div>
<div class="opacity-90">90%</div>
<div class="opacity-95">95%</div>
<div class="opacity-100">100%</div>
```

### Overflow
Overflow control utilities.

```html
<div class="overflow-auto">Auto overflow</div>
<div class="overflow-hidden">Hidden overflow</div>
<div class="overflow-visible">Visible overflow</div>
<div class="overflow-scroll">Scroll overflow</div>
<div class="overflow-x-auto">Horizontal auto</div>
<div class="overflow-y-auto">Vertical auto</div>
<div class="overflow-x-hidden">Horizontal hidden</div>
<div class="overflow-y-hidden">Vertical hidden</div>
```

### Visibility

Visibility control.

```html
<div class="visible">Visible</div>
<div class="invisible">Hidden but takes space</div>
<div class="collapse">Collapse (tables)</div>
```

### Transitions

Animation and transition utilities.

```html
<!-- Duration -->
<div class="duration-75">75ms</div>
<div class="duration-100">100ms</div>
<div class="duration-150">150ms</div>
<div class="duration-200">200ms</div>
<div class="duration-300">300ms</div>
<div class="duration-500">500ms</div>
<div class="duration-700">700ms</div>
<div class="duration-1000">1000ms</div>

<!-- Timing Function -->
<div class="ease-linear">Linear</div>
<div class="ease-in">Ease in</div>
<div class="ease-out">Ease out</div>
<div class="ease-in-out">Ease in-out</div>

<!-- Property -->
<div class="transition-all">All properties</div>
<div class="transition-colors">Colors only</div>
<div class="transition-opacity">Opacity only</div>
<div class="transition-transform">Transform only</div>
<div class="transition-shadow">Shadow only</div>

<!-- Built-in Animations -->
<div class="animate-spin">Spin animation</div>
<div class="animate-pulse">Pulse animation</div>
<div class="animate-bounce">Bounce animation</div>
```

### Cursor

Cursor utilities for all common values.

```html
<div class="cursor-auto">Auto cursor</div>
<div class="cursor-default">Default cursor</div>
<div class="cursor-pointer">Pointer cursor</div>
<div class="cursor-wait">Wait cursor</div>
<div class="cursor-text">Text cursor</div>
<div class="cursor-move">Move cursor</div>
<div class="cursor-help">Help cursor</div>
<div class="cursor-not-allowed">Not allowed cursor</div>
<div class="cursor-crosshair">Crosshair cursor</div>
<div class="cursor-grab">Grab cursor</div>
<div class="cursor-grabbing">Grabbing cursor</div>
<div class="cursor-zoom-in">Zoom in cursor</div>
<div class="cursor-zoom-out">Zoom out cursor</div>
```

### User Select
Text selection control.

```html
<div class="select-none">No selection</div>
<div class="select-text">Text selection</div>
<div class="select-all">Select all on click</div>
<div class="select-auto">Auto selection</div>
```

### Pointer Events

Pointer event control.

```html
<div class="pointer-events-none">No pointer events</div>
<div class="pointer-events-auto">Auto pointer events</div>
```

### Resize

Element resize control.

```html
<div class="resize-none">No resize</div>
<div class="resize">Resize both</div>
<div class="resize-y">Resize vertical</div>
<div class="resize-x">Resize horizontal</div>
```

### Appearance

Form element appearance reset.

```html
<input class="appearance-none" type="checkbox">
<select class="appearance-none">
```

### List Style

List styling utilities.

```html
<ul class="list-disc">Disc bullets</ul>
<ul class="list-decimal">Decimal numbers</ul>
<ul class="list-none">No bullets</ul>
<ul class="list-inside">Inside position</ul>
<ul class="list-outside">Outside position</ul>
```

### Object Fit

Image/object fitting.

```html
<img class="object-contain" src="...">
<img class="object-cover" src="...">
<img class="object-fill" src="...">
<img class="object-none" src="...">
<img class="object-scale-down" src="...">

<!-- Object Position -->
<img class="object-center" src="...">
<img class="object-top" src="...">
<img class="object-bottom" src="...">
<img class="object-left" src="...">
<img class="object-right" src="...">
```

### Float

Float utilities.

```html
<div class="float-left">Float left</div>
<div class="float-right">Float right</div>
<div class="float-none">No float</div>

<!-- Clear -->
<div class="clear-left">Clear left</div>
<div class="clear-right">Clear right</div>
<div class="clear-both">Clear both</div>
<div class="clear-none">No clear</div>
```

### Vertical Align

Vertical alignment for inline elements.

```html
<span class="align-baseline">Baseline</span>
<span class="align-top">Top</span>
<span class="align-middle">Middle</span>
<span class="align-bottom">Bottom</span>
<span class="align-text-top">Text top</span>
<span class="align-text-bottom">Text bottom</span>
```

### Outline

Focus outline styling.

```html
<input class="outline-none">
<input class="outline">
<input class="outline-2">
<input class="outline-offset-2">
```

### Isolation

Stacking context control.

```html
<div class="isolate">Create new stacking context</div>
<div class="isolation-auto">Auto isolation</div>
```

### Will Change

Performance hint for animations.

```html
<div class="will-change-transform">Optimize transform</div>
<div class="will-change-opacity">Optimize opacity</div>
<div class="will-change-scroll">Optimize scroll</div>
```

## Extended Utilities

### Transforms

CSS transform utilities.

```html
<!-- Scale -->
<div class="scale-50">Scale 50%</div>
<div class="scale-75">Scale 75%</div>
<div class="scale-90">Scale 90%</div>
<div class="scale-95">Scale 95%</div>
<div class="scale-100">Scale 100%</div>
<div class="scale-105">Scale 105%</div>
<div class="scale-110">Scale 110%</div>
<div class="scale-125">Scale 125%</div>
<div class="scale-150">Scale 150%</div>

<!-- Rotate -->
<div class="rotate-0">0deg</div>
<div class="rotate-45">45deg</div>
<div class="rotate-90">90deg</div>
<div class="rotate-180">180deg</div>
<div class="rotate-n45">-45deg</div>

<!-- Translate -->
<div class="translate-x-4">Translate X 1rem</div>
<div class="translate-y-4">Translate Y 1rem</div>
<div class="translate-x-full">Translate X 100%</div>

<!-- Skew -->
<div class="skew-x-12">Skew X 12deg</div>
<div class="skew-y-12">Skew Y 12deg</div>

<!-- Transform Origin -->
<div class="origin-center">Center origin</div>
<div class="origin-top">Top origin</div>
<div class="origin-bottom">Bottom origin</div>
<div class="origin-left">Left origin</div>
<div class="origin-right">Right origin</div>
```

### Animations

Extended animation library.

```html
<!-- Entrance Animations -->
<div class="animate-fade-in">Fade in</div>
<div class="animate-fade-in-up">Fade in up</div>
<div class="animate-fade-in-down">Fade in down</div>
<div class="animate-slide-in-left">Slide in left</div>
<div class="animate-slide-in-right">Slide in right</div>
<div class="animate-scale-in">Scale in</div>
<div class="animate-zoom-in">Zoom in</div>

<!-- Attention Animations -->
<div class="animate-shake">Shake</div>
<div class="animate-ping">Ping</div>
<div class="animate-pulse">Pulse</div>
<div class="animate-bounce">Bounce</div>

<!-- Exit Animations -->
<div class="animate-zoom-out">Zoom out</div>
<div class="animate-shrink">Shrink</div>

<!-- Special Effects -->
<div class="animate-flash">Flash</div>
<div class="animate-swing">Swing</div>
<div class="animate-tada">Tada</div>
<div class="animate-wobble">Wobble</div>
<div class="animate-jello">Jello</div>
<div class="animate-heartbeat">Heartbeat</div>
<div class="animate-float">Float</div>
<div class="animate-breathe">Breathe</div>
```

### Filters

CSS filter utilities.

```html
<!-- Blur -->
<img class="blur-sm" src="...">
<img class="blur" src="...">
<img class="blur-md" src="...">
<img class="blur-lg" src="...">
<img class="blur-xl" src="...">

<!-- Brightness -->
<img class="brightness-50" src="...">
<img class="brightness-100" src="...">
<img class="brightness-150" src="...">
<img class="brightness-200" src="...">

<!-- Contrast -->
<img class="contrast-50" src="...">
<img class="contrast-100" src="...">
<img class="contrast-150" src="...">

<!-- Grayscale -->
<img class="grayscale-0" src="...">
<img class="grayscale" src="...">

<!-- Hue Rotate -->
<img class="hue-rotate-0" src="...">
<img class="hue-rotate-90" src="...">
<img class="hue-rotate-180" src="...">

<!-- Invert -->
<img class="invert-0" src="...">
<img class="invert" src="...">

<!-- Saturate -->
<img class="saturate-0" src="...">
<img class="saturate-100" src="...">
<img class="saturate-200" src="...">

<!-- Sepia -->
<img class="sepia-0" src="...">
<img class="sepia" src="...">

<!-- Drop Shadow -->
<div class="drop-shadow">Drop shadow</div>
<div class="drop-shadow-lg">Large drop shadow</div>

<!-- Backdrop Blur (for overlays) -->
<div class="backdrop-blur">Backdrop blur</div>
<div class="backdrop-blur-lg">Large backdrop blur</div>
```

### Aspect Ratio

Aspect ratio utilities.

```html
<div class="aspect-ratio-auto">Auto ratio</div>
<div class="aspect-ratio-square">1:1 square</div>
<div class="aspect-ratio-video">16:9 video</div>
<div class="aspect-ratio-4/3">4:3 standard</div>
<div class="aspect-ratio-3/2">3:2 photo</div>
<div class="aspect-ratio-21/9">21:9 ultrawide</div>
<div class="aspect-ratio-9/16">9:16 portrait</div>
```

## State Variants

All utilities support state variants for interactive elements.

```html
<!-- Hover State -->
<button class="hover:bg-primary-dark">Hover background</button>

<!-- Focus State -->
<input class="focus:ring-2 focus:ring-primary">

<!-- Active State -->
<button class="active:scale-95">Active scale</button>

<!-- Disabled State -->
<button class="disabled:opacity-50 disabled:cursor-not-allowed" disabled>Disabled</button>

<!-- Combined -->
<button class="bg-primary hover:bg-primary-dark focus:ring-2 active:scale-95 disabled:opacity-50">
  Interactive Button
</button>
```

## Dark Mode

All utilities support dark mode variants.

```html
<div class="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
  Automatically adapts to dark mode
</div>

<div class="border-gray-200 dark:border-gray-700">
  Dark mode borders
</div>

<div class="bg-primary text-white dark:bg-primary-light">
  Dark mode colors
</div>
```

## Responsive Design

All utilities can be prefixed with responsive breakpoints.

```html
<!-- Mobile-first responsive utilities -->
<div class="text-sm md:text-base lg:text-lg">
  Responsive text size
</div>

<div class="w-full md:w-1/2 lg:w-1/3">
  Responsive width
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  Responsive grid
</div>

<div class="flex flex-col md:flex-row">
  Responsive flex direction
</div>
```

### Breakpoints

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

## RTL Support

Right-to-left language support is built-in.

```html
<div class="ml-4 rtl:mr-4">
  RTL-aware margins
</div>

<div class="text-left rtl:text-right">
  RTL-aware text alignment
</div>
```

## Accessibility

Built-in accessibility utilities.

```html
<!-- Screen reader only -->
<span class="sr-only">Screen reader text</span>
<span class="not-sr-only">Visible text</span>

<!-- Focus visible -->
<button class="focus-visible:ring-2">Focus visible only</button>

<!-- Focus within -->
<div class="focus-within:ring-2">
  <input type="text">
</div>

<!-- Focus ring -->
<button class="focus:ring-2 focus:ring-primary focus:ring-offset-2">
  Focus ring
</button>
```

## Configuration

### Customizing Colors

```scss
// src/base/_variables.scss
:root {
  --color-primary: #3b82f6;
  --color-secondary: #64748b;
  --color-success: #22c55e;
  --color-danger: #ef4444;
  --color-warning: #f59e0b;
  --color-info: #0ea5e9;
}
```

### Customizing Breakpoints

```scss
// src/config/_breakpoints.scss
$sm: 640px;
$md: 768px;
$lg: 1024px;
$xl: 1280px;
$2xl: 1536px;
```

### Enabling/Disabling Utilities

```scss
// src/config/_settings.scss
$enable-spacing: true;
$enable-typography: true;
$enable-colors: true;
$enable-flexbox: true;
$enable-grid: true;
$enable-animations: true;
$enable-transforms: true;
$enable-filters: true;
// ... etc
```

## Build System

### Available Scripts

```bash
# Build the framework
npm run build

# Start development server
npm run dev

# Watch for changes
npm run watch

# Lint Sass
npm run lint

# Clean build
npm run clean
```

### Build Output

- `dist/framework.css` - Compiled CSS
- `dist/framework.min.css` - Minified CSS
- `dist/framework.css.map` - Source map

## Browser Support

ApexCSS supports all modern browsers. See `.browserslistrc` for the current configuration.

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+
- iOS Safari 14+

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Run tests: `npm run test`
5. Submit a pull request

## Documentation

Full documentation is available at [docs/index.html](docs/index.html) or run:

```bash
npm run dev
```

Then open `http://localhost:5173/docs/`

## License

MIT License - see LICENSE file for details

---

Built with ❤️ using Sass and modern CSS features.
