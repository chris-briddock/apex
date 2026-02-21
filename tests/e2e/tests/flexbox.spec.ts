import { test } from '@playwright/test';
import { expectCSSProperty, expectFlexProperties } from './utils/css-test-helpers';

test.describe('Flexbox Utilities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Flex Direction', () => {
    test('flex-row should have row direction', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="flex-row"]', 'flex-direction', 'row');
    });

    test('flex-row-reverse should have row-reverse direction', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="flex-row-reverse"]', 'flex-direction', 'row-reverse');
    });

    test('flex-col should have column direction', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="flex-col"]', 'flex-direction', 'column');
    });

    test('flex-col-reverse should have column-reverse direction', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="flex-col-reverse"]', 'flex-direction', 'column-reverse');
    });
  });

  test.describe('Flex Wrap', () => {
    test('flex-wrap should allow wrapping', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="flex-wrap"]', 'flex-wrap', 'wrap');
    });

    test('flex-nowrap should prevent wrapping', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="flex-nowrap"]', 'flex-wrap', 'nowrap');
    });

    test('flex-wrap-reverse should wrap in reverse', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="flex-wrap-reverse"]', 'flex-wrap', 'wrap-reverse');
    });
  });

  test.describe('Justify Content', () => {
    test('justify-start should align items to start', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="justify-start"]', 'justify-content', 'flex-start');
    });

    test('justify-center should center items', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="justify-center"]', 'justify-content', 'center');
    });

    test('justify-end should align items to end', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="justify-end"]', 'justify-content', 'flex-end');
    });

    test('justify-between should space items evenly', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="justify-between"]', 'justify-content', 'space-between');
    });

    test('justify-around should add space around items', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="justify-around"]', 'justify-content', 'space-around');
    });

    test('justify-evenly should space evenly', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="justify-evenly"]', 'justify-content', 'space-evenly');
    });
  });

  test.describe('Align Items', () => {
    test('items-start should align to start', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="items-start"]', 'align-items', 'flex-start');
    });

    test('items-center should center align', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="items-center"]', 'align-items', 'center');
    });

    test('items-end should align to end', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="items-end"]', 'align-items', 'flex-end');
    });

    test('items-stretch should stretch items', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="items-stretch"]', 'align-items', 'stretch');
    });
  });

  test.describe('Align Content', () => {
    test('content-center should center content', async ({ page }) => {
      await expectCSSProperty(page, '[data-testid="content-center"]', 'align-content', 'center');
    });
  });
});
