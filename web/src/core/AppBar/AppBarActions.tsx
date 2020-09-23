/**
 *
 * AppBarActions
 *
 */

import React from 'react';
import { LOGOUT_PAGE_ROUTE } from 'lib/routes';
import { makeLink } from 'lib/makeLink';

// relay
import { graphql, useFragment } from 'react-relay/hooks';
import { AppBarActions_viewer$key } from 'relay/artifacts/AppBarActions_viewer.graphql';

// icons
import { SignOutAltIcon } from 'lib/icons';

// ui
import { Flex, Text, Button } from '@domonda/ui';

export interface AppBarActionsProps {
  viewer: AppBarActions_viewer$key;
}

export const AppBarActions: React.FC<AppBarActionsProps> = ({ viewer: viewerKey }) => {
  const viewer = useFragment(
    graphql`
      fragment AppBarActions_viewer on User {
        id
        email
      }
    `,
    viewerKey,
  );

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
