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

// polyfills
import 'lib/polyfills';

// intl
import { IntlProvider } from 'lib/intl/IntlProvider';
import { messages } from 'core/translations/messages';

// styles
import { ThemeProvider } from '@domonda/ui/styles';
import { Baseline } from '@domonda/ui/Baseline';
import { theme } from 'theme';

// parts
import { Root } from 'core/Root';

ReactDOM.render(
  <Router history={history}>
    <QueryParamsProvider history={history}>
      <IntlProvider defaultLocale="hr" messages={messages}>
        <ThemeProvider theme={theme}>
          <Baseline />
          <Root />
        </ThemeProvider>
      </IntlProvider>
    </QueryParamsProvider>
  </Router>,
  document.getElementById('root'),
);
