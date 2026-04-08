# E2E Test Refactoring Plan

## Overview

Refactor all E2E tests to use dynamic component creation pattern via `page.evaluate()`, replacing static test page dependencies with runtime component generation.

## Pattern

```typescript
// OLD: Relies on pre-existing page
await page.goto('/colors');
const bg = await getComputedStyle(page, '[data-testid="bg-primary-500"]', 'background-color');

// NEW: Dynamic component creation
const testId = await createComponent(page, {
  classes: 'bg-primary-500',
  styles: { width: '100px', height: '100px' }
});
const bg = await getComputedStyle(page, `[data-testid="${testId}"]`, 'background-color');
```

## New Utility Function

Create `tests/e2e/tests/utils/component-helpers.ts`:

```typescript
export async function createComponent(
  page: Page,
  options: {
    tag?: string;
    classes?: string;
    styles?: Record<string, string>;
    attributes?: Record<string, string>;
    children?: string;
  }
): Promise<string>
```

## Test Files by Category

### 1. `display.spec.ts` - Display Utilities
Test: `npm run test:e2e -- display.spec.ts`

**Coverage:**
- `block` → `display: block`
- `inline-block` → `display: inline-block`
- `inline` → `display: inline`
- `flex` → `display: flex`
- `inline-flex` → `display: inline-flex`
- `grid` → `display: grid`
- `inline-grid` → `display: inline-grid`
- `hidden` → `display: none`
- `contents` → `display: contents`
- `list-item` → `display: list-item`

### 2. `flexbox.spec.ts` - Flexbox Utilities
Test: `npm run test:e2e -- flexbox.spec.ts`

**Coverage:**
- Direction: `flex-row`, `flex-row-reverse`, `flex-col`, `flex-col-reverse`
- Wrap: `flex-wrap`, `flex-nowrap`, `flex-wrap-reverse`
- Grow/Shrink: `flex-grow`, `flex-grow-0`, `flex-shrink`, `flex-shrink-0`
- Basis: `flex-basis-0`, `flex-basis-auto`, `flex-basis-full`, `flex-basis-1/2`, `flex-basis-1/3`, etc.
- Justify: `justify-start`, `justify-end`, `justify-center`, `justify-between`, `justify-around`, `justify-evenly`
- Items: `items-start`, `items-end`, `items-center`, `items-baseline`, `items-stretch`
- Self: `self-auto`, `self-start`, `self-end`, `self-center`, `self-baseline`, `self-stretch`
- Content: `content-start`, `content-end`, `content-center`, `content-between`, `content-around`
- Order: `order-1` through `order-12`, `order-first`, `order-last`, `order-none`

### 3. `grid.spec.ts` - Grid Utilities
Test: `npm run test:e2e -- grid.spec.ts`

**Coverage:**
- Columns: `grid-cols-1` through `grid-cols-12`
- Rows: `grid-rows-1` through `grid-rows-6`
- Column span: `col-span-1` through `col-span-12`, `col-span-full`
- Row span: `row-span-1` through `row-span-6`
- Start/End: `col-start-1` through `col-start-13`, `col-end-1` through `col-end-13`
- Row start/end: `row-start-1` through `row-start-7`, `row-end-1` through `row-end-7`

### 4. `spacing.spec.ts` - Spacing Utilities
Test: `npm run test:e2e -- spacing.spec.ts`

**Coverage:**
- Margin all: `m-0` through `m-96`
- Margin sides: `mt-*`, `mr-*`, `mb-*`, `ml-*`, `mx-*`, `my-*`
- Padding all: `p-0` through `p-96`
- Padding sides: `pt-*`, `pr-*`, `pb-*`, `pl-*`, `px-*`, `py-*`
- Logical margins: `ms-*` (margin-start), `me-*` (margin-end)
- Logical padding: `ps-*` (padding-start), `pe-*` (padding-end)
- Gap: `gap-*`, `gap-x-*`, `gap-y-*`
- Auto margins: `mx-auto`, `my-auto`, `m-auto`

**Note:** Arbitrary values (`m-[20px]`) are not tested as the `arbitrary` feature is disabled in apex.config.js

### 5. `sizing.spec.ts` - Sizing Utilities
Test: `npm run test:e2e -- sizing.spec.ts`

**Coverage:**
- Width: `w-0` through `w-96`, `w-auto`, `w-full`, `w-screen`, `w-min`, `w-max`, `w-fit`
- Height: `h-0` through `h-96`, `h-auto`, `h-full`, `h-screen`, `h-min`, `h-max`, `h-fit`
- Min width: `min-w-0`, `min-w-full`

**Note:** Arbitrary values (`w-[100px]`) are not tested as the `arbitrary` feature is disabled in apex.config.js
- Max width: `max-w-0` through `max-w-96`, `max-w-none`, `max-w-screen-*`
- Min/Max height: same patterns

### 6. `typography.spec.ts` - Typography Utilities
Test: `npm run test:e2e -- typography.spec.ts`

**Coverage:**
- Font sizes: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl` through `text-9xl`
- Font weights: `font-thin`, `font-extralight`, `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`, `font-black`
- Line heights: `leading-none`, `leading-tight`, `leading-snug`, `leading-normal`, `leading-relaxed`, `leading-loose`
- Letter spacing: `tracking-tighter`, `tracking-tight`, `tracking-normal`, `tracking-wide`, `tracking-wider`, `tracking-widest`
- Text align: `text-left`, `text-center`, `text-right`, `text-justify`, `text-start`, `text-end`
- Text transform: `uppercase`, `lowercase`, `capitalize`, `normal-case`

**Note:** Arbitrary values (`text-[24px]`) are not tested as the `arbitrary` feature is disabled in apex.config.js

### 7. `colors.spec.ts` - Color Utilities
Test: `npm run test:e2e -- colors.spec.ts`

**Coverage:**
- Background colors: `bg-primary-50` through `bg-primary-950`, `bg-gray-*`, `bg-success-*`, `bg-warning-*`, `bg-danger-*`
- Text colors: `text-primary-*`, `text-gray-*`, `text-white`, `text-black`
- Border colors: `border-primary-*`, `border-gray-*`
- OKLCH color format validation
- Opacity modifiers: `bg-primary-500/50`

**Note:** Color modifiers (lighten/darken) are not tested as `colorModifiers` is disabled in apex.config.js

### 8. `borders.spec.ts` - Border Utilities
Test: `npm run test:e2e -- borders.spec.ts`

**Coverage:**
- Width: `border`, `border-0`, `border-2`, `border-4`, `border-8`
- Style: `border-solid`, `border-dashed`, `border-dotted`, `border-double`, `border-hidden`, `border-none`
- Color: `border-primary-*`, `border-gray-*`
- Radius: `rounded-none`, `rounded-sm`, `rounded`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full`
- Side radii: `rounded-t-*`, `rounded-r-*`, `rounded-b-*`, `rounded-l-*`, `rounded-tl-*`, `rounded-tr-*`, `rounded-br-*`, `rounded-bl-*`

### 9. `shadows.spec.ts` - Shadow Utilities
Test: `npm run test:e2e -- shadows.spec.ts`

**Coverage:**
- `shadow-none`
- `shadow-sm`
- `shadow`
- `shadow-md`
- `shadow-lg`
- `shadow-xl`
- `shadow-2xl`
- `shadow-inner`

### 10. `opacity.spec.ts` - Opacity Utilities
Test: `npm run test:e2e -- opacity.spec.ts`

**Coverage:**
- `opacity-0` through `opacity-100` (increments of 5)

### 11. `position.spec.ts` - Position Utilities
Test: `npm run test:e2e -- position.spec.ts`

**Coverage:**
- Position: `static`, `relative`, `absolute`, `fixed`, `sticky`
- Inset: `inset-0`, `inset-x-0`, `inset-y-0`
- Sides: `top-0`, `right-0`, `bottom-0`, `left-0`
- Z-index: `z-0`, `z-10`, `z-20`, `z-30`, `z-40`, `z-50`, `z-auto`

### 12. `overflow.spec.ts` - Overflow Utilities
Test: `npm run test:e2e -- overflow.spec.ts`

**Coverage:**
- `overflow-auto`, `overflow-hidden`, `overflow-visible`, `overflow-scroll`
- `overflow-x-*`, `overflow-y-*`

### 13. `visibility.spec.ts` - Visibility Utilities
Test: `npm run test:e2e -- visibility.spec.ts`

**Coverage:**
- `visible`
- `invisible` (visibility: hidden)
- `collapse` (visibility: collapse)

### 14. `cursor.spec.ts` - Cursor Utilities
Test: `npm run test:e2e -- cursor.spec.ts`

**Coverage:**
- `cursor-auto`, `cursor-default`, `cursor-pointer`, `cursor-wait`, `cursor-text`, `cursor-move`, `cursor-help`, `cursor-not-allowed`, `cursor-none`

### 15. `dark-mode.spec.ts` - Dark Mode Utilities
Test: `npm run test:e2e -- dark-mode.spec.ts`

**Coverage:**
- `dark:bg-*`
- `dark:text-*`
- `dark:border-*`
- Automatic dark mode detection
- Manual dark mode toggle

### 16. `z-index.spec.ts` - Z-Index Utilities
Test: `npm run test:e2e -- z-index.spec.ts`

**Coverage:**
- `z-0`, `z-10`, `z-20`, `z-30`, `z-40`, `z-50`, `z-auto`

## Browser Coverage

- **Primary**: Chromium (Chrome/Edge)
- **Secondary**: Firefox
- **Skip**: WebKit (Safari) - focus on Linux-compatible browsers

## Implementation Order

1. Create `utils/component-helpers.ts` with `createComponent()` function
2. Refactor `display.spec.ts`
3. Refactor `spacing.spec.ts` (high priority - most used)
4. Refactor `flexbox.spec.ts`
5. Refactor `colors.spec.ts`
6. Refactor `typography.spec.ts`
7. Refactor remaining files
8. Delete old test files that are replaced
9. Update `playwright.config.ts` to remove unnecessary projects
10. Update documentation

## Commands

```bash
# Run all E2E tests
cd tests/e2e && npm run test:e2e

# Run specific category
npx playwright test spacing.spec.ts

# Run with UI
npx playwright test --ui

# Debug specific test
npx playwright test spacing.spec.ts --debug
```

## Success Criteria

- All tests create components dynamically via `page.evaluate()`
- No tests depend on pre-existing HTML pages
- Tests run in both Chromium and Firefox
- Each utility class has at least one test
- Tests are organized by category
- Documentation is updated
