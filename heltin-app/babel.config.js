module.exports = {
  presets: ['@babel/env', '@babel/typescript', '@babel/react'],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/syntax-dynamic-import',
    '@babel/proposal-optional-chaining',
    '@babel/proposal-nullish-coalescing-operator',
    '@babel/transform-runtime',
    // libs
    'relay',
  ],
};
