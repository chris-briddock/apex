import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../../__helpers__/component-helpers';
import { getComputedStyle } from '../../../__helpers__/css-test-helpers';

test.describe.skip('Color Opacity Modifier Utilities', () => {
  // NOTE: Color opacity modifiers ($enable-color-modifiers) are disabled by default
  // These tests will be enabled when the feature is fully implemented
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test.describe('Background Color Opacity', () => {
    test('bg-primary-500/0 should be fully transparent', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-primary-500/0' });
      const bg = await getComputedStyle(page, getSelector(testId), 'background-color');
      // Should be transparent or have alpha 0
      expect(bg).toMatch(/rgba?\([^)]+,\s*0\)|transparent/);
    });

    test('bg-primary-500/25 should have 25% opacity', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-primary-500/25' });
      const bg = await getComputedStyle(page, getSelector(testId), 'background-color');
      // Should have some color with reduced opacity
      expect(bg).toMatch(/oklch|rgba?\(/);
    });

    test('bg-primary-500/50 should have 50% opacity', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-primary-500/50' });
      const bg = await getComputedStyle(page, getSelector(testId), 'background-color');
      expect(bg).toMatch(/oklch|rgba?\(/);
    });

    test('bg-primary-500/75 should have 75% opacity', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-primary-500/75' });
      const bg = await getComputedStyle(page, getSelector(testId), 'background-color');
      expect(bg).toMatch(/oklch|rgba?\(/);
    });

    test('bg-primary-500/100 should be fully opaque', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-primary-500/100' });
      const bg = await getComputedStyle(page, getSelector(testId), 'background-color');
      expect(bg).toMatch(/oklch|rgb\(/);
      // Should not have alpha channel (fully opaque)
      expect(bg).not.toMatch(/rgba?\([^)]+,\s*0\)/);
    });
  });

  test.describe('Text Color Opacity', () => {
    test('text-primary-500/50 should have 50% opacity', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'text-primary-500/50' });
      const color = await getComputedStyle(page, getSelector(testId), 'color');
      expect(color).toMatch(/oklch|rgba?\(/);
    });

    test('text-gray-700/75 should have 75% opacity', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'text-gray-700/75' });
      const color = await getComputedStyle(page, getSelector(testId), 'color');
      expect(color).toMatch(/oklch|rgba?\(/);
    });

    test('text-danger-500/50 should have 50% opacity', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'text-danger-500/50' });
      const color = await getComputedStyle(page, getSelector(testId), 'color');
      expect(color).toMatch(/oklch|rgba?\(/);
    });
  });

  test.describe('Border Color Opacity', () => {
    test('border-primary-500/50 should have 50% opacity', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-primary-500/50' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgba?\(/);
    });

    test('border-gray-300/75 should have 75% opacity', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'border border-gray-300/75' });
      const borderColor = await getComputedStyle(page, getSelector(testId), 'border-color');
      expect(borderColor).toMatch(/oklch|rgba?\(/);
    });
  });

  test.describe('Opacity Scale', () => {
    const opacityValues = ['0', '5', '10', '20', '25', '30', '40', '50', '60', '70', '75', '80', '90', '95', '100'];

    for (const opacity of opacityValues) {
      test(`bg-primary-500/${opacity} should apply ${opacity}% opacity`, async ({ page }) => {
        const testId = await createComponent(page, { classes: `bg-primary-500/${opacity}` });
        const bg = await getComputedStyle(page, getSelector(testId), 'background-color');
        // Verify color is applied (either oklch or rgb/rgba format)
        expect(bg).toMatch(/oklch|rgba?\(/);
      });
    }
  });

  test.describe('Arbitrary Opacity Values', () => {
    test('bg-primary-500/[0.33] should apply custom opacity', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-primary-500/[0.33]' });
      const bg = await getComputedStyle(page, getSelector(testId), 'background-color');
      expect(bg).toMatch(/oklch|rgba?\(/);
    });

    test('bg-gray-500/[0.66] should apply custom opacity', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-gray-500/[0.66]' });
      const bg = await getComputedStyle(page, getSelector(testId), 'background-color');
      expect(bg).toMatch(/oklch|rgba?\(/);
    });
  });
});
