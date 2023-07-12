/**
 *
 * ClientsDetailsPage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { graphql, usePreloadedQuery } from 'react-relay';

import { useMatch } from '@tanstack/react-location';

import { NotFound } from 'lib/NotFound';

import { BackButton, Breadcrumbs, LocationGenerics } from 'core/location';

import { ClientAssignedTherapistsManage } from 'modules/Client/ClientAssignedTherapistsManage';
import { ClientCaseStudies } from 'modules/Client/ClientCaseStudies';
import { ClientManage } from 'modules/Client/ClientManage';

export interface ClientsDetailsPageProps {}

export const ClientsDetailsPage: React.FC<ClientsDetailsPageProps> = () => {
  const match = useMatch<LocationGenerics>();

  const { viewer, client, filterForms, ...query } = usePreloadedQuery(
    graphql`
      query ClientsDetailsPageQuery($rowId: UUID!) {
        ...ClientAssignedTherapistsManage_query
        viewer @required(action: THROW) {
          isAdmin
          isTherapist
          ...ClientManage_viewer
        }
        client: clientByRowId(rowId: $rowId) {
          fullName
          ...ClientManage_client
          ...ClientAssignedTherapistsManage_client
          ...ClientCaseStudies_client
        }
        filterForms {
          nodes {
            ...ClientCaseStudies_forms
          }
        }
      }
    `,
    match.data.clientsDetailsPageQuery!,
  );

  if (!client) {
    return <NotFound />;
  }

  return (
    <div className="container">
      <Helmet title={client.fullName} />

      <div className="row row-eq-spacing align-items-center">
        <div className="col-auto">
          <BackButton />
        </div>

        <div className="col">
          <Breadcrumbs rightAlign />
        </div>
      </div>

      <ClientManage viewer={viewer} client={client} nextAvailableClientNumber={null} />

      <div className="content">
        <hr />
      </div>

      <ClientAssignedTherapistsManage query={query} client={client} />

      {(viewer.isAdmin || viewer.isTherapist) && (
        <>
          <div className="content">
            <hr />
          </div>

          <ClientCaseStudies client={client} forms={filterForms?.nodes || []} />
        </>
      )}
    </div>
  );
};
