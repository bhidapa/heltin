const typescript = require('relay-compiler-language-typescript');

module.exports = {
  language: typescript,
  schema: './schema.json',
  src: './src',
  artifactDirectory: './src/relay/artifacts',
  noFutureProofEnums: true,
  // persistOutput: './.meta/complete.queryMap.json', TODO-db-190618 support persisted queries
  exclude: ['**/node_modules/**', '**/relay/artifacts/**'],
  customScalars: {
    JwtToken: 'String',
    UUID: 'String',
    BigInt: 'Int',
    EmailAddress: 'String',
    Date: 'String',
    Datetime: 'String',
    Base64EncodedBinary: 'String',
  },
};
