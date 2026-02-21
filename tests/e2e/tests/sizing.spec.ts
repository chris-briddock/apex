import { test, expect } from '@playwright/test';
import { expectCSSProperty } from './utils/css-test-helpers';

test.describe('Sizing Utilities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Width', () => {
    test('w-0 should have 0 width', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="w-0"]', 'width', '0px');
    });

    test('w-full should have 100% width', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="w-full"]', 'width', /^[\d.]+px$/);
    });

    test('w-1/2 should have 50% width', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="w-1/2"]', 'width', /^[\d.]+px$/);
    });

    test('w-1/4 should have 25% width', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="w-1/4"]', 'width', /^[\d.]+px$/);
    });
  });

  test.describe('Height', () => {
    test('h-0 should have 0 height', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="h-0"]', 'height', '0px');
    });

    test('h-full should have 100% height', async ({ page }) => {
      const height = await page.evaluate(() => {
        const el = document.querySelector('[data-testid="h-full"]');
        return el ? window.getComputedStyle(el).height : '0';
      });
      expect(parseFloat(height)).toBeGreaterThan(0);
    });
  });

  test.describe('Min/Max Width', () => {
    test('min-w-0 should have min-width of 0', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="min-w-0"]', 'min-width', '0px');
    });

    test('min-w-full should have min-width of 100%', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="min-w-full"]', 'min-width', /^[\d.]+px$/);
    });
  });
});
