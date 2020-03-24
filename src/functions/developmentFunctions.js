function githubActivity_ (slug, from, to) {
  const results = getApiClient_().fetchGithubActivity(slug, from, to)
  assertHasData_(results)

  const headers = ['Date', 'Activity']

  return [headers].concat(results.map(result =>
    [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.activity)
    ]
  ))
}

function devActivity_ (slug, from, to) {
  const results = getApiClient_().fetchDevActivity(slug, from, to)
  assertHasData_(results)

  const headers = ['Date', 'Activity']

  return [headers].concat(results.map(result =>
    [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.activity)
    ]
  ))
}
