/**
 *
 * index
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';

// router
import { Router } from 'react-router-dom';
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
    <IntlProvider defaultLocale="en" messages={messages}>
      <ThemeProvider theme={theme}>
        <Baseline />
        <Root />
      </ThemeProvider>
    </IntlProvider>
  </Router>,
  document.getElementById('root'),
);
