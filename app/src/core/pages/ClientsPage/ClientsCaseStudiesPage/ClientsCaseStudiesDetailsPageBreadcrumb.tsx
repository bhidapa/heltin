/**
 *
 * ClientsCaseStudiesDetailsPageBreadcrumb
 *
 */
import React from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import clientsCaseStudiesDetailsPageQuery, {
  ClientsCaseStudiesDetailsPageQuery,
} from './__generated__/ClientsCaseStudiesDetailsPageQuery.graphql';

export interface ClientsCaseStudiesDetailsPageBreadcrumbProps {
  query: PreloadedQuery<ClientsCaseStudiesDetailsPageQuery>;
}

export const ClientsCaseStudiesDetailsPageBreadcrumb: React.FC<
  ClientsCaseStudiesDetailsPageBreadcrumbProps
> = (props) => {
  const data = usePreloadedQuery(clientsCaseStudiesDetailsPageQuery, props.query);
  if (!data.caseStudy) {
    throw new Error('Cannot create breadcrumb for missing case study');
  }
  return <>{data.caseStudy.title}</>;
};
