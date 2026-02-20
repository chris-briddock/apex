import React from 'react'
import { render, screen, act } from '@testing-library/react'
import { ReadingProgress } from '../ReadingProgress'

describe('ReadingProgress Component', () => {
  beforeEach(() => {
    // Reset scroll position
    window.scrollY = 0
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      writable: true,
      value: 1000,
    })
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      value: 800,
    })
  })

  it('renders progress bar container', () => {
    render(<ReadingProgress />)
    const progressBar = document.querySelector('.fixed.top-0.left-0.right-0.h-1')
    expect(progressBar).toBeInTheDocument()
  })

  it('renders progress bar fill element', () => {
    render(<ReadingProgress />)
    const progressFill = document.querySelector('.bg-blue-500')
    expect(progressFill).toBeInTheDocument()
  })

  it('initializes with 0% progress', () => {
    render(<ReadingProgress />)
    const progressFill = document.querySelector('.bg-blue-500') as HTMLElement
    expect(progressFill.style.width).toBe('0%')
  })

  it('updates progress on scroll', () => {
    render(<ReadingProgress />)
    const progressFill = document.querySelector('.bg-blue-500') as HTMLElement

    // Simulate scroll
    act(() => {
      window.scrollY = 200
      window.dispatchEvent(new Event('scroll'))
    })

    // Progress should be (200 / (1000 - 800)) * 100 = 100%
    expect(progressFill.style.width).toBe('100%')
  })

  it('caps progress at 100%', () => {
    render(<ReadingProgress />)
    const progressFill = document.querySelector('.bg-blue-500') as HTMLElement

    // Simulate scroll beyond max
    act(() => {
      window.scrollY = 500
      window.dispatchEvent(new Event('scroll'))
    })

    expect(progressFill.style.width).toBe('100%')
  })

  it('handles zero scroll height', () => {
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      writable: true,
      value: 800,
    })

    render(<ReadingProgress />)
    const progressFill = document.querySelector('.bg-blue-500') as HTMLElement

    window.scrollY = 100
    window.dispatchEvent(new Event('scroll'))

    expect(progressFill.style.width).toBe('0%')
  })

  it('cleans up scroll event listener on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener')
    const { unmount } = render(<ReadingProgress />)

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
