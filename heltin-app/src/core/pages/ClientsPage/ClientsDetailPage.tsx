/**
 *
 * ClientsDetailPage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FourOhFourPage } from '../FourOhFourPage';

// relay
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from 'relay/environment';
import { ClientsDetailPageQuery } from 'relay/artifacts/ClientsDetailPageQuery.graphql';

// ui
import { Err, Loading } from '@domonda/ui';

// modules
import { ClientEdit } from 'modules/Client/ClientEdit';

export type ClientsDetailPageProps = RouteComponentProps<{ rowId: UUID }>;

const ClientsDetailPage: React.FC<ClientsDetailPageProps> = (props) => {
  const {
    match: {
      params: { rowId },
    },
  } = props;

  return (
    <>
      <Helmet title="Client" />
      <QueryRenderer<ClientsDetailPageQuery>
        environment={environment}
        query={graphql`
          query ClientsDetailPageQuery($rowId: UUID!) {
            client: clientByRowId(rowId: $rowId) {
              fullName
              ...ClientEdit_client
            }
          }
        `}
        variables={{ rowId }}
        render={({ props, error, retry }) => {
          if (error) {
            return <Err error={error} onRetry={retry} />;
          }
          if (!props) {
            return <Loading />;
          }
          const { client } = props;
          if (!client) {
            return <FourOhFourPage />;
          }
          return (
            <>
              <Helmet title={client.fullName} />
              <ClientEdit client={client} />
            </>
          );
        }}
      />
    </>
  );
};

const ComposedClientsDetailPage = ClientsDetailPage;
export { ComposedClientsDetailPage as ClientsDetailPage };