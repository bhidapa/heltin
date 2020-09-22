/**
 *
 * CaseStudiesDetailPage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FourOhFourPage } from '../FourOhFourPage';

// relay
import { graphql, LazyLoadQuery } from 'relay/components';
import { CaseStudiesDetailPageQuery } from 'relay/artifacts/CaseStudiesDetailPageQuery.graphql';

// ui
import { Flex, Text } from '@domonda/ui';

// modules
import { CaseStudyManage } from 'modules/CaseStudy/CaseStudyManage';
import { CaseStudyProfessionalsManage } from 'modules/CaseStudy/CaseStudyProfessionalsManage';
import { CaseHistoryManage } from 'modules/CaseHistory/CaseHistoryManage';
import { CaseHistoryFilesManage } from 'modules/CaseHistory/CaseHistoryFilesManage';
import { Boundary } from 'lib/Boundary';

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
      <Boundary>
        <LazyLoadQuery<CaseStudiesDetailPageQuery>
          query={graphql`
            query CaseStudiesDetailPageQuery($rowId: UUID!) {
              caseStudy: caseStudyByRowId(rowId: $rowId) {
                title
                caseHistories: caseHistoriesByCaseStudyRowId {
                  nodes {
                    rowId
                    ...CaseHistoryManage_caseHistory
                    caseHistoryFiles: caseHistoryFilesByCaseHistoryRowId(
                      orderBy: [CREATED_AT_ASC]
                    ) {
                      nodes {
                        ...CaseHistoryFilesManage_caseHistoryFiles
                      }
                    }
                  }
                }
                client: clientByClientRowId {
                  ...CaseStudyManage_client
                }
                ...CaseStudyManage_caseStudy
                ...CaseStudyProfessionalsManage_caseStudy
              }
            }
          `}
          variables={{ rowId }}
        >
          {({ caseStudy }) => {
            if (!caseStudy) {
              return <FourOhFourPage />;
            }
            const caseHistory = caseStudy.caseHistories.nodes[0] || null;
            return (
              <>
                <Helmet title={caseStudy.title} />
                <Flex container direction="column" spacing="small">
                  <Flex item>
                    {/* Must exist until groups are created. */}
                    <CaseStudyManage client={caseStudy.client!} caseStudy={caseStudy} />
                  </Flex>
                  <Flex item>
                    <CaseStudyProfessionalsManage caseStudy={caseStudy} />
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
        </LazyLoadQuery>
      </Boundary>
    </>
  );
};

const ComposedCaseStudiesDetailPage = CaseStudiesDetailPage;
export { ComposedCaseStudiesDetailPage as CaseStudiesDetailPage };
