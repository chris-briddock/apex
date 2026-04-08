import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../../__helpers__/component-helpers';
import { getComputedStyle } from '../../../__helpers__/css-test-helpers';

/**
 * Helper to convert CSS time values to milliseconds for comparison
 * Handles both '75ms' and '0.075s' formats
 */
function timeToMs(value: string): number {
  if (value.endsWith('ms')) {
    return Number.parseFloat(value);
  }
  if (value.endsWith('s')) {
    return Number.parseFloat(value) * 1000;
  }
  return Number.parseFloat(value);
}

/**
 * Helper to check if a time value matches expected milliseconds
 */
function expectTimeInMs(actual: string, expectedMs: number): void {
  const actualMs = timeToMs(actual);
  expect(actualMs).toBe(expectedMs);
}

test.describe('Transition Utilities', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test.describe('Transition Property', () => {
    test('transition-none should have no transition', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition-none' });
      const transition = await getComputedStyle(page, getSelector(testId), 'transition');
      // Browser returns 'none' for transition shorthand when transition-property is none
      expect(transition).toBe('none');
    });

    test('transition-all should transition all properties', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition-all' });
      const transition = await getComputedStyle(page, getSelector(testId), 'transition');
      expect(transition).toContain('all');
    });

    test('transition should have default transition', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition' });
      const transition = await getComputedStyle(page, getSelector(testId), 'transition');
      // Default transitions common properties
      expect(transition).not.toBe('none 0s ease 0s');
    });

    test('transition-colors should transition color properties', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition-colors' });
      // Use transition-property instead of shorthand for better browser compatibility
      const transitionProperty = await getComputedStyle(page, getSelector(testId), 'transition-property');
      // Should include color-related properties
      expect(transitionProperty).toMatch(/color|background-color|border-color/);
    });

    test('transition-opacity should transition opacity', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition-opacity' });
      const transitionProperty = await getComputedStyle(page, getSelector(testId), 'transition-property');
      expect(transitionProperty).toContain('opacity');
    });

    test('transition-shadow should transition box-shadow', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition-shadow' });
      const transitionProperty = await getComputedStyle(page, getSelector(testId), 'transition-property');
      expect(transitionProperty).toMatch(/shadow|box-shadow/);
    });

    test('transition-transform should transition transform', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition-transform' });
      const transition = await getComputedStyle(page, getSelector(testId), 'transition');
      expect(transition).toContain('transform');
    });
  });

  test.describe('Transition Duration', () => {
    test('duration-75 should have 75ms duration', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition duration-75' });
      const duration = await getComputedStyle(page, getSelector(testId), 'transition-duration');
      expectTimeInMs(duration, 75);
    });

    test('duration-100 should have 100ms duration', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition duration-100' });
      const duration = await getComputedStyle(page, getSelector(testId), 'transition-duration');
      expectTimeInMs(duration, 100);
    });

    test('duration-150 should have 150ms duration', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition duration-150' });
      const duration = await getComputedStyle(page, getSelector(testId), 'transition-duration');
      expectTimeInMs(duration, 150);
    });

    test('duration-200 should have 200ms duration', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition duration-200' });
      const duration = await getComputedStyle(page, getSelector(testId), 'transition-duration');
      expectTimeInMs(duration, 200);
    });

    test('duration-300 should have 300ms duration', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition duration-300' });
      const duration = await getComputedStyle(page, getSelector(testId), 'transition-duration');
      expectTimeInMs(duration, 300);
    });

    test('duration-500 should have 500ms duration', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition duration-500' });
      const duration = await getComputedStyle(page, getSelector(testId), 'transition-duration');
      expectTimeInMs(duration, 500);
    });

    test('duration-700 should have 700ms duration', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition duration-700' });
      const duration = await getComputedStyle(page, getSelector(testId), 'transition-duration');
      expectTimeInMs(duration, 700);
    });

    test('duration-1000 should have 1000ms duration', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition duration-1000' });
      const duration = await getComputedStyle(page, getSelector(testId), 'transition-duration');
      expectTimeInMs(duration, 1000);
    });
  });

  test.describe('Transition Timing Function', () => {
    test('ease-linear should have linear timing', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition ease-linear' });
      const timing = await getComputedStyle(page, getSelector(testId), 'transition-timing-function');
      expect(timing).toBe('linear');
    });

    test('ease-in should have ease-in timing', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition ease-in' });
      const timing = await getComputedStyle(page, getSelector(testId), 'transition-timing-function');
      expect(timing).toContain('cubic-bezier');
    });

    test('ease-out should have ease-out timing', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition ease-out' });
      const timing = await getComputedStyle(page, getSelector(testId), 'transition-timing-function');
      expect(timing).toContain('cubic-bezier');
    });

    test('ease-in-out should have ease-in-out timing', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition ease-in-out' });
      const timing = await getComputedStyle(page, getSelector(testId), 'transition-timing-function');
      expect(timing).toContain('cubic-bezier');
    });

    test('ease should have default ease timing', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition ease' });
      const timing = await getComputedStyle(page, getSelector(testId), 'transition-timing-function');
      expect(timing).toContain('cubic-bezier');
    });
  });

  test.describe('Transition Delay', () => {
    test('delay-75 should have 75ms delay', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition delay-75' });
      const delay = await getComputedStyle(page, getSelector(testId), 'transition-delay');
      expectTimeInMs(delay, 75);
    });

    test('delay-150 should have 150ms delay', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition delay-150' });
      const delay = await getComputedStyle(page, getSelector(testId), 'transition-delay');
      expectTimeInMs(delay, 150);
    });

    test('delay-300 should have 300ms delay', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition delay-300' });
      const delay = await getComputedStyle(page, getSelector(testId), 'transition-delay');
      expectTimeInMs(delay, 300);
    });

    test('delay-500 should have 500ms delay', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition delay-500' });
      const delay = await getComputedStyle(page, getSelector(testId), 'transition-delay');
      expectTimeInMs(delay, 500);
    });

    test('delay-700 should have 700ms delay', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition delay-700' });
      const delay = await getComputedStyle(page, getSelector(testId), 'transition-delay');
      expectTimeInMs(delay, 700);
    });

    test('delay-1000 should have 1000ms delay', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'transition delay-1000' });
      const delay = await getComputedStyle(page, getSelector(testId), 'transition-delay');
      expectTimeInMs(delay, 1000);
    });
  });
});
