ApiClient_.prototype.fetchAllProjects = function () {
  var query = {
    'query': '{\
       allProjects {\
         slug\
         name\
         ticker\
         marketcapUsd\
         priceUsd\
         volumeUsd\
         ethBalance\
         usdBalance\
         ethSpent30d: ethSpent(days:30)\
         ethSpent7d: ethSpent(days:7)\
         ethSpent1d: ethSpent(days:1)\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'allProjects')
}

ApiClient_.prototype.fetchErc20Projects = function () {
  var query = {
    'query': '{\
       allErc20Projects {\
         slug\
         name\
         ticker\
         mainContractAddress\
         marketcapUsd\
         priceUsd\
         volumeUsd\
         ethBalance\
         usdBalance\
         ethSpent30d: ethSpent(days:30)\
         ethSpent7d: ethSpent(days:7)\
         ethSpent1d: ethSpent(days:1)\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'allErc20Projects')
}

ApiClient_.prototype.fetchProjectFundamentals = function (slug) {
  var query = {
    'query': '{\
       projectBySlug(slug: "' + slug + '") {\
         ticker\
         name\
         slug\
         fundsRaisedUsdIcoEndPrice\
         ethSpent30d: ethSpent(days:30)\
         ethBalance\
         usdBalance\
         priceUsd\
         percentChange24h\
         percentChange7d\
         volumeChange24h\
         availableSupply\
         marketcapUsd\
         averageDevActivity(days:30)\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'projectBySlug')
}

ApiClient_.prototype.fetchProjectSocialData = function (slug) {
  var query = {
    'query': '{\
      projectBySlug(slug: "' + slug + '") {\
        ticker\
        name\
        slug\
        websiteLink\
        facebookLink\
        blogLink\
        linkedinLink\
        githubLink\
        twitterLink\
        whitepaperLink\
        redditLink\
        slackLink\
      }\
    }'
  }

  return this.conn.graphQLQuery(query, 'projectBySlug')
}
