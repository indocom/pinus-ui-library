# PINUS React.js UI Library
[![npm version](https://img.shields.io/npm/v/pinus-ui-library)](//npmjs.com/package/pinus-ui-library)

React.js UI Components Library of PINUS

The `npm` library package can be found at [https://www.npmjs.com/package/pinus-ui-library](https://www.npmjs.com/package/pinus-ui-library)

## Usage Setup

To use the library, install the library using `npm` or `yarn`, though `yarn` is preferred for PINUS projects for consistency purposes

```bash
yarn add pinus-ui-library
```

After which, the necessary components can be imported using :

```javascript
import { Button, ... } from "pinus-ui-library";
```

## Development Setup

You should have the latest `npm` and `node` versions installed on your local machine before running. Install `yarn` running

```bash
npm install yarn
```

Install all dependencies using:

```bash
yarn install
```

NOTE: This library is in Alpha stage. To try out changes, execute the following:

```bash
yarn build
yarn link
```

Then in the (other) project that makes use of this library, do the following:

```bash
yarn link pinus-ui-library
```

Subsequently, only run `yarn build` for pinus-ui-library. That is, there is no need to do the linking process again

## Available Scripts

To run the storybook:

```bash
yarn storybook
```

To bundle the library using rollup:

```bash
nvm use
yarn build
```

Note that the current rollup plugin only works with **Node.js <= 16.x**

To publish to Chromatic, which would be run automatically when there is a new push to branch `main`:

```bash
yarn chromatic
```

## Learn More

To learn more about the stack and libraries used, take a look at the following resources:

1. [Rollup.js](https://rollupjs.org/guide/en/) - Used to bundle the library before being published
2. [React.js](https://reactjs.org/) - Used to create the components
3. [Storybook](https://storybook.js.org/docs) - Used to display the components in isolation and documentation
4. [Chromatic](https://www.chromatic.com/docs) - Used to publish the storybook
