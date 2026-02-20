import { locales, defaultLocale, localeLabels, rtlLocales, Locale } from '../config'

describe('i18n Config', () => {
  describe('locales array', () => {
    it('is defined and non-empty', () => {
      expect(locales).toBeDefined()
      expect(locales.length).toBeGreaterThan(0)
    })

    it('contains expected locales', () => {
      expect(locales).toContain('en')
      expect(locales).toContain('ar')
      expect(locales).toContain('es')
      expect(locales).toContain('fr')
      expect(locales).toContain('de')
    })

    it('has exactly 5 locales', () => {
      expect(locales.length).toBe(5)
    })

    it('all locales are strings', () => {
      locales.forEach((locale) => {
        expect(typeof locale).toBe('string')
      })
    })
  })

  describe('defaultLocale', () => {
    it('is defined', () => {
      expect(defaultLocale).toBeDefined()
    })

    it('is set to English', () => {
      expect(defaultLocale).toBe('en')
    })

    it('is included in locales array', () => {
      expect(locales).toContain(defaultLocale)
    })
  })

  describe('localeLabels', () => {
    it('is defined', () => {
      expect(localeLabels).toBeDefined()
    })

    it('has entries for all locales', () => {
      locales.forEach((locale) => {
        expect(localeLabels).toHaveProperty(locale)
      })
    })

    it('each locale label has correct structure', () => {
      locales.forEach((locale) => {
        const label = localeLabels[locale]
        expect(label).toHaveProperty('label')
        expect(label).toHaveProperty('dir')
        expect(label).toHaveProperty('flag')
        expect(typeof label.label).toBe('string')
        expect(typeof label.dir).toBe('string')
        expect(typeof label.flag).toBe('string')
      })
    })

    it('has correct direction for each locale', () => {
      expect(localeLabels.en.dir).toBe('ltr')
      expect(localeLabels.ar.dir).toBe('rtl')
      expect(localeLabels.es.dir).toBe('ltr')
      expect(localeLabels.fr.dir).toBe('ltr')
      expect(localeLabels.de.dir).toBe('ltr')
    })

    it('has correct labels', () => {
      expect(localeLabels.en.label).toBe('English')
      expect(localeLabels.ar.label).toBe('العربية')
      expect(localeLabels.es.label).toBe('Español')
      expect(localeLabels.fr.label).toBe('Français')
      expect(localeLabels.de.label).toBe('Deutsch')
    })

    it('has flag emojis', () => {
      expect(localeLabels.en.flag).toBe('🇺🇸')
      expect(localeLabels.ar.flag).toBe('🇸🇦')
      expect(localeLabels.es.flag).toBe('🇪🇸')
      expect(localeLabels.fr.flag).toBe('🇫🇷')
      expect(localeLabels.de.flag).toBe('🇩🇪')
    })
  })

  describe('rtlLocales', () => {
    it('is defined', () => {
      expect(rtlLocales).toBeDefined()
    })

    it('contains Arabic as RTL locale', () => {
      expect(rtlLocales).toContain('ar')
    })

    it('only contains locales that exist in locales array', () => {
      rtlLocales.forEach((locale) => {
        expect(locales).toContain(locale)
      })
    })

    it('has correct direction in localeLabels for RTL locales', () => {
      rtlLocales.forEach((locale) => {
        expect(localeLabels[locale].dir).toBe('rtl')
      })
    })

    it('has correct direction in localeLabels for LTR locales', () => {
      const ltrLocales = locales.filter((l) => !rtlLocales.includes(l))
      ltrLocales.forEach((locale) => {
        expect(localeLabels[locale].dir).toBe('ltr')
      })
    })
  })
})
