var formatDate = require('date-format')

class DigestAlgorithm {
  SHA_256 (key) {
    let a = 1
    let c = 0
    let h = 0
    let o = 0
    if (key) {
      a = 0
      for (h = key.length - 1; h >= 0; h--) {
        o = key.charCodeAt(h)
        a = (a << 6 & 268435455) + o + (o << 14)
        c = a & 266338304
        a = c !== 0 ? a ^ c >> 21 : a
      }
    }

    return String(a)
  }
}

class Utilities {
  static init () {
    Utilities.DigestAlgorithm = new DigestAlgorithm()
  }

  static formatDate (date, tz_, format_) {
    // FIXME: Overriding format due to the fact that "yyyy-MM-dd'T'HH:mm:ss'Z'"
    // doesn't work properly
    const overridenFormat = 'yyyy-MM-ddThh:mm:ssZ'
    return formatDate(overridenFormat, date)
  }

  static computeDigest (algorithm, string) {
    return algorithm(string)
  }
}

Utilities.init()

const getMock = () => Utilities

module.exports = { getMock }
