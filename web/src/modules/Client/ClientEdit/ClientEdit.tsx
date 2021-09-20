/**
 *
 * ClientEdit
 *
 */

import React from 'react';
import { history } from 'lib/history';
import { CLIENTS_PAGE_ROUTE } from 'lib/routes';
import { FormattedMessage } from 'react-intl';

// relay
import { graphql, useFragment } from 'react-relay/hooks';
import { ClientEdit_client$key } from 'relay/artifacts/ClientEdit_client.graphql';
import { ClientEditUpdateMutation } from 'relay/artifacts/ClientEditUpdateMutation.graphql';
import { ClientEditDeleteMutation } from 'relay/artifacts/ClientEditDeleteMutation.graphql';

// ui
import { Flex, Text, Button, Input, Select } from '@domonda/ui';
import { DismissableAlert } from 'lib/DismissableAlert';

// form
import {
  Form,
  FormInputField,
  FormSelectField,
  FormLockedState,
  FormNumberField,
  FormSubmitErrorState,
  FormDateField,
} from '@domonda/react-form';
import { ClientSentBySelectOptions } from '../ClientSentBySelectOptions';
import { GenderSelectOptions } from '../../GenderSelectOptions';
import { ResolveOnTrigger } from 'lib/ResolveOnTrigger';
import { makeLink } from 'lib/makeLink';
import { usePromiseMutation } from 'relay/hooks';

export interface ClientEditProps {
  viewerIsAdmin: boolean;
  client: ClientEdit_client$key;
}

export const ClientEdit: React.FC<ClientEditProps> = (props) => {
  const { viewerIsAdmin, client: clientKey } = props;

  const client = useFragment(
    graphql`
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
    clientKey,
  );

  const updateClient = usePromiseMutation<ClientEditUpdateMutation>(graphql`
    mutation ClientEditUpdateMutation($input: UpdateClientInput!) {
      updateClient(input: $input) {
        client {
          ...ClientEdit_client
        }
      }
    }
  `);

  const deleteClient = usePromiseMutation<ClientEditDeleteMutation>(
    graphql`
      mutation ClientEditDeleteMutation($input: DeleteClientInput!) {
        deleteClient(input: $input) {
          client {
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
            {client.fullName}
          </Text>
          <Text size="medium" color="primary">
            {client.number}
          </Text>
        </Flex>
        <Flex item flex={1}>
          <div />
        </Flex>
        {viewerIsAdmin && (
          <Flex item>
            <ResolveOnTrigger
              promise={deleteClient}
              params={{ variables: { input: { rowId: client.rowId } } }}
              onResolve={() => history.push(CLIENTS_PAGE_ROUTE)}
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
        )}
      </Flex>
      <Flex item>
        <Form
          defaultValues={{
            ...client,
            dateOfBirth: new Date(client.dateOfBirth),
          }}
          onSubmit={({
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
            updateClient({
              variables: {
                input: {
                  rowId,
                  address,
                  city,
                  dateOfBirth: dateOfBirth.toISOString(),
                  discrete,
                  email,
                  firstName,
                  gender,
                  lastName,
                  number,
                  sentBy,
                  telephone,
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
            <Flex item container spacing="tiny">
              <Flex item flex={1}>
                <FormNumberField path="number" scale={0} thousandsSeparator={''} required>
                  {({ inputProps }) => (
                    <Input {...inputProps} autoFocus label={<FormattedMessage id="NUMBER" />} />
                  )}
                </FormNumberField>
              </Flex>
              <Flex item minWidth={212} maxWidth={212}>
                <FormSelectField path="sentBy" required>
                  {({ selectProps }) => (
                    <Select {...selectProps} label={<FormattedMessage id="SENT_BY" />}>
                      <ClientSentBySelectOptions disableEmptyOption />
                    </Select>
                  )}
                </FormSelectField>
              </Flex>
            </Flex>
            <Flex item container spacing="tiny" wrap>
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
                  <FormInputField path="telephone" required>
                    {({ inputProps }) => (
                      <Input {...inputProps} label={<FormattedMessage id="TELEPHONE" />} />
                    )}
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
                    {({ inputProps }) => (
                      <Input {...inputProps} label={<FormattedMessage id="ADDRESS" />} />
                    )}
                  </FormInputField>
                </Flex>
                <Flex item flex={0.6}>
                  <FormInputField path="city" required>
                    {({ inputProps }) => (
                      <Input {...inputProps} label={<FormattedMessage id="CITY" />} />
                    )}
                  </FormInputField>
                </Flex>
              </Flex>
            </Flex>
            <Flex item container justify="flex-end" spacing="tiny">
              <Flex item>
                <Flex item>
                  <Button component={makeLink({ to: CLIENTS_PAGE_ROUTE + '/create' })}>
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
