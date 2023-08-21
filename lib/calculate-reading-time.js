/**
 * Calculates the estimated reading time for a given text.
 *
 * @param {string} text - The text content to calculate reading time for.
 * @param {number} wordsPerMinute - Average words read per minute.
 * @returns {string} The estimated reading time in the format: n min read.
 */
function calculateReadingTime(text, wordsPerMinute = 200) {
  const words = text.trim().split(/\s+/)

  const minutes = Math.ceil(words.length / wordsPerMinute)

  return `${minutes} min read`
}

export default calculateReadingTime
