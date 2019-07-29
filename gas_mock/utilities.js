var formatDate = require('date-format')

const utilities = () => ({
    formatDate: (date, tz_, format_) => {
        // FIXME: Overriding format due to the fact that "yyyy-MM-dd'T'HH:mm:ss'Z'"
        // doesn't work properly
        const overridenFormat = 'yyyy-MM-ddThh:mm:ssZ'
        return formatDate(overridenFormat, date)
    },
})

const getMock = body => utilities()

module.exports = { getMock }
