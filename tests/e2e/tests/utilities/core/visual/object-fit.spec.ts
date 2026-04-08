import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../../__helpers__/component-helpers';
import { getComputedStyle } from '../../../__helpers__/css-test-helpers';

test.describe('Object Fit Utilities', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test.describe('Object Fit', () => {
    test('object-contain should scale content to fit', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'object-contain' });
      const objectFit = await getComputedStyle(page, getSelector(testId), 'object-fit');
      expect(objectFit).toBe('contain');
    });

    test('object-cover should scale content to cover', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'object-cover' });
      const objectFit = await getComputedStyle(page, getSelector(testId), 'object-fit');
      expect(objectFit).toBe('cover');
    });

    test('object-fill should stretch content', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'object-fill' });
      const objectFit = await getComputedStyle(page, getSelector(testId), 'object-fit');
      expect(objectFit).toBe('fill');
    });

    test('object-none should not resize content', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'object-none' });
      const objectFit = await getComputedStyle(page, getSelector(testId), 'object-fit');
      expect(objectFit).toBe('none');
    });

    test('object-scale-down should scale down only', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'object-scale-down' });
      const objectFit = await getComputedStyle(page, getSelector(testId), 'object-fit');
      expect(objectFit).toBe('scale-down');
    });
  });

  test.describe('Object Position', () => {
    test('object-bottom should position at bottom', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'object-bottom' });
      const objectPosition = await getComputedStyle(page, getSelector(testId), 'object-position');
      expect(objectPosition).toBe('50% 100%');
    });

    test('object-center should position at center', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'object-center' });
      const objectPosition = await getComputedStyle(page, getSelector(testId), 'object-position');
      expect(objectPosition).toBe('50% 50%');
    });

    test('object-left should position at left', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'object-left' });
      const objectPosition = await getComputedStyle(page, getSelector(testId), 'object-position');
      expect(objectPosition).toBe('0% 50%');
    });

    test('object-left-bottom should position at left bottom', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'object-left-bottom' });
      const objectPosition = await getComputedStyle(page, getSelector(testId), 'object-position');
      expect(objectPosition).toBe('0% 100%');
    });

    test('object-left-top should position at left top', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'object-left-top' });
      const objectPosition = await getComputedStyle(page, getSelector(testId), 'object-position');
      expect(objectPosition).toBe('0% 0%');
    });

    test('object-right should position at right', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'object-right' });
      const objectPosition = await getComputedStyle(page, getSelector(testId), 'object-position');
      expect(objectPosition).toBe('100% 50%');
    });

    test('object-right-bottom should position at right bottom', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'object-right-bottom' });
      const objectPosition = await getComputedStyle(page, getSelector(testId), 'object-position');
      expect(objectPosition).toBe('100% 100%');
    });

    test('object-right-top should position at right top', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'object-right-top' });
      const objectPosition = await getComputedStyle(page, getSelector(testId), 'object-position');
      expect(objectPosition).toBe('100% 0%');
    });

    test('object-top should position at top', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'object-top' });
      const objectPosition = await getComputedStyle(page, getSelector(testId), 'object-position');
      expect(objectPosition).toBe('50% 0%');
    });
  });
});
