/**
 *
 * CaseStudyView
 *
 */

import React from 'react';
import { makeLink } from 'lib/makeLink';
import { CASE_STUDIES_PAGE_ROUTE } from 'lib/routes';

// relay
import { graphql, createFragmentContainer } from 'react-relay';
import { CaseStudyView_caseStudy } from 'relay/artifacts/CaseStudyView_caseStudy.graphql';

// ui
import { Flex, Text, Button } from '@domonda/ui';
import { FormattedMessage } from 'react-intl';

// parts
import { CaseStudyTreatmentRowHeader, CaseStudyTreatmentRow } from './CaseStudyTreatmentRow';

export interface CaseStudyViewProps {
  caseStudy: CaseStudyView_caseStudy;
}

const CaseStudyView: React.FC<CaseStudyViewProps> = (props) => {
  const { caseStudy } = props;
  return (
    <Flex container spacing="small" direction="column">
      <Flex item container direction="column" spacing="tiny">
        <Flex item container spacing="tiny" align="center">
          <Flex item>
            <Button
              color="secondary"
              size="medium"
              variant="link"
              component={makeLink({
                to: `${CASE_STUDIES_PAGE_ROUTE}/${caseStudy.rowId}`,
              })}
            >
              {caseStudy.description}
            </Button>
          </Flex>
          <Flex item flex={1} />
          <Flex item>
            <Button color="secondary" disabled>
              <FormattedMessage id="CREATE_CONCLUSION" />
            </Button>
          </Flex>
          <Flex item>
            <Button
              variant="primary"
              color="secondary"
              component={makeLink({
                to: `${CASE_STUDIES_PAGE_ROUTE}/${caseStudy.rowId}/treatments/create`,
              })}
            >
              <FormattedMessage id="CREATE_TREATMENT" />
            </Button>
          </Flex>
        </Flex>
        <Flex item>
          <Text size="medium" weight="medium">
            <FormattedMessage id="TREATMENTS" />
          </Text>
        </Flex>
        <Flex item>
          {caseStudy.caseStudyTreatments.nodes.length > 0 ? (
            <>
              <CaseStudyTreatmentRowHeader />
              {caseStudy.caseStudyTreatments.nodes.map((node) => (
                <CaseStudyTreatmentRow
                  key={node.rowId}
                  item={node}
                  component={makeLink({
                    to: `${CASE_STUDIES_PAGE_ROUTE}/${caseStudy.rowId}/treatments/${node.rowId}`,
                    omit: ['item'],
                  })}
                />
              ))}
            </>
          ) : (
            <Text color="warning">
              <FormattedMessage id="NO_ENTRIES" />
            </Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

const ComposedCaseStudyView = createFragmentContainer(CaseStudyView, {
  caseStudy: graphql`
    fragment CaseStudyView_caseStudy on CaseStudy {
      rowId
      description
      caseStudyTreatments: caseStudyTreatmentsByCaseStudyRowId(orderBy: [STARTED_AT_DESC]) {
        nodes {
          rowId
          ...CaseStudyTreatmentRow_item
        }
      }
    }
  `,
});
export { ComposedCaseStudyView as CaseStudyView };
