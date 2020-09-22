module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint', 'react', 'react-hooks', 'relay'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:compat/recommended',
    'plugin:relay/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2020: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off', // unused vars will be handled by the TS compiler
    '@typescript-eslint/explicit-module-boundary-types': 'off', // no need... if the infered return type changes, the code wont compile either
    '@typescript-eslint/no-empty-interface': 'off', // useful for having placeholders for future types
    '@typescript-eslint/no-non-null-assertion': 'off', // useful from time to time
    'react/prop-types': 'off', // we leverage typescript for type definitions in react
    'relay/unused-fields': 'off', // eslint cant know this efficiently
    'relay/generated-flow-types': 'off', // disabled because the check is a false positive for TS
  },
};
