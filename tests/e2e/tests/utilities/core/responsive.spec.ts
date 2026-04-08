import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../__helpers__/component-helpers';
import { getComputedStyle } from '../../__helpers__/css-test-helpers';

// Helper to check if running on mobile browser
const isMobileBrowser = (projectName: string) =>
  projectName === 'Mobile Chrome' || projectName === 'Mobile Safari';

test.describe('Responsive Utilities', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test.describe('Small Breakpoint (sm:*)', () => {
    test('sm:block should apply block at sm breakpoint', async ({ page }) => {
      // Set viewport to sm breakpoint (640px)
      await page.setViewportSize({ width: 640, height: 480 });
      const testId = await createComponent(page, { classes: 'sm:block' });
      const display = await getComputedStyle(page, getSelector(testId), 'display');
      expect(display).toBe('block');
    });

    test('sm:flex should apply flex at sm breakpoint', async ({ page }) => {
      await page.setViewportSize({ width: 640, height: 480 });
      const testId = await createComponent(page, { classes: 'sm:flex' });
      const display = await getComputedStyle(page, getSelector(testId), 'display');
      expect(display).toBe('flex');
    });

    test('sm:hidden should apply hidden at sm breakpoint', async ({ page }) => {
      await page.setViewportSize({ width: 640, height: 480 });
      const testId = await createComponent(page, { classes: 'sm:hidden' });
      const display = await getComputedStyle(page, getSelector(testId), 'display');
      expect(display).toBe('none');
    });

    test('sm:text-center should center text at sm breakpoint', async ({ page }) => {
      await page.setViewportSize({ width: 640, height: 480 });
      const testId = await createComponent(page, { classes: 'sm:text-center' });
      const textAlign = await getComputedStyle(page, getSelector(testId), 'text-align');
      expect(textAlign).toBe('center');
    });

    test('sm:p-4 should apply padding at sm breakpoint', async ({ page }) => {
      await page.setViewportSize({ width: 640, height: 480 });
      const testId = await createComponent(page, { classes: 'sm:p-4' });
      const padding = await getComputedStyle(page, getSelector(testId), 'padding');
      expect(padding).toBe('16px');
    });
  });

  test.describe('Medium Breakpoint (md:*)', () => {
    test('md:block should apply block at md breakpoint', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 480 });
      const testId = await createComponent(page, { classes: 'md:block' });
      const display = await getComputedStyle(page, getSelector(testId), 'display');
      expect(display).toBe('block');
    });

    test('md:flex should apply flex at md breakpoint', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 480 });
      const testId = await createComponent(page, { classes: 'md:flex' });
      const display = await getComputedStyle(page, getSelector(testId), 'display');
      expect(display).toBe('flex');
    });

    test('md:grid-cols-2 should apply 2 column grid at md breakpoint', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 480 });
      const testId = await createComponent(page, { classes: 'md:grid md:grid-cols-2', styles: { width: '400px' } });
      const gridTemplateColumns = await getComputedStyle(page, getSelector(testId), 'grid-template-columns');
      const columns = gridTemplateColumns.trim().split(/\s+/);
      expect(columns.length).toBe(2);
    });

    test('md:text-lg should apply large text at md breakpoint', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 480 });
      const testId = await createComponent(page, { classes: 'md:text-lg' });
      const fontSize = await getComputedStyle(page, getSelector(testId), 'font-size');
      expect(fontSize).toBe('18px');
    });
  });

  test.describe('Large Breakpoint (lg:*)', () => {
    test('lg:block should apply block at lg breakpoint', async ({ page }) => {
      await page.setViewportSize({ width: 1024, height: 480 });
      const testId = await createComponent(page, { classes: 'lg:block' });
      const display = await getComputedStyle(page, getSelector(testId), 'display');
      expect(display).toBe('block');
    });

    test('lg:flex-row should apply row direction at lg breakpoint', async ({ page }) => {
      await page.setViewportSize({ width: 1024, height: 480 });
      const testId = await createComponent(page, { classes: 'lg:flex-row' });
      const flexDirection = await getComputedStyle(page, getSelector(testId), 'flex-direction');
      expect(flexDirection).toBe('row');
    });

    test('lg:grid-cols-3 should apply 3 column grid at lg breakpoint', async ({ page }) => {
      await page.setViewportSize({ width: 1024, height: 480 });
      const testId = await createComponent(page, { classes: 'lg:grid-cols-3', styles: { width: '600px' } });
      const gridTemplateColumns = await getComputedStyle(page, getSelector(testId), 'grid-template-columns');
      const columns = gridTemplateColumns.trim().split(/\s+/);
      expect(columns.length).toBe(3);
    });

    test('lg:p-8 should apply larger padding at lg breakpoint', async ({ page }) => {
      await page.setViewportSize({ width: 1024, height: 480 });
      const testId = await createComponent(page, { classes: 'lg:p-8' });
      const padding = await getComputedStyle(page, getSelector(testId), 'padding');
      expect(padding).toBe('32px');
    });
  });

  test.describe('Extra Large Breakpoint (xl:*)', () => {
    test('xl:block should apply block at xl breakpoint', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 480 });
      const testId = await createComponent(page, { classes: 'xl:block' });
      const display = await getComputedStyle(page, getSelector(testId), 'display');
      expect(display).toBe('block');
    });

    test('xl:grid-cols-4 should apply 4 column grid at xl breakpoint', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 480 });
      const testId = await createComponent(page, { classes: 'xl:grid xl:grid-cols-4', styles: { width: '800px' } });
      const gridTemplateColumns = await getComputedStyle(page, getSelector(testId), 'grid-template-columns');
      const columns = gridTemplateColumns.trim().split(/\s+/);
      expect(columns.length).toBe(4);
    });

    test('xl:text-xl should apply extra large text at xl breakpoint', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 480 });
      const testId = await createComponent(page, { classes: 'xl:text-xl' });
      const fontSize = await getComputedStyle(page, getSelector(testId), 'font-size');
      expect(fontSize).toBe('20px');
    });
  });

  test.describe('XXL Breakpoint (xxl:*)', () => {
    test('xxl:block should apply block at xxl breakpoint', async ({ page }) => {
      await page.setViewportSize({ width: 2560, height: 480 });
      const testId = await createComponent(page, { classes: 'xxl:block' });
      const display = await getComputedStyle(page, getSelector(testId), 'display');
      expect(display).toBe('block');
    });

    test('xxl:grid-cols-6 should apply 6 column grid at xxl breakpoint', async ({ page }) => {
      await page.setViewportSize({ width: 2560, height: 480 });
      const testId = await createComponent(page, { classes: 'xxl:grid xxl:grid-cols-6', styles: { width: '1200px' } });
      const gridTemplateColumns = await getComputedStyle(page, getSelector(testId), 'grid-template-columns');
      const columns = gridTemplateColumns.trim().split(/\s+/);
      expect(columns.length).toBe(6);
    });
  });

  test.describe('Responsive Override Behavior', () => {
    test('smaller breakpoint styles should be overridden by larger breakpoints', async ({ page }) => {
      // At md breakpoint, sm styles should be overridden
      await page.setViewportSize({ width: 768, height: 480 });
      const testId = await createComponent(page, { classes: 'sm:text-sm md:text-lg' });
      const fontSize = await getComputedStyle(page, getSelector(testId), 'font-size');
      expect(fontSize).toBe('18px'); // md:text-lg value
    });

    test('multiple responsive classes should stack correctly', async ({ page }) => {
      await page.setViewportSize({ width: 1024, height: 480 });
      const testId = await createComponent(page, { classes: 'sm:p-2 md:p-4 lg:p-8' });
      const padding = await getComputedStyle(page, getSelector(testId), 'padding');
      expect(padding).toBe('32px'); // lg:p-8 value
    });

    // Note: Viewport-based tests are unreliable on mobile device emulation due to DPR
    // These tests work correctly on desktop browsers
    test('base class should apply below breakpoint', async ({ page }, testInfo) => {
      // Skip on mobile browsers - viewport behavior differs due to device pixel ratio
      test.skip(isMobileBrowser(testInfo.project.name), 'Viewport-based tests unreliable on mobile emulation');
      // Below sm breakpoint (320px), base class should apply
      // Use 280px to ensure we're well below the 320px sm breakpoint
      await page.setViewportSize({ width: 280, height: 480 });
      const testId = await createComponent(page, { classes: 'text-sm sm:text-lg' });
      const fontSize = await getComputedStyle(page, getSelector(testId), 'font-size');
      expect(fontSize).toBe('14px'); // text-sm value
    });
  });

  test.describe('Responsive Display Utilities', () => {
    // Note: Viewport-based tests are unreliable on mobile device emulation due to DPR
    test('responsive hidden utility', async ({ page }, testInfo) => {
      // Skip on mobile browsers - viewport behavior differs due to device pixel ratio
      test.skip(isMobileBrowser(testInfo.project.name), 'Viewport-based tests unreliable on mobile emulation');
      // Hidden on small screens, visible on larger
      // Use 400px to ensure we're below md (768px) but above sm (320px)
      await page.setViewportSize({ width: 400, height: 480 });
      const testId = await createComponent(page, { classes: 'hidden md:block' });
      let display = await getComputedStyle(page, getSelector(testId), 'display');
      expect(display).toBe('none');

      await page.setViewportSize({ width: 800, height: 480 });
      display = await getComputedStyle(page, getSelector(testId), 'display');
      expect(display).toBe('block');
    });

    test('responsive flex utilities', async ({ page }) => {
      await page.setViewportSize({ width: 1024, height: 480 });
      const testId = await createComponent(page, { classes: 'sm:flex-col lg:flex-row' });
      const flexDirection = await getComputedStyle(page, getSelector(testId), 'flex-direction');
      expect(flexDirection).toBe('row'); // lg:flex-row at lg breakpoint
    });
  });

  test.describe('Responsive Spacing Utilities', () => {
    test('responsive padding', async ({ page }) => {
      await page.setViewportSize({ width: 1024, height: 480 });
      const testId = await createComponent(page, { classes: 'sm:p-2 md:p-4 lg:p-6 xl:p-8' });
      const padding = await getComputedStyle(page, getSelector(testId), 'padding');
      expect(padding).toBe('24px'); // lg:p-6 value
    });

    test('responsive margin', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 480 });
      const testId = await createComponent(page, { classes: 'sm:m-2 md:m-4' });
      const margin = await getComputedStyle(page, getSelector(testId), 'margin');
      expect(margin).toBe('16px'); // md:m-4 value
    });
  });

  test.describe('Responsive Typography Utilities', () => {
    test('responsive font size progression', async ({ page }, testInfo) => {
      // Skip on mobile browsers - viewport behavior differs due to device pixel ratio
      test.skip(isMobileBrowser(testInfo.project.name), 'Viewport-based tests unreliable on mobile emulation');
      // Test at sm breakpoint (320px)
      await page.setViewportSize({ width: 400, height: 480 });
      const testId = await createComponent(page, { classes: 'text-sm sm:text-base md:text-lg lg:text-xl' });
      let fontSize = await getComputedStyle(page, getSelector(testId), 'font-size');
      expect(fontSize).toBe('16px'); // sm:text-base

      // Test at md breakpoint (768px)
      await page.setViewportSize({ width: 800, height: 480 });
      fontSize = await getComputedStyle(page, getSelector(testId), 'font-size');
      expect(fontSize).toBe('18px'); // md:text-lg

      // Test at lg breakpoint (1024px)
      await page.setViewportSize({ width: 1100, height: 480 });
      fontSize = await getComputedStyle(page, getSelector(testId), 'font-size');
      expect(fontSize).toBe('20px'); // lg:text-xl
    });
  });
});
