function slugParam (slug) {
  return `slug: "${slug.toLowerCase()}"`
}

function fromParam (from) {
  return `from: "${toUTC_(from)}"`
}

function toParam (to) {
  return `to: "${toUTC_(to)}"`
}

function intervalParam (interval = '1d') {
  return `interval: "${interval}"`
}

function aggregationParam (aggregation = 'null') {
  return `aggregation: ${aggregation}`
}

function commonParams (slug, from, to, interval = '1d') {
  return `${slugParam(slug)}, ${fromParam(from)}, ${toParam(to)}, ${intervalParam(interval)}`
}

function commonParamsAggregated (slug, from, to, aggregated = 'null') {
  return `${slugParam(slug)}, ${fromParam(from)}, ${toParam(to)}, ${aggregationParam(aggregated)}`
}

function handleDatetimeField (interval) {
  return (interval.includes('d') ? 'date' : 'datetime')
}
