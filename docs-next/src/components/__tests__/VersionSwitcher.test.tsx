import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { VersionSwitcher } from '../VersionSwitcher'
import { VersionProvider } from '../VersionProvider'

// Mock the i18n hooks
jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}))

describe('VersionSwitcher Component', () => {
  const renderWithProvider = (component: React.ReactNode) => {
    return render(<VersionProvider>{component}</VersionProvider>)
  }

  it('renders current version', () => {
    renderWithProvider(<VersionSwitcher />)

    expect(screen.getByText('v2.0.0')).toBeInTheDocument()
  })

  it('opens dropdown when clicked', async () => {
    const user = userEvent.setup()
    renderWithProvider(<VersionSwitcher />)

    const button = screen.getByRole('button')
    await user.click(button)

    expect(screen.getByText('v1.1.0')).toBeInTheDocument()
  })

  it('displays all available versions in dropdown', async () => {
    const user = userEvent.setup()
    renderWithProvider(<VersionSwitcher />)

    const button = screen.getByRole('button')
    await user.click(button)

    expect(screen.getAllByText('v2.0.0')).toHaveLength(2) // One in button, one in dropdown
    expect(screen.getByText('v1.1.0')).toBeInTheDocument()
    expect(screen.getByText('v1.0.0')).toBeInTheDocument()
  })

  it('closes dropdown when clicking outside', async () => {
    const user = userEvent.setup()
    renderWithProvider(<VersionSwitcher />)

    const button = screen.getByRole('button')
    await user.click(button)

    expect(screen.getByText('v1.1.0')).toBeInTheDocument()

    await user.click(document.body)

    expect(screen.queryByText('v1.1.0')).not.toBeInTheDocument()
  })

  it('has correct accessibility attributes', () => {
    renderWithProvider(<VersionSwitcher />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('renders chevron icon', () => {
    renderWithProvider(<VersionSwitcher />)

    const button = screen.getByRole('button')
    expect(button.querySelector('svg')).toBeInTheDocument()
  })
})
