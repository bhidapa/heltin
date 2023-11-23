/**
 *
 * ClientsCaseStudiesConclusionDetailsPage
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
import { Files } from 'modules/Files';

export interface ClientsCaseStudiesConclusionDetailsPageProps {}

export const ClientsCaseStudiesConclusionDetailsPage: React.FC<
  ClientsCaseStudiesConclusionDetailsPageProps
> = () => {
  const match = useMatch<LocationGenerics>();

  const { caseStudy, conclusion } = usePreloadedQuery(
    graphql`
      query ClientsCaseStudiesConclusionDetailsPageQuery(
        $caseStudyRowId: UUID!
        $conclusionRowId: UUID!
      ) {
        caseStudy: caseStudyByRowId(rowId: $caseStudyRowId) {
          client: clientByClientRowId @required(action: THROW) {
            fullName
          }
          ...CaseStudyConclusionManage_caseStudy
        }
        conclusion: caseStudyConclusionByRowId(rowId: $conclusionRowId) @required(action: THROW) {
          rowId
          caseStudyRowId
          type
          concludedAt
          conclusionFiles: caseStudyConclusionFilesByCaseStudyConclusionRowId(
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
          ...CaseStudyConclusionManage_conclusion
        }
      }
    `,
    match.data.clientsCaseStudiesConclusionDetailsPageQuery!,
  );

  if (!caseStudy || !conclusion) {
    return <NotFound />;
  }
  if (conclusion.caseStudyRowId !== match.params.caseStudyRowId) {
    throw new Error('Case study does not belong to the conclusion');
  }

  return (
    <div className="container">
      <FormattedMessage id={conclusion.type}>
        {([msg]) => <Helmet title={`${caseStudy.client.fullName} - ${msg}`} />}
      </FormattedMessage>
      <div className="row row-eq-spacing align-items-center">
        <div className="col-auto">
          <BackButton />
        </div>

        <div className="col">
          <Breadcrumbs rightAlign />
        </div>
      </div>

      <CaseStudyConclusionManage caseStudy={caseStudy} conclusion={conclusion} />

      <div className="content">
        <hr />
      </div>

      <Files
        filesConnectionId={conclusion.conclusionFiles.__id}
        files={conclusion.conclusionFiles.nodes.map((node) => node.file)}
        conclusionRowId={conclusion.rowId}
      />
    </div>
  );
};
