import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../../__helpers__/component-helpers';
import { getComputedStyle } from '../../../__helpers__/css-test-helpers';

test.describe('Border Utilities', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test.describe('Border Radius', () => {
    test('rounded-none should have no border radius', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'rounded-none' });
      const borderRadius = await getComputedStyle(page, getSelector(testId), 'border-radius');
      expect(borderRadius).toBe('0px');
    });

    test('rounded-sm should have small border radius', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'rounded-sm' });
      const borderRadius = await getComputedStyle(page, getSelector(testId), 'border-radius');
      expect(borderRadius).toBe('2px');
    });

    test('rounded should have default border radius', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'rounded' });
      const borderRadius = await getComputedStyle(page, getSelector(testId), 'border-radius');
      expect(borderRadius).toBe('4px');
    });

    test('rounded-md should have medium border radius', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'rounded-md' });
      const borderRadius = await getComputedStyle(page, getSelector(testId), 'border-radius');
      expect(borderRadius).toBe('6px');
    });

    test('rounded-lg should have large border radius', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'rounded-lg' });
      const borderRadius = await getComputedStyle(page, getSelector(testId), 'border-radius');
      expect(borderRadius).toBe('8px');
    });

    test('rounded-xl should have extra large border radius', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'rounded-xl' });
      const borderRadius = await getComputedStyle(page, getSelector(testId), 'border-radius');
      expect(borderRadius).toBe('12px');
    });

    test('rounded-2xl should have 2x large border radius', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'rounded-2xl' });
      const borderRadius = await getComputedStyle(page, getSelector(testId), 'border-radius');
      expect(borderRadius).toBe('16px');
    });

    test('rounded-full should have full border radius', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'rounded-full' });
      const borderRadius = await getComputedStyle(page, getSelector(testId), 'border-radius');
      expect(borderRadius).toBe('9999px');
    });
  });

  test.describe('Border Width', () => {
    test('border should have 1px border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border' });
      const borderTopWidth = await getComputedStyle(page, getSelector(testId), 'border-top-width');
      const borderRightWidth = await getComputedStyle(page, getSelector(testId), 'border-right-width');
      const borderBottomWidth = await getComputedStyle(page, getSelector(testId), 'border-bottom-width');
      const borderLeftWidth = await getComputedStyle(page, getSelector(testId), 'border-left-width');
      expect(borderTopWidth).toBe('1px');
      expect(borderRightWidth).toBe('1px');
      expect(borderBottomWidth).toBe('1px');
      expect(borderLeftWidth).toBe('1px');
    });

    test('border-0 should have no border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border-0' });
      const borderWidth = await getComputedStyle(page, getSelector(testId), 'border-width');
      expect(borderWidth).toBe('0px');
    });

    test('border-2 should have 2px border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border-2' });
      const borderWidth = await getComputedStyle(page, getSelector(testId), 'border-width');
      expect(borderWidth).toBe('2px');
    });

    test('border-4 should have 4px border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border-4' });
      const borderWidth = await getComputedStyle(page, getSelector(testId), 'border-width');
      expect(borderWidth).toBe('4px');
    });

    test('border-t should have top border only', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border-t' });
      const borderTopWidth = await getComputedStyle(page, getSelector(testId), 'border-top-width');
      expect(borderTopWidth).toBe('1px');
    });

    test('border-r should have right border only', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border-r' });
      const borderRightWidth = await getComputedStyle(page, getSelector(testId), 'border-right-width');
      expect(borderRightWidth).toBe('1px');
    });

    test('border-b should have bottom border only', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border-b' });
      const borderBottomWidth = await getComputedStyle(page, getSelector(testId), 'border-bottom-width');
      expect(borderBottomWidth).toBe('1px');
    });

    test('border-l should have left border only', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border-l' });
      const borderLeftWidth = await getComputedStyle(page, getSelector(testId), 'border-left-width');
      expect(borderLeftWidth).toBe('1px');
    });
  });

  test.describe('Border Style', () => {
    test('border-solid should have solid border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-solid' });
      const borderStyle = await getComputedStyle(page, getSelector(testId), 'border-style');
      expect(borderStyle).toBe('solid');
    });

    test('border-dashed should have dashed border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-dashed' });
      const borderStyle = await getComputedStyle(page, getSelector(testId), 'border-style');
      expect(borderStyle).toBe('dashed');
    });

    test('border-dotted should have dotted border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-dotted' });
      const borderStyle = await getComputedStyle(page, getSelector(testId), 'border-style');
      expect(borderStyle).toBe('dotted');
    });

    test('border-double should have double border', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-double' });
      const borderStyle = await getComputedStyle(page, getSelector(testId), 'border-style');
      expect(borderStyle).toBe('double');
    });

    test('border-none should have no border style', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border-none' });
      const borderStyle = await getComputedStyle(page, getSelector(testId), 'border-style');
      expect(borderStyle).toBe('none');
    });
  });
});
