import { test } from '@playwright/test';
import { expectCSSProperty } from './utils/css-test-helpers';

test.describe('Visibility Utilities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('visible should be visible', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="visible"]', 'visibility', 'visible');
  });

  test('invisible should be hidden', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="invisible"]', 'visibility', 'hidden');
  });
});
