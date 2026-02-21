import { Page, Locator, expect } from '@playwright/test';

/**
 * Visual Regression Test Helpers
 * Utility functions for visual regression testing with Playwright
 */

export interface ScreenshotOptions {
  /**
   * Maximum allowed difference ratio between images (0-1)
   * @default 0.1 (10%)
   */
  threshold?: number;

  /**
   * Maximum allowed difference in pixels
   * @default 100
   */
  maxDiffPixels?: number;

  /**
   * Maximum allowed difference ratio between images (0-1) on a per-pixel basis
   * @default 0.2
   */
  maxDiffPixelRatio?: number;

  /**
   * Animation to wait for before taking screenshot
   */
  animations?: 'allow' | 'disabled';

  /**
   * Whether to take full page screenshot
   * @default false
   */
  fullPage?: boolean;

  /**
   * Clip the screenshot to a specific region
   */
  clip?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };

  /**
   * Mask specific elements in the screenshot (e.g., dynamic content)
   */
  mask?: Locator[];

  /**
   * Custom screenshot name suffix
   */
  suffix?: string;
}

/**
 * Viewport configurations for responsive testing
 */
export const VIEWPORTS = {
  mobile: { width: 375, height: 667 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1280, height: 720 },
  widescreen: { width: 1920, height: 1080 },
} as const;

export type ViewportName = keyof typeof VIEWPORTS;

/**
 * Takes a visual regression screenshot of the entire page
 * @param page - Playwright page object
 * @param name - Screenshot name for organization
 * @param options - Screenshot and comparison options
 */
export async function expectPageScreenshot(
  page: Page,
  name: string,
  options: ScreenshotOptions = {}
): Promise<void> {
  const {
    threshold = 0.1,
    maxDiffPixels = 100,
    maxDiffPixelRatio = 0.2,
    fullPage = true,
    animations = 'disabled',
    clip,
    mask,
    suffix,
  } = options;

  const screenshotName = suffix ? `${name}-${suffix}` : name;

  await expect(page).toHaveScreenshot(`${screenshotName}.png`, {
    threshold,
    maxDiffPixels,
    maxDiffPixelRatio,
    fullPage,
    animations,
    clip,
    mask,
  });
}

/**
 * Takes a visual regression screenshot of a specific element
 * @param page - Playwright page object
 * @param selector - Element selector
 * @param name - Screenshot name
 * @param options - Screenshot and comparison options
 */
export async function expectElementScreenshot(
  page: Page,
  selector: string,
  name: string,
  options: ScreenshotOptions = {}
): Promise<void> {
  const {
    threshold = 0.1,
    maxDiffPixels = 50,
    maxDiffPixelRatio = 0.2,
    animations = 'disabled',
    mask,
    suffix,
  } = options;

  const element = page.locator(selector);
  const screenshotName = suffix ? `${name}-${suffix}` : name;

  // Ensure element is visible before screenshot
  await expect(element).toBeVisible();

  await expect(element).toHaveScreenshot(`${screenshotName}.png`, {
    threshold,
    maxDiffPixels,
    maxDiffPixelRatio,
    animations,
    mask,
  });
}

/**
 * Takes screenshots at multiple viewports for responsive testing
 * @param page - Playwright page object
 * @param name - Base screenshot name
 * @param viewports - Array of viewport names to test
 * @param options - Screenshot options
 */
export async function expectResponsiveScreenshots(
  page: Page,
  name: string,
  viewports: ViewportName[] = ['mobile', 'tablet', 'desktop'],
  options: ScreenshotOptions = {}
): Promise<void> {
  for (const viewport of viewports) {
    const { width, height } = VIEWPORTS[viewport];
    await page.setViewportSize({ width, height });

    // Wait for any responsive adjustments
    await page.waitForTimeout(300);

    await expectPageScreenshot(page, name, {
      ...options,
      suffix: viewport,
      fullPage: options.fullPage ?? true,
    });
  }
}

/**
 * Takes before/after screenshots for state comparison
 * @param page - Playwright page object
 * @param selector - Element selector to capture
 * @param name - Base screenshot name
 * @param action - Action to perform between screenshots
 * @param options - Screenshot options
 */
export async function expectStateChangeScreenshot(
  page: Page,
  selector: string,
  name: string,
  action: () => Promise<void>,
  options: ScreenshotOptions = {}
): Promise<void> {
  // Initial state
  await expectElementScreenshot(page, selector, `${name}-initial`, options);

  // Perform action
  await action();

  // Changed state
  await expectElementScreenshot(page, selector, `${name}-changed`, options);
}

/**
 * Tests dark mode visual appearance
 * @param page - Playwright page object
 * @param name - Screenshot name
 * @param options - Screenshot options
 */
export async function expectDarkModeScreenshot(
  page: Page,
  name: string,
  options: ScreenshotOptions = {}
): Promise<void> {
  // Light mode screenshot
  await expectPageScreenshot(page, name, {
    ...options,
    suffix: 'light',
  });

  // Toggle to dark mode
  const themeToggle = page.locator('[data-testid="theme-toggle"]');
  if (await themeToggle.isVisible().catch(() => false)) {
    await themeToggle.click();
  } else {
    // Fallback: add dark class directly
    await page.evaluate(() => {
      document.documentElement.classList.add('dark');
    });
  }

  // Wait for dark mode transition
  await page.waitForTimeout(300);

  // Dark mode screenshot
  await expectPageScreenshot(page, name, {
    ...options,
    suffix: 'dark',
  });

  // Reset to light mode
  await page.evaluate(() => {
    document.documentElement.classList.remove('dark');
  });
}

/**
 * Masks common dynamic elements (timers, dates, etc.)
 * @param page - Playwright page object
 * @param selectors - Additional selectors to mask
 */
export function getDefaultMasks(
  page: Page,
  additionalSelectors: string[] = []
): Locator[] {
  const defaultMasks = [
    // Common dynamic content patterns
    '[data-testid="loading"]',
    '[data-testid="spinner"]',
    '.loading',
    '.spinner',
    // Add time/date elements if they exist
    '[data-testid="current-time"]',
    '[data-testid="current-date"]',
    ...additionalSelectors,
  ];

  return defaultMasks
    .map((selector) => page.locator(selector))
    .filter((locator) => locator !== undefined);
}

/**
 * Waits for visual stability before taking screenshot
 * @param page - Playwright page object
 * @param stabilityChecks - Selectors to check for stability
 */
export async function waitForVisualStability(
  page: Page,
  stabilityChecks: string[] = []
): Promise<void> {
  // Wait for fonts to load
  await page.waitForFunction(() => document.fonts.ready);

  // Wait for images to load
  await page.waitForFunction(() => {
    const images = document.querySelectorAll('img');
    return Array.from(images).every((img) => img.complete);
  });

  // Wait for animations to settle
  await page.waitForTimeout(500);

  // Check specific elements if provided
  for (const selector of stabilityChecks) {
    const element = page.locator(selector);
    await expect(element).toBeVisible();
  }
}

/**
 * Compares screenshots across different browsers
 * @param page - Playwright page object
 * @param name - Screenshot name
 * @param browserName - Current browser name
 * @param options - Screenshot options
 */
export async function expectCrossBrowserScreenshot(
  page: Page,
  name: string,
  browserName: string,
  options: ScreenshotOptions = {}
): Promise<void> {
  await expectPageScreenshot(page, name, {
    ...options,
    suffix: browserName.toLowerCase(),
    // Allow slightly more tolerance for cross-browser differences
    threshold: options.threshold ?? 0.15,
    maxDiffPixels: options.maxDiffPixels ?? 200,
  });
}

/**
 * Utility to mask elements by selector
 * @param page - Playwright page object
 * @param selectors - CSS selectors to mask
 */
export function maskElements(page: Page, selectors: string[]): Locator[] {
  return selectors.map((selector) => page.locator(selector));
}
