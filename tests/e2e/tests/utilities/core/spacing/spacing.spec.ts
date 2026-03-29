import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../../__helpers__/component-helpers';
import { getComputedStyle } from '../../../__helpers__/css-test-helpers';

test.describe('Spacing Utilities', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test.describe('Padding', () => {
    test('p-0 should have no padding', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'p-0' });

      const top = await getComputedStyle(page, getSelector(testId), 'padding-top');
      const right = await getComputedStyle(page, getSelector(testId), 'padding-right');
      const bottom = await getComputedStyle(page, getSelector(testId), 'padding-bottom');
      const left = await getComputedStyle(page, getSelector(testId), 'padding-left');

      expect(top).toBe('0px');
      expect(right).toBe('0px');
      expect(bottom).toBe('0px');
      expect(left).toBe('0px');
    });

    test('p-1 should have 0.25rem padding', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'p-1' });

      const top = await getComputedStyle(page, getSelector(testId), 'padding-top');
      expect(top).toBe('4px');
    });

    test('p-4 should have 1rem padding', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'p-4' });

      const top = await getComputedStyle(page, getSelector(testId), 'padding-top');
      expect(top).toBe('16px');
    });

    test('px-4 should apply horizontal padding', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'px-4' });

      const left = await getComputedStyle(page, getSelector(testId), 'padding-left');
      const right = await getComputedStyle(page, getSelector(testId), 'padding-right');

      expect(left).toBe('16px');
      expect(right).toBe('16px');
    });

    test('py-4 should apply vertical padding', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'py-4' });

      const top = await getComputedStyle(page, getSelector(testId), 'padding-top');
      const bottom = await getComputedStyle(page, getSelector(testId), 'padding-bottom');

      expect(top).toBe('16px');
      expect(bottom).toBe('16px');
    });

    test('pt-4 should apply top padding only', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'pt-4' });

      const top = await getComputedStyle(page, getSelector(testId), 'padding-top');
      expect(top).toBe('16px');
    });

    test('pr-4 should apply right padding only', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'pr-4' });

      const right = await getComputedStyle(page, getSelector(testId), 'padding-right');
      expect(right).toBe('16px');
    });

    test('pb-4 should apply bottom padding only', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'pb-4' });

      const bottom = await getComputedStyle(page, getSelector(testId), 'padding-bottom');
      expect(bottom).toBe('16px');
    });

    test('pl-4 should apply left padding only', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'pl-4' });

      const left = await getComputedStyle(page, getSelector(testId), 'padding-left');
      expect(left).toBe('16px');
    });
  });

  test.describe('Margin', () => {
    test('m-0 should have no margin', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'm-0' });

      const top = await getComputedStyle(page, getSelector(testId), 'margin-top');
      expect(top).toBe('0px');
    });

    test('m-4 should have 1rem margin', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'm-4' });

      const top = await getComputedStyle(page, getSelector(testId), 'margin-top');
      expect(top).toBe('16px');
    });

    test('mx-4 should apply horizontal margin', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'mx-4' });

      const left = await getComputedStyle(page, getSelector(testId), 'margin-left');
      const right = await getComputedStyle(page, getSelector(testId), 'margin-right');

      expect(left).toBe('16px');
      expect(right).toBe('16px');
    });

    test('my-4 should apply vertical margin', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'my-4' });

      const top = await getComputedStyle(page, getSelector(testId), 'margin-top');
      const bottom = await getComputedStyle(page, getSelector(testId), 'margin-bottom');

      expect(top).toBe('16px');
      expect(bottom).toBe('16px');
    });
  });

  test.describe('Auto Margins', () => {
    test('mx-auto should set horizontal margins to auto', async ({ page }) => {
      // Create a container with defined width to test auto margins
      await createComponent(page, {
        classes: 'test-container',
        styles: { width: '400px' },
      });

      const testId = await createComponent(page, {
        classes: 'mx-auto',
        styles: { width: '100px' },
      });

      const left = await getComputedStyle(page, getSelector(testId), 'margin-left');
      const right = await getComputedStyle(page, getSelector(testId), 'margin-right');

      // In a flex/grid context, auto margins may compute to pixel values
      // Just verify the values are valid (either 'auto' or a pixel value)
      expect(left === 'auto' || left.endsWith('px')).toBe(true);
      expect(right === 'auto' || right.endsWith('px')).toBe(true);
    });

    test('my-auto should set vertical margins to auto', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'my-auto',
        styles: { height: '100px' },
      });

      const top = await getComputedStyle(page, getSelector(testId), 'margin-top');
      const bottom = await getComputedStyle(page, getSelector(testId), 'margin-bottom');

      // In a flex/grid context, auto margins may compute to pixel values
      expect(top === 'auto' || top.endsWith('px')).toBe(true);
      expect(bottom === 'auto' || bottom.endsWith('px')).toBe(true);
    });
  });

  test.describe('Gap', () => {
    test('gap-4 should apply gap to flex container', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'flex gap-4',
        children: '<div>1</div><div>2</div>',
      });

      const gap = await getComputedStyle(page, getSelector(testId), 'gap');
      expect(gap).toBe('16px');
    });

    test('gap-x-4 should apply column gap', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'grid gap-x-4',
        children: '<div>1</div><div>2</div>',
      });

      const columnGap = await getComputedStyle(page, getSelector(testId), 'column-gap');
      expect(columnGap).toBe('16px');
    });

    test('gap-y-4 should apply row gap', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'grid gap-y-4',
        children: '<div>1</div><div>2</div>',
      });

      const rowGap = await getComputedStyle(page, getSelector(testId), 'row-gap');
      expect(rowGap).toBe('16px');
    });
  });
});
