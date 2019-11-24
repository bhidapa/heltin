/**
 *
 * ProfessionalEdit
 *
 */

import React, { useCallback } from 'react';
import { history } from 'lib/history';
import { PROFESSIONALS_PAGE_ROUTE } from 'lib/routes';
import { FormattedMessage } from 'react-intl';

// relay
import { graphql, createFragmentContainer } from 'react-relay';
import { ProfessionalEdit_professional } from 'relay/artifacts/ProfessionalEdit_professional.graphql';
import { updateProfessionalMutation } from 'relay/mutations/UpdateProfessional';
import { deleteProfessionalMutation } from 'relay/mutations/DeleteProfessional';

// ui
import { Flex, Text, Button, Input, Select } from '@domonda/ui';
import { DismissableAlert } from 'lib/DismissableAlert';

// form
import {
  Form,
  FormInputField,
  FormSelectField,
  FormLockedState,
  FormSubmitErrorState,
  FormSubmitHandler,
  FormDateField,
} from '@domonda/react-form';
import { ProfessionalTypeSelectOptions } from '../ProfessionalTypeSelectOptions';
import { GenderSelectOptions } from '../../GenderSelectOptions';
import { ResolveOnTrigger } from 'lib/ResolveOnTrigger';
import { makeLink } from 'lib/makeLink';

export interface ProfessionalEditProps {
  professional: ProfessionalEdit_professional;
}

const ProfessionalEdit: React.FC<ProfessionalEditProps> = (props) => {
  const { professional } = props;

  const submit = useCallback<FormSubmitHandler<ProfessionalEdit_professional>>(
    ({ fullName, ...values }) =>
      updateProfessionalMutation({
        input: values,
      }),
    [],
  );

  return (
    <Flex container direction="column" spacing="small">
      <Flex item container spacing="tiny" align="center">
        <Flex item>
          <Text size="large" weight="medium">
            {professional.fullName}
          </Text>
        </Flex>
        <Flex item flex={1}>
          <div />
        </Flex>
        <Flex item>
          <ResolveOnTrigger
            promise={deleteProfessionalMutation}
            params={{ input: { rowId: professional.rowId } }}
            onResolve={() => history.push(PROFESSIONALS_PAGE_ROUTE)}
          >
            {({ trigger, loading, error, clearError }) =>
              error ? (
                <DismissableAlert message={error} onDismiss={clearError} />
              ) : (
                <Button variant="primary" color="danger" disabled={loading} onClick={trigger}>
                  <FormattedMessage id="DELETE" />
                </Button>
              )
            }
          </ResolveOnTrigger>
        </Flex>
      </Flex>
      <Flex item>
        <Form defaultValues={professional} onSubmit={submit}>
          <Flex container spacing="tiny" direction="column">
            <Flex item>
              <FormSubmitErrorState>
                {(error, { resetSubmitError }) =>
                  error && <DismissableAlert message={error} onDismiss={resetSubmitError} />
                }
              </FormSubmitErrorState>
            </Flex>
            <Flex item>
              <FormSelectField path="type" required>
                {({ selectProps }) => (
                  <Select {...selectProps} label={<FormattedMessage id="TYPE" />}>
                    <ProfessionalTypeSelectOptions disableEmptyOption />
                  </Select>
                )}
              </FormSelectField>
            </Flex>
            <Flex item container spacing="tiny">
              <Flex item minWidth={92} maxWidth={92}>
                <FormInputField path="title">
                  {({ inputProps }) => (
                    <Input
                      {...inputProps}
                      label={<FormattedMessage id="PROFESSIONAL_TITLE" />}
                      autoFocus
                    />
                  )}
                </FormInputField>
              </Flex>
              <Flex item flex={1}>
                <FormInputField path="firstName" required>
                  {({ inputProps }) => (
                    <Input {...inputProps} label={<FormattedMessage id="NAME" />} autoFocus />
                  )}
                </FormInputField>
              </Flex>
              <Flex item flex={1}>
                <FormInputField path="lastName" required>
                  {({ inputProps }) => (
                    <Input {...inputProps} label={<FormattedMessage id="SURNAME" />} />
                  )}
                </FormInputField>
              </Flex>
              <Flex item minWidth={112} maxWidth={112}>
                <FormSelectField path="gender" required>
                  {({ selectProps }) => (
                    <Select {...selectProps} label={<FormattedMessage id="GENDER" />}>
                      <GenderSelectOptions disableEmptyOption />
                    </Select>
                  )}
                </FormSelectField>
              </Flex>
              <Flex item minWidth={128} maxWidth={128}>
                <FormDateField path="dateOfBirth" required>
                  {({ DateInput }) => (
                    <DateInput
                      customInput={<Input label={<FormattedMessage id="DATE_OF_BIRTH" />} />}
                    />
                  )}
                </FormDateField>
              </Flex>
              <Flex item container spacing="tiny">
                <Flex item flex={1}>
                  <FormInputField path="email" required>
                    {({ inputProps }) => <Input {...inputProps} type="email" label="E-Mail" />}
                  </FormInputField>
                </Flex>
              </Flex>
            </Flex>
            <Flex item container justify="flex-end" spacing="tiny">
              <Flex item>
                <Flex item>
                  <Button component={makeLink({ to: PROFESSIONALS_PAGE_ROUTE + '/create' })}>
                    <FormattedMessage id="CREATE_NEW" />
                  </Button>
                </Flex>
              </Flex>
              <Flex item>
                <FormLockedState>
                  {(locked) => (
                    <Button type="submit" disabled={locked} variant="primary">
                      <FormattedMessage id="SAVE" />
                    </Button>
                  )}
                </FormLockedState>
              </Flex>
            </Flex>
          </Flex>
        </Form>
      </Flex>
    </Flex>
  );
};

const ComposedProfessionalEdit = createFragmentContainer(ProfessionalEdit, {
  professional: graphql`
    fragment ProfessionalEdit_professional on MentalHealthProfessional {
      rowId
      dateOfBirth
      email
      title
      firstName
      gender
      lastName
      fullName
      type
    }
  `,
});
export { ComposedProfessionalEdit as ProfessionalEdit };
