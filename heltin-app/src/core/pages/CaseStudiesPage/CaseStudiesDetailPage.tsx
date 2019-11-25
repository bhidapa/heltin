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
import { Err, Loading, Flex } from '@domonda/ui';

// modules
import { CaseStudyEdit } from 'modules/CaseStudy/CaseStudyEdit';
import { CaseHistoryManage } from 'modules/CaseHistory/CaseHistoryManage';

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
                  ...CaseHistoryManage_caseHistory
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
          return (
            <>
              <Helmet title={caseStudy.description} />
              <Flex container direction="column" spacing="small">
                <Flex item>
                  <CaseStudyEdit caseStudy={caseStudy} />
                </Flex>
                <Flex item>
                  <CaseHistoryManage
                    caseStudyRowId={rowId}
                    caseHistory={caseStudy.caseHistories.nodes[0] || null}
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

const ComposedCaseStudiesDetailPage = CaseStudiesDetailPage;
export { ComposedCaseStudiesDetailPage as CaseStudiesDetailPage };
