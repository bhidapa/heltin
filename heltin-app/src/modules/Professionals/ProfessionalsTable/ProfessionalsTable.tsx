/**
 *
 * ProfessionalsTable
 *
 */

import React from 'react';
import { PROFESSIONALS_PAGE_ROUTE } from 'lib/routes';
import { makeLink } from 'lib/makeLink';
import { Sentinel } from 'lib/Sentinel';

// relay
import { graphql, createPaginationContainer, WithRelayPaginationProp } from 'react-relay';
import { ProfessionalsTable_professionalsQuery } from 'relay/artifacts/ProfessionalsTable_professionalsQuery.graphql';
import { useValueForPagination } from 'relay/hooks';

// ui
import { Flex, Err, Loading } from '@domonda/ui';

// parts
import { useProfessionalsQueryParams } from '../professionalsQueryParams';
import { ProfessionalsTableFilter } from './ProfessionalsTableFilter';

// rows
import { ProfessionalsTableRowHeader, ProfessionalsTableRow } from './ProfessionalsTableRow';

export interface ProfessionalsTableProps {
  professionalsQuery: ProfessionalsTable_professionalsQuery;
}

const ProfessionalsTable: React.FC<ProfessionalsTableProps & WithRelayPaginationProp> = (props) => {
  const { relay, professionalsQuery } = props;

  const [params] = useProfessionalsQueryParams();

  const [loadMore, loading, error] = useValueForPagination(params, relay);

  return (
    <Flex container direction="column" spacing="tiny">
      <Flex item>
        <ProfessionalsTableFilter />
      </Flex>
      <Flex item>
        <ProfessionalsTableRowHeader />
        {error ? (
          <Err error={error} />
        ) : (
          professionalsQuery.filterMentalHealthProfessionals.edges.map(({ node }) => (
            <ProfessionalsTableRow
              key={node.rowId}
              item={node}
              component={makeLink({
                to: `${PROFESSIONALS_PAGE_ROUTE}/${node.rowId}`,
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

const ComposedProfessionalsTable = createPaginationContainer(
  ProfessionalsTable,
  {
    professionalsQuery: graphql`
      fragment ProfessionalsTable_professionalsQuery on Query
      @argumentDefinitions(
        # pagination
        count: { type: "Int!" }
        cursor: { type: "Cursor" }
        # filters
        searchText: { type: "String" }
      ) {
        filterMentalHealthProfessionals(
          # pagination
          first: $count
          after: $cursor
          # filters
          searchText: $searchText
        ) @connection(key: "ProfessionalsTable_filterMentalHealthProfessionals") {
          totalCount
          edges {
            node {
              rowId
              ...ProfessionalsTableRow_item
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
      query ProfessionalsTablePaginationQuery(
        # pagination
        $count: Int!
        $cursor: Cursor
        # filters
        $searchText: String
      ) {
        ...ProfessionalsTable_professionalsQuery
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
export { ComposedProfessionalsTable as ProfessionalsTable };
