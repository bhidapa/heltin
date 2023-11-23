/**
 *
 * ClientsDetailsPageBreadcrumb
 *
 */
import React from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import clientsDetailsPageQuery, {
  ClientsDetailsPageQuery,
} from './__generated__/ClientsDetailsPageQuery.graphql';

export interface ClientsDetailsPageBreadcrumbProps {
  query: PreloadedQuery<ClientsDetailsPageQuery>;
}

export const ClientsDetailsPageBreadcrumb: React.FC<ClientsDetailsPageBreadcrumbProps> = (
  props,
) => {
  const data = usePreloadedQuery(clientsDetailsPageQuery, props.query);
  if (!data.client) {
    throw new Error('Cannot create breadcrumb for missing client');
  }
  return <>{data.client.fullName}</>;
};
