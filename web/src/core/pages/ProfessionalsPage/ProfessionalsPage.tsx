/**
 *
 * ProfessionalsPage
 *
 */

import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';

// parts
import { ProfessionalsCreatePage } from './ProfessionalsCreatePage';
import { ProfessionalsDetailPage } from './ProfessionalsDetailPage';
import { ProfessionalsOverviewPage } from './ProfessionalsOverviewPage';

export type ProfessionalsPageProps = RouteComponentProps;

export const ProfessionalsPage: React.FC<ProfessionalsPageProps> = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route path={`${match.path}/create`} component={ProfessionalsCreatePage} />
      <Route path={`${match.path}/:rowId`} component={ProfessionalsDetailPage} />
      <Route path={match.path} component={ProfessionalsOverviewPage} />
    </Switch>
  );
};
