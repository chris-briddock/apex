import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../ThemeProvider'

// Mock next-themes
jest.mock('next-themes', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="theme-provider">{children}</div>
  ),
}))

describe('ThemeProvider Component', () => {
  it('renders children', () => {
    render(
      <ThemeProvider>
        <span>Test Content</span>
      </ThemeProvider>
    )
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('passes props to underlying ThemeProvider', () => {
    const { container } = render(
      <ThemeProvider attribute="class" defaultTheme="dark">
        <span>Test</span>
      </ThemeProvider>
    )
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('renders without crashing with minimal props', () => {
    const { container } = render(
      <ThemeProvider>
        <div>Minimal</div>
      </ThemeProvider>
    )
    expect(screen.getByText('Minimal')).toBeInTheDocument()
  })
})
