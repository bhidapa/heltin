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
import { PlusIcon } from 'lib/icons';

// form
import { Form, FormInputField, FormSubmittingState } from '@domonda/react-form';

// decorate
import { decorate, Decorate } from './decorate';

export interface CaseStudiesTableProps {
  clientRowId: UUID;
  caseStudies: CaseStudiesTable_caseStudies;
}

const CaseStudiesTable: React.FC<CaseStudiesTableProps & Decorate> = (props) => {
  const { classes, clientRowId, caseStudies } = props;
  return (
    <Flex container spacing="small" direction="column">
      <Flex item>
        <Text size="large" weight="medium">
          <FormattedMessage id="CASE_STUDIES" />
        </Text>
      </Flex>
      <Flex item container direction="column" spacing="tiny">
        {caseStudies.length > 0 ? (
          caseStudies.map(({ rowId, description }) => (
            <Flex item key={rowId}>
              <div className={classes.caseStudy}>
                <Button
                  variant="link"
                  component={makeLink({
                    to: `${CASE_STUDIES_PAGE_ROUTE}/${rowId}`,
                  })}
                >
                  {description}
                </Button>
              </div>
            </Flex>
          ))
        ) : (
          <Flex item>
            <Text color="warning">
              <FormattedMessage id="NO_ENTRIES" />
            </Text>
          </Flex>
        )}
        <Flex item>
          <Form
            defaultValues={{
              clientRowId,
              description: '',
            }}
            onSubmit={(values) => createCaseStudyMutation({ input: values })}
            resetOnSuccessfulSubmit
          >
            <Flex container spacing="tiny" align="baseline">
              <Flex item flex={1}>
                <FormInputField path="description" required>
                  {({ inputProps }) => (
                    <Input {...inputProps} label={<FormattedMessage id="DESCRIPTION" />} />
                  )}
                </FormInputField>
              </Flex>
              <Flex item>
                <FormSubmittingState>
                  {(submitting) => (
                    <Button disabled={submitting} type="submit" variant="text" color="success">
                      <PlusIcon />
                    </Button>
                  )}
                </FormSubmittingState>
              </Flex>
            </Flex>
          </Form>
        </Flex>
      </Flex>
    </Flex>
  );
};

const ComposedCaseStudiesTable = createFragmentContainer(decorate(CaseStudiesTable), {
  caseStudies: graphql`
    fragment CaseStudiesTable_caseStudies on CaseStudy @relay(plural: true) {
      rowId
      description
    }
  `,
});
export { ComposedCaseStudiesTable as CaseStudiesTable };
