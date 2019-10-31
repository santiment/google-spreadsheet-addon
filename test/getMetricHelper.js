const testGetMetricTimeBound = (metric, slug, from, to, currency) => {
  const timeBound = ['1d', '7d', '30d', '60d', '90d', '180d', '365d', '2y', '3y', '5y', '10y']

  for (const timeBoundSuffix of timeBound) {
    it(`works with ${timeBoundSuffix} as timeBound argument`, () => {
      let response = ''
      if (currency !== '') {
        response = metric(slug, from, to, currency, timeBoundSuffix)
      } else {
        response = metric(slug, from, to, timeBoundSuffix)
      }

      const results = response[1]

      expect(results[0]).to.be.a('string')
      expect(results[1]).to.be.a('number')
    })
  }
}

module.exports = {
  testGetMetricTimeBound: testGetMetricTimeBound
}
