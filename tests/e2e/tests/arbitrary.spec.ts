/**
 * Arbitrary Value Utilities Tests
 * ============================================================================
 * Tests for Tailwind-style arbitrary value support
 * e.g., min-h-[200px], w-[100px], p-[1rem]
 */

import { test, expect } from '@playwright/test';
import { getComputedStyle, waitForStyles } from './utils/css-test-helpers';

test.describe('Arbitrary Value Utilities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForStyles(page);
  });

  test.describe('Sizing with Arbitrary Values', () => {
    test('min-h-[200px] sets min-height', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="min-h-[200px]">Test</div>
      `);
      await waitForStyles(page);

      const value = await getComputedStyle(page, '#test', 'min-height');
      expect(value).toBe('200px');
    });

    test('w-[100px] sets width', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="w-[100px]">Test</div>
      `);
      await waitForStyles(page);

      const value = await getComputedStyle(page, '#test', 'width');
      expect(value).toBe('100px');
    });

    test('h-[50%] sets height', async ({ page }) => {
      await page.setContent(`
        <div style="height: 200px;">
          <div id="test" class="h-[50%]">Test</div>
        </div>
      `);
      await waitForStyles(page);

      const value = await getComputedStyle(page, '#test', 'height');
      expect(value).toBe('100px'); // 50% of 200px
    });

    test('max-w-[500px] sets max-width', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="max-w-[500px]">Test</div>
      `);
      await waitForStyles(page);

      const value = await getComputedStyle(page, '#test', 'max-width');
      expect(value).toBe('500px');
    });
  });

  test.describe('Spacing with Arbitrary Values', () => {
    test('m-[20px] sets margin', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="m-[20px]">Test</div>
      `);
      await waitForStyles(page);

      const value = await getComputedStyle(page, '#test', 'margin');
      expect(value).toBe('20px');
    });

    test('mt-[10px] sets margin-top', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="mt-[10px]">Test</div>
      `);
      await waitForStyles(page);

      const value = await getComputedStyle(page, '#test', 'margin-top');
      expect(value).toBe('10px');
    });

    test('p-[1rem] sets padding', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="p-[1rem]">Test</div>
      `);
      await waitForStyles(page);

      const value = await getComputedStyle(page, '#test', 'padding');
      expect(value).toBe('16px'); // 1rem = 16px
    });

    test('px-[20px] sets horizontal padding', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="px-[20px]">Test</div>
      `);
      await waitForStyles(page);

      const paddingLeft = await getComputedStyle(page, '#test', 'padding-left');
      const paddingRight = await getComputedStyle(page, '#test', 'padding-right');
      expect(paddingLeft).toBe('20px');
      expect(paddingRight).toBe('20px');
    });

    test('gap-[15px] sets gap', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="flex gap-[15px]">
          <div>Item 1</div>
          <div>Item 2</div>
        </div>
      `);
      await waitForStyles(page);

      const value = await getComputedStyle(page, '#test', 'gap');
      expect(value).toBe('15px');
    });
  });

  test.describe('Positioning with Arbitrary Values', () => {
    test('top-[50px] sets top position', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="relative top-[50px]">Test</div>
      `);
      await waitForStyles(page);

      const value = await getComputedStyle(page, '#test', 'top');
      expect(value).toBe('50px');
    });

    test('left-[25%] sets left position', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="relative left-[25%]">Test</div>
      `);
      await waitForStyles(page);

      const value = await getComputedStyle(page, '#test', 'left');
      expect(value).toBe('25%');
    });
  });

  test.describe('Typography with Arbitrary Values', () => {
    test('text-[24px] sets font-size', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="text-[24px]">Test</div>
      `);
      await waitForStyles(page);

      const value = await getComputedStyle(page, '#test', 'font-size');
      expect(value).toBe('24px');
    });

    test('leading-[1.5] sets line-height', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="leading-[1.5]">Test</div>
      `);
      await waitForStyles(page);

      const value = await getComputedStyle(page, '#test', 'line-height');
      expect(value).toBe('1.5');
    });
  });

  test.describe('Borders with Arbitrary Values', () => {
    test('border-[2px] sets border-width', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="border-[2px] border-solid">Test</div>
      `);
      await waitForStyles(page);

      const value = await getComputedStyle(page, '#test', 'border-width');
      expect(value).toBe('2px');
    });

    test('rounded-[8px] sets border-radius', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="rounded-[8px]">Test</div>
      `);
      await waitForStyles(page);

      const value = await getComputedStyle(page, '#test', 'border-radius');
      expect(value).toBe('8px');
    });
  });

  test.describe('CSS Custom Properties approach', () => {
    test('min-h-[var(--min-h)] with inline style', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="min-h-[var(--min-h)]" style="--min-h: 200px;">Test</div>
      `);
      await waitForStyles(page);

      const value = await getComputedStyle(page, '#test', 'min-height');
      expect(value).toBe('200px');
    });

    test('w-[var(--w)] with inline style', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="w-[var(--w)]" style="--w: 150px;">Test</div>
      `);
      await waitForStyles(page);

      const value = await getComputedStyle(page, '#test', 'width');
      expect(value).toBe('150px');
    });

    test('p-[var(--p)] with inline style', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="p-[var(--p)]" style="--p: 2rem;">Test</div>
      `);
      await waitForStyles(page);

      const value = await getComputedStyle(page, '#test', 'padding');
      expect(value).toBe('32px'); // 2rem = 32px
    });
  });

  test.describe('Responsive Arbitrary Values', () => {
    test('md:min-h-[300px] applies at medium breakpoint', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="md:min-h-[300px]">Test</div>
      `);
      await waitForStyles(page);

      // Set viewport to mobile
      await page.setViewportSize({ width: 375, height: 667 });
      await waitForStyles(page);

      let value = await getComputedStyle(page, '#test', 'min-height');
      expect(value).not.toBe('300px');

      // Set viewport to desktop
      await page.setViewportSize({ width: 1024, height: 768 });
      await waitForStyles(page);

      value = await getComputedStyle(page, '#test', 'min-height');
      expect(value).toBe('300px');
    });
  });

  test.describe('calc() expressions', () => {
    test('w-[calc(100%-20px)] works', async ({ page }) => {
      await page.setContent(`
        <div style="width: 200px;">
          <div id="test" class="w-[calc(100%-20px)]">Test</div>
        </div>
      `);
      await waitForStyles(page);

      const value = await getComputedStyle(page, '#test', 'width');
      expect(value).toBe('180px');
    });
  });
});
