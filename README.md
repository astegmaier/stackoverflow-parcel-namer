# An example of how to write a custom parcel namer.

This repo contains two packages:

1. `parcel-namer-js-min` - a simple Parcel Namer plugin that causes output javascript files to have `.min` appended to them.
2. `app` - a sample app that is configured to build with parcel, using this plugin.

It was written to demonstrate the solution to [a stackoverflow question](https://stackoverflow.com/questions/69512526/parcel-bundler-beautify-lint-and-create-min-js)

### Setup instructions

1. Run `yarn install`
2. Run `yarn app build`
3. See that the output javascript files in `app/dist` have the `min.js` extension.
