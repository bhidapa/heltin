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
import { Flex, Text, Button, Input, Select, Alert } from '@domonda/ui';

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
import { makeLink } from 'lib/makeLink';

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
    <Flex container direction="column" spacing="small">
      <Flex item container spacing="tiny" align="center">
        <Flex item>
          <Text size="large" weight="medium">
            {client.fullName}
          </Text>
          <Text size="medium" color="primary">
            {client.number}
          </Text>
        </Flex>
        <Flex item flex={1}>
          <div />
        </Flex>
        <Flex item>
          <ResolveOnTrigger
            promise={deleteClientMutation}
            params={{ input: { rowId: client.rowId } }}
            onResolve={() => history.push(CLIENTS_PAGE_ROUTE)}
          >
            {({ trigger, loading, error, clearError }) =>
              error ? (
                <Alert message={error} onClose={clearError} />
              ) : (
                <Button variant="primary" color="danger" disabled={loading} onClick={trigger}>
                  Delete
                </Button>
              )
            }
          </ResolveOnTrigger>
        </Flex>
      </Flex>
      <Flex item>
        <Form defaultValues={client} onSubmit={submit}>
          <Flex container spacing="tiny" direction="column">
            <Flex item>
              <FormSubmitErrorState>
                {(error, { resetSubmitError }) =>
                  error && <Alert message={error} onClose={resetSubmitError} />
                }
              </FormSubmitErrorState>
            </Flex>
            <Flex item container spacing="tiny">
              <Flex item flex={1}>
                <FormNumberField
                  path="number"
                  allowDecimal={false}
                  includeThousandsSeparator={false}
                  required
                >
                  {({ inputProps }) => <Input {...inputProps} autoFocus label="Number" />}
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
            <Flex item container spacing="tiny">
              <Flex item flex={1}>
                <FormInputField path="firstName" required>
                  {({ inputProps }) => <Input {...inputProps} label="First name" />}
                </FormInputField>
              </Flex>
              <Flex item flex={1}>
                <FormInputField path="lastName" required>
                  {({ inputProps }) => <Input {...inputProps} label="Last name" />}
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
                  {({ DateInput }) => <DateInput customInput={<Input label="Date of birth" />} />}
                </FormDateField>
              </Flex>
              <Flex item container spacing="tiny">
                <Flex item flex={1}>
                  <FormInputField path="telephone" required>
                    {({ inputProps }) => <Input {...inputProps} label="Telephone" />}
                  </FormInputField>
                </Flex>
                <Flex item flex={1}>
                  <FormInputField path="email">
                    {({ inputProps }) => <Input {...inputProps} type="email" label="E-Mail" />}
                  </FormInputField>
                </Flex>
              </Flex>
              <Flex item container spacing="tiny">
                <Flex item flex={1}>
                  <FormInputField path="address" required>
                    {({ inputProps }) => <Input {...inputProps} label="Address" />}
                  </FormInputField>
                </Flex>
                <Flex item flex={0.6}>
                  <FormInputField path="city" required>
                    {({ inputProps }) => <Input {...inputProps} label="City" />}
                  </FormInputField>
                </Flex>
              </Flex>
            </Flex>
            <Flex item container justify="flex-end" spacing="tiny">
              <Flex item>
                <Flex item>
                  <Button component={makeLink({ to: CLIENTS_PAGE_ROUTE + '/create' })}>
                    Create new
                  </Button>
                </Flex>
              </Flex>
              <Flex item>
                <FormLockedState>
                  {(locked) => (
                    <Button type="submit" disabled={locked} variant="primary">
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
