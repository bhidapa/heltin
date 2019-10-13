/**
 *
 * ClientsTable
 *
 */

import React from 'react';
import { CLIENTS_PAGE_ROUTE } from 'lib/routes';
import { makeLink } from 'lib/makeLink';
import { Sentinel } from 'lib/Sentinel';

// relay
import { graphql, createPaginationContainer, WithRelayPaginationProp } from 'react-relay';
import { ClientsTable_clientsQuery } from 'relay/artifacts/ClientsTable_clientsQuery.graphql';
import { useValueForPagination } from 'relay/hooks';

// ui
import { Flex, Err, Loading } from '@domonda/ui';

// parts
import { useClientsQueryParams } from '../clientsQueryParams';
import { ClientsTableFilter } from './ClientsTableFilter';

// rows
import { ClientsTableRowHeader, ClientsTableRow } from './ClientsTableRow';

export interface ClientsTableProps {
  clientsQuery: ClientsTable_clientsQuery;
}

const ClientsTable: React.FC<ClientsTableProps & WithRelayPaginationProp> = (props) => {
  const { relay, clientsQuery } = props;

  const [params] = useClientsQueryParams();

  const [loadMore, loading, error] = useValueForPagination(params, relay);

  return (
    <Flex container direction="column" spacing={1}>
      <Flex item>
        <ClientsTableFilter />
      </Flex>
      <Flex item>
        <ClientsTableRowHeader />
        {error ? (
          <Err error={error} />
        ) : (
          clientsQuery.filterClients.edges.map(({ node }) => (
            <ClientsTableRow
              key={node.rowId}
              item={node}
              component={makeLink({
                to: `${CLIENTS_PAGE_ROUTE}/${node.rowId}`,
                omit: ['item'],
              })}
            />
          ))
        )}
      </Flex>
      <Flex item>{loading && <Loading />}</Flex>
      {!error && !loading && <Sentinel onReached={loadMore} />}
    </Flex>
  );
};

const ComposedClientsTable = createPaginationContainer(
  ClientsTable,
  {
    clientsQuery: graphql`
      fragment ClientsTable_clientsQuery on Query
        @argumentDefinitions(
          # pagination
          count: { type: "Int!" }
          cursor: { type: "Cursor" }
          # filters
          searchText: { type: "String" }
        ) {
        filterClients(
          # pagination
          first: $count
          after: $cursor
          # filters
          searchText: $searchText
        ) @connection(key: "ClientsTable_filterClients") {
          totalCount
          edges {
            node {
              rowId
              ...ClientsTableRow_item
            }
          }
        }
      }
    `,
  },
  {
    direction: 'forward',
    getVariables: (_0, { count, cursor }, fragmentVariables) => ({
      ...fragmentVariables,
      count,
      cursor,
    }),
    query: graphql`
      query ClientsTablePaginationQuery(
        # pagination
        $count: Int!
        $cursor: Cursor
        # filters
        $searchText: String
      ) {
        ...ClientsTable_clientsQuery
          @arguments(
            # pagination
            count: $count
            cursor: $cursor
            # filters
            searchText: $searchText
          )
      }
    `,
  },
);
export { ComposedClientsTable as ClientsTable };
