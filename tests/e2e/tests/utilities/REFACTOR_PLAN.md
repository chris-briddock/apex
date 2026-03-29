# Core and Extended Utilities Test Refactor Plan

## Current Test Files Analysis

### Files to move to `utilities/core/`:

| File | Category | Tests Count | Status |
|------|----------|-------------|--------|
| `display.spec.ts` | Layout - Display | 9 | Uses page.goto('/') - needs refactor |
| `flexbox.spec.ts` | Layout - Flexbox | ~40 | Already uses dynamic components |
| `grid.spec.ts` | Layout - Grid | ~10 | Uses page.goto('/') - needs refactor |
| `spacing.spec.ts` | Spacing | ~30 | Already uses dynamic components |
| `sizing.spec.ts` | Spacing - Sizing | ~10 | Uses page.goto('/') - needs refactor |
| `borders.spec.ts` | Visual - Borders | ~20 | Uses page.goto('/') - needs refactor |
| `typography.spec.ts` | Typography | ~30 | Uses page.goto('/') - needs refactor |
| `position.spec.ts` | Layout - Positioning | ~5 | Uses page.goto('/') - needs refactor |
| `visibility.spec.ts` | Layout - Visibility | ~3 | Uses page.goto('/') - needs refactor |
| `overflow.spec.ts` | Layout - Overflow | ~5 | Uses page.goto('/') - needs refactor |
| `shadows.spec.ts` | Visual - Shadows | ~5 | Uses page.goto('/') - needs refactor |
| `opacity.spec.ts` | Visual - Opacity | ~5 | Uses page.goto('/') - needs refactor |
| `z-index.spec.ts` | Layout - Z-Index | ~5 | Uses page.goto('/') - needs refactor |
| `cursor.spec.ts` | Interaction - Cursor | ~3 | Uses page.goto('/') - needs refactor |
| `colors.spec.ts` | Visual - Colors | ~30 | Uses page.goto('/') - needs refactor |

### Files to move to `utilities/extended/`:

| File | Category | Tests Count | Notes |
|------|----------|-------------|-------|
| `arbitrary.spec.ts` | Advanced - Arbitrary Values | ~20 | Extended feature |
| `opacity-modifiers.spec.ts` | Advanced - Modifiers | ~15 | Extended feature |

### Files to keep in root (cross-cutting concerns):

| File | Reason |
|------|--------|
| `dark-mode.spec.ts` | Cross-cutting feature |
| `responsive-design.spec.ts` | Cross-cutting feature |
| `cross-browser.spec.ts` | Cross-browser testing |
| `component-rendering.spec.ts` | Component integration tests |
| `visual-regression.spec.ts` | Visual testing |

## Target Structure

```
tests/e2e/tests/utilities/
├── core/
│   ├── layout/
│   │   ├── display.spec.ts
│   │   ├── flexbox.spec.ts
│   │   ├── grid.spec.ts
│   │   ├── position.spec.ts
│   │   ├── visibility.spec.ts
│   │   ├── overflow.spec.ts
│   │   └── z-index.spec.ts
│   ├── spacing/
│   │   ├── spacing.spec.ts
│   │   └── sizing.spec.ts
│   ├── typography/
│   │   └── typography.spec.ts
│   ├── visual/
│   │   ├── borders.spec.ts
│   │   ├── shadows.spec.ts
│   │   ├── opacity.spec.ts
│   │   └── colors.spec.ts
│   └── interaction/
│       └── cursor.spec.ts
└── extended/
    ├── layout/
    │   └── (grid-extended, flex-extended, etc.)
    ├── spacing/
    │   └── (space-between, divide, etc.)
    └── advanced/
        ├── arbitrary.spec.ts
        └── opacity-modifiers.spec.ts
```

## Refactoring Pattern

All tests should follow this pattern:

```typescript
import { test } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../utils/component-helpers';
import { getComputedStyle } from '../../utils/css-test-helpers';

test.describe('Category', () => {
  test.beforeEach(async ({ page }) => {
    // Inject utilities.css for isolated testing
    await page.addStyleTag({ path: '../../dist/utilities.css' });
    // Also inject themes.css if needed for CSS variables
    await page.addStyleTag({ path: '../../dist/themes.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  // Tests using createComponent() for dynamic element creation
});
```

## Migration Steps

1. Create folder structure
2. Move existing tests
3. Update import paths
4. Refactor tests to use dynamic CSS injection
5. Remove old files
6. Run tests to verify
