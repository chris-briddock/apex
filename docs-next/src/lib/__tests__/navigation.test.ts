import { navigation, componentLinks, utilityLinks, NavItem, NavSection } from '../navigation'

describe('Navigation', () => {
  describe('navigation array', () => {
    it('is defined and non-empty', () => {
      expect(navigation).toBeDefined()
      expect(navigation.length).toBeGreaterThan(0)
    })

    it('has correct structure for each section', () => {
      navigation.forEach((section: NavSection) => {
        expect(section).toHaveProperty('title')
        expect(section).toHaveProperty('items')
        expect(Array.isArray(section.items)).toBe(true)
      })
    })

    it('has correct structure for each nav item', () => {
      navigation.forEach((section: NavSection) => {
        section.items.forEach((item: NavItem) => {
          expect(item).toHaveProperty('title')
          expect(item).toHaveProperty('href')
          expect(typeof item.title).toBe('string')
          expect(typeof item.href).toBe('string')
        })
      })
    })

    it('contains expected sections', () => {
      const sectionTitles = navigation.map((s) => s.title)
      expect(sectionTitles).toContain('Getting Started')
      expect(sectionTitles).toContain('Design System')
      expect(sectionTitles).toContain('Core Concepts')
      expect(sectionTitles).toContain('Reference')
      expect(sectionTitles).toContain('Migration')
    })

    it('contains expected items in Getting Started section', () => {
      const gettingStarted = navigation.find((s) => s.title === 'Getting Started')
      expect(gettingStarted).toBeDefined()
      const itemTitles = gettingStarted?.items.map((i) => i.title)
      expect(itemTitles).toContain('Introduction')
      expect(itemTitles).toContain('Getting Started')
    })

    it('contains expected items in Core Concepts section', () => {
      const coreConcepts = navigation.find((s) => s.title === 'Core Concepts')
      expect(coreConcepts).toBeDefined()
      const itemTitles = coreConcepts?.items.map((i) => i.title)
      expect(itemTitles).toContain('Utilities')
      expect(itemTitles).toContain('Components')
      expect(itemTitles).toContain('Responsive Design')
      expect(itemTitles).toContain('Dark Mode')
    })
  })

  describe('componentLinks array', () => {
    it('is defined and non-empty', () => {
      expect(componentLinks).toBeDefined()
      expect(componentLinks.length).toBeGreaterThan(0)
    })

    it('has correct structure for each component link', () => {
      componentLinks.forEach((link) => {
        expect(link).toHaveProperty('title')
        expect(link).toHaveProperty('href')
        expect(link).toHaveProperty('description')
        expect(typeof link.title).toBe('string')
        expect(typeof link.href).toBe('string')
        expect(typeof link.description).toBe('string')
      })
    })

    it('contains expected components', () => {
      const titles = componentLinks.map((l) => l.title)
      expect(titles).toContain('Buttons')
      expect(titles).toContain('Cards')
      expect(titles).toContain('Forms')
      expect(titles).toContain('Alerts')
      expect(titles).toContain('Badges')
      expect(titles).toContain('Tables')
      expect(titles).toContain('Tabs')
      expect(titles).toContain('Modals')
      expect(titles).toContain('Dropdowns')
      expect(titles).toContain('Accordion')
    })

    it('has valid hrefs starting with /components/', () => {
      componentLinks.forEach((link) => {
        expect(link.href).toMatch(/^\/components\//)
      })
    })
  })

  describe('utilityLinks array', () => {
    it('is defined and non-empty', () => {
      expect(utilityLinks).toBeDefined()
      expect(utilityLinks.length).toBeGreaterThan(0)
    })

    it('has correct structure for each utility link', () => {
      utilityLinks.forEach((link) => {
        expect(link).toHaveProperty('title')
        expect(link).toHaveProperty('href')
        expect(link).toHaveProperty('description')
        expect(typeof link.title).toBe('string')
        expect(typeof link.href).toBe('string')
        expect(typeof link.description).toBe('string')
      })
    })

    it('contains expected utilities', () => {
      const titles = utilityLinks.map((l) => l.title)
      expect(titles).toContain('Spacing')
      expect(titles).toContain('Typography')
    })

    it('has valid hrefs starting with /utilities/', () => {
      utilityLinks.forEach((link) => {
        expect(link.href).toMatch(/^\/utilities\//)
      })
    })
  })
})
