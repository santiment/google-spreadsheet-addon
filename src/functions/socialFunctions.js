function socialVolumeProjects_ () {
  const results = getApiClient_().fetchSocialVolumeProjects()
  assertHasData_(results)

  const headers = ['Social Volume Projects']
  return headers.concat(results)
}

function socialVolume_ (slug, from, to, socialVolumeType) {
  const results = getApiClient_().fetchSocialVolume(slug, from, to, socialVolumeType)
  assertHasData_(results)

  const headers = ['Date', 'Mentions Count']

  return [headers].concat(results.map(result =>
    [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.mentionsCount)
    ]
  ))
}

function emergingTrends_ (size, from, to) {
  let results = getApiClient_().fetchEmergingTrends(size, from, to)
  assertHasData_(results)

  const headers = ['Date', 'Word', 'Score']

  results = results.map(result =>
    result.topWords.map(topWord =>
      [
        formatDatetimeField_(result.datetime),
        topWord.word,
        formatNumber_(topWord.score)
      ]
    )
  )

  const flatResults = [].concat(...results)
  return [headers].concat(flatResults)
}

function historyTwitterData_ (slug, from, to) {
  const results = getApiClient_().fetchHistoryTwitterData(slug, from, to)
  assertHasData_(results)

  const headers = ['Date', 'Followers Count']
  return [headers].concat(results.map(result =>
    [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.followersCount)
    ]
  ))
}

function socialDominance_ (slug, from, to, source) {
  const sourceArgument = source || 'ALL'
  const results = getApiClient_().fetchSocialDominance(slug, from, to, sourceArgument)
  assertHasData_(results)

  const headers = ['Date', 'Dominance']

  return [headers].concat(results.map(result =>
    [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.dominance)
    ]
  ))
}
