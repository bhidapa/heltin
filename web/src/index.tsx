/**
 *
 * index
 *
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RelayEnvironmentProvider, loadQuery } from 'react-relay';

import { ErrBoundary } from 'lib/ErrBoundary';
import { ToastsContainer } from 'lib/toasts';

import { IntlProvider } from 'intl/IntlProvider';
import { messages } from 'intl/translations/messages';

import { Root } from 'core/Root';
import rootQuery, { RootQuery } from 'core/Root/__generated__/RootQuery.graphql';
import { environment } from 'core/relay';

const rootQueryRef = loadQuery<RootQuery>(environment, rootQuery, {});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider defaultLocale="hr" messages={messages}>
      <ErrBoundary>
        <HelmetProvider>
          <Helmet titleTemplate="%s | heltin" />
          <RelayEnvironmentProvider environment={environment}>
            <ToastsContainer />
            <Root query={rootQueryRef} />
          </RelayEnvironmentProvider>
        </HelmetProvider>
      </ErrBoundary>
    </IntlProvider>
  </React.StrictMode>,
);
