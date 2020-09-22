/**
 *
 * ProfessionalCreate
 *
 */

import React, { useCallback } from 'react';
import { history } from 'lib/history';
import { PROFESSIONALS_PAGE_ROUTE } from 'lib/routes';
import { FormattedMessage } from 'react-intl';

// relay
import {
  createProfessionalMutation,
  CreateProfessionalMutation,
} from 'relay/mutations/CreateProfessional';

// ui
import { Flex, Text, Button, Input, Select } from '@domonda/ui';
import { DismissableAlert } from 'lib/DismissableAlert';

// form
import {
  Form,
  FormInputField,
  FormSelectField,
  FormSubmittingState,
  FormSubmitErrorState,
  FormSubmitHandler,
  FormDateField,
} from '@domonda/react-form';
import { ProfessionalTypeSelectOptions } from '../ProfessionalTypeSelectOptions';
import { GenderSelectOptions } from '../../GenderSelectOptions';

type FormValues = Omit<CreateProfessionalMutation['variables']['input'], 'userRowId'>;

export interface ProfessionalCreateProps {}

export const ProfessionalCreate: React.FC<ProfessionalCreateProps> = () => {
  const submit = useCallback<FormSubmitHandler<FormValues>>(async (values) => {
    const { createMentalHealthProfessional } = await createProfessionalMutation({
      input: values,
    });
    if (
      !createMentalHealthProfessional ||
      !createMentalHealthProfessional.mentalHealthProfessional
    ) {
      throw new Error('Malformed create professional response!');
    }
    history.push(
      `${PROFESSIONALS_PAGE_ROUTE}/${createMentalHealthProfessional.mentalHealthProfessional.rowId}`,
    );
  }, []);

  return (
    <Flex container direction="column" spacing="small">
      <Flex item>
        <Text size="large" weight="medium">
          <FormattedMessage id="ADD_THERAPIST" />
        </Text>
      </Flex>
      <Flex item>
        <Form<FormValues>
          defaultValues={{
            firstName: '',
            lastName: '',
            gender: 'FEMALE',
            email: '',
            type: 'PSYCHOTHERAPIST',
            dateOfBirth: '',
          }}
          onSubmit={submit}
        >
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
            <Flex item container spacing="tiny" wrap>
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
                    <Input {...inputProps} label={<FormattedMessage id="NAME" />} />
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
            <Flex item container justify="flex-end">
              <Flex item>
                <FormSubmittingState>
                  {(locked) => (
                    <Button type="submit" disabled={locked} variant="primary">
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
