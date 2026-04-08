import { test, expect } from '@playwright/test';
import { createComponent, getSelector, cleanupComponents } from '../../../__helpers__/component-helpers';
import { getComputedStyle } from '../../../__helpers__/css-test-helpers';

test.describe('Background Utilities', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS for isolated testing (order matters: base → themes → utilities)
    await page.addStyleTag({ path: '../../dist/base.css' });
    await page.addStyleTag({ path: '../../dist/themes.css' });
    await page.addStyleTag({ path: '../../dist/utilities.css' });
  });

  test.afterEach(async ({ page }) => {
    await cleanupComponents(page);
  });

  test.describe('Background Image', () => {
    test('bg-none should have no background image', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-none' });
      const bgImage = await getComputedStyle(page, getSelector(testId), 'background-image');
      expect(bgImage).toBe('none');
    });
  });

  test.describe('Background Size', () => {
    test('bg-auto should have auto background size', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-auto' });
      const bgSize = await getComputedStyle(page, getSelector(testId), 'background-size');
      expect(bgSize).toBe('auto');
    });

    test('bg-cover should have cover background size', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-cover' });
      const bgSize = await getComputedStyle(page, getSelector(testId), 'background-size');
      expect(bgSize).toBe('cover');
    });

    test('bg-contain should have contain background size', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-contain' });
      const bgSize = await getComputedStyle(page, getSelector(testId), 'background-size');
      expect(bgSize).toBe('contain');
    });
  });

  test.describe('Background Position', () => {
    test('bg-center should center background', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-center' });
      const bgPosition = await getComputedStyle(page, getSelector(testId), 'background-position');
      expect(bgPosition).toBe('50% 50%');
    });

    test('bg-top should position background at top', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-top' });
      const bgPosition = await getComputedStyle(page, getSelector(testId), 'background-position');
      expect(bgPosition).toBe('50% 0%');
    });

    test('bg-right should position background at right', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-right' });
      const bgPosition = await getComputedStyle(page, getSelector(testId), 'background-position');
      expect(bgPosition).toBe('100% 50%');
    });

    test('bg-bottom should position background at bottom', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-bottom' });
      const bgPosition = await getComputedStyle(page, getSelector(testId), 'background-position');
      expect(bgPosition).toBe('50% 100%');
    });

    test('bg-left should position background at left', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-left' });
      const bgPosition = await getComputedStyle(page, getSelector(testId), 'background-position');
      expect(bgPosition).toBe('0% 50%');
    });

    test('bg-left-top should position background at left top', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-left-top' });
      const bgPosition = await getComputedStyle(page, getSelector(testId), 'background-position');
      expect(bgPosition).toBe('0% 0%');
    });

    test('bg-right-top should position background at right top', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-right-top' });
      const bgPosition = await getComputedStyle(page, getSelector(testId), 'background-position');
      expect(bgPosition).toBe('100% 0%');
    });

    test('bg-left-bottom should position background at left bottom', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-left-bottom' });
      const bgPosition = await getComputedStyle(page, getSelector(testId), 'background-position');
      expect(bgPosition).toBe('0% 100%');
    });

    test('bg-right-bottom should position background at right bottom', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-right-bottom' });
      const bgPosition = await getComputedStyle(page, getSelector(testId), 'background-position');
      expect(bgPosition).toBe('100% 100%');
    });
  });

  test.describe('Background Repeat', () => {
    test('bg-repeat should repeat background', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-repeat' });
      const bgRepeat = await getComputedStyle(page, getSelector(testId), 'background-repeat');
      expect(bgRepeat).toBe('repeat');
    });

    test('bg-no-repeat should not repeat background', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-no-repeat' });
      const bgRepeat = await getComputedStyle(page, getSelector(testId), 'background-repeat');
      expect(bgRepeat).toBe('no-repeat');
    });

    test('bg-repeat-x should repeat background horizontally', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-repeat-x' });
      const bgRepeat = await getComputedStyle(page, getSelector(testId), 'background-repeat');
      expect(bgRepeat).toBe('repeat-x');
    });

    test('bg-repeat-y should repeat background vertically', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-repeat-y' });
      const bgRepeat = await getComputedStyle(page, getSelector(testId), 'background-repeat');
      expect(bgRepeat).toBe('repeat-y');
    });

    test('bg-repeat-round should use round repeat', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-repeat-round' });
      const bgRepeat = await getComputedStyle(page, getSelector(testId), 'background-repeat');
      expect(bgRepeat).toBe('round');
    });

    test('bg-repeat-space should use space repeat', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-repeat-space' });
      const bgRepeat = await getComputedStyle(page, getSelector(testId), 'background-repeat');
      expect(bgRepeat).toBe('space');
    });
  });

  test.describe('Background Attachment', () => {
    test('bg-fixed should have fixed attachment', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-fixed' });
      const bgAttachment = await getComputedStyle(page, getSelector(testId), 'background-attachment');
      expect(bgAttachment).toBe('fixed');
    });

    test('bg-local should have local attachment', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-local' });
      const bgAttachment = await getComputedStyle(page, getSelector(testId), 'background-attachment');
      expect(bgAttachment).toBe('local');
    });

    test('bg-scroll should have scroll attachment', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-scroll' });
      const bgAttachment = await getComputedStyle(page, getSelector(testId), 'background-attachment');
      expect(bgAttachment).toBe('scroll');
    });
  });

  test.describe('Background Origin', () => {
    test('bg-origin-border should have border-box origin', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-origin-border' });
      const bgOrigin = await getComputedStyle(page, getSelector(testId), 'background-origin');
      expect(bgOrigin).toBe('border-box');
    });

    test('bg-origin-padding should have padding-box origin', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-origin-padding' });
      const bgOrigin = await getComputedStyle(page, getSelector(testId), 'background-origin');
      expect(bgOrigin).toBe('padding-box');
    });

    test('bg-origin-content should have content-box origin', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-origin-content' });
      const bgOrigin = await getComputedStyle(page, getSelector(testId), 'background-origin');
      expect(bgOrigin).toBe('content-box');
    });
  });

  test.describe('Background Clip', () => {
    test('bg-clip-border should clip to border-box', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-clip-border' });
      const bgClip = await getComputedStyle(page, getSelector(testId), 'background-clip');
      expect(bgClip).toBe('border-box');
    });

    test('bg-clip-padding should clip to padding-box', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-clip-padding' });
      const bgClip = await getComputedStyle(page, getSelector(testId), 'background-clip');
      expect(bgClip).toBe('padding-box');
    });

    test('bg-clip-content should clip to content-box', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-clip-content' });
      const bgClip = await getComputedStyle(page, getSelector(testId), 'background-clip');
      expect(bgClip).toBe('content-box');
    });

    test('bg-clip-text should clip to text', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-clip-text' });
      const bgClip = await getComputedStyle(page, getSelector(testId), 'background-clip');
      // bg-clip-text uses -webkit-background-clip: text
      expect(bgClip).toBe('text');
    });
  });

  test.describe('Gradient Backgrounds', () => {
    test('bg-gradient-to-t should have gradient to top', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-gradient-to-t' });
      const bgImage = await getComputedStyle(page, getSelector(testId), 'background-image');
      expect(bgImage).toMatch(/linear-gradient/);
      expect(bgImage).toContain('to top');
    });

    test('bg-gradient-to-tr should have gradient to top-right', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-gradient-to-tr' });
      const bgImage = await getComputedStyle(page, getSelector(testId), 'background-image');
      expect(bgImage).toMatch(/linear-gradient/);
      // Browser normalizes 'to top right' to 'to right top'
      expect(bgImage).toMatch(/to (top right|right top)/);
    });

    test('bg-gradient-to-r should have gradient to right', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-gradient-to-r' });
      const bgImage = await getComputedStyle(page, getSelector(testId), 'background-image');
      expect(bgImage).toMatch(/linear-gradient/);
      expect(bgImage).toContain('to right');
    });

    test('bg-gradient-to-br should have gradient to bottom-right', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-gradient-to-br' });
      const bgImage = await getComputedStyle(page, getSelector(testId), 'background-image');
      expect(bgImage).toMatch(/linear-gradient/);
      // Browser normalizes corner directions
      expect(bgImage).toMatch(/to (bottom right|right bottom)/);
    });

    test('bg-gradient-to-b should have gradient to bottom', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-gradient-to-b' });
      const bgImage = await getComputedStyle(page, getSelector(testId), 'background-image');
      expect(bgImage).toMatch(/linear-gradient/);
      // Browser omits 'to bottom' as it's the default direction
      // Just verify it's a linear-gradient (direction is implicit)
    });

    test('bg-gradient-to-bl should have gradient to bottom-left', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-gradient-to-bl' });
      const bgImage = await getComputedStyle(page, getSelector(testId), 'background-image');
      expect(bgImage).toMatch(/linear-gradient/);
      // Browser normalizes corner directions
      expect(bgImage).toMatch(/to (bottom left|left bottom)/);
    });

    test('bg-gradient-to-l should have gradient to left', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-gradient-to-l' });
      const bgImage = await getComputedStyle(page, getSelector(testId), 'background-image');
      expect(bgImage).toMatch(/linear-gradient/);
      expect(bgImage).toContain('to left');
    });

    test('bg-gradient-to-tl should have gradient to top-left', async ({ page }) => {
      const testId = await createComponent(page, { classes: 'bg-gradient-to-tl' });
      const bgImage = await getComputedStyle(page, getSelector(testId), 'background-image');
      expect(bgImage).toMatch(/linear-gradient/);
      // Browser normalizes corner directions
      expect(bgImage).toMatch(/to (top left|left top)/);
    });
  });
});
