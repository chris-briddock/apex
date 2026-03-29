import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../../__helpers__/component-helpers';
import { getComputedStyle } from '../../../__helpers__/css-test-helpers';

test.describe('Grid Utilities', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test.describe('Grid Template Columns', () => {
    test('grid-cols-1 should create single column grid', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'grid grid-cols-1',
        styles: { width: '400px' }
      });
      const gridTemplateColumns = await getComputedStyle(page, getSelector(testId), 'grid-template-columns');
      // Browser computes repeat() to actual pixel values
      expect(gridTemplateColumns).toMatch(/\d+px/);
    });

    test('grid-cols-2 should create two column grid', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'grid grid-cols-2',
        styles: { width: '400px' }
      });
      const gridTemplateColumns = await getComputedStyle(page, getSelector(testId), 'grid-template-columns');
      // Should have 2 columns (2 pixel values separated by space)
      const columns = gridTemplateColumns.trim().split(/\s+/);
      expect(columns.length).toBe(2);
      expect(columns[0]).toMatch(/\d+px/);
      expect(columns[1]).toMatch(/\d+px/);
    });

    test('grid-cols-3 should create three column grid', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'grid grid-cols-3',
        styles: { width: '600px' }
      });
      const gridTemplateColumns = await getComputedStyle(page, getSelector(testId), 'grid-template-columns');
      // Should have 3 columns
      const columns = gridTemplateColumns.trim().split(/\s+/);
      expect(columns.length).toBe(3);
    });

    test('grid-cols-4 should create four column grid', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'grid grid-cols-4',
        styles: { width: '800px' }
      });
      const gridTemplateColumns = await getComputedStyle(page, getSelector(testId), 'grid-template-columns');
      // Should have 4 columns
      const columns = gridTemplateColumns.trim().split(/\s+/);
      expect(columns.length).toBe(4);
    });

    test('grid-cols-12 should create twelve column grid', async ({ page }) => {
      const testId = await createComponent(page, {
        classes: 'grid grid-cols-12',
        styles: { width: '1200px' }
      });
      const gridTemplateColumns = await getComputedStyle(page, getSelector(testId), 'grid-template-columns');
      // Should have 12 columns
      const columns = gridTemplateColumns.trim().split(/\s+/);
      expect(columns.length).toBe(12);
    });
  });

  test.describe('Grid Column Span', () => {
    test('col-span-1 should span 1 column', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'col-span-1' });
      const gridColumn = await getComputedStyle(page, getSelector(testId), 'grid-column');
      expect(gridColumn).toBe('span 1 / span 1');
    });

    test('col-span-2 should span 2 columns', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'col-span-2' });
      const gridColumn = await getComputedStyle(page, getSelector(testId), 'grid-column');
      expect(gridColumn).toBe('span 2 / span 2');
    });

    test('col-span-full should span all columns', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'col-span-full' });
      const gridColumn = await getComputedStyle(page, getSelector(testId), 'grid-column');
      expect(gridColumn).toBe('1 / -1');
    });
  });

  test.describe('Gap', () => {
    test('gap-0 should have no gap', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'grid gap-0' });
      const gap = await getComputedStyle(page, getSelector(testId), 'gap');
      expect(gap).toBe('0px');
    });

    test('gap-1 should have small gap', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'grid gap-1' });
      const gap = await getComputedStyle(page, getSelector(testId), 'gap');
      expect(gap).toBe('4px');
    });

    test('gap-4 should have medium gap', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'grid gap-4' });
      const gap = await getComputedStyle(page, getSelector(testId), 'gap');
      expect(gap).toBe('16px');
    });

    test('gap-8 should have large gap', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'grid gap-8' });
      const gap = await getComputedStyle(page, getSelector(testId), 'gap');
      expect(gap).toBe('32px');
    });
  });
});
