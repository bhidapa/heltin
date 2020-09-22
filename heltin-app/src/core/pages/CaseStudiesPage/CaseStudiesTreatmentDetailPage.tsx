/**
 *
 * CaseStudiesTreatmentDetailPage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FourOhFourPage } from '../FourOhFourPage';

// relay
import { graphql, LazyLoadQuery } from 'relay/components';
import { CaseStudiesTreatmentDetailPageQuery } from 'relay/artifacts/CaseStudiesTreatmentDetailPageQuery.graphql';

// ui
import { Boundary } from 'lib/Boundary';
import { Flex } from '@domonda/ui';

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
      <Boundary>
        <LazyLoadQuery<CaseStudiesTreatmentDetailPageQuery>
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
        >
          {({ caseStudyTreatment }) => {
            if (!caseStudyTreatment) {
              return <FourOhFourPage />;
            }
            return (
              <>
                {caseStudyTreatment.description && (
                  <Helmet title={caseStudyTreatment.description} />
                )}
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
        </LazyLoadQuery>
      </Boundary>
    </>
  );
};

const ComposedCaseStudiesTreatmentDetailPage = CaseStudiesTreatmentDetailPage;
export { ComposedCaseStudiesTreatmentDetailPage as CaseStudiesTreatmentDetailPage };
