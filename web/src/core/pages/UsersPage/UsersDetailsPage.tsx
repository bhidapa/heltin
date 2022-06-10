/**
 *
 * UsersDetailsPage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { graphql, usePreloadedQuery } from 'react-relay';

import { useMatch } from '@tanstack/react-location';

import { NotFound } from 'lib/NotFound';

import { BackButton, Breadcrumbs, LocationGenerics } from 'core/location';

import { UserManage } from 'modules/User/UserManage';

export interface UsersDetailsPageProps {}

export const UsersDetailsPage: React.FC<UsersDetailsPageProps> = () => {
  const match = useMatch<LocationGenerics>();

  const { viewer, user } = usePreloadedQuery(
    graphql`
      query UsersDetailsPageQuery($rowId: UUID!) {
        viewer @required(action: THROW) {
          ...UserManage_viewer
        }
        user: userByRowId(rowId: $rowId) {
          email
          ...UserManage_user
        }
      }
    `,
    match.data.usersDetailsPageQuery!,
  );

  if (!user) {
    return <NotFound />;
  }

  return (
    <div className="container">
      <Helmet title={user.email} />

      <div className="row row-eq-spacing align-items-center">
        <div className="col-auto">
          <BackButton />
        </div>

        <div className="col">
          <Breadcrumbs rightAlign />
        </div>
      </div>

      <UserManage viewer={viewer} user={user} />
    </div>
  );
};
