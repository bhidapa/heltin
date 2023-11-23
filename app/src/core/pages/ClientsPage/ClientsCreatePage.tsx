/**
 *
 * ClientsCreatePage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { graphql, usePreloadedQuery } from 'react-relay';
import { useMatch } from '@tanstack/react-location';
import { BackButton, Breadcrumbs, LocationGenerics } from 'core/location';
import { ClientManage } from 'modules/Client/ClientManage';

export interface ClientsCreatePageProps {}

export const ClientsCreatePage: React.FC<ClientsCreatePageProps> = () => {
  const match = useMatch<LocationGenerics>();

  const { viewer, nextAvailableClientNumber } = usePreloadedQuery(
    graphql`
      query ClientsCreatePageQuery {
        viewer @required(action: THROW) {
          ...ClientManage_viewer
        }
        nextAvailableClientNumber
      }
    `,
    match.data.clientsCreatePageQuery!,
  );

  return (
    <div className="container">
      <FormattedMessage id="NEW_CLIENT">
        {([msg]) => <Helmet title={msg?.toString()} />}
      </FormattedMessage>

      <div className="row row-eq-spacing align-items-center">
        <div className="col-auto">
          <BackButton />
        </div>

        <div className="col">
          <Breadcrumbs rightAlign />
        </div>
      </div>

      <ClientManage
        viewer={viewer}
        client={null}
        nextAvailableClientNumber={nextAvailableClientNumber}
      />
    </div>
  );
};
