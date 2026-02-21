import { test, expect } from '@playwright/test';
import {
  expectPageScreenshot,
  expectElementScreenshot,
  expectResponsiveScreenshots,
  expectDarkModeScreenshot,
  waitForVisualStability,
} from './utils/visual-test-helpers';

/**
 * Visual Regression Test Suite
 * Tests for catching visual bugs across the CSS framework
 */

test.describe('Visual Regression Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Wait for fonts and resources to load before taking screenshots
    await page.goto('/');
    await waitForVisualStability(page);
  });

  test.describe('Homepage', () => {
    test('should match homepage screenshot', async ({ page }) => {
      await expectPageScreenshot(page, 'homepage', {
        fullPage: true,
      });
    });

    test('should match homepage in dark mode', async ({ page }) => {
      await expectDarkModeScreenshot(page, 'homepage', {
        fullPage: true,
      });
    });

    test('should be responsive', async ({ page }) => {
      await expectResponsiveScreenshots(page, 'homepage-responsive', [
        'mobile',
        'tablet',
        'desktop',
      ], {
        fullPage: true,
      });
    });
  });

  test.describe('Colors Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/colors');
      await waitForVisualStability(page);
    });

    test('should match color palette screenshot', async ({ page }) => {
      await expectPageScreenshot(page, 'colors-page', {
        fullPage: true,
      });
    });

    test('color palette should render correctly', async ({ page }) => {
      // Test primary color scale
      await expectElementScreenshot(
        page,
        '[data-testid="bg-primary-section"]',
        'color-palette-primary'
      );

      // Test gray color scale
      await expectElementScreenshot(
        page,
        '[data-testid="bg-gray-section"]',
        'color-palette-gray'
      );

      // Test semantic colors
      await expectElementScreenshot(
        page,
        '[data-testid="bg-semantic-section"]',
        'color-palette-semantic'
      );
    });

    test('color palette should work in dark mode', async ({ page }) => {
      await expectDarkModeScreenshot(page, 'colors-page', {
        fullPage: true,
      });
    });

    test('color swatches should be visible and properly sized', async ({ page }) => {
      const swatches = await page.locator('[data-testid^="bg-primary-"]').all();

      for (const swatch of swatches) {
        await expect(swatch).toBeVisible();
        const box = await swatch.boundingBox();
        expect(box).not.toBeNull();
        expect(box!.width).toBeGreaterThan(0);
        expect(box!.height).toBeGreaterThan(0);
      }
    });
  });

  test.describe('Typography Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/typography');
      await waitForVisualStability(page);
    });

    test('should match typography page screenshot', async ({ page }) => {
      await expectPageScreenshot(page, 'typography-page', {
        fullPage: true,
      });
    });

    test('typography should be consistent', async ({ page }) => {
      await expectElementScreenshot(
        page,
        '[data-testid="typography-headings"]',
        'typography-headings'
      );
    });

    test('typography should work in dark mode', async ({ page }) => {
      await expectDarkModeScreenshot(page, 'typography-page', {
        fullPage: true,
      });
    });
  });

  test.describe('Spacing Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/spacing');
      await waitForVisualStability(page);
    });

    test('should match spacing page screenshot', async ({ page }) => {
      await expectPageScreenshot(page, 'spacing-page', {
        fullPage: true,
      });
    });

    test('spacing scale should be consistent', async ({ page }) => {
      await expectElementScreenshot(
        page,
        '[data-testid="spacing-scale"]',
        'spacing-scale'
      );
    });
  });

  test.describe('Flexbox Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/flexbox');
      await waitForVisualStability(page);
    });

    test('should match flexbox page screenshot', async ({ page }) => {
      await expectPageScreenshot(page, 'flexbox-page', {
        fullPage: true,
      });
    });

    test('flexbox examples should render correctly', async ({ page }) => {
      await expectElementScreenshot(
        page,
        '[data-testid="flexbox-container"]',
        'flexbox-container'
      );
    });

    test('flexbox should be responsive', async ({ page }) => {
      await expectResponsiveScreenshots(page, 'flexbox-responsive', [
        'mobile',
        'tablet',
        'desktop',
      ]);
    });
  });

  test.describe('Grid Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/grid');
      await waitForVisualStability(page);
    });

    test('should match grid page screenshot', async ({ page }) => {
      await expectPageScreenshot(page, 'grid-page', {
        fullPage: true,
      });
    });

    test('grid examples should render correctly', async ({ page }) => {
      await expectElementScreenshot(
        page,
        '[data-testid="grid-container"]',
        'grid-container'
      );
    });

    test('grid should be responsive', async ({ page }) => {
      await expectResponsiveScreenshots(page, 'grid-responsive', [
        'mobile',
        'tablet',
        'desktop',
      ]);
    });
  });

  test.describe('Borders Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/borders');
      await waitForVisualStability(page);
    });

    test('should match borders page screenshot', async ({ page }) => {
      await expectPageScreenshot(page, 'borders-page', {
        fullPage: true,
      });
    });

    test('border examples should render correctly', async ({ page }) => {
      await expectElementScreenshot(
        page,
        '[data-testid="border-examples"]',
        'border-examples'
      );
    });
  });

  test.describe('Shadows Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/shadows');
      await waitForVisualStability(page);
    });

    test('should match shadows page screenshot', async ({ page }) => {
      await expectPageScreenshot(page, 'shadows-page', {
        fullPage: true,
      });
    });

    test('shadow examples should render correctly', async ({ page }) => {
      await expectElementScreenshot(
        page,
        '[data-testid="shadow-examples"]',
        'shadow-examples'
      );
    });

    test('shadows should work in dark mode', async ({ page }) => {
      await expectDarkModeScreenshot(page, 'shadows-page', {
        fullPage: true,
      });
    });
  });

  test.describe('Dark Mode', () => {
    test('should toggle between light and dark themes', async ({ page }) => {
      // Light mode
      await expectPageScreenshot(page, 'theme-toggle-light', {
        fullPage: false,
      });

      // Toggle to dark mode
      const themeToggle = page.locator('[data-testid="theme-toggle"]');
      await themeToggle.click();
      await page.waitForTimeout(300);

      // Dark mode
      await expectPageScreenshot(page, 'theme-toggle-dark', {
        fullPage: false,
      });
    });

    test('dark mode should persist across navigation', async ({ page }) => {
      // Enable dark mode
      await page.locator('[data-testid="theme-toggle"]').click();
      await page.waitForTimeout(300);

      // Navigate to different pages
      const pages = ['/colors', '/typography', '/spacing'];

      for (const path of pages) {
        await page.goto(path);
        await waitForVisualStability(page);

        // Verify dark mode is still active
        const hasDarkClass = await page.evaluate(() =>
          document.querySelector('.dark') !== null
        );
        expect(hasDarkClass).toBe(true);

        await expectPageScreenshot(page, `dark-mode-${path.replace('/', '')}`, {
          fullPage: true,
        });
      }
    });
  });

  test.describe('Component States', () => {
    test('interactive elements should have hover states', async ({ page }) => {
      await page.goto('/colors');
      await waitForVisualStability(page);

      const button = page.locator('[data-testid="theme-toggle"]');

      // Initial state
      await expectElementScreenshot(page, '[data-testid="theme-toggle"]', 'button-initial');

      // Hover state
      await button.hover();
      await page.waitForTimeout(200);
      await expectElementScreenshot(page, '[data-testid="theme-toggle"]', 'button-hover');
    });
  });

  test.describe('Accessibility', () => {
    test('high contrast mode should render correctly', async ({ page }) => {
      await page.emulateMedia({ forcedColors: 'active' });
      await page.goto('/colors');
      await waitForVisualStability(page);

      await expectPageScreenshot(page, 'high-contrast-mode', {
        fullPage: true,
      });
    });

    test('reduced motion should disable animations', async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto('/');
      await waitForVisualStability(page);

      await expectPageScreenshot(page, 'reduced-motion', {
        fullPage: true,
        animations: 'allow',
      });
    });
  });

  test.describe('Cross-browser', () => {
    test('should render consistently across browsers', async ({ page, browserName }) => {
      await page.goto('/colors');
      await waitForVisualStability(page);

      // Take screenshot with browser-specific suffix
      await expectPageScreenshot(page, `cross-browser-colors-${browserName.toLowerCase()}`, {
        fullPage: true,
        threshold: 0.15,
        maxDiffPixels: 200,
      });
    });
  });
});

/**
 * Component-specific visual tests
 */
test.describe('Component Visual Tests', () => {
  test.describe('Header Component', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      await waitForVisualStability(page);
    });

    test('header should match screenshot', async ({ page }) => {
      await expectElementScreenshot(
        page,
        '[data-testid="header"]',
        'header-component'
      );
    });

    test('header should be sticky on scroll', async ({ page }) => {
      // Scroll down
      await page.evaluate(() => window.scrollTo(0, 500));
      await page.waitForTimeout(200);

      await expectElementScreenshot(
        page,
        '[data-testid="header"]',
        'header-sticky'
      );
    });
  });

  test.describe('Color Swatches', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/colors');
      await waitForVisualStability(page);
    });

    test('all color swatches should be visible', async ({ page }) => {
      const swatchTestIds = [
        'bg-primary-50', 'bg-primary-100', 'bg-primary-200',
        'bg-primary-300', 'bg-primary-400', 'bg-primary-500',
        'bg-primary-600', 'bg-primary-700', 'bg-primary-800', 'bg-primary-900',
        'bg-gray-50', 'bg-gray-100', 'bg-gray-200', 'bg-gray-300',
        'bg-gray-400', 'bg-gray-500', 'bg-gray-600', 'bg-gray-700',
        'bg-gray-800', 'bg-gray-900',
      ];

      for (const testId of swatchTestIds) {
        const element = page.locator(`[data-testid="${testId}"]`);
        await expect(element).toBeVisible();

        const box = await element.boundingBox();
        expect(box).not.toBeNull();
        expect(box!.width).toBeGreaterThan(0);
        expect(box!.height).toBeGreaterThan(0);
      }
    });

    test('color gradient should be smooth', async ({ page }) => {
      // Take a screenshot of the primary color scale
      await expectElementScreenshot(
        page,
        '[data-testid="bg-primary-section"]',
        'primary-color-gradient'
      );

      // Verify each swatch has a distinct color
      const swatches = await page.locator('[data-testid^="bg-primary-"]').all();
      const colors = new Set<string>();

      for (const swatch of swatches) {
        const bg = await swatch.evaluate((el) =>
          window.getComputedStyle(el).backgroundColor
        );
        colors.add(bg);
      }

      // All colors should be distinct
      expect(colors.size).toBe(swatches.length);
    });
  });
});
