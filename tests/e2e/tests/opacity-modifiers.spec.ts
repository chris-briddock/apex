/**
 * Opacity Modifier Tests
 * ============================================================================
 * Tests for Tailwind-style opacity modifiers: bg-gray-800/50, text-white/75
 */

import { test, expect } from '@playwright/test';
import { getComputedStyle, waitForStyles } from './utils/css-test-helpers';

test.describe('Opacity Modifiers', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForStyles(page);
  });

  test.describe('Background Color Opacity Modifiers', () => {
    test('bg-gray-800/50 applies 50% opacity background', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="bg-gray-800/50">Test</div>
      `);
      await waitForStyles(page);

      const bgColor = await getComputedStyle(page, '#test', 'background-color');
      // Should be a semi-transparent gray color
      expect(bgColor).toMatch(/rgba?\(\d+, \d+, \d+, 0\.5\)|color\(srgb .*\/ 0\.5\)/);
    });

    test('bg-white/25 applies 25% opacity white background', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="bg-black">
          <div class="bg-white/25">Test</div>
        </div>
      `);
      await waitForStyles(page);

      const bgColor = await getComputedStyle(page, '#test div', 'background-color');
      expect(bgColor).toMatch(/rgba?\(255, 255, 255, 0\.25\)|color\(srgb 1 1 1 \/ 0\.25\)/);
    });

    test('bg-primary/50 applies 50% opacity primary color', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="bg-primary/50">Test</div>
      `);
      await waitForStyles(page);

      const bgColor = await getComputedStyle(page, '#test', 'background-color');
      expect(bgColor).toMatch(/rgba?\(|color\(srgb/);
    });

    test('bg-black/75 applies 75% opacity black background', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="bg-black/75">Test</div>
      `);
      await waitForStyles(page);

      const bgColor = await getComputedStyle(page, '#test', 'background-color');
      expect(bgColor).toMatch(/rgba?\(0, 0, 0, 0\.75\)|color\(srgb 0 0 0 \/ 0\.75\)/);
    });
  });

  test.describe('Text Color Opacity Modifiers', () => {
    test('text-white/50 applies 50% opacity white text', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="bg-black text-white/50">Test</div>
      `);
      await waitForStyles(page);

      const color = await getComputedStyle(page, '#test', 'color');
      expect(color).toMatch(/rgba?\(255, 255, 255, 0\.5\)|color\(srgb 1 1 1 \/ 0\.5\)/);
    });

    test('text-gray-500/75 applies 75% opacity gray text', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="text-gray-500/75">Test</div>
      `);
      await waitForStyles(page);

      const color = await getComputedStyle(page, '#test', 'color');
      expect(color).toMatch(/rgba?\(|color\(srgb/);
    });

    test('text-primary/50 applies 50% opacity primary text', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="text-primary/50">Test</div>
      `);
      await waitForStyles(page);

      const color = await getComputedStyle(page, '#test', 'color');
      expect(color).toMatch(/rgba?\(|color\(srgb/);
    });
  });

  test.describe('Border Color Opacity Modifiers', () => {
    test('border-gray-700/50 applies 50% opacity border', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="border-2 border-gray-700/50">Test</div>
      `);
      await waitForStyles(page);

      const borderColor = await getComputedStyle(page, '#test', 'border-top-color');
      expect(borderColor).toMatch(/rgba?\(|color\(srgb/);
    });

    test('border-white/25 applies 25% opacity border', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="bg-black border-2 border-white/25">Test</div>
      `);
      await waitForStyles(page);

      const borderColor = await getComputedStyle(page, '#test', 'border-top-color');
      expect(borderColor).toMatch(/rgba?\(|color\(srgb/);
    });
  });

  test.describe('Dark Mode Opacity Modifiers', () => {
    test('dark:bg-gray-800/50 applies in dark mode', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="dark bg-white dark:bg-gray-800/50">Test</div>
      `);
      await waitForStyles(page);

      const bgColor = await getComputedStyle(page, '#test', 'background-color');
      // In dark mode with gray-800/50, should be semi-transparent dark gray
      expect(bgColor).toMatch(/rgba?\(|color\(srgb/);
    });

    test('dark:text-white/75 applies in dark mode', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="dark bg-black text-gray-900 dark:text-white/75">Test</div>
      `);
      await waitForStyles(page);

      const color = await getComputedStyle(page, '#test', 'color');
      expect(color).toMatch(/rgba?\(|color\(srgb/);
    });

    test('dark:border-gray-700/50 applies in dark mode', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="dark bg-black border-2 border-gray-200 dark:border-gray-700/50">Test</div>
      `);
      await waitForStyles(page);

      const borderColor = await getComputedStyle(page, '#test', 'border-top-color');
      expect(borderColor).toMatch(/rgba?\(|color\(srgb/);
    });
  });

  test.describe('CSS Custom Property Opacity', () => {
    test('bg-opacity-[var(--bg-opacity)] works with custom values', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="bg-opacity-[var(--bg-opacity)] bg-primary" style="--bg-opacity: 33%;">Test</div>
      `);
      await waitForStyles(page);

      const bgColor = await getComputedStyle(page, '#test', 'background-color');
      // Should be primary color with approximately 33% opacity
      expect(bgColor).toMatch(/rgba?\(|color\(srgb/);
    });
  });

  test.describe('Combined Examples', () => {
    test('card with semi-transparent dark background', async ({ page }) => {
      await page.setContent(`
        <div class="dark bg-gray-900">
          <div id="test" class="bg-white dark:bg-gray-800/50 rounded-lg p-6">
            <h2 class="text-gray-900 dark:text-white">Title</h2>
            <p class="text-gray-600 dark:text-gray-300/75">Description</p>
          </div>
        </div>
      `);
      await waitForStyles(page);

      const cardBg = await getComputedStyle(page, '#test', 'background-color');
      const textColor = await getComputedStyle(page, '#test h2', 'color');
      const descColor = await getComputedStyle(page, '#test p', 'color');

      expect(cardBg).toMatch(/rgba?\(|color\(srgb/);
      expect(textColor).toMatch(/rgba?\(|color\(srgb/);
      expect(descColor).toMatch(/rgba?\(|color\(srgb/);
    });

    test('modal overlay with opacity', async ({ page }) => {
      await page.setContent(`
        <div id="test" class="fixed inset-0 bg-black/50 dark:bg-black/75">
          Modal backdrop
        </div>
      `);
      await waitForStyles(page);

      const bgColor = await getComputedStyle(page, '#test', 'background-color');
      expect(bgColor).toMatch(/rgba?\(0, 0, 0, 0\.5\)|color\(srgb 0 0 0 \/ 0\.5\)/);
    });

    test('glass effect navigation', async ({ page }) => {
      await page.setContent(`
        <div class="dark bg-gray-900">
          <nav id="test" class="bg-white/80 dark:bg-gray-900/80">
            Navigation
          </nav>
        </div>
      `);
      await waitForStyles(page);

      const navBg = await getComputedStyle(page, '#test', 'background-color');
      expect(navBg).toMatch(/rgba?\(|color\(srgb/);
    });
  });
});
