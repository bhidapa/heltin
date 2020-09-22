/**
 *
 * CaseStudiesConclusionDetailPage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FourOhFourPage } from '../FourOhFourPage';

// relay
import { graphql, LazyLoadQuery } from 'relay/components';
import { CaseStudiesConclusionDetailPageQuery } from 'relay/artifacts/CaseStudiesConclusionDetailPageQuery.graphql';

// ui
import { Flex } from '@domonda/ui';

// modules
import { CaseStudyConclusionManage } from 'modules/CaseStudy/CaseStudyConclusionManage';
import { CaseStudyConclusionFilesManage } from 'modules/CaseStudy/CaseStudyConclusionFilesManage';
import { Boundary } from 'lib/Boundary';

export type CaseStudiesConclusionDetailPageProps = RouteComponentProps<{
  caseStudyConclusionRowId: UUID;
  caseStudyRowId: UUID;
}>;

export const CaseStudiesConclusionDetailPage: React.FC<CaseStudiesConclusionDetailPageProps> = (
  props,
) => {
  const {
    match: {
      params: { caseStudyConclusionRowId },
    },
  } = props;

  return (
    <>
      <Helmet title="Conclusion" />
      <Boundary>
        <LazyLoadQuery<CaseStudiesConclusionDetailPageQuery>
          query={graphql`
            query CaseStudiesConclusionDetailPageQuery($rowId: UUID!) {
              caseStudyConclusion: caseStudyConclusionByRowId(rowId: $rowId) {
                rowId
                description
                ...CaseStudyConclusionManage_caseStudyConclusion
                caseStudy: caseStudyByCaseStudyRowId {
                  ...CaseStudyConclusionManage_caseStudy
                }
                caseStudyConclusionFiles: caseStudyConclusionFilesByCaseStudyConclusionRowId(
                  orderBy: [CREATED_AT_ASC]
                ) {
                  nodes {
                    ...CaseStudyConclusionFilesManage_caseStudyConclusionFiles
                  }
                }
              }
            }
          `}
          variables={{ rowId: caseStudyConclusionRowId }}
        >
          {({ caseStudyConclusion }) => {
            if (!caseStudyConclusion) {
              return <FourOhFourPage />;
            }
            return (
              <>
                {caseStudyConclusion.description && (
                  <Helmet title={caseStudyConclusion.description} />
                )}
                <Flex container direction="column" spacing="small">
                  <Flex item>
                    <CaseStudyConclusionManage
                      caseStudy={caseStudyConclusion.caseStudy}
                      caseStudyConclusion={caseStudyConclusion}
                    />
                  </Flex>
                  <Flex item>
                    <CaseStudyConclusionFilesManage
                      caseStudyConclusionRowId={caseStudyConclusion.rowId}
                      caseStudyConclusionFiles={caseStudyConclusion.caseStudyConclusionFiles.nodes}
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
