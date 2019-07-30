function ApiClient_(conn) {
  this.conn = conn
}

function getApiClient_() {
  return new ApiClient_(new Connection_())
}
