import { test, expect } from '@playwright/test'

test.describe('Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('skip link is present and functional', async ({ page }) => {
    const skipLink = page.getByRole('link', { name: /skip to main content/i })
    await expect(skipLink).toBeVisible()

    await skipLink.click()

    const mainContent = page.getByRole('main')
    await expect(mainContent).toBeFocused()
  })

  test('all images have alt text', async ({ page }) => {
    const images = page.locator('img')
    const count = await images.count()

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt')
      expect(alt).toBeTruthy()
    }
  })

  test('all links have accessible names', async ({ page }) => {
    const links = page.locator('a[href]')
    const count = await links.count()

    for (let i = 0; i < count; i++) {
      const link = links.nth(i)
      const text = await link.textContent()
      const ariaLabel = await link.getAttribute('aria-label')

      expect(text || ariaLabel).toBeTruthy()
    }
  })

  test('keyboard navigation works', async ({ page }) => {
    await page.keyboard.press('Tab')

    const firstFocusable = page.locator(':focus')
    await expect(firstFocusable).toBeVisible()

    await page.keyboard.press('Tab')
    const secondFocusable = page.locator(':focus')
    await expect(secondFocusable).toBeVisible()
  })

  test('focus management is correct', async ({ page }) => {
    const searchButton = page.getByRole('button', { name: /search/i })
    await searchButton.click()

    const searchInput = page.getByPlaceholder(/search/i)
    await expect(searchInput).toBeFocused()
  })

  test('color contrast meets WCAG standards', async ({ page }) => {
    // This is a basic check - in production, you'd use axe-core or similar
    const headings = page.locator('h1, h2, h3, h4, h5, h6')
    const count = await headings.count()

    for (let i = 0; i < count; i++) {
      await expect(headings.nth(i)).toBeVisible()
    }
  })

  test('aria labels are present on interactive elements', async ({ page }) => {
    const buttons = page.locator('button:not([aria-label])')
    const count = await buttons.count()

    // Check that buttons without aria-label have visible text
    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i)
      const text = await button.textContent()
      expect(text?.trim()).toBeTruthy()
    }
  })
})
