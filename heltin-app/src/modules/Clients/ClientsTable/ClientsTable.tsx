/**
 *
 * ClientsTable
 *
 */

import React, { useEffect } from 'react';
import { Sentinel } from 'lib/Sentinel';

// relay
import { graphql, usePaginationFragment } from 'react-relay/hooks';
import { ClientsTable_clientsQuery$key } from 'relay/artifacts/ClientsTable_clientsQuery.graphql';

// ui
import { Flex, Loading } from '@domonda/ui';

// parts
import { useClientsQueryParams } from '../clientsQueryParams';

// rows
import { ClientsTableRowHeader, ClientsTableRow } from './ClientsTableRow';

export interface ClientsTableProps {
  clientsQuery: ClientsTable_clientsQuery$key;
}

export const ClientsTable: React.FC<ClientsTableProps> = (props) => {
  const {
    data: { filterClients },
    hasNext,
    refetch,
    loadNext,
    isLoadingNext,
  } = usePaginationFragment(
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
  useEffect(() => refetch(params).dispose, [params]);

  return (
    <Flex container direction="column" spacing="tiny">
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
