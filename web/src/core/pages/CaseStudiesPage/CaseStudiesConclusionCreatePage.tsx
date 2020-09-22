/**
 *
 * CaseStudiesConclusionCreatePage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FourOhFourPage } from '../FourOhFourPage';
import { FormattedMessage } from 'react-intl';

// relay
import { graphql, LazyLoadQuery } from 'relay/components';
import { CaseStudiesConclusionCreatePageQuery } from 'relay/artifacts/CaseStudiesConclusionCreatePageQuery.graphql';

// ui
import { Flex, Svg, Text } from '@domonda/ui';
import { ExclamationTriangleIcon } from 'lib/icons';

// modules
import { CaseStudyConclusionManage } from 'modules/CaseStudy/CaseStudyConclusionManage';
import { Boundary } from 'lib/Boundary';

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
      <Boundary>
        <LazyLoadQuery<CaseStudiesConclusionCreatePageQuery>
          query={graphql`
            query CaseStudiesConclusionCreatePageQuery($rowId: UUID!) {
              caseStudy: caseStudyByRowId(rowId: $rowId) {
                ...CaseStudyConclusionManage_caseStudy
              }
            }
          `}
          variables={{ rowId }}
        >
          {({ caseStudy }) => {
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
        </LazyLoadQuery>
      </Boundary>
    </>
  );
};

const ComposedCaseStudiesConclusionCreatePage = CaseStudiesConclusionCreatePage;
export { ComposedCaseStudiesConclusionCreatePage as CaseStudiesConclusionCreatePage };
