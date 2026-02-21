import { test } from '@playwright/test';
import { expectCSSProperty } from './utils/css-test-helpers';

test.describe('Cursor Utilities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('cursor-auto should have auto cursor', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="cursor-auto"]', 'cursor', 'auto');
  });

  test('cursor-default should have default cursor', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="cursor-default"]', 'cursor', 'default');
  });

  test('cursor-pointer should have pointer cursor', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="cursor-pointer"]', 'cursor', 'pointer');
  });

  test('cursor-wait should have wait cursor', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="cursor-wait"]', 'cursor', 'wait');
  });

  test('cursor-text should have text cursor', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="cursor-text"]', 'cursor', 'text');
  });

  test('cursor-move should have move cursor', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="cursor-move"]', 'cursor', 'move');
  });

  test('cursor-not-allowed should have not-allowed cursor', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="cursor-not-allowed"]', 'cursor', 'not-allowed');
  });
});
