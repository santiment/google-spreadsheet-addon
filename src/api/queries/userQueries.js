ApiClient_.prototype.fetchCurrentUserPermissions = function () {
  const query = { 'query': '{currentUser {permissions {spreadsheet}}}' }
  return this.conn.graphQLQuery(query, 'currentUser')
}
