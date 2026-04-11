# Layered E2E Testing Architecture

This document outlines a hierarchical testing approach that mirrors the ApexCSS framework structure.

## Layer 1: Base CSS (`base.css`)

**File:** `tests/e2e/tests/layer-base.spec.ts`

Tests the CSS reset and base styles applied to HTML elements.

### Coverage:
- **Box Sizing**: All elements use `border-box`
- **Typography Base**: `html` font-size, `body` line-height
- **Heading Reset**: `h1`-`h6` margins and font-sizes
- **Paragraph Reset**: `p` margins
- **List Reset**: `ul`, `ol` padding and list-style
- **Link Reset**: `a` text-decoration and color
- **Image Reset**: `img` max-width and display
- **Form Reset**: `button`, `input`, `textarea` font inheritance
- **Table Reset**: `table` border-collapse

**Test Pattern:**
```typescript
test('all elements should use border-box', async ({ page }) => {
  const testId = await createComponent(page, {
    classes: 'test-box',
    styles: { width: '100px', height: '100px', padding: '10px', border: '5px solid black' }
  });
  const width = await getComputedStyle(page, getSelector(testId), 'width');
  expect(width).toBe('100px'); // border-box keeps width at 100px
});
```

---

## Layer 2: Themes CSS (`themes.css`)

**File:** `tests/e2e/tests/layer-themes.spec.ts`

Tests CSS custom properties (design tokens) defined in `:root`.

### Coverage:

#### Spacing Tokens
- `--spacing-0` through `--spacing-96`
- Verify each maps to correct rem/px value

#### Color Tokens
- Primary palette: `--color-primary-50` through `--color-primary-950`
- Gray palette: `--color-gray-50` through `--color-gray-950`
- Semantic: `--color-success-*`, `--color-warning-*`, `--color-danger-*`
- Verify OKLCH format

#### Typography Tokens
- Font families: `--font-family-sans`, `--font-family-serif`, `--font-family-mono`
- Font sizes: `--font-size-xs` through `--font-size-9xl`
- Font weights: `--font-weight-*`
- Line heights: `--line-height-*`

#### Border Radius Tokens
- `--border-radius-none`, `--border-radius-sm`, `--border-radius-md`, etc.

#### Shadow Tokens
- `--shadow-sm`, `--shadow-md`, `--shadow-lg`, etc.

#### Breakpoint Tokens
- `--breakpoint-sm`, `--breakpoint-md`, `--breakpoint-lg`, etc.

**Test Pattern:**
```typescript
test('spacing tokens should be defined', async ({ page }) => {
  const spacing4 = await getCSSCustomProperty(page, '--spacing-4');
  expect(spacing4).toBe('1rem');
});
```

---

## Layer 3: Core Utilities (`utilities.css` - Core Section)

### 3.1 Core Layout
**File:** `tests/e2e/tests/core-layout.spec.ts`

#### Display
- `block`, `inline-block`, `inline`
- `flex`, `inline-flex`
- `grid`, `inline-grid`
- `hidden`, `contents`, `list-item`

#### Flexbox
- Direction: `flex-row`, `flex-col`, `flex-row-reverse`, `flex-col-reverse`
- Wrap: `flex-wrap`, `flex-nowrap`, `flex-wrap-reverse`
- Justify: `justify-start`, `justify-end`, `justify-center`, `justify-between`, `justify-around`, `justify-evenly`
- Items: `items-start`, `items-end`, `items-center`, `items-baseline`, `items-stretch`
- Content: `content-start`, `content-end`, `content-center`, `content-between`, `content-around`

#### Grid
- Columns: `grid-cols-1` through `grid-cols-12`
- Rows: `grid-rows-1` through `grid-rows-6`
- Gap: `gap-*`, `gap-x-*`, `gap-y-*`

#### Positioning
- Position: `static`, `relative`, `absolute`, `fixed`, `sticky`
- Inset: `inset-0`, `inset-x-0`, `inset-y-0`, `top-0`, `right-0`, `bottom-0`, `left-0`
- Z-Index: `z-0`, `z-10`, `z-20`, `z-30`, `z-40`, `z-50`, `z-auto`

#### Visibility
- `visible`, `invisible`, `collapse`

---

### 3.2 Core Spacing
**File:** `tests/e2e/tests/core-spacing.spec.ts`

#### Padding
- All sides: `p-0` through `p-96`
- Individual: `pt-*`, `pr-*`, `pb-*`, `pl-*`
- Axis: `px-*`, `py-*`

#### Margin
- All sides: `m-0` through `m-96`
- Individual: `mt-*`, `mr-*`, `mb-*`, `ml-*`
- Axis: `mx-*`, `my-*`
- Auto: `mx-auto`, `my-auto`, `m-auto`

#### Sizing
- Width: `w-0` through `w-96`, `w-auto`, `w-full`, `w-screen`
- Height: `h-0` through `h-96`, `h-auto`, `h-full`, `h-screen`
- Min/Max: `min-w-*`, `max-w-*`, `min-h-*`, `max-h-*`

---

### 3.3 Core Typography
**File:** `tests/e2e/tests/core-typography.spec.ts`

#### Font Size
- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`
- `text-2xl` through `text-9xl`

#### Font Weight
- `font-thin` through `font-black`

#### Text Alignment
- `text-left`, `text-center`, `text-right`, `text-justify`, `text-start`, `text-end`

#### Text Transform
- `uppercase`, `lowercase`, `capitalize`, `normal-case`

#### Text Decoration
- `underline`, `line-through`, `no-underline`, `overline`

---

### 3.4 Core Visual
**File:** `tests/e2e/tests/core-visual.spec.ts`

#### Colors
- Background: `bg-primary-*`, `bg-gray-*`, `bg-white`, `bg-black`, `bg-transparent`
- Text: `text-primary-*`, `text-gray-*`, `text-white`, `text-black`
- Border: `border-primary-*`, `border-gray-*`
- Opacity modifiers: `bg-primary-500/50`

#### Backgrounds
- `bg-none`, `bg-gradient-*`

#### Borders
- Width: `border`, `border-0`, `border-2`, `border-4`, `border-8`
- Style: `border-solid`, `border-dashed`, `border-dotted`, `border-double`, `border-none`
- Radius: `rounded-none`, `rounded-sm`, `rounded`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-full`

#### Shadows
- `shadow-none`, `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`, `shadow-inner`

#### Opacity
- `opacity-0` through `opacity-100` (increments of 5)

#### Overflow
- `overflow-auto`, `overflow-hidden`, `overflow-visible`, `overflow-scroll`
- `overflow-x-*`, `overflow-y-*`

#### Object Fit
- `object-contain`, `object-cover`, `object-fill`, `object-none`, `object-scale-down`

---

### 3.5 Core Interaction
**File:** `tests/e2e/tests/core-interaction.spec.ts`

#### Cursor
- `cursor-auto`, `cursor-default`, `cursor-pointer`, `cursor-wait`, `cursor-text`, `cursor-move`, `cursor-help`, `cursor-not-allowed`, `cursor-none`

#### Transitions
- `transition-none`, `transition-all`, `transition-colors`, `transition-opacity`, `transition-shadow`, `transition-transform`

---

### 3.6 Core Responsive
**File:** `tests/e2e/tests/core-responsive.spec.ts`

#### Breakpoint Prefixes
Test responsive variants work at each breakpoint:
- `sm:*`, `md:*`, `lg:*`, `xl:*`, `xxl:*`, `xxxl:*`

---

## Layer 4: Extended Utilities

### 4.1 Extended Layout
**File:** `tests/e2e/tests/extended-layout.spec.ts`

#### Flex Extended
- Grow/Shrink: `flex-grow`, `flex-grow-0`, `flex-shrink`, `flex-shrink-0`
- Basis: `flex-basis-0`, `flex-basis-auto`, `flex-basis-full`, `flex-basis-1/2`, `flex-basis-1/3`, `flex-basis-2/3`, `flex-basis-1/4`
- Self: `self-auto`, `self-start`, `self-end`, `self-center`, `self-baseline`, `self-stretch`
- Order: `order-1` through `order-12`, `order-first`, `order-last`, `order-none`

#### Grid Extended
- Auto flow: `grid-flow-row`, `grid-flow-col`, `grid-flow-row-dense`, `grid-flow-col-dense`
- Auto columns: `auto-cols-auto`, `auto-cols-min`, `auto-cols-max`, `auto-cols-fr`
- Auto rows: `auto-rows-auto`, `auto-rows-min`, `auto-rows-max`, `auto-rows-fr`

#### Container Queries
- `@sm:*`, `@md:*`, `@lg:*`, `@xl:*`, `@2xl:*`

#### Float & Clear
- `float-left`, `float-right`, `float-none`
- `clear-left`, `clear-right`, `clear-both`, `clear-none`

#### Other Layout
- `isolate`, `isolation-auto`
- `object-top`, `object-bottom`, `object-center`, etc.

---

### 4.2 Extended Typography
**File:** `tests/e2e/tests/extended-typography.spec.ts`

#### Font Style
- `italic`, `not-italic`

#### Font Variant
- `normal-nums`, `ordinal`, `slashed-zero`, `lining-nums`, `oldstyle-nums`, `proportional-nums`, `tabular-nums`, `diagonal-fractions`, `stacked-fractions`

#### Letter Spacing
- `tracking-tighter`, `tracking-tight`, `tracking-normal`, `tracking-wide`, `tracking-wider`, `tracking-widest`

#### Line Height
- `leading-none`, `leading-tight`, `leading-snug`, `leading-normal`, `leading-relaxed`, `leading-loose`

#### Text Overflow
- `truncate`, `text-ellipsis`, `text-clip`

#### Whitespace
- `whitespace-normal`, `whitespace-nowrap`, `whitespace-pre`, `whitespace-pre-line`, `whitespace-pre-wrap`

#### Word Break
- `break-normal`, `break-words`, `break-all`, `break-keep`

#### Hyphens
- `hyphens-none`, `hyphens-manual`, `hyphens-auto`

---

### 4.3 Extended Visual
**File:** `tests/e2e/tests/extended-visual.spec.ts`

#### Background Extended
- `bg-auto`, `bg-cover`, `bg-contain`
- `bg-center`, `bg-top`, `bg-right`, `bg-bottom`, `bg-left`
- `bg-repeat`, `bg-no-repeat`, `bg-repeat-x`, `bg-repeat-y`
- `bg-fixed`, `bg-local`, `bg-scroll`

#### Mix Blend Mode
- `mix-blend-normal`, `mix-blend-multiply`, `mix-blend-screen`, `mix-blend-overlay`, etc.

#### Background Blend Mode
- `bg-blend-normal`, `bg-blend-multiply`, `bg-blend-screen`, etc.

#### Filters
- `blur-none`, `blur-sm`, `blur`, `blur-md`, `blur-lg`, `blur-xl`, `blur-2xl`, `blur-3xl`
- `brightness-*`, `contrast-*`, `saturate-*`, `grayscale`, `sepia`, `invert`

#### Ring (Focus)
- `ring-0`, `ring-1`, `ring-2`, `ring-4`, `ring-8`
- `ring-inset`, `ring-offset-*`

#### Outline
- `outline-none`, `outline`, `outline-dashed`, `outline-dotted`, `outline-double`
- `outline-offset-*`

---

### 4.4 Extended Effects
**File:** `tests/e2e/tests/extended-effects.spec.ts`

#### Transforms
- `transform`, `transform-none`
- `translate-x-*`, `translate-y-*`
- `scale-*`, `scale-x-*`, `scale-y-*`
- `rotate-*`, `skew-x-*`, `skew-y-*`
- `origin-*`

#### Transitions Extended
- Duration: `duration-*` (75ms to 1000ms)
- Easing: `ease-linear`, `ease-in`, `ease-out`, `ease-in-out`
- Delay: `delay-*`

#### Animation
- `animate-none`, `animate-spin`, `animate-ping`, `animate-pulse`, `animate-bounce`

---

### 4.5 Extended Interaction
**File:** `tests/e2e/tests/extended-interaction.spec.ts`

#### User Select
- `select-none`, `select-text`, `select-all`, `select-auto`

#### Pointer Events
- `pointer-events-none`, `pointer-events-auto`

#### Resize
- `resize-none`, `resize`, `resize-x`, `resize-y`

#### Scroll Behavior
- `scroll-auto`, `scroll-smooth`

#### Scroll Snap
- `snap-start`, `snap-end`, `snap-center`, `snap-align-none`
- `snap-none`, `snap-x`, `snap-y`, `snap-both`, `snap-mandatory`, `snap-proximity`

#### Touch Action
- `touch-auto`, `touch-none`, `touch-pan-x`, `touch-pan-y`, `touch-pan-left`, `touch-pan-right`, `touch-pan-up`, `touch-pan-down`, `touch-pinch-zoom`, `touch-manipulation`

#### Will Change
- `will-change-auto`, `will-change-scroll`, `will-change-contents`, `will-change-transform`

---

### 4.6 Extended Content
**File:** `tests/e2e/tests/extended-content.spec.ts`

#### Lists
- `list-none`, `list-disc`, `list-decimal`
- `list-inside`, `list-outside`

#### Tables
- `table-auto`, `table-fixed`
- `border-collapse`, `border-separate`
- `caption-top`, `caption-bottom`

#### Quotes
- `quotes-none`

#### Content
- `content-none`

---

## Test File Summary

| Layer | File | Description |
|-------|------|-------------|
| 1 | `layer-base.spec.ts` | CSS reset and base styles |
| 2 | `layer-themes.spec.ts` | CSS custom properties/tokens |
| 3.1 | `core-layout.spec.ts` | Display, flexbox, grid, positioning |
| 3.2 | `core-spacing.spec.ts` | Padding, margin, sizing |
| 3.3 | `core-typography.spec.ts` | Font size, weight, alignment |
| 3.4 | `core-visual.spec.ts` | Colors, borders, shadows, opacity |
| 3.5 | `core-interaction.spec.ts` | Cursor, transitions |
| 3.6 | `core-responsive.spec.ts` | Breakpoint prefixes |
| 4.1 | `extended-layout.spec.ts` | Extended flex/grid, container queries |
| 4.2 | `extended-typography.spec.ts` | Extended typography utilities |
| 4.3 | `extended-visual.spec.ts` | Backgrounds, filters, blend modes |
| 4.4 | `extended-effects.spec.ts` | Transforms, animations |
| 4.5 | `extended-interaction.spec.ts` | User select, scroll, touch |
| 4.6 | `extended-content.spec.ts` | Lists, tables, content |

**Total: 14 test files**

## Running Tests

```bash
# Run all layers
cd tests/e2e && npm run test:e2e

# Run specific layer
npx playwright test layer-base.spec.ts
npx playwright test layer-themes.spec.ts
npx playwright test core-layout.spec.ts

# Run all core tests
npx playwright test "core-*.spec.ts"

# Run all extended tests
npx playwright test "extended-*.spec.ts"

# Run with UI
npx playwright test --ui
```
