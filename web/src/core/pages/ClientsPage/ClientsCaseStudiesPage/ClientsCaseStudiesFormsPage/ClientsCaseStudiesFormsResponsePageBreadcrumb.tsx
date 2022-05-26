/**
 *
 * ClientsCaseStudiesFormsResponsePageBreadcrumb
 *
 */
import React from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';

import clientsCaseStudiesFormsResponsePageQuery, {
  ClientsCaseStudiesFormsResponsePageQuery,
} from './__generated__/ClientsCaseStudiesFormsResponsePageQuery.graphql';

export interface ClientsCaseStudiesFormsResponsePageBreadcrumbProps {
  query: PreloadedQuery<ClientsCaseStudiesFormsResponsePageQuery>;
}

export const ClientsCaseStudiesFormsResponsePageBreadcrumb: React.FC<
  ClientsCaseStudiesFormsResponsePageBreadcrumbProps
> = (props) => {
  const data = usePreloadedQuery(clientsCaseStudiesFormsResponsePageQuery, props.query);
  if (!data.formResponse?.form) {
    throw new Error('Cannot create breadcrumb for missing form response');
  }
  return <>{data.formResponse.form.name}</>;
};
