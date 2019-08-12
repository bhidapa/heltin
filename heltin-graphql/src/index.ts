const http = require("http");
import { postgraphile } from "postgraphile";
const PgNonNullRelationsPlugin = require("@graphile-contrib/pg-non-null/relations");
import { PgIdToRowIdInflectorPlugin } from "./plugins/PgIdToRowIdInflectorPlugin";

const pgHost = process.env.POSTGRES_HOST;
const pgUser = process.env.POSTGRES_USER;
const pgPassword = process.env.POSTGRES_PASSWORD;
const pgPort = process.env.POSTGRES_PORT;
const pgDb = process.env.POSTGRES_DB;
const pgSchemas = (process.env.POSTGRES_SCHEMAS || "").split(",");
const watch = (function() {
  return ["t", "true", "1", "yes"].some(flag => process.env.WATCH === flag);
})();
const graphqlRoute = process.env.GRAPHQL_ROUTE;
const graphiqlRoute = process.env.GRAPHIQL_ROUTE;
const port = process.env.PORT;

start();

function start() {
  console.log();
  console.info("Starting heltin GrahpQL...");
  console.debug(
    JSON.stringify(
      {
        pgHost,
        pgUser,
        pgPassword: pgPassword ? "<omitted>" : undefined,
        pgPort,
        pgDb,
        pgSchemas,
        watch,
        graphqlRoute,
        graphiqlRoute,
        port
      },
      undefined,
      "  "
    )
  );
  console.log();

  http
    .createServer(
      postgraphile(
        `postgres://${pgUser}${
          pgPassword ? `:${pgPassword}` : ""
        }@${pgHost}:${pgPort}/${pgDb}`,
        pgSchemas,
        {
          classicIds: true,
          dynamicJson: true,
          setofFunctionsContainNulls: false,
          ignoreRBAC: false,
          disableDefaultMutations: true,
          disableQueryLog: false,
          watchPg: watch,
          graphileBuildOptions: {
            pgStrictFunctions: true
          },
          appendPlugins: [PgNonNullRelationsPlugin, PgIdToRowIdInflectorPlugin],
          graphqlRoute,
          graphiql: !!graphiqlRoute,
          graphiqlRoute
        }
      )
    )
    .listen(port);
}
