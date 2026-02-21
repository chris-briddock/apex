import { test, expect } from '@playwright/test';
import { getComputedStyle } from './utils/css-test-helpers';

test.describe('Z-Index Utilities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('z-0 should have z-index 0', async ({ page }) => {
    const zIndex = await getComputedStyle(page, '[data-testid="z-0"]', 'z-index');
    expect(zIndex).toBe('0');
  });

  test('z-10 should have z-index 10', async ({ page }) => {
    const zIndex = await getComputedStyle(page, '[data-testid="z-10"]', 'z-index');
    expect(zIndex).toBe('10');
  });

  test('z-20 should have z-index 20', async ({ page }) => {
    const zIndex = await getComputedStyle(page, '[data-testid="z-20"]', 'z-index');
    expect(zIndex).toBe('20');
  });

  test('z-30 should have z-index 30', async ({ page }) => {
    const zIndex = await getComputedStyle(page, '[data-testid="z-30"]', 'z-index');
    expect(zIndex).toBe('30');
  });

  test('z-40 should have z-index 40', async ({ page }) => {
    const zIndex = await getComputedStyle(page, '[data-testid="z-40"]', 'z-index');
    expect(zIndex).toBe('40');
  });

  test('z-50 should have z-index 50', async ({ page }) => {
    const zIndex = await getComputedStyle(page, '[data-testid="z-50"]', 'z-index');
    expect(zIndex).toBe('50');
  });

  test('z-auto should have auto z-index', async ({ page }) => {
    const zIndex = await getComputedStyle(page, '[data-testid="z-auto"]', 'z-index');
    expect(zIndex).toBe('auto');
  });
});
