import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../../__helpers__/component-helpers';
import { getComputedStyle } from '../../../__helpers__/css-test-helpers';

test.describe('Display Utilities', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test('block display utility', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'block' });
    const display = await getComputedStyle(page, getSelector(testId), 'display');
    expect(display).toBe('block');
  });

  test('inline display utility', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'inline' });
    const display = await getComputedStyle(page, getSelector(testId), 'display');
    expect(display).toBe('inline');
  });

  test('inline-block display utility', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'inline-block' });
    const display = await getComputedStyle(page, getSelector(testId), 'display');
    expect(display).toBe('inline-block');
  });

  test('flex display utility', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'flex' });
    const display = await getComputedStyle(page, getSelector(testId), 'display');
    expect(display).toBe('flex');
  });

  test('inline-flex display utility', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'inline-flex' });
    const display = await getComputedStyle(page, getSelector(testId), 'display');
    expect(display).toBe('inline-flex');
  });

  test('grid display utility', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'grid' });
    const display = await getComputedStyle(page, getSelector(testId), 'display');
    expect(display).toBe('grid');
  });

  test('inline-grid display utility', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'inline-grid' });
    const display = await getComputedStyle(page, getSelector(testId), 'display');
    expect(display).toBe('inline-grid');
  });

  test('hidden display utility', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'hidden' });
    const display = await getComputedStyle(page, getSelector(testId), 'display');
    expect(display).toBe('none');
  });
});
