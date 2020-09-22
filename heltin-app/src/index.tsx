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

ReactDOM.render(
  <Router history={history}>
    <QueryParamsProvider history={history}>
      <RelayEnvironmentProvider environment={environment}>
        <IntlProvider defaultLocale="hr" messages={messages}>
          <ThemeProvider theme={theme}>
            <Boundary>
              <Baseline />
              <Root />
            </Boundary>
          </ThemeProvider>
        </IntlProvider>
      </RelayEnvironmentProvider>
    </QueryParamsProvider>
  </Router>,
  document.getElementById('root'),
);
