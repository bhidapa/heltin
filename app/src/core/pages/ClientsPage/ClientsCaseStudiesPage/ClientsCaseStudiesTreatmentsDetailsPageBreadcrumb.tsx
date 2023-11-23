/**
 *
 * ClientsCaseStudiesTreatmentsDetailsPageBreadcrumb
 *
 */
import React from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import clientsCaseStudiesTreatmentsDetailsPageQuery, {
  ClientsCaseStudiesTreatmentsDetailsPageQuery,
} from './__generated__/ClientsCaseStudiesTreatmentsDetailsPageQuery.graphql';

export interface ClientsCaseStudiesTreatmentsDetailsPageBreadcrumbProps {
  query: PreloadedQuery<ClientsCaseStudiesTreatmentsDetailsPageQuery>;
}

export const ClientsCaseStudiesTreatmentsDetailsPageBreadcrumb: React.FC<
  ClientsCaseStudiesTreatmentsDetailsPageBreadcrumbProps
> = (props) => {
  const data = usePreloadedQuery(clientsCaseStudiesTreatmentsDetailsPageQuery, props.query);
  if (!data.treatment) {
    throw new Error('Cannot create breadcrumb for missing treatment');
  }
  return <>{data.treatment.title}</>;
};
