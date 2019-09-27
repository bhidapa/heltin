/**
 *
 * AppBarActions
 *
 */

import React from 'react';
import { LOGOUT_PAGE_ROUTE } from 'lib/routes';
import { makeLink } from 'lib/makeLink';
import { Redirect } from 'react-router-dom';

// relay
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from 'lib/relay/environment';
import { AppBarActionsQuery } from 'lib/relay/artifacts/AppBarActionsQuery.graphql';

// icons
import { PowerIcon } from 'lib/icons';

// ui
import { Loading, Err, Flex, Text, IconButton } from '@domonda/ui';

export type AppBarActionsProps = {};

export const AppBarActions: React.FC<AppBarActionsProps> = () => {
  return (
    <QueryRenderer<AppBarActionsQuery>
      environment={environment}
      query={graphql`
        query AppBarActionsQuery {
          viewer {
            id
            email
          }
        }
      `}
      variables={{}}
      render={({ props, error, retry }) => {
        if (error) {
          return <Err error={error} onRetry={retry} />;
        }
        if (!props) {
          return <Loading />;
        }
        if (!props.viewer) {
          return <Redirect to={LOGOUT_PAGE_ROUTE} />;
        }
        return (
          <Flex container spacing={1} align="center">
            <Flex item>
              <Text color="textSecondary">{props.viewer.email}</Text>
            </Flex>
            <Flex item>
              <IconButton color="primary" component={makeLink({ to: LOGOUT_PAGE_ROUTE })}>
                <PowerIcon />
              </IconButton>
            </Flex>
          </Flex>
        );
      }}
    />
  );
};

export const ComposedAppBarActions = AppBarActions;
