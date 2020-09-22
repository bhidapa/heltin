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
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';

import { AppBarActionsQuery } from 'relay/artifacts/AppBarActionsQuery.graphql';

// icons
import { SignOutAltIcon } from 'lib/icons';

// ui
import { Flex, Text, Button } from '@domonda/ui';

export interface AppBarActionsProps {}

export const AppBarActions: React.FC<AppBarActionsProps> = () => {
  const { viewer } = useLazyLoadQuery<AppBarActionsQuery>(
    graphql`
      query AppBarActionsQuery {
        viewer {
          id
          email
        }
      }
    `,
    {},
  );

  if (!viewer) {
    return <Redirect to={LOGOUT_PAGE_ROUTE} />;
  }
  return (
    <Flex container spacing="tiny" align="center">
      <Flex item>
        <Text>{viewer.email}</Text>
      </Flex>
      <Flex item>
        <Button variant="text" color="secondary" component={makeLink({ to: LOGOUT_PAGE_ROUTE })}>
          <SignOutAltIcon />
        </Button>
      </Flex>
    </Flex>
  );
};
