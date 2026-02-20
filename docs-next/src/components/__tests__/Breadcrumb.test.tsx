import React from 'react'
import { render, screen } from '@testing-library/react'
import { Breadcrumb } from '../Breadcrumb'

describe('Breadcrumb Component', () => {
  it('renders breadcrumb items correctly', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Getting Started', href: '/docs/getting-started' },
    ]

    render(<Breadcrumb items={items} />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Documentation')).toBeInTheDocument()
    expect(screen.getByText('Getting Started')).toBeInTheDocument()
  })

  it('renders correct number of separators', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Docs', href: '/docs' },
      { label: 'Guide', href: '/docs/guide' },
    ]

    render(<Breadcrumb items={items} />)

    // Should have 2 separators for 3 items
    const separators = screen.getAllByText('/')
    expect(separators).toHaveLength(2)
  })

  it('renders last item without link when href is not provided', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Current Page' },
    ]

    render(<Breadcrumb items={items} />)

    const lastItem = screen.getByText('Current Page')
    expect(lastItem.tagName).toBe('SPAN')
  })

  it('renders items with href as links', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Docs', href: '/docs' },
    ]

    render(<Breadcrumb items={items} />)

    const homeLink = screen.getByText('Home')
    expect(homeLink.tagName).toBe('A')
    expect(homeLink).toHaveAttribute('href', '/')
  })

  it('has correct accessibility attributes', () => {
    const items = [{ label: 'Home', href: '/' }]

    render(<Breadcrumb items={items} />)

    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })

  it('renders empty breadcrumb when no items provided', () => {
    render(<Breadcrumb items={[]} />)

    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    expect(nav).toBeEmptyDOMElement()
  })

  it('does not render separator for first item', () => {
    const items = [{ label: 'Home', href: '/' }]

    render(<Breadcrumb items={items} />)

    const separators = screen.queryAllByText('/')
    expect(separators).toHaveLength(0)
  })
})
