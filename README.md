# ESLint Config Lusk

[![npm](https://img.shields.io/npm/v/eslint-config-lusk.svg)](https://www.npmjs.com/package/eslint-config-lusk)

[ESLint][http://eslint.org/] configs used at [Lusk][https://lusk.io].

## Installation

```sh
# Using yarn
yarn add --dev eslint-config-lusk

# Using npm
npm install --save-dev eslint-config-lusk
```

## Usage

In your project's `.eslintrc.js`:

```js
// Server-side example
module.exports = {
  env: { node: true },
  extends: ["lusk"],
}

// Client-side example
module.exports = {
  env: { browser: true, node: true },
  extends: ["lusk", "lusk/react"],
}
```

---

Happy coding!
