# ApexCSS End-to-End Testing Strategy

## Overview

This document outlines the comprehensive end-to-end testing strategy for ApexCSS, designed to systematically validate CSS custom properties, design tokens, and component rendering across all browsers and viewport sizes.

## Testing Philosophy

Our E2E testing strategy follows these core principles:

1. **CSS-First Testing**: Tests validate computed styles, not just DOM structure
2. **Token-Driven**: All design decisions are tested against CSS custom properties
3. **Cross-Browser**: Consistent behavior across Chromium, Firefox, and WebKit
4. **Responsive-First**: Mobile-first approach matching the framework's philosophy
5. **Visual Regression**: Automated screenshot comparison to catch unintended changes

## Test Categories

### 1. CSS Custom Properties Tests (`css-custom-properties.spec.ts`)

Validates that all CSS custom properties (design tokens) are correctly defined and accessible.

**Coverage:**
- Core token categories (spacing, colors, typography, borders, shadows)
- OKLCH color format validation
- Token value validation (CSS length units)
- Dark mode tokens
- Custom property inheritance

**Key Assertions:**
```typescript
expect(tokens).toHaveProperty('--color-primary-500');
expect(primary500).toMatch(/^oklch\([\d.]+\s+[\d.]+\s+[\d.]+\)$/);
```

### 2. Design Tokens Tests (`design-tokens.spec.ts`)

Validates design token values against expected specifications.

**Coverage:**
- Spacing scale (0-96)
- Color palette (primary, gray, semantic)
- Typography tokens (font sizes, families, weights)
- Border radius tokens
- Shadow tokens
- Breakpoint tokens

**Key Assertions:**
```typescript
expect(value).toBe('16px'); // p-4 = 1rem = 16px
expect(sans).toContain('system-ui');
```

### 3. Responsive Design Tests (`responsive-design.spec.ts`)

Validates responsive behavior across all breakpoints.

**Coverage:**
- Breakpoint media queries (sm, md, lg, xl, xxl, xxxl)
- Container queries
- Responsive utilities (hidden, spacing, grid)
- Viewport-specific typography
- Layout adaptations (flex direction, container width)
- Fluid typography

**Breakpoints Tested:**
| Name | Width | Description |
|------|-------|-------------|
| sm | 320px | Small mobile |
| md | 768px | Tablet |
| lg | 1024px | Small desktop |
| xl | 1280px | Desktop |
| xxl | 2560px | 2K display |
| xxxl | 3840px | 4K display |

### 4. Cross-Browser Tests (`cross-browser.spec.ts`)

Validates consistent behavior across different browsers.

**Coverage:**
- CSS custom properties support
- OKLCH color rendering
- Container queries support
- Logical properties
- CSS Grid and Flexbox
- CSS transforms and filters
- Font rendering
- RTL support

**Browsers Tested:**
- Chromium (Chrome/Edge)
- Firefox
- WebKit (Safari)
- Mobile Chrome
- Mobile Safari

### Mobile Browser Testing Considerations

When testing on mobile browsers (Mobile Chrome, Mobile Safari), be aware of these limitations:

**Viewport Sizing:**
- Mobile browsers have minimum viewport constraints (typically 320px)
- Setting viewport below minimum (e.g., `page.setViewportSize({ width: 280, height: 480 })`) may not work as expected
- Use `test.skip()` for tests that require viewport sizes below mobile minimums

**Device Pixel Ratio (DPR):**
- Mobile emulation uses different DPR values than desktop
- Font size and spacing calculations may differ slightly
- Use approximate assertions or browser-specific expected values

**Recommended Pattern for Mobile-Safe Tests:**
```typescript
// Helper to detect mobile browsers
const isMobileBrowser = (projectName: string) =>
  projectName === 'Mobile Chrome' || projectName === 'Mobile Safari';

// Skip viewport-dependent tests on mobile
test('base class applies below breakpoint', async ({ page }, testInfo) => {
  test.skip(isMobileBrowser(testInfo.project.name),
    'Viewport sizing differs on mobile emulation');
  // Test logic that requires precise viewport control
});
```

**Alternative Testing Approaches:**
1. **Test at known breakpoints** rather than between breakpoints
2. **Use larger viewports** (640px+) that work consistently across all browsers
3. **Split multi-viewport tests** into separate tests for each breakpoint
4. **Test responsive activation** (e.g., `md:block` at 768px+) rather than deactivation

### 5. Component Rendering Tests (`component-rendering.spec.ts`)

Validates consistent rendering of UI components.

**Coverage:**
- Buttons (primary, hover, disabled states)
- Cards (with shadows, borders)
- Forms (inputs, selects)
- Typography (headings hierarchy, line height)
- Layout (flex, grid containers)
- Navigation (navbar)
- Badges
- Alerts
- Tables
- Modals
- Dimension consistency

### 6. Visual Regression Tests (`visual-regression.spec.ts`)

Automated screenshot comparison to detect visual changes.

**Coverage:**
- Homepage screenshots
- Color palette rendering
- Typography specimens
- Component states
- Dark mode variants
- Responsive layouts

**Configuration:**
- Threshold: 0.1 (10% difference allowed)
- Max diff pixels: 100
- Animations: disabled for stability

## Test Helpers

### CSS Test Helpers (`utils/css-test-helpers.ts`)

```typescript
// Get computed style
getComputedStyle(page, selector, property)

// Get CSS custom property
getCSSCustomProperty(page, propertyName, elementSelector)

// Get all CSS custom properties
getAllCSSCustomProperties(page, elementSelector)

// Test at specific viewport
testAtViewport(page, width, height, testFn)

// Expect helpers
expectCSSProperty(page, selector, property, expectedValue)
expectCSSProperties(page, selector, properties)
expectColor(page, selector, property, expectedRgb)
expectDimensions(page, selector, expected)
expectVisible(page, selector)
expectHidden(page, selector)
```

### Visual Test Helpers (`utils/visual-test-helpers.ts`)

```typescript
// Screenshot expectations
expectPageScreenshot(page, name, options)
expectElementScreenshot(page, selector, name)
expectResponsiveScreenshots(page, name, viewports)
expectDarkModeScreenshot(page, name, options)

// Wait for visual stability
waitForVisualStability(page)
```

## Running Tests

### Run All Tests
```bash
cd tests/e2e
npm install
npm run test:e2e
```

### Run Specific Test File
```bash
npx playwright test design-tokens.spec.ts
```

### Run Specific Project
```bash
npx playwright test --project=design-tokens
npx playwright test --project=cross-browser-chromium
```

### Run with UI
```bash
npm run test:e2e:ui
```

### Update Visual Baselines
```bash
npx playwright test visual-regression.spec.ts --update-snapshots
```

## CI/CD Integration

The E2E tests are integrated into the CI/CD pipeline via the `publish-npm.yml` workflow:

```yaml
- name: Run tests
  run: npm run test:unit

- name: Build package
  run: npm run build
```

For comprehensive E2E testing in CI, add to your workflow:

```yaml
- name: Install Playwright
  run: npm run test:e2e:install

- name: Run E2E tests
  run: npm run test:e2e
```

## Test Data Attributes

Tests use `data-testid` attributes to target elements:

```html
<button data-testid="btn-primary">Primary</button>
<div data-testid="card-basic">Card</div>
<input data-testid="input-field" />
```

## Best Practices

### 1. Write CSS-First Assertions
```typescript
// Good
const display = await getComputedStyle(page, '.element', 'display');
expect(display).toBe('flex');

// Avoid
await expect(page.locator('.element')).toBeVisible();
```

### 2. Test Responsive Behavior
```typescript
await testAtViewport(page, 375, 667, async () => {
  const padding = await getComputedStyle(page, '.element', 'padding');
  expect(padding).toBe('8px');
});
```

### 3. Use Token Values
```typescript
const primaryColor = await getCSSCustomProperty(page, '--color-primary-500');
expect(primaryColor).toMatch(/oklch\(.+\)/);
```

### 4. Test Component States
```typescript
// Test hover state
await page.hover('[data-testid="btn-primary"]');
await waitForTransition(page, '[data-testid="btn-primary"]');

// Test dark mode
await page.evaluate(() => {
  document.documentElement.classList.add('dark');
});
```

## Debugging Tests

### View Test Report
```bash
npx playwright show-report
```

### Debug Specific Test
```bash
npx playwright test design-tokens.spec.ts --debug
```

### View Screenshots
Screenshots are saved in:
- `screenshots/` - Baseline screenshots
- `test-results/` - Failed test screenshots

## Maintenance

### Updating Tests

When design tokens change:
1. Update expected values in test files
2. Run tests to verify
3. Update visual baselines if needed

### Adding New Tests

1. Create test file in `tests/`
2. Add project to `playwright.config.ts` if needed
3. Follow existing patterns and naming conventions
4. Use test helpers for consistency

## Metrics

Current test coverage:
- **Total Test Files**: 20+
- **Test Projects**: 5 browsers (Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari)
- **Browsers**: Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari
- **Viewports**: 6 breakpoints + mobile viewports

## Known Testing Limitations

### Responsive Tests on Mobile
Some responsive tests are skipped on Mobile Chrome and Mobile Safari due to:
- Viewport sizing constraints (minimum 320px)
- Device Pixel Ratio differences affecting computed values
- Browser-specific viewport behavior in emulation mode

These tests remain valid on desktop browsers and should still be run as part of the full test suite.

## Future Enhancements

1. **Performance Testing**: Add CSS performance metrics
2. **Accessibility Testing**: Automated a11y checks
3. **Animation Testing**: Validate transition timings
4. **Theme Testing**: Comprehensive dark mode coverage
5. **Documentation**: Auto-generate test documentation

## Troubleshooting

### Common Issues

**Flaky Tests:**
- Increase `waitForTimeout` for animations
- Use `waitForVisualStability` before screenshots
- Add retry logic for network-dependent tests

**Visual Regression Failures:**
- Check for font loading issues
- Verify consistent viewport sizes
- Update baselines after intentional changes

**Cross-Browser Differences:**
- Use pixel tolerance for color values
- Account for different default styles
- Test feature support before assertions

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [CSS Custom Properties Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [OKLCH Color Space](https://oklch.com/)
- [ApexCSS Documentation](../docs/LLMs.txt)

