import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../../__helpers__/component-helpers';
import { getComputedStyle } from '../../../__helpers__/css-test-helpers';

test.describe('Overflow Utilities', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test('overflow-auto should show scrollbars when needed', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'overflow-auto' });
    const overflow = await getComputedStyle(page, getSelector(testId), 'overflow');
    expect(overflow).toBe('auto');
  });

  test('overflow-hidden should clip overflow', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'overflow-hidden' });
    const overflow = await getComputedStyle(page, getSelector(testId), 'overflow');
    expect(overflow).toBe('hidden');
  });

  test('overflow-visible should show overflow', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'overflow-visible' });
    const overflow = await getComputedStyle(page, getSelector(testId), 'overflow');
    expect(overflow).toBe('visible');
  });

  test('overflow-scroll should always show scrollbars', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'overflow-scroll' });
    const overflow = await getComputedStyle(page, getSelector(testId), 'overflow');
    expect(overflow).toBe('scroll');
  });

  test('overflow-x-auto should show horizontal scrollbar when needed', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'overflow-x-auto' });
    const overflowX = await getComputedStyle(page, getSelector(testId), 'overflow-x');
    expect(overflowX).toBe('auto');
  });

  test('overflow-y-auto should show vertical scrollbar when needed', async ({ page }) => {
    const testId = await createComponent(page, { classes: 'overflow-y-auto' });
    const overflowY = await getComputedStyle(page, getSelector(testId), 'overflow-y');
    expect(overflowY).toBe('auto');
  });
});
