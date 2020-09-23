/**
 *
 * heltin GraphQL
 *
 */

import express from "express";
import session from "express-session";
const PgSession = require("connect-pg-simple")(session);
import { Pool } from "pg";
import { postgraphile } from "postgraphile";

// plugins
import { LoginPlugin } from "./plugins/LoginPlugin";
import PgNonNullRelationsPlugin from "@graphile-contrib/pg-non-null/relations";
import { PgIdToRowIdInflectorPlugin } from "./plugins/PgIdToRowIdInflectorPlugin";
import PgBytea from "./plugins/PgBytea";

const config = {
  pgHost: process.env.POSTGRES_HOST,
  pgUser: process.env.POSTGRES_USER,
  pgPassword: process.env.POSTGRES_PASSWORD,
  pgPort: process.env.POSTGRES_PORT,
  pgDb: process.env.POSTGRES_DB,
  pgSchemas: (process.env.POSTGRES_SCHEMAS || "").split(","),
  watch: isTrue(process.env.WATCH),
  graphqlRoute: process.env.GRAPHQL_ROUTE,
  graphiqlRoute: process.env.GRAPHIQL_ROUTE,
  sessionTableSchema: process.env.POSTGRES_SESSION_TABLE_SCHEMA,
  sessionTable: process.env.POSTGRES_SESSION_TABLE,
  sessionSecret: process.env.SESSION_SECRET,
  noAuth: isTrue(process.env.NO_AUTH),
  port: process.env.PORT,
};

function isTrue(str: string | undefined): boolean {
  return ["t", "true", "1", "yes"].some((flag) => str === flag);
}

if (!config.sessionSecret) {
  throw new Error(
    "Session secret is required. Did you forget to set `SESSION_SECRET`?"
  );
}

console.log();
console.info("Starting heltin GrahpQL...");
console.debug(
  JSON.stringify(
    {
      ...config,
      pgPassword: config.pgPassword ? "<omitted>" : undefined,
      sessionSecret: config.sessionSecret ? "<omitted>" : undefined,
    },
    undefined,
    "  "
  )
);
console.log();

const pgPool = new Pool({
  connectionString: `postgres://${config.pgUser}${
    config.pgPassword ? `:${config.pgPassword}` : ""
  }@${config.pgHost}:${config.pgPort}/${config.pgDb}`,
});

const app = express();

app.use(
  session({
    store: new PgSession({
      pool: pgPool,
      schemaName: config.sessionTableSchema,
      tableName: config.sessionTable,
    }),
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,
    rolling: true,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
  })
);

app.use(
  postgraphile(pgPool, config.pgSchemas, {
    classicIds: true,
    dynamicJson: true,
    setofFunctionsContainNulls: false,
    ignoreRBAC: false,
    disableDefaultMutations: true,
    disableQueryLog: false,
    watchPg: config.watch,
    graphileBuildOptions: {
      pgStrictFunctions: true,
    },
    appendPlugins: [
      LoginPlugin,
      PgNonNullRelationsPlugin,
      PgIdToRowIdInflectorPlugin,
      PgBytea,
    ],
    graphqlRoute: config.graphqlRoute,
    graphiql: !!config.graphiqlRoute,
    graphiqlRoute: config.graphiqlRoute,
    enhanceGraphiql: true,
    pgDefaultRole: config.noAuth ? "viewer" : "anonymous",
    bodySizeLimit: "1GB",
    async additionalGraphQLContextFromRequest(req: express.Request) {
      return {
        // Let plugins call priviliged methods (e.g. login) if they need to
        rootPgPool: pgPool,
        // Save the authenticated/logged-in user ID in this session
        async saveUserIdInSession(userId: string) {
          req.session!.userId = userId;
          return new Promise((resolve, reject) =>
            req.session!.save((err) => (err ? reject(err) : resolve()))
          );
        },
      };
    },
  })
);

app.listen(config.port);
