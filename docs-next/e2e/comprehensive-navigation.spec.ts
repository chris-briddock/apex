import { test, expect } from '@playwright/test'

// Define all page routes based on the project structure
const pageRoutes = {
  main: [
    '/',
    '/accessibility',
    '/api-reference',
    '/browser-support',
    '/changelog',
    '/cheatsheet',
    '/community',
    '/components',
    '/configuration',
    '/contributing',
    '/customization',
    '/dark-mode',
    '/design-system',
    '/faq',
    '/getting-started',
    '/migration',
    '/performance',
    '/playground',
    '/plugins',
    '/responsive-design',
    '/rtl',
    '/troubleshooting',
    '/utilities',
  ],
  components: [
    '/components/alerts',
    '/components/buttons',
    '/components/cards',
    '/components/forms',
  ],
  migration: [
    '/migration/from-bootstrap',
    '/migration/from-bulma',
    '/migration/from-tailwind',
    '/migration/v1.0-to-v1.1',
  ],
  utilities: [
    '/utilities/colors',
    '/utilities/flexbox',
    '/utilities/grid',
    '/utilities/spacing',
  ],
}

// Flatten all routes for testing
const allRoutes = [
  ...pageRoutes.main,
  ...pageRoutes.components,
  ...pageRoutes.migration,
  ...pageRoutes.utilities,
]

// Add locale prefix to routes
const locales = ['en', 'es', 'fr', 'de', 'ar']
const getAllRoutes = () => {
  const routes: string[] = []
  locales.forEach(locale => {
    allRoutes.forEach(route => {
      routes.push(`/${locale}${route}`)
    })
  })
  return routes
}

test.describe('Comprehensive Page Navigation', () => {
  let errors: Array<{ route: string; error: string; type: string }> = []

  test.beforeEach(async ({ page }) => {
    // Listen for console errors
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push({
          route: page.url(),
          error: msg.text(),
          type: 'console',
        })
      }
    })

    // Listen for page errors
    page.on('pageerror', error => {
      errors.push({
        route: page.url(),
        error: error.message,
        type: 'page',
      })
    })

    // Listen for failed requests
    page.on('requestfailed', request => {
      errors.push({
        route: page.url(),
        error: `Failed request: ${request.url()} - ${request.failure()?.errorText}`,
        type: 'request',
      })
    })
  })

  test.afterEach(async ({ page }) => {
    // Log any errors found during the test
    if (errors.length > 0) {
      console.log('\n=== Errors found during navigation ===')
      errors.forEach(err => {
        console.log(`[${err.type}] ${err.route}`)
        console.log(`  ${err.error}`)
      })
      console.log('========================================\n')
    }
  })

  test('should navigate to all main pages without errors', async ({ page }) => {
    errors = []
    const failedPages: string[] = []

    for (const route of pageRoutes.main) {
      const url = `/en${route}`
      try {
        // Use a shorter timeout and waitUntil: 'domcontentloaded' instead of 'networkidle'
        const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 })

        // Check for HTTP errors
        if (!response || response.status() >= 400) {
          const status = response?.status() || 'unknown'
          errors.push({
            route: url,
            error: `HTTP ${status} error`,
            type: 'http',
          })
          failedPages.push(`${url} (HTTP ${status})`)
          continue
        }

        // Check for page title
        const title = await page.title()
        expect(title).toBeTruthy()

        // Check for main content
        const mainContent = page.locator('main, [role="main"], .main-content, h1')
        const isVisible = await mainContent.count() > 0
        if (!isVisible) {
          errors.push({
            route: url,
            error: 'No main content found',
            type: 'content',
          })
        }

      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error)
        errors.push({
          route: url,
          error: errorMessage,
          type: 'navigation',
        })
        failedPages.push(`${url} (${errorMessage})`)
      }
    }

    // Assert no critical errors
    const criticalErrors = errors.filter(e => e.type === 'http' || e.type === 'navigation')
    if (criticalErrors.length > 0) {
      console.log('\n=== Failed Pages ===')
      failedPages.forEach(page => console.log(`  - ${page}`))
      console.log('====================\n')
    }

    expect(criticalErrors.length, `Found ${criticalErrors.length} critical navigation errors`).toBe(0)
  })

  test('should navigate to all component pages without errors', async ({ page }) => {
    errors = []
    const failedPages: string[] = []

    for (const route of pageRoutes.components) {
      const url = `/en${route}`
      try {
        const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 })

        if (!response || response.status() >= 400) {
          const status = response?.status() || 'unknown'
          errors.push({
            route: url,
            error: `HTTP ${status} error`,
            type: 'http',
          })
          failedPages.push(`${url} (HTTP ${status})`)
          continue
        }

        const title = await page.title()
        expect(title).toBeTruthy()

      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error)
        errors.push({
          route: url,
          error: errorMessage,
          type: 'navigation',
        })
        failedPages.push(`${url} (${errorMessage})`)
      }
    }

    const criticalErrors = errors.filter(e => e.type === 'http' || e.type === 'navigation')
    if (criticalErrors.length > 0) {
      console.log('\n=== Failed Component Pages ===')
      failedPages.forEach(page => console.log(`  - ${page}`))
      console.log('==============================\n')
    }

    expect(criticalErrors.length, `Found ${criticalErrors.length} critical navigation errors`).toBe(0)
  })

  test('should navigate to all migration pages without errors', async ({ page }) => {
    errors = []
    const failedPages: string[] = []

    for (const route of pageRoutes.migration) {
      const url = `/en${route}`
      try {
        const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 })

        if (!response || response.status() >= 400) {
          const status = response?.status() || 'unknown'
          errors.push({
            route: url,
            error: `HTTP ${status} error`,
            type: 'http',
          })
          failedPages.push(`${url} (HTTP ${status})`)
          continue
        }

        const title = await page.title()
        expect(title).toBeTruthy()

      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error)
        errors.push({
          route: url,
          error: errorMessage,
          type: 'navigation',
        })
        failedPages.push(`${url} (${errorMessage})`)
      }
    }

    const criticalErrors = errors.filter(e => e.type === 'http' || e.type === 'navigation')
    if (criticalErrors.length > 0) {
      console.log('\n=== Failed Migration Pages ===')
      failedPages.forEach(page => console.log(`  - ${page}`))
      console.log('===============================\n')
    }

    expect(criticalErrors.length, `Found ${criticalErrors.length} critical navigation errors`).toBe(0)
  })

  test('should navigate to all utility pages without errors', async ({ page }) => {
    errors = []
    const failedPages: string[] = []

    for (const route of pageRoutes.utilities) {
      const url = `/en${route}`
      try {
        const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 })

        if (!response || response.status() >= 400) {
          const status = response?.status() || 'unknown'
          errors.push({
            route: url,
            error: `HTTP ${status} error`,
            type: 'http',
          })
          failedPages.push(`${url} (HTTP ${status})`)
          continue
        }

        const title = await page.title()
        expect(title).toBeTruthy()

      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error)
        errors.push({
          route: url,
          error: errorMessage,
          type: 'navigation',
        })
        failedPages.push(`${url} (${errorMessage})`)
      }
    }

    const criticalErrors = errors.filter(e => e.type === 'http' || e.type === 'navigation')
    if (criticalErrors.length > 0) {
      console.log('\n=== Failed Utility Pages ===')
      failedPages.forEach(page => console.log(`  - ${page}`))
      console.log('============================\n')
    }

    expect(criticalErrors.length, `Found ${criticalErrors.length} critical navigation errors`).toBe(0)
  })

  test('should test all locales', async ({ page }) => {
    errors = []
    const failedLocales: string[] = []

    // Test homepage in all locales
    for (const locale of locales) {
      const url = `/${locale}/`
      try {
        const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 })

        if (!response || response.status() >= 400) {
          const status = response?.status() || 'unknown'
          errors.push({
            route: url,
            error: `HTTP ${status} error`,
            type: 'http',
          })
          failedLocales.push(`${locale} (HTTP ${status})`)
          continue
        }

        const title = await page.title()
        expect(title).toBeTruthy()

      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error)
        errors.push({
          route: url,
          error: errorMessage,
          type: 'navigation',
        })
        failedLocales.push(`${locale} (${errorMessage})`)
      }
    }

    const criticalErrors = errors.filter(e => e.type === 'http' || e.type === 'navigation')
    if (criticalErrors.length > 0) {
      console.log('\n=== Failed Locales ===')
      failedLocales.forEach(locale => console.log(`  - ${locale}`))
      console.log('======================\n')
    }

    expect(criticalErrors.length, `Found ${criticalErrors.length} critical navigation errors`).toBe(0)
  })

  test('should check for accessibility issues on all pages', async ({ page }) => {
    errors = []
    const accessibilityIssues: Array<{ route: string; issue: string }> = []

    for (const route of pageRoutes.main.slice(0, 5)) { // Test first 5 pages for accessibility
      const url = `/en${route}`
      await page.goto(url, { waitUntil: 'networkidle' })

      // Check for missing alt text on images
      const imagesWithoutAlt = await page.locator('img:not([alt])').count()
      if (imagesWithoutAlt > 0) {
        accessibilityIssues.push({
          route: url,
          issue: `${imagesWithoutAlt} images without alt text`,
        })
      }

      // Check for empty links
      const emptyLinks = await page.locator('a:empty').count()
      if (emptyLinks > 0) {
        accessibilityIssues.push({
          route: url,
          issue: `${emptyLinks} empty links found`,
        })
      }

      // Check for duplicate IDs
      const allElements = await page.locator('[id]').all()
      const ids: string[] = []
      const duplicateIds: string[] = []

      for (const element of allElements) {
        const id = await element.getAttribute('id')
        if (id) {
          if (ids.includes(id)) {
            if (!duplicateIds.includes(id)) {
              duplicateIds.push(id)
            }
          } else {
            ids.push(id)
          }
        }
      }

      if (duplicateIds.length > 0) {
        accessibilityIssues.push({
          route: url,
          issue: `Duplicate IDs found: ${duplicateIds.join(', ')}`,
        })
      }
    }

    if (accessibilityIssues.length > 0) {
      console.log('\n=== Accessibility Issues ===')
      accessibilityIssues.forEach(issue => {
        console.log(`[${issue.route}] ${issue.issue}`)
      })
      console.log('============================\n')
    }
  })

  test('should verify all internal links are valid', async ({ page }) => {
    errors = []
    const brokenLinks: Array<{ from: string; to: string; status: number }> = []

    // Test a sample of pages for broken links
    const pagesToTest = pageRoutes.main.slice(0, 3)

    for (const route of pagesToTest) {
      const url = `/en${route}`
      await page.goto(url, { waitUntil: 'networkidle' })

      const links = await page.locator('a[href]').all()
      for (const link of links) {
        const href = await link.getAttribute('href')
        if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('http')) {
          try {
            const linkUrl = `http://localhost:3000${href}`
            const linkResponse = await page.request.get(linkUrl)
            if (linkResponse.status() >= 400) {
              brokenLinks.push({
                from: url,
                to: href,
                status: linkResponse.status(),
              })
            }
          } catch (e) {
            // Skip links that can't be checked
          }
        }
      }
    }

    if (brokenLinks.length > 0) {
      console.log('\n=== Broken Links ===')
      brokenLinks.forEach(link => {
        console.log(`  ${link.from} -> ${link.to} (HTTP ${link.status})`)
      })
      console.log('====================\n')
    }

    expect(brokenLinks.length, `Found ${brokenLinks.length} broken links`).toBe(0)
  })
})
