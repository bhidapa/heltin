/**
 *
 * ClientsCaseStudiesTreatmentsDetailsPage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { graphql, usePreloadedQuery } from 'react-relay';
import { useMatch } from '@tanstack/react-location';
import { NotFound } from 'lib/NotFound';
import { BackButton, Breadcrumbs, LocationGenerics } from 'core/location';
import { CaseStudyTreatmentManage } from 'modules/CaseStudy/CaseStudyTreatmentManage';
import { Files } from 'modules/Files';

export interface ClientsCaseStudiesTreatmentsDetailsPageProps {}

export const ClientsCaseStudiesTreatmentsDetailsPage: React.FC<
  ClientsCaseStudiesTreatmentsDetailsPageProps
> = () => {
  const match = useMatch<LocationGenerics>();

  const { caseStudy, treatment } = usePreloadedQuery(
    graphql`
      query ClientsCaseStudiesTreatmentsDetailsPageQuery(
        $caseStudyRowId: UUID!
        $treatmentRowId: UUID!
      ) {
        caseStudy: caseStudyByRowId(rowId: $caseStudyRowId) {
          ...CaseStudyTreatmentManage_caseStudy
        }
        treatment: caseStudyTreatmentByRowId(rowId: $treatmentRowId) @required(action: THROW) {
          id
          rowId
          title
          caseStudyRowId
          caseStudy: caseStudyByCaseStudyRowId @required(action: THROW) {
            title
            client: clientByClientRowId @required(action: THROW) {
              fullName
            }
          }
          treatmentFiles: caseStudyTreatmentFilesByCaseStudyTreatmentRowId(
            orderBy: CREATED_AT_DESC
          ) {
            # see Files
            __id
            nodes {
              file: fileByFileRowId @required(action: THROW) {
                ...Files_files
              }
            }
          }
          ...CaseStudyTreatmentManage_treatment
        }
      }
    `,
    match.data.clientsCaseStudiesTreatmentsDetailsPageQuery!,
  );

  if (!caseStudy || !treatment) {
    return <NotFound />;
  }
  if (treatment.caseStudyRowId !== match.params.caseStudyRowId) {
    throw new Error('Case study does not belong to the treatment');
  }

  return (
    <div className="container">
      <Helmet
        title={`${treatment.caseStudy.client.fullName} - ${treatment.caseStudy.title} - ${treatment.title}`}
      />
      <div className="row row-eq-spacing align-items-center">
        <div className="col-auto">
          <BackButton />
        </div>

        <div className="col">
          <Breadcrumbs rightAlign />
        </div>
      </div>

      <CaseStudyTreatmentManage caseStudy={caseStudy} treatment={treatment} />

      <div className="content">
        <hr />
      </div>

      <Files
        filesConnectionId={treatment.treatmentFiles.__id}
        files={treatment.treatmentFiles.nodes.map((node) => node.file)}
        treatmentRowId={treatment.rowId}
      />
    </div>
  );
};
