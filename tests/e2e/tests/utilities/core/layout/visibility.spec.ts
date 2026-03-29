import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../../__helpers__/component-helpers';
import { getComputedStyle } from '../../../__helpers__/css-test-helpers';

test.describe('Visibility Utilities', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test('visible should be visible', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'visible' });
    const visibility = await getComputedStyle(page, getSelector(testId), 'visibility');
    expect(visibility).toBe('visible');
  });

  test('invisible should be hidden', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'invisible' });
    const visibility = await getComputedStyle(page, getSelector(testId), 'visibility');
    expect(visibility).toBe('hidden');
  });
});
