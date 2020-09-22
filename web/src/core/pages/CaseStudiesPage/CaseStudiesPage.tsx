/**
 *
 * CaseStudiesPage
 *
 */

import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';

// parts
import { CaseStudiesTreatmentDetailPage } from './CaseStudiesTreatmentDetailPage';
import { CaseStudiesTreatmentCreatePage } from './CaseStudiesTreatmentCreatePage';
import { CaseStudiesConclusionDetailPage } from './CaseStudiesConclusionDetailPage';
import { CaseStudiesConclusionCreatePage } from './CaseStudiesConclusionCreatePage';
import { CaseStudiesDetailPage } from './CaseStudiesDetailPage';
import { FourOhFourPage } from '../FourOhFourPage';

export type CaseStudiesPageProps = RouteComponentProps;

const CaseStudiesPage: React.FC<CaseStudiesPageProps> = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route
        path={`${match.path}/:rowId/treatments/create`}
        component={CaseStudiesTreatmentCreatePage}
      />
      <Route
        path={`${match.path}/:caseStudyRowId/treatments/:caseStudyTreatmentRowId`}
        component={CaseStudiesTreatmentDetailPage}
      />
      <Route
        path={`${match.path}/:rowId/conclusions/create`}
        component={CaseStudiesConclusionCreatePage}
      />
      <Route
        path={`${match.path}/:caseStudyRowId/conclusions/:caseStudyConclusionRowId`}
        component={CaseStudiesConclusionDetailPage}
      />
      <Route exact path={`${match.path}/:rowId`} component={CaseStudiesDetailPage} />
      <Route path="*" component={FourOhFourPage} />
    </Switch>
  );
};

const ComposedCaseStudiesPage = CaseStudiesPage;
export { ComposedCaseStudiesPage as CaseStudiesPage };
