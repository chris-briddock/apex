import { test, expect } from '@playwright/test';
import { expectCSSProperty } from './utils/css-test-helpers';

test.describe('Display Utilities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('block display utility', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="display-block"]', 'display', 'block');
  });

  test('inline display utility', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="display-inline"]', 'display', 'inline');
  });

  test('inline-block display utility', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="display-inline-block"]', 'display', 'inline-block');
  });

  test('flex display utility', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="display-flex"]', 'display', 'flex');
  });

  test('inline-flex display utility', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="display-inline-flex"]', 'display', 'inline-flex');
  });

  test('grid display utility', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="display-grid"]', 'display', 'grid');
  });

  test('inline-grid display utility', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="display-inline-grid"]', 'display', 'inline-grid');
  });

  test('hidden display utility', async ({ page }) => {
    await expectCSSProperty(page, '[data-testid="display-none"]', 'display', 'none');
  });
});
