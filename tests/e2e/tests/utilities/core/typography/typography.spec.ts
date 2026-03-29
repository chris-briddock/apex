import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../../__helpers__/component-helpers';
import { getComputedStyle } from '../../../__helpers__/css-test-helpers';

test.describe('Typography Utilities', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test.describe('Font Size', () => {
    test('text-xs should have 0.75rem font size', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'text-xs' });
      const fontSize = await getComputedStyle(page, getSelector(testId), 'font-size');
      expect(fontSize).toBe('12px');
    });

    test('text-sm should have 0.875rem font size', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'text-sm' });
      const fontSize = await getComputedStyle(page, getSelector(testId), 'font-size');
      expect(fontSize).toBe('14px');
    });

    test('text-base should have 1rem font size', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'text-base' });
      const fontSize = await getComputedStyle(page, getSelector(testId), 'font-size');
      expect(fontSize).toBe('16px');
    });

    test('text-lg should have 1.125rem font size', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'text-lg' });
      const fontSize = await getComputedStyle(page, getSelector(testId), 'font-size');
      expect(fontSize).toBe('18px');
    });

    test('text-xl should have 1.25rem font size', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'text-xl' });
      const fontSize = await getComputedStyle(page, getSelector(testId), 'font-size');
      expect(fontSize).toBe('20px');
    });

    test('text-2xl should have 1.5rem font size', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'text-2xl' });
      const fontSize = await getComputedStyle(page, getSelector(testId), 'font-size');
      expect(fontSize).toBe('24px');
    });
  });

  test.describe('Font Weight', () => {
    test('font-thin should have weight 100', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'font-thin' });
      const fontWeight = await getComputedStyle(page, getSelector(testId), 'font-weight');
      expect(fontWeight).toBe('100');
    });

    test('font-light should have weight 300', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'font-light' });
      const fontWeight = await getComputedStyle(page, getSelector(testId), 'font-weight');
      expect(fontWeight).toBe('300');
    });

    test('font-normal should have weight 400', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'font-normal' });
      const fontWeight = await getComputedStyle(page, getSelector(testId), 'font-weight');
      expect(fontWeight).toBe('400');
    });

    test('font-medium should have weight 500', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'font-medium' });
      const fontWeight = await getComputedStyle(page, getSelector(testId), 'font-weight');
      expect(fontWeight).toBe('500');
    });

    test('font-semibold should have weight 600', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'font-semibold' });
      const fontWeight = await getComputedStyle(page, getSelector(testId), 'font-weight');
      expect(fontWeight).toBe('600');
    });

    test('font-bold should have weight 700', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'font-bold' });
      const fontWeight = await getComputedStyle(page, getSelector(testId), 'font-weight');
      expect(fontWeight).toBe('700');
    });

    test('font-black should have weight 900', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'font-black' });
      const fontWeight = await getComputedStyle(page, getSelector(testId), 'font-weight');
      expect(fontWeight).toBe('900');
    });
  });

  test.describe('Text Alignment', () => {
    test('text-left should align left', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'text-left' });
      const textAlign = await getComputedStyle(page, getSelector(testId), 'text-align');
      expect(textAlign).toBe('left');
    });

    test('text-center should align center', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'text-center' });
      const textAlign = await getComputedStyle(page, getSelector(testId), 'text-align');
      expect(textAlign).toBe('center');
    });

    test('text-right should align right', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'text-right' });
      const textAlign = await getComputedStyle(page, getSelector(testId), 'text-align');
      expect(textAlign).toBe('right');
    });

    test('text-justify should justify text', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'text-justify' });
      const textAlign = await getComputedStyle(page, getSelector(testId), 'text-align');
      expect(textAlign).toBe('justify');
    });
  });

  test.describe('Text Transform', () => {
    test('uppercase should transform to uppercase', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'uppercase' });
      const textTransform = await getComputedStyle(page, getSelector(testId), 'text-transform');
      expect(textTransform).toBe('uppercase');
    });

    test('lowercase should transform to lowercase', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'lowercase' });
      const textTransform = await getComputedStyle(page, getSelector(testId), 'text-transform');
      expect(textTransform).toBe('lowercase');
    });

    test('capitalize should capitalize text', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'capitalize' });
      const textTransform = await getComputedStyle(page, getSelector(testId), 'text-transform');
      expect(textTransform).toBe('capitalize');
    });

    test('normal-case should not transform', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'normal-case' });
      const textTransform = await getComputedStyle(page, getSelector(testId), 'text-transform');
      expect(textTransform).toBe('none');
    });
  });

  test.describe('Line Height', () => {
    test('leading-none should have line-height 1', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'leading-none' });
      const lineHeight = await getComputedStyle(page, getSelector(testId), 'line-height');
      expect(lineHeight).toBe('16px'); // 1 * font-size (16px base)
    });

    test('leading-tight should have line-height 1.25', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'leading-tight' });
      const lineHeight = await getComputedStyle(page, getSelector(testId), 'line-height');
      expect(lineHeight).toBe('20px'); // 1.25 * 16px
    });

    test('leading-normal should have line-height 1.5', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'leading-normal' });
      const lineHeight = await getComputedStyle(page, getSelector(testId), 'line-height');
      expect(lineHeight).toBe('24px'); // 1.5 * 16px
    });

    test('leading-relaxed should have line-height 1.625', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'leading-relaxed' });
      const lineHeight = await getComputedStyle(page, getSelector(testId), 'line-height');
      expect(lineHeight).toBe('26px'); // 1.625 * 16px
    });

    test('leading-loose should have line-height 2', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'leading-loose' });
      const lineHeight = await getComputedStyle(page, getSelector(testId), 'line-height');
      expect(lineHeight).toBe('32px'); // 2 * 16px
    });
  });

  test.describe('Letter Spacing', () => {
    test('tracking-tighter should have tightest spacing', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'tracking-tighter' });
      const letterSpacing = await getComputedStyle(page, getSelector(testId), 'letter-spacing');
      expect(letterSpacing).toBe('-0.8px'); // -0.05em * 16px
    });

    test('tracking-tight should have tight spacing', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'tracking-tight' });
      const letterSpacing = await getComputedStyle(page, getSelector(testId), 'letter-spacing');
      expect(letterSpacing).toBe('-0.4px'); // -0.025em * 16px
    });

    test('tracking-normal should have normal spacing', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'tracking-normal' });
      const letterSpacing = await getComputedStyle(page, getSelector(testId), 'letter-spacing');
      // Browser may return 'normal' (keyword) or 0/0px for letter-spacing: 0
      expect(letterSpacing).toMatch(/^(normal|0(em|px)?)$/);
    });

    test('tracking-wide should have wide spacing', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'tracking-wide' });
      const letterSpacing = await getComputedStyle(page, getSelector(testId), 'letter-spacing');
      expect(letterSpacing).toBe('0.4px'); // 0.025em * 16px
    });

    test('tracking-wider should have wider spacing', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'tracking-wider' });
      const letterSpacing = await getComputedStyle(page, getSelector(testId), 'letter-spacing');
      expect(letterSpacing).toBe('0.8px'); // 0.05em * 16px
    });

    test('tracking-widest should have widest spacing', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'tracking-widest' });
      const letterSpacing = await getComputedStyle(page, getSelector(testId), 'letter-spacing');
      expect(letterSpacing).toBe('1.6px'); // 0.1em * 16px
    });
  });
});
