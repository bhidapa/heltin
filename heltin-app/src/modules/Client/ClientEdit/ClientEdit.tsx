/**
 *
 * ClientEdit
 *
 */

import React, { useCallback } from 'react';
import { history } from 'lib/history';
import { CLIENTS_PAGE_ROUTE } from 'lib/routes';
import { FormattedMessage } from 'react-intl';

// relay
import { graphql, createFragmentContainer } from 'react-relay';
import { ClientEdit_client } from 'relay/artifacts/ClientEdit_client.graphql';
import { updateClientMutation } from 'relay/mutations/UpdateClient';
import { deleteClientMutation } from 'relay/mutations/DeleteClient';

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

  const submit = useCallback<
    FormSubmitHandler<Omit<ClientEdit_client, 'dateOfBirth'> & { dateOfBirth: Date }>
  >(
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
            ...client,
            dateOfBirth: new Date(client.dateOfBirth),
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
            <Flex item container spacing="tiny">
              <Flex item flex={1}>
                <FormNumberField
                  path="number"
                  allowDecimal={false}
                  includeThousandsSeparator={false}
                  required
                >
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
            <Flex item container spacing="tiny">
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
