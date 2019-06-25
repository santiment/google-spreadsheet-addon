function news_ (tag, from, to, size) {
  assertCanAccessHistoricData_(from, tag)
  var results = getApiClient_().fetchNews(tag, from, to, size)
  assertHasData_(results)

  var headers = ['Date', 'Title', 'Source', 'URL', 'Description']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      result.title,
      result.sourceName,
      result.url,
      result.description
    ]
  }))
}

function socialVolumeProjects_ () {
  var results = getApiClient_().fetchSocialVolumeProjects()
  assertHasData_(results)

  var headers = ['Social Volume Projects']
  return headers.concat(results)
}

function socialVolume_ (slug, from, to, socialVolumeType) {
  assertCanAccessHistoricData_(from, slug)
  var results = getApiClient_().fetchSocialVolume(slug, from, to, socialVolumeType)
  assertHasData_(results)

  var headers = ['Date', 'Mentions Count']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.mentionsCount)
    ]
  }))
}

function trendingWords_ (source, size, hour, from, to) {
  assertCanAccessHistoricData_(from, source)
  var results = getApiClient_().fetchTrendingWords(source, size, hour, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Word', 'Score']

  results = results.map(function (result) {
    return result.topWords.map(function (topWord) {
      return [
        formatDatetimeField_(result.datetime),
        topWord.word,
        formatNumber_(topWord.score)
      ]
    })
  })

  var flatResults = [].concat.apply([], results)
  return [headers].concat(flatResults)
}
