/* eslint-disable no-unused-expressions */

require('./helper.js')

const dateFnsFormat = require('date-fns/format')
const subDays = require('date-fns/sub_days')
const eachDay = require('date-fns/each_day')
const startOfYesterday = require('date-fns/start_of_yesterday')
const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD'
const formatDate = (date, format = DEFAULT_DATE_FORMAT) => dateFnsFormat(date, format)

const numberOfDays = 3
const to = startOfYesterday()
const from = subDays(to, numberOfDays)
const days = eachDay(from, subDays(to, 1)) // last day should not be included (has not started yet)

const historicDataTo = subDays(startOfYesterday(), 200)
const historicDataFrom = subDays(historicDataTo, 205)

const slug = 'santiment'
const fiatCurrency = 'USD'

const testFieldTypes = (resources, expected) => {
  Object.entries(expected).forEach(([attr, type], index) => {
    it(`returns ${attr} attribute`, () => {
      expect(resources[index]).to.be.a(type)
    })
  })
}

const testHistoricDataIsForbidden = (func, ...args) => {
  it('returns a message when requested data is historic and no api key is present', () => {
    const result = func(...args)
    expect(result).to.deep.eq([san.HISTORIC_DATA_FORBIDDEN_MSG])
  })
}

const testHandlesNullData = (stubName, func, ...args) => {
  it('returns a message when there is no data', () => {
    sandbox.stub(san.ApiClient_.prototype, stubName).returns(null)

    const result = func(...args)
    expect(result).to.deep.eq([san.NO_DATA_MSG])
  })
}

describe('SAN_PRICES', () => {
  const expected = {
    date: 'string',
    priceUsd: 'number',
    volume: 'number'
  }

  const response = san.SAN_PRICES(slug, from, to)
  const headers = response[0]
  const prices = response[1]

  testFieldTypes(prices, expected)
  testHistoricDataIsForbidden(san.SAN_PRICES, slug, historicDataFrom, historicDataTo)
  testHandlesNullData('fetchPrices', san.SAN_PRICES, slug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'USD Price', 'Volume']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const prices = san.SAN_PRICES(slug, from, to)

    expect(prices.length).to.equal(numberOfDays + 1) // headers
    for (let [index, day] of days.entries()) {
      expect(prices[index + 1][0]).to.equal(formatDate(day))
    }
  })
})

describe('SAN_ALL_PROJECTS', () => {
  const expectedFields = {
    ticker: 'string',
    name: 'string',
    slug: 'string',
    priceUsd: 'number',
    marketcapUsd: 'number',
    volumeUsd: 'number',
    usdBalance: 'number',
    ethBalance: 'number',
    ethSpent30d: 'number',
    ethSpent7d: 'number',
    ethSpent1d: 'number'
  }

  const response = san.SAN_ALL_PROJECTS()
  const headers = response[0]
  const projects = response[1]

  testFieldTypes(projects, expectedFields)
  testHandlesNullData('fetchAllProjects', san.SAN_ALL_PROJECTS)

  it('has proper headers', () => {
    const expectedHeaders = [
      'Ticker',
      'Name',
      'Slug',
      'USD Price',
      'USD Marketcap',
      'USD Volume',
      'USD Balance',
      'ETH Balance',
      'ETH Spent 30D',
      'ETH Spent 7D',
      'ETH Spent 1D'
    ]

    expect(headers).to.deep.equal(expectedHeaders)
  })
})

describe('SAN_ERC20_PROJECTS', () => {
  const expected = {
    ticker: 'string',
    name: 'string',
    slug: 'string',
    priceUsd: 'number',
    marketcapUsd: 'number',
    volumeUsd: 'number',
    usdBalance: 'number',
    ethBalance: 'number',
    ethSpent30d: 'number',
    ethSpent7d: 'number',
    ethSpent1d: 'number',
    mainContractAddress: 'string'
  }

  const response = san.SAN_ERC20_PROJECTS()
  const headers = response[0]
  const projects = response[1]

  testFieldTypes(projects, expected)
  testHandlesNullData('fetchErc20Projects', san.SAN_ERC20_PROJECTS)

  it('has proper headers', () => {
    const expectedHeaders = [
      'Ticker',
      'Name',
      'Slug',
      'USD Price',
      'USD Marketcap',
      'USD Volume',
      'USD Balance',
      'ETH Balance',
      'ETH Spent 30D',
      'ETH Spent 7D',
      'ETH Spent 1D',
      'Main Contract Address'
    ]

    expect(headers).to.deep.equal(expectedHeaders)
  })
})

describe('SAN_ACTIVE_ADDRESSES', () => {
  const expected = {
    date: 'string',
    activeAddresses: 'number'
  }

  const response = san.SAN_ACTIVE_ADDRESSES(slug, from, to)
  const headers = response[0]
  const addresses = response[1]

  testFieldTypes(addresses, expected)
  testHistoricDataIsForbidden(san.SAN_ACTIVE_ADDRESSES, slug, historicDataFrom, historicDataTo)
  testHandlesNullData('fetchActiveAddresses', san.SAN_ACTIVE_ADDRESSES, slug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Active Addresses']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const addresses = san.SAN_ACTIVE_ADDRESSES(slug, from, to)

    expect(addresses.length).to.equal(numberOfDays + 2) // headers + last day

    for (let [index, day] of days.entries()) {
      expect(addresses[index + 1][0]).to.equal(formatDate(day))
    }
  })
})

describe('SAN_TRANSACTION_VOLUME', () => {
  const expected = {
    date: 'string',
    transactionVolume: 'number'
  }

  const response = san.SAN_TRANSACTION_VOLUME(slug, from, to)
  const headers = response[0]
  const volumes = response[1]

  testFieldTypes(volumes, expected)
  testHistoricDataIsForbidden(san.SAN_TRANSACTION_VOLUME, slug, historicDataFrom, historicDataTo)
  testHandlesNullData('fetchTransactionVolume', san.SAN_TRANSACTION_VOLUME, slug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Transaction Volume']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const transcationVolumes = san.SAN_TRANSACTION_VOLUME(slug, from, to)

    expect(transcationVolumes.length).to.equal(numberOfDays + 2) // headers + last day

    for (let [index, day] of days.entries()) {
      expect(transcationVolumes[index + 1][0]).to.equal(formatDate(day))
    }
  })
})

describe('SAN_OHLC', () => {
  const expected = {
    date: 'string',
    closePriceUsd: 'number',
    highPriceUsd: 'number',
    lowPriceUsd: 'number',
    openPriceUsd: 'number'
  }

  const response = san.SAN_OHLC(slug, from, to)
  const headers = response[0]
  const ohlc = response[1]

  testFieldTypes(ohlc, expected)
  testHistoricDataIsForbidden(san.SAN_OHLC, slug, historicDataFrom, historicDataTo)
  testHandlesNullData('fetchOhlc', san.SAN_OHLC, slug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = [
      'Date',
      'Close Price USD',
      'High Price USD',
      'Low Price USD',
      'Open Price USD'
    ]

    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const ohlc = san.SAN_OHLC(slug, from, to)

    expect(ohlc.length).to.equal(numberOfDays + 2) // headers + last day

    for (let [index, day] of days.entries()) {
      expect(ohlc[index + 1][0]).to.equal(formatDate(day))
    }
  })
})

describe('SAN_PRICE_VOLUME_DIFF', () => {
  const expected = {
    date: 'string',
    priceChange: 'number',
    priceVolumeDiff: 'number',
    volumeChange: 'number'
  }

  const response = san.SAN_PRICE_VOLUME_DIFF(fiatCurrency, slug, from, to)
  const headers = response[0]
  const volumes = response[1]

  testFieldTypes(volumes, expected)
  testHistoricDataIsForbidden(
    san.SAN_PRICE_VOLUME_DIFF,
    fiatCurrency,
    slug,
    historicDataFrom,
    historicDataTo)
  testHandlesNullData(
    'fetchPriceVolumeDiff',
    san.SAN_PRICE_VOLUME_DIFF,
    fiatCurrency,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = [
      'Date',
      'Price Change',
      'Price Volume Diff',
      'Volume Change'
    ]

    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const volumes = san.SAN_PRICE_VOLUME_DIFF(fiatCurrency, slug, from, to)

    expect(volumes.length).to.equal(numberOfDays + 1) // headers

    for (let [index, day] of days.entries()) {
      expect(volumes[index + 1][0]).to.equal(formatDate(day))
    }
  })
})

describe('SAN_SOCIAL_VOLUME_PROJECTS', () => {
  testHandlesNullData('fetchSocialVolumeProjects', san.SAN_SOCIAL_VOLUME_PROJECTS)

  const projects = san.SAN_SOCIAL_VOLUME_PROJECTS()

  it('returns an array of projects', () => {
    expect(projects).to.be.an('array')
  })

  it('has proper header', () => {
    expect(projects[0]).to.equal('Social Volume Projects')
  })
})

describe('SAN_SOCIAL_VOLUME', () => {
  const slug = 'bitcoin'
  const socialVolumeType = 'TELEGRAM_CHATS_OVERVIEW'

  const expected = {
    date: 'string',
    mentionsCount: 'number'
  }

  const response = san.SAN_SOCIAL_VOLUME(slug, from, to, socialVolumeType)
  const headers = response[0]
  const volumes = response[1]

  testFieldTypes(volumes, expected)
  testHistoricDataIsForbidden(
    san.SAN_SOCIAL_VOLUME,
    slug,
    historicDataFrom,
    historicDataTo,
    socialVolumeType)
  testHandlesNullData(
    'fetchSocialVolume',
    san.SAN_SOCIAL_VOLUME,
    slug,
    from,
    to,
    socialVolumeType)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Mentions Count']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const slug = 'bitcoin'
    const volumes = san.SAN_SOCIAL_VOLUME(slug, from, to, socialVolumeType)

    expect(volumes.length).to.equal(numberOfDays + 1) // headers

    for (let [index, day] of days.entries()) {
      expect(volumes[index + 1][0]).to.equal(formatDate(day))
    }
  })
})

describe('SAN_GITHUB_ACTIVITY', () => {
  const expected = {
    date: 'string',
    activity: 'number'
  }

  const response = san.SAN_GITHUB_ACTIVITY(slug, from, to)
  const headers = response[0]
  const activities = response[1]

  testFieldTypes(activities, expected)
  testHistoricDataIsForbidden(
    san.SAN_GITHUB_ACTIVITY,
    slug,
    historicDataFrom,
    historicDataTo)
  testHandlesNullData(
    'fetchGithubActivity',
    san.SAN_GITHUB_ACTIVITY,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Activity']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const activities = san.SAN_GITHUB_ACTIVITY(slug, from, to)

    expect(activities.length).to.equal(numberOfDays + 1) // headers
    for (let [index, day] of days.entries()) {
      expect(activities[index + 1][0]).to.equal(formatDate(day))
    }
  })
})

describe('SAN_DEV_ACTIVITY', () => {
  const expected = {
    date: 'string',
    activity: 'number'
  }

  const response = san.SAN_DEV_ACTIVITY(slug, from, to)
  const headers = response[0]
  const activities = response[1]

  testFieldTypes(activities, expected)
  testHistoricDataIsForbidden(
    san.SAN_DEV_ACTIVITY,
    slug,
    historicDataFrom,
    historicDataTo)
  testHandlesNullData(
    'fetchDevActivity',
    san.SAN_DEV_ACTIVITY,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Activity']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const activities = san.SAN_DEV_ACTIVITY(slug, from, to)

    expect(activities.length).to.equal(numberOfDays + 1) // headers
    for (let [index, day] of days.entries()) {
      expect(activities[index + 1][0]).to.equal(formatDate(day))
    }
  })
})

describe('SAN_NETWORK_GROWTH', () => {
  const expected = {
    date: 'string',
    newAddresses: 'number'
  }

  const response = san.SAN_NETWORK_GROWTH(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHistoricDataIsForbidden(san.SAN_NETWORK_GROWTH, slug, historicDataFrom, historicDataTo)
  testHandlesNullData('fetchNetworkGrowth', san.SAN_NETWORK_GROWTH, slug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'New Addresses']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_NETWORK_GROWTH(slug, from, to)

    expect(results.length).to.equal(numberOfDays + 2) // headers + last day
    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})

describe('SAN_EXCHANGE_FUNDS_FLOW', () => {
  const expected = {
    date: 'string',
    inOutDifference: 'number'
  }

  const response = san.SAN_EXCHANGE_FUNDS_FLOW(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHistoricDataIsForbidden(
    san.SAN_EXCHANGE_FUNDS_FLOW,
    slug,
    historicDataFrom,
    historicDataTo)
  testHandlesNullData(
    'fetchExchangeFundsFlow',
    san.SAN_EXCHANGE_FUNDS_FLOW,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'In/Out Difference']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_EXCHANGE_FUNDS_FLOW(slug, from, to)

    expect(results.length).to.equal(numberOfDays + 2) // headers + last day
    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})

describe('SAN_TOKEN_CIRCULATION', () => {
  const expected = {
    date: 'string',
    tokenCirculation: 'number'
  }

  const response = san.SAN_TOKEN_CIRCULATION(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHistoricDataIsForbidden(
    san.SAN_TOKEN_CIRCULATION,
    slug,
    historicDataFrom,
    historicDataTo)
  testHandlesNullData(
    'fetchTokenCirculation',
    san.SAN_TOKEN_CIRCULATION,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Token Circulation']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_TOKEN_CIRCULATION(slug, from, to)

    expect(results.length).to.equal(numberOfDays + 2) // headers
    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})

describe('SAN_DAILY_TRENDING_WORDS', () => {
  const sources = ['TELEGRAM', 'PROFESSIONAL_TRADERS_CHAT', 'REDDIT', 'ALL']

  const size = 3
  const hour = 1

  sources.forEach((source) => {
    describe(`using source: ${source}`, () => {
      const expected = {
        date: 'string',
        word: 'string',
        score: 'number'
      }

      const response = san.SAN_DAILY_TRENDING_WORDS(source, size, hour, from, to)

      const headers = response[0]
      const results = response[1]

      testFieldTypes(results, expected)

      it('has proper headers', () => {
        const expectedHeaders = ['Date', 'Word', 'Score']
        expect(headers).to.deep.equal(expectedHeaders)
      })
    })
  })

  it('returns n records per day', () => {
    const source = 'ALL'
    const results = san.SAN_DAILY_TRENDING_WORDS(source, size, hour, from, to)

    expect(results.length).to.equal((numberOfDays + 1) * size + 1) // last day + headers
  })

  testHistoricDataIsForbidden(
    san.SAN_DAILY_TRENDING_WORDS,
    'ALL',
    size,
    hour,
    historicDataFrom,
    historicDataTo)
  testHandlesNullData(
    'fetchDailyTrendingWords',
    san.SAN_DAILY_TRENDING_WORDS,
    'ALL',
    size,
    hour,
    from,
    to)

  // TODO: Add a test for ordering of the results(like in the other places)
  // when we have it implemented in the API
})

describe('SAN_PROJECT_FUNDAMENTALS', () => {
  const expected = {
    ticker: 'string',
    name: 'string',
    slug: 'string',
    fundsRaisedUsdIcoEndPrice: 'number',
    ethSpent: 'number',
    ethBalance: 'number',
    usdBalance: 'number',
    priceUsd: 'number',
    volumeUsd: 'number',
    marketcapUsd: 'number',
    percentChange24h: 'number',
    percentChange7d: 'number',
    volumeChange24h: 'number',
    availableSupply: 'number',
    averageDevActivity: 'number'
  }

  const response = san.SAN_PROJECT_FUNDAMENTALS(slug)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData('fetchProjectFundamentals', san.SAN_PROJECT_FUNDAMENTALS, slug)

  it('has proper headers', () => {
    const expectedHeaders = [
      'Ticker',
      'Name',
      'Slug',
      'Funds Raised From ICO In USD',
      'ETH Spent 30D',
      'ETH Balance',
      'USD Balance',
      'USD Price',
      'USD Volume',
      'USD Marketcap',
      'Percent Change 24H',
      'Percent Change 7D',
      'Volume Change 24H',
      'Available Supply',
      'Average Dev Activity 30D'
    ]

    expect(headers).to.deep.equal(expectedHeaders)
  })
})

describe('SAN_PROJECT_SOCIAL_DATA', () => {
  const expected = {
    ticker: 'string',
    name: 'string',
    slug: 'string',
    websiteLink: 'string',
    whitepaperLink: 'string',
    facebookLink: 'string',
    blogLink: 'string',
    linkedinLink: 'null',
    githubLink: 'string',
    twitterLink: 'string',
    redditLink: 'string',
    slackLink: 'string'
  }

  const response = san.SAN_PROJECT_SOCIAL_DATA(slug)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData('fetchProjectSocialData', san.SAN_PROJECT_SOCIAL_DATA, slug)

  it('has proper headers', () => {
    const expectedHeaders = [
      'Ticker',
      'Name',
      'Slug',
      'Website Link',
      'Whitepaper Link',
      'Facebook Link',
      'Blog Link',
      'LinkedIn Link',
      'Github Link',
      'Twitter Link',
      'Reddit Link',
      'Chat Link'
    ]

    expect(headers).to.deep.equal(expectedHeaders)
  })
})

describe('SAN_DAILY_TOKEN_AGE_CONSUMED', () => {
  const expected = { date: 'string', tokenAgeConsumed: 'number' }

  const response = san.SAN_DAILY_TOKEN_AGE_CONSUMED(slug, from, to)
  const headers = response[0]
  const activities = response[1]

  testFieldTypes(activities, expected)
  testHistoricDataIsForbidden(
    san.SAN_DAILY_TOKEN_AGE_CONSUMED,
    slug,
    historicDataFrom,
    historicDataTo)
  testHandlesNullData(
    'fetchDailyTokenAgeConsumed',
    san.SAN_DAILY_TOKEN_AGE_CONSUMED,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Token Age Consumed']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_DAILY_TOKEN_AGE_CONSUMED(slug, from, to)

    expect(results.length).to.equal(numberOfDays + 2) // headers + last day
    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})

describe('SAN_DAILY_ACTIVE_DEPOSITS', () => {
  const expected = { date: 'string', activeDeposits: 'number' }

  const response = san.SAN_DAILY_ACTIVE_DEPOSITS(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHistoricDataIsForbidden(
    san.SAN_DAILY_ACTIVE_DEPOSITS,
    slug,
    historicDataFrom,
    historicDataTo)
  testHandlesNullData(
    'fetchDailyActiveDeposits',
    san.SAN_DAILY_ACTIVE_DEPOSITS,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Active Deposits']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_DAILY_ACTIVE_DEPOSITS(slug, from, to)

    expect(results.length).to.equal(numberOfDays + 2) // headers + last day
    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})

describe('SAN_MVRV_RATIO', () => {
  const expected = { date: 'string', ratio: 'number' }

  const response = san.SAN_MVRV_RATIO(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHistoricDataIsForbidden(
    san.SAN_MVRV_RATIO,
    slug,
    historicDataFrom,
    historicDataTo)
  testHandlesNullData(
    'fetchMvrvRatio',
    san.SAN_MVRV_RATIO,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Ratio']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_MVRV_RATIO(slug, from, to)

    expect(results.length).to.equal(numberOfDays + 2) // headers + last day
    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})

describe('SAN_NVT_RATIO', () => {
  const expected = {
    date: 'string',
    nvtRatioTxVolume: 'number',
    nvtRatioCirculation: 'number'
  }

  const response = san.SAN_NVT_RATIO(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHistoricDataIsForbidden(
    san.SAN_NVT_RATIO,
    slug,
    historicDataFrom,
    historicDataTo)
  testHandlesNullData(
    'fetchNvtRatio',
    san.SAN_NVT_RATIO,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = [
      'Date',
      'NVT Ratio Transaction Volume',
      'NVT Ratio Circulation'
    ]
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_NVT_RATIO(slug, from, to)

    expect(results.length).to.equal(numberOfDays + 2) // headers + last day

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})

describe('SAN_GAS_USED', () => {
  const expected = { date: 'string', ethGasUsed: 'number' }

  const response = san.SAN_GAS_USED(from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHistoricDataIsForbidden(
    san.SAN_GAS_USED,
    historicDataFrom,
    historicDataTo)
  testHandlesNullData('fetchGasUsed', san.SAN_GAS_USED, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'ETH Gas Used']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_GAS_USED(from, to)

    expect(results.length).to.equal(numberOfDays + 1) // headers

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})

describe('SAN_REALIZED_VALUE', () => {
  const expected = { date: 'string', realizedValue: 'number' }

  const response = san.SAN_REALIZED_VALUE(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHistoricDataIsForbidden(
    san.SAN_REALIZED_VALUE,
    slug,
    historicDataFrom,
    historicDataTo)
  testHandlesNullData(
    'fetchRealizedValue',
    san.SAN_REALIZED_VALUE,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Realized Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_REALIZED_VALUE(slug, from, to)

    expect(results.length).to.equal(numberOfDays + 2) // headers + last day

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
