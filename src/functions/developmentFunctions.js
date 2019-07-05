function githubActivity_ (slug, from, to) {
  assertCanAccessHistoricData_(from, slug)
  var results = getApiClient_().fetchGithubActivity(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Activity']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.activity)
    ]
  }))
}

function devActivity_ (slug, from, to) {
  assertCanAccessHistoricData_(from, slug)
  var results = getApiClient_().fetchDevActivity(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Activity']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.activity)
    ]
  }))
}
