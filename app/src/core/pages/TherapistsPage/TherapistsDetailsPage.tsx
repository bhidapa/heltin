/**
 *
 * TherapistsDetailsPage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { graphql, usePreloadedQuery } from 'react-relay';

import { useMatch } from '@tanstack/react-location';

import { NotFound } from 'lib/NotFound';

import { BackButton, Breadcrumbs, LocationGenerics } from 'core/location';

import { TherapistManage } from 'modules/Therapist/TherapistManage';

export interface TherapistsDetailsPageProps {}

export const TherapistsDetailsPage: React.FC<TherapistsDetailsPageProps> = () => {
  const match = useMatch<LocationGenerics>();

  const { query, therapist } = usePreloadedQuery(
    graphql`
      query TherapistsDetailsPageQuery($rowId: UUID!) {
        query {
          ...TherapistManage_query
        }
        therapist: therapistByRowId(rowId: $rowId) {
          fullName
          ...TherapistManage_therapist
        }
      }
    `,
    match.data.therapistsDetailsPageQuery!,
  );

  if (!therapist) {
    return <NotFound />;
  }

  return (
    <div className="container">
      <Helmet title={therapist.fullName} />

      <div className="row row-eq-spacing align-items-center">
        <div className="col-auto">
          <BackButton />
        </div>

        <div className="col">
          <Breadcrumbs rightAlign />
        </div>
      </div>

      <TherapistManage query={query} therapist={therapist} />
    </div>
  );
};
