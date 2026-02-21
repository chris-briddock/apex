import { test, expect } from '@playwright/test';
import { getComputedStyle } from './utils/css-test-helpers';

test.describe('Shadow Utilities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shadow-sm should have small shadow', async ({ page }) => {
    const shadow = await getComputedStyle(page, '[data-testid="shadow-sm"]', 'box-shadow');
    expect(shadow).not.toBe('none');
  });

  test('shadow should have default shadow', async ({ page }) => {
    const shadow = await getComputedStyle(page, '[data-testid="shadow"]', 'box-shadow');
    expect(shadow).not.toBe('none');
  });

  test('shadow-md should have medium shadow', async ({ page }) => {
    const shadow = await getComputedStyle(page, '[data-testid="shadow-md"]', 'box-shadow');
    expect(shadow).not.toBe('none');
  });

  test('shadow-lg should have large shadow', async ({ page }) => {
    const shadow = await getComputedStyle(page, '[data-testid="shadow-lg"]', 'box-shadow');
    expect(shadow).not.toBe('none');
  });

  test('shadow-xl should have extra large shadow', async ({ page }) => {
    const shadow = await getComputedStyle(page, '[data-testid="shadow-xl"]', 'box-shadow');
    expect(shadow).not.toBe('none');
  });

  test('shadow-2xl should have 2x large shadow', async ({ page }) => {
    const shadow = await getComputedStyle(page, '[data-testid="shadow-2xl"]', 'box-shadow');
    expect(shadow).not.toBe('none');
  });

  test('shadow-inner should have inner shadow', async ({ page }) => {
    const shadow = await getComputedStyle(page, '[data-testid="shadow-inner"]', 'box-shadow');
    expect(shadow).not.toBe('none');
    expect(shadow).toContain('inset');
  });

  test('shadow-none should have no shadow', async ({ page }) => {
    const shadow = await getComputedStyle(page, '[data-testid="shadow-none"]', 'box-shadow');
    expect(shadow).toBe('none');
  });
});
