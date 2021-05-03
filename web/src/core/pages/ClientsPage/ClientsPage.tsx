/**
 *
 * ClientsPage
 *
 */

import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';

// relay
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { ClientsPageQuery } from 'relay/artifacts/ClientsPageQuery.graphql';

// parts
import { ClientsCreatePage } from './ClientsCreatePage';
import { ClientsCreateCaseStudyPage } from './ClientsCreateCaseStudyPage';
import { ClientsDetailPage } from './ClientsDetailPage';
import { ClientsOverviewPage } from './ClientsOverviewPage';

export type ClientsPageProps = RouteComponentProps;

export const ClientsPage: React.FC<ClientsPageProps> = (props) => {
  const { match } = props;

  const { viewer } = useLazyLoadQuery<ClientsPageQuery>(
    graphql`
      query ClientsPageQuery {
        viewer {
          isAdmin
          isMentalHealthProfessional
        }
      }
    `,
    {},
  );

  return (
    <Switch>
      <Route path={`${match.path}/create`} component={ClientsCreatePage} />
      {(viewer!.isAdmin || viewer!.isMentalHealthProfessional) && (
        <Route
          path={`${match.path}/:rowId/create-case-study`}
          component={ClientsCreateCaseStudyPage}
        />
      )}
      <Route path={`${match.path}/:rowId`} component={ClientsDetailPage} />
      <Route path={match.path} component={ClientsOverviewPage} />
    </Switch>
  );
};
