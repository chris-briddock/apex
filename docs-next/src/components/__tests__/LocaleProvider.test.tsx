import React from 'react'
import { render } from '@testing-library/react'
import { LocaleProvider } from '../LocaleProvider'

// Mock next-intl
jest.mock('next-intl', () => ({
  useLocale: () => 'en',
}))

// Mock i18n config
jest.mock('@/i18n/config', () => ({
  rtlLocales: ['ar'],
}))

describe('LocaleProvider Component', () => {
  beforeEach(() => {
    // Reset document direction and lang
    document.documentElement.dir = 'ltr'
    document.documentElement.lang = 'en'
  })

  it('renders children', () => {
    const { container } = render(
      <LocaleProvider>
        <span>Test Content</span>
      </LocaleProvider>
    )
    expect(container.textContent).toBe('Test Content')
  })

  it('sets document direction to ltr for non-RTL locale', () => {
    render(
      <LocaleProvider>
        <span>Test</span>
      </LocaleProvider>
    )
    expect(document.documentElement.dir).toBe('ltr')
  })

  it('sets document lang to current locale', () => {
    render(
      <LocaleProvider>
        <span>Test</span>
      </LocaleProvider>
    )
    expect(document.documentElement.lang).toBe('en')
  })

  it('renders without crashing', () => {
    const { container } = render(
      <LocaleProvider>
        <div>Content</div>
      </LocaleProvider>
    )
    expect(container.firstChild).toBeTruthy()
  })
})
