function stripLocale(name) {
  const routeNameSeperator = '/' // or whatever you set it to
  return name.substring(0, name.indexOf(routeNameSeperator))
}

export default function pageTransition(from, to) {
  const pageTransitionName = 'fade'
  if (!from || !to || !from.name || !to.name) return pageTransitionName
  return stripLocale(from.name) === stripLocale(to.name)
    ? ''
    : pageTransitionName
}
