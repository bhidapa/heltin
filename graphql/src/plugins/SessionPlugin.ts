/**
 *
 * SessionPlugin
 *
 */
import { makeExtendSchemaPlugin, gql } from 'graphile-utils';
import { writeInternalError } from '../utils';
import { Context } from '../index';
import db from '../db';

export const SessionPlugin = makeExtendSchemaPlugin((build) => ({
  typeDefs: gql`
    input LoginInput {
      email: String!
      password: String!
    }
    type LoginPayload {
      query: Query
      user: User! @pgField
    }
    extend type Mutation {
      login(input: LoginInput!): LoginPayload
      # Simply destroys the login session. Will return 'true' if there was a session in the first place.
      logout: Boolean!
      # Destroys all login sessions except for the current one. Will return 'true' if there were other sessions in the first place.
      logoutOthers: Boolean!
    }
  `,
  resolvers: {
    Mutation: {
      async login(
        _parent,
        args,
        { req, res, pgRootPool, pgClient }: Context,
        _resolveInfo,
        { selectGraphQLResultFromTable },
      ) {
        const { email, password } = args.input;
        const user = await db(pgRootPool).queryRow<{ id: string }>(
          `select
            pub_user.id
          from public.user as pub_user
            inner join private.user as priv_user on priv_user.id = pub_user.id
          where pub_user.email = $1
          and not priv_user.disabled
          and priv_user.password = crypt($2, priv_user.password)`,
          email,
          password,
        );
        if (!user?.id) {
          throw new Error('Wrong credentials');
        }

        try {
          await req.updateSession(user.id);
        } catch (err) {
          writeInternalError(res, err);
          return; // already responded
        }

        await db(pgClient).exec('set role viewer');
        await db(pgClient).exec(
          'select set_config($1, $2, true)',
          'session.user_id',
          user.id,
        );

        const sql = build.pgSql;
        const [data] = await selectGraphQLResultFromTable(
          sql.fragment`public.user`,
          (tableAlias, sqlBuilder) => {
            sqlBuilder.where(
              sql.fragment`${tableAlias}.id = ${sql.value(user.id)}`,
            );
          },
        );
        return { query: build.$$isQuery, data };
      },
      async logout(
        _parent,
        _args,
        { req, pgClient }: Context,
      ): Promise<boolean> {
        await db(pgClient).exec('set role anonymous');
        await db(pgClient).exec('reset session.user_id');
        return await req.deleteSession();
      },
      async logoutOthers(_parent, _args, { req }: Context): Promise<Boolean> {
        if (!req.session) {
          throw new Error('Unauthorized');
        }
        return await req.deleteAllSessions(true);
      },
    },
  },
}));
