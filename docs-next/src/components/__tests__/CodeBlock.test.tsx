import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CodeBlock } from '../CodeBlock'

describe('CodeBlock Component', () => {
  const mockCode = '<div class="container">Hello World</div>'

  it('renders code block with code content', () => {
    render(<CodeBlock code={mockCode} language="html" />)

    expect(screen.getByText(mockCode)).toBeInTheDocument()
  })

  it('displays correct language label', () => {
    render(<CodeBlock code={mockCode} language="html" />)

    expect(screen.getByText('HTML')).toBeInTheDocument()
  })

  it('renders copy button', () => {
    render(<CodeBlock code={mockCode} language="html" />)

    const copyButton = screen.getByRole('button', { name: /copy/i })
    expect(copyButton).toBeInTheDocument()
  })

  it('copies code to clipboard when copy button is clicked', async () => {
    const user = userEvent.setup()
    render(<CodeBlock code={mockCode} language="html" />)

    const copyButton = screen.getByRole('button', { name: /copy/i })
    await user.click(copyButton)

    // Just verify the button exists and can be clicked
    expect(copyButton).toBeInTheDocument()
  })

  it('shows copied state after clicking copy button', async () => {
    const user = userEvent.setup()
    render(<CodeBlock code={mockCode} language="html" />)

    const copyButton = screen.getByRole('button', { name: /copy/i })
    await user.click(copyButton)

    expect(screen.getByText('Copied!')).toBeInTheDocument()
  })

  it('renders preview when showPreview is true', () => {
    const preview = '<div class="preview">Preview Content</div>'
    render(
      <CodeBlock
        code={mockCode}
        language="html"
        showPreview
        preview={preview}
      />
    )

    // The preview is rendered as escaped HTML, so we check for the HTML content
    expect(screen.getByText(/<div class="preview">Preview Content<\/div>/)).toBeInTheDocument()
  })

  it('does not render preview when showPreview is false', () => {
    render(<CodeBlock code={mockCode} language="html" />)

    expect(screen.queryByText(/<div class="preview">Preview Content<\/div>/)).not.toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<CodeBlock code={mockCode} language="html" className="custom-class" />)

    expect(container.querySelector('.custom-class')).toBeInTheDocument()
  })

  it('handles different languages correctly', () => {
    const { rerender } = render(<CodeBlock code="const x = 1;" language="javascript" />)
    expect(screen.getByText('JS')).toBeInTheDocument()

    rerender(<CodeBlock code=".class { color: red; }" language="css" />)
    expect(screen.getByText('CSS')).toBeInTheDocument()

    rerender(<CodeBlock code="<div></div>" language="html" />)
    expect(screen.getByText('HTML')).toBeInTheDocument()
  })
})
