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
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from 'relay/environment';
import {ClientCreateQuery } from 'relay/artifacts/ClientCreateQuery.graphql';

// ui
import { Flex, Text, Button, Input, Select, Alert, Err, Loading } from '@domonda/ui';

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
    <Flex container direction="column" spacing="small">
      <Flex item>
        <Text size="large" weight="medium">
          Create client
        </Text>
      </Flex>
      <Flex item>
        <QueryRenderer<ClientCreateQuery>
          environment={environment}
          query={graphql`
            query ClientCreateQuery {
              nextAvailableClientNumber
            }
          `}
          variables={{}}
          render={({ props, error, retry }) => {
            if (error) {
              return <Err error={error} onRetry={retry} />;
            }
            if (!props) {
              return <Loading />;
            }
            return (
              <Form
                defaultValues={{
                  number: props.nextAvailableClientNumber,
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
                        {({ DateInput }) => (
                          <DateInput customInput={<Input label="Date of birth" />} />
                        )}
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
                          {({ inputProps }) => (
                            <Input {...inputProps} type="email" label="E-Mail" />
                          )}
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
                  <Flex item container justify="flex-end">
                    <Flex item>
                      <FormLockedState>
                        {(locked) => (
                          <Button type="submit" disabled={locked} variant="primary">
                            Create
                          </Button>
                        )}
                      </FormLockedState>
                    </Flex>
                  </Flex>
                </Flex>
              </Form>
            );
          }}
        />
      </Flex>
    </Flex>
  );
};
