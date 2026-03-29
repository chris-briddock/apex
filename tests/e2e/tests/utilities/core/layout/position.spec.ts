import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../../__helpers__/component-helpers';
import { getComputedStyle } from '../../../__helpers__/css-test-helpers';

test.describe('Position Utilities', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test('static position utility', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'static' });
    const position = await getComputedStyle(page, getSelector(testId), 'position');
    expect(position).toBe('static');
  });

  test('relative position utility', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'relative' });
    const position = await getComputedStyle(page, getSelector(testId), 'position');
    expect(position).toBe('relative');
  });

  test('absolute position utility', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'absolute' });
    const position = await getComputedStyle(page, getSelector(testId), 'position');
    expect(position).toBe('absolute');
  });

  test('fixed position utility', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'fixed' });
    const position = await getComputedStyle(page, getSelector(testId), 'position');
    expect(position).toBe('fixed');
  });

  test('sticky position utility', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'sticky' });
    const position = await getComputedStyle(page, getSelector(testId), 'position');
    expect(position).toBe('sticky');
  });
});
