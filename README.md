# google-spreadsheet-addon

Contains the source code of the [SANsheets](https://chrome.google.com/webstore/detail/santiment-data/khglcgdkikfpccnfonmimpfkmolokbbk?utm_source=permalink)
google spreadsheet add-on.

## Usage

  * [Functions documentation](doc/sheet_functions.md)

## Development

The project is based on [clasp](https://github.com/google/clasp) and [gas-local](https://github.com/mzagorny/gas-local) to enable local development and testing. Most of the Google functions has been mocked in order to work locally, check `gas_mock` for reference. The `src` directory contains the source code that will be pushed to the google apps webeditor. Changing code directly in the webeditor is not recommended apart from debugging because it will get wiped out next time someone pushes.

### Prerequisites

* node.js >= 6.3.0
* npm
* npx : if your npm installation is old and you don't have npx, install it with: `sudo npm i -g npx`

### Installation

Install dependencies:

```bash
$ npm install
```

### Testing
You can run the whole tests suite with:

```bash
$ npm test
```

Unit tests only:

```bash
$ npm run test:unit
```

Integration tests only:

```bash
$ npm run test:integration
```

For creating the test files for standart-template metrics:

```bash
$ npm run test:generate
```

If you want to exclude a function from being automatically generated (the template doesn't apply to that function),
then you should add it in the ``getMetricTestGenerator.js`` file, in the ``IGNORED_FUNCTIONS`` array

Run the test suite in a docker container. Build the image:

```bash
$ docker build -f Dockerfile-test -t google-spreadsheet-addon-tests .
```

and then run the tests:

```bash
$ docker run -t google-spreadsheet-addon-tests
```

### Generate documentation

```bash
$ npm run docs
```

### Pushing to webeditor

You first need to log into [clasp](https://github.com/google/clasp#login):

```bash
  $ npx clasp login
```

Push changes:

```bash
$ npm run push
```
