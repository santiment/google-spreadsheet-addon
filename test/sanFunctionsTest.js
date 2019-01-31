var expect = require('chai').expect;
var gas = require('gas-local');

var mock = require('../index.js');
var glib = gas.require('./src', mock.globalMockDefault);

describe('SAN_ALL_PROJECTS', function() {
  it('returns headers', function() {
    var headers = [
      "slug",
      "name",
      "priceUsd",
      "marketcapUsd",
      "volumeUsd",
      "usdBalance",
      "ethBalance",
      "ethSpent30d",
      "ethSpent7d",
      "ethSpent1d",
      "ticker"
    ]

    expect(glib.SAN_ALL_PROJECTS()[0]).to.deep.equal(headers);
  });

  it('returns proper project attributes', function() {
    var allProjects = glib.SAN_ALL_PROJECTS()
    var firstProject = allProjects[1]

    expect(firstProject[0]).to.be.a('string');
    expect(firstProject[1]).to.be.a('string');
    expect(firstProject[2]).to.be.a('number');
    expect(firstProject[3]).to.be.a('number');
    expect(firstProject[4]).to.be.a('number');
    expect(firstProject[5]).to.be.a('number');
    expect(firstProject[6]).to.be.a('number');
    expect(firstProject[7]).to.be.a('number');
    expect(firstProject[8]).to.be.a('number');
    expect(firstProject[9]).to.be.a('number');
    expect(firstProject[10]).to.be.a('string');
  });
});

describe('SAN_ALL_PROJECTS', function() {
  it('returns headers', function() {
    var headers = [
      "slug",
      "name",
      "priceUsd",
      "marketcapUsd",
      "volumeUsd",
      "usdBalance",
      "ethBalance",
      "ethSpent30d",
      "ethSpent7d",
      "ethSpent1d",
      "ticker"
    ]

    expect(glib.SAN_ALL_PROJECTS()[0]).to.deep.equal(headers);
  });

  it('returns proper project attributes', function() {
    var allProjects = glib.SAN_ALL_PROJECTS()
    var firstProject = allProjects[1]

    expect(firstProject[0]).to.be.a('string');
    expect(firstProject[1]).to.be.a('string');
    expect(firstProject[2]).to.be.a('number');
    expect(firstProject[3]).to.be.a('number');
    expect(firstProject[4]).to.be.a('number');
    expect(firstProject[5]).to.be.a('number');
    expect(firstProject[6]).to.be.a('number');
    expect(firstProject[7]).to.be.a('number');
    expect(firstProject[8]).to.be.a('number');
    expect(firstProject[9]).to.be.a('number');
    expect(firstProject[10]).to.be.a('string');
  });
});
