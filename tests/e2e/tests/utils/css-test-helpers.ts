import { Page, expect } from '@playwright/test';

/**
 * CSS Property Test Helpers
 * Utility functions for testing CSS properties in e2e tests
 */

/**
 * Gets the computed style of an element
 */
export async function getComputedStyle(
  page: Page,
  selector: string,
  property: string
): Promise<string> {
  return await page.evaluate(
    ({ sel, prop }) => {
      const el = document.querySelector(sel);
      if (!el) throw new Error(`Element ${sel} not found`);
      return window.getComputedStyle(el).getPropertyValue(prop);
    },
    { sel: selector, prop: property }
  );
}

/**
 * Tests that a CSS class applies the expected property value
 */
export async function expectCSSProperty(
  page: Page,
  selector: string,
  property: string,
  expectedValue: string | RegExp
): Promise<void> {
  const actualValue = await getComputedStyle(page, selector, property);

  if (expectedValue instanceof RegExp) {
    expect(actualValue).toMatch(expectedValue);
  } else {
    expect(actualValue).toBe(expectedValue);
  }
}

/**
 * Tests multiple CSS properties at once
 */
export async function expectCSSProperties(
  page: Page,
  selector: string,
  properties: Record<string, string | RegExp>
): Promise<void> {
  for (const [property, expectedValue] of Object.entries(properties)) {
    await expectCSSProperty(page, selector, property, expectedValue);
  }
}

/**
 * Gets the element's bounding box dimensions
 */
export async function getElementDimensions(
  page: Page,
  selector: string
): Promise<{ width: number; height: number }> {
  const box = await page.locator(selector).boundingBox();
  if (!box) throw new Error(`Element ${selector} not found or not visible`);
  return { width: box.width, height: box.height };
}

/**
 * Tests that an element has specific dimensions
 */
export async function expectDimensions(
  page: Page,
  selector: string,
  expected: { width?: number; height?: number; tolerance?: number }
): Promise<void> {
  const { width, height } = await getElementDimensions(page, selector);
  const tolerance = expected.tolerance ?? 1;

  if (expected.width !== undefined) {
    expect(Math.abs(width - expected.width)).toBeLessThanOrEqual(tolerance);
  }
  if (expected.height !== undefined) {
    expect(Math.abs(height - expected.height)).toBeLessThanOrEqual(tolerance);
  }
}

/**
 * Tests that an element is visible with proper display/visibility
 */
export async function expectVisible(
  page: Page,
  selector: string
): Promise<void> {
  const locator = page.locator(selector);
  await expect(locator).toBeVisible();

  const display = await getComputedStyle(page, selector, 'display');
  const visibility = await getComputedStyle(page, selector, 'visibility');
  const opacity = await getComputedStyle(page, selector, 'opacity');

  expect(display).not.toBe('none');
  expect(visibility).not.toBe('hidden');
  expect(opacity).not.toBe('0');
}

/**
 * Tests that an element is hidden
 */
export async function expectHidden(
  page: Page,
  selector: string
): Promise<void> {
  const display = await getComputedStyle(page, selector, 'display');
  const visibility = await getComputedStyle(page, selector, 'visibility');
  const opacity = await getComputedStyle(page, selector, 'opacity');

  const isHidden =
    display === 'none' ||
    visibility === 'hidden' ||
    opacity === '0';

  expect(isHidden).toBe(true);
}

/**
 * Tests color properties (converts to rgb for comparison)
 */
export async function expectColor(
  page: Page,
  selector: string,
  property: 'color' | 'background-color' | 'border-color' | string,
  expectedRgb: string
): Promise<void> {
  const actualValue = await getComputedStyle(page, selector, property);
  expect(actualValue).toBe(expectedRgb);
}

/**
 * Waits for a CSS transition/animation to complete
 */
export async function waitForTransition(
  page: Page,
  selector: string,
  duration: number = 300
): Promise<void> {
  await page.waitForTimeout(duration);
}

/**
 * Tests responsive behavior at a specific viewport
 */
export async function testAtViewport(
  page: Page,
  width: number,
  height: number,
  testFn: () => Promise<void>
): Promise<void> {
  await page.setViewportSize({ width, height });
  await testFn();
}

/**
 * Gets the effective z-index of an element
 */
export async function getZIndex(
  page: Page,
  selector: string
): Promise<number> {
  const zIndex = await getComputedStyle(page, selector, 'z-index');
  return parseInt(zIndex, 10) || 0;
}

/**
 * Tests that an element is positioned correctly
 */
export async function expectPosition(
  page: Page,
  selector: string,
  expected: {
    position?: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  }
): Promise<void> {
  await expectCSSProperties(page, selector, expected as Record<string, string>);
}

/**
 * Tests flexbox/container properties
 */
export async function expectFlexProperties(
  page: Page,
  selector: string,
  expected: {
    display?: string;
    'flex-direction'?: string;
    'justify-content'?: string;
    'align-items'?: string;
    'flex-wrap'?: string;
    gap?: string;
  }
): Promise<void> {
  await expectCSSProperties(page, selector, expected as Record<string, string>);
}

/**
 * Tests grid properties
 */
export async function expectGridProperties(
  page: Page,
  selector: string,
  expected: {
    display?: string;
    'grid-template-columns'?: string | RegExp;
    'grid-template-rows'?: string | RegExp;
    gap?: string;
    'grid-column'?: string;
    'grid-row'?: string;
  }
): Promise<void> {
  await expectCSSProperties(page, selector, expected as Record<string, string | RegExp>);
}

/**
 * Tests spacing (margin/padding) properties
 */
export async function expectSpacing(
  page: Page,
  selector: string,
  expected: {
    margin?: string;
    'margin-top'?: string;
    'margin-right'?: string;
    'margin-bottom'?: string;
    'margin-left'?: string;
    padding?: string;
    'padding-top'?: string;
    'padding-right'?: string;
    'padding-bottom'?: string;
    'padding-left'?: string;
  }
): Promise<void> {
  await expectCSSProperties(page, selector, expected as Record<string, string>);
}

/**
 * Tests typography properties
 */
export async function expectTypography(
  page: Page,
  selector: string,
  expected: {
    'font-size'?: string;
    'font-weight'?: string;
    'font-family'?: string | RegExp;
    'line-height'?: string;
    'letter-spacing'?: string;
    'text-align'?: string;
    'text-transform'?: string;
    'text-decoration'?: string;
  }
): Promise<void> {
  await expectCSSProperties(page, selector, expected as Record<string, string | RegExp>);
}

/**
 * Tests border properties
 */
export async function expectBorder(
  page: Page,
  selector: string,
  expected: {
    'border-width'?: string;
    'border-style'?: string;
    'border-color'?: string;
    'border-radius'?: string;
    'border-top-width'?: string;
    'border-right-width'?: string;
    'border-bottom-width'?: string;
    'border-left-width'?: string;
  }
): Promise<void> {
  await expectCSSProperties(page, selector, expected as Record<string, string>);
}

/**
 * Tests shadow properties
 */
export async function expectShadow(
  page: Page,
  selector: string,
  expected: string | RegExp
): Promise<void> {
  const actualValue = await getComputedStyle(page, selector, 'box-shadow');
  if (expected instanceof RegExp) {
    expect(actualValue).toMatch(expected);
  } else {
    expect(actualValue).toBe(expected);
  }
}
