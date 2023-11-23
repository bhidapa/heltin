/**
 *
 * LoginPage
 *
 */
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { graphql } from 'react-relay';
import { useNavigate, useSearch } from '@tanstack/react-location';
import { usePromiseMutation } from 'lib/relay';
import { errorToast } from 'lib/toasts';
import { LocationGenerics } from 'core/location';
import Banner from 'assets/banner_800x400.png';
import { LoginPageMutation } from './__generated__/LoginPageMutation.graphql';

export interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
  const [login] = usePromiseMutation<LoginPageMutation>(graphql`
    mutation LoginPageMutation($input: LoginInput!) {
      login(input: $input) {
        user {
          ...Root_viewer
        }
      }
    }
  `);

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const params = useSearch<LocationGenerics>();
  const navigate = useNavigate<LocationGenerics>();

  return (
    <div className="m-auto w-600 mw-full">
      <div className="card p-0">
        <img src={Banner} alt="heltin banner" className="img-fluid rounded-top" />

        <div className="content">
          <h2 className="content-title mb-0">
            <FormattedMessage id="WELCOME" />
          </h2>

          <p className="text-muted mt-0">
            <FormattedMessage id="LOG_IN_DESCRIPTION" values={{ heltin: <b>heltin</b> }} />
          </p>

          <form
            onSubmit={handleSubmit(async (values) => {
              try {
                await login({
                  variables: {
                    input: values,
                  },
                  updater: (store) => {
                    // set the resulting user to the root viewer because the login was a success
                    const loggedInUser = store.getRootField('login').getLinkedRecord('user');
                    store.getRoot().setLinkedRecord(loggedInUser, 'viewer');
                  },
                });
                navigate({ to: params.returnTo || '/' });
              } catch (err) {
                errorToast(err as Error);
              }
            })}
          >
            <div className="form-group">
              <label htmlFor="email" className="required">
                E-Mail
              </label>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa-solid fa-circle-user"></i>
                  </span>
                </div>
                <FormattedMessage id="ENTER_YOUR_EMAIL">
                  {([msg]) => (
                    <input
                      {...register('email')}
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder={msg?.toString() + '...'}
                      required
                    />
                  )}
                </FormattedMessage>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="required">
                <FormattedMessage id="PASSWORD" />
              </label>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa-solid fa-key"></i>
                  </span>
                </div>
                <FormattedMessage id="ENTER_YOUR_PASSWORD">
                  {([msg]) => (
                    <input
                      {...register('password')}
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder={msg?.toString() + '...'}
                      required
                    />
                  )}
                </FormattedMessage>
              </div>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={formState.isSubmitting}
                aria-disabled={formState.isSubmitting}
              >
                <i className="fa-solid fa-right-to-bracket" />
                &nbsp;
                <FormattedMessage id="LOG_IN" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
