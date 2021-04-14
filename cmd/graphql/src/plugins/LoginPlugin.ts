import { makeExtendSchemaPlugin, gql } from "graphile-utils";

export const LoginPlugin = makeExtendSchemaPlugin((build) => ({
  typeDefs: gql`
    input LoginInput {
      email: String!
      password: String!
    }
    type LoginPayload {
      user: User! @pgField
    }
    extend type Mutation {
      login(input: LoginInput!): LoginPayload
      # Simply destroys the login session. Will return 'true' if there was a session in the first place.
      logout: Boolean!
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
        const { rootPgPool, saveUserIdInSession, pgClient } = context;

        const { email, password } = args.input;
        const {
          rows: [user],
        } = await rootPgPool.query(
          `select
            pub_user.id
          from public.user as pub_user
            inner join private.user as priv_user on priv_user.id = pub_user.id
          where pub_user.email = $1
          and not priv_user.disabled
          and priv_user.password = crypt($2, priv_user.password)`,
          [email, password]
        );
        if (!user?.id) {
          throw new Error("Wrong login credentials");
        }

        // Save the successful login in the session
        await saveUserIdInSession(user.id);

        // Tell pg we're logged in
        await pgClient.query("set role viewer;");
        await pgClient.query("select set_config($1, $2, true);", [
          "session.user_id",
          user.id,
        ]);

        // Fetch the data that was requested from GraphQL, and return it
        const sql = build.pgSql;
        const [row] = await selectGraphQLResultFromTable(
          sql.fragment`public.user`,
          (tableAlias, sqlBuilder) => {
            sqlBuilder.where(
              sql.fragment`${tableAlias}.id = ${sql.value(user.id)}`
            );
          }
        );
        return {
          data: row,
        };
      },
      async logout(_parent, _args, context) {
        const { destroySession, pgClient } = context;

        const somethingToDestroy = await destroySession();

        // If there was a session to destroy, tell pg we've logged out
        if (somethingToDestroy) {
          await pgClient.query("set role anonymous;");
          await pgClient.query("reset session.user_id;");
        }

        return somethingToDestroy;
      },
    },
  },
}));
