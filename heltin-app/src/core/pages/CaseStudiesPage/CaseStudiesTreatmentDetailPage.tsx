/**
 *
 * CaseStudiesTreatmentDetailPage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FourOhFourPage } from '../FourOhFourPage';

// relay
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from 'relay/environment';
import { CaseStudiesTreatmentDetailPageQuery } from 'relay/artifacts/CaseStudiesTreatmentDetailPageQuery.graphql';

// ui
import { Err, Loading, Flex } from '@domonda/ui';

// modules
import { CaseStudyTreatmentManage } from 'modules/CaseStudy/CaseStudyTreatmentManage';
import { CaseStudyTreatmentFilesManage } from 'modules/CaseStudy/CaseStudyTreatmentFilesManage';

export type CaseStudiesTreatmentDetailPageProps = RouteComponentProps<{
  caseStudyTreatmentRowId: UUID;
  caseStudyRowId: UUID;
}>;

const CaseStudiesTreatmentDetailPage: React.FC<CaseStudiesTreatmentDetailPageProps> = (props) => {
  const {
    match: {
      params: { caseStudyTreatmentRowId },
    },
  } = props;

  return (
    <>
      <Helmet title="Treatment" />
      <QueryRenderer<CaseStudiesTreatmentDetailPageQuery>
        environment={environment}
        query={graphql`
          query CaseStudiesTreatmentDetailPageQuery($rowId: UUID!) {
            caseStudyTreatment: caseStudyTreatmentByRowId(rowId: $rowId) {
              rowId
              description
              ...CaseStudyTreatmentManage_caseStudyTreatment
              caseStudy: caseStudyByCaseStudyRowId {
                ...CaseStudyTreatmentManage_caseStudy
              }
              caseStudyTreatmentFiles: caseStudyTreatmentFilesByCaseStudyTreatmentRowId(
                orderBy: [CREATED_AT_ASC]
              ) {
                nodes {
                  ...CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles
                }
              }
            }
          }
        `}
        variables={{ rowId: caseStudyTreatmentRowId }}
        render={({ props, error, retry }) => {
          if (error) {
            return <Err error={error} onRetry={retry} />;
          }
          if (!props) {
            return <Loading />;
          }
          const { caseStudyTreatment } = props;
          if (!caseStudyTreatment) {
            return <FourOhFourPage />;
          }
          return (
            <>
              {caseStudyTreatment.description && <Helmet title={caseStudyTreatment.description} />}
              <Flex container direction="column" spacing="small">
                <Flex item>
                  <CaseStudyTreatmentManage
                    caseStudy={caseStudyTreatment.caseStudy}
                    caseStudyTreatment={caseStudyTreatment}
                  />
                </Flex>
                <Flex item>
                  <CaseStudyTreatmentFilesManage
                    caseStudyTreatmentRowId={caseStudyTreatment.rowId}
                    caseStudyTreatmentFiles={caseStudyTreatment.caseStudyTreatmentFiles.nodes}
                  />
                </Flex>
              </Flex>
            </>
          );
        }}
      />
    </>
  );
};

const ComposedCaseStudiesTreatmentDetailPage = CaseStudiesTreatmentDetailPage;
export { ComposedCaseStudiesTreatmentDetailPage as CaseStudiesTreatmentDetailPage };
