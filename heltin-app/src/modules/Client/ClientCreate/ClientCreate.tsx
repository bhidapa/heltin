/**
 *
 * ClientCreate
 *
 */

import React, { useCallback } from 'react';
import { history } from 'lib/history';
import { CLIENTS_PAGE_ROUTE } from 'lib/routes';

// relay
import { createClientMutation, CreateClientMutation } from 'relay/mutations/CreateClient';

// ui
import { Flex, Text, Button, TextField, Select, ErrInline } from '@domonda/ui';

// form
import {
  Form,
  FormInputField,
  FormSelectField,
  FormLockedState,
  FormNumberField,
  FormSubmitErrorState,
  FormSubmitHandler,
  FormDateField,
} from '@domonda/react-form';
import { ClientSentBySelectOptions } from '../ClientSentBySelectOptions';
import { GenderSelectOptions, Gender } from '../../GenderSelectOptions';

export interface ClientCreateProps {}

export const ClientCreate: React.FC<ClientCreateProps> = () => {
  const submit = useCallback<FormSubmitHandler<CreateClientMutation['variables']['input']>>(
    async ({
      address,
      city,
      dateOfBirth,
      discrete,
      email,
      firstName,
      gender,
      lastName,
      number,
      sentBy,
      telephone,
    }) => {
      const { createClient } = await createClientMutation({
        input: {
          address,
          city,
          dateOfBirth,
          discrete,
          email,
          firstName,
          gender,
          lastName,
          number,
          sentBy,
          telephone,
        },
      });
      if (!createClient || !createClient.client) {
        throw new Error('Malformed create client response!');
      }
      history.push(`${CLIENTS_PAGE_ROUTE}/${createClient.client.rowId}`);
    },
    [],
  );

  return (
    <Flex container direction="column" spacing={2}>
      <Flex item>
        <Text variant="headline">Create client</Text>
      </Flex>
      <Flex item>
        <Form
          defaultValues={{
            number: 0, // TODO-db-191013 derive next number
            address: '',
            city: '',
            dateOfBirth: '',
            email: null,
            firstName: '',
            gender: Gender.Male,
            lastName: '',
            sentBy: 'SELF_INITIATIVE',
            telephone: '',
            discrete: false,
          }}
          onSubmit={submit}
        >
          <Flex container spacing={1} direction="column">
            <Flex item>
              <FormSubmitErrorState>
                {(error, { resetSubmitError }) =>
                  error && (
                    <ErrInline error={error} onClose={resetSubmitError} disableCloseAutoFocus />
                  )
                }
              </FormSubmitErrorState>
            </Flex>
            <Flex item container spacing={1}>
              <Flex item flex={1}>
                <FormNumberField
                  path="number"
                  allowDecimal={false}
                  includeThousandsSeparator={false}
                  required
                >
                  {({ inputProps }) => <TextField {...inputProps} autoFocus label="Number" />}
                </FormNumberField>
              </Flex>
              <Flex item minWidth={212} maxWidth={212}>
                <FormSelectField path="sentBy" required>
                  {({ selectProps }) => (
                    <Select {...selectProps} label="Sent by">
                      <ClientSentBySelectOptions disableEmptyOption />
                    </Select>
                  )}
                </FormSelectField>
              </Flex>
            </Flex>
            <Flex item container spacing={1}>
              <Flex item flex={1}>
                <FormInputField path="firstName" required>
                  {({ inputProps }) => <TextField {...inputProps} label="First name" />}
                </FormInputField>
              </Flex>
              <Flex item flex={1}>
                <FormInputField path="lastName" required>
                  {({ inputProps }) => <TextField {...inputProps} label="Last name" />}
                </FormInputField>
              </Flex>
              <Flex item minWidth={112} maxWidth={112}>
                <FormSelectField path="gender" required>
                  {({ selectProps }) => (
                    <Select {...selectProps} label="Gender">
                      <GenderSelectOptions disableEmptyOption />
                    </Select>
                  )}
                </FormSelectField>
              </Flex>
              <Flex item minWidth={128} maxWidth={128}>
                <FormDateField path="dateOfBirth" required>
                  {({ DateInput }) => (
                    <DateInput customInput={<TextField label="Date of birth" />} />
                  )}
                </FormDateField>
              </Flex>
              <Flex item container spacing={1}>
                <Flex item flex={1}>
                  <FormInputField path="telephone" required>
                    {({ inputProps }) => <TextField {...inputProps} label="Telephone" />}
                  </FormInputField>
                </Flex>
                <Flex item flex={1}>
                  <FormInputField path="email">
                    {({ inputProps }) => <TextField {...inputProps} type="email" label="E-Mail" />}
                  </FormInputField>
                </Flex>
              </Flex>
              <Flex item container spacing={1}>
                <Flex item flex={1}>
                  <FormInputField path="address" required>
                    {({ inputProps }) => <TextField {...inputProps} label="Address" />}
                  </FormInputField>
                </Flex>
                <Flex item flex={0.6}>
                  <FormInputField path="city" required>
                    {({ inputProps }) => <TextField {...inputProps} label="City" />}
                  </FormInputField>
                </Flex>
              </Flex>
            </Flex>
            <Flex item container justify="flex-end">
              <Flex item>
                <FormLockedState>
                  {(locked) => (
                    <Button type="submit" disabled={locked} variant="contained" color="primary">
                      Create
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
