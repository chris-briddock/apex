import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LanguageSwitcher } from '../LanguageSwitcher'

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

describe('LanguageSwitcher Component', () => {
  it('renders current language', () => {
    render(<LanguageSwitcher />)

    expect(screen.getByText('🇺🇸')).toBeInTheDocument()
    expect(screen.getByText('English')).toBeInTheDocument()
  })

  it('opens dropdown when clicked', async () => {
    const user = userEvent.setup()
    render(<LanguageSwitcher />)

    const button = screen.getByRole('button')
    await user.click(button)

    expect(screen.getByText('Español')).toBeInTheDocument()
    expect(screen.getByText('Français')).toBeInTheDocument()
  })

  it('displays all available languages in dropdown', async () => {
    const user = userEvent.setup()
    render(<LanguageSwitcher />)

    const button = screen.getByRole('button')
    await user.click(button)

    expect(screen.getAllByText('English')).toHaveLength(2) // One in button, one in dropdown
    expect(screen.getByText('Español')).toBeInTheDocument()
    expect(screen.getByText('Français')).toBeInTheDocument()
    expect(screen.getByText('Deutsch')).toBeInTheDocument()
    expect(screen.getByText('العربية')).toBeInTheDocument()
  })

  it('closes dropdown when clicking outside', async () => {
    const user = userEvent.setup()
    render(<LanguageSwitcher />)

    const button = screen.getByRole('button')
    await user.click(button)

    expect(screen.getByText('Español')).toBeInTheDocument()

    await user.click(document.body)

    expect(screen.queryByText('Español')).not.toBeInTheDocument()
  })

  it('has correct accessibility attributes', () => {
    render(<LanguageSwitcher />)

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'navigation.toggleLanguage')
    expect(button).toHaveAttribute('title', 'navigation.toggleLanguage')
  })

  it('renders globe icon', () => {
    render(<LanguageSwitcher />)

    const button = screen.getByRole('button')
    expect(button.querySelector('svg')).toBeInTheDocument()
  })
})
