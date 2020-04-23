## Quick Start

### `yarn`

Setup lerna and download packages. NPM does NOT work.

### `yarn run dev:int`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for your convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.
<img src="https://user-images.githubusercontent.com/4060187/52168303-574d3a00-26f6-11e9-9f3b-71dbec9ebfcb.gif" width="600" />
Your library will be rebuilt if you make edits.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).
<img src="https://user-images.githubusercontent.com/4060187/52168322-a98e5b00-26f6-11e9-8cf6-222d716b75ef.gif" width="600" />

### `npm run storybook`

Start the storybook in watch mode.

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

### `npm run lint` or `yarn lint`

Runs Eslint with Prettier on .ts and .tsx files.
If you want to customize eslint you can add an `eslint` block to your package.json, or you can run `yarn lint --write-file` and edit the generated `.eslintrc.js` file.

### `npm publish`

Publish the package to NPM registry. You must be logged first to npm cli.
