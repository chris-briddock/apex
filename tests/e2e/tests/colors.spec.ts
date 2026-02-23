import { test, expect } from '@playwright/test';
import { getComputedStyle } from './utils/css-test-helpers';

test.describe('Color Utilities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Background Colors', () => {
    test('bg-primary-50 should have light blue background', async ({ page }) => {
      const bg = await getComputedStyle(page, '[data-testid="bg-primary-50"]', 'background-color');
      expect(bg).toBe('rgb(239, 246, 255)');
    });

    test('bg-primary-100 should have lighter blue background', async ({ page }) => {
      const bg = await getComputedStyle(page, '[data-testid="bg-primary-100"]', 'background-color');
      expect(bg).toBe('rgb(219, 234, 254)');
    });

    test('bg-primary-500 should have blue background', async ({ page }) => {
      const bg = await getComputedStyle(page, '[data-testid="bg-primary-500"]', 'background-color');
      expect(bg).toBe('rgb(59, 130, 246)');
    });

    test('bg-primary-900 should have dark blue background', async ({ page }) => {
      const bg = await getComputedStyle(page, '[data-testid="bg-primary-900"]', 'background-color');
      expect(bg).toBe('rgb(30, 58, 138)');
    });

    test('bg-gray-100 should have light gray background', async ({ page }) => {
      const bg = await getComputedStyle(page, '[data-testid="bg-gray-100"]', 'background-color');
      expect(bg).toBe('rgb(243, 244, 246)');
    });

    test('bg-success should have green background', async ({ page }) => {
      const bg = await getComputedStyle(page, '[data-testid="bg-success"]', 'background-color');
      expect(bg).toMatch(/rgb\(34, 197, 94\)|rgb\(22, 163, 74\)/);
    });

    test('bg-warning should have orange background', async ({ page }) => {
      const bg = await getComputedStyle(page, '[data-testid="bg-warning"]', 'background-color');
      expect(bg).toMatch(/rgb\(245, 158, 11\)|rgb\(217, 119, 6\)/);
    });

    test('bg-danger should have red background', async ({ page }) => {
      const bg = await getComputedStyle(page, '[data-testid="bg-danger"]', 'background-color');
      expect(bg).toMatch(/rgb\(239, 68, 68\)|rgb\(220, 38, 38\)/);
    });

    test('bg-info should have sky blue background', async ({ page }) => {
      const bg = await getComputedStyle(page, '[data-testid="bg-info"]', 'background-color');
      expect(bg).toMatch(/rgb\(14, 165, 233\)|rgb\(2, 132, 199\)/);
    });
  });

  test.describe('Text Colors', () => {
    test('text-primary should have blue text color', async ({ page }) => {
      const color = await getComputedStyle(page, '[data-testid="text-primary"]', 'color');
      expect(color).toBe('rgb(59, 130, 246)');
    });

    test('text-gray-500 should have gray text color', async ({ page }) => {
      const color = await getComputedStyle(page, '[data-testid="text-gray-500"]', 'color');
      expect(color).toBe('rgb(107, 114, 128)');
    });

    test('text-white should have white text color', async ({ page }) => {
      const color = await getComputedStyle(page, '[data-testid="text-white"]', 'color');
      expect(color).toBe('rgb(255, 255, 255)');
    });

    test('text-black should have black text color', async ({ page }) => {
      const color = await getComputedStyle(page, '[data-testid="text-black"]', 'color');
      expect(color).toBe('rgb(0, 0, 0)');
    });
  });
});
