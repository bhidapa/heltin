/**
 *
 * CaseStudiesDetailPage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FourOhFourPage } from '../FourOhFourPage';

// relay
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from 'relay/environment';
import { CaseStudiesDetailPageQuery } from 'relay/artifacts/CaseStudiesDetailPageQuery.graphql';

// ui
import { Err, Loading, Flex, Text } from '@domonda/ui';

// modules
import { CaseStudyEdit } from 'modules/CaseStudy/CaseStudyEdit';
import { CaseHistoryManage } from 'modules/CaseHistory/CaseHistoryManage';
import { CaseHistoryFilesManage } from 'modules/CaseHistory/CaseHistoryFilesManage';

export type CaseStudiesDetailPageProps = RouteComponentProps<{ rowId: UUID }>;

const CaseStudiesDetailPage: React.FC<CaseStudiesDetailPageProps> = (props) => {
  const {
    match: {
      params: { rowId },
    },
  } = props;

  return (
    <>
      <Helmet title="Case study" />
      <QueryRenderer<CaseStudiesDetailPageQuery>
        environment={environment}
        query={graphql`
          query CaseStudiesDetailPageQuery($rowId: UUID!) {
            caseStudy: caseStudyByRowId(rowId: $rowId) {
              description
              caseHistories: caseHistoriesByCaseStudyRowId {
                nodes {
                  rowId
                  ...CaseHistoryManage_caseHistory
                  caseHistoryFiles: caseHistoryFilesByCaseHistoryRowId(orderBy: [CREATED_AT_ASC]) {
                    nodes {
                      ...CaseHistoryFilesManage_caseHistoryFiles
                    }
                  }
                }
              }
              ...CaseStudyEdit_caseStudy
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
          const caseHistory = caseStudy.caseHistories.nodes[0] || null;
          return (
            <>
              <Helmet title={caseStudy.description} />
              <Flex container direction="column" spacing="small">
                <Flex item>
                  <CaseStudyEdit caseStudy={caseStudy} />
                </Flex>
                <Flex item>
                  <CaseHistoryManage caseStudyRowId={rowId} caseHistory={caseHistory} />
                </Flex>
                <Flex item>
                  {caseHistory ? (
                    <CaseHistoryFilesManage
                      caseHistoryRowId={caseHistory.rowId}
                      caseHistoryFiles={caseHistory.caseHistoryFiles.nodes}
                    />
                  ) : (
                    <Text color="warning">
                      To upload earlier medical reports please create the case history first.
                    </Text>
                  )}
                </Flex>
              </Flex>
            </>
          );
        }}
      />
    </>
  );
};

const ComposedCaseStudiesDetailPage = CaseStudiesDetailPage;
export { ComposedCaseStudiesDetailPage as CaseStudiesDetailPage };
