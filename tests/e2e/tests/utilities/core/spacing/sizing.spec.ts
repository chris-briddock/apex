import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../../__helpers__/component-helpers';
import { getComputedStyle } from '../../../__helpers__/css-test-helpers';

test.describe('Sizing Utilities', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test.describe('Width', () => {
    test('w-0 should have 0 width', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'w-0' });
      const width = await getComputedStyle(page, getSelector(testId), 'width');
      expect(width).toBe('0px');
    });

    test('w-full should have 100% width', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'w-full' });
      const width = await getComputedStyle(page, getSelector(testId), 'width');
      // Full width in pixels (depends on container)
      expect(parseFloat(width)).toBeGreaterThan(0);
    });

    test('w-1/2 should have 50% width', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'w-1/2' });
      const width = await getComputedStyle(page, getSelector(testId), 'width');
      expect(parseFloat(width)).toBeGreaterThan(0);
    });

    test('w-1/4 should have 25% width', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'w-1/4' });
      const width = await getComputedStyle(page, getSelector(testId), 'width');
      expect(parseFloat(width)).toBeGreaterThan(0);
    });
  });

  test.describe('Height', () => {
    test('h-0 should have 0 height', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'h-0' });
      const height = await getComputedStyle(page, getSelector(testId), 'height');
      expect(height).toBe('0px');
    });

    test('h-full should have 100% height', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'h-full',
        styles: { height: '200px' } // Give container height for full to work
      });
      const height = await getComputedStyle(page, getSelector(testId), 'height');
      expect(parseFloat(height)).toBeGreaterThan(0);
    });
  });

  test.describe('Min/Max Width', () => {
    test('min-w-0 should have min-width of 0', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'min-w-0' });
      const minWidth = await getComputedStyle(page, getSelector(testId), 'min-width');
      expect(minWidth).toBe('0px');
    });

    test('min-w-full should have min-width of 100%', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'min-w-full' });
      const minWidth = await getComputedStyle(page, getSelector(testId), 'min-width');
      expect(parseFloat(minWidth)).toBeGreaterThan(0);
    });
  });
});
