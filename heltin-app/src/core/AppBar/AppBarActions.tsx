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
import { environment } from 'relay/environment';
import { AppBarActionsQuery } from 'relay/artifacts/AppBarActionsQuery.graphql';

// icons
import { SignOutAltIcon } from 'lib/icons';

// ui
import { Loading, Err, Flex, Text, Button } from '@domonda/ui';

export interface AppBarActionsProps {}

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
          <Flex container spacing="tiny" align="center">
            <Flex item>
              <Text>{props.viewer.email}</Text>
            </Flex>
            <Flex item>
              <Button
                variant="text"
                color="secondary"
                component={makeLink({ to: LOGOUT_PAGE_ROUTE })}
              >
                <SignOutAltIcon />
              </Button>
            </Flex>
          </Flex>
        );
      }}
    />
  );
};

export const ComposedAppBarActions = AppBarActions;
