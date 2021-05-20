# google-spreadsheet-addon

Contains the source code of the [SANsheets](https://chrome.google.com/webstore/detail/santiment-data/khglcgdkikfpccnfonmimpfkmolokbbk?utm_source=permalink)
google spreadsheet add-on.

## Table of contents

- [Table of contents](#table-of-contents)
  - [Usage](#usage)
  - [Development](#development)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Structure](#structure)
    - [Queries](#queries)
    - [Functions](#functions)
    - [Sheet Functions](#sheet-functions)
    - [Generators](#generators)
  - [Running tests](#running-tests)
    - [Running tests in docker container](#running-tests-in-docker-container)
    - [Running integration tests](#running-integration-tests)
  - [Standart template tests](#standart-template-tests)
  - [Docker tests](#docker-tests)
  - [Generate documentation](#generate-documentation)
  - [Pushing to the webeditor](#pushing-to-the-webeditor)

## Usage

  * [Functions documentation](doc/sheet_functions.md)

## Development

The project is based on [clasp](https://github.com/google/clasp) and [gas-local](https://github.com/mzagorny/gas-local) to enable local development and testing. Most of the Google functions has been mocked in order to work locally, check `gas_mock` for reference. The `src` directory contains the source code that will be pushed to the google apps webeditor. Changing code directly in the webeditor is not recommended apart from debugging because it will get wiped out next time someone pushes.

## Prerequisites

* node.js >= 6.3.0
* npm
* npx : if your npm installation is old and you don't have npx, install it with: `sudo npm i -g npx`

## Installation

Install dependencies:

```bash
$ npm install
```

## Structure

The structure of the project consists of the following files:

### Queries

They can be found in the ``src/api/queries`` folder. All the queries, sent to the API can be seen here.

### Functions

Found in the ``src/functions`` folder. Here lie all of the functions, connecting the google sheet functions and the API queries.

### Sheet Functions

Found in the ``src/`` folder. There are 2 files, one under the name of ``sheetFunctions.js`` and the other one being ``generatedSheetFunctions.js``, the former having all the functions, using APIs different from ``getMetric``, the latter having those who do not. The second file is generated, using the ``getMetricGenerator.js``.

### Generators

All of the generators are found in the ``src/generators`` folder. By generator, we mean two things actually - one is the scripts, that generate the file contents, the other - the script generating the ``generatedSheetFunctions.js`` file, using the file content generators.

## Running tests
You can run the whole tests suite with:

```bash
$ npm test
```

Unit tests only:

```bash
$ npm run test:unit
```

## Running integration tests

Integration tests only:

```bash
$ npm run test:integration
```

## Standart template tests

For creating the test files for standart-template metrics:

```bash
$ npm run test:generate
```

If you want to exclude a function from being automatically generated (the template doesn't apply to that function),
then you should add it in the ``getMetricTestGenerator.js`` file, in the ``IGNORED_FUNCTIONS`` array

Also, if the metric is a daily one, it should be added to the ``LIST_OF_DAILY_METRICS`` array in the same file.

## Running tests in docker container

Run the test suite in a docker container. Build the image:

```bash
$ docker build -f Dockerfile-test -t google-spreadsheet-addon-tests .
```

and then run the tests:

```bash
$ docker run -t google-spreadsheet-addon-tests
```

## Generate documentation

```bash
$ npm run docs
```

## Pushing to the webeditor

You first need to log into [clasp](https://github.com/google/clasp#login):

```bash
  $ npx clasp login
```

Push changes:

```bash
$ npm run push
```
