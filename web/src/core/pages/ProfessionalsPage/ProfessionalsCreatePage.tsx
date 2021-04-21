/**
 *
 * ProfessionalsCreatePage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet-async';

// relay
import { graphql, useLazyLoadQuery } from 'react-relay';
import { ProfessionalsCreatePageQuery } from 'relay/artifacts/ProfessionalsCreatePageQuery.graphql';

// modules
import { ProfessionalCreate } from 'modules/Professional/ProfessionalCreate';

export type ProfessionalsCreatePageProps = RouteComponentProps;

export const ProfessionalsCreatePage: React.FC<ProfessionalsCreatePageProps> = () => {
  const { viewer } = useLazyLoadQuery<ProfessionalsCreatePageQuery>(
    graphql`
      query ProfessionalsCreatePageQuery {
        viewer {
          isAdmin
        }
      }
    `,
    {},
  );

  return (
    <>
      <FormattedMessage id="ADD_THERAPIST">{([msg]) => <Helmet title={msg} />}</FormattedMessage>
      <ProfessionalCreate viewerIsAdmin={viewer!.isAdmin} />
    </>
  );
};
