/**
 *
 * LogoutPage
 *
 */

import React, { useEffect } from 'react';

// auth
import { logout } from 'lib/auth';

// ui
import { Flex } from '@domonda/ui/Flex';
import { Text } from '@domonda/ui/Text';

export type LogoutPageProps = {};

export const LogoutPage: React.FC<LogoutPageProps> = () => {
  useEffect(() => logout(), []);
  return (
    <Flex container justify="center" align="center">
      <Flex item>
        <Text color="primary" variant="title">
          Logging out...
        </Text>
      </Flex>
    </Flex>
  );
};

export const ComposedLogoutPage = LogoutPage;
