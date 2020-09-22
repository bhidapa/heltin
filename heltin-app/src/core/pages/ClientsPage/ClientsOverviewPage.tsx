/**
 *
 * ClientsOverviewPage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';

// relay
import { graphql } from 'react-relay';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { ClientsOverviewPageQuery } from 'relay/artifacts/ClientsOverviewPageQuery.graphql';

// ui
import { Flex, Text, Button } from '@domonda/ui';

// modules
import { useClientsQueryParams } from 'modules/Clients/clientsQueryParams';
import { ClientsTable } from 'modules/Clients/ClientsTable';
import { makeLink } from 'lib/makeLink';
import { ClientsTableFilter } from 'modules/Clients/ClientsTableFilter';
import { Boundary } from 'lib/Boundary';

export type ClientsOverviewPageProps = RouteComponentProps;

const ClientsOverviewPage: React.FC<ClientsOverviewPageProps> = (props) => {
  const { match } = props;
  const [params] = useClientsQueryParams({ once: true });

  const data = useLazyLoadQuery<ClientsOverviewPageQuery>(
    graphql`
      query ClientsOverviewPageQuery(
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
    params,
  );

  return (
    <>
      <FormattedMessage id="CLIENTS">{([msg]) => <Helmet title={msg} />}</FormattedMessage>
      <Flex container spacing="small" direction="column">
        <Flex item container spacing="tiny" align="center">
          <Flex item flex={1}>
            <Text size="large" weight="medium">
              <FormattedMessage id="CLIENTS" />
            </Text>
          </Flex>
          <Flex item>
            <Button variant="primary" component={makeLink({ to: match.url + '/create' })}>
              <FormattedMessage id="CREATE" />
            </Button>
          </Flex>
        </Flex>
        <Flex item>
          <ClientsTableFilter />
        </Flex>
        <Flex item>
          <Boundary>
            <ClientsTable clientsQuery={data} />
          </Boundary>
        </Flex>
      </Flex>
    </>
  );
};

const ComposedClientsOverviewPage = ClientsOverviewPage;
export { ComposedClientsOverviewPage as ClientsOverviewPage };
