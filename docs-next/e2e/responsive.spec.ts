import { test, expect } from '@playwright/test'

test.describe('Responsive Design', () => {
  test('desktop layout displays correctly', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    await page.goto('/')

    const sidebar = page.getByRole('complementary', { name: /sidebar/i })
    await expect(sidebar).toBeVisible()

    const mainContent = page.getByRole('main')
    await expect(mainContent).toBeVisible()
  })

  test('tablet layout displays correctly', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/')

    const sidebar = page.getByRole('complementary', { name: /sidebar/i })
    await expect(sidebar).toBeVisible()
  })

  test('mobile layout displays correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const mobileNavButton = page.getByRole('button', { name: /toggle navigation/i })
    await expect(mobileNavButton).toBeVisible()

    // Sidebar should be hidden on mobile by default
    const sidebar = page.getByRole('complementary', { name: /sidebar/i })
    await expect(sidebar).not.toBeVisible()
  })

  test('mobile menu opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const mobileNavButton = page.getByRole('button', { name: /toggle navigation/i })
    await mobileNavButton.click()

    const sidebar = page.getByRole('complementary', { name: /sidebar/i })
    await expect(sidebar).toBeVisible()

    await mobileNavButton.click()
    await expect(sidebar).not.toBeVisible()
  })

  test('content is readable on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/en/getting-started')

    const mainContent = page.getByRole('main')
    await expect(mainContent).toBeVisible()

    const heading = page.getByRole('heading', { level: 1 })
    await expect(heading).toBeVisible()
  })

  test('touch targets are large enough on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const buttons = page.locator('button')
    const count = await buttons.count()

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i)
      const box = await button.boundingBox()

      if (box) {
        // Touch targets should be at least 44x44 pixels
        expect(box.width).toBeGreaterThanOrEqual(44)
        expect(box.height).toBeGreaterThanOrEqual(44)
      }
    }
  })

  test('horizontal scrolling is prevented on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const body = page.locator('body')
    const overflowX = await body.evaluate(el => {
      return window.getComputedStyle(el).overflowX
    })

    expect(overflowX).not.toBe('scroll')
    expect(overflowX).not.toBe('auto')
  })
})
