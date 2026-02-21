import { test, expect } from '@playwright/test';
import { expectCSSProperty } from './utils/css-test-helpers';

test.describe('Grid Utilities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Grid Template Columns', () => {
    test('grid-cols-1 should create single column grid', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="grid-cols-1"]', 'grid-template-columns', /repeat\(1, minmax\(0, 1fr\)\)/);
    });

    test('grid-cols-2 should create two column grid', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="grid-cols-2"]', 'grid-template-columns', /repeat\(2, minmax\(0, 1fr\)\)/);
    });

    test('grid-cols-3 should create three column grid', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="grid-cols-3"]', 'grid-template-columns', /repeat\(3, minmax\(0, 1fr\)\)/);
    });

    test('grid-cols-4 should create four column grid', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="grid-cols-4"]', 'grid-template-columns', /repeat\(4, minmax\(0, 1fr\)\)/);
    });

    test('grid-cols-12 should create twelve column grid', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="grid-cols-12"]', 'grid-template-columns', /repeat\(12, minmax\(0, 1fr\)\)/);
    });
  });

  test.describe('Grid Column Span', () => {
    test('col-span-1 should span 1 column', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="col-span-1"]', 'grid-column', 'span 1 / span 1');
    });

    test('col-span-2 should span 2 columns', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="col-span-2"]', 'grid-column', 'span 2 / span 2');
    });

    test('col-span-full should span all columns', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="col-span-full"]', 'grid-column', '1 / -1');
    });
  });

  test.describe('Gap', () => {
    test('gap-0 should have no gap', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="gap-0"]', 'gap', '0px');
    });

    test('gap-1 should have small gap', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="gap-1"]', 'gap', '4px');
    });

    test('gap-4 should have medium gap', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="gap-4"]', 'gap', '16px');
    });

    test('gap-8 should have large gap', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="gap-8"]', 'gap', '32px');
    });
  });
});
