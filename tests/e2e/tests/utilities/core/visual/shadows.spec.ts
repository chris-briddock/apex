import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../../__helpers__/component-helpers';
import { getComputedStyle } from '../../../__helpers__/css-test-helpers';

test.describe('Shadow Utilities', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test('shadow-sm should have small shadow', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'shadow-sm' });
    const shadow = await getComputedStyle(page, getSelector(testId), 'box-shadow');
    expect(shadow).not.toBe('none');
  });

  test('shadow should have default shadow', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'shadow' });
    const shadow = await getComputedStyle(page, getSelector(testId), 'box-shadow');
    expect(shadow).not.toBe('none');
  });

  test('shadow-md should have medium shadow', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'shadow-md' });
    const shadow = await getComputedStyle(page, getSelector(testId), 'box-shadow');
    expect(shadow).not.toBe('none');
  });

  test('shadow-lg should have large shadow', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'shadow-lg' });
    const shadow = await getComputedStyle(page, getSelector(testId), 'box-shadow');
    expect(shadow).not.toBe('none');
  });

  test('shadow-xl should have extra large shadow', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'shadow-xl' });
    const shadow = await getComputedStyle(page, getSelector(testId), 'box-shadow');
    expect(shadow).not.toBe('none');
  });

  test('shadow-2xl should have 2x large shadow', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'shadow-2xl' });
    const shadow = await getComputedStyle(page, getSelector(testId), 'box-shadow');
    expect(shadow).not.toBe('none');
  });

  test('shadow-inner should have inner shadow', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'shadow-inner' });
    const shadow = await getComputedStyle(page, getSelector(testId), 'box-shadow');
    expect(shadow).not.toBe('none');
    expect(shadow).toContain('inset');
  });

  test('shadow-none should have no shadow', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'shadow-none' });
    const shadow = await getComputedStyle(page, getSelector(testId), 'box-shadow');
    expect(shadow).toBe('none');
  });
});
