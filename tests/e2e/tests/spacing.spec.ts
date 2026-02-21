import { test, expect } from '@playwright/test';
import { expectCSSProperty, expectSpacing } from './utils/css-test-helpers';

test.describe('Spacing Utilities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Margin', () => {
    test('m-0 should have no margin', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="m-0"]', 'margin', '0px');
    });

    test('m-1 should have 0.25rem margin', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="m-1"]', 'margin', '4px');
    });

    test('m-2 should have 0.5rem margin', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="m-2"]', 'margin', '8px');
    });

    test('m-4 should have 1rem margin', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="m-4"]', 'margin', '16px');
    });

    test('m-8 should have 2rem margin', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="m-8"]', 'margin', '32px');
    });

    test('mt-4 should have top margin only', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="mt-4"]', 'margin-top', '16px');
    });

    test('mr-4 should have right margin only', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="mr-4"]', 'margin-right', '16px');
    });

    test('mb-4 should have bottom margin only', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="mb-4"]', 'margin-bottom', '16px');
    });

    test('ml-4 should have left margin only', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="ml-4"]', 'margin-left', '16px');
    });

    test('mx-4 should have horizontal margins', async ({ page }) => {
      await expectSpacing(page, '[data-testid="mx-4"]', {
        'margin-left': '16px',
        'margin-right': '16px',
      });
    });

    test('my-4 should have vertical margins', async ({ page }) => {
      await expectSpacing(page, '[data-testid="my-4"]', {
        'margin-top': '16px',
        'margin-bottom': '16px',
      });
    });
  });

  test.describe('Padding', () => {
    test('p-0 should have no padding', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="p-0"]', 'padding', '0px');
    });

    test('p-1 should have 0.25rem padding', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="p-1"]', 'padding', '4px');
    });

    test('p-2 should have 0.5rem padding', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="p-2"]', 'padding', '8px');
    });

    test('p-4 should have 1rem padding', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="p-4"]', 'padding', '16px');
    });

    test('p-8 should have 2rem padding', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="p-8"]', 'padding', '32px');
    });

    test('pt-4 should have top padding only', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="pt-4"]', 'padding-top', '16px');
    });

    test('pr-4 should have right padding only', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="pr-4"]', 'padding-right', '16px');
    });

    test('pb-4 should have bottom padding only', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="pb-4"]', 'padding-bottom', '16px');
    });

    test('pl-4 should have left padding only', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="pl-4"]', 'padding-left', '16px');
    });

    test('px-4 should have horizontal padding', async ({ page }) => {
      await expectSpacing(page, '[data-testid="px-4"]', {
        'padding-left': '16px',
        'padding-right': '16px',
      });
    });

    test('py-4 should have vertical padding', async ({ page }) => {
      await expectSpacing(page, '[data-testid="py-4"]', {
        'padding-top': '16px',
        'padding-bottom': '16px',
      });
    });
  });
});
