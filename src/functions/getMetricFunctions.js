function getMetric_ (metric, slug, from, to, options) {
  const results = getApiClient_().fetchGetMetric(metric, slug, from, to, options)
  assertHasData_(results)

  const datetimeField = handleDatetimeField(options.interval)
  const headers = ['Date', 'Value']
  return [headers].concat(results.timeseriesData.map(result =>
    [
      formatDatetimeField_(result.datetime, datetimeField),
      formatNumber_(result.value)
    ]
  ))
}

function aggregatedGetMetric_ (metric, slug, from, to, options) {
  const results = getApiClient_().fetchAggregatedGetMetric(metric, slug, from, to, options)
  assertHasData_(results)

  if (results === null || !Object.prototype.hasOwnProperty.call(results, 'aggregatedTimeseriesData')) {
    throw new NoDataError_()
  }

  return formatNumber_(results.aggregatedTimeseriesData)
}

function capitalize_ (slugsList) {
  return slugsList.map(slug =>
    slug[0].toUpperCase() + slug.slice(1).toLowerCase()
  ).sort()
}

function lowercase_ (slugsList) {
  return slugsList.map(slug => slug.toLowerCase()).sort()
}

function getMetricMultipleSlugs_ (metric, slugsList, from, to, options) {
  const results = getApiClient_().fetchGetMetricMultipleSlugs(metric, slugsList, from, to, options)
  assertHasData_(results)

  const headers = ['Date'].concat(capitalize_(slugsList))
  const lowercaseSlugsList = lowercase_(slugsList)
  const datetimeField = handleDatetimeField(options.interval)
  const reworkedResults = results.timeseriesDataPerSlug.map(
    (dataSet) => {
      const dataSetInfo = {}
      const dataSetResult = [formatDatetimeField_(dataSet.datetime, datetimeField)]
      dataSet.data.forEach((slugInfo) => {
        dataSetInfo[slugInfo.slug] = slugInfo.value
      })
      lowercaseSlugsList.forEach((slugName) => {
        if (Object.keys(dataSetInfo).indexOf(slugName) < 0) {
          dataSetInfo.slugName = NaN
        }
      })
      lowercaseSlugsList.forEach((slugName) => {
        dataSetResult.push(formatNumber_(dataSetInfo[slugName]))
      })
      return dataSetResult
    }
  )
  return [headers].concat(reworkedResults)
}
