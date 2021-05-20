/**
 *
 * index
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';

// router
import { Router } from 'react-router-dom';
import { QueryParamsProvider } from '@domonda/query-params';
import { history } from 'lib/history';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// relay
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { environment } from 'relay/environment';

// intl
import { IntlProvider } from 'lib/intl/IntlProvider';
import { messages } from 'core/translations/messages';

// styles
import { ThemeProvider } from '@domonda/ui/styles';
import { Baseline } from '@domonda/ui/Baseline';
import { theme } from 'theme';

// parts
import { Boundary } from 'lib/Boundary';
import { Root } from 'core/Root';

// find root and add class
const root = document.getElementById('root');
if (!root) {
  throw new Error('root mountpoint not found');
}

ReactDOM.createRoot(root).render(
  <ThemeProvider theme={theme}>
    <Baseline />
    <Boundary>
      <Router history={history}>
        <HelmetProvider>
          <Helmet titleTemplate="%s | heltin" />
          <QueryParamsProvider history={history}>
            <RelayEnvironmentProvider environment={environment}>
              <IntlProvider defaultLocale="hr" messages={messages}>
                <Root />
              </IntlProvider>
            </RelayEnvironmentProvider>
          </QueryParamsProvider>
        </HelmetProvider>
      </Router>
    </Boundary>
  </ThemeProvider>,
);
