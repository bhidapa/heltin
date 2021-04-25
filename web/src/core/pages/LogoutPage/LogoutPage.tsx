/**
 *
 * LogoutPage
 *
 */

import React, { useEffect } from 'react';

// relay
import { useRelayEnvironment } from 'react-relay';
import { graphql, useTransitionMutation } from 'relay/hooks';

// ui
import { Flex } from '@domonda/ui/Flex';
import { Text } from '@domonda/ui/Text';

export interface LogoutPageProps {}

export const LogoutPage: React.FC<LogoutPageProps> = () => {
  const env = useRelayEnvironment();

  const [logout] = useTransitionMutation(
    graphql`
      mutation LogoutPageMutation {
        logout
      }
    `,
    {
      // unset the root viewer as an indication of logout
      updater: (store) => {
        store.getRoot().setValue(null, 'viewer');
      },
    },
  );

  useEffect(() => {
    // @ts-expect-error: `invalidateStore` is not typed
    env.commitUpdate((store) => store.invalidateStore());

    logout({ variables: {} });
  }, []);

  return (
    <Flex container justify="center" align="center">
      <Flex item>
        <Text size="medium" weight="medium">
          Logging out...
        </Text>
      </Flex>
    </Flex>
  );
};
