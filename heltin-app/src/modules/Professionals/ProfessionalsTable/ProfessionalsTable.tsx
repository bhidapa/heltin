/**
 *
 * ProfessionalsTable
 *
 */

import React from 'react';
import { Sentinel } from 'lib/Sentinel';
import { useOnValueChange } from 'lib/useOnValueChange';

// relay
import { graphql, useLoadablePaginationFragment } from 'relay/hooks';
import { ProfessionalsTable_professionalsQuery$key } from 'relay/artifacts/ProfessionalsTable_professionalsQuery.graphql';
import { ProfessionalsTableRefetchQuery } from 'relay/artifacts/ProfessionalsTableRefetchQuery.graphql';

// ui
import { Flex, Loading } from '@domonda/ui';

// parts
import { useProfessionalsQueryParams } from '../professionalsQueryParams';
import { ProfessionalsTableFilter } from './ProfessionalsTableFilter';

// rows
import { ProfessionalsTableRowHeader, ProfessionalsTableRow } from './ProfessionalsTableRow';

export interface ProfessionalsTableProps {
  professionalsQuery: ProfessionalsTable_professionalsQuery$key;
}

export const ProfessionalsTable: React.FC<ProfessionalsTableProps> = (props) => {
  const { professionalsQuery: professionalsQueryKey } = props;

  const {
    data: { filterMentalHealthProfessionals },
    refetch,
    isRefetching,
    isLoadingNext,
    hasNext,
    loadNext,
  } = useLoadablePaginationFragment<ProfessionalsTableRefetchQuery, typeof professionalsQueryKey>(
    graphql`
      fragment ProfessionalsTable_professionalsQuery on Query
      @refetchable(queryName: "ProfessionalsTableRefetchQuery")
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
    professionalsQueryKey,
  );

  const [params] = useProfessionalsQueryParams();
  useOnValueChange(params, refetch);

  return (
    <Flex container direction="column" spacing="tiny">
      <Flex item>
        <ProfessionalsTableFilter />
      </Flex>
      {isRefetching && <Loading />}
      <Flex item>
        <ProfessionalsTableRowHeader />
        {filterMentalHealthProfessionals!.edges.map(({ node }) => (
          <ProfessionalsTableRow key={node.rowId} item={node} />
        ))}
      </Flex>
      {hasNext && !isLoadingNext && <Sentinel onReached={() => loadNext(params.count)} />}
      {isLoadingNext && <Loading />}
    </Flex>
  );
};
