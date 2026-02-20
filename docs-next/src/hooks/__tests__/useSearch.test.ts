import { renderHook, act } from '@testing-library/react'
import { useSearch } from '../useSearch'

// Mock the search data
jest.mock('@/lib/search-data', () => ({
  searchData: [
    {
      title: 'Introduction',
      description: 'Welcome to the Apex documentation',
      href: '/',
      category: 'Getting Started',
      keywords: ['introduction', 'getting started', 'overview'],
    },
    {
      title: 'Getting Started',
      description: 'Learn how to get started with Apex',
      href: '/getting-started/',
      category: 'Getting Started',
      keywords: ['install', 'setup', 'quick start'],
    },
    {
      title: 'Design System',
      description: 'Apex provides a comprehensive design system',
      href: '/design-system/',
      category: 'Design System',
      keywords: ['colors', 'typography', 'spacing'],
    },
  ],
  SearchItem: {} as unknown
}))

describe('useSearch Hook', () => {
  it('initializes with empty query and closed state', () => {
    const { result } = renderHook(() => useSearch())

    expect(result.current.query).toBe('')
    expect(result.current.isOpen).toBe(false)
    expect(result.current.results).toEqual([])
  })

  it('updates query state', () => {
    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.setQuery('test')
    })

    expect(result.current.query).toBe('test')
  })

  it('opens search modal', () => {
    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.openSearch()
    })

    expect(result.current.isOpen).toBe(true)
  })

  it('closes search modal and clears query', () => {
    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.setQuery('test query')
      result.current.openSearch()
    })

    expect(result.current.isOpen).toBe(true)
    expect(result.current.query).toBe('test query')

    act(() => {
      result.current.closeSearch()
    })

    expect(result.current.isOpen).toBe(false)
    expect(result.current.query).toBe('')
  })

  it('toggles search modal', () => {
    const { result } = renderHook(() => useSearch())

    expect(result.current.isOpen).toBe(false)

    act(() => {
      result.current.toggleSearch()
    })

    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.toggleSearch()
    })

    expect(result.current.isOpen).toBe(false)
  })

  it('returns empty results for empty query', () => {
    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.setQuery('')
    })

    expect(result.current.results).toEqual([])
  })

  it('returns empty results for whitespace-only query', () => {
    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.setQuery('   ')
    })

    expect(result.current.results).toEqual([])
  })

  it('returns search results for matching query', () => {
    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.setQuery('introduction')
    })

    expect(result.current.results.length).toBeGreaterThan(0)
    expect(result.current.results[0].title).toContain('Introduction')
  })

  it('returns search results for partial match', () => {
    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.setQuery('intro')
    })

    expect(result.current.results.length).toBeGreaterThan(0)
  })

  it('returns search results for keyword match', () => {
    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.setQuery('install')
    })

    expect(result.current.results.length).toBeGreaterThan(0)
  })

  it('includes score in search results', () => {
    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.setQuery('design')
    })

    if (result.current.results.length > 0) {
      expect(result.current.results[0]).toHaveProperty('score')
    }
  })

  it('clears query when closing via toggle', () => {
    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.setQuery('test query')
      result.current.openSearch()
    })

    expect(result.current.query).toBe('test query')

    act(() => {
      result.current.toggleSearch()
    })

    expect(result.current.isOpen).toBe(false)
    expect(result.current.query).toBe('')
  })
})
