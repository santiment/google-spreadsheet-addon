const dateFnsFormat = require('date-fns/format')
const formatDate = (date, format = DEFAULT_DATE_FORMAT) => dateFnsFormat(date, format)
const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD'

const subDays = require('date-fns/sub_days')
const eachDay = require('date-fns/each_day')
const startOfDay = require('date-fns/start_of_day')
const endOfYesterday = require('date-fns/end_of_yesterday')

const numberOfDays = 3

const slug = 'santiment'
const ethereumSlug = 'ethereum'
const fiatCurrency = 'USD'

const to = endOfYesterday()
const from = startOfDay(subDays(to, numberOfDays))
const days = eachDay(from, subDays(to, 1)) // last day should not be included (has not started yet)

const historicDataTo = subDays(endOfYesterday(), 200)
const historicDataFrom = startOfDay(subDays(historicDataTo, 205))

module.exports = {
  slug: slug,
  ethereumSlug: ethereumSlug,
  fiatCurrency: fiatCurrency,
  to: to,
  from: from,
  days: days,
  numberOfDays: numberOfDays,
  historicDataFrom: historicDataFrom,
  historicDataTo: historicDataTo,
  formatDate: formatDate
}
