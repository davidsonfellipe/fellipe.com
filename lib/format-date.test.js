import { describe, it, expect } from 'vitest'
import { getYear } from './format-date'

describe('getYear', () => {
  it('extracts year from a valid date string', () => {
    expect(getYear('2024-06-15')).toBe(2024)
  })

  it('returns null for an invalid date', () => {
    expect(getYear('not-a-date')).toBeNull()
  })
})
