/**
 *
 * index
 *
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { loadQuery, RelayEnvironmentProvider } from 'react-relay';
import { ErrBoundary } from 'lib/ErrBoundary';
import { ToastsContainer } from 'lib/toasts';
import { IntlProvider } from 'intl/IntlProvider';
import { messages } from 'intl/messages';
import { environment } from 'core/relay';
import { Root } from 'core/Root';
import rootQuery, { RootQuery } from 'core/Root/__generated__/RootQuery.graphql';

const rootQueryRef = loadQuery<RootQuery>(environment, rootQuery, {});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider defaultLocale="en" messages={messages}>
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
