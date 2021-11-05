import { makeExtendSchemaPlugin, gql } from "graphile-utils";
import { Context } from "../index";

export interface Session {
  user_id: string;
}

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
        context,
        _resolveInfo,
        { selectGraphQLResultFromTable }
      ) {
        const { req, pgRootPool, pgClient } = context as Context;

        const { email, password } = args.input;
        const {
          rows: [user],
        } = await pgRootPool.query(
          `select
            pub_user.id
          from public.user as pub_user
            inner join private.user as priv_user on priv_user.id = pub_user.id
          where pub_user.email = $1
          and not priv_user.disabled
          and priv_user.password = crypt($2, priv_user.password)`,
          [email, password]
        );
        if (!user?.id) throw new Error("Wrong credentials");
        req.session.user_id = user.id;

        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 60 * 24 * 30); // 30 days
        req.session.cookie.expires = expires;

        await new Promise<void>((resolve, reject) =>
          req.session.save((err) => (err ? reject(err) : resolve()))
        );

        // set relevant settings for currently running client for immediate access
        await pgClient.query("set role viewer");
        await pgClient.query("select set_config($1, $2, true)", [
          "session.user_id",
          user.id,
        ]);

        const sql = build.pgSql;
        const [data] = await selectGraphQLResultFromTable(
          sql.fragment`public.user`,
          (tableAlias, sqlBuilder) => {
            sqlBuilder.where(
              sql.fragment`${tableAlias}.id = ${sql.value(user.id)}`
            );
          }
        );
        return { query: build.$$isQuery, data };
      },
      async logout(_parent, _args, context) {
        const { req, pgClient } = context as Context;

        const somethingToDestroy = Boolean(req.session.user_id);

        await new Promise<void>((resolve, reject) =>
          req.session.destroy((err) => (err ? reject(err) : resolve()))
        );

        await pgClient.query("set role anonymous");
        await pgClient.query("reset session.user_id");

        return somethingToDestroy;
      },
      async logoutOthers(_parent, _args, context) {
        const { req, pgRootPool } = context as Context;

        if (!req.session.user_id) throw new Error("Unauthorized");

        const { rows } = await pgRootPool.query(
          `delete from private.session
          where sess->>'user_id' = $1
          and sid <> $2
          returning 1`,
          [req.session.user_id, req.sessionID]
        );
        return rows.length > 0;
      },
    },
  },
}));
