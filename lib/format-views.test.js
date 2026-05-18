import { describe, it, expect } from 'vitest'
import { formatViews } from './format-views'

describe('formatViews', () => {
  it('shows raw count below 1000', () => {
    expect(formatViews(0)).toBe('0 views')
    expect(formatViews(999)).toBe('999 views')
  })

  it('abbreviates thousands', () => {
    expect(formatViews(1000)).toBe('1K views')
    expect(formatViews(1500)).toBe('1.5K views')
    expect(formatViews(10000)).toBe('10K views')
  })

  it('omits decimal when it would be .0', () => {
    expect(formatViews(2000)).toBe('2K views')
  })
})
