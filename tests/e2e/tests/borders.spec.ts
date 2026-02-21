import { test } from '@playwright/test';
import { expectCSSProperty, expectBorder } from './utils/css-test-helpers';

test.describe('Border Utilities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Border Radius', () => {
    test('rounded-none should have no border radius', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="rounded-none"]', 'border-radius', '0px');
    });

    test('rounded-sm should have small border radius', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="rounded-sm"]', 'border-radius', '2px');
    });

    test('rounded should have default border radius', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="rounded"]', 'border-radius', '4px');
    });

    test('rounded-md should have medium border radius', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="rounded-md"]', 'border-radius', '6px');
    });

    test('rounded-lg should have large border radius', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="rounded-lg"]', 'border-radius', '8px');
    });

    test('rounded-xl should have extra large border radius', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="rounded-xl"]', 'border-radius', '12px');
    });

    test('rounded-2xl should have 2x large border radius', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="rounded-2xl"]', 'border-radius', '16px');
    });

    test('rounded-full should have full border radius', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="rounded-full"]', 'border-radius', '9999px');
    });
  });

  test.describe('Border Width', () => {
    test('border should have 1px border', async ({ page }) => {
      await expectBorder(page, '[data-testid="border"]', {
        'border-top-width': '1px',
        'border-right-width': '1px',
        'border-bottom-width': '1px',
        'border-left-width': '1px',
      });
    });

    test('border-0 should have no border', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="border-0"]', 'border-width', '0px');
    });

    test('border-2 should have 2px border', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="border-2"]', 'border-width', '2px');
    });

    test('border-4 should have 4px border', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="border-4"]', 'border-width', '4px');
    });

    test('border-t should have top border only', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="border-t"]', 'border-top-width', '1px');
    });

    test('border-r should have right border only', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="border-r"]', 'border-right-width', '1px');
    });

    test('border-b should have bottom border only', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="border-b"]', 'border-bottom-width', '1px');
    });

    test('border-l should have left border only', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="border-l"]', 'border-left-width', '1px');
    });
  });

  test.describe('Border Style', () => {
    test('border-solid should have solid border', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="border-solid"]', 'border-style', 'solid');
    });

    test('border-dashed should have dashed border', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="border-dashed"]', 'border-style', 'dashed');
    });

    test('border-dotted should have dotted border', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="border-dotted"]', 'border-style', 'dotted');
    });

    test('border-double should have double border', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="border-double"]', 'border-style', 'double');
    });

    test('border-none should have no border style', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="border-none"]', 'border-style', 'none');
    });
  });
});
