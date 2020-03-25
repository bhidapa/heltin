/**
 *
 * index
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';

// polyfills
import 'lib/polyfills';

// router
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { environment } from 'relay/environment';

// styles
import { ThemeProvider } from '@domonda/ui/styles';
import { Baseline } from '@domonda/ui/Baseline';
import { theme } from 'theme';

// parts
import { Boundry } from 'lib/Boundry';
import { Example } from 'core/Example';

ReactDOM.render(
  <RelayEnvironmentProvider environment={environment}>
    <ThemeProvider theme={theme}>
      <Baseline />
      <Boundry>
        <Example />
      </Boundry>
    </ThemeProvider>
  </RelayEnvironmentProvider>,
  document.getElementById('root'),
);
