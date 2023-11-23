/**
 *
 * ClientsCaseStudiesTreatmentsCreatePage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { graphql, usePreloadedQuery } from 'react-relay';
import { useMatch } from '@tanstack/react-location';
import { NotFound } from 'lib/NotFound';
import { BackButton, Breadcrumbs, LocationGenerics } from 'core/location';
import { CaseStudyTreatmentManage } from 'modules/CaseStudy/CaseStudyTreatmentManage';

export interface ClientsCaseStudiesTreatmentsCreatePageProps {}

export const ClientsCaseStudiesTreatmentsCreatePage: React.FC<
  ClientsCaseStudiesTreatmentsCreatePageProps
> = () => {
  const match = useMatch<LocationGenerics>();

  const { caseStudy } = usePreloadedQuery(
    graphql`
      query ClientsCaseStudiesTreatmentsCreatePageQuery($caseStudyRowId: UUID!) {
        caseStudy: caseStudyByRowId(rowId: $caseStudyRowId) {
          client: clientByClientRowId @required(action: THROW) {
            fullName
          }
          ...CaseStudyTreatmentManage_caseStudy
        }
      }
    `,
    match.data.clientsCaseStudiesTreatmentsCreatePageQuery!,
  );

  if (!caseStudy) {
    return <NotFound />;
  }

  return (
    <div className="container">
      <FormattedMessage
        id="NEW_CASE_STUDY_TREATMENT_FOR"
        values={{ name: caseStudy.client.fullName }}
      >
        {([msg]) => <Helmet title={msg?.toString()} />}
      </FormattedMessage>

      <div className="row row-eq-spacing align-items-center">
        <div className="col-auto">
          <BackButton />
        </div>

        <div className="col">
          <Breadcrumbs rightAlign />
        </div>
      </div>

      <CaseStudyTreatmentManage caseStudy={caseStudy} treatment={null} />

      <div className="content">
        <hr />
      </div>

      <div className="content">
        <h4 className="content-title">
          <FormattedMessage id="FILES" />
        </h4>

        <p className="text-muted">
          <i className="fa-solid fa-triangle-exclamation"></i>
          &nbsp;
          <FormattedMessage id="PLEASE_SAVE_TREATMENT_FIRST" />
        </p>
      </div>
    </div>
  );
};
