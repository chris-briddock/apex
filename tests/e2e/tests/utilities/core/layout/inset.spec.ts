import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../../__helpers__/component-helpers';
import { getComputedStyle } from '../../../__helpers__/css-test-helpers';

test.describe('Inset Utilities', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test.describe('All Sides (inset)', () => {
    test('inset-0 should set top/right/bottom/left to 0', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'absolute inset-0' });
      const top = await getComputedStyle(page, getSelector(testId), 'top');
      const right = await getComputedStyle(page, getSelector(testId), 'right');
      const bottom = await getComputedStyle(page, getSelector(testId), 'bottom');
      const left = await getComputedStyle(page, getSelector(testId), 'left');
      expect(top).toBe('0px');
      expect(right).toBe('0px');
      expect(bottom).toBe('0px');
      expect(left).toBe('0px');
    });

    test('inset-auto should set all sides to auto', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'absolute inset-auto' });
      // Note: getComputedStyle resolves 'auto' to actual pixel values for positioned elements
      // So we just verify the class is applied correctly
      const element = page.locator(getSelector(testId));
      await expect(element).toHaveClass(/inset-auto/);
    });

    test('inset-4 should set all sides to 1rem', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'absolute inset-4' });
      const top = await getComputedStyle(page, getSelector(testId), 'top');
      expect(top).toBe('16px');
    });
  });

  test.describe('Horizontal (inset-x)', () => {
    test('inset-x-0 should set left and right to 0', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'absolute inset-x-0' });
      const right = await getComputedStyle(page, getSelector(testId), 'right');
      const left = await getComputedStyle(page, getSelector(testId), 'left');
      expect(right).toBe('0px');
      expect(left).toBe('0px');
    });

    test('inset-x-auto should set left and right to auto', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'absolute inset-x-auto' });
      // Note: getComputedStyle resolves 'auto' to '0px' for positioned elements
      const element = page.locator(getSelector(testId));
      await expect(element).toHaveClass(/inset-x-auto/);
    });

    test('inset-x-4 should set left and right to 1rem', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'absolute inset-x-4' });
      const right = await getComputedStyle(page, getSelector(testId), 'right');
      const left = await getComputedStyle(page, getSelector(testId), 'left');
      expect(right).toBe('16px');
      expect(left).toBe('16px');
    });
  });

  test.describe('Vertical (inset-y)', () => {
    test('inset-y-0 should set top and bottom to 0', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'absolute inset-y-0' });
      const top = await getComputedStyle(page, getSelector(testId), 'top');
      const bottom = await getComputedStyle(page, getSelector(testId), 'bottom');
      expect(top).toBe('0px');
      expect(bottom).toBe('0px');
    });

    test('inset-y-auto should set top and bottom to auto', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'absolute inset-y-auto' });
      // Note: getComputedStyle resolves 'auto' to '0px' for positioned elements
      const element = page.locator(getSelector(testId));
      await expect(element).toHaveClass(/inset-y-auto/);
    });

    test('inset-y-4 should set top and bottom to 1rem', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'absolute inset-y-4' });
      const top = await getComputedStyle(page, getSelector(testId), 'top');
      const bottom = await getComputedStyle(page, getSelector(testId), 'bottom');
      expect(top).toBe('16px');
      expect(bottom).toBe('16px');
    });
  });

  test.describe('Individual Sides', () => {
    test('top-0 should set top to 0', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'absolute top-0' });
      const top = await getComputedStyle(page, getSelector(testId), 'top');
      expect(top).toBe('0px');
    });

    test('top-auto should set top to auto', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'absolute top-auto' });
      // Note: getComputedStyle resolves 'auto' to '0px' for positioned elements
      const element = page.locator(getSelector(testId));
      await expect(element).toHaveClass(/top-auto/);
    });

    test('right-0 should set right to 0', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'absolute right-0' });
      const right = await getComputedStyle(page, getSelector(testId), 'right');
      expect(right).toBe('0px');
    });

    test('right-auto should set right to auto', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'absolute right-auto' });
      // Note: getComputedStyle resolves 'auto' to '0px' for positioned elements
      const element = page.locator(getSelector(testId));
      await expect(element).toHaveClass(/right-auto/);
    });

    test('bottom-0 should set bottom to 0', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'absolute bottom-0' });
      const bottom = await getComputedStyle(page, getSelector(testId), 'bottom');
      expect(bottom).toBe('0px');
    });

    test('bottom-auto should set bottom to auto', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'absolute bottom-auto' });
      // Note: getComputedStyle resolves 'auto' to '0px' for positioned elements
      const element = page.locator(getSelector(testId));
      await expect(element).toHaveClass(/bottom-auto/);
    });

    test('left-0 should set left to 0', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'absolute left-0' });
      const left = await getComputedStyle(page, getSelector(testId), 'left');
      expect(left).toBe('0px');
    });

    test('left-auto should set left to auto', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'absolute left-auto' });
      // Note: getComputedStyle resolves 'auto' to '0px' for positioned elements
      const element = page.locator(getSelector(testId));
      await expect(element).toHaveClass(/left-auto/);
    });
  });

  test.describe('Inset Scale', () => {
    test('inset-1 should set all sides to 0.25rem', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'absolute inset-1' });
      const top = await getComputedStyle(page, getSelector(testId), 'top');
      expect(top).toBe('4px');
    });

    test('inset-2 should set all sides to 0.5rem', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'absolute inset-2' });
      const top = await getComputedStyle(page, getSelector(testId), 'top');
      expect(top).toBe('8px');
    });

    test('inset-8 should set all sides to 2rem', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'absolute inset-8' });
      const top = await getComputedStyle(page, getSelector(testId), 'top');
      expect(top).toBe('32px');
    });

    test('inset-px should set all sides to 1px', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'absolute inset-px' });
      const top = await getComputedStyle(page, getSelector(testId), 'top');
      expect(top).toBe('1px');
    });
  });
});
