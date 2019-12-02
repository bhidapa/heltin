/**
 *
 * CaseStudiesConclusionCreatePage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FourOhFourPage } from '../FourOhFourPage';
import { FormattedMessage } from 'react-intl';

// relay
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from 'relay/environment';
import { CaseStudiesConclusionCreatePageQuery } from 'relay/artifacts/CaseStudiesConclusionCreatePageQuery.graphql';

// ui
import { Err, Loading, Flex, Svg, Text } from '@domonda/ui';
import { ExclamationTriangleIcon } from 'lib/icons';

// modules
import { CaseStudyConclusionManage } from 'modules/CaseStudy/CaseStudyConclusionManage';

export type CaseStudiesConclusionCreatePageProps = RouteComponentProps<{ rowId: UUID }>;

const CaseStudiesConclusionCreatePage: React.FC<CaseStudiesConclusionCreatePageProps> = (props) => {
  const {
    match: {
      params: { rowId },
    },
  } = props;

  return (
    <>
      <Helmet title="Conclude case study" />
      <QueryRenderer<CaseStudiesConclusionCreatePageQuery>
        environment={environment}
        query={graphql`
          query CaseStudiesConclusionCreatePageQuery($rowId: UUID!) {
            caseStudy: caseStudyByRowId(rowId: $rowId) {
              ...CaseStudyConclusionManage_caseStudy
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
              <Flex container direction="column" spacing="small">
                <Flex item>
                  <CaseStudyConclusionManage caseStudy={caseStudy} caseStudyConclusion={null} />
                </Flex>
                <Flex item container spacing="tiny" align="center">
                  <Flex item>
                    <Svg>
                      <ExclamationTriangleIcon />
                    </Svg>
                  </Flex>
                  <Flex item>
                    <Text>
                      <FormattedMessage id="TO_ADD_OTHER_INFO_FINISH_CREATING_CONCLUSION" />
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </>
          );
        }}
      />
    </>
  );
};

const ComposedCaseStudiesConclusionCreatePage = CaseStudiesConclusionCreatePage;
export { ComposedCaseStudiesConclusionCreatePage as CaseStudiesConclusionCreatePage };
