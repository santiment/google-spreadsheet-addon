/**
 * Runs when the add-on is installed.
 */
function onInstall() {
  onOpen();
}

/**
 * Runs when the document is opened, creating the add-on's menu. Custom function
 * add-ons need at least one menu item, since the add-on is only enabled in the
 * current spreadsheet when a function is run.
 */
function onOpen() {
  SpreadsheetApp.getUi().createAddonMenu()
      .addItem('Enable', 'enable_')
      .addToUi();
}

/**
 * Enables the add-on on for the current spreadsheet (simply by running) and
 * shows a popup informing the user of the new functions that are available.
 */
function enable_() {
  var title = 'Santiment Data';
  var message = 'This add-on gives you access to cryptocurrency data through various custom functions. Every function starts with =SAN.';
  var ui = SpreadsheetApp.getUi();
  ui.alert(title, message, ui.ButtonSet.OK);
}

function graphQLTimeseriesQuery_(query, query_name, fields) {
  var response = UrlFetchApp.fetch("https://api.santiment.net/graphql", {
    'muteHttpExceptions': true,
    'method' : 'post',
    'contentType': 'application/json',
    'payload' : JSON.stringify(query)
  });
  if (response.getResponseCode() != 200) {
    throw new Error(JSON.parse(response)["errors"]["detail"]);
  }

  var data = JSON.parse(response)["data"][query_name];

  return [["date"].concat(fields)].concat(data.map(function(data_point) {
    return [
      new Date(data_point['datetime']).toISOString().slice(0,10)
    ].concat(fields.map(function(field) { return data_point[field]; }))
  }));
}

function graphQLQuery_(query, query_name) {
  var response = UrlFetchApp.fetch("https://api.santiment.net/graphql", {
    'muteHttpExceptions': true,
    'method' : 'post',
    'contentType': 'application/json',
    'payload' : JSON.stringify(query)
  });
  if (response.getResponseCode() != 200) {
    throw new Error(JSON.parse(response)["errors"]["detail"]);
  }

  return JSON.parse(response)["data"][query_name];
}

function checkForHistoricData_(from) {
  var oneDay = 24 * 60 * 60 * 1000;
  var timeSpan = ((new Date()) - from) / oneDay;
  if (timeSpan > 90) {
    throw new Error("You can't use the add-on for historic data at the moment. Please select a starting date within three months in the past.");
  }
}

//function addDays_(date, days) {
//  var result = new Date(date);
//  result.setDate(result.getDate() + days);
//  return result;
//}

function toUTC_(date) {
  var timezone = SpreadsheetApp.getActive().getSpreadsheetTimeZone();
  return Utilities.formatDate(new Date(date), timezone, "yyyy-MM-dd'T'HH:mm:ss'Z'");
}

//function loadResultInMap_(result, query_result) {
//  if (!query_result) {
//    return result;
//  }
//
//  for (var i = 0;i < query_result.length;i++) {
//    var data_point = query_result[i];
//    // Fix dates in the format 2018-08-30T00:00:00.00Z to become 2018-08-30T00:00:00Z as
//    // the other format can't be parsed
//    var datetime = data_point['datetime'].replace(".00Z", "Z");
//    result[datetime] = result[datetime] || {};
//
//    for (var metric in data_point) {
//      if (metric == 'datetime') continue;
//
//      result[datetime][metric] = data_point[metric];
//    }
//  }
//}

//function graphQLQueryToMap_(query, key) {
//  var response = UrlFetchApp.fetch("https://api.santiment.net/graphql", {
//    'muteHttpExceptions': true,
//    'method' : 'post',
//    'contentType': 'application/json',
//    'payload' : JSON.stringify(query)
//  });
//  var data = JSON.parse(response)["data"];
//
//  if (key) {
//    data = data[key]
//  }
//
//  var result = {};
//
//  for (var query_result in data) {
//    loadResultInMap_(result, data[query_result]);
//  }
//
//  return result;
//}
//


//function projectInfo(project_slug) {
//  var query = {
//    'query': '{\
//      projectBySlug(slug: "' + project_slug + '") {\
//        name\
//        tokenDecimals\
//        ticker\
//      }\
//     }'
//  };
//
//  return graphQLQuery_(query, 'projectBySlug');
//}
//
//function SANTIMENT_DATA(project_slug, from, to) {
//  var query = {
//    'query': '{\
//      historyPrice(slug: "' + project_slug + '",from: "' + from.toISOString() + '",to: "' + to.toISOString() + '",interval: "1d") {\
//        datetime\
//        priceUsd\
//        volume\
//        marketcap\
//      }\
//      dailyActiveAddresses(slug: "' + project_slug + '",from: "' + from.toISOString() + '",to: "' + to.toISOString() + '",interval: "1d") {\
//        datetime\
//        activeAddresses\
//      }\
//      transactionVolume(slug: "' + project_slug + '",from: "' + from.toISOString() + '",to: "' + to.toISOString() + '",interval: "1d") {\
//        datetime\
//        transactionVolume\
//      }\
//      exchangeFundsFlow(slug: "' + project_slug + '",from: "' + from.toISOString() + '",to: "' + to.toISOString() + '",interval: "1d") {\
//        datetime\
//        inOutDifference\
//      }\
//      burnRate(slug: "' + project_slug + '",from: "' + from.toISOString() + '",to: "' + to.toISOString() + '",interval: "1d") {\
//        datetime\
//        burnRate\
//      }\
//      githubActivity(slug: "' + project_slug + '",from: "' + from.toISOString() + '",to: "' + to.toISOString() + '",interval: "1d") {\
//        datetime\
//        activity\
//      }\
//     }'
//  };
//
//  var info = projectInfo(project_slug);
//
//  var data = graphQLQueryToMap_(query);
//  var dates = Object.keys(data).sort().slice(1);
//
//  return dates.map(function(date) {
//    return [
//      date,
//      data[date]['priceUsd'] || 0,
//      data[date]['marketcap'] || 0,
//      data[date]['volume'] || 0,
//      data[date]['activeAddresses'] || 0,
//      data[date]['transactionVolume'] || 0,
//      (data[date]['burnRate'] || 0) / 5760, // ETH blocks happen each 15sec on average, 5760 * 15 = 1 day
//      (data[date]['fundsFlow'] || 0),
//      data[date]['activity'] || 0,
//    ]
//  });
//}
//
//function ETH_SPENT_BY_ERC20(from, to) {
//  var query = {
//    'query': '{\
//      ethSpentOverTimeByErc20Projects(from: "' + from.toISOString() + '",to: "' + to.toISOString() + '",interval: "1d") {\
//        datetime\
//        ethSpent \
//      }\
//     }'
//  };
//
//  var data = graphQLQueryToMap_(query);
//  var dates = Object.keys(data).sort().slice(1);
//
//  return dates.map(function(date) {
//    return [
//      date,
//      data[date]['ethSpent'] || 0,
//    ]
//  });
//}
//
//function ETH_SPENT_BY_PROJECT(slug, from, to) {
//  var query = {
//    'query': '{\
//      projectBySlug(slug: "' + slug + '") {\
//        ethSpentOverTime(from: "' + from.toISOString() + '",to: "' + to.toISOString() + '",interval: "1d") {\
//          datetime\
//          ethSpent \
//        }\
//      }\
//    }'
//  };
//
//  var data = graphQLQueryToMap_(query, "projectBySlug");
//  var dates = Object.keys(data).sort().slice(1);
//
//  return dates.map(function(date) {
//    return [
//      date,
//      data[date]['ethSpent'] || 0,
//    ]
//  });
//}

function test_() {
 // Logger.log(SAN_SOCIAL_VOLUME_PROJECTS())
//  Logger.log(SAN_DAILY_PRICES("0x",new Date("2018-08-03"),new Date()))
//  var timeZone = Session.getScriptTimeZone();
//  var timeZone = SpreadsheetApp.getActiveSpreadsheet().getSpreadsheetTimeZone()
//  var timeZone = SpreadsheetApp.getActive().getSpreadsheetTimeZone()
//  Logger.log(timeZone);
  Logger.log(SAN_DAILY_SOCIAL_VOLUME("santiment", "2018-10-04", "2018-10-14", "TELEGRAM_CHATS_OVERVIEW"));
//  Logger.log(SAN_ALL_PROJECTS());
//  Logger.log(formatDate_(new Date("2018-10-15")));
//  Logger.log((new Date("2018-10-15")).toISOString());
}
