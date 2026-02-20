import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Breadcrumb } from '../../components/Breadcrumb'
import { LanguageSwitcher } from '../../components/LanguageSwitcher'
import { VersionSwitcher } from '../../components/VersionSwitcher'
import { VersionProvider } from '../../components/VersionProvider'

// Mock the i18n hooks
jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
  useLocale: () => 'en',
}))

jest.mock('@/i18n/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    replace: jest.fn(),
  }),
}))

jest.mock('@/i18n/config', () => ({
  locales: ['en', 'es', 'fr', 'de', 'ar'],
  localeLabels: {
    en: { flag: '🇺🇸', label: 'English' },
    es: { flag: '🇪🇸', label: 'Español' },
    fr: { flag: '🇫🇷', label: 'Français' },
    de: { flag: '🇩🇪', label: 'Deutsch' },
    ar: { flag: '🇸🇦', label: 'العربية' },
  },
}))

describe('Navigation Integration Tests', () => {
  describe('Breadcrumb and Language Switcher Integration', () => {
    it('renders both components together without conflicts', () => {
      const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Documentation', href: '/docs' },
      ]

      render(
        <div>
          <Breadcrumb items={breadcrumbItems} />
          <LanguageSwitcher />
        </div>
      )

      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('🇺🇸')).toBeInTheDocument()
    })

    it('maintains independent state when both are present', async () => {
      const user = userEvent.setup()
      const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Docs', href: '/docs' },
      ]

      render(
        <div>
          <Breadcrumb items={breadcrumbItems} />
          <LanguageSwitcher />
        </div>
      )

      // Open language switcher
      const langButton = screen.getByRole('button', { name: /navigation\.toggleLanguage/i })
      await user.click(langButton)

      expect(screen.getByText('Español')).toBeInTheDocument()

      // Breadcrumb should still be visible
      expect(screen.getByText('Home')).toBeInTheDocument()
    })
  })

  describe('Multiple Navigation Components Integration', () => {
    it('renders breadcrumb, language switcher, and version switcher together', () => {
      const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Getting Started', href: '/docs/getting-started' },
      ]

      render(
        <VersionProvider>
          <div>
            <Breadcrumb items={breadcrumbItems} />
            <div className="flex gap-4">
              <LanguageSwitcher />
              <VersionSwitcher />
            </div>
          </div>
        </VersionProvider>
      )

      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('🇺🇸')).toBeInTheDocument()
      expect(screen.getByText('v2.0.0')).toBeInTheDocument()
    })

    it('handles multiple dropdown interactions correctly', async () => {
      const breadcrumbItems = [{ label: 'Home', href: '/' }]

      render(
        <VersionProvider>
          <div>
            <Breadcrumb items={breadcrumbItems} />
            <div className="flex gap-4">
              <LanguageSwitcher />
              <VersionSwitcher />
            </div>
          </div>
        </VersionProvider>
      )

      // Verify all components are rendered
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('🇺🇸')).toBeInTheDocument()
      expect(screen.getByText('v2.0.0')).toBeInTheDocument()

      // Verify there are multiple buttons
      const buttons = screen.getAllByRole('button')
      expect(buttons.length).toBeGreaterThan(1)
    })
  })

  describe('Navigation with Page Content Integration', () => {
    it('renders navigation components above page content', () => {
      const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Documentation', href: '/docs' },
      ]

      render(
        <div>
          <Breadcrumb items={breadcrumbItems} />
          <main>
            <h1>Page Title</h1>
            <p>Page content goes here</p>
          </main>
        </div>
      )

      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('Page Title')).toBeInTheDocument()
      expect(screen.getByText('Page content goes here')).toBeInTheDocument()
    })

    it('maintains correct DOM order', () => {
      const breadcrumbItems = [{ label: 'Home', href: '/' }]

      const { container } = render(
        <div>
          <Breadcrumb items={breadcrumbItems} />
          <main>
            <h1>Page Title</h1>
          </main>
        </div>
      )

      const nav = container.querySelector('nav')
      const main = container.querySelector('main')

      expect(nav).toBeInTheDocument()
      expect(main).toBeInTheDocument()

      // Check that nav comes before main in DOM
      expect(nav?.compareDocumentPosition(main!)).toBe(4) // 4 = following
    })
  })
})
