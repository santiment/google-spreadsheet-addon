ApiClient_.prototype.fetchCurrentUserPermissions = function() {
  var query = { query: '{currentUser {permissions {spreadsheet}}}' }
  return this.conn.graphQLQuery(query, 'currentUser')
}
