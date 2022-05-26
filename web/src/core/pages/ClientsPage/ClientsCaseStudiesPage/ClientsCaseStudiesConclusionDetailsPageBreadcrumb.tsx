/**
 *
 * ClientsCaseStudiesConclusionDetailsPageBreadcrumb
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';

import clientsCaseStudiesConclusionDetailsPageQuery, {
  ClientsCaseStudiesConclusionDetailsPageQuery,
} from './__generated__/ClientsCaseStudiesConclusionDetailsPageQuery.graphql';

export interface ClientsCaseStudiesConclusionDetailsPageBreadcrumbProps {
  query: PreloadedQuery<ClientsCaseStudiesConclusionDetailsPageQuery>;
}

export const ClientsCaseStudiesConclusionDetailsPageBreadcrumb: React.FC<
  ClientsCaseStudiesConclusionDetailsPageBreadcrumbProps
> = (props) => {
  const data = usePreloadedQuery(clientsCaseStudiesConclusionDetailsPageQuery, props.query);
  if (!data.conclusion) {
    throw new Error('Cannot create breadcrumb for missing conclusion');
  }
  return <FormattedMessage id={data.conclusion.type} />;
};
