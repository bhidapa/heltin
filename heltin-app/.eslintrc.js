module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: ['prettier', '@typescript-eslint', 'react', 'react-hooks', 'relay'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:relay/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    indent: 'off',
    'no-console': 'error',

    'prettier/prettier': 'error',

    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/class-name-casing': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/no-empty-function': 'off', // sometimes necessary

    // sometimes type assertion is neccessary and TypeScript will dissalow it if it does not fit
    '@typescript-eslint/no-object-literal-type-assertion': 'off',

    /**
     * TODO-db-190409
     * typescript-eslint/typescript-eslint#342
     * its safe to disable `no-undef` for .ts files because TypeScript will fail to compile with undefined vars
     */
    'no-undef': 'off',

    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'error',
    'react/no-multi-comp': 'error',

    'react-hooks/rules-of-hooks': 'error',

    'relay/unused-fields': 'off',
    // disabled because the check is a false positive for TS
    'relay/generated-flow-types': 'off',
  },
};
