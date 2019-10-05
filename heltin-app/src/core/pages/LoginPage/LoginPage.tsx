/**
 *
 * LoginPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';

// relay
import { authenticateMutation } from 'relay/mutations/Authenticate';
import { handleJwtToken } from 'relay/client/session';

// ui
import { Flex, Button, TextField, ErrInline } from '@domonda/ui';
import { Form, FormInputField, FormSubmitErrorState } from '@domonda/react-form';

// assets
import BHIDAPALogo from 'assets/BHIDAPA-logo-90x90.png';

export type LoginPageProps = {};

export const LoginPage: React.FC<LoginPageProps> = () => {
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
            <Flex container direction="column" spacing={1}>
              <Flex item style={{ textAlign: 'center' }}>
                <img src={BHIDAPALogo} alt="BHIDAPA" />
              </Flex>
              <Flex item>
                <FormInputField path="email" required>
                  {({ inputProps }) => (
                    <TextField {...inputProps} label="E-Mail" type="email" autoFocus />
                  )}
                </FormInputField>
              </Flex>
              <Flex item>
                <FormInputField path="password" required>
                  {({ inputProps }) => (
                    <TextField {...inputProps} label="Password" type="password" />
                  )}
                </FormInputField>
              </Flex>
              <Flex item>
                <FormSubmitErrorState>
                  {(error, { resetSubmitError }) =>
                    error && (
                      <ErrInline error={error} onClose={resetSubmitError} disableCloseAutoFocus />
                    )
                  }
                </FormSubmitErrorState>
              </Flex>
            </Flex>
            <Flex item container justify="flex-end" align="center" spacing={1}>
              <Flex item>
                <Button variant="text" size="sm">
                  Forgot password?
                </Button>
              </Flex>
              <Flex item>
                <Button type="submit" variant="contained" color="primary">
                  Login
                </Button>
              </Flex>
            </Flex>
          </Form>
        </Flex>
      </Flex>
    </>
  );
};
