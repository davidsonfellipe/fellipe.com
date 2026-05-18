import { describe, it, expect } from 'vitest'
import { formatDateToMonthDayYear } from './format-date-to-month-day-year'

describe('formatDateToMonthDayYear', () => {
  it('formats YYYY-MM-DD without timezone shift', () => {
    expect(formatDateToMonthDayYear('2024-01-15')).toBe('Jan 15, 2024')
    expect(formatDateToMonthDayYear('2024-12-01')).toBe('Dec 1, 2024')
  })

  it('returns empty string for falsy input', () => {
    expect(formatDateToMonthDayYear('')).toBe('')
    expect(formatDateToMonthDayYear(null)).toBe('')
    expect(formatDateToMonthDayYear(undefined)).toBe('')
  })
})
