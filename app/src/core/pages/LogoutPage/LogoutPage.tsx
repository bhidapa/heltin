/**
 *
 * LogoutPage
 *
 */
import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { graphql, useMutation } from 'react-relay';
import { useNavigate } from '@tanstack/react-location';

export interface LogoutPageProps {}

export const LogoutPage: React.FC<LogoutPageProps> = () => {
  const [logout] = useMutation(graphql`
    mutation LogoutPageMutation {
      logout
    }
  `);

  const navigate = useNavigate();

  useEffect(() => {
    logout({
      variables: {},
      updater: (store) => {
        store.invalidateStore();
        store.getRoot().setValue(null, 'viewer');
        navigate({ to: '/login', search: true, replace: true });
      },
    });
  }, []);

  return (
    <pre className="text-center text-muted">
      <FormattedMessage id="LOGGING_OUT" />
      ...
    </pre>
  );
};
