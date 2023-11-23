/**
 *
 * ClientsCaseStudiesFormsFillPage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { graphql, usePreloadedQuery } from 'react-relay';
import { useMatch } from '@tanstack/react-location';
import { NotFound } from 'lib/NotFound';
import { BackButton, Breadcrumbs, LocationGenerics } from 'core/location';
import { FormManage } from 'modules/FormManage';

export const ClientsCaseStudiesFormsFillPage: React.FC = () => {
  const match = useMatch<LocationGenerics>();

  const { form } = usePreloadedQuery(
    graphql`
      query ClientsCaseStudiesFormsFillPageQuery($formRowId: UUID!) {
        form: formByRowId(rowId: $formRowId) {
          name
          ...FormManage_form
        }
      }
    `,
    match.data.clientsCaseStudiesFormsFillPageQuery!,
  );

  if (!form) {
    return <NotFound />;
  }

  return (
    <div className="container">
      <FormattedMessage id="FILL_FORM_FOR" values={{ name: form.name }}>
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

      <FormManage caseStudyRowId={match.params.caseStudyRowId} form={form} formResponse={null} />

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
          <FormattedMessage id="PLEASE_SAVE_FORM_FIRST" />
        </p>
      </div>
    </div>
  );
};
