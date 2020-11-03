function slugParam (slug) {
  return `slug: "${slug}"`
}

function fromParam (from) {
  if (from.startsWith('utc_now')) {
    return `from: "${from}"`
  }
  return `from: "${toUTC_(from)}"`
}

function toParam (to) {
  if (to.startsWith('utc_now')) {
    return `to: "${to}"`
  }
  return `to: "${toUTC_(to)}"`
}

function intervalParam (interval = '1d') {
  return `interval: "${interval}"`
}

function commonParams (slug, from, to, interval = '1d') {
  return `${slugParam(slug)}, ${fromParam(from)}, ${toParam(to)}, ${intervalParam(interval)}`
}

function handleDatetimeField (interval) {
  return (interval.includes('d') ? 'date' : 'datetime')
}
