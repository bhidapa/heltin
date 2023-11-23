/**
 *
 * ClientsCaseStudiesConclusionCreatePageBreadcrumb
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import clientsCaseStudiesConclusionCreatePageQuery, {
  ClientsCaseStudiesConclusionCreatePageQuery,
} from './__generated__/ClientsCaseStudiesConclusionCreatePageQuery.graphql';

export interface ClientsCaseStudiesConclusionCreatePageBreadcrumbProps {
  query: PreloadedQuery<ClientsCaseStudiesConclusionCreatePageQuery>;
}

export const ClientsCaseStudiesConclusionCreatePageBreadcrumb: React.FC<
  ClientsCaseStudiesConclusionCreatePageBreadcrumbProps
> = (props) => {
  const data = usePreloadedQuery(clientsCaseStudiesConclusionCreatePageQuery, props.query);
  if (!data.caseStudy) {
    throw new Error('Cannot create breadcrumb for missing case-study while concluding');
  }
  return (
    <FormattedMessage
      id="CONCLUDE_CASE_STUDY"
      values={{
        caseStudy: data.caseStudy.title,
      }}
    />
  );
};
