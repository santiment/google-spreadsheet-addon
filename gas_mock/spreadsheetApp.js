const spreadsheetApp = () => ({
  getActive: () => ({
    getSpreadsheetTimeZone: () => 'Etc/GMT'
  })
})

const getMock = () => spreadsheetApp()

module.exports = { getMock }
