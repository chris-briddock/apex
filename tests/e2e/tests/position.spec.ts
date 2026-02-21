import { test, expect } from '@playwright/test';
import { expectCSSProperty } from './utils/css-test-helpers';

test.describe('Position Utilities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('static position utility', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="position-static"]', 'position', 'static');
  });

  test('relative position utility', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="position-relative"]', 'position', 'relative');
  });

  test('absolute position utility', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="position-absolute"]', 'position', 'absolute');
  });

  test('fixed position utility', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="position-fixed"]', 'position', 'fixed');
  });

  test('sticky position utility', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="position-sticky"]', 'position', 'sticky');
  });
});
