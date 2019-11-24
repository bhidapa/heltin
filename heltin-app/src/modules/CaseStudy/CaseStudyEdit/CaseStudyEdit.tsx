/**
 *
 * CaseStudyEdit
 *
 */

import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';

// relay
import { graphql, createFragmentContainer } from 'react-relay';
import { CaseStudyEdit_caseStudy } from 'relay/artifacts/CaseStudyEdit_caseStudy.graphql';
import { updateCaseStudyMutation } from 'relay/mutations/UpdateCaseStudy';

// ui
import { Flex, Button, Text } from '@domonda/ui';
import { DismissableAlert } from 'lib/DismissableAlert';

// form
import {
  Form,
  FormLockedState,
  FormSubmitHandler,
  FormSubmitErrorState,
} from '@domonda/react-form';
import { FormInputField } from 'lib/FormFields';

export interface CaseStudyEditProps {
  caseStudy: CaseStudyEdit_caseStudy;
}

const CaseStudyEdit: React.FC<CaseStudyEditProps> = (props) => {
  const { caseStudy } = props;

  const submit = useCallback<FormSubmitHandler<CaseStudyEdit_caseStudy>>(
    ({ rowId, description }) => {
      return updateCaseStudyMutation({
        input: {
          rowId,
          description,
        },
      });
    },
    [],
  );

  return (
    <Flex container spacing="small" direction="column">
      <Flex item>
        <Text size="large" weight="medium">
          {caseStudy.description}
        </Text>
        <Text size="medium" color="accent">
          {/* TODO: make groups */}
          {caseStudy.client!.fullName}
        </Text>
      </Flex>
      <Flex item>
        <Form defaultValues={caseStudy} onSubmit={submit}>
          <Flex container direction="column" spacing="tiny">
            <Flex item>
              <FormSubmitErrorState>
                {(error, { resetSubmitError }) =>
                  error && <DismissableAlert message={error} onDismiss={resetSubmitError} />
                }
              </FormSubmitErrorState>
            </Flex>
            <Flex item>
              <FormInputField
                required
                path="description"
                label={<FormattedMessage id="DESCRIPTION" />}
              />
            </Flex>
            <Flex item container justify="flex-end">
              <FormLockedState>
                {(submitting) => (
                  <Button disabled={submitting} variant="primary" type="submit">
                    <FormattedMessage id="SAVE" />
                  </Button>
                )}
              </FormLockedState>
            </Flex>
          </Flex>
        </Form>
      </Flex>
    </Flex>
  );
};

const ComposedCaseStudyEdit = createFragmentContainer(CaseStudyEdit, {
  caseStudy: graphql`
    fragment CaseStudyEdit_caseStudy on CaseStudy {
      rowId
      description
      client: clientByClientRowId {
        fullName
      }
    }
  `,
});
export { ComposedCaseStudyEdit as CaseStudyEdit };
