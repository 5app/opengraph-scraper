# JS Template

[![Greenkeeper badge](https://badges.greenkeeper.io/5app/js-template.svg)](https://greenkeeper.io/)

This is a template for starting new JS projects at 5app.

## Getting started

Run `npm init` to configure package.json


### For private projects

1. [Optionally] Remove `.npmrc` file.
   This is used to track dependencies but for published packages this is superfluous

### For packages to be posted to NPM

1. Remove the setting `private: true` from [./package.json](./package.json]).
   This protects accidentally publishing to *npm*. If you want to publish to npm then this will prevent it until removed.
