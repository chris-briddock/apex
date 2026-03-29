import { Page } from '@playwright/test';

/**
 * Component Test Helpers
 * Utility functions for creating and testing CSS components dynamically
 */

let testIdCounter = 0;

/**
 * Generates a unique test ID
 */
function generateTestId(): string {
  testIdCounter++;
  return `apex-test-${Date.now()}-${testIdCounter}`;
}

/**
 * Creates a test component dynamically in the browser
 * @returns The testId of the created element
 */
export async function createComponent(
  page: Page,
  options: {
    tag?: string;
    classes?: string;
    styles?: Record<string, string>;
    attributes?: Record<string, string>;
    children?: string;
    parent?: string;
  } = {}
): Promise<string> {
  const testId = generateTestId();

  await page.evaluate(
    (opts) => {
      const el = document.createElement(opts.tag || 'div');
      el.setAttribute('data-testid', opts.testId);

      if (opts.classes) {
        el.className = opts.classes;
      }

      if (opts.styles) {
        Object.entries(opts.styles).forEach(([key, value]) => {
          el.style.setProperty(key, value);
        });
      }

      if (opts.attributes) {
        Object.entries(opts.attributes).forEach(([key, value]) => {
          el.setAttribute(key, value);
        });
      }

      if (opts.children) {
        el.innerHTML = opts.children;
      }

      const parent = opts.parent
        ? document.querySelector(opts.parent)
        : document.body;
      (parent || document.body).appendChild(el);
    },
    { ...options, testId }
  );

  return testId;
}

/**
 * Creates a container element for grouping tests
 */
export async function createContainer(
  page: Page,
  options: {
    classes?: string;
    styles?: Record<string, string>;
    children?: string;
  } = {}
): Promise<string> {
  return createComponent(page, {
    tag: 'div',
    classes: options.classes,
    styles: {
      position: 'relative',
      ...options.styles,
    },
    children: options.children,
  });
}

/**
 * Cleans up all test components from the page
 */
export async function cleanupComponents(page: Page): Promise<void> {
  await page.evaluate(() => {
    document.querySelectorAll('[data-testid^="apex-test-"]').forEach((el) => {
      el.remove();
    });
  });
}

/**
 * Gets the selector for a test ID
 */
export function getSelector(testId: string): string {
  return `[data-testid="${testId}"]`;
}

/**
 * Creates multiple test components at once
 */
export async function createComponents(
  page: Page,
  components: Array<{
    tag?: string;
    classes?: string;
    styles?: Record<string, string>;
    attributes?: Record<string, string>;
    children?: string;
  }>
): Promise<string[]> {
  const testIds: string[] = [];
  for (const component of components) {
    const testId = await createComponent(page, component);
    testIds.push(testId);
  }
  return testIds;
}

/**
 * Helper to test a CSS utility by creating a component and checking computed style
 */
export async function testUtility(
  page: Page,
  options: {
    classes: string;
    property: string;
    expectedValue: string | RegExp;
    tag?: string;
    styles?: Record<string, string>;
  }
): Promise<void> {
  const { classes, property, expectedValue, tag = 'div', styles = {} } = options;

  const testId = await createComponent(page, {
    tag,
    classes,
    styles: {
      width: '100px',
      height: '100px',
      ...styles,
    },
  });

  const selector = getSelector(testId);
  const actualValue = await page.evaluate(
    ({ sel, prop }) => {
      const el = document.querySelector(sel);
      if (!el) throw new Error(`Element ${sel} not found`);
      return window.getComputedStyle(el).getPropertyValue(prop);
    },
    { sel: selector, prop: property }
  );

  if (expectedValue instanceof RegExp) {
    if (!expectedValue.test(actualValue)) {
      throw new Error(
        `Expected ${property} to match ${expectedValue}, got "${actualValue}" for class "${classes}"`
      );
    }
  } else if (actualValue !== expectedValue) {
    throw new Error(
      `Expected ${property} to be "${expectedValue}", got "${actualValue}" for class "${classes}"`
    );
  }
}

/**
 * Helper to test multiple utilities at once
 */
export async function testUtilities(
  page: Page,
  tests: Array<{
    name: string;
    classes: string;
    property: string;
    expectedValue: string | RegExp;
    tag?: string;
  }>
): Promise<void> {
  for (const test of tests) {
    await testUtility(page, test);
  }
}
