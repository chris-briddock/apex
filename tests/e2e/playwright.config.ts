/// <reference types="node" />
import { defineConfig, devices } from '@playwright/test';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Playwright configuration for ApexCSS e2e testing
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
  ],
  // Screenshot comparison settings for visual regression
  snapshotDir: join(__dirname, 'screenshots'),
  expect: {
    timeout: 5000,
    toHaveScreenshot: {
      // Visual comparison threshold (0-1, lower = stricter)
      threshold: 0.1,
      // Maximum allowed difference in pixels
      maxDiffPixels: 100,
      // Maximum allowed difference ratio per pixel (0-1)
      maxDiffPixelRatio: 0.2,
      // Animation handling
      animations: 'disabled',
    },
    toMatchSnapshot: {
      threshold: 0.1,
    },
  },
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    // Visual testing settings
    viewport: { width: 1280, height: 720 },
    // Wait for fonts to load before taking screenshots
    actionTimeout: 15000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    // Test against mobile viewports
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
    // Visual regression tests (desktop only for baseline stability)
    {
      name: 'visual-regression',
      testMatch: /visual-regression\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
});
