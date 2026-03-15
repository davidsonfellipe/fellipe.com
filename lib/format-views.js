export const formatViews = views => {
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1).replace(/\.0$/, '')}K views`
  }
  return `${views} views`
}
