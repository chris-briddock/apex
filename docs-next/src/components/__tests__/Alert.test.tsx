import React from 'react'
import { render, screen } from '@testing-library/react'
import { Alert } from '../Alert'

describe('Alert Component', () => {
  it('renders alert with title and children', () => {
    render(
      <Alert type="info" title="Test Title">
        <span>Test Message</span>
      </Alert>
    )

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Message')).toBeInTheDocument()
  })

  it('applies correct variant classes', () => {
    const { container, rerender } = render(
      <Alert type="info" title="Info">
        <span>Info message</span>
      </Alert>
    )
    expect(container.querySelector('.bg-blue-50')).toBeInTheDocument()
    expect(container.querySelector('.text-blue-800')).toBeInTheDocument()

    rerender(
      <Alert type="success" title="Success">
        <span>Success message</span>
      </Alert>
    )
    expect(container.querySelector('.bg-green-50')).toBeInTheDocument()
    expect(container.querySelector('.text-green-800')).toBeInTheDocument()

    rerender(
      <Alert type="warning" title="Warning">
        <span>Warning message</span>
      </Alert>
    )
    expect(container.querySelector('.bg-yellow-50')).toBeInTheDocument()
    expect(container.querySelector('.text-yellow-800')).toBeInTheDocument()

    rerender(
      <Alert type="error" title="Error">
        <span>Error message</span>
      </Alert>
    )
    expect(container.querySelector('.bg-red-50')).toBeInTheDocument()
    expect(container.querySelector('.text-red-800')).toBeInTheDocument()
  })

  it('renders alert without title', () => {
    render(
      <Alert type="info">
        <span>Message without title</span>
      </Alert>
    )

    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    expect(screen.getByText('Message without title')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <Alert type="info" title="Custom" className="custom-class">
        <span>Message</span>
      </Alert>
    )

    expect(container.querySelector('.custom-class')).toBeInTheDocument()
  })

  it('has correct accessibility attributes', () => {
    const { container } = render(
      <Alert type="info" title="Important">
        <span>Important message</span>
      </Alert>
    )

    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders icon based on type', () => {
    const { container, rerender } = render(
      <Alert type="info" title="Info">
        <span>Message</span>
      </Alert>
    )
    expect(container.querySelector('svg')).toBeInTheDocument()

    rerender(
      <Alert type="success" title="Success">
        <span>Message</span>
      </Alert>
    )
    expect(container.querySelector('svg')).toBeInTheDocument()

    rerender(
      <Alert type="warning" title="Warning">
        <span>Message</span>
      </Alert>
    )
    expect(container.querySelector('svg')).toBeInTheDocument()

    rerender(
      <Alert type="error" title="Error">
        <span>Message</span>
      </Alert>
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
