/**
 *
 * CaseStudiesPage
 *
 */

import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';

// parts
import { CaseStudiesDetailPage } from './CaseStudiesDetailPage';

export type CaseStudiesPageProps = RouteComponentProps;

const CaseStudiesPage: React.FC<CaseStudiesPageProps> = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route path={`${match.path}/:rowId`} component={CaseStudiesDetailPage} />
    </Switch>
  );
};

const ComposedCaseStudiesPage = CaseStudiesPage;
export { ComposedCaseStudiesPage as CaseStudiesPage };
