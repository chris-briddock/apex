import { getDocument, getAllDocuments, searchDocuments, Document } from '../documents'

// Mock next/cache
jest.mock('next/cache', () => ({
  cacheLife: jest.fn(() => ({})),
  cacheTag: jest.fn(() => ({})),
}))

describe('Documents Library', () => {
  describe('getDocument', () => {
    it('returns a document with correct structure', async () => {
      const doc = await getDocument('test-slug')

      expect(doc).toBeDefined()
      expect(doc).toHaveProperty('slug')
      expect(doc).toHaveProperty('title')
      expect(doc).toHaveProperty('description')
      expect(doc).toHaveProperty('content')
      expect(doc).toHaveProperty('category')
      expect(doc).toHaveProperty('lastUpdated')
    })

    it('returns document with matching slug', async () => {
      const slug = 'getting-started'
      const doc = await getDocument(slug)

      expect(doc.slug).toBe(slug)
    })

    it('capitalizes the first letter of slug for title', async () => {
      const doc = await getDocument('test-slug')

      expect(doc.title).toBe('Test-slug')
    })

    it('includes description based on slug', async () => {
      const slug = 'components'
      const doc = await getDocument(slug)

      expect(doc.description).toContain(slug)
    })

    it('includes content based on slug', async () => {
      const slug = 'utilities'
      const doc = await getDocument(slug)

      expect(doc.content).toContain(slug)
    })

    it('has category set to docs', async () => {
      const doc = await getDocument('any-slug')

      expect(doc.category).toBe('docs')
    })

    it('has valid lastUpdated date', async () => {
      const doc = await getDocument('test')

      expect(doc.lastUpdated).toBeDefined()
      const date = new Date(doc.lastUpdated)
      expect(date).toBeInstanceOf(Date)
      expect(isNaN(date.getTime())).toBe(false)
    })
  })

  describe('getAllDocuments', () => {
    it('returns an array of documents', async () => {
      const docs = await getAllDocuments()

      expect(Array.isArray(docs)).toBe(true)
      expect(docs.length).toBeGreaterThan(0)
    })

    it('returns documents with correct structure', async () => {
      const docs = await getAllDocuments()

      docs.forEach((doc: Document) => {
        expect(doc).toHaveProperty('slug')
        expect(doc).toHaveProperty('title')
        expect(doc).toHaveProperty('description')
        expect(doc).toHaveProperty('content')
        expect(doc).toHaveProperty('category')
        expect(doc).toHaveProperty('lastUpdated')
      })
    })

    it('returns expected number of documents', async () => {
      const docs = await getAllDocuments()

      expect(docs.length).toBe(4) // Based on the slugs array in the implementation
    })

    it('includes expected slugs', async () => {
      const docs = await getAllDocuments()
      const slugs = docs.map((d: Document) => d.slug)

      expect(slugs).toContain('getting-started')
      expect(slugs).toContain('components')
      expect(slugs).toContain('utilities')
      expect(slugs).toContain('customization')
    })
  })

  describe('searchDocuments', () => {
    it('returns an array of documents', async () => {
      const results = await searchDocuments('test')

      expect(Array.isArray(results)).toBe(true)
    })

    it('returns documents matching title', async () => {
      const results = await searchDocuments('getting')

      expect(results.length).toBeGreaterThan(0)
      expect(results[0].title.toLowerCase()).toContain('getting')
    })

    it('returns documents matching description', async () => {
      const results = await searchDocuments('documentation')

      expect(results.length).toBeGreaterThan(0)
    })

    it('is case insensitive', async () => {
      const results1 = await searchDocuments('GETTING')
      const results2 = await searchDocuments('getting')

      expect(results1.length).toBe(results2.length)
    })

    it('returns empty array for non-matching query', async () => {
      const results = await searchDocuments('nonexistent-term-xyz-123')

      expect(results).toEqual([])
    })

    it('returns all documents for empty query', async () => {
      const results = await searchDocuments('')

      // Empty query matches all documents since it's a substring of everything
      expect(results.length).toBeGreaterThan(0)
    })

    it('returns all documents for partial matches', async () => {
      const results = await searchDocuments('doc')

      expect(results.length).toBeGreaterThan(0)
    })
  })
})
