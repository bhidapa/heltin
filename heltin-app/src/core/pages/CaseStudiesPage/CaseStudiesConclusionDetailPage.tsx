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
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from 'relay/environment';
import { CaseStudiesConclusionDetailPageQuery } from 'relay/artifacts/CaseStudiesConclusionDetailPageQuery.graphql';

// ui
import { Err, Loading, Flex } from '@domonda/ui';

// modules
import { CaseStudyConclusionManage } from 'modules/CaseStudy/CaseStudyConclusionManage';
import { CaseStudyConclusionFilesManage } from 'modules/CaseStudy/CaseStudyConclusionFilesManage';

export type CaseStudiesConclusionDetailPageProps = RouteComponentProps<{
  caseStudyConclusionRowId: UUID;
  caseStudyRowId: UUID;
}>;

const CaseStudiesConclusionDetailPage: React.FC<CaseStudiesConclusionDetailPageProps> = (
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
      <QueryRenderer<CaseStudiesConclusionDetailPageQuery>
        environment={environment}
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
        render={({ props, error, retry }) => {
          if (error) {
            return <Err error={error} onRetry={retry} />;
          }
          if (!props) {
            return <Loading />;
          }
          const { caseStudyConclusion } = props;
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
                    caseStudyConclusionFiles={
                      caseStudyConclusion.caseStudyConclusionFiles.nodes
                    }
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

const ComposedCaseStudiesConclusionDetailPage = CaseStudiesConclusionDetailPage;
export { ComposedCaseStudiesConclusionDetailPage as CaseStudiesConclusionDetailPage };
