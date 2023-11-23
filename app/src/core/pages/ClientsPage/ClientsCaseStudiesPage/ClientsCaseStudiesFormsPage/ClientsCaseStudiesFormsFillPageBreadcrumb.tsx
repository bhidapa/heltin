/**
 *
 * ClientsCaseStudiesFormsFillPageBreadcrumb
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import clientsCaseStudiesFormsFillPageQuery, {
  ClientsCaseStudiesFormsFillPageQuery,
} from './__generated__/ClientsCaseStudiesFormsFillPageQuery.graphql';

export interface ClientsCaseStudiesFormsFillPageBreadcrumbProps {
  query: PreloadedQuery<ClientsCaseStudiesFormsFillPageQuery>;
}

export const ClientsCaseStudiesFormsFillPageBreadcrumb: React.FC<
  ClientsCaseStudiesFormsFillPageBreadcrumbProps
> = (props) => {
  const data = usePreloadedQuery(clientsCaseStudiesFormsFillPageQuery, props.query);
  if (!data.form) {
    throw new Error('Cannot create breadcrumb for missing fillable form');
  }
  return <FormattedMessage id="FILL_FORM_FOR" values={{ name: data.form.name }} />;
};
