/* eslint-disable no-unused-expressions */

require('./helper.js')

const dateFnsFormat = require('date-fns/format')
const subDays = require('date-fns/sub_days')
const eachDay = require('date-fns/each_day')
const startOfYesterday = require('date-fns/start_of_yesterday')
const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD'
const formatDate = (date, format = DEFAULT_DATE_FORMAT) => dateFnsFormat(date, format)

const testFieldTypes = (resources, expected) => {
  Object.entries(expected).forEach(([attr, type], index) => {
    it(`returns ${attr} attribute`, () => {
      expect(resources[index]).to.be.a(type)
    })
  })
}

const numberOfDays = 3
const to = startOfYesterday()
const from = subDays(to, numberOfDays)
const days = eachDay(from, subDays(to, 1)) // last day should not be included (has not started yet)

const token = 'santiment'
const fiatCurrency = 'USD'

describe('SAN_DAILY_PRICES', () => {
  const expected = {
    date: 'string',
    priceUsd: 'number',
    volume: 'number'
  }

  const response = san.SAN_DAILY_PRICES(token, from, to)
  const headers = response[0]
  const prices = response[1]

  testFieldTypes(prices, expected)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'USD Price', 'Volume']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const prices = san.SAN_DAILY_PRICES(token, from, to)

    expect(prices.length).to.equal(numberOfDays + 1) // headers
    for (let [index, day] of days.entries()) {
      expect(prices[index + 1][0]).to.equal(formatDate(day))
    }
  })

  it('checks for historic data', () => {
    const checkForHistoricDataMock = sandbox.mock(san).expects('checkForHistoricData_')

    san.SAN_DAILY_PRICES(token, from, to)

    expect(checkForHistoricDataMock).to.have.been.called
    checkForHistoricDataMock.verify()
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

describe('SAN_DAILY_ACTIVE_ADDRESSES', () => {
  const expected = {
    date: 'string',
    activeAddresses: 'number'
  }

  const response = san.SAN_DAILY_ACTIVE_ADDRESSES(token, from, to)
  const headers = response[0]
  const addresses = response[1]

  testFieldTypes(addresses, expected)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Active Addresses']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const addresses = san.SAN_DAILY_ACTIVE_ADDRESSES(token, from, to)

    expect(addresses.length).to.equal(numberOfDays + 2) // headers + last day

    for (let [index, day] of days.entries()) {
      expect(addresses[index + 1][0]).to.equal(formatDate(day))
    }
  })

  it('checks for historic data', () => {
    const checkForHistoricDataMock = sandbox.mock(san).expects('checkForHistoricData_')

    san.SAN_DAILY_ACTIVE_ADDRESSES(token, from, to)

    expect(checkForHistoricDataMock).to.have.been.called
    checkForHistoricDataMock.verify()
  })
})

describe('SAN_DAILY_TRANSACTION_VOLUME', () => {
  const expected = {
    date: 'string',
    transactionVolume: 'number'
  }

  const response = san.SAN_DAILY_TRANSACTION_VOLUME(token, from, to)
  const headers = response[0]
  const volumes = response[1]

  testFieldTypes(volumes, expected)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Transaction Volume']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const transcationVolumes = san.SAN_DAILY_TRANSACTION_VOLUME(token, from, to)

    expect(transcationVolumes.length).to.equal(numberOfDays + 2) // headers + last day

    for (let [index, day] of days.entries()) {
      expect(transcationVolumes[index + 1][0]).to.equal(formatDate(day))
    }
  })

  it('checks for historic data', () => {
    const checkForHistoricDataMock = sandbox.mock(san).expects('checkForHistoricData_')

    san.SAN_DAILY_TRANSACTION_VOLUME(token, from, to)

    expect(checkForHistoricDataMock).to.have.been.called
    checkForHistoricDataMock.verify()
  })
})

describe('SAN_DAILY_OHLC', () => {
  const expected = {
    date: 'string',
    closePriceUsd: 'number',
    highPriceUsd: 'number',
    lowPriceUsd: 'number',
    openPriceUsd: 'number'
  }

  const response = san.SAN_DAILY_OHLC(token, from, to)
  const headers = response[0]
  const ohlc = response[1]

  testFieldTypes(ohlc, expected)

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
    const ohlc = san.SAN_DAILY_OHLC(token, from, to)

    expect(ohlc.length).to.equal(numberOfDays + 2) // headers + last day

    for (let [index, day] of days.entries()) {
      expect(ohlc[index + 1][0]).to.equal(formatDate(day))
    }
  })

  it('checks for historic data', () => {
    const checkForHistoricDataMock = sandbox.mock(san).expects('checkForHistoricData_')

    san.SAN_DAILY_OHLC(token, from, to)

    expect(checkForHistoricDataMock).to.have.been.called
    checkForHistoricDataMock.verify()
  })
})

describe('SAN_DAILY_PRICE_VOLUME_DIFF', () => {
  const expected = {
    date: 'string',
    priceChange: 'number',
    priceVolumeDiff: 'number',
    volumeChange: 'number'
  }

  const response = san.SAN_DAILY_PRICE_VOLUME_DIFF(fiatCurrency, token, from, to)
  const headers = response[0]
  const volumes = response[1]

  testFieldTypes(volumes, expected)

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
    const volumes = san.SAN_DAILY_PRICE_VOLUME_DIFF(fiatCurrency, token, from, to)

    expect(volumes.length).to.equal(numberOfDays + 1) // headers

    for (let [index, day] of days.entries()) {
      expect(volumes[index + 1][0]).to.equal(formatDate(day))
    }
  })

  it('checks for historic data', () => {
    const checkForHistoricDataMock = sandbox.mock(san).expects('checkForHistoricData_')

    san.SAN_DAILY_PRICE_VOLUME_DIFF(fiatCurrency, token, from, to)

    expect(checkForHistoricDataMock).to.have.been.called
    checkForHistoricDataMock.verify()
  })
})

describe('SAN_SOCIAL_VOLUME_PROJECTS', () => {
  const projects = san.SAN_SOCIAL_VOLUME_PROJECTS()

  it('returns an array of projects', () => {
    expect(projects).to.be.an('array')
  })

  it('has proper header', () => {
    expect(projects[0]).to.equal('Social Volume Projects')
  })
})

describe('SAN_DAILY_SOCIAL_VOLUME', () => {
  const token = 'bitcoin'

  const expected = {
    date: 'string',
    mentionsCount: 'number'
  }

  const response = san.SAN_DAILY_SOCIAL_VOLUME(token, from, to, 'TELEGRAM_CHATS_OVERVIEW')
  const headers = response[0]
  const volumes = response[1]

  testFieldTypes(volumes, expected)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Mentions Count']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const token = 'bitcoin'
    const volumes = san.SAN_DAILY_SOCIAL_VOLUME(token, from, to, 'TELEGRAM_CHATS_OVERVIEW')

    expect(volumes.length).to.equal(numberOfDays + 1) // headers

    for (let [index, day] of days.entries()) {
      expect(volumes[index + 1][0]).to.equal(formatDate(day))
    }
  })

  it('checks for historic data', () => {
    const checkForHistoricDataMock = sandbox.mock(san).expects('checkForHistoricData_')

    san.SAN_DAILY_SOCIAL_VOLUME(token, from, to, 'TELEGRAM_CHATS_OVERVIEW')

    expect(checkForHistoricDataMock).to.have.been.called
    checkForHistoricDataMock.verify()
  })
})

describe('SAN_DAILY_GITHUB_ACTIVITY', () => {
  const expected = {
    date: 'string',
    activity: 'number'
  }

  const response = san.SAN_DAILY_GITHUB_ACTIVITY(token, from, to)
  const headers = response[0]
  const activities = response[1]

  testFieldTypes(activities, expected)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Activity']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const activities = san.SAN_DAILY_GITHUB_ACTIVITY(token, from, to)

    expect(activities.length).to.equal(numberOfDays + 1) // headers
    for (let [index, day] of days.entries()) {
      expect(activities[index + 1][0]).to.equal(formatDate(day))
    }
  })

  it('checks for historic data', () => {
    const checkForHistoricDataMock = sandbox.mock(san).expects('checkForHistoricData_')

    san.SAN_DAILY_GITHUB_ACTIVITY(token, from, to)

    expect(checkForHistoricDataMock).to.have.been.called
    checkForHistoricDataMock.verify()
  })
})

describe('SAN_DAILY_DEV_ACTIVITY', () => {
  const expected = {
    date: 'string',
    activity: 'number'
  }

  const response = san.SAN_DAILY_DEV_ACTIVITY(token, from, to)
  const headers = response[0]
  const activities = response[1]

  testFieldTypes(activities, expected)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Activity']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const activities = san.SAN_DAILY_DEV_ACTIVITY(token, from, to)

    expect(activities.length).to.equal(numberOfDays + 1) // headers
    for (let [index, day] of days.entries()) {
      expect(activities[index + 1][0]).to.equal(formatDate(day))
    }
  })

  it('checks for historic data', () => {
    const checkForHistoricDataMock = sandbox.mock(san).expects('checkForHistoricData_')

    san.SAN_DAILY_DEV_ACTIVITY(token, from, to)

    expect(checkForHistoricDataMock).to.have.been.called
    checkForHistoricDataMock.verify()
  })
})

describe('SAN_DAILY_NETWORK_GROWTH', () => {
  const expected = {
    date: 'string',
    newAddresses: 'number'
  }

  const response = san.SAN_DAILY_NETWORK_GROWTH(token, from, to)
  const headers = response[0]
  const networkGrowths = response[1]

  testFieldTypes(networkGrowths, expected)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'New Addresses']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const networkGrowths = san.SAN_DAILY_NETWORK_GROWTH(token, from, to)

    expect(networkGrowths.length).to.equal(numberOfDays + 2) // headers
    for (let [index, day] of days.entries()) {
      expect(networkGrowths[index + 1][0]).to.equal(formatDate(day))
    }
  })

  it('checks for historic data', () => {
    const checkForHistoricDataMock = sandbox.mock(san).expects('checkForHistoricData_')

    san.SAN_DAILY_NETWORK_GROWTH(token, from, to)

    expect(checkForHistoricDataMock).to.have.been.called
    checkForHistoricDataMock.verify()
  })
})

describe('SAN_DAILY_EXCHANGE_FUNDS_FLOW', () => {
  const expected = {
    date: 'string',
    inOutDifference: 'number'
  }

  const response = san.SAN_DAILY_EXCHANGE_FUNDS_FLOW(token, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'In/Out Difference']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_DAILY_EXCHANGE_FUNDS_FLOW(token, from, to)

    expect(results.length).to.equal(numberOfDays + 2) // headers + last day
    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })

  it('checks for historic data', () => {
    const checkForHistoricDataMock = sandbox.mock(san).expects('checkForHistoricData_')

    san.SAN_DAILY_EXCHANGE_FUNDS_FLOW(token, from, to)

    expect(checkForHistoricDataMock).to.have.been.called
    checkForHistoricDataMock.verify()
  })
})

describe('SAN_DAILY_TOKEN_CIRCULATION', () => {
  const expected = {
    date: 'string',
    tokenCirculation: 'number'
  }

  const response = san.SAN_DAILY_TOKEN_CIRCULATION(token, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Token Circulation']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_DAILY_TOKEN_CIRCULATION(token, from, to)

    expect(results.length).to.equal(numberOfDays + 2) // headers
    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })

  it('checks for historic data', () => {
    const checkForHistoricDataMock = sandbox.mock(san).expects('checkForHistoricData_')

    san.SAN_DAILY_TOKEN_CIRCULATION(token, from, to)

    expect(checkForHistoricDataMock).to.have.been.called
    checkForHistoricDataMock.verify()
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

  // TODO: Add a test for ordering of the results(like in the other places)
  // when we have it implemented in the API

  it('checks for historic data', () => {
    const source = 'ALL'
    const checkForHistoricDataMock = sandbox.mock(san).expects('checkForHistoricData_')

    san.SAN_DAILY_TRENDING_WORDS(source, size, hour, from, to)

    expect(checkForHistoricDataMock).to.have.been.called
    checkForHistoricDataMock.verify()
  })
})
