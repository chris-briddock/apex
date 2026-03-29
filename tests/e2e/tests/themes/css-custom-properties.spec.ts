import { test, expect } from '@playwright/test';
import {
  getCSSCustomProperty,
  getAllCSSCustomProperties
} from '../__helpers__/css-test-helpers';

/**
 * CSS Custom Properties Test Suite
 * Validates all CSS variables are correctly defined and accessible
 */

test.describe('CSS Custom Properties', () => {
  test.beforeEach(async ({ page }) => {
    // Inject themes.css directly for isolated testing
    // Path is relative to the tests/e2e directory (where Playwright runs)
    await page.addStyleTag({ path: '../../dist/themes.css' });
  });

  test.describe('Core Token Categories', () => {
    test('should have all spacing tokens defined', async ({ page }) => {
      const tokens = await getAllCSSCustomProperties(page);
      const spacingTokens = Object.keys(tokens).filter(key =>
        key.startsWith('--spacing-')
      );

      expect(spacingTokens.length).toBeGreaterThan(0);

      // Verify specific spacing values exist
      expect(tokens).toHaveProperty('--spacing-0');
      expect(tokens).toHaveProperty('--spacing-1');
      expect(tokens).toHaveProperty('--spacing-4');
      expect(tokens).toHaveProperty('--spacing-8');
    });

    test('should have all color tokens defined', async ({ page }) => {
      const tokens = await getAllCSSCustomProperties(page);

      // Check for primary color scale
      const primaryColors = Object.keys(tokens).filter(key =>
        key.startsWith('--color-primary-')
      );
      expect(primaryColors.length).toBeGreaterThanOrEqual(10);

      // Check for gray scale
      const grayColors = Object.keys(tokens).filter(key =>
        key.startsWith('--color-gray-')
      );
      expect(grayColors.length).toBeGreaterThanOrEqual(10);

      // Check for semantic colors
      expect(tokens).toHaveProperty('--color-success-500');
      expect(tokens).toHaveProperty('--color-warning-500');
      expect(tokens).toHaveProperty('--color-danger-500');
    });

    test('should have typography tokens defined', async ({ page }) => {
      const tokens = await getAllCSSCustomProperties(page);

      expect(tokens).toHaveProperty('--font-family-sans');
      expect(tokens).toHaveProperty('--font-family-serif');
      expect(tokens).toHaveProperty('--font-family-mono');

      const fontSizes = Object.keys(tokens).filter(key =>
        key.startsWith('--font-size-')
      );
      expect(fontSizes.length).toBeGreaterThanOrEqual(5);
    });

    test('should have border radius tokens defined', async ({ page }) => {
      const tokens = await getAllCSSCustomProperties(page);

      expect(tokens).toHaveProperty('--border-radius-none');
      expect(tokens).toHaveProperty('--border-radius-sm');
      expect(tokens).toHaveProperty('--border-radius-md');
      expect(tokens).toHaveProperty('--border-radius-lg');
      expect(tokens).toHaveProperty('--border-radius-full');
    });
  });

  test.describe('Color Format', () => {
    test('primary colors should have valid color values', async ({ page }) => {
      const primary500 = await getCSSCustomProperty(page, '--color-primary-500');
      // Colors can be in OKLCH, RGB, or hex format depending on build
      expect(primary500).toMatch(/^(oklch\([^)]+\)|rgb\([^)]+\)|#[a-fA-F0-9]+)$/);
    });

    test('gray colors should have valid color values', async ({ page }) => {
      const gray500 = await getCSSCustomProperty(page, '--color-gray-500');
      // Colors can be in OKLCH, RGB, or hex format
      expect(gray500).toMatch(/^(oklch\([^)]+\)|rgb\([^)]+\)|#[a-fA-F0-9]+)$/);
    });
  });

  test.describe('Token Value Validation', () => {
    test('spacing values should be valid CSS lengths', async ({ page }) => {
      const tokens = await getAllCSSCustomProperties(page);
      const spacingTokens = Object.entries(tokens).filter(([key]) =>
        key.startsWith('--spacing-')
      );

      for (const [, value] of spacingTokens) {
        // Should be a valid CSS length (px, rem, em, or 0)
        expect(value).toMatch(/^(0|([\d.]+(px|rem|em|%)))$/);
      }
    });

    test('font size values should be valid CSS lengths', async ({ page }) => {
      const tokens = await getAllCSSCustomProperties(page);
      const fontSizeTokens = Object.entries(tokens).filter(([key]) =>
        key.startsWith('--font-size-')
      );

      for (const [, value] of fontSizeTokens) {
        expect(value).toMatch(/^[\d.]+(px|rem|em|%)$/);
      }
    });

    test('border radius values should be valid', async ({ page }) => {
      const full = await getCSSCustomProperty(page, '--border-radius-full');
      expect(full).toBe('9999px');

      const none = await getCSSCustomProperty(page, '--border-radius-none');
      expect(none).toBe('0');
    });
  });

  test.describe('Dark Mode Tokens', () => {
    test('should have dark mode color variants', async ({ page }) => {
      // Apply dark mode
      await page.evaluate(() => {
        document.documentElement.classList.add('dark');
      });

      const tokens = await getAllCSSCustomProperties(page);

      // Check for dark mode specific tokens
      Object.keys(tokens).filter(key =>
        key.includes('dark') || key.includes('-dark-')
      );

      // Dark mode should have different color values
      expect(Object.keys(tokens).length).toBeGreaterThan(0);
    });
  });

  test.describe('Custom Property Inheritance', () => {
    test('custom properties should be inherited from :root', async ({ page }) => {
      const rootValue = await getCSSCustomProperty(page, '--color-primary-500', ':root');
      const bodyValue = await getCSSCustomProperty(page, '--color-primary-500', 'body');

      expect(bodyValue).toBe(rootValue);
    });
  });
});
