function news_ (tag, from, to, size) {
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

function historyTwitterData_ (slug, from, to) {
  var results = getApiClient_().fetchHistoryTwitterData(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Followers Count']
  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.followersCount)
    ]
  }))
}

function socialDominance_ (slug, from, to, social) {
  var results = getApiClient_().fetchSocialDominance(slug, from, to, social)
  assertHasData_(results)

  var headers = ['Date', 'Dominance']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.dominance)
    ]
  }))
}
