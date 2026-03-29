import { test, expect } from '@playwright/test';
import { getCSSCustomProperty } from '../__helpers__/css-test-helpers';

/**
 * Design Tokens Test Suite
 * Validates CSS custom properties and design tokens are correctly defined
 */

test.describe('Design Tokens', () => {
  test.beforeEach(async ({ page }) => {
    // Inject themes.css directly for isolated testing
    // Path is relative to the tests/e2e directory (where Playwright runs)
    await page.addStyleTag({ path: '../../dist/themes.css' });
  });

  test.describe('Spacing Tokens', () => {
    const spacingTokens = [
      { name: '--spacing-0', value: '0' },
      { name: '--spacing-1', value: '.25rem' },  // Minified CSS removes leading zero
      { name: '--spacing-2', value: '.5rem' },   // Minified CSS removes leading zero
      { name: '--spacing-4', value: '1rem' },
      { name: '--spacing-8', value: '2rem' },
      { name: '--spacing-16', value: '4rem' },
    ];

    for (const token of spacingTokens) {
      test(`${token.name} should be ${token.value}`, async ({ page }) => {
        const value = await getCSSCustomProperty(page, token.name);
        expect(value).toBe(token.value);
      });
    }
  });

  test.describe('Color Tokens', () => {
    test('primary color palette should have correct color values', async ({ page }) => {
      const primary500 = await getCSSCustomProperty(page, '--color-primary-500');
      // Colors can be in OKLCH or RGB format depending on build
      expect(primary500).toMatch(/^(oklch\([^)]+\)|rgb\([^)]+\)|#[a-fA-F0-9]+)$/);
    });

    test('gray color palette should be defined', async ({ page }) => {
      const gray500 = await getCSSCustomProperty(page, '--color-gray-500');
      expect(gray500).toBeTruthy();
      // Colors can be in OKLCH or RGB format
      expect(gray500).toMatch(/^(oklch\([^)]+\)|rgb\([^)]+\)|#[a-fA-F0-9]+)$/);
    });

    test('semantic color tokens should be defined', async ({ page }) => {
      const success = await getCSSCustomProperty(page, '--color-success-500');
      const warning = await getCSSCustomProperty(page, '--color-warning-500');
      const danger = await getCSSCustomProperty(page, '--color-danger-500');

      expect(success).toBeTruthy();
      expect(warning).toBeTruthy();
      expect(danger).toBeTruthy();
    });
  });

  test.describe('Typography Tokens', () => {
    const fontSizeTokens = [
      { name: '--font-size-xs', min: '10px', max: '14px' },
      { name: '--font-size-sm', min: '12px', max: '16px' },
      { name: '--font-size-base', min: '14px', max: '18px' },
      { name: '--font-size-lg', min: '16px', max: '20px' },
      { name: '--font-size-xl', min: '18px', max: '24px' },
      { name: '--font-size-2xl', min: '20px', max: '28px' },
    ];

    for (const token of fontSizeTokens) {
      test(`${token.name} should be within expected range`, async ({ page }) => {
        const value = await getCSSCustomProperty(page, token.name);
        expect(value).toBeTruthy();

        // Parse pixel value
        const pixelMatch = value.match(/(\d+(?:\.\d+)?)px/);
        if (pixelMatch) {
          const pixels = parseFloat(pixelMatch[1]);
          const minPx = parseFloat(token.min);
          const maxPx = parseFloat(token.max);
          expect(pixels).toBeGreaterThanOrEqual(minPx);
          expect(pixels).toBeLessThanOrEqual(maxPx);
        }
      });
    }

    test('font family tokens should be defined', async ({ page }) => {
      const sans = await getCSSCustomProperty(page, '--font-family-sans');
      const serif = await getCSSCustomProperty(page, '--font-family-serif');
      const mono = await getCSSCustomProperty(page, '--font-family-mono');

      expect(sans).toContain('system-ui');
      expect(serif).toContain('serif');
      expect(mono).toContain('monospace');
    });
  });

  test.describe('Border Radius Tokens', () => {
    const radiusTokens = [
      '--border-radius-none',
      '--border-radius-sm',
      '--border-radius-md',
      '--border-radius-lg',
      '--border-radius-xl',
      '--border-radius-2xl',
      '--border-radius-full',
    ];

    for (const token of radiusTokens) {
      test(`${token} should be defined`, async ({ page }) => {
        const value = await getCSSCustomProperty(page, token);
        expect(value).toBeTruthy();
      });
    }
  });

  test.describe('Shadow Tokens', () => {
    test('shadow tokens should be defined', async ({ page }) => {
      const shadowSm = await getCSSCustomProperty(page, '--shadow-sm');
      const shadowMd = await getCSSCustomProperty(page, '--shadow-md');
      const shadowLg = await getCSSCustomProperty(page, '--shadow-lg');

      expect(shadowSm).toContain('0');
      expect(shadowMd).toContain('0');
      expect(shadowLg).toContain('0');
    });
  });

  test.describe('Breakpoint Tokens', () => {
    const breakpointTokens = [
      { name: '--breakpoint-sm', value: '320px' },
      { name: '--breakpoint-md', value: '768px' },
      { name: '--breakpoint-lg', value: '1024px' },
      { name: '--breakpoint-xl', value: '1280px' },
    ];

    for (const token of breakpointTokens) {
      test(`${token.name} should be ${token.value}`, async ({ page }) => {
        const value = await getCSSCustomProperty(page, token.name);
        expect(value).toBe(token.value);
      });
    }
  });
});
