function getMetric_ (metric, slug, from, to, options) {
  let warning
  if (metric === 'old_transaction_volume') {
    warning = [
      'WARNING! SAN_VOLUME will get deprecated, make sure you\'re using SAN_TRANSACTION_VOLUME instead.'
    ]
    metric = 'transaction_volume'
  }
  const results = getApiClient_().fetchGetMetric(metric, slug, from, to, options)
  assertHasData_(results)

  const datetimeField = handleDatetimeField(options.interval)
  const headers = ['Date', 'Value']
  const handledResults = [headers].concat(results.timeseriesData.map(result =>
    [
      formatDatetimeField_(result.datetime, datetimeField),
      formatNumber_(result.value)
    ]
  ))

  // Currently, there are two versions of this metric in SanSheets - SAN_VOLUME and SAN_TRANSACTION_VOLUME, the
  // former will be deprecated.
  if (warning) {
    return handledResults.concat([warning])
  }

  return handledResults
}

function aggregatedGetMetric_ (metric, slug, from, to, options) {
  let warning
  if (metric === 'old_transaction_volume') {
    warning = [
      'WARNING! SAN_VOLUME will get deprecated, make sure you\'re using SAN_TRANSACTION_VOLUME instead.'
    ]
    metric = 'transaction_volume'
  }
  const results = getApiClient_().fetchAggregatedGetMetric(metric, slug, from, to, options)
  assertHasData_(results)

  if (results === null || !Object.prototype.hasOwnProperty.call(results, 'aggregatedTimeseriesData')) {
    throw new NoDataError_()
  }

  if (warning) {
    return [formatNumber_(results.aggregatedTimeseriesData), warning]
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

function getMetricMultipleSlugs_ (metric, slugsString, from, to, options) {
  let warning
  if (metric === 'old_transaction_volume') {
    warning = [
      'WARNING! SAN_VOLUME will get deprecated, make sure you\'re using SAN_TRANSACTION_VOLUME instead.'
    ]
    metric = 'transaction_volume'
  }
  const slugsList = slugsString.split(',')
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
  if (warning) {
    return ([headers].concat(reworkedResults)).concat(warning)
  }
  return [headers].concat(reworkedResults)
}
