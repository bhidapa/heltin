/**
 *
 * FourOhFourPage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

// ui
import { Flex, FlexProps } from '@domonda/ui/Flex';
import { Text } from '@domonda/ui/Text';

export const FourOhFourPage: React.FC<FlexProps> = () => (
  <Flex container align="center" justify="center">
    <Flex item style={{ textAlign: 'center' }}>
      <Text size="medium" weight="medium">
        <FormattedMessage id="OOPS" />
      </Text>
      <Text color="gray30">
        <FormattedMessage id="PAGE_NOT_FOUND" />
      </Text>
    </Flex>
  </Flex>
);
