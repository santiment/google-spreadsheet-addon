/* eslint-disable no-unused-expressions */

require('./helper.js')

const dateFnsFormat = require('date-fns/format')
const subDays = require('date-fns/sub_days')
const eachDay = require('date-fns/each_day')
const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD'
const formatDate = (date, format = DEFAULT_DATE_FORMAT) => dateFnsFormat(date, format)

const testFieldTypes = (resources, expected) => {
  Object.entries(expected).forEach(([attr, type], index) => {
    it(`returns ${attr} attribute`, () => {
      expect(resources[index]).to.be.a(type)
    })
  })
}

const testHeaders = (headers, expected) => {
  const expectedHeaders = Object.keys(expected)
  expect(headers).to.deep.equal(expectedHeaders)
}

const now = new Date()
const to = subDays(now, 1)
const from = subDays(to, 3)
const token = 'santiment'
const ticker = 'SAN'
const fiatCurrency = 'USD'

describe('SAN_ALL_PROJECTS', () => {
  const expected = {
    slug: 'string',
    name: 'string',
    priceUsd: 'number',
    marketcapUsd: 'number',
    volumeUsd: 'number',
    usdBalance: 'number',
    ethBalance: 'number',
    ethSpent30d: 'number',
    ethSpent7d: 'number',
    ethSpent1d: 'number',
    ticker: 'string'
  }

  const response = san.SAN_ALL_PROJECTS()
  const headers = response[0]
  const projects = response[1]

  testFieldTypes(projects, expected)
  testHeaders(headers, expected)
})

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
  testHeaders(headers, expected)

  it('returns a record per every day', () => {
    const numberOfDays = 3
    const from = subDays(to, numberOfDays)
    const days = eachDay(from, to)
    const prices = san.SAN_DAILY_PRICES(token, from, to)

    expect(prices.length).to.equal(numberOfDays + 2) // headers + last day

    for (let [index, day] of days.entries()) {
      expect(prices[index + 1][0]).to.equal(formatDate(day))
    }
  })

  it('checks for historic data', () => {
    const checkForHistoricDataMock = sinon.mock(san).expects('checkForHistoricData_')

    san.SAN_DAILY_PRICES(token, from, to)

    expect(checkForHistoricDataMock).to.have.been.called
    checkForHistoricDataMock.verify()
    checkForHistoricDataMock.restore()
  })
})

describe('SAN_ERC20_PROJECTS', () => {
  const expected = {
    slug: 'string',
    name: 'string',
    priceUsd: 'number',
    marketcapUsd: 'number',
    volumeUsd: 'number',
    usdBalance: 'number',
    ethBalance: 'number',
    ethSpent30d: 'number',
    ethSpent7d: 'number',
    ethSpent1d: 'number',
    ticker: 'string',
    mainContractAddress: 'string'
  }

  const response = san.SAN_ERC20_PROJECTS()
  const headers = response[0]
  const projects = response[1]

  testFieldTypes(projects, expected)
  testHeaders(headers, expected)
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
  testHeaders(headers, expected)

  it('returns a record per every day', () => {
    const numberOfDays = 3
    const from = subDays(to, numberOfDays)
    const days = eachDay(from, to)
    const addresses = san.SAN_DAILY_ACTIVE_ADDRESSES(token, from, to)

    expect(addresses.length).to.equal(numberOfDays + 2) // headers + last day

    for (let [index, day] of days.entries()) {
      expect(addresses[index + 1][0]).to.equal(formatDate(day))
    }
  })

  it('checks for historic data', () => {
    const checkForHistoricDataMock = sinon.mock(san).expects('checkForHistoricData_')

    san.SAN_DAILY_ACTIVE_ADDRESSES(token, from, to)

    expect(checkForHistoricDataMock).to.have.been.called
    checkForHistoricDataMock.verify()
    checkForHistoricDataMock.restore()
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
  testHeaders(headers, expected)

  it('returns a record per every day', () => {
    const numberOfDays = 3
    const from = subDays(to, numberOfDays)
    const days = eachDay(from, to)
    const transcationVolumes = san.SAN_DAILY_TRANSACTION_VOLUME(token, from, to)

    expect(transcationVolumes.length).to.equal(numberOfDays + 2) // headers + last day

    for (let [index, day] of days.entries()) {
      expect(transcationVolumes[index + 1][0]).to.equal(formatDate(day))
    }
  })

  it('checks for historic data', () => {
    const checkForHistoricDataMock = sinon.mock(san).expects('checkForHistoricData_')

    san.SAN_DAILY_TRANSACTION_VOLUME(token, from, to)

    expect(checkForHistoricDataMock).to.have.been.called
    checkForHistoricDataMock.verify()
    checkForHistoricDataMock.restore()
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
  testHeaders(headers, expected)

  it('returns a record per every day', () => {
    const numberOfDays = 3
    const from = subDays(to, numberOfDays)
    const days = eachDay(from, to)
    const ohlc = san.SAN_DAILY_OHLC(token, from, to)

    expect(ohlc.length).to.equal(numberOfDays + 2) // headers + last day

    for (let [index, day] of days.entries()) {
      expect(ohlc[index + 1][0]).to.equal(formatDate(day))
    }
  })

  it('checks for historic data', () => {
    const checkForHistoricDataMock = sinon.mock(san).expects('checkForHistoricData_')

    san.SAN_DAILY_OHLC(token, from, to)

    expect(checkForHistoricDataMock).to.have.been.called
    checkForHistoricDataMock.verify()
    checkForHistoricDataMock.restore()
  })
})

describe('SAN_DAILY_PRICE_VOLUME_DIFF', () => {
  const expected = {
    date: 'string',
    priceChange: 'number',
    priceVolumeDiff: 'number',
    volumeChange: 'number'
  }

  const response = san.SAN_DAILY_PRICE_VOLUME_DIFF(fiatCurrency, ticker, from, to)
  const headers = response[0]
  const volumes = response[1]

  testFieldTypes(volumes, expected)
  testHeaders(headers, expected)

  it('returns a record per every day', () => {
    const numberOfDays = 3
    const from = subDays(to, numberOfDays)
    const days = eachDay(from, to)
    const volumes = san.SAN_DAILY_PRICE_VOLUME_DIFF(fiatCurrency, ticker, from, to)

    expect(volumes.length).to.equal(numberOfDays)
    expect(volumes[1][0]).to.equal(formatDate(days[1]))
    expect(volumes[2][0]).to.equal(formatDate(days[2]))
  })

  it('checks for historic data', () => {
    const checkForHistoricDataMock = sinon.mock(san).expects('checkForHistoricData_')

    san.SAN_DAILY_PRICE_VOLUME_DIFF(fiatCurrency, ticker, from, to)

    expect(checkForHistoricDataMock).to.have.been.called
    checkForHistoricDataMock.verify()
    checkForHistoricDataMock.restore()
  })
})

describe('SAN_SOCIAL_VOLUME_PROJECTS', () => {
  const projects = san.SAN_SOCIAL_VOLUME_PROJECTS()

  it('returns an array of projects', () => {
    expect(projects).to.be.an('array')
  })

  it('has "SV Projects" header', () => {
    expect(projects[0]).to.equal('SV Projects')
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
  testHeaders(headers, expected)

  it('returns a record per every day', () => {
    const token = 'bitcoin'
    const numberOfDays = 3
    const from = subDays(to, numberOfDays)
    const days = eachDay(from, to)
    const volumes = san.SAN_DAILY_SOCIAL_VOLUME(token, from, to, 'TELEGRAM_CHATS_OVERVIEW')

    expect(volumes.length).to.equal(numberOfDays)
    expect(volumes[1][0]).to.equal(formatDate(days[1]))
    expect(volumes[2][0]).to.equal(formatDate(days[2]))
  })

  it('checks for historic data', () => {
    const checkForHistoricDataMock = sinon.mock(san).expects('checkForHistoricData_')

    san.SAN_DAILY_SOCIAL_VOLUME(token, from, to, 'TELEGRAM_CHATS_OVERVIEW')

    expect(checkForHistoricDataMock).to.have.been.called
    checkForHistoricDataMock.verify()
    checkForHistoricDataMock.restore()
  })
})
