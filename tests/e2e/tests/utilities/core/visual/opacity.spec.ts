import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../../__helpers__/component-helpers';
import { getComputedStyle } from '../../../__helpers__/css-test-helpers';

test.describe('Opacity Utilities', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test('opacity-0 should be fully transparent', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'opacity-0' });
    const opacity = await getComputedStyle(page, getSelector(testId), 'opacity');
    expect(opacity).toBe('0');
  });

  test('opacity-25 should be 25% opaque', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'opacity-25' });
    const opacity = await getComputedStyle(page, getSelector(testId), 'opacity');
    expect(opacity).toBe('0.25');
  });

  test('opacity-50 should be 50% opaque', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'opacity-50' });
    const opacity = await getComputedStyle(page, getSelector(testId), 'opacity');
    expect(opacity).toBe('0.5');
  });

  test('opacity-75 should be 75% opaque', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'opacity-75' });
    const opacity = await getComputedStyle(page, getSelector(testId), 'opacity');
    expect(opacity).toBe('0.75');
  });

  test('opacity-100 should be fully opaque', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'opacity-100' });
    const opacity = await getComputedStyle(page, getSelector(testId), 'opacity');
    expect(opacity).toBe('1');
  });
});
