class HTTPResponse {
    constructor(body) {
        this.content = body
        this.code = -1
    }

    setContentText(content) {
        this.content = content
    }
    getContentText() {
        return this.content
    }

    setResponseCode(code) {
        this.code = code
    }
    getResponseCode() {
        return this.code
    }
}

const getMock = body => new HTTPResponse(body)

module.exports = { getMock }
