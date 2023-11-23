/**
 *
 * UsersPage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { graphql, usePreloadedQuery } from 'react-relay';
import { Link, useMatch } from '@tanstack/react-location';
import { LocationGenerics } from 'core/location';
import { UsersTable } from 'modules/Users/UsersTable';

export interface UsersPageProps {}

export const UsersPage: React.FC<UsersPageProps> = () => {
  const match = useMatch<LocationGenerics>();

  const query = usePreloadedQuery(
    graphql`
      query UsersPageQuery(
        # pagination
        $count: Int!
        $cursor: Cursor
        # filters
        $q: String
      ) {
        viewer @required(action: THROW) {
          canInsertUser
        }
        ...UsersTable_query
          @arguments(
            # pagination
            count: $count
            cursor: $cursor
            # filters
            q: $q
          )
      }
    `,
    match.data.usersPageQuery!,
  );

  return (
    <div className="container">
      <FormattedMessage id="USERS">
        {([msg]) => <Helmet title={msg?.toString()} />}
      </FormattedMessage>

      <div className="row row-eq-spacing align-items-center">
        <div className="col-auto">
          <h2 className="content-title m-0">
            <FormattedMessage id="USERS" />
          </h2>
        </div>
        {query.viewer.canInsertUser && (
          <div className="col text-right">
            <Link to="create" search className="btn btn-primary">
              <i className="fa-solid fa-plus"></i>
              &nbsp;
              <FormattedMessage id="NEW_USER" />
            </Link>
          </div>
        )}
      </div>

      <UsersTable query={query} />
    </div>
  );
};
