/**
 *
 * heltin GraphQL
 *
 */
import http, { ServerResponse } from 'http';
import path from 'path';
import { GraphQLError } from 'graphql';
import { Client, Pool } from 'pg';
import Postgraphile from 'postgraphile';
import { PgIdToRowIdInflectorPlugin } from './plugins/PgIdToRowIdInflectorPlugin';
import { SessionPlugin } from './plugins/SessionPlugin';
import { createSession, IncomingMessageWithSession } from './session';
import { isPgForbiddenError, writeInternalError } from './utils';

const prod = process.env.NODE_ENV === 'production';

if (!prod) {
  // load .env variables in development environment
  require('dotenv').config();
}

const config = {
  pgHost: process.env.POSTGRES_HOST || 'localhost',
  pgUser: process.env.POSTGRES_USER,
  pgPassword: process.env.POSTGRES_PASSWORD,
  pgPort: process.env.POSTGRES_PORT,
  pgDb: process.env.POSTGRES_DB,
  pgSchemas: (process.env.POSTGRES_SCHEMAS || '').split(','),
  watch: isTrue(process.env.WATCH),
  graphqlRoute: process.env.GRAPHQL_ROUTE,
  graphiqlRoute: process.env.GRAPHIQL_ROUTE,
  sessionSecret: process.env.SESSION_SECRET,
  sessionSecure: isTrue(process.env.SESSION_SECURE),
  port: process.env.GRAPHQL_PORT,
  prod,
};

function isTrue(str: string | undefined): boolean {
  return ['t', 'true', '1', 'yes'].some((flag) => str?.trim() === flag);
}

interface AdditionalContext {
  req: IncomingMessageWithSession;
  res: ServerResponse;
  pgRootPool: Pool;
}

export interface Context extends AdditionalContext {
  pgClient: Client;
}

console.log();
console.info('Starting heltin GraphQL...');
console.debug(
  JSON.stringify(
    {
      ...config,
      pgPassword: config.pgPassword ? '<omitted>' : undefined,
      sessionSecret: config.sessionSecret ? '<omitted>' : undefined,
    },
    undefined,
    '  ',
  ),
);
console.log();

if (!config.sessionSecret) {
  throw new Error('Session secret is required');
}

const pgConnectionString = `postgres://${config.pgUser}${
  config.pgPassword ? `:${config.pgPassword}` : ''
}@${config.pgHost}:${config.pgPort}/${config.pgDb}`;

// postgres pool with the root level user/role
const pgRootPool = new Pool({ connectionString: pgConnectionString });

const session = createSession({
  pgPool: pgRootPool,
  secret: config.sessionSecret,
  trustProxy: true,
  cookie: {
    name: 'heltin.sid', // synchronised with internal/session
    secure: config.sessionSecure,
    sameSite: 'lax',
    httpOnly: true,
  },
});

const postgraphile = Postgraphile<IncomingMessageWithSession, ServerResponse>(
  pgConnectionString,
  config.pgSchemas,
  {
    classicIds: true,
    dynamicJson: true,
    setofFunctionsContainNulls: false,
    ignoreRBAC: false,
    disableDefaultMutations: true,
    disableQueryLog: config.prod,
    watchPg: config.watch,
    graphileBuildOptions: {
      pgStrictFunctions: true,
    },
    appendPlugins: [SessionPlugin, PgIdToRowIdInflectorPlugin],
    graphqlRoute: config.graphqlRoute,
    graphiql: Boolean(config.graphiqlRoute),
    graphiqlRoute: config.graphiqlRoute,
    enhanceGraphiql: !config.prod, // graphiql is used in prod shouldnt be enhanced
    exportGqlSchemaPath: config.prod ? undefined : path.join(__dirname, 'schema.graphql'), // provide a schema file during development for relay
    pgSettings(req) {
      if (req.session) {
        return {
          role: 'viewer',
          'session.user_id': req.session.userId,
        };
      }
      return {
        role: 'anonymous',
      };
    },
    async additionalGraphQLContextFromRequest(req, res): Promise<AdditionalContext> {
      return {
        req,
        res,
        pgRootPool,
      };
    },
    handleErrors(errs, req, res) {
      // any anonymous permission denied error is a 401
      if (
        !req.session &&
        errs.some(
          (err) => err.message.toLowerCase().includes('unauthorized') || isPgForbiddenError(err),
        )
      ) {
        res.statusCode = 401;
        return [new GraphQLError('Unauthorized')];
      }

      // check for forbidden errors
      if (errs.some(isPgForbiddenError)) {
        // TODO: be more descriptive about _why?_ forbidden
        return [new GraphQLError('Forbidden')];
      }

      return errs;
    },
  },
);

http
  .createServer(async (req, res) => {
    try {
      const reqws = await session(req, res);

      // continue with Postgraphile only if session hasnt responded
      if (res.writable) {
        await postgraphile(reqws, res);
      }
    } catch (err) {
      writeInternalError(res, err);
    }
  })
  .listen(config.port);
