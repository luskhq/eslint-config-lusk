# ESLint Config Lusk

[![npm](https://img.shields.io/npm/v/eslint-config-lusk.svg)](https://www.npmjs.com/package/eslint-config-lusk)

[ESLint](http://eslint.org/) configs used at [Lusk](https://lusk.io).

## Installation

```sh
# Using yarn
yarn add --dev eslint-config-lusk

# Using npm
npm install --save-dev eslint-config-lusk
```

## Usage

Currently, two configs are provided: `lusk` for general JavaScript and `lusk/react` for React-specific rules.

In your project's `.eslintrc.js`, use the `extends` property to specify which config should be used. Done! :sparkles:

### Server-side Example

```js
module.exports = {
  env: { node: true },
  extends: "lusk",
}
```

### Client-side example

```js
module.exports = {
  env: { browser: true, node: true },
  extends: ["lusk", "lusk/react"],
}
```

---

If you're interested in more info about shareable configs, see these two articles:

- [ESLint User Guide: Extending Config Files ](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
- [ESLint Developer Guide: Shareable Configs ](http://eslint.org/docs/developer-guide/shareable-configs)
