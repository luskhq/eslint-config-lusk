module.exports = {
  plugins: ['react'],
  rules: {
    // Errors
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',

    // Warnings
    'react/no-danger': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-unknown-property': 'warn',
    'react/prop-types': 'warn',
    'react/self-closing-comp': 'warn',
    'react/jsx-closing-bracket-location': [
      'warn',
      {selfClosing: 'tag-aligned', nonEmpty: 'after-props'},
    ],
  },
};
