import { test, expect } from '@playwright/test';
import { getComputedStyle } from './utils/css-test-helpers';

test.describe('Dark Mode', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Theme Toggle', () => {
    test('should have theme toggle button', async ({ page }) => {
      const themeToggle = page.locator('[data-testid="theme-toggle"]');
      await expect(themeToggle).toBeVisible();
    });

    test('should toggle theme when clicked', async ({ page }) => {
      const themeToggle = page.locator('[data-testid="theme-toggle"]');

      // Get initial theme
      const initialTheme = await page.evaluate(() => {
        return document.querySelector('[data-theme]')?.getAttribute('data-theme');
      });
      expect(initialTheme).toBe('light');

      // Click toggle
      await themeToggle.click();

      // Check theme changed
      const newTheme = await page.evaluate(() => {
        return document.querySelector('[data-theme]')?.getAttribute('data-theme');
      });
      expect(newTheme).toBe('dark');

      // Toggle back
      await themeToggle.click();

      const finalTheme = await page.evaluate(() => {
        return document.querySelector('[data-theme]')?.getAttribute('data-theme');
      });
      expect(finalTheme).toBe('light');
    });
  });

  test.describe('Dark Mode Colors', () => {
    test('should apply dark background in dark mode', async ({ page }) => {
      // Navigate to colors page
      await page.goto('/colors');

      // Toggle to dark mode
      await page.locator('[data-testid="theme-toggle"]').click();

      // Check if dark mode class is applied
      const hasDarkClass = await page.evaluate(() => {
        return document.querySelector('.dark') !== null;
      });
      expect(hasDarkClass).toBe(true);
    });

    test('dark mode colors page should have correct text colors', async ({ page }) => {
      await page.goto('/colors');
      await page.locator('[data-testid="theme-toggle"]').click();

      // Check text color in dark mode
      const textColor = await getComputedStyle(page, '[data-testid="text-white"]', 'color');
      expect(textColor).toBe('rgb(255, 255, 255)');
    });
  });

  test.describe('Dark Mode Persistence', () => {
    test('should maintain theme across navigation', async ({ page }) => {
      // Set dark mode
      await page.locator('[data-testid="theme-toggle"]').click();

      // Navigate to another page
      await page.goto('/display');

      // Check theme persisted
      const theme = await page.evaluate(() => {
        return document.querySelector('[data-theme]')?.getAttribute('data-theme');
      });
      expect(theme).toBe('dark');
    });
  });
});
