import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SkipLink } from '../SkipLink'

describe('SkipLink Component', () => {
  it('renders skip link with correct text', () => {
    render(<SkipLink />)

    expect(screen.getByText('Skip to main content')).toBeInTheDocument()
  })

  it('has correct accessibility attributes', () => {
    render(<SkipLink />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '#main-content')
  })

  it('is visually hidden but accessible to keyboard users', () => {
    render(<SkipLink />)

    const link = screen.getByRole('link')
    expect(link).toHaveClass('sr-only')
  })

  it('becomes visible on focus', async () => {
    const user = userEvent.setup()
    render(<SkipLink />)

    const link = screen.getByRole('link')
    await user.tab()

    expect(link).toHaveFocus()
  })

  it('navigates to main content when clicked', async () => {
    const user = userEvent.setup()
    render(
      <>
        <SkipLink />
        <main id="main-content">
          <h1>Main Content</h1>
        </main>
      </>
    )

    const link = screen.getByRole('link')
    await user.click(link)

    const mainContent = document.getElementById('main-content')
    expect(mainContent).toBeInTheDocument()
  })
})
