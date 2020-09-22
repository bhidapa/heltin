/**
 *
 * CaseStudiesTreatmentCreatePage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FourOhFourPage } from '../FourOhFourPage';
import { FormattedMessage } from 'react-intl';

// relay
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from 'relay/environment';
import { CaseStudiesTreatmentCreatePageQuery } from 'relay/artifacts/CaseStudiesTreatmentCreatePageQuery.graphql';

// ui
import { Err, Loading, Flex, Svg, Text } from '@domonda/ui';
import { ExclamationTriangleIcon } from 'lib/icons';

// modules
import { CaseStudyTreatmentManage } from 'modules/CaseStudy/CaseStudyTreatmentManage';

export type CaseStudiesTreatmentCreatePageProps = RouteComponentProps<{
  rowId: UUID;
}>;

const CaseStudiesTreatmentCreatePage: React.FC<CaseStudiesTreatmentCreatePageProps> = (
  props,
) => {
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
              <Flex container direction="column" spacing="small">
                <Flex item>
                  <CaseStudyTreatmentManage
                    caseStudy={caseStudy}
                    caseStudyTreatment={null}
                  />
                </Flex>
                <Flex item container spacing="tiny" align="center">
                  <Flex item>
                    <Svg>
                      <ExclamationTriangleIcon />
                    </Svg>
                  </Flex>
                  <Flex item>
                    <Text>
                      <FormattedMessage id="TO_ADD_OTHER_INFO_FINISH_CREATING_TREATMENT" />
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

const ComposedCaseStudiesTreatmentCreatePage = CaseStudiesTreatmentCreatePage;
export { ComposedCaseStudiesTreatmentCreatePage as CaseStudiesTreatmentCreatePage };
