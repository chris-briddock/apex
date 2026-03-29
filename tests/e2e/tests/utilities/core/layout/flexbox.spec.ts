import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../../__helpers__/component-helpers';
import { getComputedStyle } from '../../../__helpers__/css-test-helpers';

/**
 * Flexbox Utilities Test Suite
 * Tests flex container and flex item properties
 */

test.describe('Flexbox Utilities', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test.describe('Display', () => {
    test('flex should set display: flex', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'flex' });
      const display = await getComputedStyle(page, getSelector(testId), 'display');
      expect(display).toBe('flex');
    });

    test('inline-flex should set display: inline-flex', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'inline-flex' });
      const display = await getComputedStyle(page, getSelector(testId), 'display');
      expect(display).toBe('inline-flex');
    });
  });

  test.describe('Flex Direction', () => {
    test('flex-row should set flex-direction: row', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'flex flex-row' });
      const direction = await getComputedStyle(page, getSelector(testId), 'flex-direction');
      expect(direction).toBe('row');
    });

    test('flex-row-reverse should set flex-direction: row-reverse', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'flex flex-row-reverse' });
      const direction = await getComputedStyle(page, getSelector(testId), 'flex-direction');
      expect(direction).toBe('row-reverse');
    });

    test('flex-col should set flex-direction: column', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'flex flex-col' });
      const direction = await getComputedStyle(page, getSelector(testId), 'flex-direction');
      expect(direction).toBe('column');
    });

    test('flex-col-reverse should set flex-direction: column-reverse', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'flex flex-col-reverse' });
      const direction = await getComputedStyle(page, getSelector(testId), 'flex-direction');
      expect(direction).toBe('column-reverse');
    });
  });

  test.describe('Flex Wrap', () => {
    test('flex-wrap should set flex-wrap: wrap', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'flex flex-wrap' });
      const wrap = await getComputedStyle(page, getSelector(testId), 'flex-wrap');
      expect(wrap).toBe('wrap');
    });

    test('flex-nowrap should set flex-wrap: nowrap', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'flex flex-nowrap' });
      const wrap = await getComputedStyle(page, getSelector(testId), 'flex-wrap');
      expect(wrap).toBe('nowrap');
    });

    test('flex-wrap-reverse should set flex-wrap: wrap-reverse', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'flex flex-wrap-reverse' });
      const wrap = await getComputedStyle(page, getSelector(testId), 'flex-wrap');
      expect(wrap).toBe('wrap-reverse');
    });
  });

  test.describe('Justify Content', () => {
    const justifyTests = [
      { class: 'justify-start', expected: 'flex-start' },
      { class: 'justify-end', expected: 'flex-end' },
      { class: 'justify-center', expected: 'center' },
      { class: 'justify-between', expected: 'space-between' },
      { class: 'justify-around', expected: 'space-around' },
      { class: 'justify-evenly', expected: 'space-evenly' },
    ];

    for (const { class: className, expected } of justifyTests) {
      test(`${className} should set justify-content: ${expected}`, async ({ page }) => {
        const testId = await createComponent(page, { classes: `flex ${className}` });
        const justify = await getComputedStyle(page, getSelector(testId), 'justify-content');
        expect(justify).toBe(expected);
      });
    }
  });

  test.describe('Align Items', () => {
    const alignItemsTests = [
      { class: 'items-start', expected: 'flex-start' },
      { class: 'items-end', expected: 'flex-end' },
      { class: 'items-center', expected: 'center' },
      { class: 'items-baseline', expected: 'baseline' },
      { class: 'items-stretch', expected: 'stretch' },
    ];

    for (const { class: className, expected } of alignItemsTests) {
      test(`${className} should set align-items: ${expected}`, async ({ page }) => {
        const testId = await createComponent(page, {
          classes: `flex ${className}`,
          styles: { height: '200px' },
        });
        const align = await getComputedStyle(page, getSelector(testId), 'align-items');
        expect(align).toBe(expected);
      });
    }
  });

  test.describe('Align Content', () => {
    test('content-start should set align-content: flex-start', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'flex flex-wrap content-start',
        styles: { height: '200px' },
        children: '<div>1</div><div>2</div><div>3</div>',
      });
      const content = await getComputedStyle(page, getSelector(testId), 'align-content');
      expect(content).toBe('flex-start');
    });

    test('content-center should set align-content: center', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'flex flex-wrap content-center',
        styles: { height: '200px' },
      });
      const content = await getComputedStyle(page, getSelector(testId), 'align-content');
      expect(content).toBe('center');
    });

    test('content-end should set align-content: flex-end', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'flex flex-wrap content-end',
        styles: { height: '200px' },
      });
      const content = await getComputedStyle(page, getSelector(testId), 'align-content');
      expect(content).toBe('flex-end');
    });

    test('content-between should set align-content: space-between', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'flex flex-wrap content-between',
        styles: { height: '200px' },
      });
      const content = await getComputedStyle(page, getSelector(testId), 'align-content');
      expect(content).toBe('space-between');
    });
  });

  test.describe('Flex Grow', () => {
    test('flex-grow should set flex-grow: 1', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'flex-grow' });
      const grow = await getComputedStyle(page, getSelector(testId), 'flex-grow');
      expect(grow).toBe('1');
    });

    test('flex-grow-0 should set flex-grow: 0', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'flex-grow-0' });
      const grow = await getComputedStyle(page, getSelector(testId), 'flex-grow');
      expect(grow).toBe('0');
    });
  });

  test.describe('Flex Shrink', () => {
    test('flex-shrink should set flex-shrink: 1', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'flex-shrink' });
      const shrink = await getComputedStyle(page, getSelector(testId), 'flex-shrink');
      expect(shrink).toBe('1');
    });

    test('flex-shrink-0 should set flex-shrink: 0', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'flex-shrink-0' });
      const shrink = await getComputedStyle(page, getSelector(testId), 'flex-shrink');
      expect(shrink).toBe('0');
    });
  });

  test.describe('Flex Basis', () => {
    test('flex-basis-0 should set flex-basis: 0px', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'flex-basis-0' });
      const basis = await getComputedStyle(page, getSelector(testId), 'flex-basis');
      expect(basis).toBe('0px');
    });

    test('flex-basis-auto should set flex-basis: auto', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'flex-basis-auto' });
      const basis = await getComputedStyle(page, getSelector(testId), 'flex-basis');
      expect(basis).toBe('auto');
    });

    test('flex-basis-full should set flex-basis: 100%', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'flex-basis-full' });
      const basis = await getComputedStyle(page, getSelector(testId), 'flex-basis');
      expect(basis).toBe('100%');
    });

    test('flex-basis-1/2 should set flex-basis: 50%', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'flex-basis-1/2' });
      const basis = await getComputedStyle(page, getSelector(testId), 'flex-basis');
      expect(basis).toBe('50%');
    });
  });

  test.describe('Align Self', () => {
    test('self-auto should set align-self: auto', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'self-auto' });
      const self = await getComputedStyle(page, getSelector(testId), 'align-self');
      expect(self).toBe('auto');
    });

    test('self-start should set align-self: flex-start', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'self-start' });
      const self = await getComputedStyle(page, getSelector(testId), 'align-self');
      expect(self).toBe('flex-start');
    });

    test('self-center should set align-self: center', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'self-center' });
      const self = await getComputedStyle(page, getSelector(testId), 'align-self');
      expect(self).toBe('center');
    });

    test('self-end should set align-self: flex-end', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'self-end' });
      const self = await getComputedStyle(page, getSelector(testId), 'align-self');
      expect(self).toBe('flex-end');
    });
  });

  test.describe('Order', () => {
    test('order-1 should set order: 1', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'order-1' });
      const order = await getComputedStyle(page, getSelector(testId), 'order');
      expect(order).toBe('1');
    });

    test('order-last should set order: 9999', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'order-last' });
      const order = await getComputedStyle(page, getSelector(testId), 'order');
      expect(order).toBe('9999');
    });

    test('order-first should set order: -9999', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'order-first' });
      const order = await getComputedStyle(page, getSelector(testId), 'order');
      expect(order).toBe('-9999');
    });
  });

  test.describe('Flex Shorthand', () => {
    test('flex-1 should set flex: 1 1 0%', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'flex-1' });
      const flex = await getComputedStyle(page, getSelector(testId), 'flex');
      expect(flex).toMatch(/1 1 0%/);
    });

    test('flex-auto should set flex: 1 1 auto', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'flex-auto' });
      const flex = await getComputedStyle(page, getSelector(testId), 'flex');
      expect(flex).toMatch(/1 1 auto/);
    });

    test('flex-none should set flex: none', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'flex-none' });
      const flex = await getComputedStyle(page, getSelector(testId), 'flex');
      expect(flex).toMatch(/none|0 0 auto/); // Browser may compute to "0 0 auto"
    });
  });
});
