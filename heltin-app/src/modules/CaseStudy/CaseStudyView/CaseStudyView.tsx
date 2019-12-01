/**
 *
 * CaseStudyView
 *
 */

import React from 'react';
import { makeLink } from 'lib/makeLink';
import { CASE_STUDIES_PAGE_ROUTE, CLIENTS_PAGE_ROUTE } from 'lib/routes';

// relay
import { graphql, createFragmentContainer } from 'react-relay';
import { CaseStudyView_caseStudy } from 'relay/artifacts/CaseStudyView_caseStudy.graphql';

// ui
import { Flex, Text, Button } from '@domonda/ui';
import { FormattedMessage } from 'react-intl';

export interface CaseStudyViewProps {
  clientRowId: UUID;
  caseStudy: CaseStudyView_caseStudy;
}

const CaseStudyView: React.FC<CaseStudyViewProps> = (props) => {
  const { clientRowId, caseStudy } = props;
  return (
    <Flex container spacing="small" direction="column">
      <Flex item container spacing="tiny" justify="space-between" align="center">
        <Flex item>
          <Text size="large" weight="medium">
            <FormattedMessage id="CASE_STUDIES" />
          </Text>
        </Flex>
        <Flex item>
          <Button
            variant="primary"
            component={makeLink({
              to: `${CLIENTS_PAGE_ROUTE}/${clientRowId}/create-case-study`,
            })}
          >
            <FormattedMessage id="CREATE_CASE_STUDY" />
          </Button>
        </Flex>
      </Flex>
      <Flex item container direction="column" spacing="tiny">
        <Flex item container spacing="tiny" align="center">
          <Flex item>
            <Button
              color="accent"
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
            <Button color="secondary">
              <FormattedMessage id="CREATE_CONCLUSION" />
            </Button>
          </Flex>
          <Flex item>
            <Button variant="primary" color="secondary">
              <FormattedMessage id="CREATE_THERAPY" />
            </Button>
          </Flex>
        </Flex>
        <Flex item>
          <Text size="medium" weight="medium">
            <FormattedMessage id="THERAPIES" />
          </Text>
        </Flex>
        <Flex item>
          <Text color="warning">
            <FormattedMessage id="NO_ENTRIES" />
          </Text>
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
    }
  `,
});
export { ComposedCaseStudyView as CaseStudyView };
