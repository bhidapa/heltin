/**
 *
 * ClientsCaseStudiesCreatePage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { graphql, usePreloadedQuery } from 'react-relay';

import { useMatch } from '@tanstack/react-location';

import { NotFound } from 'lib/NotFound';

import { BackButton, Breadcrumbs, LocationGenerics } from 'core/location';

import { CaseStudyManage } from 'modules/CaseStudy/CaseStudyManage';

export interface ClientsCaseStudiesCreatePageProps {}

export const ClientsCaseStudiesCreatePage: React.FC<ClientsCaseStudiesCreatePageProps> = () => {
  const match = useMatch<LocationGenerics>();

  const { client } = usePreloadedQuery(
    graphql`
      query ClientsCaseStudiesCreatePageQuery($clientRowId: UUID!) {
        client: clientByRowId(rowId: $clientRowId) {
          fullName
          ...CaseStudyManage_client
        }
      }
    `,
    match.data.clientsCaseStudiesCreatePageQuery!,
  );

  if (!client) {
    return <NotFound />;
  }

  return (
    <div className="container">
      <FormattedMessage id="NEW_CASE_STUDY_FOR" values={{ name: client.fullName }}>
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

      <CaseStudyManage client={client} caseStudy={null} />
    </div>
  );
};
