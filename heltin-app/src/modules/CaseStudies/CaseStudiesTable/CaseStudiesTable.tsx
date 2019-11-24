/**
 *
 * CaseStudiesTable
 *
 */

import React from 'react';
import { makeLink } from 'lib/makeLink';
import { CASE_STUDIES_PAGE_ROUTE } from 'lib/routes';

// relay
import { graphql, createFragmentContainer } from 'react-relay';
import { CaseStudiesTable_caseStudies } from 'relay/artifacts/CaseStudiesTable_caseStudies.graphql';
import { createCaseStudyMutation } from 'relay/mutations/CreateCaseStudy';

// ui
import { Flex, Text, Input, Button } from '@domonda/ui';
import { FormattedMessage } from 'react-intl';

// form
import { Form, FormInputField, FormSubmittingState } from '@domonda/react-form';

// parts
import { CaseStudiesTableRowHeader, CaseStudiesTableRow } from './CaseStudiesTableRow';

export interface CaseStudiesTableProps {
  clientRowId: UUID;
  caseStudies: CaseStudiesTable_caseStudies;
}

const CaseStudiesTable: React.FC<CaseStudiesTableProps> = (props) => {
  const { clientRowId, caseStudies } = props;
  return (
    <Flex container spacing="small" direction="column">
      <Flex item>
        <Text size="large" weight="medium">
          <FormattedMessage id="CASE_STUDIES" />
        </Text>
      </Flex>
      <Flex item>
        <CaseStudiesTableRowHeader />
        {caseStudies.map((caseStudy) => (
          <CaseStudiesTableRow
            key={caseStudy.rowId}
            item={caseStudy}
            component={makeLink({
              to: `${CASE_STUDIES_PAGE_ROUTE}/${caseStudy.rowId}`,
              omit: ['item'],
            })}
          />
        ))}
      </Flex>
      <Flex item>
        <Form
          defaultValues={{
            clientRowId,
            description: '',
          }}
          onSubmit={(values) => createCaseStudyMutation({ input: values })}
          resetOnSuccessfulSubmit
        >
          <Flex container direction="column" spacing="tiny">
            <Flex item>
              <FormInputField path="description" required>
                {({ inputProps }) => (
                  <Input {...inputProps} label={<FormattedMessage id="DESCRIPTION" />} />
                )}
              </FormInputField>
            </Flex>
            <Flex item container justify="flex-end">
              <Flex item>
                <FormSubmittingState>
                  {(submitting) => (
                    <Button disabled={submitting} type="submit" variant="primary">
                      <FormattedMessage id="CREATE" />
                    </Button>
                  )}
                </FormSubmittingState>
              </Flex>
            </Flex>
          </Flex>
        </Form>
      </Flex>
    </Flex>
  );
};

const ComposedCaseStudiesTable = createFragmentContainer(CaseStudiesTable, {
  caseStudies: graphql`
    fragment CaseStudiesTable_caseStudies on CaseStudy @relay(plural: true) {
      rowId
      ...CaseStudiesTableRow_item
    }
  `,
});
export { ComposedCaseStudiesTable as CaseStudiesTable };
