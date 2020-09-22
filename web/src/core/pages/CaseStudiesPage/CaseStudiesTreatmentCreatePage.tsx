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
import { graphql, LazyLoadQuery } from 'relay/components';
import { CaseStudiesTreatmentCreatePageQuery } from 'relay/artifacts/CaseStudiesTreatmentCreatePageQuery.graphql';

// ui
import { Flex, Svg, Text } from '@domonda/ui';
import { ExclamationTriangleIcon } from 'lib/icons';

// modules
import { CaseStudyTreatmentManage } from 'modules/CaseStudy/CaseStudyTreatmentManage';
import { Boundary } from 'lib/Boundary';

export type CaseStudiesTreatmentCreatePageProps = RouteComponentProps<{
  rowId: UUID;
}>;

const CaseStudiesTreatmentCreatePage: React.FC<CaseStudiesTreatmentCreatePageProps> = (props) => {
  const {
    match: {
      params: { rowId },
    },
  } = props;

  return (
    <>
      <Helmet title="New case study treatment" />
      <Boundary>
        <LazyLoadQuery<CaseStudiesTreatmentCreatePageQuery>
          query={graphql`
            query CaseStudiesTreatmentCreatePageQuery($rowId: UUID!) {
              caseStudy: caseStudyByRowId(rowId: $rowId) {
                ...CaseStudyTreatmentManage_caseStudy
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
                    <CaseStudyTreatmentManage caseStudy={caseStudy} caseStudyTreatment={null} />
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
        </LazyLoadQuery>
      </Boundary>
    </>
  );
};

const ComposedCaseStudiesTreatmentCreatePage = CaseStudiesTreatmentCreatePage;
export { ComposedCaseStudiesTreatmentCreatePage as CaseStudiesTreatmentCreatePage };
