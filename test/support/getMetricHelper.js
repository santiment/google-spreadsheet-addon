const testGetMetricTimeBound = (metric, slug, from, to, currency) => {
  for (const timeBoundSuffix of san.TIME_BOUNDS) {
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
