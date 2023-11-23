/**
 *
 * ClientsCaseStudiesFormsResponsePage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { graphql, usePreloadedQuery } from 'react-relay';
import { useMatch } from '@tanstack/react-location';
import { NotFound } from 'lib/NotFound';
import { BackButton, Breadcrumbs, LocationGenerics } from 'core/location';
import { Files } from 'modules/Files';
import { FormManage } from 'modules/FormManage';

export const ClientsCaseStudiesFormsResponsePage: React.FC = () => {
  const match = useMatch<LocationGenerics>();

  const { formResponse } = usePreloadedQuery(
    graphql`
      query ClientsCaseStudiesFormsResponsePageQuery($formResponseRowId: UUID!) {
        formResponse: formResponseByRowId(rowId: $formResponseRowId) {
          rowId
          ...FormManage_formResponse
          form: formByFormRowId {
            name
            ...FormManage_form
          }
          formResponseFiles: formResponseFilesByFormResponseRowId(orderBy: [CREATED_AT_DESC]) {
            # see Files
            __id
            nodes {
              file: fileByFileRowId @required(action: THROW) {
                ...Files_files
              }
            }
          }
        }
      }
    `,
    match.data.clientsCaseStudiesFormsResponsePageQuery!,
  );

  if (!formResponse?.form) {
    return <NotFound />;
  }

  return (
    <div className="container">
      <Helmet title={formResponse.form.name} />
      <div className="row row-eq-spacing align-items-center">
        <div className="col-auto">
          <BackButton />
        </div>

        <div className="col">
          <Breadcrumbs rightAlign />
        </div>
      </div>

      <FormManage
        caseStudyRowId={match.params.caseStudyRowId}
        form={formResponse.form}
        formResponse={formResponse}
      />

      <div className="content">
        <hr />
      </div>

      <Files
        filesConnectionId={formResponse.formResponseFiles.__id}
        files={formResponse.formResponseFiles.nodes.map((node) => node.file)}
        formResponseRowId={formResponse.rowId}
      />
    </div>
  );
};
