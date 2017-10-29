module.exports = {
  parser: "babel-eslint",
  env: { es6: true },
  rules: {
    // Errors
    eqeqeq: ["error", "smart"],
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-func-assign": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-sparse-arrays": "error",
    "no-undef": "error",
    "no-use-before-define": ["error", "nofunc"],

    // Warnings
    "array-bracket-spacing": ["warn", "never"],
    "comma-dangle": [
      "warn",
      // Has to use object syntax because of backwards compatibility of the
      // `function` option. See https://eslint.org/docs/rules/comma-dangle
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
      },
    ],
    "no-console": ["warn", { allow: ["error"] }],
    "no-constant-condition": "warn",
    "no-extra-parens": ["warn", "all", { ignoreJSX: "multi-line" }],
    "no-fallthrough": "warn",
    "no-unneeded-ternary": "warn",
    "no-unused-vars": [
      "warn",
      { varsIgnorePattern: "^_(omit)?", argsIgnorePattern: "^_(omit)?" },
    ],
    "no-var": "warn",
    "object-curly-spacing": ["warn", "always"],
    "object-shorthand": "warn",
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "prefer-spread": "warn",
    quotes: ["warn", "double"],
  },
};
