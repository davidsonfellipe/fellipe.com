export const formatDateToMonthDayYear = dateString => {
  if (!dateString) {
    return ''
  }

  // Date-only strings (YYYY-MM-DD) should be rendered as-is without
  // timezone conversion to avoid day shifts in negative UTC offsets.
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    const [year, month, day] = dateString.split('-').map(Number)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${months[month - 1]} ${day}, ${year}`
  }

  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('en-US', options)
}
