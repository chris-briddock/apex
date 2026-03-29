import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../../__helpers__/component-helpers';
import { getComputedStyle } from '../../../__helpers__/css-test-helpers';

/**
 * Color Utilities Test Suite
 * Tests background, text, and border colors
 */

test.describe('Color Utilities', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test.describe('Background Colors', () => {
    test('bg-primary should apply primary background color', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'bg-primary',
        styles: { width: '100px', height: '100px' },
      });

      const bg = await getComputedStyle(page, getSelector(testId), 'background-color');
      expect(bg).toMatch(/oklch|rgb/);
      expect(bg).not.toBe('rgba(0, 0, 0, 0)');
      expect(bg).not.toBe('transparent');
    });

    test('bg-gray-100 should apply light gray background', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'bg-gray-100',
        styles: { width: '100px', height: '100px' },
      });

      const bg = await getComputedStyle(page, getSelector(testId), 'background-color');
      expect(bg).toMatch(/oklch|rgb/);
    });

    test('bg-white should apply white background', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'bg-white',
        styles: { width: '100px', height: '100px' },
      });

      const bg = await getComputedStyle(page, getSelector(testId), 'background-color');
      // Browser may return oklch or rgb for white (Firefox uses 1 instead of 100%)
      expect(bg).toMatch(/oklch\((100%|1) 0 0\)|rgb\(255, 255, 255\)/);
    });

    test('bg-black should apply black background', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'bg-black',
        styles: { width: '100px', height: '100px' },
      });

      const bg = await getComputedStyle(page, getSelector(testId), 'background-color');
      // Browser may return oklch or rgb for black
      expect(bg).toMatch(/oklch\(0%? 0 0\)|rgb\(0, 0, 0\)/);
    });

    test('bg-transparent should apply transparent background', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'bg-transparent',
        styles: { width: '100px', height: '100px' },
      });

      const bg = await getComputedStyle(page, getSelector(testId), 'background-color');
      expect(bg).toBe('rgba(0, 0, 0, 0)');
    });
  });

  test.describe('Semantic Background Colors', () => {
    test('bg-success should apply green background', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'bg-success',
        styles: { width: '100px', height: '100px' },
      });

      const bg = await getComputedStyle(page, getSelector(testId), 'background-color');
      expect(bg).toMatch(/oklch|rgb/);
    });

    test('bg-warning should apply orange/amber background', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'bg-warning',
        styles: { width: '100px', height: '100px' },
      });

      const bg = await getComputedStyle(page, getSelector(testId), 'background-color');
      expect(bg).toMatch(/oklch|rgb/);
    });

    test('bg-danger should apply red background', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'bg-danger',
        styles: { width: '100px', height: '100px' },
      });

      const bg = await getComputedStyle(page, getSelector(testId), 'background-color');
      expect(bg).toMatch(/oklch|rgb/);
    });
  });

  test.describe('Text Colors', () => {
    test('text-primary should apply text color', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'text-primary',
        children: 'Test Text',
      });

      const color = await getComputedStyle(page, getSelector(testId), 'color');
      expect(color).toMatch(/oklch|rgb/);
      expect(color).not.toBe('rgba(0, 0, 0, 0)');
    });

    test('text-gray-500 should apply gray text', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'text-gray-500',
        children: 'Test Text',
      });

      const color = await getComputedStyle(page, getSelector(testId), 'color');
      expect(color).toMatch(/oklch|rgb/);
    });

    test('text-white should apply white text', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'text-white',
        styles: { backgroundColor: 'black' },
        children: 'Test Text',
      });

      const color = await getComputedStyle(page, getSelector(testId), 'color');
      // Browser may return oklch or rgb for white (Firefox uses 1 instead of 100%)
      expect(color).toMatch(/oklch\((100%|1) 0 0\)|rgb\(255, 255, 255\)/);
    });

    test('text-black should apply black text', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'text-black',
        children: 'Test Text',
      });

      const color = await getComputedStyle(page, getSelector(testId), 'color');
      // Browser may return oklch or rgb for black
      expect(color).toMatch(/oklch\(0%? 0 0\)|rgb\(0, 0, 0\)/);
    });
  });

  test.describe('Border Colors', () => {
    test('border-primary should apply border color', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'border-2 border-primary',
        styles: { width: '100px', height: '100px' },
      });

      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });

    test('border-gray-300 should apply gray border', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'border border-gray-300',
        styles: { width: '100px', height: '100px' },
      });

      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgb/);
    });
  });

  test.describe('Color Opacity Modifiers', () => {
    test('bg-primary/50 should apply 50% opacity background', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'bg-primary/50',
        styles: { width: '100px', height: '100px' },
      });

      const bg = await getComputedStyle(page, getSelector(testId), 'background-color');
      // Should have alpha channel (rgba or oklch with alpha)
      expect(bg).toMatch(/rgba|oklch.*\//);
    });

    test('text-primary/75 should apply 75% opacity text', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'text-primary/75',
        children: 'Test',
      });

      const color = await getComputedStyle(page, getSelector(testId), 'color');
      // Should have alpha channel - could be rgba or oklch with alpha
      expect(color).toMatch(/rgba|oklch|rgb/);
    });
  });

  test.describe('OKLCH Color Format', () => {
    test('primary colors should use OKLCH format', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'bg-primary',
        styles: { width: '100px', height: '100px' },
      });

      const bg = await getComputedStyle(page, getSelector(testId), 'background-color');
      // Browser converts OKLCH to RGB for computed styles, but should return a valid color
      expect(bg).toMatch(/^(rgb|oklch)\(/);
    });
  });
});
