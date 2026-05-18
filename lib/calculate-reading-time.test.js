import { describe, it, expect } from 'vitest'
import calculateReadingTime from './calculate-reading-time'

describe('calculateReadingTime', () => {
  it('returns "1 min read" for short text', () => {
    expect(calculateReadingTime('word '.repeat(100))).toBe('1 min read')
  })

  it('rounds up to the next minute', () => {
    expect(calculateReadingTime('word '.repeat(201))).toBe('2 min read')
  })

  it('uses custom wordsPerMinute', () => {
    expect(calculateReadingTime('word '.repeat(100), 100)).toBe('1 min read')
    expect(calculateReadingTime('word '.repeat(101), 100)).toBe('2 min read')
  })
})
