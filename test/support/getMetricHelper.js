const testGetMetricTimeBound = (metric, slug, from, to, currency, interval = '1d') => {
  for (const timeBoundSuffix of san.TIME_BOUNDS) {
    it(`works with ${timeBoundSuffix} as timeBound argument`, () => {
      let response = ''
      if (currency !== '' && typeof currency !== 'undefined') {
        response = metric(slug, from, to, currency, timeBoundSuffix, interval)
      } else {
        response = metric(slug, from, to, timeBoundSuffix, interval)
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
