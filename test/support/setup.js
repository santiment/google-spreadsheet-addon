const dateFnsFormat = require('date-fns/format')
const formatDate = (date, format = DEFAULT_DATE_FORMAT) => dateFnsFormat(date, format)
const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD'

const subDays = require('date-fns/sub_days')
const eachDay = require('date-fns/each_day')
const startOfDay = require('date-fns/start_of_day')
const endOfYesterday = require('date-fns/end_of_yesterday')

const numberOfDays = 3
const numberOfHours = (numberOfDays + 1) * 24 // every intraday metric should return this number of results

const slug = 'santiment'
const ethereumSlug = 'ethereum'
const slugsList = [slug, ethereumSlug]
const fiatCurrency = 'USD'

const to = endOfYesterday()
const from = startOfDay(subDays(to, numberOfDays))
const days = eachDay(from, subDays(to, 1)) // last day should not be included (has not started yet)

const currency = 'usd'

const ethAddress = '0x1f3df0b8390bb8e9e322972c5e75583e87608ec2'
const fundingRateExchange = 'BINANCE'

module.exports = {
  slug: slug,
  ethereumSlug: ethereumSlug,
  slugsList: slugsList,
  fiatCurrency: fiatCurrency,
  to: to,
  from: from,
  days: days,
  numberOfDays: numberOfDays,
  numberOfHours: numberOfHours,
  formatDate: formatDate,
  ethAddress: ethAddress,
  currency: currency,
  fundingRateExchange: fundingRateExchange
}
