/**
 *
 * UsersDetailsPageBreadcrumb
 *
 */
import React from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import usersDetailsPageQuery, {
  UsersDetailsPageQuery,
} from './__generated__/UsersDetailsPageQuery.graphql';

export interface UsersDetailsPageBreadcrumbProps {
  query: PreloadedQuery<UsersDetailsPageQuery>;
}

export const UsersDetailsPageBreadcrumb: React.FC<UsersDetailsPageBreadcrumbProps> = (props) => {
  const data = usePreloadedQuery(usersDetailsPageQuery, props.query);
  if (!data.user) {
    throw new Error('Cannot create breadcrumb for missing user');
  }
  return <>{data.user.email}</>;
};
