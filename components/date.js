export default function Date({ dateString }) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  if (!dateString) {
    return 'No date'
  }

  const [year, month, day] = dateString.split('-').map(Number)

  const formattedDate = `${months[month - 1]} ${day}, ${year}`

  return formattedDate
}
