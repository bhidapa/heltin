# heltin app

## Getting started

After installing [yarn](https://yarnpkg.com/getting-started/install), you can run the following from the project directory:

### `yarn start`

Starts the app using [Vite](https://vitejs.dev/).<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `yarn type-check --watch`

Since [Vite](https://vitejs.dev/) does not perform any type checking, we instead use [`tsc`](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#tsc-the-typescript-compiler) to type-check our [TypeScript](https://www.typescriptlang.org/) code in _watch_ mode.

### `yarn relay --watch`

Runs the [Relay compiler](https://relay.dev/docs/guides/compiler/) in _watch_ mode. Whenever you are changing any GraphQL related code, you should have this running.

### `yarn build`

Builds the app for production to the `build` folder.<br>
Filenames include content hashes.<br>
The app is ready to be deployed! 🚀

## Want to help?

Want to file a bug, contribute some code, or improve documentation? Excellent! Read up on our
guidelines for [contributing](../CONTRIBUTING.md).
