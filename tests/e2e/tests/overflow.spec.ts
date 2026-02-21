import { test } from '@playwright/test';
import { expectCSSProperty } from './utils/css-test-helpers';

test.describe('Overflow Utilities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('overflow-auto should show scrollbars when needed', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="overflow-auto"]', 'overflow', 'auto');
  });

  test('overflow-hidden should clip overflow', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="overflow-hidden"]', 'overflow', 'hidden');
  });

  test('overflow-visible should show overflow', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="overflow-visible"]', 'overflow', 'visible');
  });

  test('overflow-scroll should always show scrollbars', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="overflow-scroll"]', 'overflow', 'scroll');
  });

  test('overflow-x-auto should show horizontal scrollbar when needed', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="overflow-x-auto"]', 'overflow-x', 'auto');
  });

  test('overflow-y-auto should show vertical scrollbar when needed', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="overflow-y-auto"]', 'overflow-y', 'auto');
  });
});
