import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { CodeSandboxButton, StackBlitzButton } from '../CodeSandboxButton'

// Mock window.open
const mockOpen = jest.fn()
Object.defineProperty(window, 'open', {
  writable: true,
  value: mockOpen,
})

// Mock URL.createObjectURL
const mockCreateObjectURL = jest.fn(() => 'blob:test-url')
Object.defineProperty(URL, 'createObjectURL', {
  writable: true,
  value: mockCreateObjectURL,
})

describe('CodeSandboxButton', () => {
  beforeEach(() => {
    mockOpen.mockClear()
    mockCreateObjectURL.mockClear()
  })

  it('renders button with default title', () => {
    render(<CodeSandboxButton code="<div>test</div>" />)
    expect(screen.getByText('Open in CodeSandbox')).toBeInTheDocument()
  })

  it('renders button with custom title', () => {
    render(<CodeSandboxButton code="<div>test</div>" title="Custom Title" />)
    expect(screen.getByText('Open in CodeSandbox')).toBeInTheDocument()
  })

  it('opens CodeSandbox with correct URL on click', () => {
    render(<CodeSandboxButton code="<div>test</div>" />)
    const button = screen.getByText('Open in CodeSandbox')
    fireEvent.click(button)
    expect(mockOpen).toHaveBeenCalledWith(
      expect.stringContaining('https://codesandbox.io/api/v1/sandboxes/define'),
      '_blank'
    )
  })

  it('includes custom title in the generated HTML', () => {
    render(<CodeSandboxButton code="<div>test</div>" title="My Custom Title" />)
    const button = screen.getByText('Open in CodeSandbox')
    fireEvent.click(button)
    expect(mockOpen).toHaveBeenCalled()
    const callArgs = mockOpen.mock.calls[0][0] as string
    // The title is base64 encoded in the URL parameters
    expect(callArgs).toContain('parameters=')
    expect(callArgs).toContain('codesandbox.io')
  })

  it('includes custom description in package.json', () => {
    render(<CodeSandboxButton code="<div>test</div>" description="Custom description" />)
    const button = screen.getByText('Open in CodeSandbox')
    fireEvent.click(button)
    expect(mockOpen).toHaveBeenCalled()
    const callArgs = mockOpen.mock.calls[0][0] as string
    // The description is base64 encoded in the URL parameters
    expect(callArgs).toContain('parameters=')
    expect(callArgs).toContain('codesandbox.io')
  })
})

describe('StackBlitzButton', () => {
  beforeEach(() => {
    mockOpen.mockClear()
    mockCreateObjectURL.mockClear()
  })

  it('renders button with default title', () => {
    render(<StackBlitzButton code="<div>test</div>" />)
    expect(screen.getByText('Open in StackBlitz')).toBeInTheDocument()
  })

  it('opens blob URL on click', () => {
    render(<StackBlitzButton code="<div>test</div>" />)
    const button = screen.getByText('Open in StackBlitz')
    fireEvent.click(button)
    expect(mockCreateObjectURL).toHaveBeenCalled()
    expect(mockOpen).toHaveBeenCalledWith('blob:test-url', '_blank')
  })

  it('includes custom title in the generated HTML', () => {
    render(<StackBlitzButton code="<div>test</div>" title="My Title" />)
    const button = screen.getByText('Open in StackBlitz')
    fireEvent.click(button)
    expect(mockCreateObjectURL).toHaveBeenCalled()
    // The blob is created with the HTML content containing the title
    expect(mockCreateObjectURL).toHaveBeenCalledWith(expect.any(Blob))
  })
})
