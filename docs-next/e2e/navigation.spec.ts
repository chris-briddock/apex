import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('language switcher opens dropdown', async ({ page }) => {
    const langSwitcher = page.getByRole('button', { name: /toggle language/i })
    await langSwitcher.click()

    const dropdown = page.getByRole('list')
    await expect(dropdown).toBeVisible()
  })

  test('can switch language', async ({ page }) => {
    const langSwitcher = page.getByRole('button', { name: /toggle language/i })
    await langSwitcher.click()

    const spanishOption = page.getByRole('button', { name: /español/i })
    await spanishOption.click()

    await expect(page).toHaveURL(/\/es\//)
  })

  test('version switcher opens dropdown', async ({ page }) => {
    const versionSwitcher = page.getByRole('button', { name: /select version/i })
    await versionSwitcher.click()

    const dropdown = page.getByRole('list')
    await expect(dropdown).toBeVisible()
  })

  test('breadcrumb navigation works', async ({ page }) => {
    await page.goto('/en/getting-started')

    const breadcrumb = page.getByRole('navigation', { name: /breadcrumb/i })
    await expect(breadcrumb).toBeVisible()

    const homeLink = breadcrumb.getByRole('link', { name: /home/i })
    await homeLink.click()

    await expect(page).toHaveURL('/')
  })

  test('sidebar navigation works', async ({ page }) => {
    const sidebar = page.getByRole('complementary', { name: /sidebar/i })
    await expect(sidebar).toBeVisible()

    const gettingStartedLink = sidebar.getByRole('link', { name: /getting started/i })
    await gettingStartedLink.click()

    await expect(page).toHaveURL(/\/getting-started/)
  })

  test('search functionality works', async ({ page }) => {
    const searchButton = page.getByRole('button', { name: /search/i })
    await searchButton.click()

    const searchInput = page.getByPlaceholder(/search/i)
    await expect(searchInput).toBeVisible()

    await searchInput.fill('flexbox')

    const results = page.getByRole('listbox')
    await expect(results).toBeVisible()
  })
})
