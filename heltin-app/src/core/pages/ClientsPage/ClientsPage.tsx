/**
 *
 * ClientsPage
 *
 */

import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';

// parts
import { ClientsCreatePage } from './ClientsCreatePage';
import { ClientsDetailPage } from './ClientsDetailPage';
import { ClientsOverviewPage } from './ClientsOverviewPage';

export type ClientsPageProps = RouteComponentProps;

const ClientsPage: React.FC<ClientsPageProps> = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route path={`${match.path}/create`} component={ClientsCreatePage} />
      <Route path={`${match.path}/:rowId`} component={ClientsDetailPage} />
      <Route path={match.path} component={ClientsOverviewPage} />
    </Switch>
  );
};

const ComposedClientsPage = ClientsPage;
export { ComposedClientsPage as ClientsPage };
