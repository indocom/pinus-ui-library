# PINUS React.js UI Library

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

## Available Scripts

To run the storybook:

```bash
yarn storybook
```

To bundle the library using rollup:

```bash
yarn build
```

## Learn More

To learn more about the stack and libraries used, take a look at the following resources:

1. [Rollup.js](https://rollupjs.org/guide/en/) - Used to bundle the library before being published
2. [React.js](https://reactjs.org/) - Used to create the components
3. [Storybook](https://storybook.js.org/docs) - Used to display the components in isolation and documentation
