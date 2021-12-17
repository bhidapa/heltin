/**
 *
 * ProfessionalEdit
 *
 */

import React from 'react';
import { history } from 'lib/history';
import { PROFESSIONALS_PAGE_ROUTE } from 'lib/routes';
import { FormattedMessage } from 'react-intl';

// relay
import { graphql, useFragment } from 'react-relay/hooks';
import { ProfessionalEdit_professional$key } from 'relay/artifacts/ProfessionalEdit_professional.graphql';
import { ProfessionalEditUpdateMutation } from 'relay/artifacts/ProfessionalEditUpdateMutation.graphql';
import { ProfessionalEditDeleteMutation } from 'relay/artifacts/ProfessionalEditDeleteMutation.graphql';

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
  FormDateField,
  FormField,
} from '@domonda/react-form';
import { FormCheckboxField } from 'lib/FormFields';
import { ProfessionalTypeSelectOptions } from '../ProfessionalTypeSelectOptions';
import { GenderSelectOptions } from '../../GenderSelectOptions';
import { ResolveOnTrigger } from 'lib/ResolveOnTrigger';
import { makeLink } from 'lib/makeLink';
import { usePromiseMutation } from 'relay/hooks';
import { AutocompleteUser, AutocompleteUserItem } from 'modules/Autocomplete/AutocompleteUser';

export interface ProfessionalEditProps {
  viewerIsAdmin: boolean;
  professional: ProfessionalEdit_professional$key;
}

export const ProfessionalEdit: React.FC<ProfessionalEditProps> = (props) => {
  const { viewerIsAdmin, professional: professionalKey } = props;

  const professional = useFragment(
    graphql`
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
        disabled
        user: userByUserRowId {
          ...AutocompleteUser_item @relay(mask: false)
        }
      }
    `,
    professionalKey,
  );

  const updateMentalHealthProfessional = usePromiseMutation<ProfessionalEditUpdateMutation>(graphql`
    mutation ProfessionalEditUpdateMutation($input: UpdateMentalHealthProfessionalInput!) {
      updateMentalHealthProfessional(input: $input) {
        mentalHealthProfessional {
          ...ProfessionalEdit_professional
        }
      }
    }
  `);

  const deleteMentalHealthProfessional = usePromiseMutation<ProfessionalEditDeleteMutation>(
    graphql`
      mutation ProfessionalEditDeleteMutation($input: DeleteMentalHealthProfessionalInput!) {
        deleteMentalHealthProfessional(input: $input) {
          mentalHealthProfessional {
            id
          }
        }
      }
    `,
    {
      updater: (store) => {
        store.invalidateStore();
      },
    },
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
            promise={deleteMentalHealthProfessional}
            params={{ variables: { input: { rowId: professional.rowId } } }}
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
        <Form
          defaultValues={{
            ...professional,
            dateOfBirth: new Date(professional.dateOfBirth),
          }}
          onSubmit={({ fullName, dateOfBirth, user, ...rest }) =>
            updateMentalHealthProfessional({
              variables: {
                input: {
                  ...rest,
                  userRowId: user?.rowId,
                  dateOfBirth: dateOfBirth.toISOString(),
                },
              },
            })
          }
        >
          <Flex container spacing="tiny" direction="column">
            <Flex item>
              <FormSubmitErrorState>
                {(error, { resetSubmitError }) =>
                  error && <DismissableAlert message={error} onDismiss={resetSubmitError} />
                }
              </FormSubmitErrorState>
            </Flex>
            {viewerIsAdmin && (
              <>
                <Flex item>
                  <FormCheckboxField path="disabled" label={<FormattedMessage id="DISABLED" />} />
                </Flex>
                <Flex item>
                  <FormField<AutocompleteUserItem | null> path="user">
                    {({ value, setValue }) => (
                      <AutocompleteUser selectedItem={value} onChange={setValue} />
                    )}
                  </FormField>
                </Flex>
              </>
            )}
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
