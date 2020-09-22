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
    'relay/unused-fields': 'off', // eslint cant know this efficiently
    'relay/generated-flow-types': 'off', // disabled because the check is a false positive for TS
  },
};
