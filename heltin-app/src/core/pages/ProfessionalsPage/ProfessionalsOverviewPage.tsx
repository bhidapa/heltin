/**
 *
 * ProfessionalsOverviewPage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';

// relay
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { ProfessionalsOverviewPageQuery } from 'relay/artifacts/ProfessionalsOverviewPageQuery.graphql';

// ui
import { Flex, Text, Button } from '@domonda/ui';

// modules
import { useProfessionalsQueryParams } from 'modules/Professionals/professionalsQueryParams';
import { ProfessionalsTable } from 'modules/Professionals/ProfessionalsTable';
import { makeLink } from 'lib/makeLink';

export type ProfessionalsOverviewPageProps = RouteComponentProps;

export const ProfessionalsOverviewPage: React.FC<ProfessionalsOverviewPageProps> = (props) => {
  const { match } = props;

  const [params] = useProfessionalsQueryParams({ once: true });

  const query = useLazyLoadQuery<ProfessionalsOverviewPageQuery>(
    graphql`
      query ProfessionalsOverviewPageQuery(
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
    params,
  );

  return (
    <>
      <FormattedMessage id="THERAPISTS">{([msg]) => <Helmet title={msg} />}</FormattedMessage>
      <Flex container spacing="small" direction="column">
        <Flex item container spacing="tiny" align="center">
          <Flex item flex={1}>
            <Text size="large" weight="medium">
              <FormattedMessage id="THERAPISTS" />
            </Text>
          </Flex>
          <Flex item>
            <Button variant="primary" component={makeLink({ to: match.url + '/create' })}>
              <FormattedMessage id="CREATE" />
            </Button>
          </Flex>
        </Flex>
        <Flex item>
          <ProfessionalsTable professionalsQuery={query} />
        </Flex>
      </Flex>
    </>
  );
};
