/**
 *
 * ProfessionalsDetailPage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FourOhFourPage } from '../FourOhFourPage';

// relay
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { ProfessionalsDetailPageQuery } from 'relay/artifacts/ProfessionalsDetailPageQuery.graphql';

// modules
import { ProfessionalEdit } from 'modules/Professional/ProfessionalEdit';

export type ProfessionalsDetailPageProps = RouteComponentProps<{ rowId: UUID }>;

export const ProfessionalsDetailPage: React.FC<ProfessionalsDetailPageProps> = (props) => {
  const {
    match: {
      params: { rowId },
    },
  } = props;

  const { viewer, professional } = useLazyLoadQuery<ProfessionalsDetailPageQuery>(
    graphql`
      query ProfessionalsDetailPageQuery($rowId: UUID!) {
        viewer {
          isAdmin
        }
        professional: mentalHealthProfessionalByRowId(rowId: $rowId) {
          fullName
          ...ProfessionalEdit_professional
        }
      }
    `,
    { rowId },
  );

  if (!professional) {
    return <FourOhFourPage />;
  }
  return (
    <>
      <Helmet title={professional.fullName} />
      <ProfessionalEdit viewerIsAdmin={viewer!.isAdmin} professional={professional} />
    </>
  );
};
