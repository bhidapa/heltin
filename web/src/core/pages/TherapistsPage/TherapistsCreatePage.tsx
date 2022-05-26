/**
 *
 * TherapistsCreatePage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { graphql, usePreloadedQuery } from 'react-relay';

import { useMatch } from '@tanstack/react-location';

import { BackButton, Breadcrumbs, LocationGenerics } from 'core/location';

import { TherapistManage } from 'modules/Therapist/TherapistManage';

export interface TherapistsCreatePageProps {}

export const TherapistsCreatePage: React.FC<TherapistsCreatePageProps> = () => {
  const match = useMatch<LocationGenerics>();

  const data = usePreloadedQuery(
    graphql`
      query TherapistsCreatePageQuery {
        ...TherapistManage_query
      }
    `,
    match.data.therapistsCreatePageQuery!,
  );

  return (
    <div className="container">
      <FormattedMessage id="NEW_THERAPIST">
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

      <TherapistManage query={data} therapist={null} />
    </div>
  );
};
