import { test } from '@playwright/test';
import { expectCSSProperty, expectTypography } from './utils/css-test-helpers';

test.describe('Typography Utilities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Font Size', () => {
    test('text-xs should have 0.75rem font size', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="text-xs"]', 'font-size', '12px');
    });

    test('text-sm should have 0.875rem font size', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="text-sm"]', 'font-size', '14px');
    });

    test('text-base should have 1rem font size', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="text-base"]', 'font-size', '16px');
    });

    test('text-lg should have 1.125rem font size', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="text-lg"]', 'font-size', '18px');
    });

    test('text-xl should have 1.25rem font size', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="text-xl"]', 'font-size', '20px');
    });

    test('text-2xl should have 1.5rem font size', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="text-2xl"]', 'font-size', '24px');
    });
  });

  test.describe('Font Weight', () => {
    test('font-thin should have weight 100', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="font-thin"]', 'font-weight', '100');
    });

    test('font-light should have weight 300', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="font-light"]', 'font-weight', '300');
    });

    test('font-normal should have weight 400', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="font-normal"]', 'font-weight', '400');
    });

    test('font-medium should have weight 500', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="font-medium"]', 'font-weight', '500');
    });

    test('font-semibold should have weight 600', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="font-semibold"]', 'font-weight', '600');
    });

    test('font-bold should have weight 700', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="font-bold"]', 'font-weight', '700');
    });

    test('font-black should have weight 900', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="font-black"]', 'font-weight', '900');
    });
  });

  test.describe('Text Alignment', () => {
    test('text-left should align left', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="text-left"]', 'text-align', 'left');
    });

    test('text-center should align center', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="text-center"]', 'text-align', 'center');
    });

    test('text-right should align right', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="text-right"]', 'text-align', 'right');
    });

    test('text-justify should justify text', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="text-justify"]', 'text-align', 'justify');
    });
  });

  test.describe('Text Transform', () => {
    test('uppercase should transform to uppercase', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="uppercase"]', 'text-transform', 'uppercase');
    });

    test('lowercase should transform to lowercase', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="lowercase"]', 'text-transform', 'lowercase');
    });

    test('capitalize should capitalize text', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="capitalize"]', 'text-transform', 'capitalize');
    });

    test('normal-case should not transform', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="normal-case"]', 'text-transform', 'none');
    });
  });

  test.describe('Line Height', () => {
    test('leading-none should have line-height 1', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="leading-none"]', 'line-height', '1');
    });

    test('leading-tight should have line-height 1.25', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="leading-tight"]', 'line-height', '1.25');
    });

    test('leading-normal should have line-height 1.5', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="leading-normal"]', 'line-height', '1.5');
    });

    test('leading-relaxed should have line-height 1.625', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="leading-relaxed"]', 'line-height', '1.625');
    });

    test('leading-loose should have line-height 2', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="leading-loose"]', 'line-height', '2');
    });
  });

  test.describe('Letter Spacing', () => {
    test('tracking-tighter should have tightest spacing', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="tracking-tighter"]', 'letter-spacing', '-0.05em');
    });

    test('tracking-tight should have tight spacing', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="tracking-tight"]', 'letter-spacing', '-0.025em');
    });

    test('tracking-normal should have normal spacing', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="tracking-normal"]', 'letter-spacing', '0em');
    });

    test('tracking-wide should have wide spacing', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="tracking-wide"]', 'letter-spacing', '0.025em');
    });

    test('tracking-wider should have wider spacing', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="tracking-wider"]', 'letter-spacing', '0.05em');
    });

    test('tracking-widest should have widest spacing', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="tracking-widest"]', 'letter-spacing', '0.1em');
    });
  });
});
