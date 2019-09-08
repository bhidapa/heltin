/**
 *
 * FourOhFourPage
 *
 */

import React from 'react';

// ui
import { Flex, FlexProps } from '@domonda/ui/Flex';
import { Text } from '@domonda/ui/Text';

export const FourOhFourPage: React.FC<FlexProps> = () => (
  <Flex container align="center" justify="center">
    <Flex item style={{ textAlign: 'center' }}>
      <Text variant="title">Oh no!</Text>
      <Text color="textSecondary">Requested page not found</Text>
    </Flex>
  </Flex>
);
