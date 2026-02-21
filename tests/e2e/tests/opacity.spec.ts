import { test } from '@playwright/test';
import { expectCSSProperty } from './utils/css-test-helpers';

test.describe('Opacity Utilities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('opacity-0 should be fully transparent', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="opacity-0"]', 'opacity', '0');
  });

  test('opacity-25 should be 25% opaque', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="opacity-25"]', 'opacity', '0.25');
  });

  test('opacity-50 should be 50% opaque', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="opacity-50"]', 'opacity', '0.5');
  });

  test('opacity-75 should be 75% opaque', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="opacity-75"]', 'opacity', '0.75');
  });

  test('opacity-100 should be fully opaque', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="opacity-100"]', 'opacity', '1');
  });
});