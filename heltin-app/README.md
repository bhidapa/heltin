# heltin app

## Changelog

[Learn about the latest improvements](CHANGELOG.md).

## Development (Available Scripts)

In the project directory, you can run:

### `npm run build:dll`

Pre-builds all dependencies. Webpack [DLLPlugin](https://webpack.js.org/plugins/dll-plugin/) and [DllReferencePlugin](https://webpack.js.org/plugins/dll-plugin/#dllreferenceplugin) provide means to split bundles in a way that can **drastically** improve build time performance.

### `npm start`

Builds the DLL and runs the app in the development mode.<br>
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run relay:start`

Runs the [Relay Modern compiler](https://relay.dev/docs/en/compiler-architecture). Whenever you are changing any GraphQL related code, you should have this compiler running.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Want to help?

Want to file a bug, contribute some code, or improve documentation? Excellent! Read up on our
guidelines for [contributing](CONTRIBUTING.md).
