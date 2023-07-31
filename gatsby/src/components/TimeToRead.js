const TimeToRead = timeInMinutes => {
  if (!timeInMinutes) return null

  return `${timeInMinutes} min read`
}

export default TimeToRead
