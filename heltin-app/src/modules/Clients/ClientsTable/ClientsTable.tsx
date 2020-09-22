/**
 *
 * ClientsTable
 *
 */

import React from 'react';
import { Sentinel } from 'lib/Sentinel';
import { useOnValueChange } from 'lib/useOnValueChange';

// relay
import { graphql, useLoadablePaginationFragment } from 'relay/hooks';
import { ClientsTable_clientsQuery$key } from 'relay/artifacts/ClientsTable_clientsQuery.graphql';

// ui
import { Flex, Loading } from '@domonda/ui';

// parts
import { useClientsQueryParams } from '../clientsQueryParams';

// rows
import { ClientsTableRowHeader, ClientsTableRow } from './ClientsTableRow';
import { ClientsTableFilter } from '../ClientsTableFilter';

export interface ClientsTableProps {
  clientsQuery: ClientsTable_clientsQuery$key;
}

export const ClientsTable: React.FC<ClientsTableProps> = (props) => {
  const {
    data: { filterClients },
    hasNext,
    isRefetching,
    refetch,
    loadNext,
    isLoadingNext,
  } = useLoadablePaginationFragment(
    graphql`
      fragment ClientsTable_clientsQuery on Query
      @refetchable(queryName: "ClientsTableRefetchQuery")
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
    props.clientsQuery,
  );

  const [params] = useClientsQueryParams();
  useOnValueChange(params, refetch);

  return (
    <Flex container direction="column" spacing="tiny">
      <Flex item>
        <ClientsTableFilter />
      </Flex>
      {isRefetching && <Loading />}
      <Flex item>
        <ClientsTableRowHeader />
        {filterClients.edges.map(({ node }) => (
          <ClientsTableRow key={node.rowId} item={node} />
        ))}
      </Flex>
      <Flex item>{isLoadingNext && <Loading />}</Flex>
      {!isLoadingNext && hasNext && <Sentinel onReached={() => loadNext(params.count)} />}
    </Flex>
  );
};
