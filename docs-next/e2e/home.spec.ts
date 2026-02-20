import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('loads successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Apex Documentation/)
  })

  test('displays main heading', async ({ page }) => {
    const heading = page.getByRole('heading', { level: 1 })
    await expect(heading).toBeVisible()
  })

  test('has navigation menu', async ({ page }) => {
    const nav = page.getByRole('navigation')
    await expect(nav).toBeVisible()
  })

  test('language switcher is present', async ({ page }) => {
    const langSwitcher = page.getByRole('button', { name: /toggle language/i })
    await expect(langSwitcher).toBeVisible()
  })

  test('version switcher is present', async ({ page }) => {
    const versionSwitcher = page.getByRole('button', { name: /select version/i })
    await expect(versionSwitcher).toBeVisible()
  })

  test('can navigate to getting started page', async ({ page }) => {
    const gettingStartedLink = page.getByRole('link', { name: /getting started/i })
    await gettingStartedLink.click()
    await expect(page).toHaveURL(/\/getting-started/)
  })

  test('responsive design works on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    const mobileNav = page.getByRole('button', { name: /toggle navigation/i })
    await expect(mobileNav).toBeVisible()
  })
})
