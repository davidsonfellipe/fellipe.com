export const getYear = dateStr => {
  const d = new Date(dateStr)
  return isNaN(d.getTime()) ? null : d.getFullYear()
}
