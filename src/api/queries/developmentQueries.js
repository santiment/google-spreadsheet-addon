ApiClient_.prototype.fetchGithubActivity = function (slug, from, to) {
  var query = {
    'query': '{\
       githubActivity(slug: "' + slug + '",\
                      from: "' + toUTC_(from) + '",\
                      to: "' + toUTC_(to) + '",\
                      interval: "1d") {\
         activity\
         datetime\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'githubActivity')
}

ApiClient_.prototype.fetchDevActivity = function (slug, from, to) {
  var query = {
    'query': '{\
       devActivity(slug: "' + slug + '",\
                   from: "' + toUTC_(from) + '",\
                   to: "' + toUTC_(to) + '",\
                   interval: "1d") {\
         activity\
         datetime\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'devActivity')
}
