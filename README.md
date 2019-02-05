# google-spreadsheet-addon
Contains the source code of the [Santiment Data](https://chrome.google.com/webstore/detail/santiment-data/khglcgdkikfpccnfonmimpfkmolokbbk?utm_source=permalink)
google spreadsheet add-on.

## Development
The project is based on [clasp](https://github.com/google/clasp) and [gas-local](https://github.com/mzagorny/gas-local) to enable local development and testing. Most of the Google functions has been mocked in order to work locally, check `gas_mock` for reference. The `src` directory contains the source code that will be pushed to the google apps webeditor. Changing code directly in the webeditor is not recommended apart from debugging because it will get wiped out next time someone pushes.

You can use all the new ECMAScript features that your local node supports, except for in `src` folder. There [JS1.6](https://developers.google.com/apps-script/guides/services/#basic_javascript_features) should be used.

### Prerequisites

* node.js >= 6.3.0
* npm

### Installation

Install dependencies:

    npm install

Login clasp:

    clasp login

### Testing

    npm test

### Pushing

    npm run push
