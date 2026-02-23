# ApexCSS E2E Tests

End-to-end testing suite for the ApexCSS utility-first CSS framework using React, Vite, TypeScript, and Playwright.

**New:** Visual regression testing support with Playwright's screenshot comparison.

## Overview

This test suite ensures that every CSS utility class in the ApexCSS framework is correctly applied and renders the expected styles. The tests use Playwright to run real browsers and verify computed CSS properties.

### Testing Types

1. **CSS Property Testing** - Verifies computed CSS values match expected outputs
2. **Visual Regression Testing** - Compares screenshots to detect visual changes and bugs

## Project Structure

``` plaintext
tests/e2e/
├── src/
│   ├── components/
│   │   └── CssTestSuite.tsx    # Test component rendering all utility classes
│   ├── App.tsx                 # Main app component
│   ├── App.css                 # Styles for test presentation
│   └── main.tsx                # Entry point
├── tests/
│   ├── utils/
│   │   ├── css-test-helpers.ts    # Helper functions for CSS property testing
│   │   └── visual-test-helpers.ts # Helper functions for visual regression testing
│   ├── display.spec.ts         # Display utility tests
│   ├── position.spec.ts        # Position utility tests
│   ├── spacing.spec.ts         # Margin and padding tests
│   ├── sizing.spec.ts          # Width and height tests
│   ├── flexbox.spec.ts         # Flexbox utility tests
│   ├── grid.spec.ts            # Grid utility tests
│   ├── typography.spec.ts      # Font and text tests
│   ├── colors.spec.ts          # Background and text color tests
│   ├── borders.spec.ts         # Border and radius tests
│   ├── shadows.spec.ts         # Box shadow tests
│   ├── opacity.spec.ts         # Opacity tests
│   ├── z-index.spec.ts         # Z-index tests
│   ├── overflow.spec.ts        # Overflow tests
│   ├── visibility.spec.ts      # Visibility tests
│   └── cursor.spec.ts          # Cursor tests
├── playwright.config.ts        # Playwright configuration
├── tsconfig.e2e.json           # TypeScript config for tests
└── package.json                # Dependencies and scripts
```

## Installation

The e2e project was created with:

```bash
npm create vite@latest . -- --template react-ts
npm install -D @playwright/test
npx playwright install chromium
```

## Available Scripts

| Command | Description |
|---------|-------------|

| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build the test app for production |
| `npm run test:e2e` | Run all e2e tests in headless mode |
| `npm run test:e2e:ui` | Run tests with interactive UI mode |
| `npm run test:e2e:debug` | Run tests with debugger attached |
| `npm run test:e2e:headed` | Run tests in headed browsers |
| `npm run test:e2e:report` | Show HTML test report |
| `npm run test:visual` | Run visual regression tests only |
| `npm run test:visual:update` | Update visual baseline screenshots |

## Test Coverage

### Display Utilities

- `block`, `inline`, `inline-block`, `flex`, `inline-flex`, `grid`, `inline-grid`, `hidden`

### Position Utilities

- `static`, `relative`, `absolute`, `fixed`, `sticky`

### Spacing Utilities

- Margin: `m-0` through `m-96`, directional margins (`mt`, `mr`, `mb`, `ml`, `mx`, `my`)
- Padding: `p-0` through `p-96`, directional padding (`pt`, `pr`, `pb`, `pl`, `px`, `py`)

### Sizing Utilities

- Width: `w-0`, `w-full`, `w-screen`, fractions (`w-1/2`, `w-1/4`, etc.)
- Height: `h-0`, `h-full`, `h-screen`
- Min/Max width and height utilities

### Flexbox Utilities

- Direction: `flex-row`, `flex-row-reverse`, `flex-col`, `flex-col-reverse`
- Wrap: `flex-wrap`, `flex-nowrap`, `flex-wrap-reverse`
- Justify: `justify-start`, `justify-center`, `justify-end`, `justify-between`, `justify-around`, `justify-evenly`
- Align items: `items-start`, `items-center`, `items-end`, `items-stretch`

### Grid Utilities

- Columns: `grid-cols-1` through `grid-cols-12`
- Column span: `col-span-1`, `col-span-2`, `col-span-full`
- Gap: `gap-0`, `gap-1`, `gap-4`, `gap-8`

### Typography Utilities

- Font size: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, etc.
- Font weight: `font-thin`, `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-black`
- Text alignment: `text-left`, `text-center`, `text-right`, `text-justify`
- Text transform: `uppercase`, `lowercase`, `capitalize`, `normal-case`
- Line height: `leading-none`, `leading-tight`, `leading-normal`, `leading-relaxed`, `leading-loose`
- Letter spacing: `tracking-tighter`, `tracking-tight`, `tracking-normal`, `tracking-wide`, `tracking-wider`, `tracking-widest`

### Color Utilities

- Background colors: `bg-primary-50` through `bg-primary-950`, `bg-gray-100` through `bg-gray-900`, `bg-success`, `bg-warning`, `bg-danger`, `bg-info`
- Text colors: `text-primary`, `text-gray-500`, `text-white`, `text-black`

### Border Utilities

- Border radius: `rounded-none`, `rounded-sm`, `rounded`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-full`
- Border width: `border`, `border-0`, `border-2`, `border-4`, directional borders (`border-t`, `border-r`, `border-b`, `border-l`)
- Border style: `border-solid`, `border-dashed`, `border-dotted`, `border-double`, `border-none`

### Shadow Utilities

- `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`, `shadow-inner`, `shadow-none`

### Opacity Utilities

- `opacity-0`, `opacity-25`, `opacity-50`, `opacity-75`, `opacity-100`

### Z-Index Utilities

- `z-0`, `z-10`, `z-20`, `z-30`, `z-40`, `z-50`, `z-auto`

### Overflow Utilities

- `overflow-auto`, `overflow-hidden`, `overflow-visible`, `overflow-scroll`, `overflow-x-auto`, `overflow-y-auto`

### Visibility Utilities

- `visible`, `invisible`

### Cursor Utilities

- `cursor-auto`, `cursor-default`, `cursor-pointer`, `cursor-wait`, `cursor-text`, `cursor-move`, `cursor-not-allowed`

## Test Helpers

The `css-test-helpers.ts` file provides utility functions for testing CSS:

```typescript
// Get computed style property
await getComputedStyle(page, selector, property);

// Assert a CSS property has expected value
await expectCSSProperty(page, selector, property, expectedValue);

// Assert multiple CSS properties
await expectCSSProperties(page, selector, {
  'margin-top': '16px',
  'margin-bottom': '16px'
});

// Test flexbox properties
await expectFlexProperties(page, selector, {
  'flex-direction': 'row',
  'justify-content': 'center'
});

// Test typography
await expectTypography(page, selector, {
  'font-size': '16px',
  'font-weight': '700'
});
```

## Writing New Tests

To add tests for new CSS utilities:

1. Add the test element to `src/components/CssTestSuite.tsx`:

  ```tsx
  <div data-testid="my-new-class" className="my-new-class">My New Class</div>
  ```

2. Create a new test file in `tests/`:

```typescript
import { test } from '@playwright/test';
import { expectCSSProperty } from './utils/css-test-helpers';

test.describe('My New Utilities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('my-new-class should apply correct style', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="my-new-class"]', 'property-name', 'expected-value');
  });
});
```

## Browser Support

Tests run on:

- Chromium (Chrome/Edge)
- Firefox
- WebKit (Safari)
- Mobile Chrome (Pixel 5)
- Mobile Safari (iPhone 12)

## CI/CD Integration

The Playwright configuration supports CI environments with:

- Automatic retries on failure (2 retries in CI)
- Parallel execution (disabled in CI)
- HTML and trace reports
- Screenshot on failure

## Troubleshooting

### Tests fail due to CSS not loading

Make sure the ApexCSS framework is built:

```bash
cd ../..
npm run build
cd tests/e2e
npm run test:e2e
```

## Visual Regression Testing

Visual regression tests capture screenshots and compare them against baseline images to detect unintended visual changes.

### Running Visual Tests

```bash
# Run all visual regression tests
npm run test:e2e -- --project=visual-regression

# Run visual tests and update baselines
npm run test:e2e -- --project=visual-regression --update-snapshots

# Run specific visual test
npm run test:e2e -- visual-regression.spec.ts
```

### Visual Test Coverage

- **Homepage** - Full page screenshots in light/dark modes
- **Colors Page** - Color palette, swatches, gradients
- **Typography Page** - Font rendering, heading hierarchy
- **Spacing Page** - Spacing scale consistency
- **Flexbox Page** - Layout examples, responsive behavior
- **Grid Page** - Grid layouts, responsive behavior
- **Borders Page** - Border styles and radius
- **Shadows Page** - Shadow variations in light/dark modes
- **Dark Mode** - Theme toggle, persistence, consistency
- **Accessibility** - High contrast, reduced motion modes
- **Cross-browser** - Rendering consistency

### Visual Test Helpers

The `visual-test-helpers.ts` file provides utilities for visual testing:

```typescript
// Take full page screenshot
await expectPageScreenshot(page, 'homepage');

// Take element-specific screenshot
await expectElementScreenshot(page, '[data-testid="colors"]', 'color-palette');

// Test responsive layouts
await expectResponsiveScreenshots(page, 'homepage', ['mobile', 'tablet', 'desktop']);

// Test dark mode
await expectDarkModeScreenshot(page, 'colors-page');

// Wait for visual stability
await waitForVisualStability(page);
```

### Baseline Screenshots

- Baseline screenshots are stored in `screenshots/` directory
- Only intentional baselines should be committed to version control
- Generated diffs help identify visual changes
- Update baselines with `--update-snapshots` flag

### Visual Regression Best Practices

1. **Wait for Stability** - Always wait for fonts, images, and animations before capturing
2. **Consistent Viewport** - Use defined viewport sizes for reproducible results
3. **Mask Dynamic Content** - Hide timestamps, random content, or loading states
4. **Test Key Pages** - Focus on high-traffic or critical UI components
5. **Cross-browser** - Test on multiple browsers for consistency

### Configuration

Visual testing settings in [`playwright.config.ts`](playwright.config.ts):

```typescript
expect: {
  toHaveScreenshot: {
    threshold: 0.1,          // 10% tolerance
    maxDiffPixels: 100,      // Max 100 pixel difference
    maxDiffPixelRatio: 0.2,  // Per-pixel tolerance
    animations: 'disabled',  // Disable animations for consistency
  },
},
```

### Browser not found

Install Playwright browsers:

```bash
npx playwright install
```

### Port already in use

Change the port in `playwright.config.ts`:

```typescript

webServer: {
  command: 'npm run dev',
  url: 'http://localhost:5174', // Change port here
  reuseExistingServer: !process.env.CI,
},
