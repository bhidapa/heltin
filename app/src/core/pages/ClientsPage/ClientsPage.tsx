/**
 *
 * ClientsPage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { graphql, usePreloadedQuery } from 'react-relay';
import { Link, useMatch } from '@tanstack/react-location';
import { LocationGenerics } from 'core/location';
import { ClientsTable } from 'modules/Clients/ClientsTable';

export interface ClientsPageProps {}

export const ClientsPage: React.FC<ClientsPageProps> = () => {
  const match = useMatch<LocationGenerics>();

  const query = usePreloadedQuery(
    graphql`
      query ClientsPageQuery(
        # pagination
        $count: Int!
        $cursor: Cursor
        # filters
        $q: String
      ) {
        viewer @required(action: THROW) {
          canInsertClient
        }
        ...ClientsTable_query
          @arguments(
            # pagination
            count: $count
            cursor: $cursor
            # filters
            q: $q
          )
      }
    `,
    match.data.clientsPageQuery!,
  );

  return (
    <div className="container">
      <FormattedMessage id="CLIENTS">
        {([msg]) => <Helmet title={msg?.toString()} />}
      </FormattedMessage>

      <div className="row row-eq-spacing align-items-center">
        <div className="col-auto">
          <h2 className="content-title m-0">
            <FormattedMessage id="CLIENTS" />
          </h2>
        </div>
        {query.viewer.canInsertClient && (
          <div className="col text-right">
            <Link to="create" search className="btn btn-primary">
              <i className="fa-solid fa-plus"></i>
              &nbsp;
              <FormattedMessage id="NEW_CLIENT" />
            </Link>
          </div>
        )}
      </div>

      <ClientsTable query={query} />
    </div>
  );
};
