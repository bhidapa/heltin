/**
 *
 * ProfessionalsDetailPage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FourOhFourPage } from '../FourOhFourPage';

// relay
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from 'relay/environment';
import { ProfessionalsDetailPageQuery } from 'relay/artifacts/ProfessionalsDetailPageQuery.graphql';

// ui
import { Err, Loading } from '@domonda/ui';

// modules
import { ProfessionalEdit } from 'modules/Professional/ProfessionalEdit';

export type ProfessionalsDetailPageProps = RouteComponentProps<{ rowId: UUID }>;

const ProfessionalsDetailPage: React.FC<ProfessionalsDetailPageProps> = (props) => {
  const {
    match: {
      params: { rowId },
    },
  } = props;

  return (
    <>
      <Helmet title="Professional" />
      <QueryRenderer<ProfessionalsDetailPageQuery>
        environment={environment}
        query={graphql`
          query ProfessionalsDetailPageQuery($rowId: UUID!) {
            professional: mentalHealthProfessionalByRowId(rowId: $rowId) {
              fullName
              ...ProfessionalEdit_professional
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
          const { professional } = props;
          if (!professional) {
            return <FourOhFourPage />;
          }
          return (
            <>
              <Helmet title={professional.fullName} />
              <ProfessionalEdit professional={professional} />
            </>
          );
        }}
      />
    </>
  );
};

const ComposedProfessionalsDetailPage = ProfessionalsDetailPage;
export { ComposedProfessionalsDetailPage as ProfessionalsDetailPage };
