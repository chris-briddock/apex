import { test, expect } from '@playwright/test';

const pages = [
  '/en/utilities/typography',
  '/en/utilities/sizing',
  '/en/utilities/borders',
  '/en/components/badges',
  '/en/components/tables',
  '/en/components/tabs',
  '/en/components/modals',
  '/en/components/dropdowns',
  '/en/components/accordion',
];

test.describe('Translation errors check', () => {
  test.beforeEach(async ({ page }) => {
    // Capture console errors
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    page.on('pageerror', error => {
      errors.push(error.message);
    });
  });

  pages.forEach(pagePath => {
    test(`should have no translation errors on ${pagePath}`, async ({ page }) => {
      const errors: string[] = [];

      page.on('console', msg => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });
      page.on('pageerror', error => {
        errors.push(error.message);
      });

      await page.goto(`http://localhost:3000${pagePath}`);
      await page.waitForLoadState('networkidle');

      // Check for translation errors
      const translationErrors = errors.filter(e =>
        e.includes('Could not resolve') ||
        e.includes('translation') ||
        e.includes('useTranslations')
      );

      if (translationErrors.length > 0) {
        console.log(`\n=== Translation errors on ${pagePath} ===`);
        translationErrors.forEach(err => console.log(err));
        console.log('========================================\n');
      }

      expect(translationErrors.length).toBe(0);
    });
  });
});
