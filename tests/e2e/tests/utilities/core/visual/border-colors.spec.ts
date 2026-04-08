import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../../__helpers__/component-helpers';
import { getComputedStyle } from '../../../__helpers__/css-test-helpers';

test.describe('Border Color Utilities', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test.describe('Primary Border Colors', () => {
    test('border-primary should apply primary border color', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-primary' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
      expect(borderColor).not.toBe('rgba(0, 0, 0, 0)');
    });

    test('border-primary-50 should apply light primary border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-primary-50' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-primary-100 should apply primary-100 border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-primary-100' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-primary-200 should apply primary-200 border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-primary-200' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-primary-300 should apply primary-300 border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-primary-300' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-primary-400 should apply primary-400 border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-primary-400' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-primary-500 should apply primary-500 border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-primary-500' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-primary-600 should apply primary-600 border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-primary-600' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-primary-700 should apply primary-700 border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-primary-700' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-primary-800 should apply primary-800 border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-primary-800' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-primary-900 should apply primary-900 border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-primary-900' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-primary-950 should apply dark primary border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-primary-950' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });
  });

  test.describe('Gray Border Colors', () => {
    test('border-gray-50 should apply light gray border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-gray-50' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-gray-100 should apply gray-100 border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-gray-100' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-gray-200 should apply gray-200 border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-gray-200' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-gray-300 should apply gray-300 border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-gray-300' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-gray-400 should apply gray-400 border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-gray-400' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-gray-500 should apply gray-500 border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-gray-500' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-gray-600 should apply gray-600 border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-gray-600' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-gray-700 should apply gray-700 border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-gray-700' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-gray-800 should apply gray-800 border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-gray-800' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-gray-900 should apply gray-900 border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-gray-900' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-gray-950 should apply dark gray border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-gray-950' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });
  });

  test.describe('Semantic Border Colors', () => {
    test('border-success should apply success border color', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-success' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-warning should apply warning border color', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-warning' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-danger should apply danger border color', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-danger' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-info should apply info border color', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-info' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });
  });

  test.describe('Basic Border Colors', () => {
    test('border-white should apply white border', async ({ page }) => {
      // Emulate light mode to ensure --color-white is rgb(255, 255, 255)
      await page.emulateMedia({ colorScheme: 'light' });
      const testId = await createComponent(page, { classes: 'border border-white' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      // Accept white in any format: oklch, rgb, or hex
      expect(borderColor).toMatch(/oklch\((100%|1) 0 0\)|rgb\(255, 255, 255\)|#fff|#ffffff/i);
    });

    test('border-black should apply black border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-black' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch\(0%? 0 0\)|rgb\(0, 0, 0\)/);
    });

    test('border-transparent should apply transparent border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-transparent' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toBe('rgba(0, 0, 0, 0)');
    });

    test('border-current should use current color', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-current', styles: { color: 'rgb(255, 0, 0)' } });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toBe('rgb(255, 0, 0)');
    });
  });

  test.describe('Individual Side Border Colors', () => {
    test('border-t-primary should apply primary color to top border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border-t border-t-primary' });
      const borderTopColor = await getComputedStyle(page, getSelector(testId), 'border-top-color');
      expect(borderTopColor).toMatch(/oklch|rgb/);
    });

    test('border-r-primary should apply primary color to right border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border-r border-r-primary' });
      const borderRightColor = await getComputedStyle(page, getSelector(testId), 'border-right-color');
      expect(borderRightColor).toMatch(/oklch|rgb/);
    });

    test('border-b-primary should apply primary color to bottom border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border-b border-b-primary' });
      const borderBottomColor = await getComputedStyle(page, getSelector(testId), 'border-bottom-color');
      expect(borderBottomColor).toMatch(/oklch|rgb/);
    });

    test('border-l-primary should apply primary color to left border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border-l border-l-primary' });
      const borderLeftColor = await getComputedStyle(page, getSelector(testId), 'border-left-color');
      expect(borderLeftColor).toMatch(/oklch|rgb/);
    });
  });
});
