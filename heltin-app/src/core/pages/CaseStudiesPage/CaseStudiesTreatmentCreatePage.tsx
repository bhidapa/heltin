/**
 *
 * CaseStudiesTreatmentCreatePage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FourOhFourPage } from '../FourOhFourPage';

// relay
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from 'relay/environment';
import { CaseStudiesTreatmentCreatePageQuery } from 'relay/artifacts/CaseStudiesTreatmentCreatePageQuery.graphql';

// ui
import { Err, Loading } from '@domonda/ui';

// modules
import { CaseStudyTreatmentManage } from 'modules/CaseStudy/CaseStudyTreatmentManage';

export type CaseStudiesTreatmentCreatePageProps = RouteComponentProps<{ rowId: UUID }>;

const CaseStudiesTreatmentCreatePage: React.FC<CaseStudiesTreatmentCreatePageProps> = (props) => {
  const {
    match: {
      params: { rowId },
    },
  } = props;

  return (
    <>
      <Helmet title="New case study treatment" />
      <QueryRenderer<CaseStudiesTreatmentCreatePageQuery>
        environment={environment}
        query={graphql`
          query CaseStudiesTreatmentCreatePageQuery($rowId: UUID!) {
            caseStudy: caseStudyByRowId(rowId: $rowId) {
              ...CaseStudyTreatmentManage_caseStudy
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
          const { caseStudy } = props;
          if (!caseStudy) {
            return <FourOhFourPage />;
          }
          return (
            <>
              <CaseStudyTreatmentManage caseStudy={caseStudy} caseStudyTreatment={null} />
            </>
          );
        }}
      />
    </>
  );
};

const ComposedCaseStudiesTreatmentCreatePage = CaseStudiesTreatmentCreatePage;
export { ComposedCaseStudiesTreatmentCreatePage as CaseStudiesTreatmentCreatePage };
