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
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from 'relay/environment';
import { ProfessionalsOverviewPageQuery } from 'relay/artifacts/ProfessionalsOverviewPageQuery.graphql';

// ui
import { Flex, Err, Loading, Text, Button } from '@domonda/ui';

// modules
import { useProfessionalsQueryParams } from 'modules/Professionals/professionalsQueryParams';
import { ProfessionalsTable } from 'modules/Professionals/ProfessionalsTable';
import { makeLink } from 'lib/makeLink';

export type ProfessionalsOverviewPageProps = RouteComponentProps;

const ProfessionalsOverviewPage: React.FC<ProfessionalsOverviewPageProps> = (props) => {
  const { match } = props;
  const [params] = useProfessionalsQueryParams({ once: true });

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
          <QueryRenderer<ProfessionalsOverviewPageQuery>
            environment={environment}
            query={graphql`
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
            `}
            variables={params}
            render={({ props, error, retry }) => {
              if (error) {
                return <Err error={error} onRetry={retry} />;
              }
              if (!props) {
                return <Loading />;
              }
              return <ProfessionalsTable professionalsQuery={props} />;
            }}
          />
        </Flex>
      </Flex>
    </>
  );
};

const ComposedProfessionalsOverviewPage = ProfessionalsOverviewPage;
export { ComposedProfessionalsOverviewPage as ProfessionalsOverviewPage };
