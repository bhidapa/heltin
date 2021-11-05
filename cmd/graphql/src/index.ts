/**
 *
 * heltin GraphQL
 *
 */

import express from "express";
import session from "express-session";
import { Client, Pool } from "pg";
import { postgraphile } from "postgraphile";
import { SessionStore } from "./session-store";
import { GraphQLError } from "graphql";

// plugins
import { SessionPlugin } from "./plugins/SessionPlugin";
import PgNonNullRelationsPlugin from "@graphile-contrib/pg-non-null/relations";
import { PgIdToRowIdInflectorPlugin } from "./plugins/PgIdToRowIdInflectorPlugin";
import { PgBytea } from "./plugins/PgBytea";

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
  sessionSecret: process.env.SESSION_SECRET,
  sessionSecure: isTrue(process.env.SESSION_SECURE),
  port: process.env.PORT,
};

function isTrue(str: string | undefined): boolean {
  return ["t", "true", "1", "yes"].some((flag) => str === flag);
}

interface AdditionalContext {
  req: express.Request;
  pgRootPool: Pool;
}

export interface Context extends AdditionalContext {
  pgClient: Client;
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

if (!config.sessionSecret) throw new Error("Session secret is required");

const pgConnectionString = `postgres://${config.pgUser}${
  config.pgPassword ? `:${config.pgPassword}` : ""
}@${config.pgHost}:${config.pgPort}/${config.pgDb}`;

// postgres pool with the root level user/role
const pgRootPool = new Pool({ connectionString: pgConnectionString });

const app = express();
app.disable("x-powered-by");
app.set("trust proxy", true);

app.use(
  session({
    store: new SessionStore(pgRootPool),
    name: "heltin.sid", // synchronised with pkg/session/config.go
    secret: config.sessionSecret,
    saveUninitialized: false,
    rolling: true,
    resave: false, // using `true` can lead to race conditions during logout leaving sessions undeleted
    cookie: {
      secure: config.sessionSecure || false,
      sameSite: "lax",
      httpOnly: true,
      // expires is set by plugins/SessionPlugin
    },
  })
);

app.use(
  postgraphile<express.Request, express.Response>(
    pgConnectionString,
    config.pgSchemas,
    {
      classicIds: true,
      dynamicJson: true,
      setofFunctionsContainNulls: false,
      ignoreRBAC: false,
      disableDefaultMutations: true,
      disableQueryLog: false,
      watchPg: config.watch,
      graphileBuildOptions: {
        pgStrictFunctions: true,
        disableIssue641Fix: true, // Connections are NonNullable
      },
      appendPlugins: [
        SessionPlugin,
        PgNonNullRelationsPlugin,
        PgIdToRowIdInflectorPlugin,
        PgBytea,
      ],
      graphqlRoute: config.graphqlRoute,
      graphiql: !!config.graphiqlRoute,
      graphiqlRoute: config.graphiqlRoute,
      enhanceGraphiql: true,
      bodySizeLimit: "1GB",
      pgSettings(req) {
        if (req.session.user_id)
          return { role: "viewer", "session.user_id": req.session.user_id };
        return {
          role: "anonymous",
        };
      },
      async additionalGraphQLContextFromRequest(
        req
      ): Promise<AdditionalContext> {
        return {
          req,
          pgRootPool,
        };
      },
      handleErrors(errs, req, res) {
        // any anonymous permission denied error without is a 401
        if (
          !req.session.user_id &&
          errs.some(
            (err) =>
              err.message.toLowerCase().includes("permission denied") ||
              err.message.toLowerCase().includes("unauthorized")
          )
        ) {
          res.statusCode = 401;
          return [new GraphQLError("Unauthorized")];
        }
        return errs;
      },
    }
  )
);

app.listen(config.port);
