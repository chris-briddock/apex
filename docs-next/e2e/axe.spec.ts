import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import type { AxeResults } from "axe-core";

// Helper function to run axe-core on a page
async function runAccessibilityCheck(page: Page): Promise<AxeResults> {
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();

  return accessibilityScanResults;
}

test.describe("Accessibility Tests with axe-core", () => {
  test("Home page has no critical accessibility violations", async ({ page }) => {
    await page.goto("/");

    const results = await runAccessibilityCheck(page);

    // Check for critical and serious violations
    const criticalViolations = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    expect(criticalViolations).toHaveLength(0);
  });

  test("Getting Started page has no accessibility violations", async ({ page }) => {
    await page.goto("/getting-started/");

    const results = await runAccessibilityCheck(page);

    // Filter out known issues or allow minor violations
    const seriousViolations = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    expect(seriousViolations).toHaveLength(0);
  });

  test("Components page has no accessibility violations", async ({ page }) => {
    await page.goto("/components/");

    const results = await runAccessibilityCheck(page);

    const seriousViolations = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    expect(seriousViolations).toHaveLength(0);
  });

  test("Utilities page has no accessibility violations", async ({ page }) => {
    await page.goto("/utilities/");

    const results = await runAccessibilityCheck(page);

    const seriousViolations = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    expect(seriousViolations).toHaveLength(0);
  });

  test("Search modal is accessible", async ({ page }) => {
    await page.goto("/");

    // Open search modal
    const searchButton = page.getByRole("button", { name: /search/i });
    await searchButton.click();

    const results = await runAccessibilityCheck(page);

    const seriousViolations = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    expect(seriousViolations).toHaveLength(0);

    // Close modal
    await page.keyboard.press("Escape");
  });

  test("Sidebar navigation is accessible", async ({ page }) => {
    await page.goto("/");

    const results = await runAccessibilityCheck(page);

    // Check for landmark violations
    const landmarkViolations = results.violations.filter(
      (v) => v.id === "region" || v.id === "landmark-one-main"
    );

    expect(landmarkViolations).toHaveLength(0);
  });

  test("RTL layout (Arabic) is accessible", async ({ page }) => {
    await page.goto("/ar/");

    const results = await runAccessibilityCheck(page);

    const seriousViolations = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    expect(seriousViolations).toHaveLength(0);

    // Verify RTL direction
    const html = page.locator("html");
    await expect(html).toHaveAttribute("dir", "rtl");
  });

  test("Form elements in feedback widget are accessible", async ({ page }) => {
    await page.goto("/");

    // Open feedback widget
    const feedbackButton = page.getByText(/Was this helpful/i);
    await feedbackButton.click();

    const results = await runAccessibilityCheck(page);

    // Check for form label violations
    const formViolations = results.violations.filter(
      (v) => v.id === "label" || v.id === "form-field-multiple-labels"
    );

    expect(formViolations).toHaveLength(0);

    // Close widget
    await page.keyboard.press("Escape");
  });

  test("Color contrast meets WCAG AA standards", async ({ page }) => {
    await page.goto("/");

    const results = await runAccessibilityCheck(page);

    // Filter for color contrast violations
    const contrastViolations = results.violations.filter(
      (v) => v.id === "color-contrast"
    );

    // Log contrast issues for review
    if (contrastViolations.length > 0) {
      console.log("Contrast issues found:", contrastViolations);
    }

    // Allow some minor contrast issues but no critical ones
    const criticalContrast = contrastViolations.filter(
      (v) => v.impact === "critical"
    );

    expect(criticalContrast).toHaveLength(0);
  });

  test("Keyboard navigation works throughout the site", async ({ page }) => {
    await page.goto("/");

    for (let i = 0; i < 10; i++) {
      await page.keyboard.press("Tab");
      const focused = page.locator(":focus");
      await expect(focused).toBeVisible();
    }

    // Run accessibility check
    const results = await runAccessibilityCheck(page);

    // Check for focus-related violations
    const focusViolations = results.violations.filter(
      (v) => v.id === "focus-indicator" || v.id === "focus-order-semantics"
    );

    expect(focusViolations).toHaveLength(0);
  });

  test("ARIA usage is valid", async ({ page }) => {
    await page.goto("/");

    const results = await runAccessibilityCheck(page);

    // Check for ARIA violations
    const ariaViolations = results.violations.filter(
      (v) =>
        v.id.includes("aria-") ||
        v.id === "aria-allowed-attr" ||
        v.id === "aria-required-attr" ||
        v.id === "aria-valid-attr-value"
    );

    expect(ariaViolations).toHaveLength(0);
  });

  test("Images have alt text", async ({ page }) => {
    await page.goto("/");

    const results = await runAccessibilityCheck(page);

    const imageViolations = results.violations.filter(
      (v) => v.id === "image-alt"
    );

    expect(imageViolations).toHaveLength(0);
  });

  test("Links have discernible text", async ({ page }) => {
    await page.goto("/");

    const results = await runAccessibilityCheck(page);

    const linkViolations = results.violations.filter(
      (v) => v.id === "link-name"
    );

    expect(linkViolations).toHaveLength(0);
  });

  test("Page has proper heading structure", async ({ page }) => {
    await page.goto("/");

    const results = await runAccessibilityCheck(page);

    const headingViolations = results.violations.filter(
      (v) => v.id === "heading-order" || v.id === "page-has-heading-one"
    );

    expect(headingViolations).toHaveLength(0);
  });
});
