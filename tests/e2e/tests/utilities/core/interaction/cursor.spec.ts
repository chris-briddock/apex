import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../../__helpers__/component-helpers';
import { getComputedStyle } from '../../../__helpers__/css-test-helpers';

test.describe('Cursor Utilities', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test('cursor-auto should have auto cursor', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'cursor-auto' });
    const cursor = await getComputedStyle(page, getSelector(testId), 'cursor');
    expect(cursor).toBe('auto');
  });

  test('cursor-default should have default cursor', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'cursor-default' });
    const cursor = await getComputedStyle(page, getSelector(testId), 'cursor');
    expect(cursor).toBe('default');
  });

  test('cursor-pointer should have pointer cursor', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'cursor-pointer' });
    const cursor = await getComputedStyle(page, getSelector(testId), 'cursor');
    expect(cursor).toBe('pointer');
  });

  test('cursor-wait should have wait cursor', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'cursor-wait' });
    const cursor = await getComputedStyle(page, getSelector(testId), 'cursor');
    expect(cursor).toBe('wait');
  });

  test('cursor-text should have text cursor', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'cursor-text' });
    const cursor = await getComputedStyle(page, getSelector(testId), 'cursor');
    expect(cursor).toBe('text');
  });

  test('cursor-move should have move cursor', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'cursor-move' });
    const cursor = await getComputedStyle(page, getSelector(testId), 'cursor');
    expect(cursor).toBe('move');
  });

  test('cursor-not-allowed should have not-allowed cursor', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'cursor-not-allowed' });
    const cursor = await getComputedStyle(page, getSelector(testId), 'cursor');
    expect(cursor).toBe('not-allowed');
  });
});
