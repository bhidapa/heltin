/**
 *
 * TherapistsDetailsPageBreadcrumb
 *
 */
import React from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import clientsDetailsPageQuery, {
  TherapistsDetailsPageQuery,
} from './__generated__/TherapistsDetailsPageQuery.graphql';

export interface TherapistsDetailsPageBreadcrumbProps {
  query: PreloadedQuery<TherapistsDetailsPageQuery>;
}

export const TherapistsDetailsPageBreadcrumb: React.FC<TherapistsDetailsPageBreadcrumbProps> = (
  props,
) => {
  const data = usePreloadedQuery(clientsDetailsPageQuery, props.query);
  if (!data.therapist) {
    throw new Error('Cannot create breadcrumb for missing therapist');
  }
  return <>{data.therapist.fullName}</>;
};
