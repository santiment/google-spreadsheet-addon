ApiClient_.prototype.fetchGithubActivity = function (slug, from, to) {
  const query = {
    'query': `{
       githubActivity(${commonParams(slug, from, to)}) {
         activity
         datetime
       }
     }`
  }

  return this.conn.graphQLQuery(query, 'githubActivity')
}

ApiClient_.prototype.fetchDevActivity = function (slug, from, to) {
  const query = {
    'query': `{
       devActivity(${commonParams(slug, from, to)}) {
         activity
         datetime
       }
     }`
  }

  return this.conn.graphQLQuery(query, 'devActivity')
}
