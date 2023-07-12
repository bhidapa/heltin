module.exports = {
  language: 'typescript',
  schema: '../cmd/graphql/schema.graphql',
  src: './src',
  eagerEsModules: true,
  noFutureProofEnums: true,
  isDevVariableName: 'import.meta.env.DEV',
  customScalars: {
    UUID: 'string',
    BigInt: 'number',
    EmailAddress: 'string',
    Date: 'string',
    Datetime: 'string',
    UpdatedTimestamptz: 'string',
    CreatedTimestamptz: 'string',
  },
};
