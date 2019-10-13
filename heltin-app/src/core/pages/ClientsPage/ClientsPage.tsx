/**
 *
 * ClientsPage
 *
 */

import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';

// ui
import { Box } from '@domonda/ui';

// parts
import { ClientsOverviewPage } from './ClientsOverviewPage';

export type ClientsPageProps = RouteComponentProps;

const ClientsPage: React.FC<ClientsPageProps> = (props) => {
  const { match } = props;
  return (
    <Box padding={5}>
      <Switch>
        <Route path={match.path} component={ClientsOverviewPage} />
      </Switch>
    </Box>
  );
};

const ComposedClientsPage = ClientsPage;
export { ComposedClientsPage as ClientsPage };
