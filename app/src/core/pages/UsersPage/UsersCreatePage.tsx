/**
 *
 * UsersCreatePage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { graphql, usePreloadedQuery } from 'react-relay';
import { useMatch } from '@tanstack/react-location';
import { BackButton, Breadcrumbs, LocationGenerics } from 'core/location';
import { UserManage } from 'modules/User/UserManage';

export interface UsersCreatePageProps {}

export const UsersCreatePage: React.FC<UsersCreatePageProps> = () => {
  const match = useMatch<LocationGenerics>();

  const data = usePreloadedQuery(
    graphql`
      query UsersCreatePageQuery {
        viewer @required(action: THROW) {
          ...UserManage_viewer
        }
      }
    `,
    match.data.usersCreatePageQuery!,
  );

  return (
    <div className="container">
      <FormattedMessage id="NEW_USER">
        {([msg]) => <Helmet title={msg?.toString()} />}
      </FormattedMessage>

      <div className="row row-eq-spacing align-items-center">
        <div className="col-auto">
          <BackButton />
        </div>

        <div className="col">
          <Breadcrumbs rightAlign />
        </div>
      </div>

      <UserManage viewer={data.viewer} user={null} />
    </div>
  );
};
