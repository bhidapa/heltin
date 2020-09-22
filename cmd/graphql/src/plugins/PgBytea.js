const pgBytea = require("postgres-bytea");

module.exports = (builder) => {
  builder.hook(
    "build",
    (build) => {
      const {
        graphql: { GraphQLScalarType, Kind },
        pgIntrospectionResultsByKind,
        pgRegisterGqlTypeByTypeId,
        pgRegisterGqlInputTypeByTypeId,
        pg2GqlMapper,
        pgSql: sql,
      } = build;
      const bytea = pgIntrospectionResultsByKind.type.find(
        (t) => t.name === "bytea" && t.namespaceName === "pg_catalog"
      );
      if (!bytea) {
        // No bytea type found
        return build;
      }
      const BinaryType = new GraphQLScalarType({
        name: "Base64EncodedBinary",
        description: "Binary data encoded using Base64",
        serialize: (value) => String(value),
        parseValue: (value) => String(value),
        parseLiteral: (ast) => {
          if (ast.kind !== Kind.STRING) {
            throw new Error("Can only parse string values");
          }
          return ast.value;
        },
      });

      pgRegisterGqlTypeByTypeId(bytea.id, () => BinaryType);
      pgRegisterGqlInputTypeByTypeId(bytea.id, () => BinaryType);
      pg2GqlMapper[bytea.id] = {
        map: (data) => pgBytea(data).toString("base64"),
        unmap: (str) =>
          str === null
            ? sql.null
            : sql.fragment`decode(${sql.value(str)}, 'base64')`,
      };
      return build;
    },
    ["PgBytea"],
    [],
    ["PgTypes"]
  );
};
