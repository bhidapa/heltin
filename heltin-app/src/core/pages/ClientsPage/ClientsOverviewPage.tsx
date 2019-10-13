/**
 *
 * ClientsOverviewPage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// relay
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from 'relay/environment';
import { ClientsOverviewPageQuery } from 'relay/artifacts/ClientsOverviewPageQuery.graphql';

// ui
import { Flex, Err, Loading, Text, Button } from '@domonda/ui';

// modules
import { useClientsQueryParams } from 'modules/Clients/clientsQueryParams';
import { ClientsTable } from 'modules/Clients/ClientsTable';

export type ClientsOverviewPageProps = RouteComponentProps;

const ClientsOverviewPage: React.FC<ClientsOverviewPageProps> = () => {
  const [params] = useClientsQueryParams({ once: true });

  return (
    <>
      <Helmet title="Clients" />
      <Flex container spacing={2} direction="column">
        <Flex item container spacing={1} align="center">
          <Flex item flex={1}>
            <Text variant="headline">Clients</Text>
          </Flex>
          <Flex item>
            <Button disabled variant="contained" color="primary">
              Create
            </Button>
          </Flex>
        </Flex>
        <Flex item>
          <QueryRenderer<ClientsOverviewPageQuery>
            environment={environment}
            query={graphql`
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
            `}
            variables={params}
            render={({ props, error, retry }) => {
              if (error) {
                return <Err error={error} onRetry={retry} />;
              }
              if (!props) {
                return <Loading />;
              }
              return <ClientsTable clientsQuery={props} />;
            }}
          />
        </Flex>
      </Flex>
    </>
  );
};

const ComposedClientsOverviewPage = ClientsOverviewPage;
export { ComposedClientsOverviewPage as ClientsOverviewPage };