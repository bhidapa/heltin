/**
 *
 * ClientsCaseStudiesConclusionCreatePage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { graphql, usePreloadedQuery } from 'react-relay';
import { useMatch } from '@tanstack/react-location';
import { NotFound } from 'lib/NotFound';
import { BackButton, Breadcrumbs, LocationGenerics } from 'core/location';
import { CaseStudyConclusionManage } from 'modules/CaseStudy/CaseStudyConclusionManage';

export interface ClientsCaseStudiesConclusionCreatePageProps {}

export const ClientsCaseStudiesConclusionCreatePage: React.FC<
  ClientsCaseStudiesConclusionCreatePageProps
> = () => {
  const match = useMatch<LocationGenerics>();

  const { caseStudy } = usePreloadedQuery(
    graphql`
      query ClientsCaseStudiesConclusionCreatePageQuery($caseStudyRowId: UUID!) {
        caseStudy: caseStudyByRowId(rowId: $caseStudyRowId) {
          title
          client: clientByClientRowId @required(action: THROW) {
            fullName
          }
          ...CaseStudyConclusionManage_caseStudy
        }
      }
    `,
    match.data.clientsCaseStudiesConclusionCreatePageQuery!,
  );

  if (!caseStudy) {
    return <NotFound />;
  }

  return (
    <div className="container">
      <FormattedMessage
        id="CONCLUDE_CASE_STUDY"
        values={{
          caseStudy: caseStudy.title,
        }}
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

      <CaseStudyConclusionManage caseStudy={caseStudy} conclusion={null} />

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
          <FormattedMessage id="PLEASE_SAVE_CONCLUSION_FIRST" />
        </p>
      </div>
    </div>
  );
};
