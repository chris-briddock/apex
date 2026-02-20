import { submitFeedback, setVersionPreference, FeedbackData } from '../feedback'

// Mock next/cache
jest.mock('next/cache', () => ({
  revalidatePath: jest.fn(),
}))

describe('Feedback Actions', () => {
  describe('submitFeedback', () => {
    beforeEach(() => {
      jest.clearAllMocks()
      jest.spyOn(console, 'log').mockImplementation()
    })

    it('returns success with message', async () => {
      const formData = new FormData()
      formData.append('rating', 'up')
      formData.append('feedback', 'Great documentation!')
      formData.append('page', '/getting-started')

      const result = await submitFeedback(null, formData)

      expect(result).toEqual({
        success: true,
        message: 'Thank you for your feedback!',
      })
    })

    it('handles positive rating', async () => {
      const formData = new FormData()
      formData.append('rating', 'up')
      formData.append('feedback', 'Helpful!')
      formData.append('page', '/components')

      const result = await submitFeedback(null, formData)

      expect(result.success).toBe(true)
      expect(console.log).toHaveBeenCalledWith(
        'Feedback submitted:',
        expect.objectContaining({
          rating: 'up',
          feedback: 'Helpful!',
          page: '/components',
        })
      )
    })

    it('handles negative rating', async () => {
      const formData = new FormData()
      formData.append('rating', 'down')
      formData.append('feedback', 'Could be clearer')
      formData.append('page', '/utilities')

      const result = await submitFeedback(null, formData)

      expect(result.success).toBe(true)
      expect(console.log).toHaveBeenCalledWith(
        'Feedback submitted:',
        expect.objectContaining({
          rating: 'down',
          feedback: 'Could be clearer',
        })
      )
    })

    it('handles empty feedback text', async () => {
      const formData = new FormData()
      formData.append('rating', 'up')
      formData.append('feedback', '')
      formData.append('page', '/design-system')

      const result = await submitFeedback(null, formData)

      expect(result.success).toBe(true)
    })

    it('includes timestamp in feedback data', async () => {
      const formData = new FormData()
      formData.append('rating', 'up')
      formData.append('feedback', 'Test')
      formData.append('page', '/test')

      await submitFeedback(null, formData)

      const logCall = (console.log as jest.Mock).mock.calls.find(
        (call) => call[0] === 'Feedback submitted:'
      )
      const feedbackData = logCall?.[1] as FeedbackData

      expect(feedbackData).toHaveProperty('timestamp')
      expect(new Date(feedbackData.timestamp)).toBeInstanceOf(Date)
    })

    it('logs feedback data', async () => {
      const formData = new FormData()
      formData.append('rating', 'up')
      formData.append('feedback', 'Test feedback')
      formData.append('page', '/test-page')

      await submitFeedback(null, formData)

      expect(console.log).toHaveBeenCalledWith(
        'Feedback submitted:',
        expect.objectContaining({
          rating: 'up',
          feedback: 'Test feedback',
          page: '/test-page',
          timestamp: expect.any(String),
        })
      )
    })
  })

  describe('setVersionPreference', () => {
    beforeEach(() => {
      jest.clearAllMocks()
      jest.spyOn(console, 'log').mockImplementation()
    })

    it('returns success object', async () => {
      const result = await setVersionPreference('2.0.0')

      expect(result).toEqual({ success: true })
    })

    it('logs version preference', async () => {
      await setVersionPreference('1.1.0')

      expect(console.log).toHaveBeenCalledWith('Version preference set:', '1.1.0')
    })

    it('handles different version strings', async () => {
      const versions = ['2.0.0', '1.1.0', '1.0.0', '2.1.0-beta']

      for (const version of versions) {
        const result = await setVersionPreference(version)
        expect(result.success).toBe(true)
        expect(console.log).toHaveBeenCalledWith('Version preference set:', version)
      }
    })
  })
})
