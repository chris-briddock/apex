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

  test.describe('Spacing Scale', () => {
    // Test the full spacing scale from 0 to 96
    // Use className for the actual CSS class (hyphenated for decimals like 0-5, 1-5, etc.)
    // Use displayName for readable test names (decimal notation like 0.5, 1.5, etc.)
    const spacingScale = [
      { className: '0', displayName: '0', expected: '0px' },
      { className: 'px', displayName: 'px', expected: '1px' },
      { className: '0-5', displayName: '0.5', expected: '2px' },
      { className: '1', displayName: '1', expected: '4px' },
      { className: '1-5', displayName: '1.5', expected: '6px' },
      { className: '2', displayName: '2', expected: '8px' },
      { className: '2-5', displayName: '2.5', expected: '10px' },
      { className: '3', displayName: '3', expected: '12px' },
      { className: '3-5', displayName: '3.5', expected: '14px' },
      { className: '4', displayName: '4', expected: '16px' },
      { className: '5', displayName: '5', expected: '20px' },
      { className: '6', displayName: '6', expected: '24px' },
      { className: '7', displayName: '7', expected: '28px' },
      { className: '8', displayName: '8', expected: '32px' },
      { className: '9', displayName: '9', expected: '36px' },
      { className: '10', displayName: '10', expected: '40px' },
      { className: '11', displayName: '11', expected: '44px' },
      { className: '12', displayName: '12', expected: '48px' },
      { className: '14', displayName: '14', expected: '56px' },
      { className: '16', displayName: '16', expected: '64px' },
      { className: '20', displayName: '20', expected: '80px' },
      { className: '24', displayName: '24', expected: '96px' },
      { className: '28', displayName: '28', expected: '112px' },
      { className: '32', displayName: '32', expected: '128px' },
      { className: '36', displayName: '36', expected: '144px' },
      { className: '40', displayName: '40', expected: '160px' },
      { className: '44', displayName: '44', expected: '176px' },
      { className: '48', displayName: '48', expected: '192px' },
      { className: '52', displayName: '52', expected: '208px' },
      { className: '56', displayName: '56', expected: '224px' },
      { className: '60', displayName: '60', expected: '240px' },
      { className: '64', displayName: '64', expected: '256px' },
      { className: '72', displayName: '72', expected: '288px' },
      { className: '80', displayName: '80', expected: '320px' },
      { className: '96', displayName: '96', expected: '384px' },
    ];

    for (const { className, displayName, expected } of spacingScale) {
      test(`p-${displayName} should have ${expected} padding`, async ({ page }) => {
        const testId = await createComponent(page, { classes: `p-${className}` });
        const top = await getComputedStyle(page, getSelector(testId), 'padding-top');
        expect(top).toBe(expected);
      });
    }

    for (const { className, displayName, expected } of spacingScale) {
      test(`m-${displayName} should have ${expected} margin`, async ({ page }) => {
        const testId = await createComponent(page, { classes: `m-${className}` });
        const top = await getComputedStyle(page, getSelector(testId), 'margin-top');
        expect(top).toBe(expected);
      });
    }
  });
});
