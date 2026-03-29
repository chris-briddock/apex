import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../../__helpers__/component-helpers';
import { getComputedStyle } from '../../../__helpers__/css-test-helpers';

test.describe('Z-Index Utilities', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test('z-0 should have z-index 0', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'z-0' });
    const zIndex = await getComputedStyle(page, getSelector(testId), 'z-index');
    expect(zIndex).toBe('0');
  });

  test('z-10 should have z-index 10', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'z-10' });
    const zIndex = await getComputedStyle(page, getSelector(testId), 'z-index');
    expect(zIndex).toBe('10');
  });

  test('z-20 should have z-index 20', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'z-20' });
    const zIndex = await getComputedStyle(page, getSelector(testId), 'z-index');
    expect(zIndex).toBe('20');
  });

  test('z-30 should have z-index 30', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'z-30' });
    const zIndex = await getComputedStyle(page, getSelector(testId), 'z-index');
    expect(zIndex).toBe('30');
  });

  test('z-40 should have z-index 40', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'z-40' });
    const zIndex = await getComputedStyle(page, getSelector(testId), 'z-index');
    expect(zIndex).toBe('40');
  });

  test('z-50 should have z-index 50', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'z-50' });
    const zIndex = await getComputedStyle(page, getSelector(testId), 'z-index');
    expect(zIndex).toBe('50');
  });

  test('z-auto should have auto z-index', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'z-auto' });
    const zIndex = await getComputedStyle(page, getSelector(testId), 'z-index');
    expect(zIndex).toBe('auto');
  });
});
