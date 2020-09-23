/**
 *
 * LoginPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';

// relay
import { graphql, usePromiseMutation } from 'relay/hooks';
import { LoginPageMutation } from 'relay/artifacts/LoginPageMutation.graphql';

// ui
import { Flex, Button, Input } from '@domonda/ui';
import {
  Form,
  FormInputField,
  FormSubmitErrorState,
  FormSubmittingState,
} from '@domonda/react-form';
import { DismissableAlert } from 'lib/DismissableAlert';

// assets
import BHIDAPALogo from 'assets/BHIDAPA-logo-90x90.png';

export interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
  const login = usePromiseMutation<LoginPageMutation>(
    graphql`
      mutation LoginPageMutation($input: LoginInput!) {
        login(input: $input) {
          user {
            ...Root_viewer
          }
        }
      }
    `,
    {
      // set the resulting user to the root viewer as an indication of successful authorization
      updater: (store) => {
        store
          .getRoot()
          .setLinkedRecord(store.getRootField('login').getLinkedRecord('user'), 'viewer');
      },
    },
  );

  return (
    <>
      <Helmet title="Login" />
      <Flex container justify="center" align="center" fill>
        <Flex item>
          <Form<{ email: string | null; password: string | null }>
            defaultValues={{ email: null, password: null }}
            onSubmit={({ email, password }) =>
              login({
                variables: {
                  input: {
                    email: email || '',
                    password: password || '',
                  },
                },
              })
            }
          >
            <Flex container direction="column" spacing="tiny" style={{ width: 256 }}>
              <Flex item style={{ textAlign: 'center' }}>
                <img src={BHIDAPALogo} alt="BHIDAPA" />
              </Flex>
              <Flex item>
                <FormInputField path="email" required>
                  {({ inputProps }) => (
                    <Input {...inputProps} label="E-Mail" type="email" autoFocus />
                  )}
                </FormInputField>
              </Flex>
              <Flex item>
                <FormInputField path="password" required>
                  {({ inputProps }) => <Input {...inputProps} label="Password" type="password" />}
                </FormInputField>
              </Flex>
              <Flex item>
                <FormSubmitErrorState>
                  {(error, { resetSubmitError }) =>
                    error && <DismissableAlert message={error} onDismiss={resetSubmitError} />
                  }
                </FormSubmitErrorState>
              </Flex>
              <Flex item container justify="flex-end" align="center" spacing="tiny">
                <Flex item>
                  <FormSubmittingState>
                    {(submitting) => (
                      <Button type="submit" variant="primary" disabled={submitting}>
                        Login
                      </Button>
                    )}
                  </FormSubmittingState>
                </Flex>
              </Flex>
            </Flex>
          </Form>
        </Flex>
      </Flex>
    </>
  );
};
