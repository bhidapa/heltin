/**
 *
 * LoginPage
 *
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// relay
import { authenticateMutation } from 'relay/mutations/Authenticate';
import { handleJwtToken, setSession } from 'relay/client/session';

// ui
import { Flex, Button, Input, Alert } from '@domonda/ui';
import { Form, FormInputField, FormSubmitErrorState } from '@domonda/react-form';

// assets
import BHIDAPALogo from 'assets/BHIDAPA-logo-90x90.png';

export type LoginPageProps = {};

export const LoginPage: React.FC<LoginPageProps> = () => {
  useEffect(() => setSession(null), []);
  return (
    <>
      <Helmet title="Login" />
      <Flex container justify="center" align="center">
        <Flex item>
          <Form<{ email: string | null; password: string | null }>
            defaultValues={{ email: null, password: null }}
            onSubmit={async ({ email, password }) => {
              const {
                authenticate: { jwtToken },
              } = await authenticateMutation({
                input: {
                  email: email || '',
                  password: password || '',
                },
              });

              if (!jwtToken) {
                throw new Error('Malformed authenticate response.');
              }

              handleJwtToken(jwtToken);
            }}
          >
            <Flex container direction="column" spacing="tiny">
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
                    error && <Alert message={error} onClose={resetSubmitError} />
                  }
                </FormSubmitErrorState>
              </Flex>
              <Flex item container justify="flex-end" align="center" spacing="tiny">
                <Flex item>
                  <Button variant="text">Forgot password?</Button>
                </Flex>
                <Flex item>
                  <Button type="submit" variant="primary">
                    Login
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Form>
        </Flex>
      </Flex>
    </>
  );
};
