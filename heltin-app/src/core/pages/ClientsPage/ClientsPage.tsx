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
import { ClientsCreatePage } from './ClientsCreatePage';
import { ClientsDetailPage } from './ClientsDetailPage';
import { ClientsOverviewPage } from './ClientsOverviewPage';

export type ClientsPageProps = RouteComponentProps;

const ClientsPage: React.FC<ClientsPageProps> = (props) => {
  const { match } = props;
  return (
    <Box padding="large">
      <Switch>
        <Route path={`${match.path}/create`} component={ClientsCreatePage} />
        <Route path={`${match.path}/:rowId`} component={ClientsDetailPage} />
        <Route path={match.path} component={ClientsOverviewPage} />
      </Switch>
    </Box>
  );
};

const ComposedClientsPage = ClientsPage;
export { ComposedClientsPage as ClientsPage };
