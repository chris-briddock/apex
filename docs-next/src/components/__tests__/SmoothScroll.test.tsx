import React from 'react'
import { render } from '@testing-library/react'
import { SmoothScroll } from '../SmoothScroll'

describe('SmoothScroll Component', () => {
  beforeEach(() => {
    // Reset history
    window.history.pushState = jest.fn()
    window.scrollTo = jest.fn()
  })

  it('renders null (no visible output)', () => {
    const { container } = render(<SmoothScroll />)
    expect(container.firstChild).toBeNull()
  })

  it('sets up click event listener on mount', () => {
    const addEventListenerSpy = jest.spyOn(document, 'addEventListener')
    render(<SmoothScroll />)
    expect(addEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function))
    addEventListenerSpy.mockRestore()
  })

  it('removes click event listener on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener')
    const { unmount } = render(<SmoothScroll />)
    unmount()
    expect(removeEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function))
    removeEventListenerSpy.mockRestore()
  })

  it('handles anchor link click with smooth scroll', () => {
    // Create a mock anchor element
    const mockElement = document.createElement('div')
    mockElement.id = 'test-section'
    document.body.appendChild(mockElement)

    Object.defineProperty(mockElement, 'getBoundingClientRect', {
      value: () => ({ top: 200 }),
    })

    render(<SmoothScroll />)

    // Create and dispatch click event on anchor
    const anchor = document.createElement('a')
    anchor.href = '#test-section'
    document.body.appendChild(anchor)

    // Create a proper click event
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    })
    anchor.dispatchEvent(clickEvent)

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 100, // 200 - 100 (headerOffset)
      behavior: 'smooth',
    })

    expect(window.history.pushState).toHaveBeenCalledWith(null, '', '#test-section')

    document.body.removeChild(anchor)
    document.body.removeChild(mockElement)
  })

  it('ignores anchor links with only #', () => {
    render(<SmoothScroll />)

    const anchor = document.createElement('a')
    anchor.href = '#'
    anchor.click()

    expect(window.scrollTo).not.toHaveBeenCalled()
  })

  it('ignores non-anchor elements', () => {
    render(<SmoothScroll />)

    const button = document.createElement('button')
    button.click()

    expect(window.scrollTo).not.toHaveBeenCalled()
  })

  it('ignores anchor links without href starting with #', () => {
    render(<SmoothScroll />)

    const anchor = document.createElement('a')
    anchor.href = 'https://example.com'
    anchor.click()

    expect(window.scrollTo).not.toHaveBeenCalled()
  })

  it('handles missing target element gracefully', () => {
    render(<SmoothScroll />)

    const anchor = document.createElement('a')
    anchor.href = '#non-existent'
    anchor.click()

    expect(window.scrollTo).not.toHaveBeenCalled()
  })
})
