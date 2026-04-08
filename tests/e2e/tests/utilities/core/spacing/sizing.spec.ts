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
      expect(Number.parseFloat(width)).toBeGreaterThan(0);
    });

    test('w-1/2 should have 50% width', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'w-1/2' });
      const width = await getComputedStyle(page, getSelector(testId), 'width');
      expect(Number.parseFloat(width)).toBeGreaterThan(0);
    });

    test('w-1/4 should have 25% width', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'w-1/4' });
      const width = await getComputedStyle(page, getSelector(testId), 'width');
      expect(Number.parseFloat(width)).toBeGreaterThan(0);
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
      expect(Number.parseFloat(height)).toBeGreaterThan(0);
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
      expect(Number.parseFloat(minWidth)).toBeGreaterThan(0);
    });

    test('max-w-full should have max-width of 100%', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'max-w-full' });
      const maxWidth = await getComputedStyle(page, getSelector(testId), 'max-width');
      expect(Number.parseFloat(maxWidth)).toBeGreaterThan(0);
    });

    test('max-w-screen-sm should have sm screen max-width', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'max-w-screen-sm' });
      const maxWidth = await getComputedStyle(page, getSelector(testId), 'max-width');
      expect(Number.parseFloat(maxWidth)).toBeGreaterThan(0);
    });

    test('max-w-screen-md should have md screen max-width', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'max-w-screen-md' });
      const maxWidth = await getComputedStyle(page, getSelector(testId), 'max-width');
      expect(Number.parseFloat(maxWidth)).toBeGreaterThan(0);
    });

    test('max-w-screen-lg should have lg screen max-width', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'max-w-screen-lg' });
      const maxWidth = await getComputedStyle(page, getSelector(testId), 'max-width');
      expect(Number.parseFloat(maxWidth)).toBeGreaterThan(0);
    });
  });

  test.describe('Screen Sizing', () => {
    test('w-screen should have viewport width', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'w-screen' });
      const width = await getComputedStyle(page, getSelector(testId), 'width');
      // Should be 100vw in pixels
      expect(Number.parseFloat(width)).toBeGreaterThan(0);
    });

    test('h-screen should have viewport height', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'h-screen' });
      const height = await getComputedStyle(page, getSelector(testId), 'height');
      // Should be 100vh in pixels
      expect(Number.parseFloat(height)).toBeGreaterThan(0);
    });

    test('w-screen-w should have 100vw width', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'w-screen-w' });
      const width = await getComputedStyle(page, getSelector(testId), 'width');
      expect(Number.parseFloat(width)).toBeGreaterThan(0);
    });

    test('h-screen should have 100vh height', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'h-screen' });
      const height = await getComputedStyle(page, getSelector(testId), 'height');
      expect(Number.parseFloat(height)).toBeGreaterThan(0);
    });
  });

  test.describe('Min/Max Height', () => {
    test('min-h-0 should have min-height of 0', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'min-h-0' });
      const minHeight = await getComputedStyle(page, getSelector(testId), 'min-height');
      expect(minHeight).toBe('0px');
    });

    test('min-h-full should have min-height of 100%', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'min-h-full' });
      const minHeight = await getComputedStyle(page, getSelector(testId), 'min-height');
      expect(Number.parseFloat(minHeight)).toBeGreaterThan(0);
    });

    test('min-h-screen should have viewport min-height', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'min-h-screen' });
      const minHeight = await getComputedStyle(page, getSelector(testId), 'min-height');
      expect(Number.parseFloat(minHeight)).toBeGreaterThan(0);
    });

    test('max-h-full should have max-height of 100%', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'max-h-full' });
      const maxHeight = await getComputedStyle(page, getSelector(testId), 'max-height');
      expect(Number.parseFloat(maxHeight)).toBeGreaterThan(0);
    });

    test('max-h-screen should have viewport max-height', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'max-h-screen' });
      const maxHeight = await getComputedStyle(page, getSelector(testId), 'max-height');
      expect(Number.parseFloat(maxHeight)).toBeGreaterThan(0);
    });
  });

  test.describe('Sizing Scale', () => {
    const sizingScale = [
      { value: '0', expected: '0px' },
      { value: '1', expected: '4px' },
      { value: '2', expected: '8px' },
      { value: '3', expected: '12px' },
      { value: '4', expected: '16px' },
      { value: '5', expected: '20px' },
      { value: '6', expected: '24px' },
      { value: '8', expected: '32px' },
      { value: '10', expected: '40px' },
      { value: '12', expected: '48px' },
      { value: '16', expected: '64px' },
      { value: '20', expected: '80px' },
      { value: '24', expected: '96px' },
      { value: '32', expected: '128px' },
      { value: '40', expected: '160px' },
      { value: '48', expected: '192px' },
      { value: '56', expected: '224px' },
      { value: '64', expected: '256px' },
      { value: '72', expected: '288px' },
      { value: '80', expected: '320px' },
      { value: '96', expected: '384px' },
    ];

    for (const { value, expected } of sizingScale) {
      test(`w-${value} should have ${expected} width`, async ({ page }) => {
        const testId = await createComponent(page, { classes: `w-${value}` });
        const width = await getComputedStyle(page, getSelector(testId), 'width');
        expect(width).toBe(expected);
      });
    }

    for (const { value, expected } of sizingScale) {
      test(`h-${value} should have ${expected} height`, async ({ page }) => {
        const testId = await createComponent(page, { classes: `h-${value}` });
        const height = await getComputedStyle(page, getSelector(testId), 'height');
        expect(height).toBe(expected);
      });
    }
  });
});
