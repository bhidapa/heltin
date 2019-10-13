/**
 *
 * ClientEdit
 *
 */

import React, { useCallback } from 'react';
import { history } from 'lib/history';
import { CLIENTS_PAGE_ROUTE } from 'lib/routes';

// relay
import { graphql, createFragmentContainer } from 'react-relay';
import { ClientEdit_client } from 'relay/artifacts/ClientEdit_client.graphql';
import { updateClientMutation } from 'relay/mutations/UpdateClient';
import { deleteClientMutation } from 'relay/mutations/DeleteClient';

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
import { GenderSelectOptions } from '../../GenderSelectOptions';
import { ResolveOnTrigger } from 'lib/ResolveOnTrigger';

export interface ClientEditProps {
  client: ClientEdit_client;
}

const ClientEdit: React.FC<ClientEditProps> = (props) => {
  const { client } = props;

  const submit = useCallback<FormSubmitHandler<ClientEdit_client>>(
    ({
      rowId,
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
    }) =>
      updateClientMutation({
        input: {
          rowId,
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
      }),
    [],
  );

  return (
    <Flex container direction="column" spacing={2}>
      <Flex item container spacing={1} justify="space-between" align="center">
        <Flex item>
          <Text variant="headline">{client.fullName}</Text>
          <Text variant="subheading" color="primary">
            {client.number}
          </Text>
        </Flex>
        <Flex item>
          <ResolveOnTrigger
            promise={deleteClientMutation}
            params={{ input: { rowId: client.rowId } }}
            onResolve={() => history.push(CLIENTS_PAGE_ROUTE)}
          >
            {({ trigger, loading, error, clearError }) =>
              error ? (
                <ErrInline error={error} onClose={clearError} />
              ) : (
                <Button variant="contained" color="error" disabled={loading} onClick={trigger}>
                  Delete
                </Button>
              )
            }
          </ResolveOnTrigger>
        </Flex>
      </Flex>
      <Flex item>
        <Form defaultValues={client} onSubmit={submit}>
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
                      Save
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

const ComposedClientEdit = createFragmentContainer(ClientEdit, {
  client: graphql`
    fragment ClientEdit_client on Client {
      rowId
      fullName
      number
      firstName
      lastName
      dateOfBirth
      telephone
      gender
      city
      address
      sentBy
      email
      discrete
    }
  `,
});
export { ComposedClientEdit as ClientEdit };
